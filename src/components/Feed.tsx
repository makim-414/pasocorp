"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FlywheelVisual from "./FlywheelVisual";
import BrandTabs from "./BrandTabs";
import ProjectCases from "./ProjectCases";

/* ───── Animated counter ───── */
function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <p className="text-4xl md:text-5xl font-light tracking-tight" style={{ fontFamily: "var(--font-dutch)" }}>
        {value}
      </p>
      <p className="text-[11px] tracking-[0.12em] uppercase text-[var(--color-muted)] mt-3 whitespace-pre-line leading-relaxed">{label}</p>
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

/* ───── Section: text + image side by side ───── */
function SplitSection({
  tag,
  title,
  desc,
  cta,
  image,
  reverse,
}: {
  tag: string;
  title: string;
  desc: string;
  cta: string;
  image: string;
  reverse?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-0`}>
      {/* Image side */}
      <div className={`${reverse ? "md:order-2" : ""} bg-black py-8 md:py-12 flex items-center`}>
        <ParallaxImg src={image} alt={title} className="aspect-[4/3] md:aspect-auto md:h-full min-h-[250px] md:min-h-[350px]" />
      </div>
      {/* Text side */}
      <div className={`flex flex-col justify-center px-5 md:px-14 py-10 md:py-14 ${reverse ? "md:order-1" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--color-muted)]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)]">{tag}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light leading-tight mb-5 whitespace-pre-line" style={{ fontFamily: "var(--font-dutch)" }}>
            {title}
          </h2>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-md mb-8">{desc}</p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium hover:opacity-60 transition-opacity"
          >
            {cta} <span className="text-lg">⟶</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

