import { load } from "cheerio";
import { readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "src", "data", "resources.json");
const outputPath = path.join(root, "src", "data", "resource-links.generated.json");
const userAgent = "MatematikAkademiResourceSync/2.0 (+https://www.matematik-akademi.com/)";
const dryRun = process.argv.includes("--dry-run");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const existingOutput = JSON.parse(await readFile(outputPath, "utf8"));
const existingById = new Map(
  existingOutput.resources.map((resource) => [resource.id, resource])
);

function normalizeUrl(rawHref, sourceUrl) {
  if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("javascript:")) {
    return null;
  }

  try {
    return new URL(rawHref.replaceAll("&amp;", "&"), sourceUrl).href;
  } catch {
    return null;
  }
}

function classifyLink(href) {
  const url = new URL(href);
  const pathname = url.pathname.toLocaleLowerCase("tr-TR");

  if (pathname.endsWith(".pdf") || pathname.includes(".pdf.")) return "document";
  if (["youtube.com", "www.youtube.com", "youtu.be"].includes(url.hostname)) return "video";
  if (url.hostname === "mebi.eba.gov.tr") return "platform";
  return null;
}

function preserveOsymPdfSource(resource) {
  if (resource.provider !== "ÖSYM" || classifyLink(resource.href) !== "document") {
    return null;
  }

  const existingResource = existingById.get(resource.id);
  if (!existingResource) {
    throw new Error(`${resource.id}: korunacak mevcut ÖSYM bağlantıları bulunamadı.`);
  }

  const actions = existingResource.actions.filter((action) => {
    if (action.kind !== "document" || classifyLink(action.href) !== "document") {
      return false;
    }

    const url = new URL(action.href);
    return url.hostname.endsWith("osym.gov.tr") && /(?:tyt|ayt)/i.test(url.pathname);
  });
  const labels = actions.map(({ label }) => label);

  if (
    !labels.some((label) => label.includes("TYT")) ||
    !labels.some((label) => label.includes("AYT"))
  ) {
    throw new Error(`${resource.id}: korunacak TYT/AYT PDF ikilisi eksik.`);
  }

  return {
    id: resource.id,
    sourceUrl: resource.href,
    verifiedAt: existingResource.verifiedAt,
    actions,
  };
}

function cleanLabel(value) {
  return value.replace(/\s+/g, " ").replace(/\s*\|\s*/g, " ").trim();
}

function createLabel(text, kind, index, href) {
  const normalized = cleanLabel(text);
  const upper = normalized.toLocaleUpperCase("tr-TR");
  const pathname = decodeURIComponent(new URL(href).pathname);
  const year = pathname.match(/20\d{2}/)?.[0];
  const gradeTable = pathname.match(/mat(6|7|9|10|11)(?:_|\.pdf)/i);

  if (upper.includes("SAYISAL")) return kind === "video" ? "Sayısal çözüm" : "Sayısal PDF";
  if (upper.includes("SÖZEL")) return kind === "video" ? "Sözel çözüm" : "Sözel PDF";
  if (gradeTable) return `${gradeTable[1]}. sınıf matematik tablosu`;
  if (/lgs_mat_1/i.test(pathname)) return "8. sınıf matematik soru kitabı";
  if (/8matcalisma/i.test(pathname)) return "8. sınıf matematik çalışma kitabı";
  if (upper.includes("MATEMATİK")) return kind === "video" ? "Matematik çözümü" : "Matematik PDF";
  if (/tyt/i.test(pathname)) return `${year ?? ""} TYT soru kitapçığı`.trim();
  if (/ayt/i.test(pathname)) return `${year ?? ""} AYT soru kitapçığı`.trim();
  if (/lgs[_-]matematik/i.test(pathname)) return "8. sınıf matematik çalışma kitabı";
  if (/lgs[_-]mat|8mat/i.test(pathname)) return "8. sınıf matematik soru kitabı";
  if (/lgs[_-]turkce/i.test(pathname)) return "Türkçe çalışma kitabı";
  if (/lgs[_-]fen/i.test(pathname)) return "Fen çalışma kitabı";
  if (/lgs[_-]sozel/i.test(pathname)) return "Sözel dersler çalışma kitabı";
  if (upper.includes("ÇÖZÜM")) return normalized.slice(0, 48);
  if (upper.includes("CEVAP")) return "Cevap anahtarı";
  if (
    normalized &&
    normalized.length <= 48 &&
    !/^tıklayınız[.!]?$/i.test(normalized)
  ) {
    return normalized;
  }
  if (kind === "video") return `Çözüm videosu ${index + 1}`;
  if (kind === "platform") return "MEBİ'yi aç";
  return `PDF ${index + 1}`;
}

async function fetchHtml(url, id) {
  const response = await fetch(url, { headers: { "user-agent": userAgent } });
  if (!response.ok) throw new Error(`${id}: kaynak sayfa ${response.status} döndü.`);
  return response.text();
}

async function resolveShortUrl(href, id) {
  if (new URL(href).hostname !== "meb.ai") return href;

  const response = await fetch(href, {
    redirect: "follow",
    headers: { "user-agent": userAgent },
  });
  if (!response.ok) throw new Error(`${id}: ${href} ${response.status} döndü.`);
  return response.url;
}

