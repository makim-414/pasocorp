"use client";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.6, delay: i * 0.1 } });

const contacts = [
  { label: "Email", value: "info@pasogallery.com", href: "mailto:info@pasogallery.com" },
  { label: "Phone", value: "+82 2-925-3631", href: "tel:+8229253631" },
];

const inquiries = [
  { title: "전시 문의", desc: "갤러리 전시 및 작가 협업 문의" },
  { title: "작가 협업", desc: "신진작가 공모, 레지던시, 전시 기획 협업" },
];

const location = {
  name: "Gallery",
  address: "서울특별시 종로구 성균관로 92",
  detail: "한옥 빌딩",
  mapQuery: "서울특별시 종로구 성균관로 92",
};

export default function GalleryContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-[#e5e5e5] mb-4">Contact</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-muted font-light max-w-xl">
            전시 문의, 작가 협업 등 파소 갤러리에 연락하세요.
          </motion.p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((c, i) => (
            <motion.div key={c.label} {...stagger(i)} className="text-center py-4">
              <p className="text-xs text-[#8a8a8a] mb-3">{c.label}</p>
              <a href={c.href} className="text-lg text-white font-light hover:text-[#e5e5e5] transition-colors" style={{ fontFamily: "var(--font-dutch)" }}>{c.value}</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry types */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-xs text-[#e5e5e5] mb-4">Inquiries</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>How Can We Help?</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inquiries.map((item, i) => (
              <motion.a
                key={item.title}
                href="mailto:info@pasogallery.com"
                {...stagger(i)}
                className="block border border-border p-8 hover:border-[#333] transition-colors group"
              >
                <h3 className="text-lg text-white font-light mb-2 group-hover:text-[#e5e5e5] transition-colors" style={{ fontFamily: "var(--font-dutch)" }}>{item.title}</h3>
                <p className="text-sm text-muted font-light">{item.desc}</p>
                <div className="mt-4 w-0 group-hover:w-10 h-px bg-[#e5e5e5] transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-black border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-xs text-[#e5e5e5] mb-4">Location</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>Find Us</motion.h2>

          {/* Embedded map */}
          <motion.div {...fadeUp} className="border border-border overflow-hidden mb-12">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed&hl=ko&z=16`}
              width="100%"
              height="420"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paso Gallery 지도"
            />
          </motion.div>

          {/* Details under the map */}
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Address */}
            <div>
              <p className="text-xs text-[#e5e5e5] mb-3">Seoul</p>
              <p className="text-sm text-white font-light leading-relaxed">
                [03066] 서울특별시 종로구 성균관로 92
              </p>
              <p className="text-sm text-muted font-light leading-relaxed mt-1">
                한옥 빌딩 1F
              </p>
              <p className="text-xs text-[#555] font-light mt-2">
                92, Seonggyungwan-ro, Jongno-gu, Seoul, Republic of Korea
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs text-[#e5e5e5] mb-3">Contact</p>
              <p className="text-sm text-white font-light">
                E-mail.{" "}
                <a href="mailto:info@pasogallery.com" className="hover:underline">
                  info@pasogallery.com
                </a>
              </p>
              <p className="text-sm text-white font-light mt-1">
                Tel.{" "}
                <a href="tel:+8229253631" className="hover:underline">
                  +82 2 925 3631
                </a>
              </p>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
