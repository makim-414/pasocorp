"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "./fx/Marquee";
import { useLocale } from "@/i18n/LocaleProvider";

// White-on-transparent marks from /public/logos. Heights are tuned per mark so
// wordmarks and emblems read at the same optical size.
const logos = [
  { name: "BCG", src: "/logos/bcg.svg", h: 22 },
  { name: "Porsche", src: "/logos/porsche-clean.svg", h: 30 },
  { name: "KB", src: "/logos/kb.svg", h: 24 },
  { name: "Pfizer", src: "/logos/pfizer-clean.png", h: 26 },
  { name: "Twosome Place", src: "/logos/twosome.svg", h: 26 },
  { name: "Patrón", src: "/logos/patron-clean.png", h: 30 },
  { name: "Maker's Mark", src: "/logos/makers-mark-clean.png", h: 30 },
  { name: "Seoul Foundation for Arts and Culture", src: "/logos/seoul-foundation-clean.png", h: 26 },
];

export default function TrustBar() {
  const { t } = useLocale();
  return (
    <section className="bg-black py-14 md:py-16">
      <div className="mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] text-center mb-8 md:mb-10"
        >
          {t("trust.label")}
        </motion.p>
        <Marquee speed={45} className="w-full">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center px-8 md:px-12 shrink-0">
              <Image
                src={logo.src}
                alt={logo.name}
                width={Math.round(logo.h * 4)}
                height={logo.h}
                className="w-auto grayscale opacity-45 hover:opacity-90 transition-opacity duration-500"
                style={{ height: logo.h, maxWidth: 150, objectFit: "contain" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
