"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function PersonaSelector() {
  const { t } = useLocale();
  const personas = [
    {
      label: "Corporate",
      title: t("persona.corporate.title"),
      desc: t("persona.corporate.desc"),
      links: [
        { name: "Artrader", href: "/brands/artrader" },
        { name: "Contact", href: "/contact?topic=data" },
      ],
    },
    {
      label: "Brand",
      title: t("persona.brand.title"),
      desc: t("persona.brand.desc"),
      links: [
        { name: "Paso Agency", href: "/brands/paso-agency" },
        { name: "Spaces", href: "/spaces" },
      ],
    },
    {
      label: "Collector",
      title: t("persona.collector.title"),
      desc: t("persona.collector.desc"),
      links: [
        { name: "Artrader", href: "/brands/artrader" },
        { name: "Paso Gallery", href: "https://pasogallery.com" },
      ],
    },
  ];
  return (
    <section className="py-20 md:py-24 bg-black border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">{t("persona.tag")}</p>
          <h2 className="text-2xl md:text-4xl font-light text-white" style={{ wordBreak: "keep-all" }}>{t("persona.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-border rounded-xl p-8 hover:border-[#b8960b]/50 transition-all duration-500 hover:-translate-y-1"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">{p.label}</p>
              <h3 className="text-lg text-white font-light mb-3 leading-snug" style={{ wordBreak: "keep-all" }}>{p.title}</h3>
              <p className="text-sm text-muted font-light mb-8" style={{ wordBreak: "keep-all" }}>{p.desc}</p>
              <div className="flex flex-col gap-2">
                {p.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className="flex items-center justify-between text-sm text-[#ccc] font-light py-2 border-b border-border group-hover:border-[#333] transition-colors hover:text-[#b8960b]"
                  >
                    {link.name}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-40"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
