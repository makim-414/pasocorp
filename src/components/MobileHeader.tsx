"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/lib/data";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden sticky top-0 z-50 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="flex items-center justify-between px-5 h-14">
        <Link href="/" className="font-black text-lg tracking-tight">
          PASO CORP
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-[2px] bg-[var(--color-fg)] transition-all duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[var(--color-fg)] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[var(--color-fg)] transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]"
          >
            <nav className="px-5 py-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-semibold"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-3 mt-1 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-[var(--color-muted)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