/* ───── Full-width cinematic block ───── */
function CinematicBlock({ image, title, subtitle }: { image: string; title: string; subtitle: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  return (
    <div ref={ref} className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] min-h-[250px] md:min-h-[300px]">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-5xl text-white font-light mb-3" style={{ fontFamily: "var(--font-dutch)" }}>
            {title}
          </h2>
          <p className="text-white/70 text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

/* ───── 3-column feature cards (staggered heights like Sotheby's) ───── */
function TripleFeature() {
  const cards = [
    {
      image: "https://pasogallery.com/images/heritage/heritage-interior.jpg",
      title: "Paso Private Sales",
      desc: "Paso Gallery의 프라이빗 세일",
      tall: false,
      href: "/brands/paso-gallery",
    },
    {
      image: "https://drive.google.com/thumbnail?id=1paMxCxAhSsNRMRFoCeZl8APlMijfVdGw&sz=w1200",
      title: "프리오프닝 상설전",
      desc: "PASO Art Center의 첫 전시",
      tall: true,
      href: "https://www.joongang.co.kr/article/25312608",
    },
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      title: "마곡 아트 살롱",
      desc: "월간 커뮤니티 아트 토크",
      tall: false,
      href: "#",
    },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="px-5 md:px-14 py-10 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light mb-3" style={{ fontFamily: "var(--font-dutch)" }}>
          What&apos;s Happening
        </h2>
        <p className="text-sm text-[var(--color-muted)]">Exhibitions, events, and community programmes</p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium mt-4 hover:opacity-60 transition-opacity"
        >
          EXPLORE MORE <span className="text-lg">⟶</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={i === 1 ? "md:-mt-8" : "md:mt-8"}
          >
            <a href={card.href} target={card.href !== "#" ? "_blank" : undefined} rel={card.href !== "#" ? "noopener noreferrer" : undefined} className="block cursor-pointer group/card">
              <div className={`relative overflow-hidden ${card.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image src={card.image} alt={card.title} fill className="object-cover group-hover/card:object-contain transition-all duration-700" sizes="33vw" />
              </div>
              <div className="mt-4 text-center">
                <div className="w-px h-5 bg-[var(--color-border)] mx-auto mb-3" />
                <h3 className="text-lg font-light" style={{ fontFamily: "var(--font-dutch)" }}>{card.title}</h3>
                <p className="text-xs text-[var(--color-muted)] mt-1">{card.desc}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───── Dark category footer (like Sotheby's) ───── */
function DarkCategories() {
  const categories = [
    {
      title: "Services",
      subtitle: "What we offer",
      items: ["Art Trading", "Art Advisory", "Tax & Valuation", "Corporate Art", "IP Licensing", "Space Design"],
      cta: "SEE ALL SERVICES",
    },
    {
      title: "Spaces",
      subtitle: "Where art lives",
      items: ["PASO Art Center", "PASO Gallery", "Gallery Rental", "Event Space", "Coworking"],
      cta: "SEE ALL SPACES",
    },
    {
      title: "Brands",
      subtitle: "Our ecosystem",
      items: ["Artrader.io", "Artledger Consulting", "PASO Agency", "PASO Gallery", "PASO Art Center"],
      cta: "SEE ALL BRANDS",
    },
  ];
  return (
    <div className="bg-[#0c1829] text-white px-5 md:px-14 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-2xl font-light mb-1" style={{ fontFamily: "var(--font-dutch)" }}>{cat.title}</h3>
            <p className="text-xs text-white/50 mb-6">{cat.subtitle}</p>
            <div className="flex flex-col gap-3">
              {cat.items.map((item) => (
                <Link key={item} href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium mt-8 text-white/60 hover:text-white transition-colors"
            >
              {cat.cta} <span className="text-base">⟶</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───── Sotheby's-style rich footer ───── */
function RichFooter() {
  return (
    <div className="bg-[#0a1420] text-white px-5 md:px-14 py-10 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 className="text-lg mb-3" style={{ fontFamily: "var(--font-dutch)" }}>PASO Corp.</h3>
          <Link href="#" className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/60 hover:text-white">
            CONTACT US <span className="text-base">⟶</span>
          </Link>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#b8960b] mb-4">Company</p>
          {["About Us", "Our Story", "Team", "Partners", "Press", "Careers"].map((l) => (
            <Link key={l} href="#" className="block text-sm text-white/70 hover:text-white mb-2">{l}</Link>
          ))}
        </div>
        <div>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#b8960b] mb-4">Platforms</p>
          {["Artrader.io", "Artledger", "PASO Gallery", "PASO Art Center"].map((l) => (
            <Link key={l} href="#" className="block text-sm text-white/70 hover:text-white mb-2">{l}</Link>
          ))}
        </div>
        <div>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#b8960b] mb-4">Connect</p>
          {["Instagram", "LinkedIn"].map((l) => (
            <Link key={l} href="#" className="block text-sm text-white/70 hover:text-white mb-2">{l}</Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-white/40">© 2026 PASO Corp. All rights reserved.</p>
        <div className="flex gap-6 text-[11px] text-white/40">
          {["Instagram", "LinkedIn"].map((s) => (
            <Link key={s} href="#" className="hover:text-white/70">{s}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════ MAIN FEED ═══════════════ */
export default function Feed() {
  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center justify-end gap-2 px-5 md:px-14 pt-6 md:pt-8">
        <button className="flex items-center gap-1.5 px-4 py-2 text-sm border border-[var(--color-border)] rounded-full hover:border-[var(--color-fg)] transition-colors">
          Favourited <span className="text-xs">☆</span>
        </button>
        <button className="flex items-center gap-1.5 px-4 py-2 text-sm border border-[var(--color-border)] rounded-full hover:border-[var(--color-fg)] transition-colors">
          Search <span className="text-xs">⌕</span>
        </button>
      </div>

      {/* Brand tabs with transition panel */}
      <BrandTabs />

      {/* Section 1: Intro — flywheel visual left, text right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="min-h-[300px] md:min-h-[400px]">
          <FlywheelVisual />
        </div>
        <div className="flex flex-col justify-center px-5 md:px-14 py-10 md:py-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--color-muted)]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)]">About PASO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light leading-tight mb-5 whitespace-pre-line" style={{ fontFamily: "var(--font-dutch)" }}>
            {"Art as an Asset Class.\nStrategy as a Service."}
          </h2>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-md mb-8">
            PASO는 미술을 자산으로, 전략을 서비스로. 데이터 기반 미술품 거래 자문부터 갤러리 / 미술관 운영, 기업 컬렉션 자문과 미술 프로젝트 운용까지, 미술 생태계의 모든 것을 연결합니다.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium hover:opacity-60 transition-opacity"
          >
            SEE DETAILS <span className="text-lg">⟶</span>
          </Link>
        </div>
      </div>

      {/* Section 2: Stats */}
      <div className="border-t border-[var(--color-border)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-5 md:px-14 py-10 md:py-14">
          <Counter value="1,580만+" label={"보유 옥션 데이터"} />
          <Counter value="90,000+" label={"국내 미술시장\n분석 데이터"} />
          <Counter value="₩13.2B" label={"위탁 리밸런싱\n컬렉션 AUM"} />
          <Counter value="2020" label={"설립 연도"} />
        </div>
      </div>

      {/* Section 3: Triple feature (staggered) — Now & Upcoming */}
      <div className="border-t border-[var(--color-border)]">
        <TripleFeature />
      </div>

      {/* Section 4: Service — image left, text right (reversed) */}
      <div className="py-8 md:py-12" />
      <SplitSection
        tag="Artrader"
        title="Data-Driven Art Trading Platform"
        desc="국내외 경매·Private Sales 등 1,500만 건 이상 거래 데이터. Artist Index, 종목분석서 스타일 정량 리포트로 미술품 투자의 새로운 기준을 제시합니다."
        cta="EXPLORE ARTRADER"
        image="/brands/artrader-platform.jpg"
        reverse
      />

      {/* Section 4: Cinematic */}
      <div className="py-8 md:py-12" />
      <CinematicBlock
        image="/brands/paso-artcenter-building.jpg"
        title="PASO Art Center"
        subtitle="마곡의 새로운 문화 거점. 전시, 세미나, 커뮤니티."
      />

      {/* Section 5: Service — text left, image right */}
      <SplitSection
        tag="Advisory"
        title="Art Consulting & Tax Strategy"
        desc="증여·상속, 법인 비용·감가, 컬렉션 관리. Review → Valuation → Strategy → Execute. 미술 자산의 전 생애를 함께합니다."
        cta="EXPLORE ADVISORY"
        image="/brands/artledger-consulting.jpg"
      />

      {/* Section 7: Service — reversed */}
      <SplitSection
        tag="Agency"
        title="IP & Brand Collaboration"
        desc="프랜차이즈 브랜드 아트 프로젝트, 캐릭터 IP 라이선싱, 아트토이·스트릿 아트 매입. 브랜드와 예술의 접점을 설계합니다."
        cta="EXPLORE AGENCY"
        image="/brands/paso-agency.jpg"
        reverse
      />

      {/* Section 8: Dark categories */}
      {/* Project Cases Carousel */}
      <ProjectCases />

      <DarkCategories />

      {/* Section 9: Footer */}
      <RichFooter />
    </div>
  );
}
