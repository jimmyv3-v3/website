import { Phone, Mail, ArrowRight } from "lucide-react";
import { contact } from "@/lib/site";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { Reveal } from "@/components/motion/reveal";

export function CallToAction() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-16 sm:py-20">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(210_24%_72%/0.1),transparent_70%)] blur-2xl" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
            Klaar om uw vastgoed in{" "}
            <span className="text-titanium font-normal">topconditie</span> te
            brengen?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Vraag vrijblijvend een offerte aan of bel ons direct. Wij denken met
            u mee over de beste aanpak en reageren binnen één werkdag.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* TODO: vervang door echt offerteformulier zodra de velden vaststaan */}
            <LiquidMetalButton href={contact.emailHref} size="lg">
              Offerte aanvragen
              <ArrowRight className="h-4 w-4" />
            </LiquidMetalButton>
            <LiquidMetalButton href={contact.phoneHref} size="lg">
              <Phone className="h-4 w-4" />
              Bel direct
            </LiquidMetalButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <a
              href={contact.emailHref}
              className="flex items-center gap-2 transition-colors hover:text-titanium-bright"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
            <span className="hidden text-titanium-dim/40 sm:inline">•</span>
            <span>Gratis en vrijblijvend</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
