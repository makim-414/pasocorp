import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollHeroSection from "@/components/ScrollHeroSection";
import { DynamicTop, DynamicBottom } from "@/components/DynamicSections";
import BrandHub from "@/components/BrandHub";
import EcosystemSection from "@/components/EcosystemSection";
import Services from "@/components/Services";
import PasoOfferCarousel from "@/components/OfferCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <ScrollHeroSection />
        <DynamicTop />
        <BrandHub />
        <EcosystemSection />
        <DynamicBottom />
        <PasoOfferCarousel />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
