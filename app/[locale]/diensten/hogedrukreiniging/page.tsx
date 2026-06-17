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
import { getTranslations, setRequestLocale } from "next-intl/server";
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

// Iconen blijven in code; de tekst per taal staat in CONTENT en wordt per index
// gekoppeld.
const STAKE_ICONS = [AlertTriangle, Eye, TrendingDown];
const FEATURE_ICONS = [Gauge, ShieldCheck, UserCheck, Leaf];

const CONTENT = {
  nl: {
    title: "Hogedrukreiniging",
    metaDescription:
      "Hogedrukreiniging van bestrating, terreinen en entrees voor zakelijk vastgoed en VvE's. Wij verwijderen groene aanslag, mos en vuil voor een verzorgde eerste indruk.",
    lead: "U wilt dat uw terrein, entree en bestrating er weer fris en uitnodigend bij liggen, zonder gladde groene aanslag of vastgezet vuil. Wij reinigen uw bestrating, terreinen en entrees met de juiste druk per ondergrond en geven uw pand de verzorgde eerste indruk die het verdient.",
    whatTitle: "Uw buitenruimte weer",
    whatAccent: "fris en veilig",
    whatIntro:
      "Van de parkeerplaats tot de drempel van uw entree houden wij de bestrating en terreinen rondom uw pand schoon en begaanbaar. Wij kennen uw locatie en houden het er verzorgd bij.",
    included: [
      "Reiniging van bestrating, klinkers, tegels en betonvloeren rondom uw pand",
      "Bedrijfsterreinen, parkeerplaatsen, opritten en entrees weer fris en veilig",
      "Verwijderen van groene aanslag, mos, algen, olievlekken en ingelopen vuil",
      "Druk en watertemperatuur afgestemd op het type ondergrond, zonder beschadiging",
      "Periodiek in een vast ritme of eenmalig, geheel naar wens",
    ],
    urgencyTitle: "Uitstellen kost u meer dan",
    urgencyAccent: "een schoonmaakbeurt",
    urgencyIntro:
      "Een vergroend en vervuild terrein werkt stilletjes tegen u. Niet pas over jaren, maar nu al, bij elke bezoeker die over uw bestrating naar binnen loopt.",
    stakes: [
      {
        title: "Een ondergrond die glad wordt",
        body: "Groene aanslag en mos op natte bestrating maken een terrein verraderlijk glad. Voor entrees, parkeerplaatsen en looppaden is dat een reëel valrisico voor bezoekers en personeel. Wie dit laat liggen, neemt een aansprakelijkheid op zich die met één beurt te voorkomen was.",
      },
      {
        title: "Het eerste wat bezoekers zien",
        body: "De bestrating en entree zijn letterlijk de stap waarop een bezoeker uw pand betreedt. Een vergroend, vlekkerig terrein straalt achterstallig onderhoud uit, nog voordat iemand binnen is. Juist die eerste indruk bepaalt het beeld dat mensen van uw organisatie vormen.",
      },
      {
        title: "Vuil dat zich vastzet",
        body: "Mos, algen en olie dringen door tot in de poriën van steen en beton en tasten het oppervlak aan. Hoe langer u wacht, hoe hardnekkiger de vervuiling en hoe intensiever de reiniging later wordt. Een terrein dat regelmatig wordt onderhouden, blijft jarenlang in goede staat.",
      },
    ],
    ctaTitle: "Ga voor de beste kwaliteit",
    ctaSubtitle:
      "Kies voor een hogedrukpartner die uw terrein grondig reinigt en de ondergrond ontziet. Wij leveren topkwaliteit die van de eerste tot de laatste beurt gelijk blijft, en reageren binnen één werkdag op uw aanvraag.",
    featureHeading: "Waarom kiezen voor",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "De juiste druk per ondergrond",
        body: "Wij stemmen waterdruk en temperatuur af op het materiaal, zodat het vuil verdwijnt en de steen, voegen en het beton intact blijven.",
      },
      {
        title: "Veilig en verzekerd",
        body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook op drukke terreinen en in publieke ruimte.",
      },
      {
        title: "Vast aanspreekpunt",
        body: "U krijgt één contactpersoon en een vaste ploeg die uw terrein kent, beurt na beurt.",
      },
      {
        title: "Bewust met water",
        body: "Wij reinigen doelgericht en gaan zorgvuldig om met water en omgeving, afgestemd op uw locatie en de ondergrond.",
      },
    ],
    faqs: [
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
    ],
    jsonLdServiceType: "Hogedrukreiniging van bestrating, terreinen en entrees",
  },
  en: {
    title: "Pressure washing",
    metaDescription:
      "Pressure washing of paving, grounds and entrances for commercial property and owners' associations. We remove green growth, moss and dirt for a well-kept first impression.",
    lead: "You want your grounds, entrance and paving to look fresh and inviting again, without slippery green growth or ingrained dirt. We clean your paving, grounds and entrances with the right pressure for each surface and give your building the well-kept first impression it deserves.",
    whatTitle: "Your outdoor space, made",
    whatAccent: "fresh and safe",
    whatIntro:
      "From the car park to the threshold of your entrance, we keep the paving and grounds around your building clean and walkable. We know your location and keep it looking presentable.",
    included: [
      "Cleaning of paving, clinkers, tiles and concrete floors around your building",
      "Business grounds, car parks, driveways and entrances fresh and safe again",
      "Removal of green growth, moss, algae, oil stains and ingrained dirt",
      "Pressure and water temperature matched to the type of surface, without damage",
      "Periodically at a fixed rhythm or as a one-off, entirely as you wish",
    ],
    urgencyTitle: "Putting it off costs more than",
    urgencyAccent: "a single clean",
    urgencyIntro:
      "A green, dirty surface quietly works against you. Not years from now, but already today, with every visitor who walks across your paving on the way in.",
    stakes: [
      {
        title: "A surface that turns slippery",
        body: "Green growth and moss on wet paving make grounds treacherously slippery. For entrances, car parks and walkways that is a real fall risk for visitors and staff. Leaving it untreated means taking on a liability that a single clean would have prevented.",
      },
      {
        title: "The first thing visitors see",
        body: "The paving and entrance are literally the step on which a visitor enters your building. A greened, stained surface signals deferred maintenance before anyone is even inside. It is precisely that first impression that shapes how people see your organisation.",
      },
      {
        title: "Dirt that takes hold",
        body: "Moss, algae and oil penetrate into the pores of stone and concrete and attack the surface. The longer you wait, the more stubborn the soiling and the more intensive the cleaning later becomes. Grounds that are maintained regularly stay in good condition for years.",
      },
    ],
    ctaTitle: "Go for the best quality",
    ctaSubtitle:
      "Choose a pressure-washing partner that cleans your grounds thoroughly while protecting the surface. We deliver top quality that stays the same from the first visit to the last, and respond to your request within one business day.",
    featureHeading: "Why choose",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "The right pressure per surface",
        body: "We match water pressure and temperature to the material, so the dirt disappears and the stone, joints and concrete stay intact.",
      },
      {
        title: "Safe and insured",
        body: "We work to the safety guidelines and are fully insured, including on busy grounds and in public spaces.",
      },
      {
        title: "A single point of contact",
        body: "You get one contact person and a fixed team that knows your grounds, visit after visit.",
      },
      {
        title: "Mindful with water",
        body: "We clean precisely and handle water and surroundings with care, tailored to your location and the surface.",
      },
    ],
    faqs: [
      {
        q: "Which surfaces do you clean with high pressure?",
        a: "We clean paving, clinkers, tiles, concrete floors, ground-floor façades, business grounds, car parks, driveways and entrances. For each type of surface we choose the appropriate technique and pressure.",
      },
      {
        q: "Won't pressure washing damage my paving or joints?",
        a: "Not when it is done expertly. We match the pressure and water temperature to the material and move in a controlled way across the surface, so the dirt comes loose without harming the stone or the jointing. Where needed we restore the joint sand after cleaning.",
      },
      {
        q: "Do you also remove green growth, moss and weeds?",
        a: "Yes. We thoroughly remove green growth, moss, algae and ingrained dirt. Where desired we also tackle weeds between the joints, so the grounds stay fresh for longer.",
      },
      {
        q: "How often is pressure washing needed?",
        a: "For most grounds, once or twice a year is sufficient, often in spring and autumn when moss and growth are most common. For busy entrances and car parks we sometimes advise a more frequent interval. We are happy to think along with you about the rhythm that fits.",
      },
      {
        q: "What does pressure washing cost?",
        a: "The price depends on the surface area, the type of surface, the degree of soiling and accessibility. Request a no-obligation quote and we will calculate a clear, tailored price for you.",
      },
      {
        q: "How quickly can you start?",
        a: "After your request we make contact within one business day and schedule the cleaning at a time that suits you, including outside your busiest hours.",
      },
    ],
    jsonLdServiceType: "Pressure washing of paving, grounds and entrances",
  },
};

