"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export default function FaqPage() {
  const { locale } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="section-pad atmosphere py-20 md:py-28">
        <div className="container-shell max-w-3xl">
          <Reveal>
            <p className="font-display text-5xl tracking-tight text-ink md:text-6xl">
              Talent<span className="text-ember">Forge</span>
            </p>
            <h1 className="mt-5 font-display text-3xl tracking-tight text-ink md:text-4xl">
              {content.faqPage.title[locale]}
            </h1>
            <p className="mt-4 text-lg text-steel">{content.faqPage.subtitle[locale]}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper pb-24">
        <div className="container-shell max-w-3xl">
          <div className="divide-y divide-[var(--line)]">
            {content.faqPage.items.map((item, index) => {
              const open = openIndex === index;
              return (
                <Reveal key={item.q.en}>
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 py-5 text-left"
                      aria-expanded={open}
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      <span className="font-display text-xl text-ink">{item.q[locale]}</span>
                      <span className="mt-1 text-ember" aria-hidden>
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open ? (
                      <p className="pb-6 text-ink-soft leading-relaxed">{item.a[locale]}</p>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
