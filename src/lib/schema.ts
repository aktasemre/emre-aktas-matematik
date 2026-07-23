import { siteConfig } from "@/lib/site";

export const schemaIds = {
  website: `${siteConfig.url}/#website`,
  organization: `${siteConfig.url}/#organization`,
  teacher: `${siteConfig.url}/#emre-aktas`,
} as const;

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function buildBreadcrumbSchema(
  pageUrl: string,
  pageName: string,
  parent?: { name: string; url: string },
) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: siteConfig.url,
    },
  ];

  if (parent) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: parent.name,
      item: parent.url,
    });
  }

  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: pageName,
    item: pageUrl,
  });

  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items,
  };
}

export function buildTeacherSchema() {
  return {
    "@type": "Person",
    "@id": schemaIds.teacher,
    name: siteConfig.teacher.name,
    jobTitle: siteConfig.teacher.title,
    url: `${siteConfig.url}/hakkimda`,
    telephone: `+${siteConfig.contact.phoneE164}`,
    image: `${siteConfig.url}${siteConfig.teacher.profileImage}`,
    sameAs: [siteConfig.instagram.url],
    worksFor: { "@id": schemaIds.organization },
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    knowsAbout: ["LGS Matematik", "TYT Matematik", "AYT Matematik", "Ara Sınıf Matematik"],
  };
}

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": schemaIds.organization,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    founder: { "@id": schemaIds.teacher },
    sameAs: [siteConfig.instagram.url],
  };
}
