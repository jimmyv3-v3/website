"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { segments } from "@/lib/site";

/**
 * Interactive image accordion for the hero. Each strip is a target audience;
 * hovering (or focusing/tapping) expands it to reveal the photo and label.
 * Falls back to a dark titanium gradient until real photos are dropped into
 * /public/segments. Adapted to the satin-charcoal palette.
 */
export function SegmentAccordion() {
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  return (
    <div className="flex h-[340px] gap-2 sm:h-[420px] lg:h-[460px]">
      {segments.map((s, i) => {
        const isActive = i === active;
        const Icon = s.icon;
        return (
          <button
            key={s.id}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-label={s.title}
            aria-pressed={isActive}
            className={cn(
              "group relative h-full overflow-hidden rounded-lg border border-border/60 outline-none",
              "transition-[flex-grow,flex-basis] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive
                ? "flex-[1_1_0%]"
                : "flex-[0_0_3.5rem] sm:flex-[0_0_4rem]",
            )}
          >
            {broken[s.id] ? (
              <div className="absolute inset-0 bg-[linear-gradient(160deg,hsl(220_14%_13%),hsl(222_16%_6%))]" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={s.image}
                alt=""
                onError={() => setBroken((p) => ({ ...p, [s.id]: true }))}
                style={{ objectPosition: s.focus ?? "center" }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}

            {/* Legibility wash + active titanium ring */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-background/10" />
            <div
              className={cn(
                "absolute inset-0 rounded-lg ring-1 transition-all duration-500",
                isActive ? "ring-titanium-mid/40" : "ring-transparent",
              )}
            />

            <Icon
              className={cn(
                "absolute left-4 top-4 h-5 w-5 transition-colors duration-500",
                isActive ? "text-titanium-bright" : "text-titanium-mid/70",
              )}
              strokeWidth={1.4}
            />

            {/* Active: horizontal label + blurb at the bottom-left */}
            <div
              className={cn(
                "absolute bottom-5 left-5 right-5 text-left transition-all duration-500",
                isActive
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0",
              )}
            >
              <p className="font-display text-lg font-medium tracking-tight text-titanium-bright">
                {s.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.blurb}</p>
            </div>

            {/* Collapsed: vertical label reading upward */}
            <span
              className={cn(
                "absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-sm font-medium tracking-wide text-titanium-mid transition-opacity duration-500 [writing-mode:vertical-rl] rotate-180",
                isActive ? "opacity-0" : "opacity-100",
              )}
            >
              {s.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}
