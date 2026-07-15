import type { MetadataRoute } from "next";
import { sitemapEntries } from "@/lib/content";
import { archiveResources, resourceHubs } from "@/lib/resources";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = sitemapEntries.map((path) => ({
    url: path ? `${siteConfig.url}/${path}` : siteConfig.url,
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.75 : 1,
  }));
  const hubPages: MetadataRoute.Sitemap = resourceHubs.map((hub) => ({
    url: `${siteConfig.url}/kaynaklar/${hub.slug}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));
  const resourcePages: MetadataRoute.Sitemap = archiveResources.map((resource) => ({
    url: `${siteConfig.url}/kaynaklar/${resource.id}`,
    lastModified: resource.lastVerified ?? undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...hubPages, ...resourcePages];
}
