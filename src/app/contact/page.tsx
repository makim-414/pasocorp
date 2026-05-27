import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import ContactContent from "./ContactContent";
import GalleryContactContent from "./GalleryContactContent";
import { getSiteMode } from "@/lib/site-mode";

export const metadata: Metadata = {
  title: "Contact — 파소(PASO)",
  description: "프로젝트 문의, 협업 제안. 파소(PASO)에 연락하세요.",
  openGraph: {
    title: "Contact — 파소(PASO)",
    description: "프로젝트 문의, 협업 제안. 파소(PASO)에 연락하세요.",
  },
};

export default async function ContactPage() {
  const siteMode = await getSiteMode();

  if (siteMode === "pasogallery") {
    return (
      <div className="bg-black min-h-screen">
        <StandaloneNav
          siteName="Paso Gallery"
          homeHref="/"
          links={[
            { label: "Exhibitions", href: "#exhibitions" },
            { label: "Spaces", href: "#space" },
            { label: "About", href: "/about" },
            { label: "Request", href: "/contact", isButton: true },
          ]}
          accentColor="#b8960b"
        />
        <GalleryContactContent />
        <StandaloneFooter
          siteName="Paso Gallery"
          address="92, Seonggyungwan-ro, Jongno-gu"
          addressDetail="Seoul, Hanok Building"
          instagram="https://www.instagram.com/pasogallery"
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
