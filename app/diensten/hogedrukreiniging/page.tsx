import type { Metadata } from "next";
import {
  Check,
  Gauge,
  ShieldCheck,
  UserCheck,
  Leaf,
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

const SLUG = "hogedrukreiniging";
const TITLE = "Hogedrukreiniging";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Hogedrukreiniging van bestrating, terreinen en entrees voor zakelijk vastgoed en VvE's. Wij verwijderen groene aanslag, mos en vuil voor een verzorgde eerste indruk.",
  alternates: { canonical: `/diensten/${SLUG}` },
};

const included = [
  "Reiniging van bestrating, klinkers, tegels en betonvloeren rondom uw pand",
  "Bedrijfsterreinen, parkeerplaatsen, opritten en entrees weer fris en veilig",
  "Verwijderen van groene aanslag, mos, algen, olievlekken en ingelopen vuil",
  "Druk en watertemperatuur afgestemd op het type ondergrond, zonder beschadiging",
  "Periodiek in een vast ritme of eenmalig, geheel naar wens",
];

const stakes = [
  {
    icon: AlertTriangle,
    title: "Een ondergrond die glad wordt",
    body: "Groene aanslag en mos op natte bestrating maken een terrein verraderlijk glad. Voor entrees, parkeerplaatsen en looppaden is dat een reëel valrisico voor bezoekers en personeel. Wie dit laat liggen, neemt een aansprakelijkheid op zich die met één beurt te voorkomen was.",
  },
  {
    icon: Eye,
    title: "Het eerste wat bezoekers zien",
    body: "De bestrating en entree zijn letterlijk de stap waarop een bezoeker uw pand betreedt. Een vergroend, vlekkerig terrein straalt achterstallig onderhoud uit, nog voordat iemand binnen is. Juist die eerste indruk bepaalt het beeld dat mensen van uw organisatie vormen.",
  },
  {
    icon: TrendingDown,
    title: "Vuil dat zich vastzet",
    body: "Mos, algen en olie dringen door tot in de poriën van steen en beton en tasten het oppervlak aan. Hoe langer u wacht, hoe hardnekkiger de vervuiling en hoe intensiever de reiniging later wordt. Een terrein dat regelmatig wordt onderhouden, blijft jarenlang in goede staat.",
  },
];

const features = [
  {
    icon: Gauge,
    title: "De juiste druk per ondergrond",
    body: "Wij stemmen waterdruk en temperatuur af op het materiaal, zodat het vuil verdwijnt en de steen, voegen en het beton intact blijven.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig en verzekerd",
    body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook op drukke terreinen en in publieke ruimte.",
  },
  {
    icon: UserCheck,
    title: "Vast aanspreekpunt",
    body: "U krijgt één contactpersoon en een vaste ploeg die uw terrein kent, beurt na beurt.",
  },
  {
    icon: Leaf,
    title: "Bewust met water",
    body: "Wij reinigen doelgericht en gaan zorgvuldig om met water en omgeving, afgestemd op uw locatie en de ondergrond.",
  },
];

const faqs = [
  {
    q: "Welke oppervlakken reinigen jullie met hoge druk?",
    a: "Wij reinigen bestrating, klinkers, tegels, betonvloeren, gevels op de begane grond, bedrijfsterreinen, parkeerplaatsen, opritten en entrees. Voor elk type ondergrond kiezen wij de passende techniek en druk.",
  },
  {
    q: "Beschadigt hogedrukreiniging mijn bestrating of voegen niet?",
    a: "Niet wanneer het vakkundig gebeurt. Wij stemmen de druk en de watertemperatuur af op het materiaal en bewegen gecontroleerd over het oppervlak, zodat het vuil loslaat zonder de steen of het voegwerk aan te tasten. Waar nodig herstellen wij het voegzand na de reiniging.",
  },
  {
    q: "Verwijderen jullie ook groene aanslag, mos en onkruid?",
    a: "Ja. Groene aanslag, mos, algen en ingelopen vuil verwijderen wij grondig. Waar gewenst pakken wij ook onkruid tussen de voegen aan, zodat het terrein langer fris blijft.",
  },
  {
    q: "Hoe vaak is hogedrukreiniging nodig?",
    a: "Voor de meeste terreinen volstaat één tot twee keer per jaar, vaak in het voor- en najaar wanneer mos en aanslag het meest voorkomen. Bij drukke entrees en parkeerplaatsen adviseren wij soms een vaker terugkerend interval. Wij denken graag met u mee over het ritme dat past.",
  },
  {
    q: "Wat kost hogedrukreiniging?",
    a: "De prijs hangt af van het oppervlak, het type ondergrond, de mate van vervuiling en de bereikbaarheid. Vraag een vrijblijvende offerte aan, dan rekenen wij een heldere prijs op maat voor u uit.",
  },
  {
    q: "Hoe snel kunnen jullie starten?",
    a: "Na uw aanvraag nemen wij binnen één werkdag contact op en plannen wij de reiniging op een moment dat u uitkomt, ook buiten uw drukste uren.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  serviceType: "Hogedrukreiniging van bestrating, terreinen en entrees",
  provider: {
    "@type": "LocalBusiness",
    name: contact.name,
    telephone: contact.phone,
    areaServed: "NL",
  },
  areaServed: "Nederland",
  description:
    "Hogedrukreiniging van bestrating, terreinen en entrees voor zakelijk vastgoed en VvE's, met verwijdering van groene aanslag, mos en vuil voor een verzorgde eerste indruk.",
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
          lead="U wilt dat uw terrein, entree en bestrating er weer fris en uitnodigend bij liggen, zonder gladde groene aanslag of vastgezet vuil. Wij reinigen uw bestrating, terreinen en entrees met de juiste druk per ondergrond en geven uw pand de verzorgde eerste indruk die het verdient."
        />

        {/* Wat wij doen */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              title="Uw buitenruimte weer"
              accent="fris en veilig"
              intro="Van de parkeerplaats tot de drempel van uw entree houden wij de bestrating en terreinen rondom uw pand schoon en begaanbaar. Wij kennen uw locatie en houden het er verzorgd bij."
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
              intro="Een vergroend en vervuild terrein werkt stilletjes tegen u. Niet pas over jaren, maar nu al, bij elke bezoeker die over uw bestrating naar binnen loopt."
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
          subtitle="Kies voor een hogedrukpartner die uw terrein grondig reinigt en de ondergrond ontziet. Wij leveren topkwaliteit die van de eerste tot de laatste beurt gelijk blijft, en reageren binnen één werkdag op uw aanvraag."
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
