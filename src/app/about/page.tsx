import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import AboutContent from "./AboutContent";
import GalleryAboutContent from "./GalleryAboutContent";
import { getSiteMode } from "@/lib/site-mode";

export const metadata: Metadata = {
  title: "About — PASO",
  description: "PASO — art as an asset class. Investment advisory, gallery operations, IP licensing, and proprietary auction data, founded by Min Sung Kim (Forbes 30 Under 30).",
  openGraph: {
    title: "About — PASO",
    description: "Art as an asset class. PASO connects investment advisory, gallery operations, IP licensing, and 15.8M-record auction data.",
  },
};

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
          accentColor="#b8960b"
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

  // pasogallery.com → gallery-specific layout
  if (siteMode === "pasogallery") {
    return (
      <div className="bg-black min-h-screen">
        <StandaloneNav
          siteName="Paso Gallery"
          homeHref="/"
          links={[
            { label: "Exhibitions", href: "/#exhibitions" },
            { label: "Spaces", href: "/#space" },
            { label: "About", href: "/about" },
            { label: "Request", href: "/contact", isButton: true },
          ]}
          accentColor="#b8960b"
        />
        <GalleryAboutContent />
        <StandaloneFooter
          siteName="Paso Gallery"
          address="92, Seonggyungwan-ro, Jongno-gu"
          addressDetail="Seoul, Hanok Building"
          instagram="https://www.instagram.com/pasogallery"
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
