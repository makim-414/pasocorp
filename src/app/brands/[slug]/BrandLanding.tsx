"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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
};

function ProjectGalleryModal({ gallery, onClose }: { gallery: { title: string; images: string[] }; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div className="w-full max-w-[1200px] px-6 py-16" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl md:text-3xl font-light text-white" style={{ fontFamily: "var(--font-dutch)" }}>{gallery.title}</h2>
          <button onClick={onClose} className="text-[#888] hover:text-white transition-colors text-3xl leading-none">&times;</button>
        </div>
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
  features: { title: string; desc: string }[];
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
   3. PASO GALLERY — White cube / Masonry grid
   ═══════════════════════════════════════════════════ */
function GalleryLayout({ brand }: { brand: BrandData }) {
  const heights = ["h-64", "h-80", "h-56", "h-72", "h-60", "h-96"];
  return (
    <>
      <BrandHero brand={brand} />

      {/* Intro */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div {...fadeUp} className="lg:col-span-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">About</p>
            <h2 className="text-2xl md:text-3xl font-light text-white mb-6" style={{ fontFamily: "var(--font-dutch)" }}>신진작가와 함께</h2>
            <p className="text-[#888] font-light leading-relaxed">{brand.longDesc}</p>
          </motion.div>
          <div className="lg:col-span-3">
            {/* Masonry grid */}
            <div className="columns-2 md:columns-3 gap-3 space-y-3">
              {brand.gallery.map((img, i) => (
                <motion.div key={i} {...stagger(i)} className="break-inside-avoid overflow-hidden group">
                  <div className={`relative ${heights[i % heights.length]} overflow-hidden`}>
                    <img src={img} alt={`Work ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current exhibition */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Current Exhibition</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brand.features.map((f, i) => (
              <motion.div key={f.title} {...stagger(i)} className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors">
                <h3 className="text-lg text-white font-light mb-2" style={{ fontFamily: "var(--font-dutch)" }}>{f.title}</h3>
                <p className="text-sm text-[#888] font-light">{f.desc}</p>
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
                  <img src={brand.gallery[i % brand.gallery.length]} alt={f.title} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
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
                <h3 className="text-lg text-white font-light mb-3" style={{ fontFamily: "var(--font-dutch)" }}>{f.title}</h3>
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
