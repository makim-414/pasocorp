import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — 파소(PASO)",
  description: "파소(PASO)는 미술을 자산으로, 전략을 서비스로. 데이터 기반 미술 생태계를 구축합니다.",
  openGraph: {
    title: "About — 파소(PASO)",
    description: "파소(PASO) — Precision-based Art Strategy & Operation. 미술 생태계의 모든 것을 연결합니다.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <AboutContent />
      <Footer />
    </div>
  );
}
