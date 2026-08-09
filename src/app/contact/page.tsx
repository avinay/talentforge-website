"use client";

import { FormEvent, useState } from "react";
import { ContactGlobe } from "@/components/illustrations/ContactGlobe";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export default function ContactPage() {
  const { locale } = useLocale();
  const page = content.contactPage[locale];
  const details = content.contactPage.details;
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`TalentForge inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${details.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="section-pad atmosphere py-20 md:py-28">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-5xl tracking-tight text-ink md:text-6xl">
              Talent<span className="text-ember">Forge</span>
            </p>
            <h1 className="mt-5 font-display text-3xl tracking-tight text-ink md:text-4xl">
              {page.title}
            </h1>
            <p className="mt-4 text-lg text-steel">{page.headline}</p>
            <div className="mt-8 space-y-2 text-ink">
              <p className="font-display text-2xl">{details.name}</p>
              <p className="text-ink-soft">{page.role}</p>
              <a className="block text-ember hover:underline" href={`mailto:${details.email}`}>
                {details.email}
              </a>
              <a
                className="block text-ink-soft hover:text-ember"
                href={details.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="block text-ink-soft hover:text-ember"
                href={details.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="block text-ink-soft hover:text-ember"
                href={details.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp {details.whatsapp}
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${details.email}`} className="btn-primary">
                {page.ctaPrimary}
              </a>
              <a href={details.whatsappLink} className="btn-secondary on-light" target="_blank" rel="noreferrer">
                {page.ctaSecondary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactGlobe className="h-auto w-full" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper py-20 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl text-ink">{page.nextTitle}</h2>
            <ol className="mt-8 space-y-4">
              {page.steps.map((step, index) => (
                <li key={step} className="flex gap-4 border-t border-[var(--line)] pt-4">
                  <span className="font-display text-ember">0{index + 1}</span>
                  <span className="text-ink-soft">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="space-y-5">
              <h2 className="font-display text-3xl text-ink">{page.formTitle}</h2>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-steel">{page.nameLabel}</span>
                <input
                  required
                  name="name"
                  className="w-full rounded-lg border border-[var(--line)] bg-fog px-4 py-3 outline-none ring-ember focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-steel">{page.emailLabel}</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-[var(--line)] bg-fog px-4 py-3 outline-none ring-ember focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-steel">{page.messageLabel}</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-[var(--line)] bg-fog px-4 py-3 outline-none ring-ember focus:ring-2"
                />
              </label>
              <button type="submit" className="btn-primary">
                {page.submit}
              </button>
              {sent ? (
                <p className="text-sm text-steel">
                  {locale === "en"
                    ? "Opening your email client…"
                    : "Membuka aplikasi email Anda…"}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
