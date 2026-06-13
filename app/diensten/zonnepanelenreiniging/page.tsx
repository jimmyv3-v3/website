import type { Metadata } from "next";
import {
  Check,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Sun,
  TrendingDown,
  Bird,
  Sprout,
} from "lucide-react";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { OfferteForm } from "@/components/sections/offerte-form";
import { ServiceHero } from "@/components/service/service-hero";
import { ServiceFeatureGrid } from "@/components/service/service-feature-grid";
import { ServiceFaq } from "@/components/service/service-faq";
import { ServiceCta } from "@/components/service/service-cta";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { contact } from "@/lib/site";

const SLUG = "zonnepanelenreiniging";
const TITLE = "Zonnepanelenreiniging";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Professionele zonnepanelenreiniging met osmosewater voor zakelijk vastgoed en VvE's in heel Nederland. Streeploos schoon en weer op maximaal rendement.",
  alternates: { canonical: `/diensten/${SLUG}` },
};

const included = [
  "Reiniging met zuiver osmosewater en zachte borstels, zonder hogedruk",
  "Verwijderen van vogelpoep, mos, algen, stof en hardnekkige aanslag",
  "Veilig werken op elk dak en op hoogte volgens de richtlijnen",
  "Periodiek in een vast ritme of eenmalig, geheel naar wens",
  "Advies over de ideale reinigingsfrequentie voor uw installatie",
];

const stakes = [
  {
    icon: TrendingDown,
    title: "Rendement dat wegloopt",
    body: "Een laag vuil, stof en aanslag houdt zonlicht tegen en kost u tot vijfentwintig procent opbrengst. Elke maand dat u wacht, verdienen vervuilde panelen minder terug dan ze zouden moeten. Reiniging betaalt zichzelf terug in extra opbrengst.",
  },
  {
    icon: Bird,
    title: "Vogelpoep slaat een gat in de opbrengst",
    body: "Een enkele plek vogelpoep blokkeert het zonlicht en kan via het hotspot-effect een heel paneel afremmen. Hoe langer het blijft zitten, hoe hardnekkiger het wordt en hoe meer opbrengst u onderweg verliest.",
  },
  {
    icon: Sprout,
    title: "Mos en algen tasten het glas aan",
    body: "Mos en algen hechten zich vast aan de randen en kruipen over het glas. Op termijn beschadigen ze de beschermlaag van het paneel, waardoor de schade blijvend wordt en de hele installatie eerder aan vervanging toe is.",
  },
];

const features = [
  {
    icon: Sun,
    title: "Maximaal rendement",
    body: "Streeploos schone panelen vangen weer alle zonlicht op, zodat uw installatie levert waarvoor u heeft betaald.",
  },
  {
    icon: Sparkles,
    title: "Zuiver osmosewater",
    body: "Wij reinigen met kalkvrij osmosewater en zachte borstels, zodat de panelen streeploos opdrogen zonder een waas of krassen.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig en verzekerd",
    body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook voor het werken op daken en op hoogte.",
  },
  {
    icon: UserCheck,
    title: "Vast aanspreekpunt",
    body: "U krijgt één contactpersoon en een vaste ploeg die uw installatie kent, beurt na beurt.",
  },
];

