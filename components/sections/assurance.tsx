import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { assurances } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/**
 * Kwaliteit en veiligheid, met de VCA-certificering prominent in beeld. De
 * echte VCA-kleuren laten het keurmerk juist opvallen tegen het monochrome
 * thema, wat vertrouwen wekt bij zakelijke opdrachtgevers.
 */
export function Assurance() {
  const t = useTranslations("home.assurance");
  const items = t.raw("items") as { title: string; body: string }[];
  return (
    <section
      id="kwaliteit"
      aria-labelledby="kwaliteit-heading"
      className="relative scroll-mt-24 border-y border-border/60 bg-card/20 py-16 sm:py-20"
    >
      <div className="container relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* VCA highlight */}
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-xl p-8 text-center">
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(210_24%_72%/0.18),transparent_70%)]" />
            <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-2xl border border-border/70 bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/certifications/vca.avif"
                alt={t("vcaAlt")}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="relative mt-6 font-display text-xl font-medium text-titanium-bright">
              {t("vcaTitle")}
            </p>
            <p className="relative mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("vcaBody")}
            </p>
          </div>
        </Reveal>

        {/* Heading + assurances */}
        <div>
          <Reveal>
            <h2
              id="kwaliteit-heading"
              className="font-display text-2xl font-light leading-tight tracking-tight text-foreground sm:text-3xl"
            >
              {t("heading")}{" "}
              <span className="text-titanium font-normal">
                {t("headingAccent")}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {t("intro")}
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {assurances.map((item, i) => {
              const Icon: LucideIcon = item.icon;
              return (
                <RevealItem key={items[i].title}>
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-card/50">
                      <Icon
                        className="h-5 w-5 text-titanium-mid"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-medium text-foreground">
                        {items[i].title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {items[i].body}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
