import type { MetadataRoute } from "next";

import { seoPages } from "@/data/seoPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kalkandoctor.com";

  const seoUrls: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...seoUrls,
  ];
}