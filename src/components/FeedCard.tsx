"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CardItem } from "@/lib/data";

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWExYTFhIi8+PC9zdmc+";

export default function FeedCard({ card, index }: { card: CardItem; index: number }) {
  const isFeatured = card.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={isFeatured ? "col-span-full" : ""}
    >
      <Link href={card.href} className="group block">
        {/* Image */}
        <div
          className={`relative overflow-hidden rounded-sm bg-[var(--color-card)] ${
            isFeatured ? "aspect-[16/9]" : "aspect-[4/5]"
          }`}
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
            sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] font-medium tracking-wide border border-[var(--color-border)] rounded-full text-[var(--color-muted)] group-hover:border-[var(--color-fg)] group-hover:text-[var(--color-fg)] transition-colors"
            >
              {tag}
            </span>
          ))}
          {card.tags.length > 2 && (
            <span className="px-3 py-1 text-[11px] font-medium border border-[var(--color-border)] rounded-full text-[var(--color-muted)]">
              +{card.tags.length - 2}
            </span>
          )}
        </div>

        {/* Title & description */}
        <h3
          className={`mt-3 font-bold leading-tight group-hover:text-[var(--color-muted)] transition-colors ${
            isFeatured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {card.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
          {card.description}
        </p>
        <p className="mt-2 text-xs text-[var(--color-muted)]">{card.date}</p>
      </Link>
    </motion.article>
  );
}
