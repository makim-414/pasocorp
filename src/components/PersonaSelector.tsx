"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function PersonaSelector() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);

  const personas = [
    {
      index: "01",
      label: "Corporate",
      title: t("persona.corporate.title"),
      desc: t("persona.corporate.desc"),
      links: [
        { name: "Artrader", href: "/brands/artrader" },
        { name: "Artledger Consulting", href: "/brands/artledger-consulting" },
      ],
    },
    {
      index: "02",
      label: "Brand",
      title: t("persona.brand.title"),
      desc: t("persona.brand.desc"),
      links: [
        { name: "Paso Agency", href: "/brands/paso-agency" },
        { name: "Spaces", href: "/spaces" },
      ],
    },
    {
      index: "03",
      label: "Collector",
      title: t("persona.collector.title"),
      desc: t("persona.collector.desc"),
      links: [
        { name: "Artrader", href: "/brands/artrader" },
        { name: "PASO Art Center", href: "/brands/paso-art-center" },
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-black border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div {...fadeUp} className="mb-14 md:mb-20 max-w-3xl">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#b8960b] mb-5">{t("persona.tag")}</p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-[1.15]" style={{ fontFamily: "var(--font-dutch)", wordBreak: "keep-all" }}>
            {t("persona.title")}
          </h2>
        </motion.div>

        {/* Editorial rows — full-width, expand on hover to reveal routes */}
        <div className="border-t border-border">
          {personas.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => setActive(i)}
              className={`group relative border-b border-border transition-colors duration-500 ${active === i ? "bg-[#0c0b08]" : ""}`}
            >
              {/* Gold sweep accent on the active row */}
              <span
                className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b8960b] to-transparent transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-0"}`}
              />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start px-2 md:px-6 py-8 md:py-11">
                {/* Index + label */}
                <div className="lg:col-span-3 flex items-baseline gap-4">
                  <span
                    className="text-2xl md:text-3xl font-light tabular-nums transition-colors duration-500"
                    style={{ fontFamily: "var(--font-dutch)", color: active === i ? "var(--color-gold-bright)" : "#3a3a3a" }}
                  >
                    {p.index}
                  </span>
                  <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a8a8a] pt-2">{p.label}</span>
                </div>

                {/* Question + desc */}
                <div className="lg:col-span-5">
                  <h3
                    className="text-xl md:text-2xl font-light text-white leading-snug mb-2 transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "var(--font-dutch)", wordBreak: "keep-all" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted font-light" style={{ wordBreak: "keep-all" }}>{p.desc}</p>
                </div>

                {/* Routes */}
                <div className="lg:col-span-4 flex flex-col gap-2.5 lg:items-end">
                  {p.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      className="inline-flex items-center gap-2 text-sm text-[#cfcfcf] font-light hover:text-[#b8960b] transition-colors"
                    >
                      <span className="tracking-wide">{link.name}</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="opacity-50 transition-transform duration-300 group-hover:translate-x-0.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
