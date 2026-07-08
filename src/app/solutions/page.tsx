import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions — PASO",
  description: "Data analytics, advisory, exhibitions, and IP licensing. PASO's integrated art solutions across five brands: Artrader, Artledger, PASO Art Center, Paso Gallery, and Paso Agency.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions — PASO",
    description: "Data analytics, advisory, exhibitions, and IP licensing — PASO's integrated art solutions.",
    url: "https://pasocorp.com/solutions",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Solutions — PASO", images: ["/og-image.jpg"] },
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
