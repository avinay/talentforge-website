"use client";

import Link from "next/link";
import { CycleTrainer } from "@/components/illustrations/CycleTrainer";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export default function ProgramsPage() {
  const { locale } = useLocale();
  const page = content.programsPage[locale];
  const homePrograms = content.home.programs[locale];
  const nav = content.nav[locale];

  return (
    <>
      <section className="section-pad atmosphere relative overflow-hidden py-20 md:py-28">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="font-display text-5xl tracking-tight text-ink md:text-6xl">
              Talent<span className="text-ember">Forge</span>
            </p>
            <h1 className="mt-5 font-display text-3xl tracking-tight text-ink md:text-4xl">
              {page.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-steel">{page.subtitle}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <CycleTrainer className="h-auto w-full" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              title={page.bootcamp.title}
              support={page.bootcamp.headline}
            />
          </Reveal>

          <div className="mt-12">
            <h3 className="font-display text-2xl text-ink">
              {page.bootcamp.curriculumTitle}
            </h3>
            <ol className="mt-8 space-y-0">
              {page.bootcamp.weeks.map((week, index) => (
                <Reveal key={week.range} delay={index * 0.04}>
                  <li className="grid gap-2 border-t border-[var(--line)] py-6 md:grid-cols-[160px_1fr]">
                    <span className="font-semibold text-ember">{week.range}</span>
                    <div>
                      <p className="font-display text-xl text-ink">{week.title}</p>
                      <p className="mt-1 text-ink-soft">{week.detail}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {page.bootcamp.meta.map((item) => (
              <div key={item.label} className="border-t border-[var(--line)] pt-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-steel">
                  {item.label}
                </p>
                <p className="mt-2 text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          <Reveal>
            <Link href="/contact" className="btn-primary mt-10 inline-flex">
              {nav.apply}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad atmosphere-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={homePrograms.title} tone="light" />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homePrograms.items.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <article className="border-t border-white/20 pt-5">
                  <h3 className="font-display text-2xl text-amber">{item.name}</h3>
                  <p className="mt-2 text-sm text-white/65">
                    {item.duration} · {item.format}
                  </p>
                  <p className="mt-3 text-white/80">{item.bestFor}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/corporate" className="btn-primary">
                {nav.corporate}
              </Link>
              <Link href="/contact" className="btn-secondary">
                {nav.contact}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
