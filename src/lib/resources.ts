import generatedResourceLinks from "@/data/resource-links.generated.json";
import resourceManifest from "@/data/resources.json";

export type ResourceAudience = "LGS" | "Ara Sınıflar" | "YKS";

export type ResourceCategory =
  | "Örnek soru"
  | "Deneme"
  | "Çalışma kitabı"
  | "Konu kaynağı"
  | "Çıkmış sorular";

export type ResourceActionKind = "document" | "video" | "platform" | "source";

export type ResourceAction = {
  label: string;
  href: string;
  kind: ResourceActionKind;
};

type ResourceManifestItem = {
  id: string;
  audience: ResourceAudience;
  category: ResourceCategory;
  academicYear: string;
  published: string;
  provider: string;
  format: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
  actions?: ResourceAction[];
};

type GeneratedResourceEntry = {
  id: string;
  sourceUrl: string;
  verifiedAt: string;
  actions: ResourceAction[];
};

export type ArchiveResource = ResourceManifestItem & {
  lastVerified: string | null;
  actions: ResourceAction[];
};

export type ResourceHub = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  audience: ResourceAudience;
  keywords: string[];
};

const manifest = resourceManifest as ResourceManifestItem[];
const generated = generatedResourceLinks as {
  generatedAt: string | null;
  resources: GeneratedResourceEntry[];
};
const generatedById = new Map(generated.resources.map((entry) => [entry.id, entry]));

