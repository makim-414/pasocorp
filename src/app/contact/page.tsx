import type { Metadata } from "next";
import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import ContactContent from "./ContactContent";
import GalleryContactContent from "./GalleryContactContent";

export const metadata: Metadata = {
  title: "Contact — 파소(PASO)",
  description: "프로젝트 문의, 협업 제안. 파소(PASO)에 연락하세요.",
  openGraph: {
    title: "Contact — 파소(PASO)",
    description: "프로젝트 문의, 협업 제안. 파소(PASO)에 연락하세요.",
  },
};

export default async function ContactPage() {
  // Only render the gallery variant when on the REAL pasogallery.com domain
  // (middleware sets x-site-mode header). On localhost, the gallery contact
  // page lives at /gallery-contact — no cookie/site-mode fallback here.
  const onStandaloneGalleryDomain = (await headers()).get("x-site-mode") === "pasogallery";

  if (onStandaloneGalleryDomain) {
    return (
      <div className="bg-black min-h-screen">
        <StandaloneNav
          siteName="Paso Gallery"
          homeHref="/"
          links={[
            { label: "Exhibitions", href: "/#exhibitions" },
            { label: "Spaces", href: "/spaces" },
            { label: "About", href: "/about" },
            { label: "Request", href: "/contact", isButton: true },
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

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <ContactContent />
      <Footer />
    </div>
  );
}