type Locale = keyof typeof CONTENT;

function pick(locale: string) {
  return CONTENT[(locale as Locale) in CONTENT ? (locale as Locale) : "nl"];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = pick(locale);
  return {
    title: c.title,
    description: c.metaDescription,
    alternates: { canonical: locale === "en" ? `/en/diensten/${SLUG}` : `/diensten/${SLUG}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = pick(locale);
  const tNav = await getTranslations("common.nav");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.title,
    serviceType: c.jsonLdServiceType,
    provider: {
      "@type": "LocalBusiness",
      name: contact.name,
      telephone: contact.phone,
      areaServed: "NL",
    },
    areaServed: "Nederland",
    description: c.metaDescription,
  };

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
            { label: tNav("home"), href: "/" },
            { label: tNav("services"), href: "/#diensten" },
            { label: c.title },
          ]}
          title={c.title}
          lead={c.lead}
        />

        {/* Wat wij doen */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              title={c.whatTitle}
              accent={c.whatAccent}
              intro={c.whatIntro}
            />
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {c.included.map((item) => (
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
              title={c.urgencyTitle}
              accent={c.urgencyAccent}
              intro={c.urgencyIntro}
            />
            <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.stakes.map((s, i) => {
                const Icon = STAKE_ICONS[i];
                return (
                  <RevealItem key={s.title} className="h-full">
                    <div className="flex h-full flex-col rounded-lg border border-border/70 bg-card/40 p-6">
                      <Icon
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
                );
              })}
            </RevealGroup>
          </div>
        </section>

        <ServiceCta title={c.ctaTitle} subtitle={c.ctaSubtitle} />

        <ServiceFeatureGrid
          heading={c.featureHeading}
          accent={c.featureAccent}
          features={c.features.map((f, i) => ({
            ...f,
            icon: FEATURE_ICONS[i],
          }))}
        />

        <ServiceFaq items={c.faqs} />

        <div id="offerte" className="scroll-mt-24">
          <OfferteForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
