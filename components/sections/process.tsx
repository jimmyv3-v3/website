import { steps } from "@/lib/site";
import { SectionHeading } from "./section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Process() {
  return (
    <section
      id="werkwijze"
      className="relative scroll-mt-24 border-y border-border/60 bg-card/20 py-16 sm:py-20"
    >
      <div className="container">
        <SectionHeading
          title="Een werkwijze die"
          accent="volledig ontzorgt"
          intro="Van de eerste opname tot de rapportage na elke beurt houden wij de regie, zodat u zich met een gerust hart op uw vastgoed kunt richten."
        />

        <RevealGroup className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <RevealItem key={s.n} className="relative text-center lg:text-left">
              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <span className="font-display text-sm font-medium tracking-brand text-titanium-dim">
                  {s.n}
                </span>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent lg:block" />
              </div>
              <s.icon
                className="mx-auto mt-6 h-7 w-7 text-titanium-mid lg:mx-0"
                strokeWidth={1.3}
              />
              <h3 className="mt-5 font-display text-lg font-medium text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
