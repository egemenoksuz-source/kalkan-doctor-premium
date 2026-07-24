import type { MetadataRoute } from "next";
import { seoPages } from "@/data/seoPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kalkandoctor.com";
  const lastModified = new Date();

  const homePage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...homePage, ...servicePages];
}