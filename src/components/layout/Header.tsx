"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

const links = [
  { href: "/", key: "home" as const },
  { href: "/programs", key: "programs" as const },
  { href: "/corporate", key: "corporate" as const },
  { href: "/about", key: "about" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/contact", key: "contact" as const },
];

export function Header() {
  const { locale, setLocale } = useLocale();
  const nav = content.nav[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--fog)_88%,transparent)] backdrop-blur-md">
      <div className="section-pad">
        <div className="container-shell flex h-[4.25rem] items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-ink text-amber">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path d="M4 16h16l-2 4H6l-2-4Z" fill="currentColor" opacity="0.85" />
                <path d="M8 8l4-4 4 4v8H8V8Z" stroke="#E85D04" strokeWidth="1.8" />
                <circle cx="12" cy="11" r="1.5" fill="#FFB703" />
              </svg>
            </span>
            <span className="font-display text-lg tracking-tight text-ink md:text-xl">
              Talent<span className="text-ember">Forge</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "text-ember" : "text-ink-soft hover:text-ember"
                  }`}
                >
                  {nav[link.key]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex overflow-hidden rounded-md border border-[var(--line)] text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1.5 ${locale === "en" ? "bg-ink text-white" : "text-steel"}`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale("id")}
                className={`px-2.5 py-1.5 ${locale === "id" ? "bg-ink text-white" : "text-steel"}`}
                aria-pressed={locale === "id"}
              >
                ID
              </button>
            </div>
            <Link href="/contact" className="btn-primary hidden !py-2.5 !text-sm sm:inline-flex">
              {nav.apply}
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-md border border-[var(--line)] lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-ink" />
                <span className="block h-0.5 w-5 bg-ink" />
                <span className="block h-0.5 w-4 bg-ink" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--line)] bg-paper lg:hidden">
          <div className="section-pad py-4">
            <div className="container-shell flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-mist"
                >
                  {nav[link.key]}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                {nav.apply}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
