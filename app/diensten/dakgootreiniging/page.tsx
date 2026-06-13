import type { Metadata } from "next";
import {
  Check,
  Droplets,
  ShieldCheck,
  UserCheck,
  CalendarRange,
  AlertTriangle,
  Home,
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

const SLUG = "dakgootreiniging";
const TITLE = "Dakgootreiniging";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Professionele dakgootreiniging voor zakelijk vastgoed en VvE's door heel Nederland. Vrije goten voorkomen lekkage en houtrot, vakkundig en veilig op hoogte.",
  alternates: { canonical: `/diensten/${SLUG}` },
};

const included = [
  "Het volledig leeghalen van goten, bladvangers en spuwers",
  "Doorspuiten van de regenpijpen zodat het water ongehinderd wegloopt",
  "Verwijderen van bladeren, mos, takken en aangekoekt vuil",
  "Visuele controle van goten en afvoeren, met melding van eventuele schade",
  "Goed meegenomen tijdens een onderhoudsbeurt, in het voor- en najaar",
];

const stakes = [
  {
    icon: AlertTriangle,
    title: "Water zoekt een andere weg",
    body: "Zodra de goot verstopt raakt, loopt het regenwater over de rand en achter de dakrand langs. Dat water dringt door tot in de muren en de dakconstructie, waar het zich opstapelt tot een lekkage die u pas opmerkt als de schade al binnen zichtbaar is.",
  },
  {
    icon: Home,
    title: "Houtrot en aangetast metselwerk",
    body: "Vocht dat blijft staan tegen houten boeidelen en gevels veroorzaakt houtrot, schimmel en aangetast voegwerk. Dat herstel kost al snel een veelvoud van een reinigingsbeurt en grijpt diep in op de staat van uw pand.",
  },
  {
    icon: TrendingDown,
    title: "Een kleine klus die groot wordt",
    body: "Een goot die u nu in een beurt vrijmaakt, wordt na een natte winter een hardnekkige prop van bladeren en slib. Hoe langer u wacht, hoe meer werk het kost en hoe groter de kans dat er ondertussen al gevolgschade is ontstaan.",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Veilig en verzekerd op hoogte",
    body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook voor het werken op hoogte aan goten en dakranden.",
  },
  {
    icon: Droplets,
    title: "Grondig en compleet",
    body: "Wij halen niet alleen de goot leeg, maar spuiten ook de afvoeren door zodat het water echt vrij kan wegstromen.",
  },
  {
    icon: CalendarRange,
    title: "Op het juiste moment",
    body: "Wij plannen de reiniging in het voor- en najaar, precies wanneer bladval en winterresten de meeste verstoppingen veroorzaken.",
  },
  {
    icon: UserCheck,
    title: "In één beurt meegenomen",
    body: "Wij combineren de gootreiniging met uw glas- en gevelonderhoud, zodat alles bij één vaste partner geregeld is.",
  },
];

const faqs = [
  {
    q: "Hoe vaak moet een dakgoot gereinigd worden?",
    a: "Voor de meeste panden adviseren wij twee keer per jaar, in het voorjaar en na de herfst. Staan er veel bomen rond uw pand, dan kan een extra beurt verstandig zijn. Wij stemmen het ritme af op uw situatie en omgeving.",
  },
  {
    q: "Hoe weet ik of mijn dakgoot verstopt is?",
    a: "Vaak ziet u het aan water dat over de gootrand stroomt, vochtplekken of schimmel op de muren, en planten of mos die in de goot groeien. Wanneer wij langskomen controleren wij de goten en afvoeren altijd en melden wij wat ons opvalt.",
  },
  {
    q: "Spuiten jullie ook de regenpijpen door?",
    a: "Ja. Het doorspuiten van de hemelwaterafvoeren hoort standaard bij onze gootreiniging, zodat het water niet alleen uit de goot maar ook helemaal naar beneden ongehinderd wegloopt.",
  },
  {
    q: "Werken jullie ook aan hoge goten en grote panden?",
    a: "Zeker. Wij zijn gespecialiseerd in werken op hoogte en verzorgen de gootreiniging voor VvE's, vastgoedbeheerders en commercieel vastgoed, ook bij hoogbouw en moeilijk bereikbare daklijnen.",
  },
  {
    q: "Kan de gootreiniging samen met ander onderhoud?",
    a: "Dat is juist onze aanpak. Wij nemen de dakgootreiniging mee tijdens uw glas- en gevelonderhoud, zodat u alles in één keer bij één partner regelt en er geen losse afspraak voor nodig is.",
  },
  {
    q: "Wat kost dakgootreiniging?",
    a: "De prijs hangt af van de lengte van de goten, de hoogte, de bereikbaarheid en de mate van vervuiling. Vraag een vrijblijvende offerte aan, dan rekenen wij een heldere prijs op maat voor u uit.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  serviceType: "Dakgootreiniging en afvoeronderhoud",
  provider: {
    "@type": "LocalBusiness",
    name: contact.name,
    telephone: contact.phone,
    areaServed: "NL",
  },
  areaServed: "Nederland",
  description:
    "Professionele dakgootreiniging voor zakelijk vastgoed en VvE's door heel Nederland. Vrije goten voorkomen lekkage en houtrot.",
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
          lead="Een verstopte goot merkt u pas wanneer het water al binnen staat. Wij houden uw goten en afvoeren het hele jaar door vrij, zodat regenwater weg blijft lopen en lekkage en houtrot geen kans krijgen, vakkundig en veilig op hoogte uitgevoerd."
        />

        {/* Wat wij doen */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              title="Vrije goten,"
              accent="zonder zorgen"
              intro="In plaats van pas in actie te komen als het water al overloopt, houden wij uw goten preventief vrij. Wij kennen uw pand en nemen de gootreiniging gewoon mee tijdens het onderhoud."
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
              intro="Een goot die u laat versloffen, werkt stilletjes tegen u. De vervuiling stapelt zich op en het vocht doet zijn werk lang voordat u de schade aan de binnenkant van uw pand ziet."
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
          subtitle="Kies voor een vaste partner die uw goten grondig vrijhoudt en de afvoeren echt doorspoelt, beurt na beurt. Wij leveren topkwaliteit en reageren binnen één werkdag op uw aanvraag."
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
