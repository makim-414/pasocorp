import Navbar from "@/components/Navbar";
import ScrollStory from "@/components/ScrollStory";
import { DynamicTop, DynamicBottom } from "@/components/DynamicSections";
import BrandHub from "@/components/BrandHub";
import PersonaSelector from "@/components/PersonaSelector";
import Services from "@/components/Services";
import ExhibitionStrip from "@/components/ExhibitionStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <ScrollStory />
        <DynamicTop />
        <PersonaSelector />
        <BrandHub />
        <DynamicBottom />
        <Services />
        <ExhibitionStrip />
      </main>
      <Footer />
    </div>
  );
}
