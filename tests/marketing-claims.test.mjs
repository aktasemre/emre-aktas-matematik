import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const sourceRoot = new URL("../src/", import.meta.url);
const sourceExtensions = new Set([".js", ".jsx", ".json", ".ts", ".tsx"]);
const blockedClaims = [
  { label: "1000+ öğrenci sayısı", pattern: /1000\s*\+/u },
  { label: "%98 başarı oranı", pattern: /(?:%\s*98|98\s*%)/u },
  { label: "kanıtlanmış başarı", pattern: /kanıtlanmış\s+başarı/iu },
  { label: "mutlu öğrenci", pattern: /mutlu\s+öğrenci/iu },
  { label: "doğrulanmamış puan şeması", pattern: /(?:aggregateRating|ratingValue|reviewCount)/u },
];

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const url = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);

      if (entry.isDirectory()) {
        return collectSourceFiles(url);
      }

      const extension = entry.name.slice(entry.name.lastIndexOf("."));
      return sourceExtensions.has(extension) ? [url] : [];
    }),
  );

  return files.flat();
}

test("yayımlanan kaynaklarda doğrulanmamış sosyal kanıt iddiası yok", async () => {
  const sourceFiles = await collectSourceFiles(sourceRoot);
  const violations = [];

  for (const file of sourceFiles) {
    const content = await readFile(file, "utf8");

    for (const claim of blockedClaims) {
      if (claim.pattern.test(content)) {
        violations.push(`${file.pathname.replace(sourceRoot.pathname, "src/")}: ${claim.label}`);
      }
    }
  }

  assert.deepEqual(
    violations,
    [],
    `Doğrulanmamış pazarlama iddiaları bulundu:\n${violations.join("\n")}`,
  );
});
