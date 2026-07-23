import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import nextConfig from "../next.config.ts";

const redirects = await nextConfig.redirects();
const resourceSource = await readFile(
  new URL("../src/lib/resources.ts", import.meta.url),
  "utf8",
);

function redirectFor(source) {
  return redirects.find((redirect) => redirect.source === source);
}

test("apex alan adı www adresine kalıcı olarak yönleniyor", () => {
  const redirect = redirectFor("/:path*");

  assert.ok(redirect);
  assert.equal(redirect.permanent, true);
  assert.equal(redirect.destination, "https://www.matematik-akademi.com/:path*");
  assert.deepEqual(redirect.has, [{ type: "host", value: "matematik-akademi.com" }]);
});

test("çakışan kaynak merkezleri tek kanonik URL altında birleşiyor", () => {
  const expected = new Map([
    ["/kaynaklar/8-sinif", "/kaynaklar/lgs"],
    ["/kaynaklar/tyt", "/kaynaklar/yks#tyt"],
    ["/kaynaklar/ayt", "/kaynaklar/yks#ayt"],
  ]);

  for (const [source, destination] of expected) {
    const redirect = redirectFor(source);

    assert.ok(redirect, `${source} yönlendirmesi eksik`);
    assert.equal(redirect.destination, destination);
    assert.equal(redirect.permanent, true);
  }

  for (const redirectedSlug of ["8-sinif", "tyt", "ayt"]) {
    assert.doesNotMatch(
      resourceSource,
      new RegExp(`slug:\\s*"${redirectedSlug}"`),
      `${redirectedSlug} statik kaynak merkezi olarak üretilmemeli`,
    );
  }
});

test("eski LGS blog sonucu güncel öğretmen rehberine yönleniyor", () => {
  const redirect = redirectFor("/blog/basaksehir-lgs-matematik-basari-rehberi");

  assert.ok(redirect);
  assert.equal(redirect.destination, "/basaksehir-lgs-matematik-calisma-rehberi");
  assert.equal(redirect.permanent, true);
});
