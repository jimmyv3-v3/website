"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { contact, values } from "@/lib/site";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { SegmentAccordion } from "@/components/sections/segment-accordion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <section
      id="top"
      className="relative flex items-start overflow-hidden lg:min-h-[86svh]"
    >
      {/* Backdrop: clean, luxe charcoal with a soft titanium glow on the right.
          TODO: drop a real high-end building photo in here behind the glow. */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-[60%] bg-[radial-gradient(ellipse_70%_60%_at_75%_35%,hsl(210_22%_60%/0.1),transparent_65%)] animate-glow-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>

      <div className="container relative z-10 pt-24 pb-10 sm:pt-28 lg:pb-0">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
          <motion.h1
            {...rise(0.1)}
            className="font-display text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            De betrouwbare partner in{" "}
            <span className="text-titanium font-normal">
              glas-, gevel- en vastgoedonderhoud
            </span>
            .
          </motion.h1>

          <motion.p
            {...rise(0.25)}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Wij houden vastgoed representatief en in waarde met vakmanschap dat
            al drie generaties wordt doorgegeven. Eén betrouwbare partner voor
            alles aan de buitenzijde van uw pand, door heel Nederland.
          </motion.p>

          <motion.div
            {...rise(0.4)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <LiquidMetalButton href="#contact" size="default">
              Offerte aanvragen
              <ArrowRight className="h-4 w-4" />
            </LiquidMetalButton>
            <LiquidMetalButton href={contact.phoneHref} size="default">
              <Phone className="h-4 w-4" />
              Bel direct
            </LiquidMetalButton>
          </motion.div>

          {/* Brand value strip from the wrap */}
          <motion.ul
            {...rise(0.55)}
            className="mt-12 hidden flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-brand text-muted-foreground sm:flex"
          >
            {values.map((v, i) => (
              <li key={v} className="flex items-center gap-5">
                {i > 0 && (
                  <span className="text-titanium-dim/50" aria-hidden>
                    •
                  </span>
                )}
                {v}
              </li>
            ))}
          </motion.ul>
          </div>

          <motion.div {...rise(0.5)} className="hidden w-full lg:block">
            <SegmentAccordion />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
