import type { Metadata } from "next";
import { headers } from "next/headers";
import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import SiteModeCookieSync from "@/components/SiteModeCookieSync";
import GalleryContactContent from "../contact/GalleryContactContent";
import GalleryJsonLd from "@/components/GalleryJsonLd";

export const metadata: Metadata = {
  title: { absolute: "Contact — Paso Gallery" },
  description: "전시 문의, 작가 협업 등 파소 갤러리에 연락하세요.",
  alternates: { canonical: "https://pasogallery.com/contact" },
  openGraph: {
    title: "Contact — Paso Gallery",
    description: "전시 문의, 작가 협업 등 파소 갤러리에 연락하세요.",
    url: "https://pasogallery.com/contact",
    siteName: "Paso Gallery",
    images: [{ url: "https://pasogallery.com/brands/paso-gallery-og.jpg", width: 1200, height: 630 }],
  },
};

export default async function GalleryContactPage() {
  const onStandaloneDomain = (await headers()).get("x-site-mode") === "pasogallery";
  const home = onStandaloneDomain ? "/" : "/brands/paso-gallery";
  const contactHref = onStandaloneDomain ? "/contact" : "/gallery-contact";
  const aboutHref = "/about";
  const spacesHref = "/spaces";

  return (
    <div className="bg-black min-h-screen">
      <GalleryJsonLd />
      {!onStandaloneDomain && <SiteModeCookieSync siteMode="pasogallery" />}
      <StandaloneNav
        siteName="Paso Gallery"
        homeHref={home}
        links={[
          { label: "Exhibitions", href: `${home === "/" ? "" : home}#exhibitions` },
          { label: "Spaces", href: spacesHref },
          { label: "About", href: aboutHref },
          { label: "Request", href: contactHref, isButton: true },
        ]}
        accentColor="#e5e5e5"
      />
      <GalleryContactContent />
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
