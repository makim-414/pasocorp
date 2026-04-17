"use client";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`flex items-center gap-1 text-xs tracking-[0.08em] uppercase border border-[#333] rounded-sm ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("ko")}
        aria-pressed={locale === "ko"}
        className={`px-2 py-1 transition-colors duration-300 ${
          locale === "ko" ? "text-[#b8960b]" : "text-[#888] hover:text-[#e8e8e8]"
        }`}
      >
        KO
      </button>
      <span className="text-[#333]">|</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-2 py-1 transition-colors duration-300 ${
          locale === "en" ? "text-[#b8960b]" : "text-[#888] hover:text-[#e8e8e8]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
