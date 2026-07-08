import type { MetadataRoute } from "next";
import { headers } from "next/headers";

// Host-aware web app manifest: the same route serves every standalone domain.
// The middleware skips dotted paths (its matcher excludes ".*\\."), so it never
// sets x-site-mode here; branch on the Host header instead, like sitemap/robots.
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const host = (await headers()).get("host") || "pasocorp.com";

  if (host.includes("pasogallery.com")) {
    return {
      name: "Paso Gallery",
      short_name: "Paso Gallery",
      description: "서울 종로구 한옥에 자리한 현대미술 갤러리. 신진 작가 발굴부터 브랜드 협업까지.",
      start_url: "/",
      display: "standalone",
      background_color: "#0a0a0a",
      theme_color: "#0a0a0a",
      lang: "ko",
      icons: [
        { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
        { src: "/apple-icon", type: "image/png", sizes: "180x180" },
      ],
    };
  }

  return {
    name: "PASO — Art as an Asset Class",
    short_name: "PASO",
    description: "데이터 기반 미술 자산 전략. 미술품 투자 자문, 갤러리 운영, 아트 컨설팅.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0a0a0a",
    lang: "ko",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
