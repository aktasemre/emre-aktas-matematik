import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
const manifest = await readJson(new URL("../src/data/resources.json", import.meta.url));
const generated = await readJson(
  new URL("../src/data/resource-links.generated.json", import.meta.url)
);
const mebi = await readJson(
  new URL("../src/data/mebi-practice.generated.json", import.meta.url)
);

test("kaynak kimlikleri benzersiz ve senkronizasyon çıktısıyla eşleşiyor", () => {
  const manifestIds = manifest.map(({ id }) => id);
  const generatedIds = generated.resources.map(({ id }) => id);

  assert.equal(new Set(manifestIds).size, manifestIds.length);
  assert.deepEqual(generatedIds.toSorted(), manifestIds.toSorted());
});

test("üretilen kaynak bağlantıları doğrulanmış ve tekrarsız", () => {
  for (const resource of generated.resources) {
    assert.match(resource.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
    const hrefs = resource.actions.map(({ href }) => href);
    const labels = resource.actions.map(({ label }) => label);
    assert.equal(new Set(hrefs).size, hrefs.length, `${resource.id}: tekrarlı bağlantı`);
    assert.equal(new Set(labels).size, labels.length, `${resource.id}: tekrarlı etiket`);

    for (const action of resource.actions) {
      assert.match(action.href, /^https:\/\//, `${resource.id}: HTTPS olmayan bağlantı`);
      assert.ok(action.label.trim(), `${resource.id}: etiketsiz bağlantı`);
      assert.doesNotMatch(action.href, /alte_fullmembership|BGYS|KYS\.pdf/i);
      assert.doesNotMatch(action.href, /youtube\.com\/channel/i);
    }
  }
});

test("son beş YKS kaydında doğrudan TYT ve AYT kitapçıkları var", () => {
  const yksResources = manifest.filter(({ provider }) => provider === "ÖSYM");
  assert.equal(yksResources.length, 5);

  for (const resource of yksResources) {
    const generatedResource = generated.resources.find(({ id }) => id === resource.id);
    const documents = generatedResource.actions.filter(({ kind }) => kind === "document");

    assert.equal(documents.length, 2, `${resource.id}: TYT/AYT ikilisi eksik`);
    assert.ok(documents.some(({ label }) => label.includes("TYT")));
    assert.ok(documents.some(({ label }) => label.includes("AYT")));
  }
});

test("MEBİ harici arşivi açıkça etiketli ve 12 deneme eksiksiz", () => {
  assert.equal(mebi.sourceType, "Harici kaynak arşivi");
  assert.equal(mebi.academicYear, "2025-2026");
  assert.match(mebi.lastVerified, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(mebi.exams.length, 12);
  assert.deepEqual(
    mebi.exams.map(({ number }) => number),
    Array.from({ length: 12 }, (_, index) => index + 1)
  );

  for (const exam of mebi.exams) {
    const links = [exam.verbalHref, exam.quantitativeHref, exam.answerKeyHref];
    assert.equal(new Set(links).size, 3, `${exam.number}. denemede bağlantı tekrarı`);
    links.forEach((href) => {
      const url = new URL(href);
      assert.equal(url.origin, "https://drive.usercontent.google.com");
      assert.equal(url.pathname, "/download");
      assert.ok(url.searchParams.get("id"));
      assert.equal(url.searchParams.get("export"), "download");
    });
  }
});

test("ara sınıf yazılı kaynakları hedeflenen beş sınıfı kapsıyor", () => {
  const tableResources = manifest.filter(({ id }) => id.includes("math-topic-distribution"));
  assert.equal(tableResources.length, 2);

  for (const resource of tableResources) {
    const generatedResource = generated.resources.find(({ id }) => id === resource.id);
    const labels = generatedResource.actions.map(({ label }) => label);

    for (const grade of ["6", "7", "9", "10", "11"]) {
      assert.ok(labels.some((label) => label.startsWith(`${grade}. sınıf`)));
    }
  }
});
