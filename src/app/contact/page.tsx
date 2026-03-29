import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — 파소(PASO)",
  description: "프로젝트 문의, 협업 제안, 전시 대관. 파소(PASO)에 연락하세요.",
  openGraph: {
    title: "Contact — 파소(PASO)",
    description: "프로젝트 문의, 협업 제안, 전시 대관. 파소(PASO)에 연락하세요.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <ContactContent />
      <Footer />
    </div>
  );
}
