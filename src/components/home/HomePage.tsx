"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/i18n";
import { CrisisMap } from "@/components/illustrations/CrisisMap";
import { CycleTrainer } from "@/components/illustrations/CycleTrainer";
import { HeroForge } from "@/components/illustrations/HeroForge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HomePage() {
  const { locale } = useLocale();
  const home = content.home;
  const hero = home.hero[locale];
  const trust = home.trust[locale];
  const stats = home.stats[locale];
  const crisis = home.crisis[locale];
  const programs = home.programs[locale];
  const why = home.why[locale];
  const solve = home.solve[locale];
  const stories = home.stories[locale];
  const partners = home.partners[locale];
  const partnership = home.partnership[locale];
  const pilots = home.pilots[locale];
  const finalCta = home.finalCta[locale];

  return (
    <>
      {/* Hero — one composition, brand-first, full-bleed illustration */}
      <section className="relative overflow-hidden atmosphere-ink grain text-white">
        <div className="absolute inset-0">
          <HeroForge className="h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95% via-[#0A1628]/78% to-[#0A1628]/25%" />
        </div>
        <div className="relative section-pad">
          <div className="container-shell flex min-h-[88vh] items-end pb-16 pt-24 md:items-center md:pb-20 md:pt-28">
            <div className="max-w-2xl reveal">
              <p className="font-display text-4xl leading-none tracking-tight text-amber sm:text-5xl md:text-6xl">
                {hero.brand}
              </p>
              <h1 className="mt-6 font-display text-2xl leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                {hero.headline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                {hero.support}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  {hero.ctaPrimary}
                </Link>
                <Link href="/contact" className="btn-secondary">
                  {hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + Stats */}
      <section className="section-pad border-b border-[var(--line)] bg-paper py-8">
        <div className="container-shell">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-medium text-ink-soft">
            {trust.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-sm bg-ember" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-6 border-t border-[var(--line)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-ember md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-steel">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis */}
      <section id="why-us" className="section-pad atmosphere py-20 md:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionHeading title={crisis.title} />
            <ul className="mt-8 space-y-4">
              {crisis.points.map((point) => (
                <li key={point} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-ember" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 border-l-4 border-ember pl-5 font-display text-xl leading-snug text-ink">
              {crisis.quote}
            </blockquote>
          </Reveal>
          <Reveal delay={0.12}>
            <CrisisMap className="h-auto w-full" />
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section className="section-pad atmosphere-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={programs.title} tone="light" />
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {programs.items.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <article className="border-t border-white/15 pt-5">
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
            <Link href="/programs" className="btn-primary mt-12 inline-flex">
              {programs.cta} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why TalentForge */}
      <section className="section-pad atmosphere py-20 md:py-28">
        <div className="container-shell grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <CycleTrainer className="h-auto w-full" />
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading title={why.title} />
            </Reveal>
            <div className="mt-10 space-y-7">
              {why.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="font-display text-ember">0{index + 1}</span>
                    <div>
                      <h3 className="font-display text-xl text-ink">{item.title}</h3>
                      <p className="mt-2 text-ink-soft">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we solve */}
      <section className="section-pad bg-paper py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={solve.title} />
          </Reveal>
          <div className="mt-10 divide-y divide-[var(--line)]">
            {solve.rows.map((row) => (
              <Reveal key={row.problem}>
                <div className="grid gap-4 py-6 md:grid-cols-2">
                  <p className="text-ink-soft">{row.problem}</p>
                  <p className="font-medium text-ink">{row.solution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="section-pad atmosphere-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={stories.title} tone="light" />
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {stories.items.map((item, index) => (
              <Reveal key={item.author} delay={index * 0.08}>
                <figure className="border-t border-amber/40 pt-6">
                  <blockquote className="text-lg leading-relaxed text-white/85">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-amber">
                    — {item.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="section-pad overflow-hidden bg-paper py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={partners.title} support={partners.pitch} />
          </Reveal>
          <div className="relative mt-10 overflow-hidden">
            <div className="partner-track flex w-max gap-10 whitespace-nowrap text-lg font-semibold text-ink-soft">
              <span>{partners.names}</span>
              <span aria-hidden>{partners.names}</span>
            </div>
          </div>
          <Reveal>
            <Link href="/contact" className="btn-primary mt-10 inline-flex">
              {partners.cta}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Partnership phases */}
      <section className="section-pad atmosphere py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={partnership.title} />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {partnership.phases.map((phase, index) => (
              <Reveal key={phase.phase} delay={index * 0.05}>
                <article className="border-t-2 border-ember pt-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-steel">
                    {phase.timeline}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ink">{phase.phase}</h3>
                  <p className="mt-3 text-ink-soft">{phase.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pilots */}
      <section className="section-pad bg-paper py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading title={pilots.title} />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilots.options.map((option, index) => (
              <Reveal key={option.name} delay={index * 0.05}>
                <article className="h-full border-t border-[var(--line)] pt-5">
                  <h3 className="font-display text-xl text-ink">{option.name}</h3>
                  <p className="mt-3 font-display text-2xl text-ember">{option.investment}</p>
                  <p className="mt-3 text-sm text-ink-soft">{option.details}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad atmosphere-ink py-20 text-white md:py-28">
        <div className="container-shell max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">
              {finalCta.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              {finalCta.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                {finalCta.ctaPrimary}
              </Link>
              <Link href="/contact" className="btn-secondary">
                {finalCta.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
