"use client";

import { useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { services } from "@/lib/site";
import type { Service } from "@/lib/site";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/sections/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

/**
 * Diensten als een uniform raster. Alle diensten zijn even groot en even
 * belangrijk. Elke kaart heeft een cursor-volgende spotlight (vandaar "use
 * client").
 */
function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations();
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", e.clientX - rect.left + "px");
    e.currentTarget.style.setProperty("--my", e.clientY - rect.top + "px");
  }, []);

  return (
    <Link
      href={`/diensten/${service.id}`}
      onMouseMove={handleMouseMove}
      className="spotlight group relative flex h-full flex-col rounded-lg border border-border/70 bg-card/40 p-4 transition-all duration-500 hover:border-titanium-mid/50 hover:bg-card/70 sm:p-6"
    >
      <service.icon
        className="h-6 w-6 shrink-0 text-titanium-mid transition-colors duration-500 group-hover:text-titanium-bright sm:h-7 sm:w-7"
        strokeWidth={1.3}
        aria-hidden
      />
      <h3 className="mt-4 font-display text-base font-medium tracking-tight text-foreground sm:mt-5 sm:text-lg">
        {t(`services.${service.id}.title`)}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
        {t(`services.${service.id}.summary`)}
      </p>
      <span className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-medium uppercase tracking-wider text-titanium-dim transition-colors group-hover:text-titanium-bright sm:pt-6">
        {t("home.servicesSection.moreAbout")}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function Services() {
  const t = useTranslations("home.servicesSection");
  return (
    <section
      id="diensten"
      aria-label={t("ariaLabel")}
      className="relative scroll-mt-24 border-y border-border/60 bg-card/20 py-16 sm:py-20"
    >
      <div className="container relative">
        <SectionHeading
          title={t("title")}
          accent={t("accent")}
          intro={t("intro")}
        />

        <RevealGroup
          className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4"
          stagger={0.06}
          delayChildren={0.1}
        >
          {services.map((service) => (
            <RevealItem key={service.id} className="h-full">
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
