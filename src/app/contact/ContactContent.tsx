"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.6, delay: i * 0.1 } });

const TOPIC_KEYS = ["exhibition", "spaces", "brand", "data"] as const;
type TopicKey = (typeof TOPIC_KEYS)[number];

export default function ContactContent() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [topic, setTopic] = useState<TopicKey | "">("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { t, locale } = useLocale();

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("topic");
    if (param && (TOPIC_KEYS as readonly string[]).includes(param)) setTopic(param as TopicKey);
  }, []);

  const scrollToForm = (key: TopicKey) => {
    setTopic(key);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const locations = [
    { name: locale === "en" ? "Office" : "Office", address: locale === "en" ? "72 Samseongyo-ro 23ga-gil, Seongbuk-gu, Seoul" : "서울특별시 성북구 삼선교로23가길 72", detail: locale === "en" ? "Interblue Bldg. 1F-3F" : "인터블루 빌딩 1F-3F", mapQuery: "서울특별시 성북구 삼선교로23가길 72" },
    { name: locale === "en" ? "Gallery" : "Gallery", address: locale === "en" ? "92 Sungkyunkwan-ro, Jongno-gu, Seoul" : "서울특별시 종로구 성균관로 92", detail: locale === "en" ? "Hanok Building" : "한옥 빌딩", mapQuery: "서울특별시 종로구 성균관로 92" },
  ];

  const contacts = [
    { label: t("contact.email"), value: "info@pasogallery.com", href: "mailto:info@pasogallery.com" },
    { label: t("contact.phone"), value: "+82 2-925-3631", href: "tel:+8229253631" },
  ];

  const inquiries: { key: TopicKey; title: string; desc: string }[] = [
    { key: "exhibition", title: t("contact.inq.exhibition"), desc: t("contact.inq.exhibition_desc") },
    { key: "spaces", title: t("contact.inq.spaces"), desc: t("contact.inq.spaces_desc") },
    { key: "brand", title: t("contact.inq.brand"), desc: t("contact.inq.brand_desc") },
    { key: "data", title: t("contact.inq.data"), desc: t("contact.inq.data_desc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase text-[#b8960b] mb-4">{t("contact.tag")}</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            {t("contact.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-muted font-light max-w-xl" style={{ wordBreak: "keep-all" }}>
            {t("contact.lead")}
          </motion.p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((c, i) => (
            <motion.div key={c.label} {...stagger(i)} className="text-center py-4">
              <p className="text-xs uppercase text-[#555] mb-3">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="text-lg text-white font-light hover:text-[#b8960b] transition-colors" style={{ fontFamily: "var(--font-dutch)" }}>{c.value}</a>
              ) : (
                <p className="text-lg text-white font-light" style={{ fontFamily: "var(--font-dutch)" }}>{c.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry types */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-xs uppercase text-[#b8960b] mb-4">{t("contact.inquiries")}</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>{t("contact.how_help")}</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inquiries.map((item, i) => (
              <motion.button
                key={item.key}
                type="button"
                onClick={() => scrollToForm(item.key)}
                {...stagger(i)}
                className="block w-full text-left border border-border p-8 hover:border-[#333] transition-colors group cursor-pointer"
              >
                <h3 className="text-lg text-white font-normal mb-2 group-hover:text-[#b8960b] transition-colors">{item.title}</h3>
                <p className="text-sm text-muted font-light">{item.desc}</p>
                <div className="mt-4 w-0 group-hover:w-10 h-px bg-[#b8960b] transition-all duration-500" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="contact-form" className="py-24 bg-card border-t border-border scroll-mt-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-12" style={{ fontFamily: "var(--font-dutch)" }}>{t("contact.form.title")}</motion.h2>
          <motion.form
            {...fadeUp}
            onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus("sending");
              const fd = new FormData(e.currentTarget);
              fd.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
              fd.append("subject", "PASO 웹사이트 문의");
              fd.append("from_name", "PASO 웹사이트");
              fd.append("_source", "contact_page");
              try {
                const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
                const data = (await res.json().catch(() => ({ success: false }))) as { success?: boolean };
                if (res.ok && data.success === true) {
                  setFormStatus("sent");
                } else {
                  setFormStatus("error");
                }
              } catch {
                setFormStatus("error");
              }
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cf-name" className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">{t("contact.form.name")}</label>
                <input id="cf-name" name="name" required type="text" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="cf-email" className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">{t("contact.form.email")}</label>
                <input id="cf-email" name="email" required type="email" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="cf-topic" className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">{t("contact.form.topic")}</label>
              <select
                id="cf-topic"
                name="topic"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value as TopicKey | "")}
                className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors [&>option]:bg-[#111]"
              >
                <option value="" disabled>{t("contact.form.topic_placeholder")}</option>
                {inquiries.map((item) => (
                  <option key={item.key} value={item.key}>{item.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="cf-message" className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">{t("contact.form.message")}</label>
              <textarea id="cf-message" name="message" required rows={4} placeholder={t("contact.form.message_placeholder")} className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors resize-none placeholder:text-[#444]" />
            </div>
            {formStatus === "error" && <p className="text-red-400 text-xs">{t("contact.form.error")}</p>}
            {formStatus === "sent" ? (
              <p className="text-[#b8960b] text-sm">{t("contact.form.sent")}</p>
            ) : (
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="mt-2 px-10 py-3 bg-[#b8960b] text-black text-sm font-medium tracking-wide rounded hover:bg-[#a0820a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formStatus === "sending" ? t("contact.form.sending") : t("contact.form.submit")}
              </button>
            )}
          </motion.form>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-xs uppercase text-[#b8960b] mb-4">{t("contact.location")}</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>{t("contact.find_us")}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                {...stagger(i)}
                onClick={() => setSelectedLocation(selectedLocation === loc.name ? null : loc.name)}
                className={`border p-8 cursor-pointer transition-colors duration-300 ${selectedLocation === loc.name ? "border-[#b8960b]/50 bg-[#b8960b]/5" : "border-border hover:border-[#333]"}`}
              >
                <p className="text-xs uppercase text-[#b8960b] mb-4">{loc.name}</p>
                <p className="text-sm text-white font-light mb-1">{loc.address}</p>
                <p className="text-sm text-[#555] font-light">{loc.detail}</p>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-8"
              >
                <div className="border border-border rounded-lg overflow-hidden">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(locations.find((l) => l.name === selectedLocation)?.mapQuery || "")}&output=embed&hl=ko`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${selectedLocation} 지도`}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
