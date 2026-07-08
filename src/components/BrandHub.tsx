"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

/* Pointer-tracked 3D tilt (IRONACT DS interactive-depth convention) */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [5, -5]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-5, 5]), { stiffness: 180, damping: 22 });
  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
    </motion.div>
  );
}

export default function BrandHub() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { t } = useLocale();

  const mainBrands = [
    {
      name: "Paso Gallery",
      slug: "paso-gallery",
      externalUrl: "https://pasogallery.com",
      year: "Since 2013",
      target: t("brandhub.paso_gallery.target"),
      desc: t("brandhub.paso_gallery.desc"),
      activity: "",
      image: "/brands/paso-gallery.png",
      color: "#1e3a5f",
    },
    {
      name: "PASO Art Center",
      slug: "paso-art-center",
      externalUrl: "",
      year: "2025",
      target: t("brandhub.art_center.target"),
      desc: t("brandhub.art_center.desc"),
      activity: t("brandhub.art_center.activity"),
      image: "/brands/paso-artcenter.jpg",
      color: "#a0522d",
    },
    {
      name: "Artrader",
      slug: "artrader",
      externalUrl: "",
      year: "2024",
      target: t("brandhub.artrader.target"),
      desc: t("brandhub.artrader.desc"),
      activity: t("brandhub.artrader.activity"),
      image: "/brands/artrader.jpg",
      color: "#b8960b",
    },
  ];

  const subBrands = [
    {
      name: "Paso Agency",
      slug: "paso-agency",
      year: "2023",
      target: t("brandhub.agency.target"),
      desc: t("brandhub.agency.desc"),
      activity: "",
      image: "/images/projects/twosome/twosome-7.jpg",
      color: "#d4a574",
    },
    {
      name: "Artledger Consulting",
      slug: "artledger-consulting",
      year: "2025",
      target: t("brandhub.artledger.target"),
      desc: t("brandhub.artledger.desc"),
      activity: "",
      image: "/brands/artledger-consulting.jpg",
      color: "#9ca3af",
    },
  ];

  const titleWords = t("brandhub.title").split(" ");

  return (
    <section id="brands" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-3 sm:mb-4"
        >
          {t("brandhub.tag")}
        </motion.p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 sm:mb-12 md:mb-16 leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Bento: top row 3 large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {mainBrands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TiltCard>
                <Link
                  href={brand.externalUrl || `/brands/${brand.slug}`}
                  {...(brand.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group block relative bg-card border border-border overflow-hidden transition-all duration-500 hover:border-white/[0.08] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${hovered !== null && hovered !== i ? "md:blur-[2px] md:scale-[0.97] md:opacity-60" : ""}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.08]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700" style={{ background: `linear-gradient(135deg, ${brand.color}40, transparent)` }} />
                    <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <p className="text-xs tracking-[0.15em] text-[#b8960b] mb-2 sm:mb-3">{brand.year}</p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-1.5 group-hover:text-[#e8e8e8] transition-colors leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>{brand.name}</h3>
                    <p className="text-[10px] tracking-[0.1em] uppercase text-[#8a8a8a] mb-3">{brand.target}</p>
                    <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-3 sm:mb-4 line-clamp-3" style={{ wordBreak: "keep-all" }}>{brand.desc}</p>
                    {brand.activity && <p className="text-xs text-[#555] font-light tracking-wide line-clamp-2">{brand.activity}</p>}
                    <div className="mt-3 sm:mt-4 w-0 group-hover:w-8 sm:group-hover:w-12 h-px transition-all duration-500" style={{ backgroundColor: brand.color }} />
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bento: bottom row 2 compact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {subBrands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1, duration: 0.5 }}
            >
              <TiltCard>
                <Link
                  href={`/brands/${brand.slug}`}
                  className={`group block relative bg-card border border-border overflow-hidden transition-all duration-500 hover:border-[#333] ${hovered !== null && hovered !== i + 3 ? "md:blur-[2px] md:scale-[0.97] md:opacity-60" : ""}`}
                  onMouseEnter={() => setHovered(i + 3)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-40 sm:h-48 md:h-auto md:w-2/5 overflow-hidden shrink-0">
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col justify-center">
                      <p className="text-xs tracking-[0.15em] text-[#b8960b] mb-2">{brand.year}</p>
                      <h3 className="text-base sm:text-lg font-light text-white mb-1 group-hover:text-[#e8e8e8] transition-colors leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>{brand.name}</h3>
                      <p className="text-[10px] tracking-[0.1em] uppercase text-[#8a8a8a] mb-2">{brand.target}</p>
                      <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-2 line-clamp-3" style={{ wordBreak: "keep-all" }}>{brand.desc}</p>
                      <div className="mt-3 w-0 group-hover:w-8 sm:group-hover:w-10 h-px transition-all duration-500" style={{ backgroundColor: brand.color }} />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
