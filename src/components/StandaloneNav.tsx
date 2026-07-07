"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface StandaloneNavProps {
  siteName: string;
  homeHref: string;
  links?: { label: string; href: string; isButton?: boolean }[];
  accentColor?: string;
}

export default function StandaloneNav({ siteName, homeHref, links = [], accentColor = "#e5e5e5" }: StandaloneNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || menuOpen
          ? "bg-black/60 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link
          href={homeHref}
          className="text-[#e8e8e8] text-sm tracking-normal font-normal"
          style={{ fontFamily: "var(--font-dutch)" }}
          onClick={() => setMenuOpen(false)}
        >
          {siteName}
        </Link>

        {links.length > 0 && (
          <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.08em] uppercase text-[#999]">
            {links.map((link) =>
              link.isButton ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-5 py-2 border text-xs tracking-[0.08em] uppercase transition-all duration-300 hover:opacity-80"
                  style={{ borderColor: accentColor, color: accentColor }}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-300"
                  onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}

        {/* Mobile menu toggle */}
        {links.length > 0 && (
          <button
            type="button"
            className="md:hidden -mr-2 flex h-10 w-10 items-center justify-center text-[#d4d4d4]"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.25">
              {menuOpen ? <path d="M4 4l12 12M4 16L16 4" /> : <path d="M2 6.5h16M2 13.5h16" />}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-black/90 backdrop-blur-xl">
          <ul className="px-6 py-8 flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.label}>
                {link.isButton ? (
                  <Link
                    href={link.href}
                    className="inline-block px-5 py-2.5 border text-xs tracking-[0.12em] uppercase"
                    style={{ borderColor: accentColor, color: accentColor }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm tracking-[0.12em] uppercase text-[#c9c9c9] hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
