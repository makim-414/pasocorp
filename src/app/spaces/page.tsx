import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import SpacesContent from "./SpacesContent";
import SiteModeCookieSync from "@/components/SiteModeCookieSync";
import GalleryJsonLd from "@/components/GalleryJsonLd";
import { headers } from "next/headers";

export async function generateMetadata() {
  const title = "Spaces — Paso Gallery";
  const description = "A hanok gallery in Jongno-gu, Seoul. Two exhibition rooms — Light Room and Dark Room — each with its own atmosphere.";
  // pasogallery.com is a standalone domain: keep its SEO on its own origin
  if ((await headers()).get("x-site-mode") === "pasogallery") {
    const image = "https://pasogallery.com/brands/paso-gallery-og.jpg";
    return {
      title: { absolute: title },
      description,
      keywords: ["Paso Gallery", "파소갤러리", "종로 한옥 갤러리", "Space by PASO", "전시 공간 대관", "갤러리 대관", "서울 전시 공간"],
      alternates: { canonical: "https://pasogallery.com/spaces" },
      openGraph: { title, description, url: "https://pasogallery.com/spaces", siteName: "Paso Gallery", type: "website", locale: "ko_KR", images: [{ url: image, width: 1200, height: 630 }] },
      twitter: { card: "summary_large_image", title, description, images: [image] },
    };
  }
  return { title: { absolute: title }, description };
}

export default async function SpacesPage() {
  // True only when the middleware (real pasogallery.com domain) set the header.
  // We deliberately do NOT use getSiteMode() here because the cookie fallback
  // would also flip this to true on localhost and break the home link.
  const onStandaloneDomain = (await headers()).get("x-site-mode") === "pasogallery";
  // On the actual pasogallery domain "/" goes home; on localhost,
  // route home back into the brand site so users don't leak out to corp pages
  const homeHref = onStandaloneDomain ? "/" : "/brands/paso-gallery";
  const contactHref = onStandaloneDomain ? "/contact" : "/gallery-contact";
  const navLinks = [
    { label: "Exhibitions", href: onStandaloneDomain ? "/#exhibitions" : "/brands/paso-gallery#exhibitions" },
    { label: "Spaces", href: "/spaces" },
    { label: "About", href: "/about" },
    { label: "Request", href: contactHref, isButton: true },
  ];

  return (
    <div className="bg-black min-h-screen">
      <GalleryJsonLd />
      {!onStandaloneDomain && <SiteModeCookieSync siteMode="pasogallery" />}
      <StandaloneNav
        siteName="Paso Gallery"
        homeHref={homeHref}
        links={navLinks}
        accentColor="#e5e5e5"
      />
      <SpacesContent />
      <StandaloneFooter
        siteName="Paso Gallery"
        address="92, Seonggyungwan-ro, Jongno-gu"
        addressDetail="Seoul, Hanok Building"
        instagram="https://www.instagram.com/pasogallery"
          email="info@pasogallery.com"
      />
    </div>
  );
}
