import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { MetalButton } from "@/components/ui/metal-button";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cityAreas } from "@/lib/werkgebied";

export const metadata: Metadata = {
  title: "Werkgebied",
  description:
    "J. Versseput verzorgt glas-, gevel- en vastgoedonderhoud door heel Nederland, met landingspagina's voor Amsterdam, Rotterdam, Den Haag, Utrecht en Eindhoven.",
  alternates: { canonical: "/werkgebied" },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
          <div
            aria-hidden="true"
            className="bg-grid pointer-events-none absolute inset-0 opacity-30"
          />
          <div className="container relative max-w-3xl">
            <nav
              aria-label="Kruimelpad"
              className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
            >
              <Link
                href="/"
                className="transition-colors hover:text-titanium-bright"
              >
                Home
              </Link>
              <ChevronRight
                className="h-3 w-3 text-titanium-dim/60"
                aria-hidden="true"
              />
              <span className="text-foreground/80">Werkgebied</span>
            </nav>
            <h1 className="mt-8 font-display text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl">
              Vastgoedonderhoud{" "}
              <span className="text-titanium font-normal">
                door heel Nederland
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Onze thuisbasis is Den Haag en met eigen team en materieel zijn wij
              landelijk inzetbaar. Hieronder vindt u onze pagina's per stad, met
              de nadruk op de grootste steden van Nederland.
            </p>
          </div>
        </section>

        <section className="relative pb-24 sm:pb-28">
          <div className="container">
            <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cityAreas.map((c) => (
                <RevealItem key={c.slug} className="h-full">
                  <Link
                    href={`/werkgebied/${c.slug}`}
                    className="group relative flex h-full flex-col justify-between rounded-lg border border-border/70 bg-card/40 p-6 transition-all duration-500 hover:border-titanium-mid/50 hover:bg-card/70"
                  >
                    <div>
                      <MapPin
                        className="h-6 w-6 text-titanium-mid"
                        strokeWidth={1.4}
                        aria-hidden="true"
                      />
                      <p className="mt-4 font-display text-xl font-medium text-foreground">
                        {c.name}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {c.province}
                      </p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-titanium-bright">
                      Bekijk {c.name}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>

            <div className="mt-14 rounded-xl border border-border/70 bg-card/40 p-8 text-center">
              <p className="text-base leading-relaxed text-muted-foreground">
                Staat uw stad er niet bij? Wij werken met eigen team en materieel
                door heel Nederland.
              </p>
              <div className="mt-6 flex justify-center">
                <MetalButton href="/#contact" size="lg">
                  Vraag een offerte aan
                </MetalButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
