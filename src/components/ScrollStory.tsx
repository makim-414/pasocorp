"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import BlurInText from "./ui/blur-in-text";
import { TextScramble } from "./fx/text-scramble";
import { useLocale } from "@/i18n/LocaleProvider";
import { STATS } from "@/lib/stats";

// IRONACT DS FBO particle core — WebGL, browser only.
const FBOParticlesScene = dynamic(() => import("./fx/fbo-particles-scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

function Beat({
  progress,
  window: [a, b, c, d],
  className,
  children,
  interactive = false,
}: {
  progress: MotionValue<number>;
  window: [number, number, number, number];
  className?: string;
  children: React.ReactNode;
  interactive?: boolean;
}) {
  const opacity = useTransform(progress, [a, b, c, d], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, d], [40, -40]);
  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex ${className ?? ""} ${interactive ? "" : "pointer-events-none"}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scroll-driven cinematic intro: one sticky WebGL particle field whose
 * choreography (drift, tighten, wordmark morph) is driven by scroll progress,
 * with story beats fading through above it. Replaces the old Hero +
 * "we ___ Art." + gold-panel stack on the homepage.
 */
export default function ScrollStory() {
  const ref = useRef<HTMLElement>(null);
  const driveRef = useRef(0);
  const { t } = useLocale();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    driveRef.current = v;
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.13, 0.21], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.21], [0, -80]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <section ref={ref} className="relative h-[420vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Particle field */}
        <div className="absolute inset-0 pointer-events-none">
          {reduceMotion ? (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 45%, rgba(201,169,110,0.18) 0%, rgba(184,150,11,0.06) 40%, transparent 70%)",
              }}
            />
          ) : (
            <FBOParticlesScene scrollDrive={driveRef} />
          )}
        </div>

        {/* Beat 0 — hero. Legibility scrim sits between the particle field and
            the copy so the centre text reads cleanly over the dense cluster. */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 42% at 50% 52%, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, transparent 75%)",
            }}
          />
          <div className="relative z-10 text-center px-4 w-full max-w-screen-lg mx-auto">
            <h1
              className="text-[clamp(3rem,10vw,10rem)] font-normal tracking-normal text-white leading-none [text-shadow:0_2px_40px_rgba(0,0,0,0.6)]"
              style={{ fontFamily: "var(--font-dutch)" }}
            >
              <BlurInText text="PASO" duration={1} characterDelay={0.08} />
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.7 }}
              className="mt-5 md:mt-6 flex justify-center"
            >
              <TextScramble
                auto
                text={t("hero.tag")}
                className="text-[10px] md:text-[11px] text-[#b8960b] font-light"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.9 }}
              className="mt-6 md:mt-8 max-w-[600px] mx-auto text-sm md:text-base text-[#cfcfcf] font-light leading-relaxed px-4 [text-shadow:0_1px_20px_rgba(0,0,0,0.9)]"
              style={{ wordBreak: "keep-all" }}
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="mt-9 md:mt-12"
            >
              <a
                href="/contact"
                className="inline-block px-8 py-3 rounded-full border border-[#b8960b]/50 bg-black/30 backdrop-blur-sm text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#b8960b] hover:bg-[#b8960b] hover:text-black transition-colors duration-500"
              >
                {t("hero.cta_get_in_touch")} →
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Beat 1 — find (cluster drifts left, copy sits right) */}
        <Beat progress={scrollYProgress} window={[0.2, 0.27, 0.4, 0.47]} className="items-center justify-center md:justify-end">
          <div className="px-8 md:pr-[12vw] max-w-xl text-center md:text-right">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8960b] mb-4">01 · Paso Gallery</p>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-5" style={{ fontFamily: "var(--font-dutch)" }}>
              {t("story.find.title")}
            </h2>
            <p className="text-sm md:text-base text-[#9a9a9a] font-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
              {t("story.find.body")}
            </p>
          </div>
        </Beat>

        {/* Beat 2 — analyze (cluster tightens center, copy sits left) */}
        <Beat progress={scrollYProgress} window={[0.46, 0.53, 0.64, 0.71]} className="items-center justify-center md:justify-start">
          <div className="px-8 md:pl-[12vw] max-w-xl text-center md:text-left">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8960b] mb-4">02 · Artrader</p>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-5" style={{ fontFamily: "var(--font-dutch)" }}>
              {t("story.analyze.title")}
            </h2>
            <p className="text-sm md:text-base text-[#9a9a9a] font-light leading-relaxed mb-6" style={{ wordBreak: "keep-all" }}>
              {t("story.analyze.body")}
            </p>
            <p className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--font-dutch)", color: "var(--color-gold-bright)" }}>
              {STATS.globalAuctionRecordsShort}
              <span className="block text-[10px] tracking-[0.2em] uppercase text-[#777] mt-2">Global Auction Records</span>
            </p>
          </div>
        </Beat>

        {/* Beat 3 — grow (wordmark assembles behind) */}
        <Beat progress={scrollYProgress} window={[0.74, 0.83, 0.97, 1.01]} className="items-end justify-center" interactive>
          <div className="px-8 pb-[12vh] max-w-2xl text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8960b] mb-4">03 · One Ecosystem</p>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-5" style={{ fontFamily: "var(--font-dutch)" }}>
              {t("story.grow.title")}
            </h2>
            <p className="text-sm md:text-base text-[#9a9a9a] font-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
              {t("story.grow.body")}
            </p>
          </div>
        </Beat>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#777]">{t("hero.scroll")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-6 md:h-8 bg-gradient-to-b from-[#777] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
