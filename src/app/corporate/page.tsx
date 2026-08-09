"use client";

import Link from "next/link";
import { TeamWorkshop } from "@/components/illustrations/TeamWorkshop";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export default function CorporatePage() {
  const { locale } = useLocale();
  const page = content.corporatePage[locale];
  const pilots = content.home.pilots[locale];

  return (
    <>
      <section className="section-pad atmosphere relative overflow-hidden py-20 md:py-28">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-5xl tracking-tight text-ink md:text-6xl">
              Talent<span className="text-ember">Forge</span>
            </p>
            <h1 className="mt-5 font-display text-3xl tracking-tight text-ink md:text-4xl">
              {page.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-steel">{page.headline}</p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              {page.cta}
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <TeamWorkshop className="h-auto w-full" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={page.whyTitle} />
          </Reveal>
          <ul className="mt-10 space-y-5">
            {page.why.map((item) => (
              <Reveal key={item}>
                <li className="flex gap-4 border-t border-[var(--line)] pt-5 text-lg text-ink-soft">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-ember" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad atmosphere-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={page.programsTitle} tone="light" />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {page.programs.map((program, index) => (
              <Reveal key={program.name} delay={index * 0.05}>
                <article className="border-t border-amber/40 pt-5">
                  <h3 className="font-display text-2xl text-amber">{program.name}</h3>
                  <p className="mt-3 text-white/75">{program.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-white/70">{page.clients}</p>
        </div>
      </section>

      <section className="section-pad atmosphere py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={pilots.title} />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilots.options.map((option) => (
              <article key={option.name} className="border-t border-[var(--line)] pt-5">
                <h3 className="font-display text-xl text-ink">{option.name}</h3>
                <p className="mt-3 font-display text-2xl text-ember">{option.investment}</p>
                <p className="mt-3 text-sm text-ink-soft">{option.details}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-10 inline-flex">
            {page.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