async function scrapeResource(resource) {
  const html = await fetchHtml(resource.href, resource.id);
  const $ = load(html);
  const candidates = [];
  const hostname = new URL(resource.href).hostname;
  const contentSelector = hostname.endsWith("osym.gov.tr")
    ? ".row.content a[href], .osym-list-box-container a[href]"
    : ".article-body .content a[href]";

  function collectCandidates(dom, selector, baseUrl) {
    dom(selector).each((_, element) => {
    const href = normalizeUrl(dom(element).attr("href"), baseUrl);
    if (!href) return;

    const text = cleanLabel(
      [
        dom(element).text(),
        dom(element).closest("p, td").text(),
        dom(element).attr("title"),
        dom(element).find("img").attr("alt"),
      ]
        .filter(Boolean)
        .join(" ")
    );
    candidates.push({ href, text });
  });
  }

  collectCandidates($, contentSelector, resource.href);

  if (hostname.endsWith("osym.gov.tr")) {
    const detailPages = candidates.filter(({ href, text }) => {
      const url = new URL(href);
      return (
        url.hostname.endsWith("osym.gov.tr") &&
        url.href !== resource.href &&
        /TYT.*AYT|AYT.*TYT/i.test(text) &&
        !classifyLink(href)
      );
    });

    for (const detailPage of detailPages.slice(0, 1)) {
      const detailHtml = await fetchHtml(detailPage.href, resource.id);
      const detailDom = load(detailHtml);
      collectCandidates(
        detailDom,
        ".row.content a[href], .osym-list-box-container a[href]",
        detailPage.href
      );
    }
  }

  const resolved = await Promise.all(
    candidates.map(async (candidate) => ({
      ...candidate,
      href: await resolveShortUrl(candidate.href, resource.id),
    }))
  );
  const seen = new Set();
  const actions = [];

  for (const candidate of resolved) {
    const kind = classifyLink(candidate.href);
    if (!kind || seen.has(candidate.href)) continue;
    const pathname = decodeURIComponent(new URL(candidate.href).pathname);
    if (
      kind === "video" &&
      new URL(candidate.href).hostname.includes("youtube.com") &&
      !new URL(candidate.href).pathname.startsWith("/watch")
    ) {
      continue;
    }
    if (
      resource.id === "meb-basic-education-books" &&
      !/(?:6|7|8).*mat|mat.*(?:6|7|8)|lgs[_-]mat|8mat/i.test(pathname)
    ) {
      continue;
    }
    if (
      resource.id.includes("math-topic-distribution") &&
      !/mat(?:6|7|9|10|11)(?:_|\.pdf)/i.test(pathname)
    ) {
      continue;
    }
    if (
      resource.provider === "ÖSYM" &&
      !/\/YKS\/.*(?:tyt|ayt)/i.test(pathname)
    ) {
      continue;
    }
    seen.add(candidate.href);
    actions.push({
      label: createLabel(candidate.text, kind, actions.length, candidate.href),
      href: candidate.href,
      kind,
    });
  }

  return {
    id: resource.id,
    sourceUrl: resource.href,
    verifiedAt: new Date().toISOString().slice(0, 10),
    actions,
  };
}

const resources = [];
let preservedOsymPdfCount = 0;
for (const resource of manifest) {
  const preservedOsymResource = preserveOsymPdfSource(resource);
  if (preservedOsymResource) {
    resources.push(preservedOsymResource);
    preservedOsymPdfCount += 1;
    console.log(
      `${resource.id}: ${preservedOsymResource.actions.length} mevcut ÖSYM PDF bağlantısı korundu`
    );
    continue;
  }

  if (dryRun) {
    const existingResource = existingById.get(resource.id);
    if (!existingResource) {
      throw new Error(`${resource.id}: kuru çalıştırmada mevcut çıktı bulunamadı.`);
    }
    resources.push(existingResource);
    continue;
  }

  const hostname = new URL(resource.href).hostname;
  const canScrape = hostname.endsWith("meb.gov.tr") || hostname.endsWith("osym.gov.tr");

  if (!canScrape) {
    resources.push({
      id: resource.id,
      sourceUrl: resource.href,
      verifiedAt: new Date().toISOString().slice(0, 10),
      actions: [],
    });
    continue;
  }

  const scraped = await scrapeResource(resource);
  resources.push(scraped);
  console.log(`${resource.id}: ${scraped.actions.length} doğrudan bağlantı`);
}

const output = {
  generatedAt: new Date().toISOString(),
  resources,
};

if (dryRun) {
  console.log(
    `Kuru çalıştırma tamamlandı: ${preservedOsymPdfCount} ÖSYM PDF kaydı doğrulandı; dosya değiştirilmedi.`
  );
} else {
  const temporaryPath = `${outputPath}.tmp`;
  await writeFile(temporaryPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  await rename(temporaryPath, outputPath);
  console.log(`Güncellendi: ${path.relative(root, outputPath)}`);
}
