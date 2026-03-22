"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import EcosystemSection from "@/components/EcosystemSection";

/* ── Project detail gallery data ── */
const projectGalleries: Record<number, { title: string; images: string[] }> = {
  1: {
    title: "브랜드 콜라보 — CU × 장띵",
    images: Array.from({ length: 8 }, (_, i) => `/images/projects/cu-dding/cu-${i + 1}.jpg`),
  },
  3: {
    title: "공간 아트 — A Twosome Place",
    images: Array.from({ length: 8 }, (_, i) => `/images/projects/twosome/twosome-${i + 1}.jpg`),
  },
  4: {
    title: "팝업 전시 — 홍대 플래그쉽",
    images: Array.from({ length: 4 }, (_, i) => `/images/projects/hongdae-flagship/${i + 1}.png`),
  },
  5: {
    title: "스트릿 아트 — 도산공원 팝업",
    images: [
      "/images/projects/dosan-popup/1.png",
      "/images/projects/dosan-popup/02.png",
      "/images/projects/dosan-popup/03.png",
      "/images/projects/dosan-popup/4.png",
      "/images/projects/dosan-popup/5.png",
      "/images/projects/dosan-popup/8.png",
      "/images/projects/dosan-popup/9.png",
      "/images/projects/dosan-popup/10.png",
      "/images/projects/dosan-popup/13.png",
      "/images/projects/dosan-popup/14.png",
      "/images/projects/dosan-popup/15.png",
      "/images/projects/dosan-popup/16.png",
      "/images/projects/dosan-popup/17.png",
      "/images/projects/dosan-popup/18.png",
      "/images/projects/dosan-popup/19.png",
    ],
  },
};

