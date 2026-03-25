import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import AboutContent from "./AboutContent";
import { getSiteMode } from "@/lib/site-mode";

export const metadata: Metadata = {
  title: "About — 파소(PASO)",
  description: "파소(PASO)는 미술을 자산으로, 전략을 서비스로. 데이터 기반 미술 생태계를 구축합니다.",
  openGraph: {
    title: "About — 파소(PASO)",
    description: "파소(PASO) — Precision-based Art Strategy & Operation. 미술 생태계의 모든 것을 연결합니다.",
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

  // pasocorp.com → full corporate layout
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <AboutContent />
      <Footer />
    </div>
  );
}
