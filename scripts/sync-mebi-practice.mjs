import { load } from "cheerio";
import { rename, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceUrl = "https://kerimhoca.com/mebi-lgs-deneme-sinavlari/";
const officialVerificationUrl =
  "https://tegm.meb.gov.tr/www/mebi039de-lgs039ye-hazirlik-surecinin-son-turkiye-geneli-denemesi-basladi/icerik/1282";
const outputPath = path.join(
  process.cwd(),
  "src",
  "data",
  "mebi-practice.generated.json"
);

function toDirectDownloadUrl(href) {
  const url = new URL(href);
  const pathMatch = url.pathname.match(/\/file\/d\/([^/]+)/);
  const fileId = url.searchParams.get("id") ?? pathMatch?.[1];

  if (!fileId) {
    throw new Error(`Google Drive dosya kimliği bulunamadı: ${href}`);
  }

  const downloadUrl = new URL("https://drive.usercontent.google.com/download");
  downloadUrl.searchParams.set("id", fileId);
  downloadUrl.searchParams.set("export", "download");
  downloadUrl.searchParams.set("confirm", "t");
  return downloadUrl.toString();
}

const response = await fetch(sourceUrl, {
  headers: {
    "user-agent": "MatematikAkademiResourceSync/3.0 (+https://www.matematik-akademi.com/)",
  },
});

if (!response.ok) {
  throw new Error(`MEBİ deneme listesi ${response.status} döndü.`);
}

const $ = load(await response.text());
const exams = [];
const headingPattern = /MEBİ LGS Deneme Sınavı\s*[–-]\s*(\d+)/i;

$("p").each((_, paragraph) => {
  const match = $(paragraph).text().replace(/\s+/g, " ").match(headingPattern);
  if (!match) return;

  const links = {};
  let cursor = $(paragraph).closest(".elementor-element").next();

  while (cursor.length && Object.keys(links).length < 3) {
    if (headingPattern.test(cursor.text())) break;

    cursor.find('a[href*="drive.google.com"]').each((__, anchor) => {
      const label = $(anchor).text().replace(/\s+/g, " ").trim().toLocaleUpperCase("tr-TR");
      const sourceHref = $(anchor).attr("href")?.replaceAll("&amp;", "&");
      if (!sourceHref) return;
      const href = toDirectDownloadUrl(sourceHref);

      if (label.includes("SÖZEL")) links.verbalHref = href;
      if (label.includes("SAYISAL")) links.quantitativeHref = href;
      if (label.includes("CEVAP")) links.answerKeyHref = href;
    });
    cursor = cursor.next();
  }

  const number = Number(match[1]);
  if (!links.verbalHref || !links.quantitativeHref || !links.answerKeyHref) {
    throw new Error(`${number}. denemede sözel, sayısal veya cevap anahtarı eksik.`);
  }

  exams.push({ number, ...links });
});

exams.sort((first, second) => first.number - second.number);
const expectedNumbers = Array.from({ length: 12 }, (_, index) => index + 1);
if (
  exams.length !== expectedNumbers.length ||
  exams.some((exam, index) => exam.number !== expectedNumbers[index])
) {
  throw new Error(`Beklenen 1-12 deneme yerine şu sıra bulundu: ${exams.map(({ number }) => number)}`);
}

const output = {
  sourceUrl,
  sourceLabel: "Kerim Hoca",
  sourceType: "Harici kaynak arşivi",
  academicYear: "2025-2026",
  officialVerificationUrl,
  officialVerificationNote:
    "MEB, 2025-2026 LGS hazırlık süreci için toplam 12 Türkiye geneli deneme planlandığını ve 12. denemenin tamamlandığını duyurdu.",
  lastVerified: new Date().toISOString().slice(0, 10),
  exams,
};
const temporaryPath = `${outputPath}.tmp`;
await writeFile(temporaryPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
await rename(temporaryPath, outputPath);
console.log(`Güncellendi: ${path.relative(process.cwd(), outputPath)} (${exams.length} deneme)`);
