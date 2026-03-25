"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface StandaloneNavProps {
  siteName: string;
  homeHref: string;
  links?: { label: string; href: string }[];
  accentColor?: string;
}

export default function StandaloneNav({ siteName, homeHref, links = [], accentColor = "#b8960b" }: StandaloneNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link
          href={homeHref}
          className="text-[#e8e8e8] text-sm tracking-normal font-normal"
          style={{ fontFamily: "var(--font-dutch)" }}
        >
          {siteName}
        </Link>

        {links.length > 0 && (
          <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.08em] uppercase text-[#888]">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-300"
                style={{ ["--hover-color" as string]: accentColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