const faqs = [
  {
    q: "Waarom moet ik mijn zonnepanelen laten reinigen?",
    a: "Stof, vogelpoep, mos en aanslag houden zonlicht tegen en verlagen de opbrengst van uw installatie. Door de panelen schoon te houden, vangen ze weer alle zonlicht op en levert uw installatie terug waarvoor u heeft geïnvesteerd.",
  },
  {
    q: "Hoe vaak laat ik mijn zonnepanelen reinigen?",
    a: "Voor de meeste installaties volstaat één tot twee keer per jaar. Liggen de panelen vlak of onder een kleine hellingshoek, dan spoelt regen het vuil minder goed weg en adviseren wij vaker. Wij denken graag met u mee over het ritme dat bij uw installatie past.",
  },
  {
    q: "Met welk water reinigen jullie de panelen?",
    a: "Wij reinigen met zuiver osmosewater dat is gefilterd van kalk en mineralen. Daardoor drogen de panelen streeploos op zonder een waas achter te laten. Kraanwater bevat kalk en zou juist een laag op het glas vormen, dus dat gebruiken wij nooit.",
  },
  {
    q: "Gebruiken jullie een hogedrukreiniger op de panelen?",
    a: "Nee. Hogedruk kan de panelen en de afdichtingen beschadigen. Wij werken altijd met zachte borstels en zuiver osmosewater, zodat het glas en de beschermlaag heel blijven.",
  },
  {
    q: "Werken jullie ook voor grote installaties en VvE's?",
    a: "Zeker. Wij verzorgen de reiniging van grote zonnedaken voor bedrijven, vastgoedbeheerders en VvE's door heel Nederland, ook op hoogte en op lastig bereikbare daken.",
  },
  {
    q: "Wat kost zonnepanelenreiniging?",
    a: "De prijs hangt af van het aantal panelen, de bereikbaarheid, de hoogte en de frequentie. Vraag een vrijblijvende offerte aan, dan rekenen wij een heldere prijs op maat voor u uit.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  serviceType: "Zonnepanelenreiniging",
  provider: {
    "@type": "LocalBusiness",
    name: contact.name,
    telephone: contact.phone,
    areaServed: "NL",
  },
  areaServed: "Nederland",
  description:
    "Professionele zonnepanelenreiniging met osmosewater voor zakelijk vastgoed en VvE's, voor maximaal rendement door heel Nederland.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <ServiceHero
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Diensten", href: "/#diensten" },
            { label: TITLE },
          ]}
          title={TITLE}
          lead="U heeft fors geïnvesteerd in zonnepanelen, dus u wilt dat ze leveren waarvoor u betaalt. Een laag stof, vogelpoep en mos houdt zonlicht tegen en kost u stilletjes opbrengst. Wij houden uw installatie streeploos schoon en weer op vol rendement, met de zorg en het vakmanschap van een gevestigd Haags familiebedrijf."
        />

        {/* Wat wij doen */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              title="Schone panelen,"
              accent="meer opbrengst"
              intro="In plaats van zelf het dak op te klimmen of het er bij te laten zitten, laat u de reiniging over aan één vaste partner. Wij kennen uw installatie en houden de panelen het hele jaar door helder en op rendement."
            />
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-titanium-mid"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-foreground/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Wat uitstel u kost — urgentie */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container">
            <SectionHeading
              title="Uitstellen kost u meer dan"
              accent="een schoonmaakbeurt"
              intro="Vervuilde panelen werken stilletjes tegen u. Niet pas over jaren, maar nu al, bij elke zonnige dag dat uw installatie minder oplevert dan ze zou kunnen."
            />
            <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stakes.map((s) => (
                <RevealItem key={s.title} className="h-full">
                  <div className="flex h-full flex-col rounded-lg border border-border/70 bg-card/40 p-6">
                    <s.icon
                      className="h-7 w-7 text-titanium-mid"
                      strokeWidth={1.4}
                      aria-hidden
                    />
                    <h3 className="mt-5 font-display text-lg font-medium text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <ServiceCta
          title="Ga voor de beste kwaliteit"
          subtitle="Kies voor de meest verzorgde partner in zonnepanelenreiniging van Nederland. Wij reinigen met zuiver osmosewater voor topkwaliteit die uw installatie spaart en uw rendement maximaal houdt, en reageren binnen één werkdag op uw aanvraag."
        />

        <ServiceFeatureGrid
          heading="Waarom kiezen voor"
          accent="J. Versseput"
          features={features}
        />

        <ServiceFaq items={faqs} />

        <div id="offerte" className="scroll-mt-24">
          <OfferteForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
