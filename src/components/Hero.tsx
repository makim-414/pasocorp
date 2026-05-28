"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BackgroundBeams from "./BackgroundBeams";

import BlurInText from "./ui/blur-in-text";
import WeArtHero from "./WeArtHero";
import { useLocale } from "@/i18n/LocaleProvider";

const brands = [
  { name: "Artrader.io", image: "/brands/artrader-new.png", gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 30%, #5bbf9e 70%, #7ecfb3 100%)", color: "#2ecc71", href: "https://artrader.io", enabled: true },
  { name: "Paso Gallery", image: "/images/gallery/gallery-06.jpg", color: "#1e3a5f", href: "https://pasogallery.com", enabled: true },
  { name: "Paso Agency", image: "/images/projects/twosome/twosome-5.jpg", color: "#d4a574", href: "/brands/paso-agency", enabled: true },
  { name: "Artledger", image: "/brands/artledger-consulting.jpg", color: "#9ca3af", href: "/brands/artledger-consulting", enabled: true },
  { name: "Art Center", image: "/images/whats-happening/preopening.png", color: "#a0522d", href: "/brands/paso-art-center", enabled: true },
];

const units = [
  { name: "Paso Gallery", href: "https://pasogallery.com" },
  { name: "Paso Agency", href: "/brands/paso-agency" },
  { name: "Artrader", href: "/brands/artrader" },
  { name: "Artledger Consulting", href: "/brands/artledger-consulting" },
  { name: "Paso Art Center", href: "/brands/paso-art-center" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { t, locale } = useLocale();

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
            {brands[hoveredBrand].gradient ? (
              <div className="absolute inset-0" style={{ background: brands[hoveredBrand].gradient }} />
            ) : (
              <Image
                src={brands[hoveredBrand].image}
                alt={brands[hoveredBrand].name}
                fill
                className="object-cover"
                sizes="100vw"
                priority={false}
              />
            )}
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

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          className="mt-4 md:mt-5 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#4a4a4a] font-light"
        >
          {t("hero.tag")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mt-6 md:mt-8 max-w-[640px] mx-auto text-sm md:text-base text-[#9a9a9a] font-light leading-relaxed px-4"
          style={{ wordBreak: "keep-all" }}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Brand units — vertical editorial list */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-12 md:mt-16 flex flex-col items-center gap-[10px] md:gap-3"
        >
          {units.map((u) => (
            <a
              key={u.name}
              href={u.href}
              className="text-[13px] md:text-[15px] tracking-[0.12em] uppercase text-[#666] hover:text-[#b8960b] transition-colors duration-400 font-light"
            >
              {u.name}
            </a>
          ))}
        </motion.nav>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 md:mt-16"
        >
          <a
            href="/contact"
            className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#b8960b]/70 hover:text-[#b8960b] transition-colors duration-500"
          >
            {t("hero.cta_get_in_touch")} →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#555]">{t("hero.scroll")}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 md:h-8 bg-gradient-to-b from-[#555] to-transparent"
        />
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={() => setShowContact(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full h-full md:h-auto md:max-w-lg md:rounded-2xl bg-[#111] border border-[#1a1a1a] overflow-y-auto"
            >
              <div className="p-6 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-1">Consultation</p>
                    <h2 className="text-xl md:text-2xl font-light text-white">문의하기</h2>
                  </div>
                  <button onClick={() => setShowContact(false)} className="text-[#555] hover:text-white transition-colors p-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormStatus("sending");
                    const fd = new FormData(e.currentTarget);
                    fd.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
                    fd.append("subject", "PASO 무료 상담 신청");
                    fd.append("from_name", "PASO 웹사이트");
                    try {
                      const res = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: fd,
                      });
                      if (res.ok) {
                        setFormStatus("sent");
                        setTimeout(() => { setShowContact(false); setFormStatus("idle"); }, 1500);
                      } else {
                        setFormStatus("error");
                      }
                    } catch {
                      setFormStatus("error");
                    }
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">이름</label>
                      <input name="name" required type="text" placeholder="홍길동" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors placeholder:text-[#444]" />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">이메일</label>
                      <input name="email" required type="email" placeholder="email@example.com" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors placeholder:text-[#444]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">연락처</label>
                      <input name="phone" type="tel" placeholder="010-0000-0000" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors placeholder:text-[#444]" />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">소속</label>
                      <input name="company" type="text" placeholder="기관명 (개인은 생략 가능)" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors placeholder:text-[#444]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">상담 유형</label>
                    <select name="consultType" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors [&>option]:bg-[#111]">
                      <option value="">선택해주세요</option>
                      <option value="증여·상속 절세">증여·상속 절세</option>
                      <option value="법인 미술품 비용처리">법인 미술품 비용처리</option>
                      <option value="컬렉션 구축·리밸런싱">컬렉션 구축·리밸런싱</option>
                      <option value="작품 가치 평가">작품 가치 평가</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">문의 내용</label>
                    <textarea name="message" rows={3} placeholder="문의 내용을 입력해주세요" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors resize-none placeholder:text-[#444]" />
                  </div>
                  {formStatus === "error" && (
                    <p className="text-red-400 text-xs">전송에 실패했습니다. 다시 시도해주세요.</p>
                  )}
                  <button
                    type="submit"
                    disabled={formStatus === "sending" || formStatus === "sent"}
                    className="w-full mt-2 py-3 bg-[#b8960b] text-black text-sm font-medium tracking-wide rounded hover:bg-[#a0820a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formStatus === "sending" ? "전송 중..." : formStatus === "sent" ? "문의가 접수되었습니다" : "문의하기"}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
