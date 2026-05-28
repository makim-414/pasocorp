"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleProvider";

export interface Offer {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  brandLogoSrc: string;
  brandName: string;
  promoCode?: string;
  href: string;
}

const OfferCard = React.forwardRef<HTMLAnchorElement, { offer: Offer }>(({ offer }, ref) => (
  <motion.a
    ref={ref}
    href={offer.href}
    className="relative flex-shrink-0 w-[300px] h-[380px] rounded-2xl overflow-hidden group/card snap-start"
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {/* Background Image */}
    <img
      src={offer.imageSrc}
      alt={offer.imageAlt}
      className="absolute inset-0 w-full h-2/4 object-cover transition-transform duration-500 group-hover/card:scale-110"
    />
    {/* Card Content */}
    <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-[#111] p-5 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex items-center text-xs text-[#888]">
          <Tag className="w-4 h-4 mr-2 text-[#b8960b]" />
          <span>{offer.tag}</span>
        </div>
        <h3 className="text-xl font-bold text-white leading-tight">{offer.title}</h3>
        <p className="text-sm text-[#888]">{offer.description}</p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-[#222]">
        <div className="flex items-center gap-3">
          <img src={offer.brandLogoSrc} alt={`${offer.brandName} logo`} className="w-8 h-8 rounded-full bg-[#1a1a1a] object-cover" />
          <div>
            <p className="text-xs font-semibold text-white">{offer.brandName}</p>
            {offer.promoCode && <p className="text-xs text-[#666]">{offer.promoCode}</p>}
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white transition-all duration-300 group-hover/card:-rotate-45 group-hover/card:bg-[#b8960b] group-hover/card:text-black">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  </motion.a>
));
OfferCard.displayName = "OfferCard";

export interface OfferCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  offers: Offer[];
}

const OfferCarousel = React.forwardRef<HTMLDivElement, OfferCarouselProps>(
  ({ offers, className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    return (
      <div ref={ref} className={cn("relative w-full group", className)} {...props}>
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-[#333] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-[#333] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  }
);
OfferCarousel.displayName = "OfferCarousel";

export default function PasoOfferCarousel() {
  const { t } = useLocale();
  const pasoOffers: Offer[] = [
    {
      id: 1,
      imageSrc: "/brands/paso-gallery.png",
      imageAlt: "Paso Gallery",
      tag: t("offer.1.tag"),
      title: t("offer.1.title"),
      description: t("offer.1.desc"),
      brandLogoSrc: "/brands/paso-gallery.png",
      brandName: "Paso Gallery",
      href: "https://pasogallery.com",
    },
    {
      id: 2,
      imageSrc: "/brands/paso-artcenter-building.jpg",
      imageAlt: "PASO Art Center",
      tag: t("offer.2.tag"),
      title: t("offer.2.title"),
      description: t("offer.2.desc"),
      brandLogoSrc: "/brands/paso-artcenter-building.jpg",
      brandName: "PASO Art Center",
      href: "/brands/paso-art-center",
    },
    {
      id: 3,
      imageSrc: "/brands/artrader-platform-hd.png",
      imageAlt: "Artrader",
      tag: t("offer.3.tag"),
      title: t("offer.3.title"),
      description: t("offer.3.desc"),
      brandLogoSrc: "/brands/artrader-platform-hd.png",
      brandName: "Artrader",
      href: "/brands/artrader",
    },
    {
      id: 4,
      imageSrc: "/brands/artledger-consulting.jpg",
      imageAlt: "Artledger Consulting",
      tag: t("offer.4.tag"),
      title: t("offer.4.title"),
      description: t("offer.4.desc"),
      brandLogoSrc: "/brands/artledger-consulting.jpg",
      brandName: "Artledger Consulting",
      href: "/brands/artledger-consulting",
    },
    {
      id: 5,
      imageSrc: "/brands/paso-agency.jpg",
      imageAlt: "Paso Agency",
      tag: t("offer.5.tag"),
      title: t("offer.5.title"),
      description: t("offer.5.desc"),
      brandLogoSrc: "/brands/paso-agency.jpg",
      brandName: "Paso Agency",
      href: "/brands/paso-agency",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4"
        >
          {t("offer.tag")}
        </motion.p>
        <h2
          className="text-3xl md:text-4xl font-light text-white mb-12"
          style={{ fontFamily: "var(--font-dutch)" }}
        >
          {t("offer.heading")}
        </h2>
        <OfferCarousel offers={pasoOffers} />
      </div>
    </section>
  );
}
