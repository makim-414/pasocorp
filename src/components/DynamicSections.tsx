"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import FlywheelVisual from "./FlywheelVisual";
import HoverPreviewProcess from "./HoverPreviewProcess";
import TrustBar from "./TrustBar";
import { useLocale } from "@/i18n/LocaleProvider";
import { STATS } from "@/lib/stats";

/* ───── Animated counter with count-up ───── */
function parseCounterValue(value: string): { prefix: string; number: number; suffix: string; decimals: number } {
  const match = value.match(/^([^\d]*?)([\d,.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value, decimals: 0 };
  const prefix = match[1];
  const numStr = match[2].replace(/,/g, "");
  const number = parseFloat(numStr);
  const decimalPart = numStr.split(".")[1];
  const decimals = decimalPart ? decimalPart.length : 0;
  const suffix = match[3];
  return { prefix, number, suffix, decimals };
}

function formatNumber(n: number, decimals: number, useCommas: boolean): string {
  const fixed = n.toFixed(decimals);
  if (!useCommas) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { prefix, number, suffix, decimals } = parseCounterValue(value);
  const hasCommas = value.includes(",");
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();
    let raf: number;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayNum(eased * number);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-tight" style={{ fontFamily: "var(--font-dutch)", color: "var(--color-gold-bright)" }}>
        {prefix}{formatNumber(displayNum, decimals, hasCommas)}{suffix}
      </p>
      <p className="text-[9px] sm:text-[10px] tracking-[0.12em] uppercase text-[#777] mt-2 sm:mt-3 whitespace-pre-line leading-relaxed">{label}</p>
    </motion.div>
  );
}

/* ═══════════════ TOP SECTION (Above BrandHub) ═══════════════ */
export function DynamicTop() {
  const { t } = useLocale();
  return (
    <div className="bg-black relative z-10">
      {/* Flywheel + About intro — flows straight out of the particle story above:
          no hard divider, and a gold glow at the seam that continues the
          particle-wordmark's gold so the eye reads it as the particles settling
          into the ecosystem's PASO core. */}
      <section id="about" className="relative overflow-hidden pt-8 md:pt-10 pb-16 md:pb-24">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-72 md:h-96 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 100% at 50% 0%, rgba(184,150,11,0.13) 0%, rgba(184,150,11,0.04) 45%, transparent 72%)" }}
        />
        <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="min-h-[480px] md:min-h-[620px] order-2 md:order-1">
            <FlywheelVisual />
          </div>
          <div className="flex flex-col justify-center py-8 md:py-16 order-1 md:order-2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#555]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b]">{t("dynamic.about_paso")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-5 whitespace-pre-line text-white" style={{ fontFamily: "var(--font-dutch)" }}>
                {"Art as an Asset Class.\nStrategy as a Service."}
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed max-w-md" style={{ wordBreak: "keep-all" }}>
                {t("dynamic.about_lead")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hover Preview Process — full width, below About */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 flex items-center justify-center">
          <HoverPreviewProcess />
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ BOTTOM SECTION (Below BrandHub) ═══════════════ */
export function DynamicBottom() {
  return (
    <div className="bg-black">
      {/* Stats bar */}
      <section className="border-y border-border bg-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 grid grid-cols-3 gap-6 sm:gap-8">
          <Counter value={STATS.globalAuctionRecords} label={"Global Auction Records"} />
          <Counter value={STATS.domesticRecords} label={"Domestic Market Data"} />
          <Counter value={STATS.brandFoundedYear} label={`Founded\n(Registered ${STATS.registeredYear})`} />
        </div>
      </section>

      {/* Evidence belt: client & partner logos */}
      <TrustBar />
    </div>
  );
}
