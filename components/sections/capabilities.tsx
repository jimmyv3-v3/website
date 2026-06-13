import { reachLevels } from "@/lib/site";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Reveal } from "@/components/motion/reveal";

const BAR_HEIGHTS = ["35%", "65%", "100%"] as const;

export function Capabilities() {
  return (
    <section
      aria-labelledby="materieel-heading"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      {/* Architectural grid backdrop */}
      <div
        className="bg-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="container relative">
        {/* Heading block */}
        <Reveal>
          <h2
            id="materieel-heading"
            className="font-display text-2xl font-light tracking-tight text-foreground sm:text-3xl"
          >
            Tot zesendertig meter, met het{" "}
            <span className="text-titanium font-normal">juiste materieel</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Van de begane grond tot hoogbouw kiezen wij per object de veiligste
            en meest efficiënte techniek, met eigen hoogwerkers en waar mogelijk
            de gevelinstallatie van het gebouw.
          </p>
        </Reveal>

        {/* Cards */}
        <RevealGroup
          className="mt-14 grid gap-4 sm:grid-cols-3"
          stagger={0.12}
          delayChildren={0.1}
        >
          {reachLevels.map((level, index) => {
            const Icon = level.icon;
            const barHeight = BAR_HEIGHTS[index] ?? "100%";

            return (
              <RevealItem key={level.method} as="li" className="list-none">
                <article className="relative overflow-hidden rounded-lg border border-border/70 bg-card/40 p-7 h-full">
                  {/* Ascending titanium bar — track on the right edge */}
                  <div
                    className="pointer-events-none absolute bottom-0 right-6 w-[2px] rounded-full opacity-30"
                    style={{ height: "72%" }}
                    aria-hidden="true"
                  >
                    {/* track */}
                    <span className="absolute inset-0 rounded-full bg-border/60" />
                    {/* filled portion */}
                    <span
                      className="absolute bottom-0 left-0 right-0 rounded-full bg-gradient-to-t from-titanium-bright via-titanium-mid to-titanium-dim"
                      style={{ height: barHeight }}
                    />
                  </div>

                  {/* Icon */}
                  <Icon
                    className="mb-5 h-5 w-5 text-titanium-mid"
                    aria-hidden="true"
                  />

                  {/* Height figure */}
                  <span className="font-display text-5xl font-light text-titanium leading-none">
                    {level.height}
                  </span>

                  {/* Method heading */}
                  <h3 className="mt-3 font-display text-base font-normal tracking-tight text-foreground">
                    {level.method}
                  </h3>

                  {/* Body copy */}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {level.body}
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
