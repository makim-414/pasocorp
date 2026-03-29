import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions — 파소(PASO)",
  description: "데이터 분석, 자문, 전시, IP 라이선싱. 파소(PASO)의 통합 미술 솔루션.",
  openGraph: {
    title: "Solutions — 파소(PASO)",
    description: "데이터 분석, 자문, 전시, IP 라이선싱. 파소(PASO)의 통합 미술 솔루션.",
  },
};

export default function SolutionsPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <SolutionsContent />
      <Footer />
    </div>
  );
}
