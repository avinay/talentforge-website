"use client";

import Link from "next/link";
import { FounderPortrait } from "@/components/illustrations/FounderPortrait";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export default function AboutPage() {
  const { locale } = useLocale();
  const page = content.aboutPage[locale];
  const nav = content.nav[locale];

  return (
    <>
      <section className="section-pad atmosphere py-20 md:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <FounderPortrait className="h-auto w-full max-w-md" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-5xl tracking-tight text-ink md:text-6xl">
              Talent<span className="text-ember">Forge</span>
            </p>
            <h1 className="mt-5 font-display text-3xl tracking-tight text-ink md:text-4xl">
              {page.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{page.headline}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper py-20 md:py-28">
        <div className="container-shell max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft md:text-xl">{page.body}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-14 font-display text-3xl text-ink">{page.founderTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{page.founderBody}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{page.founderExtra}</p>
            <div className="mt-8 space-y-2 text-ink">
              <p>{page.base}</p>
              <p>{page.available}</p>
              <p>{page.languages}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad atmosphere-ink py-20 text-white md:py-28">
        <div className="container-shell max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl text-amber md:text-4xl">{page.missionTitle}</h2>
            <p className="mt-5 text-xl leading-relaxed text-white/80">{page.mission}</p>
            <Link href="/contact" className="btn-primary mt-10 inline-flex">
              {nav.contact}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
