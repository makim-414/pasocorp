import type { Metadata } from "next";
import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import AboutContent from "./AboutContent";
import GalleryAboutContent from "./GalleryAboutContent";
import { getSiteMode } from "@/lib/site-mode";

export async function generateMetadata(): Promise<Metadata> {
  // pasogallery.com renders the gallery about page: keep its SEO on its own origin
  if ((await headers()).get("x-site-mode") === "pasogallery") {
    const title = "About — Paso Gallery";
    const description = "서울 종로 한옥 전시 공간에서 신진 작가 발굴과 브랜드 협업을 이어온 현대미술 갤러리, Paso Gallery를 소개합니다.";
    return {
      title: { absolute: title },
      description,
      alternates: { canonical: "https://pasogallery.com/about" },
      openGraph: { title, description, url: "https://pasogallery.com/about" },
    };
  }
  return {
    title: "About — PASO",
    description: "PASO — art as an asset class. Investment advisory, gallery operations, IP licensing, and proprietary auction data, founded by Min Sung Kim (Forbes 30 Under 30).",
    openGraph: {
      title: "About — PASO",
      description: "Art as an asset class. PASO connects investment advisory, gallery operations, IP licensing, and 15.8M-record auction data.",
    },
  };
}

export default async function AboutPage() {
  const siteMode = await getSiteMode();

  // aboutpaso.com → standalone layout
  if (siteMode === "aboutpaso") {
    return (
      <div className="bg-black min-h-screen">
        <StandaloneNav
          siteName="About PASO"
          homeHref="/"
          links={[
            { label: "Our Story", href: "#story" },
            { label: "Team", href: "#team" },
            { label: "Contact", href: "/contact" },
          ]}
          accentColor="#e5e5e5"
        />
        <AboutContent />
        <StandaloneFooter
          siteName="PASO"
          address="서울 성북구 삼선교로23가길 72"
          addressDetail="인터블루 1층"
          instagram="https://www.instagram.com/pasoartcenter"
        />
      </div>
    );
  }

  // pasogallery.com (or localhost via cookie override) → gallery-specific layout
  if (siteMode === "pasogallery") {
    // On real pasogallery.com domain we get header-based siteMode; on localhost the cookie
    // override drives it, in which case home anchors should point back to the slug route
    const onStandaloneDomain = (await headers()).get("x-site-mode") === "pasogallery";
    const home = onStandaloneDomain ? "/" : "/brands/paso-gallery";
    const contactHref = onStandaloneDomain ? "/contact" : "/gallery-contact";
    return (
      <div className="bg-black min-h-screen">
        <StandaloneNav
          siteName="Paso Gallery"
          homeHref={home}
          links={[
            { label: "Exhibitions", href: `${home === "/" ? "" : home}#exhibitions` },
            { label: "Spaces", href: "/spaces" },
            { label: "About", href: "/about" },
            { label: "Request", href: contactHref, isButton: true },
          ]}
          accentColor="#e5e5e5"
        />
        <GalleryAboutContent />
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

  // pasocorp.com → full corporate layout
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <AboutContent />
      <Footer />
    </div>
  );
}
