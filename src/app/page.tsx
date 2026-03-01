import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { DynamicTop, DynamicBottom } from "@/components/DynamicSections";
import BrandHub from "@/components/BrandHub";
import Services from "@/components/Services";
import PasoOfferCarousel from "@/components/OfferCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
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
