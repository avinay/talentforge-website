export function SectionHeading({
  title,
  support,
  tone = "ink",
  align = "left",
}: {
  title: string;
  support?: string;
  tone?: "ink" | "light";
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl`}>
      <h2
        className={`font-display text-3xl md:text-5xl leading-[1.08] tracking-tight ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {support ? (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            tone === "light" ? "text-white/75" : "text-steel"
          }`}
        >
          {support}
        </p>
      ) : null}
    </div>
  );
}
