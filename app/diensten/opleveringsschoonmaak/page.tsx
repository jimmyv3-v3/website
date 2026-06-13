import type { Metadata } from "next";
import {
  Check,
  Sparkles,
  ShieldCheck,
  HardHat,
  CalendarClock,
  Wind,
  Clock,
  Eye,
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

const SLUG = "opleveringsschoonmaak";
const TITLE = "Oplevering- en bouwschoonmaak";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Bouwstof, cementsluier en kit- en verfresten vakkundig verwijderd. Wij maken uw nieuwbouw of verbouwing bezemschoon tot showroomklaar opgeleverd, door heel Nederland.",
  alternates: { canonical: `/diensten/${SLUG}` },
};

const included = [
  "Afvoeren van bouwafval en het bezemschoon opleveren van de ruimtes",
  "Verwijderen van cementsluier, kit-, verf-, lijm- en stickerresten",
  "Stofvrij maken van plafonds, wanden, kozijnen, deuren en radiatoren",
  "Glasbewassing aan binnen- en buitenzijde, inclusief het verwijderen van bouwstickers",
  "Reinigen van vloeren, sanitair, keukens en alle natte ruimtes tot gebruiksklaar",
  "Eindcontrole zodat het pand showroomklaar en zonder bouwstof wordt opgeleverd",
];

const stakes = [
  {
    icon: Wind,
    title: "Fijnstof dat blijft hangen",
    body: "Bouwstof bestaat uit cement, kwarts en gips en zweeft nog dagen door de lucht en de installaties. Zonder grondige opleveringsschoonmaak ademen uw eerste gebruikers het in en zet het zich vast in ventilatie en kanalen, met klachten en extra reiniging tot gevolg.",
  },
  {
    icon: Clock,
    title: "Resten die zich vastzetten",
    body: "Cementsluier, kit en verfspatten laten zich vlak na de bouw nog eenvoudig verwijderen. Wacht u te lang, dan hechten ze zich blijvend aan glas, tegels en vloeren en is een dure specialistische behandeling nodig om de schade te herstellen.",
  },
  {
    icon: Eye,
    title: "Een valse start bij oplevering",
    body: "Een nieuw of verbouwd pand vol bouwstof en stickers maakt een onafgewerkte indruk op de opdrachtgever, huurder of koper. Juist op het moment van oplevering bepaalt die eerste blik het vertrouwen in het hele project.",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Showroomklaar opgeleverd",
    body: "Wij stoppen niet bij bezemschoon, maar leveren het pand stofvrij en gebruiksklaar op, tot in de hoeken, kozijnen en sanitaire ruimtes.",
  },
  {
    icon: HardHat,
    title: "Professioneel materieel",
    body: "Wij werken met HEPA-stofzuigers en speciaal voor bouwvuil geschikte machines, zodat fijnstof zich niet opnieuw verspreidt door het pand.",
  },
  {
    icon: CalendarClock,
    title: "Strak op uw planning",
    body: "Wij sluiten naadloos aan op de laatste bouwfase en leveren op de afgesproken opleverdatum, ook bij krappe en kortlopende planningen.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig en verzekerd",
    body: "Als VCA-gecertificeerd bedrijf werken wij veilig op de bouwlocatie en op hoogte, en is het werk volledig verzekerd.",
  },
];

const faqs = [
  {
    q: "Wat is het verschil tussen bouwschoonmaak en opleveringsschoonmaak?",
    a: "De bouwschoonmaak is de eerste grove beurt direct na de werkzaamheden, waarbij wij het bouwafval afvoeren en de ruimtes bezemschoon maken. De opleveringsschoonmaak is de grondige eindbeurt daarna, die het pand stofvrij en volledig gebruiksklaar maakt. Wij verzorgen beide fases in één hand.",
  },
  {
    q: "Wat valt er allemaal onder een opleveringsschoonmaak?",
    a: "Wij verwijderen cementsluier, kit-, verf- en stickerresten, maken plafonds, wanden, kozijnen en deuren stofvrij, wassen het glas aan beide zijden en reinigen de vloeren, het sanitair en de keukens tot gebruiksklaar. Daarna controleren wij alles na voordat wij opleveren.",
  },
  {
    q: "Waarom is een professionele opleveringsschoonmaak nodig na de bouw?",
    a: "Bouwstof bestaat uit fijne deeltjes cement, kwarts en gips die schadelijk zijn voor de gezondheid en zich overal vastzetten. Met HEPA-stofzuigers en professionele middelen halen wij dit stof van de oppervlakken én uit de lucht, zodat het zich niet opnieuw verspreidt.",
  },
  {
    q: "Wanneer plannen jullie de opleveringsschoonmaak in?",
    a: "Wij sluiten aan op de laatste bouwfase, zodra alle werkzaamheden klaar zijn en er niets meer wordt geboord of geschuurd. Zo levert u op de afgesproken datum een pand op dat direct in gebruik genomen kan worden.",
  },
  {
    q: "Werken jullie ook voor grote en complexe projecten?",
    a: "Zeker. Wij verzorgen de oplevering- en bouwschoonmaak voor nieuwbouw, renovaties en verbouwingen van kantoren, hoogbouw en commercieel vastgoed door heel Nederland, met een ploeg die op de omvang van uw project is afgestemd.",
  },
  {
    q: "Wat kost een oplevering- en bouwschoonmaak?",
    a: "De prijs hangt af van de oppervlakte, de mate van vervuiling, de bereikbaarheid en de gewenste opleverdatum. Vraag een vrijblijvende offerte aan, dan rekenen wij een heldere prijs op maat voor u uit.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  serviceType: "Oplevering- en bouwschoonmaak",
  provider: {
    "@type": "LocalBusiness",
    name: contact.name,
    telephone: contact.phone,
    areaServed: "NL",
  },
  areaServed: "Nederland",
  description:
    "Grondige oplevering- en bouwschoonmaak voor nieuwbouw, renovatie en verbouwing, van bezemschoon tot showroomklaar opgeleverd door heel Nederland.",
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
          lead="Uw nieuwbouw of verbouwing is bijna klaar, maar overal ligt nog bouwstof, cementsluier en resten van kit en verf. Wij maken uw pand grondig schoon en leveren het stofvrij en showroomklaar op, precies op de afgesproken datum, met het vakmanschap van een gevestigd Haags familiebedrijf."
        />

        {/* Wat wij doen */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              title="Van bezemschoon tot"
              accent="showroomklaar"
              intro="Wij verzorgen de volledige schoonmaak na de bouw, van de eerste grove bouwschoonmaak tot de grondige eindbeurt. U levert een pand op dat direct gebruiksklaar is, zonder zelf nog iets te hoeven regelen."
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
              title="Bouwstof negeren kost u"
              accent="meer dan een schoonmaakbeurt"
              intro="Een pand dat niet vakkundig wordt opgeleverd, werkt stilletjes tegen u. Niet pas later, maar op het moment dat het er het meest toe doet, bij de oplevering zelf."
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
          subtitle="Kies voor een opleverpartner die uw pand stofvrij en showroomklaar aflevert, precies op de afgesproken datum. Wij leveren topkwaliteit tot in het laatste detail en reageren binnen één werkdag op uw aanvraag."
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
