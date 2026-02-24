import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — PASO",
  description: "프로젝트 문의, 협업 제안, 전시 대관. PASO에 연락하세요.",
  openGraph: {
    title: "Contact — PASO",
    description: "프로젝트 문의, 협업 제안, 전시 대관. PASO에 연락하세요.",
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