function ProjectGalleryModal({ gallery, onClose }: { gallery: { title: string; images: string[]; desc?: string }; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div className="w-full max-w-[1200px] px-6 py-16" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-3xl font-light text-white" style={{ fontFamily: "var(--font-dutch)" }}>{gallery.title}</h2>
          <button onClick={onClose} className="text-[#888] hover:text-white transition-colors text-3xl leading-none">&times;</button>
        </div>
        {gallery.desc && (
          <p className="text-sm text-[#999] font-light leading-relaxed max-w-2xl mb-10">{gallery.desc}</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {gallery.images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-xl"
            >
              <img src={src} alt={`${gallery.title} ${i + 1}`} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface BrandData {
  name: string;
  slug: string;
  year: number;
  desc: string;
  longDesc: string;
  color: string;
  image: string;
  gallery: string[];
  features: { title: string; desc: string; image?: string }[];
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.6, delay: i * 0.1 } });

/* ─── HERO (shared) ─── */
function BrandHero({ brand }: { brand: BrandData }) {
  return (
    <section className="relative h-[75vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${brand.image})` }} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(to top, black 0%, black 15%, transparent 60%)` }} />
      <div className="absolute inset-0 opacity-25" style={{ background: `linear-gradient(to top, ${brand.color}50, transparent)` }} />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xs tracking-[0.15em] text-[#b8960b] mb-4">{brand.year}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-7xl font-light text-white" style={{ fontFamily: "var(--font-dutch)" }}>{brand.name}</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-lg text-[#ccc] font-light max-w-xl">{brand.desc}</motion.p>
      </div>
    </section>
  );
}

/* ─── CTA (shared) ─── */
function BrandCTA({ brand }: { brand: BrandData }) {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-6" style={{ fontFamily: "var(--font-dutch)" }}>Get in Touch</motion.h2>
        <motion.p {...fadeUp} className="text-[#888] font-light mb-10 max-w-md mx-auto">프로젝트 문의, 협업 제안, 또는 더 알고 싶은 내용이 있다면 연락주세요.</motion.p>
        <motion.div {...fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:contact@artrader.io" className="inline-block px-8 py-3 border border-[#b8960b] text-[#b8960b] text-xs tracking-[0.1em] uppercase hover:bg-[#b8960b] hover:text-black transition-all duration-300">Contact Us</a>
          <Link href="/#brands" className="inline-block px-8 py-3 border border-[#333] text-[#888] text-xs tracking-[0.1em] uppercase hover:border-[#555] hover:text-white transition-all duration-300">← All Brands</Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   1. ARTRADER — SaaS / Dashboard feel
   ═══════════════════════════════════════════════════ */
function ArtraderLayout({ brand }: { brand: BrandData }) {
  const stats = [
    { label: "거래 데이터", value: "15M+" },
    { label: "분석 작가", value: "120K+" },
    { label: "커버 경매사", value: "2,800+" },
    { label: "리포트 발행", value: "5,000+" },
  ];
  return (
    <>
      <BrandHero brand={brand} />

      {/* Stats bar */}
      <section className="bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...stagger(i)} className="text-center">
              <p className="text-3xl md:text-4xl font-light text-[#b8960b]" style={{ fontFamily: "var(--font-dutch)" }}>{s.value}</p>
              <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-[#555]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Platform</p>
            <h2 className="text-2xl md:text-4xl font-light text-white mb-6" style={{ fontFamily: "var(--font-dutch)" }}>데이터로 보는 미술 시장</h2>
            <p className="text-[#888] font-light leading-relaxed">{brand.longDesc}</p>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl">
              <div className="h-8 bg-[#111] flex items-center px-4 gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#333]" /><span className="w-2.5 h-2.5 rounded-full bg-[#333]" /><span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
              </div>
              <img src="/brands/artrader-platform.jpg" alt="Dashboard" className="w-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature screenshots — alternating */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-24">
          {brand.features.map((f, i) => (
            <motion.div key={f.title} {...stagger(0)} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-3">Feature 0{i + 1}</p>
                <h3 className="text-xl md:text-2xl font-light text-white mb-4" style={{ fontFamily: "var(--font-dutch)" }}>{f.title}</h3>
                <p className="text-sm text-[#888] font-light leading-relaxed">{f.desc}</p>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden">
                  <div className="h-6 bg-[#111] flex items-center px-3 gap-1.5"><span className="w-2 h-2 rounded-full bg-[#333]" /><span className="w-2 h-2 rounded-full bg-[#333]" /><span className="w-2 h-2 rounded-full bg-[#333]" /></div>
                  <img src={brand.gallery[i % brand.gallery.length]} alt={f.title} className="w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <BrandCTA brand={brand} />
    </>
  );
}

/* ═══════════════════════════════════════════════════
   2. PASO ART CENTER — Museum / Full-bleed imagery
   ═══════════════════════════════════════════════════ */
function ArtCenterLayout({ brand }: { brand: BrandData }) {
  return (
    <>
      <BrandHero brand={brand} />

      {/* Intro */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <motion.p {...fadeUp} className="text-base md:text-lg text-[#888] font-light leading-relaxed">{brand.longDesc}</motion.p>
        </div>
      </section>

      {/* Full-bleed images — cinematic */}
      {brand.gallery.map((img, i) => (
        <motion.section key={i} {...stagger(0)} className="relative">
          <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
            <img src={img} alt={`Space ${i + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {brand.features[i] && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-24 pb-10">
              <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-2">{brand.features[i].title}</p>
                <p className="text-sm text-[#aaa] font-light max-w-md">{brand.features[i].desc}</p>
              </div>
            </div>
          )}
        </motion.section>
      ))}

      {/* Venue info */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: "Location", value: "Seoul, South Korea" },
            { label: "Opening", value: "2025" },
            { label: "Partner", value: "Mass C&G" },
          ].map((item, i) => (
            <motion.div key={item.label} {...stagger(i)} className="text-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-3">{item.label}</p>
              <p className="text-lg text-white font-light" style={{ fontFamily: "var(--font-dutch)" }}>{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <BrandCTA brand={brand} />
    </>
  );
}

/* ═══════════════════════════════════════════════════
   3. PASO GALLERY — Cinematic / Full-screen hero
   ═══════════════════════════════════════════════════ */
/* ── Exhibition gallery data ── */
const exhibitionGalleries: Record<string, { images: string[]; desc: string }> = {
  "REBORN": {
    images: Array.from({ length: 5 }, (_, i) => `/images/exhibitions/reborn/reborn-${i + 1}.jpg`),
    desc: "전통 한옥 공간에 현대 섬유 예술을 결합한 그룹전. 한지와 실크 소재의 대형 설치 작품이 고건축의 목구조와 어우러지며, 전통과 현대, 소멸과 재생이라는 주제를 탐구합니다. 빛에 의해 투영되는 직물의 그림자가 공간 전체를 하나의 작품으로 변모시킵니다.",
  },
  "Golden Reeds": {
    images: Array.from({ length: 7 }, (_, i) => `/images/exhibitions/golden-reeds/golden-reeds-${i + 1}.jpg`),
    desc: "박민재 작가의 대규모 설치 작품. 수천 개의 금빛 갈대가 갤러리 내부를 가득 채우며, 관람객은 갈대 사이를 거닐며 자연과 인공의 경계를 체험합니다. 조명에 따라 시시각각 변하는 금빛 풍경은 도시 속 자연에 대한 향수를 불러일으킵니다.",
  },
  "The Sculpture Garden": {
    images: Array.from({ length: 8 }, (_, i) => `/images/exhibitions/sculpture-garden/sculpture-garden-${i + 1}.jpg`),
    desc: "김소연 작가가 자연에서 수집한 나뭇가지와 유기적 소재로 구성한 조각 정원. 한옥의 마당과 실내를 잇는 공간 설치를 통해 자연의 순환과 생명력을 표현합니다. 소재 본연의 질감과 형태가 만들어내는 조형적 긴장감이 돋보이는 전시입니다.",
  },
  "Traces of Light": {
    images: Array.from({ length: 6 }, (_, i) => `/images/exhibitions/traces-of-light/traces-of-light-${i + 1}.jpg`),
    desc: "이현우 작가의 빛과 색채를 주제로 한 미디어 설치전. 프로젝션 매핑과 스테인드글라스 효과를 활용하여 한옥 내부에 몰입적인 빛의 공간을 창조합니다. 전통 건축의 창호와 현대 미디어 아트의 만남이 만들어내는 시적인 풍경을 경험할 수 있습니다.",
  },
  "Silent Dialogue": {
    images: Array.from({ length: 5 }, (_, i) => `/images/exhibitions/silent-dialogue/silent-dialogue-${i + 1}.jpg`),
    desc: "침묵 속에서 나누는 대화. 도자, 섬유, 금속 등 다양한 매체를 다루는 세 작가가 한옥의 고요한 공간에서 각자의 언어로 소통합니다. 작품과 공간, 관람객 사이에 흐르는 비언어적 교감을 경험하는 전시입니다.",
  },
  "Urban Canvas": {
    images: Array.from({ length: 6 }, (_, i) => `/images/exhibitions/urban-canvas/urban-canvas-${i + 1}.jpg`),
    desc: "도시의 벽면과 거리를 캔버스로 활용한 스트리트 아트 기획전. 그래피티, 벽화, 설치 등 도시 환경과 상호작용하는 다양한 작품들이 갤러리 안팎을 넘나들며 전시됩니다. 예술과 일상의 경계를 허무는 실험적인 전시입니다.",
  },
  "Between the Lines": {
    images: Array.from({ length: 5 }, (_, i) => `/images/exhibitions/between-lines/between-lines-${i + 1}.jpg`),
    desc: "드로잉과 판화를 중심으로 '선(線)'이라는 근본적인 조형 요소를 탐구하는 전시. 연필, 붓, 조각도가 만들어내는 다양한 선의 표현을 통해 작가들의 내면 세계를 들여다봅니다.",
  },
  "Color Spectrum": {
    images: Array.from({ length: 6 }, (_, i) => `/images/exhibitions/color-spectrum/color-spectrum-${i + 1}.jpg`),
    desc: "색채의 무한한 스펙트럼을 탐험하는 그룹전. 회화, 염색, 유리 공예 등 다양한 매체에서 색이 지닌 감정적, 상징적 힘을 조명합니다. 관람객은 색의 바다를 거닐며 시각적 명상을 경험합니다.",
  },
};

function GalleryLayout({ brand }: { brand: BrandData }) {
  const [openExhibition, setOpenExhibition] = useState<{ title: string; images: string[]; desc: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollExhibitions = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  const exhibitions = [
    { title: "REBORN", artist: "Group Exhibition", date: "2025.03 — 04", image: "/images/exhibitions/reborn/reborn-1.jpg" },
    { title: "Golden Reeds", artist: "Minjae Park", date: "2025.01 — 02", image: "/images/exhibitions/golden-reeds/golden-reeds-1.jpg" },
    { title: "The Sculpture Garden", artist: "Soyeon Kim", date: "2024.11 — 12", image: "/images/exhibitions/sculpture-garden/sculpture-garden-1.jpg" },
    { title: "Traces of Light", artist: "Hyunwoo Lee", date: "2024.09 — 10", image: "/images/exhibitions/traces-of-light/traces-of-light-1.jpg" },
    { title: "Silent Dialogue", artist: "Group Exhibition", date: "2024.07 — 08", image: "/images/exhibitions/silent-dialogue/silent-dialogue-1.jpg" },
    { title: "Urban Canvas", artist: "Jihoon Choi", date: "2024.05 — 06", image: "/images/exhibitions/urban-canvas/urban-canvas-1.jpg" },
    { title: "Between the Lines", artist: "Eunji Kang", date: "2024.03 — 04", image: "/images/exhibitions/between-lines/between-lines-1.jpg" },
    { title: "Color Spectrum", artist: "Group Exhibition", date: "2024.01 — 02", image: "/images/exhibitions/color-spectrum/color-spectrum-1.jpg" },
  ];

  const clients = [
    { name: "BCG", logo: "/logos/bcg.svg" },
    { name: "KB", logo: "/logos/kb.svg" },
    { name: "Twosome", logo: "/logos/twosome.svg" },
    { name: "Tequila Patrón", logo: "/logos/patron-clean.png" },
    { name: "Bang & Olufsen", logo: "/logos/bo-clean.png" },
    { name: "Maker's Mark", logo: "/logos/makers-mark-clean.png" },
    { name: "Pfizer", logo: "/logos/pfizer-clean.png" },
    { name: "CUBE Entertainment", logo: "/logos/cube-clean.png" },
    { name: "Don Julio", logo: "/logos/don-julio-clean.png" },
    { name: "Glengrant", logo: "/logos/glengrant-clean.png" },
    { name: "Seoul Foundation", logo: "/logos/seoul-foundation-clean.png" },
    { name: "KICA", logo: "/logos/kica-clean.png" },
    { name: "Timothy Oulton", logo: "/logos/timothy-oulton-clean.png" },
  ];

  const projects = [
    { client: "Tequila Patrón", type: "VIP Event", year: "2024", image: brand.gallery[4] },
    { client: "Bang & Olufsen", type: "Product Showroom", year: "2024", image: brand.gallery[5] },
    { client: "BCG", type: "Corporate Exhibition", year: "2023", image: brand.gallery[0] },
  ];

  return (
    <>
      {/* ── HERO: Full-screen cinematic ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={brand.image} alt="PASO Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#b8960b] mb-6"
          >
            Since {brand.year}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-8xl lg:text-9xl font-light text-white tracking-tight"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            Space by PASO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-sm md:text-base text-[#aaa] font-light max-w-lg mx-auto"
          >
            Art Meets Space
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex gap-4 justify-center"
          >
            <a href="#exhibitions" className="px-8 py-3 border border-[#b8960b] text-[#b8960b] text-xs tracking-[0.15em] uppercase hover:bg-[#b8960b] hover:text-black transition-all duration-300">
              Exhibitions
            </a>
            <a href="#space" className="px-8 py-3 border border-[#333] text-[#888] text-xs tracking-[0.15em] uppercase hover:border-[#555] hover:text-white transition-all duration-300">
              Space
            </a>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#b8960b] to-transparent"
          />
        </motion.div>
      </section>

      {/* ── CLIENT LOGOS MARQUEE ── */}
      <section className="bg-[#0a0a0a] border-y border-[#1a1a1a] py-6 overflow-hidden">
        <div className="flex items-center animate-[marquee_30s_linear_infinite]" style={{ width: "max-content" }}>
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="mx-8 md:mx-12 flex-shrink-0">
              <img
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 max-w-[120px] md:max-w-[150px] w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>

      {/* ── we — Art. MOTION SECTION ── */}
      <section className="py-32 md:py-48 bg-black flex items-center justify-center">
        <div className="flex items-center gap-3 md:gap-5">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white"
          >
            we
          </motion.span>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "2.5rem", opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[3px] md:h-[4px] bg-[#b8960b] inline-block"
          />
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#b8960b]"
          >
            Art.
          </motion.span>
        </div>
      </section>

      {/* ── PASO Integrated Ecosystem ── */}
      <EcosystemSection />

      {/* ── EXHIBITIONS: Selected Works ── */}
      <section id="exhibitions" className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Selected</p>
              <h2 className="text-3xl md:text-5xl font-light text-white" style={{ fontFamily: "var(--font-dutch)" }}>
                we Find Art
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollExhibitions("left")}
                className="w-10 h-10 border border-[#333] text-[#888] hover:border-[#b8960b] hover:text-[#b8960b] transition-all duration-300 flex items-center justify-center text-lg"
                aria-label="Previous exhibitions"
              >
                ←
              </button>
              <button
                onClick={() => scrollExhibitions("right")}
                className="w-10 h-10 border border-[#333] text-[#888] hover:border-[#b8960b] hover:text-[#b8960b] transition-all duration-300 flex items-center justify-center text-lg"
                aria-label="Next exhibitions"
              >
                →
              </button>
            </div>
          </motion.div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-6 md:pl-[max(1.5rem,calc((100vw-1400px)/2+3rem))] pr-6 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`[data-exhibition-scroll]::-webkit-scrollbar { display: none; }`}</style>
          {exhibitions.map((ex, i) => (
            <motion.div
              key={ex.title}
              {...stagger(i)}
              className="group relative overflow-hidden cursor-pointer flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[30vw] snap-start"
              onClick={() => {
                const gallery = exhibitionGalleries[ex.title];
                if (gallery) setOpenExhibition({ title: ex.title, images: gallery.images, desc: gallery.desc });
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={ex.image}
                  alt={ex.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/70 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#b8960b] mb-2">{ex.date}</p>
                  <h3 className="text-xl md:text-2xl text-white font-light" style={{ fontFamily: "var(--font-dutch)" }}>{ex.title}</h3>
                  <p className="text-xs text-[#aaa] font-light mt-1">{ex.artist}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Exhibition gallery modal */}
      <AnimatePresence>
        {openExhibition && <ProjectGalleryModal gallery={openExhibition} onClose={() => setOpenExhibition(null)} />}
      </AnimatePresence>

      {/* ── PROGRAMS: What We Do ── */}
      <section id="programs" className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Programs</p>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-16" style={{ fontFamily: "var(--font-dutch)" }}>
              What We Do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
            {brand.features.map((f, i) => (
              <motion.div
                key={f.title}
                {...stagger(i)}
                className="bg-[#0a0a0a] p-8 md:p-10 group hover:bg-[#111] transition-colors duration-500"
              >
                <div className="mb-6 overflow-hidden">
                  <img
                    src={brand.gallery[i % brand.gallery.length]}
                    alt={f.title}
                    className="w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] block mb-3">0{i + 1}</span>
                <h3 className="text-lg text-white font-light mb-3" style={{ fontFamily: "var(--font-dutch)" }}>{f.title}</h3>
                <p className="text-sm text-[#888] font-light leading-relaxed">{f.desc}</p>
                <div className="mt-4 w-0 group-hover:w-8 h-px bg-[#b8960b] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-16" style={{ fontFamily: "var(--font-dutch)" }}>
              Recent Projects
            </h2>
          </motion.div>

          <div className="space-y-px">
            {projects.map((p, i) => (
              <motion.div
                key={p.client}
                {...stagger(i)}
                className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 items-center py-8 border-b border-[#1a1a1a] hover:border-[#333] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#555] font-light">{p.year}</span>
                  <h3 className="text-lg md:text-xl text-white font-light hover:text-[#b8960b] transition-colors" style={{ fontFamily: "var(--font-dutch)" }}>
                    {p.client}
                  </h3>
                </div>
                <p className="text-xs tracking-[0.1em] uppercase text-[#555] md:text-right">{p.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPACE: 한옥 Gallery ── */}
      <section id="space" className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Venue</p>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: "var(--font-dutch)" }}>
                Space by PASO
              </h2>
              <p className="text-[#888] font-light leading-relaxed mb-8">
                서울 종로구에 위치한 한옥 갤러리. 전통 건축의 고유한 공간미 위에 동시대 미술이 펼쳐지는 독립 전시 공간입니다. Light Room과 Dark Room, 두 개의 전시실이 서로 다른 분위기를 연출합니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors">
                  <h4 className="text-sm text-white font-light mb-2" style={{ fontFamily: "var(--font-dutch)" }}>Light Room</h4>
                  <p className="text-xs text-[#666] font-light">자연광이 스며드는 한옥 마루 공간. 회화, 설치, 사진 전시에 적합.</p>
                </div>
                <div className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors">
                  <h4 className="text-sm text-white font-light mb-2" style={{ fontFamily: "var(--font-dutch)" }}>Dark Room</h4>
                  <p className="text-xs text-[#666] font-light">조명 연출이 자유로운 밀폐 공간. 미디어아트, 영상, 몰입형 전시에 적합.</p>
                </div>
              </div>
              <a href="mailto:makim@ironact.net" className="inline-block mt-8 px-8 py-3 border border-[#b8960b] text-[#b8960b] text-xs tracking-[0.15em] uppercase hover:bg-[#b8960b] hover:text-black transition-all duration-300">
                공간 대관 문의
              </a>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={brand.gallery[0]} alt="Gallery space" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img src={brand.gallery[2]} alt="Gallery space" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-3 pt-8">
                  <div className="aspect-square overflow-hidden">
                    <img src={brand.gallery[1]} alt="Gallery space" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={brand.gallery[3]} alt="Gallery space" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOCATION INFO ── */}
      <section className="bg-black border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Location", value: "92, Seonggyungwan-ro\nJongno-gu, Seoul" },
            { label: "Hours", value: "Tue — Sat\n11:00 — 19:00" },
            { label: "Contact", value: "makim@ironact.net\n+82 10-6432-4471" },
            { label: "Instagram", value: "@pasogallery" },
          ].map((info, i) => (
            <motion.div key={info.label} {...stagger(i)}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-3">{info.label}</p>
              <p className="text-sm text-[#aaa] font-light whitespace-pre-line">{info.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <BrandCTA brand={brand} />
    </>
  );
}

/* ═══════════════════════════════════════════════════
   4. PASO AGENCY — Playful / Colorful cards
   ═══════════════════════════════════════════════════ */
function AgencyLayout({ brand }: { brand: BrandData }) {
  const cardColors = ["#d4a574", "#e8b4b8", "#a8c5da", "#c4b896", "#b8a9c9", "#98c9a3"];
  const [openGallery, setOpenGallery] = useState<{ title: string; images: string[] } | null>(null);
  return (
    <>
      <BrandHero brand={brand} />

      {/* Intro */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-base md:text-lg text-[#888] font-light leading-relaxed text-center">{brand.longDesc}</motion.p>
        </div>
      </section>

      {/* Playful project cards */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Projects</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-12" style={{ fontFamily: "var(--font-dutch)" }}>Creative Collaborations</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brand.gallery.map((img, i) => {
              const hasGallery = i in projectGalleries;
              return (
              <motion.div
                key={i}
                {...stagger(i)}
                className={`group relative overflow-hidden rounded-xl${hasGallery ? " cursor-pointer" : ""}`}
                style={{ backgroundColor: `${cardColors[i % cardColors.length]}15` }}
                onClick={hasGallery ? () => setOpenGallery(projectGalleries[i]) : undefined}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                  <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1" />
                </div>
                <div className="p-5">
                  {brand.features[i] && (
                    <>
                      <span className="inline-block px-3 py-1 text-[10px] tracking-[0.1em] uppercase rounded-full mb-3 border" style={{ color: cardColors[i % cardColors.length], borderColor: `${cardColors[i % cardColors.length]}40` }}>{brand.features[i].title}</span>
                      <p className="text-sm text-[#888] font-light">{brand.features[i].desc}</p>
                    </>
                  )}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project gallery modal */}
      <AnimatePresence>
        {openGallery && <ProjectGalleryModal gallery={openGallery} onClose={() => setOpenGallery(null)} />}
      </AnimatePresence>

      {/* Services row */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎨", title: "캐릭터 IP", desc: "라이선싱 및 제품 개발" },
              { icon: "🤝", title: "B2B 콜라보", desc: "브랜드 × 아트 프로젝트" },
              { icon: "🎭", title: "아트토이", desc: "스트릿 아트 매입·기획" },
            ].map((s, i) => (
              <motion.div key={s.title} {...stagger(i)} className="text-center p-8">
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg text-white font-light mb-2" style={{ fontFamily: "var(--font-dutch)" }}>{s.title}</h3>
                <p className="text-sm text-[#888] font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BrandCTA brand={brand} />
    </>
  );
}

/* ═══════════════════════════════════════════════════
   5. ARTLEDGER CONSULTING — Prestigious / Minimal
   ═══════════════════════════════════════════════════ */
function ConsultingLayout({ brand }: { brand: BrandData }) {
  const targets = [
    { icon: "◆", label: "컬렉터", desc: "개인 컬렉터를 위한 절세 전략, 포트폴리오 구축, 자산 가치 극대화" },
    { icon: "◆", label: "갤러리 & 기관", desc: "전시 기획 자문, 작품 가치 평가, 기관 컬렉션 관리" },
    { icon: "◆", label: "기업 & 금융기관", desc: "법인 미술품 비용처리, 감가상각 최적화, 아트 투자 자문" },
  ];
  return (
    <>
      <BrandHero brand={brand} />

      {/* Intro — text-dominant */}
      <section className="py-32 md:py-40 bg-black">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="border-l-2 border-[#b8960b] pl-8 md:pl-12">
            <p className="text-lg md:text-xl text-[#aaa] font-light leading-relaxed" style={{ fontFamily: "var(--font-dutch)" }}>{brand.longDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Services — 3 cards with curated images */}
      <section className="py-24 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Services</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>전문 자문 서비스</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {brand.features.slice(0, 3).map((f, i) => (
              <motion.div key={f.title} {...stagger(i)} className="bg-[#0a0a0a] p-8 md:p-10 group">
                <div className="overflow-hidden mb-6">
                  <img src={f.image || brand.gallery[i % brand.gallery.length]} alt={f.title} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <p className="text-sm tracking-[0.08em] uppercase text-white mb-3" style={{ fontFamily: "var(--font-dutch)" }}>{f.title}</p>
                <p className="text-sm text-[#888] font-light leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-10">Process</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px">
            {["Review", "Valuation", "Strategy", "Execute"].map((step, i) => (
              <motion.div key={step} {...stagger(i)} className="p-8 text-center relative">
                <p className="text-5xl font-light text-[#1a1a1a] mb-4" style={{ fontFamily: "var(--font-dutch)" }}>0{i + 1}</p>
                <p className="text-sm tracking-[0.1em] uppercase text-white">{step}</p>
                {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-[#333]" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Programs</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>교육 & 네트워킹</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brand.features.slice(3, 6).map((f, i) => (
              <motion.div key={f.title} {...stagger(i)} className="border border-[#1a1a1a] p-8 hover:border-[#333] transition-colors duration-500">
                <p className="text-xs tracking-[0.15em] uppercase text-[#b8960b] mb-4">0{i + 1}</p>
                <h3 className="text-lg text-white font-light mb-3">{f.title}</h3>
                <p className="text-sm text-[#888] font-light leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target clients */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">For</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>누구를 위한 서비스인가</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targets.map((t, i) => (
              <motion.div key={t.label} {...stagger(i)} className="group">
                <p className="text-[#b8960b] text-xs mb-3">{t.icon}</p>
                <h3 className="text-lg text-white font-light mb-3" style={{ fontFamily: "var(--font-dutch)" }}>{t.label}</h3>
                <p className="text-sm text-[#888] font-light leading-relaxed">{t.desc}</p>
                <div className="mt-4 w-0 group-hover:w-10 h-px bg-[#b8960b] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BrandCTA brand={brand} />
    </>
  );
}

/* ─── Router ─── */
export default function BrandLanding({ brand }: { brand: BrandData }) {
  switch (brand.slug) {
    case "artrader": return <ArtraderLayout brand={brand} />;
    case "paso-art-center": return <ArtCenterLayout brand={brand} />;
    case "paso-gallery": return <GalleryLayout brand={brand} />;
    case "paso-agency": return <AgencyLayout brand={brand} />;
    case "artledger-consulting": return <ConsultingLayout brand={brand} />;
    default: return <ArtraderLayout brand={brand} />;
  }
}
