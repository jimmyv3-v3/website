import type { Metadata } from "next";
import {
  Check,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Users,
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

const SLUG = "glas-en-gevelonderhoud";
const TITLE = "Glas- en gevelonderhoud";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Streeploze glasbewassing en gevelreiniging voor zakelijk vastgoed, VvE's en hoogbouw door heel Nederland. Tot 36 meter, met osmosewater en vakmanschap.",
  alternates: { canonical: `/diensten/${SLUG}` },
};

const included = [
  "Glasbewassing aan de binnen- en buitenzijde, inclusief kozijnen en lijstwerk",
  "Gevelreiniging voor alle gevelmaterialen en vervuilingen",
  "Reiniging met osmosewater voor een streeploos resultaat",
  "Periodiek in een vast ritme of eenmalig, geheel naar wens",
  "Advies over de meest duurzame onderhoudsmethode",
];

const stakes = [
  {
    icon: AlertTriangle,
    title: "Vuil brandt zich in",
    body: "Aanslag, kalk, algen en uitlaatgassen tasten glas en gevel blijvend aan. Hoe langer u wacht, hoe hardnekkiger de vervuiling en hoe duurder het herstel. Wat nu een routinebeurt is, wordt later een kostbare renovatie.",
  },
  {
    icon: Eye,
    title: "Elke dag een eerste indruk",
    body: "Doffe ramen en een vuile gevel stralen achterstallig onderhoud uit naar iedereen die binnenstapt. Voor kantoren, retail en VvE's bepaalt juist die eerste indruk wat mensen van u verwachten.",
  },
  {
    icon: TrendingDown,
    title: "Waarde die wegloopt",
    body: "Vastgoed dat er verwaarloosd bij staat, verliest aan uitstraling, verhuurbaarheid en waarde. Regelmatig onderhoud beschermt de staat én de waarde van uw pand op de lange termijn.",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Streeploos resultaat",
    body: "Wij reinigen met gefilterd osmosewater, zodat het glas vanzelf streeploos opdroogt zonder zepen op de gevel.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig en verzekerd",
    body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook voor het werken op hoogte.",
  },
  {
    icon: UserCheck,
    title: "Vast aanspreekpunt",
    body: "U krijgt één contactpersoon en een vaste ploeg die uw pand kent, beurt na beurt.",
  },
  {
    icon: Users,
    title: "Representatief personeel",
    body: "Nederlands sprekend en representatief gekleed, passend bij elke locatie en opdrachtgever.",
  },
];

const faqs = [
  {
    q: "Hoe vaak laat ik het glas en de gevel reinigen?",
    a: "Voor de meeste panden volstaat een interval van vier tot acht weken. Bij winkels, horeca en drukke entrees adviseren wij vaak wekelijks of tweewekelijks. Wij denken graag met u mee over het ritme dat bij uw pand past.",
  },
  {
    q: "Reinigen jullie ook de binnenzijde van het glas?",
    a: "Ja. Glasbewassing aan de binnen- en buitenzijde, inclusief de kozijnen, hoort standaard bij onze service.",
  },
  {
    q: "Tot welke hoogte kunnen jullie werken?",
    a: "Tot 36 meter met onze hoogwerker. Daaronder werken wij met het telewashsysteem tot 15 meter en traditioneel tot 7 meter, zodat elke ruit aan bod komt.",
  },
  {
    q: "Werken jullie ook voor hoogbouw en VvE's?",
    a: "Zeker. Wij zijn gespecialiseerd in grote, aansprekende objecten en verzorgen het onderhoud voor VvE's, vastgoedbeheerders en commercieel vastgoed door heel Nederland.",
  },
  {
    q: "Wat kost glas- en gevelonderhoud?",
    a: "De prijs hangt af van het glasoppervlak, de hoogte, de bereikbaarheid en de frequentie. Vraag een vrijblijvende offerte aan, dan rekenen wij een heldere prijs op maat voor u uit.",
  },
  {
    q: "Hoe snel kunnen jullie starten?",
    a: "Na uw aanvraag nemen wij binnen één werkdag contact op en plannen wij een eerste beurt op een moment dat u uitkomt.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  serviceType: "Glasbewassing en gevelreiniging",
  provider: {
    "@type": "LocalBusiness",
    name: contact.name,
    telephone: contact.phone,
    areaServed: "NL",
  },
  areaServed: "Nederland",
  description:
    "Streeploze glasbewassing en gevelreiniging voor zakelijk vastgoed, VvE's en hoogbouw door heel Nederland.",
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
          lead="Het glas en de gevel zijn het visitekaartje van uw pand. Wij houden ze het hele jaar door streeploos en representatief, van de begane grond tot de hoogbouw, met de zorg en het vakmanschap van een gevestigd Haags familiebedrijf."
          image="/segments/hoogbouw.jpg"
          imageAlt="Glazenwassers reinigen de glasgevel van een hoogbouwpand"
        />

        {/* Wat wij doen */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              title="Eén partner voor"
              accent="glas én gevel"
              intro="In plaats van losse leveranciers in te schakelen, regelt u het volledige onderhoud van uw glas en gevel bij één vaste partner. Wij kennen uw pand en houden het er onberispelijk bij."
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
              intro="Glas en gevel die u laat versloffen, werken stilletjes tegen u. Niet pas over jaren, maar nu al, elke dag dat huurders, bezoekers en kopers uw pand zien."
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
          subtitle="Kies voor de meest verzorgde glas- en gevelpartner van Nederland. Wij leveren topkwaliteit die van de eerste tot de laatste beurt gelijk blijft, en reageren binnen één werkdag op uw aanvraag."
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
