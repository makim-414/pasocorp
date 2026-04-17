"use client";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`flex items-center gap-2 text-xs tracking-[0.08em] uppercase ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("ko")}
        aria-pressed={locale === "ko"}
        className={`transition-colors duration-300 ${
          locale === "ko" ? "text-[#e8e8e8]" : "text-[#555] hover:text-[#b8960b]"
        }`}
      >
        KO
      </button>
      <span className="text-[#333]">/</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`transition-colors duration-300 ${
          locale === "en" ? "text-[#e8e8e8]" : "text-[#555] hover:text-[#b8960b]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
