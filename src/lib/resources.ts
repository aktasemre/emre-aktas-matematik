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

export type ResourceGuidance = {
  context: string;
  includes: string[];
  usage: string;
  teacherNote: string;
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
  guidance: ResourceGuidance;
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
];

export function getArchiveResource(id: string) {
  return archiveResources.find((resource) => resource.id === id);
}

export function getResourceHub(slug: string) {
  return resourceHubs.find((hub) => hub.slug === slug);
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
