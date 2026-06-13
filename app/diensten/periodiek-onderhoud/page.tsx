import type { Metadata } from "next";
import {
  Check,
  CalendarRange,
  ShieldCheck,
  UserCheck,
  ClipboardCheck,
  AlertTriangle,
  Eye,
  TrendingDown,
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

const SLUG = "periodiek-onderhoud";
const TITLE = "Periodiek schoonmaakonderhoud";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Periodiek schoonmaakonderhoud op een vast ritme voor zakelijk vastgoed, VvE's en kantoren. Een heldere planning en vaste ploeg houden uw pand het hele jaar representatief.",
  alternates: { canonical: `/diensten/${SLUG}` },
};

const included = [
  "Een vast onderhoudsschema op het interval dat bij uw pand past",
  "Glasbewassing, gevel, entree en buitenzijde in één doorlopend ritme",
  "Kozijnen, lijstwerk en goten meegenomen tijdens dezelfde beurt",
  "Een heldere planning met een vaste dag, zodat u nergens naar hoeft om te kijken",
  "Rapportage na elke beurt en advies wanneer iets extra aandacht vraagt",
];

const stakes = [
  {
    icon: AlertTriangle,
    title: "Achterstand stapelt zich op",
    body: "Zonder vast ritme groeit de vervuiling ongemerkt aan. Wat met een routinebeurt eenvoudig schoon blijft, vraagt na maanden uitstel een zware en kostbare inhaalslag voordat uw pand er weer netjes bij staat.",
  },
  {
    icon: Eye,
    title: "Bezoekers zien het meteen",
    body: "Een pand dat zichtbaar achterloopt op onderhoud straalt slordigheid uit naar huurders, klanten en bewoners. Juist die dagelijkse indruk bepaalt hoe serieus mensen u en uw organisatie nemen.",
  },
  {
    icon: TrendingDown,
    title: "Onderhoud uitstellen kost meer",
    body: "Vuil dat zich inbrandt en kleine gebreken die blijven liggen leiden tot duur herstel en waardeverlies. Een vast onderhoudsritme voorkomt die kosten en beschermt de staat van uw vastgoed op de lange termijn.",
  },
];

const features = [
  {
    icon: CalendarRange,
    title: "Vast ritme, geen omkijken",
    body: "Wij plannen uw onderhoud op een vaste dag en frequentie, zodat alles vanzelf op tijd gebeurt zonder dat u erachteraan hoeft.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig en verzekerd",
    body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook voor het werken op hoogte.",
  },
  {
    icon: UserCheck,
    title: "Vast aanspreekpunt",
    body: "U krijgt één contactpersoon en een vaste ploeg die uw pand kent en het beurt na beurt op niveau houdt.",
  },
  {
    icon: ClipboardCheck,
    title: "Inzicht na elke beurt",
    body: "Na iedere beurt weet u wat er is gedaan, zodat de kwaliteit van uw onderhoud aantoonbaar gewaarborgd blijft.",
  },
];

const faqs = [
  {
    q: "Wat houdt periodiek schoonmaakonderhoud precies in?",
    a: "Wij verzorgen het terugkerende buitenonderhoud van uw pand op een vast ritme. Denk aan glasbewassing, gevel, entree, kozijnen en goten, die wij in één doorlopend onderhoudsschema bijhouden zodat uw pand het hele jaar door verzorgd blijft.",
  },
  {
    q: "Hoe vaak komt het onderhoud terug?",
    a: "Dat bepalen wij samen met u. Veel panden kiezen voor een interval van vier tot acht weken, terwijl drukke entrees of representatieve locaties vaker aan bod komen. Wij stemmen het ritme af op het gebruik en de omgeving van uw pand.",
  },
  {
    q: "Leg ik mij vast aan een lang contract?",
    a: "U krijgt een heldere afspraak op maat zonder onnodige verplichtingen. Wij werken het liefst in een doorlopende afspraak omdat dat het beste resultaat geeft, maar het ritme en de looptijd bepalen wij in overleg met u.",
  },
  {
    q: "Kunnen jullie meerdere werkzaamheden in één beurt combineren?",
    a: "Ja. Door glasbewassing, gevel, goten en entree door dezelfde ploeg te laten doen, bespaart u afstemming en coördinatie. Eén partij houdt het volledige buitenonderhoud van uw pand in de gaten.",
  },
  {
    q: "Wat kost periodiek schoonmaakonderhoud?",
    a: "De prijs hangt af van de omvang van het pand, de werkzaamheden en de gekozen frequentie. Vraag een vrijblijvende offerte aan, dan rekenen wij een heldere prijs op maat voor uw vaste onderhoud voor u uit.",
  },
  {
    q: "Hoe snel kunnen jullie starten?",
    a: "Na uw aanvraag nemen wij binnen één werkdag contact op, bekijken wij uw pand en stellen wij een onderhoudsschema op dat op een moment ingaat dat u uitkomt.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  serviceType: "Periodiek schoonmaakonderhoud",
  provider: {
    "@type": "LocalBusiness",
    name: contact.name,
    telephone: contact.phone,
    areaServed: "NL",
  },
  areaServed: "Nederland",
  description:
    "Periodiek schoonmaakonderhoud op een vast ritme voor zakelijk vastgoed, VvE's en kantoren, zodat uw pand het hele jaar door representatief blijft.",
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
          lead="U wilt dat uw pand er altijd verzorgd bij staat, zonder er telkens zelf achteraan te moeten. Met een vast onderhoudsritme nemen wij dat volledig uit handen en houden wij uw vastgoed het hele jaar door representatief, met de zorg en het vakmanschap van een gevestigd Haags familiebedrijf."
        />

        {/* Wat wij doen */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              title="Uw onderhoud op een"
              accent="vast ritme"
              intro="In plaats van het onderhoud telkens los te regelen, legt u het in een vaste planning vast. Wij kennen uw pand, komen op de afgesproken momenten en houden het er zonder omkijken onberispelijk bij."
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
              title="Zonder vast ritme loopt uw pand"
              accent="ongemerkt achter"
              intro="Onderhoud dat u steeds opnieuw moet inplannen, schiet er in de praktijk telkens bij in. De gevolgen daarvan ziet iedereen die uw pand bezoekt, en u betaalt ze later dubbel terug."
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
          subtitle="Kies voor een onderhoudspartner die uw pand het hele jaar door op niveau houdt. Wij leveren topkwaliteit die van de eerste tot de laatste beurt gelijk blijft, en reageren binnen één werkdag op uw aanvraag."
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
