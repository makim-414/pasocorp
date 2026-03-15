"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import FlywheelVisual from "./FlywheelVisual";
import HoverPreviewProcess from "./HoverPreviewProcess";

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
      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>
        {prefix}{formatNumber(displayNum, decimals, hasCommas)}{suffix}
      </p>
      <p className="text-[9px] sm:text-[10px] tracking-[0.12em] uppercase text-[#555] mt-2 sm:mt-3 whitespace-pre-line leading-relaxed">{label}</p>
    </motion.div>
  );
}

/* ───── Parallax image ───── */
function ParallaxImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  return (
    <div ref={ref} className={`overflow-hidden ${className || ""}`}>
      <motion.div style={{ y }} className="relative w-full h-full">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </motion.div>
    </div>
  );
}

/* ───── Split section ───── */
function SplitSection({
  tag, title, desc, image, reverse,
}: {
  tag: string; title: string; desc: string; image: string; reverse?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-0">
      <div className={reverse ? "lg:order-2" : ""}>
        <ParallaxImg src={image} alt={title} className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[200px] sm:min-h-[250px] lg:min-h-[400px]" />
      </div>
      <div className={`flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-14 py-8 sm:py-12 lg:py-16 ${reverse ? "lg:order-1" : ""}`}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#555]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b]">{tag}</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight mb-4 sm:mb-5 whitespace-pre-line text-white" style={{ fontFamily: "var(--font-dutch)" }}>
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-[#888] leading-relaxed max-w-md">{desc}</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ───── Cinematic block ───── */
function CinematicBlock({ image, title, subtitle }: { image: string; title: string; subtitle: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);
  return (
    <div ref={ref} className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] min-h-[300px] md:min-h-[500px]">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 flex items-center justify-center">
        <motion.div style={{ opacity }} className="text-center px-6">
          <h2 className="text-3xl md:text-6xl text-white font-light mb-4 tracking-tight" style={{ fontFamily: "var(--font-dutch)" }}>{title}</h2>
          <div className="w-12 h-px bg-[#b8960b] mx-auto mb-4" />
          <p className="text-white/50 text-sm tracking-wide">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ───── Staggered triple feature ───── */
function TripleFeature() {
  const cards = [
    { image: "https://images.unsplash.com/photo-1594794312433-05a69139b4b4?w=600&q=80", title: "2026 미술시장 인사이트", desc: "국내외 시장 동향과 전망", tall: false },
    { image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&q=80", title: "프리오프닝 상설전", desc: "PASO Art Center의 첫 전시", tall: true },
    { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", title: "마곡 아트 살롱", desc: "월간 커뮤니티 아트 토크", tall: false },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="text-center mb-10 sm:mb-12 md:mb-14">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-3 sm:mb-4">Now & Upcoming</motion.p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2 sm:mb-3 leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>What&apos;s Happening</h2>
        <p className="text-xs sm:text-sm text-[#888]">Exhibitions, events, and community programmes</p>
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
            <div className={`relative overflow-hidden group/card ${card.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <Image src={card.image} alt={card.title} fill className="object-cover transition-all duration-[1.2s] ease-out group-hover/card:scale-[1.06]" sizes="33vw" />
              <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/5 transition-colors duration-700" />
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="mt-4 text-center">
              <div className="w-px h-5 bg-[#333] mx-auto mb-3" />
              <h3 className="text-lg font-light text-white" style={{ fontFamily: "var(--font-dutch)" }}>{card.title}</h3>
              <p className="text-xs text-[#888] mt-1">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════ TOP SECTION (Above BrandHub) ═══════════════ */
export function DynamicTop() {
  return (
    <div className="bg-black relative z-10">
      {/* Flywheel + About intro */}
      <section id="about" className="border-t border-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="min-h-[350px] md:min-h-[450px]">
            <FlywheelVisual />
          </div>
          <div className="flex flex-col justify-center px-6 md:px-14 py-12 md:py-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#555]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b]">About PASO</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light leading-tight mb-5 whitespace-pre-line text-white" style={{ fontFamily: "var(--font-dutch)" }}>
                {"Art as an Asset Class.\nStrategy as a Service."}
              </h2>
              <p className="text-sm text-[#888] leading-relaxed max-w-md">
                PASO는 미술을 자산으로, 전략을 서비스로. 데이터 기반 미술품 거래 자문부터 갤러리 / 미술관 운영, 기업 컬렉션 자문과 미술 프로젝트 운용까지, 미술 생태계의 모든 것을 연결합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hover Preview Process — full width, below About */}
      <section className="border-t border-[#1a1a1a]">
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
      <section className="border-y border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <Counter value="1,580만+" label={"보유 옥션 데이터"} />
          <Counter value="90,000+" label={"국내 미술시장\n분석 데이터"} />
          <Counter value="₩13.2B" label={"위탁 리밸런싱\n컬렉션 AUM"} />
          <Counter value="2020" label={"설립 연도"} />
        </div>
      </section>

      {/* Staggered triple feature — moved right after stats */}
      <section className="border-t border-[#1a1a1a]">
        <TripleFeature />
      </section>

      {/* Artrader, Art Center cinematic, and Advisory sections removed */}

      {/* Agency section removed */}
    </div>
  );
}
