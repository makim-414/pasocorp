"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionPanel } from "@/components/core/transition-panel";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function BrandTabs() {
  const { t } = useLocale();
  const BRANDS = [
    { title: "Artrader", subtitle: t("brandtabs.artrader.subtitle"), content: t("brandtabs.artrader.content"), image: "/brands/artrader-platform-hd.png", color: "#b8960b", cta: "EXPLORE" },
    { title: "Artledger", subtitle: t("brandtabs.artledger.subtitle"), content: t("brandtabs.artledger.content"), image: "/brands/artledger-consulting.jpg", color: "#9ca3af", cta: "EXPLORE" },
    { title: "Gallery", subtitle: t("brandtabs.gallery.subtitle"), content: t("brandtabs.gallery.content"), image: "/brands/paso-gallery.png", color: "#1e3a5f", cta: "EXPLORE" },
    { title: "Agency", subtitle: t("brandtabs.agency.subtitle"), content: t("brandtabs.agency.content"), image: "/images/projects/hongdae-flagship/2.jpg", color: "#d4a574", cta: "EXPLORE" },
    { title: "Art Center", subtitle: t("brandtabs.artcenter.subtitle"), content: t("brandtabs.artcenter.content"), image: "/brands/paso-artcenter-building.jpg", color: "#a0522d", cta: "EXPLORE" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = BRANDS[activeIndex];

  return (
    <div className="relative overflow-hidden min-h-[350px] md:min-h-[400px]">
      {/* Background image crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image src={active.image} alt={active.title} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/65" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 px-5 md:px-14 py-10 md:py-24">
        {/* Tab buttons — horizontal scroll on mobile */}
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-1">
          {BRANDS.map((brand, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="shrink-0 px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs tracking-[0.08em] uppercase font-medium rounded-full border transition-all duration-300"
              style={{
                borderColor: activeIndex === index ? brand.color : "rgba(255,255,255,0.15)",
                color: activeIndex === index ? brand.color : "rgba(255,255,255,0.5)",
                backgroundColor: activeIndex === index ? `${brand.color}15` : "transparent",
              }}
            >
              {brand.title}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="max-w-xl">
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            variants={{
              enter: { opacity: 0, y: -20, filter: "blur(4px)" },
              center: { opacity: 1, y: 0, filter: "blur(0px)" },
              exit: { opacity: 0, y: 20, filter: "blur(4px)" },
            }}
          >
            {BRANDS.map((brand) => (
              <div key={brand.title} className="py-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-px" style={{ backgroundColor: brand.color }} />
                  <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase" style={{ color: brand.color }}>{brand.title}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-light text-white mb-3 leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>
                  {brand.subtitle}
                </h3>
                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed mb-5">{brand.content}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-medium text-white hover:opacity-60 transition-opacity">
                  {brand.cta} <span className="text-base">⟶</span>
                </Link>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </div>
    </div>
  );
}
