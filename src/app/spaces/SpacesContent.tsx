"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function SpacesContent() {
  const { t } = useLocale();
  return (
    <main className="pt-16">
      {/* ── Hero with Background Image ── */}
      <section className="relative h-[85vh] md:h-screen flex items-end overflow-hidden">
        <Image
          src="/images/about-space/img-024.jpg"
          alt="Paso Gallery interior"
          fill
          className="object-cover"
          priority
        />
        {/* Smooth bottom-fade so the hero blends into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <motion.div {...fadeUp}>            <h1
              className="text-4xl md:text-7xl font-light text-white mb-4"
              style={{ fontFamily: "var(--font-dutch)" }}
            >
              {t("spaces.hero.title")}
            </h1>
            <p className="text-[#bbb] font-light leading-relaxed max-w-2xl text-lg" style={{ wordBreak: "keep-all" }}>
              {t("spaces.hero.lead")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PASO Event Partner ── */}
      <section className="py-28 md:py-36 bg-black border-b border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <img
              src="/images/logos/paso-logo.png"
              alt="PASO"
              className="h-12 md:h-16 w-auto mx-auto mb-4"
            />
            <p className="text-sm md:text-base text-[#bbb] mb-12" style={{ fontFamily: "var(--font-sans)" }}>
              {t("spaces.event_partner.tagline")}
            </p>
            <div className="max-w-[680px] mx-auto space-y-6 text-left text-[#e5e5e5] font-normal text-base md:text-[17px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word", lineHeight: 1.9 }}>
              <p>{t("spaces.event_partner.p1")}</p>
              <p>{t("spaces.event_partner.p2")}</p>
              <p>{t("spaces.event_partner.p3")}</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-white text-xl mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>Paso Gallery</p>
                <div className="text-[11px] text-[#bbb] font-normal space-y-0.5">
                  <p>{t("spaces.role.gallery.l1")}</p>
                  <p>{t("spaces.role.gallery.l2")}</p>
                </div>
              </div>
              <div>
                <p className="text-white text-xl mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>Paso Agency</p>
                <div className="text-[11px] text-[#bbb] font-normal space-y-0.5">
                  <p>{t("spaces.role.agency.l1")}</p>
                  <p>{t("spaces.role.agency.l2")}</p>
                </div>
              </div>
              <div>
                <p className="text-white text-xl mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>Artrader</p>
                <div className="text-[11px] text-[#bbb] font-normal space-y-0.5">
                  <p>{t("spaces.role.artrader.l1")}</p>
                  <p>{t("spaces.role.artrader.l2")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Brochure Download ── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.p {...fadeUp} className="text-xs text-[#bbb] mb-4">Brochure</motion.p>
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: "var(--font-dutch)" }}>
            공간 안내서
          </motion.h2>
          <motion.p {...fadeUp} className="text-[#bbb] text-sm md:text-base mb-10" style={{ wordBreak: "keep-all", lineHeight: 1.85 }}>
            갤러리 공간 구성, 도면, 시설 안내가 담겨 있습니다.
          </motion.p>
          <motion.div {...fadeUp} className="mx-auto max-w-[560px] border border-[#1e1e1e] bg-black px-8 py-10">
            <p className="text-xs text-[#8a8a8a] mb-5">PDF · 공간 구성 · 도면 · 시설</p>
            <a
              href="/docs/paso-gallery-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-white text-black text-sm font-medium hover:bg-[#e0e0e0] transition-colors duration-300"
            >
              안내서 PDF 다운로드
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Private Programs ── */}
      <section className="py-32 md:py-44 bg-black border-y border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <h2
              className="text-3xl md:text-5xl font-medium text-white mb-8"
              style={{ fontFamily: "var(--font-dutch)" }}
            >
              {t("spaces.private.title")}
            </h2>
            <div className="w-16 h-[3px] bg-white mx-auto mb-12" />
            <div className="space-y-8 text-[#d4d4d4] font-medium leading-relaxed text-sm md:text-base" style={{ wordBreak: "keep-all" }}>
              <p>
                {t("spaces.private.p1.line1")}<br />
                {t("spaces.private.p1.line2")}
              </p>
              <p>
                {t("spaces.private.p2.line1")}<br />
                {t("spaces.private.p2.line2")}
              </p>
              <p>{t("spaces.private.p3")}</p>
              <p>
                {t("spaces.private.p4.line1")}<br />
                {t("spaces.private.p4.line2")}
              </p>
              <p>
                {t("spaces.private.p5.line1")}<br />
                <a href="https://pasocorp.com" target="_blank" rel="noopener noreferrer" className="text-[#e5e5e5] hover:text-white transition-colors">www.pasocorp.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Location Info ── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Location", value: "92, Seonggyungwan-ro\nJongno-gu, Seoul" },
              { label: "Hours", value: "Tue ~ Sat\n11:00 ~ 19:00" },
              { label: "Contact", value: "info@pasogallery.com\n+82 2 925 3631" },
              { label: "Instagram", value: "@pasogallery" },
            ].map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <p className="text-xs text-[#8a8a8a] mb-3">{info.label}</p>
                <p className="text-sm text-[#d4d4d4] font-medium whitespace-pre-line">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
