"use client";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "12px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        border: "1px solid #b8960b",
        borderRadius: "2px",
        padding: "2px 4px",
      }}
      className={className}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("ko")}
        aria-pressed={locale === "ko"}
        style={{
          padding: "2px 6px",
          color: locale === "ko" ? "#b8960b" : "#888",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        KO
      </button>
      <span style={{ color: "#333" }}>|</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        style={{
          padding: "2px 6px",
          color: locale === "en" ? "#b8960b" : "#888",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        EN
      </button>
    </div>
  );
}
