import Navbar from "@/components/Navbar";
import ScrollStory from "@/components/ScrollStory";
import { DynamicTop, DynamicBottom } from "@/components/DynamicSections";
import BrandHub from "@/components/BrandHub";
import PersonaSelector from "@/components/PersonaSelector";
import ExhibitionStrip from "@/components/ExhibitionStrip";
import Footer from "@/components/Footer";
import CorpJsonLd from "@/components/CorpJsonLd";

export default function Home() {
  return (
    <div className="bg-black">
      <CorpJsonLd />
      <Navbar />
      <main>
        <ScrollStory />
        <DynamicTop />
        <BrandHub />
        <DynamicBottom />
        <ExhibitionStrip />
        <PersonaSelector />
      </main>
      <Footer />
    </div>
  );
}
