import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const h = await headers();
  const host = h.get("host") || "pasocorp.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const base = `${protocol}://${host}`;
  const now = new Date();

  // artrader.io 전용 sitemap
  if (host.includes("artrader.io")) {
    return [
      { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
      { url: `${base}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${base}/search`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${base}/favorites`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    ];
  }

  // aboutpaso.com 전용 sitemap
  if (host.includes("aboutpaso.com")) {
    return [
      { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ];
  }

  // pasogallery.com 전용 sitemap
  if (host.includes("pasogallery.com")) {
    return [
      { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ];
  }

  // pasocorp.com 기본
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/brands/artrader`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/brands/paso-art-center`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/brands/paso-gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/brands/artledger-consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/brands/paso-agency`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
