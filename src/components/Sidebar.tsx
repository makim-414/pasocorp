"use client";

import Link from "next/link";
import Image from "next/image";
import { menuItems } from "@/lib/data";

export default function Sidebar() {
  return (
    <aside className="bg-white rounded-sm shadow-sm overflow-y-auto no-scrollbar max-h-[calc(100vh-24px)]">
      <div className="p-7">
        {/* Logo */}
        <Link href="/" className="block mb-6">
          <Image src="/paso-logo.svg" alt="PASO" width={80} height={40} className="dark:invert" />
        </Link>

        {/* Menu label with line */}
        <div className="flex items-center justify-between py-3 border-t border-b border-[var(--color-border)] mb-4">
          <span className="text-sm tracking-wide">Menu</span>
          <span className="text-xs text-[var(--color-muted)]">▼</span>
        </div>

        {/* Menu items — always expanded, no dropdown */}
        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <div key={item.label} className="mb-1">
              <Link
                href={item.href}
                className="block py-1.5 font-semibold text-[15px] hover:text-[var(--color-muted)] transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 flex flex-col mb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1 text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
