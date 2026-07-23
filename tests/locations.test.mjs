import assert from "node:assert/strict";
import test from "node:test";
import { locationPages } from "../src/lib/locations.ts";

const expectedLocations = [
  "Başakşehir",
  "Florya",
  "Bahçeşehir",
  "Göktürk",
  "Atakent",
  "Ispartakule",
];

test("bölge sayfaları hedeflenen altı konumu kapsıyor", () => {
  assert.deepEqual(
    locationPages.map((location) => location.name),
    expectedLocations,
  );
});

test("bölge URL ve meta içerikleri benzersiz", () => {
  assert.equal(new Set(locationPages.map((location) => location.slug)).size, locationPages.length);
  assert.equal(
    new Set(locationPages.map((location) => location.description)).size,
    locationPages.length,
  );
  assert.equal(new Set(locationPages.map((location) => location.intro)).size, locationPages.length);
});

test("her bölge sayfası yeterli yerel planlama bilgisi taşıyor", () => {
  for (const location of locationPages) {
    assert.match(location.slug, /^[a-z0-9-]+-matematik-ozel-ders$/);
    assert.ok(location.description.length <= 160, `${location.name} meta açıklaması çok uzun`);
    assert.ok(location.locationSummary.length >= 100, `${location.name} bölge özeti kısa`);
    assert.ok(location.planningNote.length >= 100, `${location.name} planlama notu kısa`);
    assert.equal(location.localPriorities.length, 3, `${location.name} yerel öncelikleri eksik`);
    assert.equal(
      new Set(location.localPriorities).size,
      location.localPriorities.length,
      `${location.name} yerel öncelikleri tekrarlı`,
    );
    assert.ok(location.nearbyAreas.length >= 4, `${location.name} yakın çevre bilgisi eksik`);
    assert.ok(location.localFaqQuestion.includes(location.name));
    assert.ok(location.localFaqAnswer.length >= 100, `${location.name} yerel SSS yanıtı kısa`);
  }
});
