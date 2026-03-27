"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BackgroundBeams from "./BackgroundBeams";
import TextGenerateEffect from "./TextGenerateEffect";
import BlurInText from "./ui/blur-in-text";
import WeArtHero from "./WeArtHero";

const brands = [
  { name: "Artrader.io", image: "/images/exhibitions/golden-reeds/golden-reeds-4.jpg", color: "#b8960b", href: "https://artrader.io", enabled: true },
  { name: "Paso Gallery", image: "/brands/paso-gallery.png", color: "#1e3a5f", href: "https://pasogallery.com", enabled: true },
  { name: "Paso Agency", image: "/images/gallery/gallery-04.jpg", color: "#d4a574", href: "/brands/paso-agency", enabled: false },
  { name: "Artledger", image: "/brands/artledger-consulting.jpg", color: "#9ca3af", href: "/brands/artledger-consulting", enabled: false },
  { name: "Art Center", image: "/brands/paso-artcenter-building.jpg", color: "#a0522d", href: "/brands/paso-art-center", enabled: false },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background brand images — crossfade on hover */}
      <AnimatePresence>
        {hoveredBrand !== null && (
          <motion.div
            key={hoveredBrand}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={brands[hoveredBrand].image}
              alt={brands[hoveredBrand].name}
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        )}
      </AnimatePresence>

      <BackgroundBeams />
      <Spotlight springX={springX} springY={springY} />

      <div className="relative z-10 text-center px-4 w-full max-w-screen-lg mx-auto">
        <h1
          className="text-[clamp(3rem,10vw,10rem)] font-normal tracking-normal text-white leading-none"
          style={{ fontFamily: "var(--font-dutch)" }}
        >
          <BlurInText text="PASO" duration={1} characterDelay={0.08} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 md:mt-6 text-[10px] md:text-sm tracking-[0.08em] uppercase text-[#888] font-light"
        >
          Precision-based Art Strategy & Operation
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-5 md:mt-8 text-base md:text-xl font-light text-[#e8e8e8] tracking-normal"
          style={{ fontFamily: "var(--font-dutch)" }}
        >
          <TextGenerateEffect words="Art · Advisory & Data · IP · Space" />
        </motion.div>

        {/* Brand links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-10 md:mt-16 flex flex-wrap items-center justify-center gap-x-1.5 md:gap-x-2 gap-y-1.5 text-[9px] md:text-xs tracking-[0.1em] uppercase"
        >
          {brands.map((b, i, arr) => (
            <span key={b.name} className="flex items-center gap-1.5 md:gap-2">
              {b.enabled ? (
                <a
                  href={b.href}
                  target={b.href.startsWith("http") ? "_blank" : undefined}
                  rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setHoveredBrand(i)}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  <motion.span
                    className="cursor-pointer transition-colors duration-300 relative py-1 px-0.5 inline-block"
                    style={{ color: hoveredBrand === i ? b.color : "#555" }}
                    whileHover={{ y: -2 }}
                  >
                    {b.name}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredBrand === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ backgroundColor: b.color, transformOrigin: "left" }}
                    />
                  </motion.span>
                </a>
              ) : (
                <span
                  className="py-1 px-0.5 inline-block text-[#333] cursor-default"
                  onMouseEnter={() => setHoveredBrand(i)}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  {b.name}
                </span>
              )}
              {i < arr.length - 1 && <span className="text-[#2a2a2a]">|</span>}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#555]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 md:h-8 bg-gradient-to-b from-[#555] to-transparent"
        />
      </motion.div>
    </section>
  );
}

function Spotlight({ springX, springY }: { springX: ReturnType<typeof useSpring>; springY: ReturnType<typeof useSpring> }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const unsubX = springX.on("change", (x: number) => { if (ref.current) ref.current.style.setProperty("--spotlight-x", `${x}px`); });
    const unsubY = springY.on("change", (y: number) => { if (ref.current) ref.current.style.setProperty("--spotlight-y", `${y}px`); });
    return () => { unsubX(); unsubY(); };
  }, [springX, springY]);
  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-[1]" style={{
      background: "radial-gradient(500px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(184, 150, 11, 0.18), rgba(184, 150, 11, 0.05) 40%, transparent 70%)",
    }} />
  );
}
