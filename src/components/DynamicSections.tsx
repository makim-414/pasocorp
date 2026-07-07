"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

/* ───── Staggered triple feature ───── */
function TripleFeature() {
  const { t } = useLocale();
  const cards = [
    { image: "/images/exhibitions/golden-reeds/golden-reeds-6.jpg", tag: "GALLERY", title: t("dynamic.card.paso_private_sales.title"), desc: t("dynamic.card.paso_private_sales.desc"), tall: false, href: "https://pasogallery.com" },
    { image: "/images/gallery/gallery-03.jpg", tag: "SPACES · SEPT", title: t("dynamic.card.frieze.title"), desc: t("dynamic.card.frieze.desc"), tall: true, href: "/spaces" },
    { image: "/brands/artrader-new.png", tag: "PLATFORM", title: t("dynamic.card.artrader_launch.title"), desc: t("dynamic.card.artrader_launch.desc"), tall: false, href: "https://artrader.io" },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
      <div className="text-center mb-10 sm:mb-12 md:mb-14">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-3 sm:mb-4">{t("dynamic.now_upcoming")}</motion.p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2 sm:mb-3 leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>{t("dynamic.whats_happening")}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={i === 1 ? "lg:-mt-8" : "lg:mt-8"}
          >
            {(() => {
              const content = (
                <>
                  <div className={`relative overflow-hidden group/card ${card.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <Image src={card.image} alt={card.title} fill className="object-cover group-hover/card:object-contain transition-all duration-[1.2s] ease-out group-hover/card:scale-100" sizes="33vw" />
                    <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors duration-700" />
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="w-px h-5 bg-[#333] mx-auto mb-3" />
                    <p className="text-[9px] tracking-[0.25em] text-[#b8960b] mb-1.5">{card.tag}</p>
                    <h3 className="text-lg font-light text-white" style={{ fontFamily: "var(--font-dutch)" }}>{card.title}</h3>
                    <p className="text-xs text-muted mt-1">{card.desc}</p>
                  </div>
                </>
              );
              return card.href.startsWith("http") ? (
                <a href={card.href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">{content}</a>
              ) : (
                <Link href={card.href} className="block cursor-pointer">{content}</Link>
              );
            })()}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════ TOP SECTION (Above BrandHub) ═══════════════ */
export function DynamicTop() {
  const { t } = useLocale();
  return (
    <div className="bg-black relative z-10">
      {/* Flywheel + About intro */}
      <section id="about" className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="min-h-[350px] md:min-h-[450px]">
            <FlywheelVisual />
          </div>
          <div className="flex flex-col justify-center px-6 md:px-14 py-12 md:py-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#555]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b]">{t("dynamic.about_paso")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light leading-tight mb-5 whitespace-pre-line text-white" style={{ fontFamily: "var(--font-dutch)" }}>
                {"Art as an Asset Class.\nStrategy as a Service."}
              </h2>
              <p className="text-sm text-muted leading-relaxed max-w-md" style={{ wordBreak: "keep-all" }}>
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

      {/* Staggered triple feature — moved right after stats */}
      <section className="border-t border-border">
        <TripleFeature />
      </section>

      {/* Artrader, Art Center cinematic, and Advisory sections removed */}

      {/* Agency section removed */}
    </div>
  );
}