function deduplicateActions(actions: ResourceAction[]) {
  const seen = new Set<string>();

  return actions.filter((action) => {
    const key = action.href;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const archiveResources: ArchiveResource[] = manifest.map((resource) => {
  const generatedEntry = generatedById.get(resource.id);
  const sourceAction: ResourceAction = {
    label: resource.provider === "ÖSYM" ? "ÖSYM sayfası" : "Resmî kaynak",
    href: resource.href,
    kind: "source",
  };

  return {
    ...resource,
    lastVerified: generatedEntry?.verifiedAt ?? null,
    actions: deduplicateActions([
      ...(resource.actions ?? []),
      ...(generatedEntry?.actions ?? []),
      sourceAction,
    ]),
  };
});

export const resourceHubs: ResourceHub[] = [
  {
    slug: "lgs",
    eyebrow: "LGS kaynak merkezi",
    title: "MEB LGS örnek soruları, denemeleri ve çalışma kitapları",
    description:
      "8. sınıf ve LGS hazırlığı için MEB örnek sorularını, MEBİ denemelerini ve çalışma kitaplarını eğitim yılına göre inceleyin.",
    audience: "LGS",
    keywords: ["LGS", "8. sınıf", "MEB örnek sorular", "MEBİ deneme"],
  },
  {
    slug: "8-sinif",
    eyebrow: "8. sınıf kaynakları",
    title: "8. sınıf matematik ve LGS kaynakları",
    description:
      "8. sınıf matematik çalışmaları için resmî MEB LGS örnek sorularına, denemelere ve çalışma kitaplarına ulaşın.",
    audience: "LGS",
    keywords: ["8. sınıf matematik", "LGS", "MEB kaynakları"],
  },
  {
    slug: "ara-siniflar",
    eyebrow: "Ara sınıf kaynakları",
    title: "Ara sınıflar için MEB matematik kaynakları",
    description:
      "6, 7, 9, 10 ve 11. sınıf matematik çalışmalarında kullanılabilecek resmî MEB kaynaklarını inceleyin.",
    audience: "Ara Sınıflar",
    keywords: ["ara sınıf matematik", "MEB çalışma kitapları"],
  },
  {
    slug: "yks",
    eyebrow: "YKS kaynak merkezi",
    title: "TYT ve AYT matematik çıkmış soruları",
    description:
      "TYT ve AYT matematik hazırlığı için ÖSYM'nin yayımladığı geçmiş soru kitapçıklarına ve cevap anahtarlarına ulaşın.",
    audience: "YKS",
    keywords: ["YKS matematik", "TYT", "AYT", "ÖSYM çıkmış sorular"],
  },
  {
    slug: "tyt",
    eyebrow: "TYT kaynakları",
    title: "TYT matematik çıkmış soruları",
    description:
      "TYT matematik için ÖSYM'nin resmî geçmiş soru kitapçıklarını ve cevap anahtarlarını inceleyin.",
    audience: "YKS",
    keywords: ["TYT matematik", "TYT çıkmış sorular"],
  },
  {
    slug: "ayt",
    eyebrow: "AYT kaynakları",
    title: "AYT matematik çıkmış soruları",
    description:
      "AYT matematik için ÖSYM'nin resmî geçmiş soru kitapçıklarını ve cevap anahtarlarını inceleyin.",
    audience: "YKS",
    keywords: ["AYT matematik", "AYT çıkmış sorular"],
  },
];

export function getArchiveResource(id: string) {
  return archiveResources.find((resource) => resource.id === id);
}

export function getResourceHub(slug: string) {
  return resourceHubs.find((hub) => hub.slug === slug);
}

export function getResourceSuitability(resource: ArchiveResource) {
  if (resource.audience === "LGS") {
    return "8. sınıfta LGS hazırlığı yapan; soru tarzını, süre kullanımını ve konu eksiklerini görmek isteyen öğrenciler için uygundur.";
  }

  if (resource.audience === "YKS") {
    return "TYT ve AYT matematikte ÖSYM soru dilini incelemek ve deneme planını geçmiş sorularla desteklemek isteyen öğrenciler için uygundur.";
  }

  return "Okul matematiğinde konu tekrarı yapmak ve resmî çalışma sorularıyla temelini güçlendirmek isteyen ara sınıf öğrencileri için uygundur.";
}

export function getResourceUsage(resource: ArchiveResource) {
  if (resource.category === "Deneme") {
    return "Süre tutarak uygulayın. Sonuçtan sonra yanlışları konu eksiği, işlem hatası ve soru okuma hatası olarak ayırın.";
  }

  if (resource.category === "Çıkmış sorular") {
    return "Önce sınav koşullarında çözün; ardından cevap anahtarıyla kontrol edip tekrar eden soru yapılarını not alın.";
  }

  if (resource.category === "Çalışma kitabı" || resource.category === "Konu kaynağı") {
    return "Kaynağı baştan sona tüketmek yerine güncel konu planınıza uyan bölümleri seçin ve yanlışları sonraki çalışma oturumuna taşıyın.";
  }

  return "Kitapçığı süreli çözdükten sonra yalnızca doğru sayısına bakmayın; zorlandığınız soru türlerini ve eksik kazanımları işaretleyin.";
}

export function getResourceTags(resource: ArchiveResource) {
  return Array.from(
    new Set([
      resource.audience,
      resource.category,
      resource.academicYear,
      resource.audience === "LGS" ? "8. sınıf" : null,
      resource.audience === "YKS" ? "TYT" : null,
      resource.audience === "YKS" ? "AYT" : null,
    ].filter((tag): tag is string => Boolean(tag)))
  );
}

export const archivePrinciples = [
  {
    title: "Doğrudan belgeye götürür",
    description:
      "PDF veya çözüm bağlantısı resmî olarak erişilebildiğinde, duyuru sayfasına uğramadan doğrudan açılır.",
  },
  {
    title: "Kaynağı ve tarihi gösterir",
    description:
      "Her kayıt kaynak kurumu, eğitim yılı ve son bağlantı doğrulama bilgisiyle birlikte sunulur.",
  },
  {
    title: "Hedefe göre seçilir",
    description:
      "Kaynak seçimi sınıf düzeyi, hedef, konu eksiği ve çalışma temposuyla birlikte değerlendirilmelidir.",
  },
];

export const featuredResources = archiveResources.filter((resource) => resource.featured);

export const directDocumentCount = archiveResources.reduce(
  (count, resource) =>
    count + resource.actions.filter((action) => action.kind === "document").length,
  0
);
