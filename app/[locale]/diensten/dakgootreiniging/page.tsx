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

const SLUG = "dakgootreiniging";

// Iconen blijven in code; de tekst per taal staat in CONTENT en wordt per index
// gekoppeld.
const STAKE_ICONS = [AlertTriangle, Home, TrendingDown];
const FEATURE_ICONS = [ShieldCheck, Droplets, CalendarRange, UserCheck];

const CONTENT = {
  nl: {
    title: "Dakgootreiniging",
    metaDescription:
      "Professionele dakgootreiniging voor zakelijk vastgoed en VvE's door heel Nederland. Vrije goten voorkomen lekkage en houtrot, vakkundig en veilig op hoogte.",
    lead: "Een verstopte goot merkt u pas wanneer het water al binnen staat. Wij houden uw goten en afvoeren het hele jaar door vrij, zodat regenwater weg blijft lopen en lekkage en houtrot geen kans krijgen, vakkundig en veilig op hoogte uitgevoerd.",
    whatTitle: "Vrije goten,",
    whatAccent: "zonder zorgen",
    whatIntro:
      "In plaats van pas in actie te komen als het water al overloopt, houden wij uw goten preventief vrij. Wij kennen uw pand en nemen de gootreiniging gewoon mee tijdens het onderhoud.",
    included: [
      "Het volledig leeghalen van goten, bladvangers en spuwers",
      "Doorspuiten van de regenpijpen zodat het water ongehinderd wegloopt",
      "Verwijderen van bladeren, mos, takken en aangekoekt vuil",
      "Visuele controle van goten en afvoeren, met melding van eventuele schade",
      "Goed meegenomen tijdens een onderhoudsbeurt, in het voor- en najaar",
    ],
    urgencyTitle: "Uitstellen kost u meer dan",
    urgencyAccent: "een schoonmaakbeurt",
    urgencyIntro:
      "Een goot die u laat versloffen, werkt stilletjes tegen u. De vervuiling stapelt zich op en het vocht doet zijn werk lang voordat u de schade aan de binnenkant van uw pand ziet.",
    stakes: [
      {
        title: "Water zoekt een andere weg",
        body: "Zodra de goot verstopt raakt, loopt het regenwater over de rand en achter de dakrand langs. Dat water dringt door tot in de muren en de dakconstructie, waar het zich opstapelt tot een lekkage die u pas opmerkt als de schade al binnen zichtbaar is.",
      },
      {
        title: "Houtrot en aangetast metselwerk",
        body: "Vocht dat blijft staan tegen houten boeidelen en gevels veroorzaakt houtrot, schimmel en aangetast voegwerk. Dat herstel kost al snel een veelvoud van een reinigingsbeurt en grijpt diep in op de staat van uw pand.",
      },
      {
        title: "Een kleine klus die groot wordt",
        body: "Een goot die u nu in een beurt vrijmaakt, wordt na een natte winter een hardnekkige prop van bladeren en slib. Hoe langer u wacht, hoe meer werk het kost en hoe groter de kans dat er ondertussen al gevolgschade is ontstaan.",
      },
    ],
    ctaTitle: "Ga voor de beste kwaliteit",
    ctaSubtitle:
      "Kies voor een vaste partner die uw goten grondig vrijhoudt en de afvoeren echt doorspoelt, beurt na beurt. Wij leveren topkwaliteit en reageren binnen één werkdag op uw aanvraag.",
    featureHeading: "Waarom kiezen voor",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Veilig en verzekerd op hoogte",
        body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook voor het werken op hoogte aan goten en dakranden.",
      },
      {
        title: "Grondig en compleet",
        body: "Wij halen niet alleen de goot leeg, maar spuiten ook de afvoeren door zodat het water echt vrij kan wegstromen.",
      },
      {
        title: "Op het juiste moment",
        body: "Wij plannen de reiniging in het voor- en najaar, precies wanneer bladval en winterresten de meeste verstoppingen veroorzaken.",
      },
      {
        title: "In één beurt meegenomen",
        body: "Wij combineren de gootreiniging met uw glas- en gevelonderhoud, zodat alles bij één vaste partner geregeld is.",
      },
    ],
    faqs: [
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
    ],
    jsonLdServiceType: "Dakgootreiniging en afvoeronderhoud",
    jsonLdDescription:
      "Professionele dakgootreiniging voor zakelijk vastgoed en VvE's door heel Nederland. Vrije goten voorkomen lekkage en houtrot.",
  },
  en: {
    title: "Gutter cleaning",
    metaDescription:
      "Professional gutter cleaning for commercial property and owners' associations throughout the Netherlands. Clear gutters prevent leaks and wood rot, carried out expertly and safely at height.",
    lead: "You only notice a blocked gutter once the water is already inside. We keep your gutters and downpipes clear all year round, so rainwater keeps draining away and leaks and wood rot get no chance, carried out expertly and safely at height.",
    whatTitle: "Clear gutters,",
    whatAccent: "free of worries",
    whatIntro:
      "Instead of only acting once the water is already overflowing, we keep your gutters clear as a preventive measure. We know your building and simply include the gutter cleaning during maintenance.",
    included: [
      "Completely emptying gutters, leaf guards and gargoyles",
      "Flushing the downpipes so the water drains away unhindered",
      "Removing leaves, moss, twigs and caked-on dirt",
      "A visual inspection of gutters and drains, reporting any damage",
      "Conveniently included during a maintenance visit, in spring and autumn",
    ],
    urgencyTitle: "Putting it off costs more than",
    urgencyAccent: "a single clean",
    urgencyIntro:
      "A gutter you let go quietly works against you. The build-up keeps growing and the moisture does its work long before you see the damage on the inside of your building.",
    stakes: [
      {
        title: "Water finds another way",
        body: "As soon as the gutter becomes blocked, the rainwater flows over the edge and behind the roof edge. That water penetrates into the walls and the roof structure, where it builds up into a leak that you only notice once the damage is already visible inside.",
      },
      {
        title: "Wood rot and damaged masonry",
        body: "Moisture that lingers against wooden fascia boards and façades causes wood rot, mould and damaged jointing. That repair quickly costs many times more than a cleaning visit and reaches deep into the condition of your building.",
      },
      {
        title: "A small job that grows large",
        body: "A gutter you now clear in a single visit becomes a stubborn plug of leaves and sludge after a wet winter. The longer you wait, the more work it takes and the greater the chance that consequential damage has already occurred in the meantime.",
      },
    ],
    ctaTitle: "Go for the best quality",
    ctaSubtitle:
      "Choose a regular partner that keeps your gutters thoroughly clear and properly flushes the downpipes, visit after visit. We deliver top quality and respond to your request within one business day.",
    featureHeading: "Why choose",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Safe and insured at height",
        body: "We work to the safety guidelines and are fully insured, including for working at height on gutters and roof edges.",
      },
      {
        title: "Thorough and complete",
        body: "We not only empty the gutter but also flush the drains, so the water can really drain away freely.",
      },
      {
        title: "At the right moment",
        body: "We schedule the cleaning in spring and autumn, exactly when leaf fall and winter residue cause the most blockages.",
      },
      {
        title: "Included in a single visit",
        body: "We combine the gutter cleaning with your glass and façade maintenance, so everything is arranged with one regular partner.",
      },
    ],
    faqs: [
      {
        q: "How often should a gutter be cleaned?",
        a: "For most buildings we advise twice a year, in spring and after autumn. If there are many trees around your building, an extra visit can be sensible. We match the rhythm to your situation and surroundings.",
      },
      {
        q: "How do I know whether my gutter is blocked?",
        a: "You often see it from water flowing over the gutter edge, damp patches or mould on the walls, and plants or moss growing in the gutter. When we visit we always inspect the gutters and drains and report anything we notice.",
      },
      {
        q: "Do you also flush the downpipes?",
        a: "Yes. Flushing the rainwater drainage is a standard part of our gutter cleaning, so the water drains away unhindered not only out of the gutter but all the way down.",
      },
      {
        q: "Do you also work on high gutters and large buildings?",
        a: "Certainly. We specialise in working at height and handle gutter cleaning for owners' associations, property managers and commercial property, including high-rise and hard-to-reach roof lines.",
      },
      {
        q: "Can the gutter cleaning be done together with other maintenance?",
        a: "That is precisely our approach. We include the gutter cleaning during your glass and façade maintenance, so you arrange everything in one go with one partner and no separate appointment is needed.",
      },
      {
        q: "What does gutter cleaning cost?",
        a: "The price depends on the length of the gutters, the height, the accessibility and the degree of soiling. Request a no-obligation quote and we will calculate a clear, tailored price for you.",
      },
    ],
    jsonLdServiceType: "Gutter cleaning and drainage maintenance",
    jsonLdDescription:
      "Professional gutter cleaning for commercial property and owners' associations throughout the Netherlands. Clear gutters prevent leaks and wood rot.",
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
    description: c.jsonLdDescription,
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
