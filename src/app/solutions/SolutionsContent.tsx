"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function SolutionsContent() {
  const { t } = useLocale();

  const solutions = [
    {
      brand: "Artrader",
      slug: "artrader",
      title: t("solutions.artrader.title"),
      desc: t("solutions.artrader.desc"),
      image: "/brands/artrader-platform-hd.png",
    },
    {
      brand: "Paso Agency",
      slug: "paso-agency",
      title: t("solutions.agency.title"),
      desc: t("solutions.agency.desc"),
      image: "/brands/paso-agency.jpg",
    },
    {
      brand: "Paso Gallery",
      slug: "paso-gallery",
      title: t("solutions.gallery.title"),
      desc: t("solutions.gallery.desc"),
      image: "/brands/paso-gallery.png",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen" style={{ fontFamily: "var(--font-sans), -apple-system, 'Inter', sans-serif" }}>
      {/* Intro */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight max-w-4xl text-white"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            {t("solutions.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 md:mt-10 text-base md:text-lg text-[#bbb] leading-relaxed max-w-2xl"
            style={{ wordBreak: "keep-all" }}
          >
            {t("solutions.hero.lead")}
          </motion.p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Solutions list — Pace-style editorial cards on dark bg */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto space-y-24 md:space-y-32">
          {solutions.map((s, i) => (
            <motion.article
              key={s.slug}
              id={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-start"
            >
              {/* Image */}
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2 lg:col-start-6" : ""}`}>
                <div className={`relative w-full bg-card overflow-hidden ${s.slug === "artrader" ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className={`w-full h-full ${s.slug === "artrader" ? "object-contain p-6 md:p-10" : "object-cover"}`}
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`lg:col-span-5 lg:pt-8 ${i % 2 ? "lg:order-1" : ""}`}>
                <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-white">
                  {s.brand}
                </h2>

                <div className="mt-6 text-[15px] md:text-base text-[#ccc] leading-[1.75] space-y-4" style={{ wordBreak: "keep-all" }}>
                  <p className="text-white/90">{s.title}</p>
                  <p>{s.desc}</p>
                </div>

                <Link
                  href={`/brands/${s.slug}`}
                  className="inline-block mt-8 text-[15px] text-white underline underline-offset-4 decoration-1 decoration-white/40 hover:decoration-white transition-colors"
                >
                  {t("solutions.learn_more")}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
