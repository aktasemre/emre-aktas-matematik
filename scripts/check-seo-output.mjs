import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const root = process.cwd();
const appOutput = path.join(root, ".next", "server", "app");
const canonicalOrigin = "https://www.matematik-akademi.com";
const ignoredHtmlNames = new Set(["_global-error.html", "_not-found.html"]);
const requiredRedirects = new Map([
  ["/:path*", "https://www.matematik-akademi.com/:path*"],
  [
    "/blog/basaksehir-lgs-matematik-basari-rehberi",
    "/basaksehir-lgs-matematik-calisma-rehberi",
  ],
  ["/kaynaklar/8-sinif", "/kaynaklar/lgs"],
  ["/kaynaklar/tyt", "/kaynaklar/yks#tyt"],
  ["/kaynaklar/ayt", "/kaynaklar/yks#ayt"],
]);
const redirectedSitemapPaths = [
  "/kaynaklar/8-sinif",
  "/kaynaklar/tyt",
  "/kaynaklar/ayt",
];

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) return collectHtmlFiles(entryPath);
      if (entry.name.endsWith(".html") && !ignoredHtmlNames.has(entry.name)) {
        return [entryPath];
      }

      return [];
    }),
  );

  return files.flat();
}

const htmlFiles = await collectHtmlFiles(appOutput);
const titles = new Map();
const canonicals = new Map();
let jsonLdBlocks = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const $ = cheerio.load(html);
  const title = $("title").text().trim();
  const canonical = $('link[rel="canonical"]').attr("href") ?? "";

  assert.ok(title, `${path.relative(root, file)}: title eksik`);
  assert.ok(
    canonical.startsWith(canonicalOrigin),
    `${path.relative(root, file)}: www canonical eksik (${canonical})`,
  );
  assert.equal($("h1").length, 1, `${path.relative(root, file)}: tam bir H1 olmalı`);
  assert.ok(
    !titles.has(title),
    `${path.relative(root, file)}: title ${titles.get(title)} ile aynı`,
  );
  assert.ok(
    !canonicals.has(canonical),
    `${path.relative(root, file)}: canonical ${canonicals.get(canonical)} ile aynı`,
  );

  titles.set(title, file);
  canonicals.set(canonical, file);

  for (const element of $('script[type="application/ld+json"]').toArray()) {
    assert.doesNotThrow(
      () => JSON.parse($(element).html() ?? ""),
      `${path.relative(root, file)}: JSON-LD geçersiz`,
    );
    jsonLdBlocks += 1;
  }
}

const sitemap = await readFile(path.join(appOutput, "sitemap.xml.body"), "utf8");
const sitemapUrls = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1]);

assert.equal(sitemapUrls.length, 39, "sitemap beklenen 39 kanonik URL'yi içermeli");
assert.ok(
  sitemapUrls.includes(
    `${canonicalOrigin}/basaksehir-lgs-matematik-calisma-rehberi`,
  ),
  "yeni LGS rehberi sitemap'te olmalı",
);
assert.doesNotMatch(sitemap, /<lastmod>/, "doğrulanmamış lastmod üretilmemeli");

for (const redirectedPath of redirectedSitemapPaths) {
  assert.ok(
    !sitemapUrls.includes(`${canonicalOrigin}${redirectedPath}`),
    `${redirectedPath} sitemap'te olmamalı`,
  );
}

const routesManifest = JSON.parse(
  await readFile(path.join(root, ".next", "routes-manifest.json"), "utf8"),
);

for (const [source, destination] of requiredRedirects) {
  const redirect = routesManifest.redirects.find(
    (candidate) =>
      candidate.source === source && candidate.destination === destination,
  );

  assert.ok(redirect, `${source} yönlendirmesi build çıktısında eksik`);
  assert.equal(redirect.statusCode, 308, `${source} kalıcı 308 olmalı`);
}

const robots = await readFile(path.join(appOutput, "robots.txt.body"), "utf8");
assert.match(robots, /User-Agent: \*/);
assert.match(robots, /Allow: \//);
assert.match(robots, /Sitemap: https:\/\/www\.matematik-akademi\.com\/sitemap\.xml/);

console.log(
  `${htmlFiles.length} statik sayfa, ${sitemapUrls.length} sitemap URL'si ve ${jsonLdBlocks} JSON-LD bloğu doğrulandı.`,
);
