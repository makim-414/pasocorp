"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";

// Real exhibition photography from /public/images/exhibitions — the gallery
// itself is the strongest trust signal the group owns.
const shows = [
  { title: "REBORN", image: "/images/exhibitions/reborn/reborn-cover.jpg" },
  { title: "Forest of Finity", image: "/images/exhibitions/forest-of-finity/forest-of-finity-cover.jpg" },
  { title: "Golden Reeds", image: "/images/exhibitions/golden-reeds/golden-reeds-1.jpg" },
  { title: "Traces of Light", image: "/images/exhibitions/traces-of-light/intermission-cover.jpg" },
  { title: "B&O × Patrón", image: "/images/exhibitions/bno-patron/bno-patron-cover.jpg" },
  { title: "HINO Salon", image: "/images/exhibitions/hino-salon/hino-salon-cover.jpg" },
];

export default function ExhibitionStrip() {
  const { t } = useLocale();
  return (
    <section className="bg-black border-t border-border py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-3"
            >
              {t("exhibitions.tag")}
            </motion.p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>
              {t("exhibitions.title")}
            </h2>
          </div>
          <a
            href="https://pasogallery.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.15em] uppercase text-[#8a8a8a] hover:text-[#b8960b] transition-colors duration-300"
          >
            {t("exhibitions.cta")} →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {shows.map((show, i) => (
            <motion.a
              key={show.title}
              href="https://pasogallery.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative block aspect-[4/3] overflow-hidden bg-card"
            >
              <Image
                src={show.image}
                alt={show.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <p
                className="absolute bottom-3 left-4 text-sm text-white/90 font-light tracking-wide"
                style={{ fontFamily: "var(--font-dutch)" }}
              >
                {show.title}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
