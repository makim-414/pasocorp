import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollHeroSection from "@/components/ScrollHeroSection";
import { DynamicTop, DynamicBottom } from "@/components/DynamicSections";
import BrandHub from "@/components/BrandHub";
import PersonaSelector from "@/components/PersonaSelector";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <ScrollHeroSection />
        <DynamicTop />
        <PersonaSelector />
        <BrandHub />
        <DynamicBottom />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
