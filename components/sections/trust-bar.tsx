import { usps } from "@/lib/site";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function TrustBar() {
  return (
    <section
      aria-label="Kernwaarden"
      className="relative border-y border-border/60 bg-card/30"
    >
      <div className="container py-16 sm:py-20">
        <RevealGroup
          className="grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4"
          stagger={0.08}
          delayChildren={0.05}
        >
          {usps.map((usp, i) => (
            <RevealItem
              key={usp.title}
              as="li"
              className="group relative list-none px-4 py-6 sm:px-6 sm:py-8"
            >
              {/* Soft column divider — right edge, hidden after last item */}
              {i < usps.length - 1 && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-6 right-0 hidden w-px bg-border/40 lg:block"
                />
              )}

              {/* Icon tile with titanium ring and hover glow */}
              <span
                aria-hidden
                className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-[0.4rem] border border-border/70 bg-card/40 ring-1 ring-inset ring-white/[0.04] transition-all duration-300 group-hover:border-border group-hover:bg-card/70 group-hover:shadow-[0_0_18px_-6px_hsl(var(--titanium-mid)/0.45)]"
              >
                <usp.icon
                  aria-hidden
                  className="h-[1.1rem] w-[1.1rem] text-titanium-mid transition-colors duration-300 group-hover:text-titanium-bright"
                  strokeWidth={1.5}
                />
              </span>

              <h3 className="font-display text-[0.9rem] font-medium tracking-tight text-foreground">
                {usp.title}
              </h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground sm:text-sm">
                {usp.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
