"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  const nav = content.nav[locale];
  const footer = content.footer[locale];

  return (
    <footer className="atmosphere-ink text-white">
      <div className="section-pad py-16">
        <div className="container-shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-tight">
              Talent<span className="text-amber">Forge</span>
            </p>
            <p className="mt-3 max-w-md text-white/70">{footer.tagline}</p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-amber">Explore</p>
            <Link href="/programs" className="block text-white/75 hover:text-white">
              {nav.programs}
            </Link>
            <Link href="/corporate" className="block text-white/75 hover:text-white">
              {nav.corporate}
            </Link>
            <Link href="/about" className="block text-white/75 hover:text-white">
              {nav.about}
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-amber">Connect</p>
            <Link href="/faq" className="block text-white/75 hover:text-white">
              {nav.faq}
            </Link>
            <Link href="/contact" className="block text-white/75 hover:text-white">
              {nav.contact}
            </Link>
            <a
              href={content.contactPage.details.whatsappLink}
              className="block text-white/75 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="container-shell mt-12 border-t border-white/10 pt-6 text-sm text-white/55">
          {footer.rights}
        </div>
      </div>
    </footer>
  );
}
