import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollHeroSection from "@/components/ScrollHeroSection";
import { DynamicTop, DynamicBottom } from "@/components/DynamicSections";
import BrandHub from "@/components/BrandHub";
import Services from "@/components/Services";
import PasoOfferCarousel from "@/components/OfferCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      {/* Maintenance Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#b8960b] text-black text-center py-2 text-xs md:text-sm tracking-[0.05em] font-medium">
        🚧 Our website is currently under renovation. 🚧
      </div>
      <main className="pt-8">
        <Hero />
        <ScrollHeroSection />
        <DynamicTop />
        <BrandHub />
        <DynamicBottom />
        <PasoOfferCarousel />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
