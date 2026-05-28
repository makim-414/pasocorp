import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions — PASO",
  description: "Data analytics, advisory, exhibitions, and IP licensing — PASO's integrated art solutions.",
  openGraph: {
    title: "Solutions — PASO",
    description: "Data analytics, advisory, exhibitions, and IP licensing — PASO's integrated art solutions.",
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
