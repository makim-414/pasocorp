import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pasocorp.com";
  const now = new Date();
  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/brands/artrader`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/brands/paso-art-center`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/brands/paso-gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/brands/artledger-consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/brands/paso-agency`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
