import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <section className="py-24 md:py-32 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[#555] text-xs md:text-sm tracking-[0.15em] uppercase font-light">
            Website under renovation
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
