import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import SpacesContent from "./SpacesContent";
import GalleryJsonLd from "@/components/GalleryJsonLd";
import { getSiteMode } from "@/lib/site-mode";
import { headers } from "next/headers";

export async function generateMetadata() {
  // pasogallery.com is a standalone domain: keep its SEO on its own origin
  if ((await headers()).get("x-site-mode") === "pasogallery") {
    const title = "Spaces — Paso Gallery";
    const description = "A hanok gallery in Jongno-gu, Seoul. Two exhibition rooms — Light Room and Dark Room — each with its own atmosphere.";
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
  // pasocorp.com renders /spaces inside the corporate chrome (it lives in the
  // corporate nav), so rental inquiries have a home on the corporate site too.
  return {
    title: "Spaces — PASO",
    description: "A hanok gallery in Jongno-gu, Seoul. Exhibition rooms and private-event rentals in a traditional Korean space at 92 Sungkyunkwan-ro.",
    alternates: { canonical: "/spaces" },
    openGraph: {
      title: "Spaces — PASO",
      description: "A hanok gallery in Jongno-gu, Seoul. Exhibition rooms and private-event rentals.",
      url: "https://pasocorp.com/spaces",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function SpacesPage() {
  // pasogallery.com (or the gallery flow on localhost via cookie) keeps the
  // standalone gallery chrome; pasocorp.com renders the corporate chrome so
  // rental inquiries have a home on the corporate site too.
  const siteMode = await getSiteMode();

  if (siteMode === "pasogallery") {
    // On the real pasogallery.com domain "/" is home and /contact is the gallery
    // variant; on localhost (cookie-based gallery flow) route back into the brand
    // pages so users don't leak out to corp pages.
    const onStandaloneDomain = (await headers()).get("x-site-mode") === "pasogallery";
    const navLinks = [
      { label: "Exhibitions", href: onStandaloneDomain ? "/#exhibitions" : "/brands/paso-gallery#exhibitions" },
      { label: "Spaces", href: "/spaces" },
      { label: "About", href: "/about" },
      { label: "Request", href: onStandaloneDomain ? "/contact" : "/gallery-contact", isButton: true },
    ];
    return (
      <div className="bg-black min-h-screen">
        <GalleryJsonLd />
        <StandaloneNav
          siteName="Pasogallery"
          homeHref={onStandaloneDomain ? "/" : "/brands/paso-gallery"}
          links={navLinks}
          accentColor="#e5e5e5"
        />
        <SpacesContent />
        <StandaloneFooter
          siteName="Pasogallery"
          address="92, Seonggyungwan-ro, Jongno-gu"
          addressDetail="Seoul, Hanok Building"
          instagram="https://www.instagram.com/pasogallery"
          email="info@pasogallery.com"
        />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <SpacesContent />
      <Footer />
    </div>
  );
}
