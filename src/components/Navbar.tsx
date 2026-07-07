"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LocaleToggle from "@/components/LocaleToggle";
import { useLocale } from "@/i18n/LocaleProvider";

const brands = [
  { name: "Artrader", href: "/brands/artrader" },
  { name: "Paso Agency", href: "/brands/paso-agency" },
  { name: "Paso Gallery", href: "https://pasogallery.com" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      aria-label={t("nav.aria")}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="https://pasocorp.com" className="text-[#e8e8e8] text-sm tracking-normal font-normal" style={{ fontFamily: "var(--font-dutch)" }}>
          PASO
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.08em] uppercase text-[#888]">
          <Link href="/about" className="hover:text-[#b8960b] transition-colors duration-300">{t("nav.about")}</Link>
          <Link href="/solutions" className="hover:text-[#b8960b] transition-colors duration-300">{t("nav.solutions")}</Link>
          <div
            className="relative"
            onMouseEnter={() => setBrandsOpen(true)}
            onMouseLeave={() => setBrandsOpen(false)}
          >
            <a href="/#brands" className="hover:text-[#b8960b] transition-colors duration-300 tracking-[0.08em] uppercase">{t("nav.brands")}</a>
            <AnimatePresence>
              {brandsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#0a0a0a] border border-[#1a1a1a] py-3 min-w-[200px]"
                >
                  {brands.map((b) => (
                    <Link
                      key={b.name}
                      href={b.href}
                      {...(b.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="block px-5 py-2 text-xs tracking-[0.1em] text-[#888] hover:text-[#e8e8e8] hover:bg-[#111] transition-colors uppercase"
                    >
                      {b.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/spaces" className="hover:text-[#b8960b] transition-colors duration-300">{t("nav.spaces")}</Link>
          <Link href="/contact" className="hover:text-[#b8960b] transition-colors duration-300">{t("nav.contact")}</Link>
          <LocaleToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? t("nav.menu_close") : t("nav.menu_open")}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-px bg-[#e8e8e8] transition-transform ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-[#e8e8e8] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#e8e8e8] transition-transform ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-xs tracking-[0.08em] uppercase text-[#888]">
              <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#e8e8e8]">{t("nav.about")}</Link>
              <Link href="/solutions" onClick={() => setMenuOpen(false)} className="hover:text-[#e8e8e8]">{t("nav.solutions")}</Link>
              {brands.map((b) => (
                <Link key={b.name} href={b.href} {...(b.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} onClick={() => setMenuOpen(false)} className="hover:text-[#e8e8e8] pl-4 uppercase">{b.name}</Link>
              ))}
              <Link href="/spaces" onClick={() => setMenuOpen(false)} className="hover:text-[#e8e8e8]">{t("nav.spaces")}</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#e8e8e8]">{t("nav.contact")}</Link>
              <div className="pt-2"><LocaleToggle /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
