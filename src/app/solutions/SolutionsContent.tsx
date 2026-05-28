"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";

export default function SolutionsContent() {
  const { t } = useLocale();

  const solutions = [
    {
      brand: "Artrader",
      slug: "artrader",
      title: t("solutions.artrader.title"),
      desc: t("solutions.artrader.desc"),
      color: "#ffffff",
      features: [
        t("solutions.artrader.f1"),
        t("solutions.artrader.f2"),
        t("solutions.artrader.f3"),
        t("solutions.artrader.f4"),
      ],
      image: "/brands/artrader-platform-hd.png",
    },
    {
      brand: "Artledger Consulting",
      slug: "artledger-consulting",
      title: t("solutions.artledger.title"),
      desc: t("solutions.artledger.desc"),
      color: "#ffffff",
      features: [
        t("solutions.artledger.f1"),
        t("solutions.artledger.f2"),
        t("solutions.artledger.f3"),
        t("solutions.artledger.f4"),
      ],
      image: "/brands/artledger-consulting.jpg",
    },
    {
      brand: "PASO Art Center",
      slug: "paso-art-center",
      title: t("solutions.artcenter.title"),
      desc: t("solutions.artcenter.desc"),
      color: "#ffffff",
      features: [
        t("solutions.artcenter.f1"),
        t("solutions.artcenter.f2"),
        t("solutions.artcenter.f3"),
      ],
      image: "/brands/paso-artcenter-building.jpg",
    },
    {
      brand: "Paso Gallery",
      slug: "paso-gallery",
      title: t("solutions.gallery.title"),
      desc: t("solutions.gallery.desc"),
      color: "#ffffff",
      features: [
        t("solutions.gallery.f1"),
        t("solutions.gallery.f2"),
        t("solutions.gallery.f3"),
        t("solutions.gallery.f4"),
      ],
      image: "/brands/paso-gallery.png",
    },
    {
      brand: "Paso Agency",
      slug: "paso-agency",
      title: t("solutions.agency.title"),
      desc: t("solutions.agency.desc"),
      color: "#ffffff",
      features: [
        t("solutions.agency.f1"),
        t("solutions.agency.f2"),
        t("solutions.agency.f3"),
        t("solutions.agency.f4"),
      ],
      image: "/brands/paso-agency.jpg",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/exhibitions/golden-reeds/golden-reeds-1.jpg"
            alt="PASO Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-white"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            {t("solutions.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg text-[#bbb] font-light max-w-2xl"
            style={{ wordBreak: "keep-all" }}
          >
            {t("solutions.hero.lead")}
          </motion.p>
        </div>
      </section>

      {/* Solutions list */}
      <section className="pb-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-0">
          {solutions.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[#1a1a1a] grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24 items-center"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="text-[10px] uppercase mb-3" style={{ color: s.color }}>{s.brand}</p>
                <h2 className="text-2xl md:text-3xl font-light text-white mb-4" style={{ fontFamily: "var(--font-dutch)" }}>{s.title}</h2>
                <p className="text-base text-[#999] font-normal leading-relaxed mb-6" style={{ wordBreak: "keep-all" }}>{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="text-base text-[#ccc] font-normal flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/brands/${s.slug}`}
                  className="inline-block text-xs uppercase border px-6 py-2.5 hover:bg-white/5 transition-colors"
                  style={{ color: s.color, borderColor: `${s.color}40` }}
                >
                  {t("solutions.learn_more")} →
                </Link>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
