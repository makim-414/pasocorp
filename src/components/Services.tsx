"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BarChart3, Landmark, Palette } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 70;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Services() {
  const { t } = useLocale();
  const FEATURES = [
    {
      id: "artrader",
      tag: "ARTRADER",
      label: "Data & Intelligence",
      Icon: BarChart3,
      image: "/brands/artrader-new.png",
      desc: t("services.artrader.desc"),
      color: "#b8960b",
      href: "/brands/artrader",
    },
    {
      id: "gallery",
      tag: "PASO GALLERY · SPACES",
      label: "Exhibition & Spaces",
      Icon: Landmark,
      image: "/brands/paso-gallery.jpg",
      desc: t("services.gallery.desc"),
      color: "#b8960b",
      href: "https://pasogallery.com",
    },
    {
      id: "agency",
      tag: "PASO AGENCY",
      label: "IP & Brand Collaboration",
      Icon: Palette,
      image: "/images/projects/cu-dding/cu-3.jpg",
      desc: t("services.agency.desc"),
      color: "#b8960b",
      href: "/brands/paso-agency",
    },
  ];
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <section id="services" className="py-32 md:py-40 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.3em] uppercase text-[#b8960b] mb-4"
        >
          {t("services.tag")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-light text-white mb-16"
          style={{ fontFamily: "var(--font-dutch)" }}
        >
          {t("services.title")}
        </motion.h2>

        {/* carousel container */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl flex flex-col lg:flex-row min-h-[550px] lg:min-h-[500px] border border-white/[0.06]">
          {/* left panel — labels */}
          <div className="w-full lg:w-[40%] min-h-[300px] lg:h-auto relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-[#0a0a0a]">
            {/* fade edges */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-40 pointer-events-none" />

            <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
              {FEATURES.map((feature, index) => {
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(
                  -(FEATURES.length / 2),
                  FEATURES.length / 2,
                  distance
                );

                return (
                  <motion.div
                    key={feature.id}
                    style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                    animate={{
                      y: wrappedDistance * ITEM_HEIGHT,
                      opacity: 1 - Math.abs(wrappedDistance) * 0.3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 22,
                      mass: 1,
                    }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        "relative flex items-center gap-4 px-6 md:px-8 py-3.5 rounded-full transition-all duration-700 text-left group border",
                        isActive
                          ? "bg-[#b8960b]/10 border-[#b8960b]/40 text-white z-10"
                          : "bg-transparent text-white/40 border-white/[0.06] hover:border-white/20 hover:text-white/70"
                      )}
                    >
                      <feature.Icon
                        className={cn(
                          "w-4 h-4 transition-colors duration-500 flex-shrink-0",
                          isActive ? "text-[#b8960b]" : "text-white/30"
                        )}
                        strokeWidth={1.5}
                      />
                      <span className="font-light text-sm md:text-[15px] tracking-wide whitespace-nowrap">
                        {feature.label}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* right panel — image cards */}
          <div className="flex-1 min-h-[400px] md:min-h-[500px] lg:h-auto relative bg-[#111] flex items-center justify-center py-16 md:py-20 lg:py-16 px-6 md:px-12 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/[0.06]">
            <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center">
              {FEATURES.map((feature, index) => {
                const status = getCardStatus(index);
                const isActive = status === "active";
                const isPrev = status === "prev";
                const isNext = status === "next";

                return (
                  <motion.div
                    key={feature.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.75,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                      rotate: isPrev ? -2 : isNext ? 2 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a] origin-center"
                    style={{
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <Link href={feature.href} className="absolute inset-0 z-30">
                      <span className="sr-only">{feature.label}</span>
                    </Link>
                    <Image
                      src={feature.image}
                      alt={feature.label}
                      fill
                      className={cn(
                        "object-cover transition-all duration-700",
                        isActive
                          ? "grayscale-0 blur-0"
                          : "grayscale blur-[2px] brightness-75"
                      )}
                    />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-x-0 bottom-0 p-8 pt-28 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end pointer-events-none"
                        >
                          <p
                            className="text-[10px] tracking-[0.2em] uppercase mb-2"
                            style={{ color: feature.color }}
                          >
                            {feature.tag}
                          </p>
                          <p
                            className="text-white font-light text-xl md:text-2xl leading-tight tracking-tight mb-2"
                            style={{ fontFamily: "var(--font-dutch)" }}
                          >
                            {feature.label}
                          </p>
                          <p className="text-white/60 text-sm font-light leading-relaxed">
                            {feature.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
