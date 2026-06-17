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

const SLUG = "periodiek-onderhoud";

// Iconen blijven in code; de tekst per taal staat in CONTENT en wordt per index
// gekoppeld.
const STAKE_ICONS = [AlertTriangle, Eye, TrendingDown];
const FEATURE_ICONS = [CalendarRange, ShieldCheck, UserCheck, ClipboardCheck];

const CONTENT = {
  nl: {
    title: "Periodiek schoonmaakonderhoud",
    metaDescription:
      "Periodiek schoonmaakonderhoud op een vast ritme voor zakelijk vastgoed, VvE's en kantoren. Een heldere planning en vaste ploeg houden uw pand het hele jaar representatief.",
    lead: "U wilt dat uw pand er altijd verzorgd bij staat, zonder er telkens zelf achteraan te moeten. Met een vast onderhoudsritme nemen wij dat volledig uit handen en houden wij uw vastgoed het hele jaar door representatief, met de zorg en het vakmanschap van een gevestigd Haags familiebedrijf.",
    whatTitle: "Uw onderhoud op een",
    whatAccent: "vast ritme",
    whatIntro:
      "In plaats van het onderhoud telkens los te regelen, legt u het in een vaste planning vast. Wij kennen uw pand, komen op de afgesproken momenten en houden het er zonder omkijken onberispelijk bij.",
    included: [
      "Een vast onderhoudsschema op het interval dat bij uw pand past",
      "Glasbewassing, gevel, entree en buitenzijde in één doorlopend ritme",
      "Kozijnen, lijstwerk en goten meegenomen tijdens dezelfde beurt",
      "Een heldere planning met een vaste dag, zodat u nergens naar hoeft om te kijken",
      "Rapportage na elke beurt en advies wanneer iets extra aandacht vraagt",
    ],
    urgencyTitle: "Zonder vast ritme loopt uw pand",
    urgencyAccent: "ongemerkt achter",
    urgencyIntro:
      "Onderhoud dat u steeds opnieuw moet inplannen, schiet er in de praktijk telkens bij in. De gevolgen daarvan ziet iedereen die uw pand bezoekt, en u betaalt ze later dubbel terug.",
    stakes: [
      {
        title: "Achterstand stapelt zich op",
        body: "Zonder vast ritme groeit de vervuiling ongemerkt aan. Wat met een routinebeurt eenvoudig schoon blijft, vraagt na maanden uitstel een zware en kostbare inhaalslag voordat uw pand er weer netjes bij staat.",
      },
      {
        title: "Bezoekers zien het meteen",
        body: "Een pand dat zichtbaar achterloopt op onderhoud straalt slordigheid uit naar huurders, klanten en bewoners. Juist die dagelijkse indruk bepaalt hoe serieus mensen u en uw organisatie nemen.",
      },
      {
        title: "Onderhoud uitstellen kost meer",
        body: "Vuil dat zich inbrandt en kleine gebreken die blijven liggen leiden tot duur herstel en waardeverlies. Een vast onderhoudsritme voorkomt die kosten en beschermt de staat van uw vastgoed op de lange termijn.",
      },
    ],
    ctaTitle: "Ga voor de beste kwaliteit",
    ctaSubtitle:
      "Kies voor een onderhoudspartner die uw pand het hele jaar door op niveau houdt. Wij leveren topkwaliteit die van de eerste tot de laatste beurt gelijk blijft, en reageren binnen één werkdag op uw aanvraag.",
    featureHeading: "Waarom kiezen voor",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Vast ritme, geen omkijken",
        body: "Wij plannen uw onderhoud op een vaste dag en frequentie, zodat alles vanzelf op tijd gebeurt zonder dat u erachteraan hoeft.",
      },
      {
        title: "Veilig en verzekerd",
        body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook voor het werken op hoogte.",
      },
      {
        title: "Vast aanspreekpunt",
        body: "U krijgt één contactpersoon en een vaste ploeg die uw pand kent en het beurt na beurt op niveau houdt.",
      },
      {
        title: "Inzicht na elke beurt",
        body: "Na iedere beurt weet u wat er is gedaan, zodat de kwaliteit van uw onderhoud aantoonbaar gewaarborgd blijft.",
      },
    ],
    faqs: [
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
    ],
    jsonLdServiceType: "Periodiek schoonmaakonderhoud",
  },
  en: {
    title: "Periodic cleaning maintenance",
    metaDescription:
      "Periodic cleaning maintenance on a fixed rhythm for commercial property, owners' associations and offices. A clear schedule and a fixed team keep your building presentable all year round.",
    lead: "You want your building to always look well-kept, without having to chase after it yourself. With a fixed maintenance rhythm we take that off your hands entirely and keep your property presentable all year round, with the care and craftsmanship of an established family business from The Hague.",
    whatTitle: "Your maintenance on a",
    whatAccent: "fixed rhythm",
    whatIntro:
      "Instead of arranging the maintenance separately every time, you set it down in a fixed schedule. We know your building, come at the agreed moments and keep it immaculate without any hassle for you.",
    included: [
      "A fixed maintenance schedule at the interval that suits your building",
      "Window cleaning, façade, entrance and exterior in one continuous rhythm",
      "Window frames, trim and gutters included during the same visit",
      "A clear schedule with a fixed day, so you never have to worry about a thing",
      "Reporting after each visit and advice whenever something needs extra attention",
    ],
    urgencyTitle: "Without a fixed rhythm your building",
    urgencyAccent: "quietly falls behind",
    urgencyIntro:
      "Maintenance that you have to schedule again and again tends to get pushed aside in practice. Everyone who visits your building sees the consequences, and you pay for them twice over later.",
    stakes: [
      {
        title: "A backlog builds up",
        body: "Without a fixed rhythm the soiling grows unnoticed. What a routine visit keeps easily clean demands a heavy and costly catch-up after months of delay before your building looks neat again.",
      },
      {
        title: "Visitors notice it straight away",
        body: "A building that is visibly behind on maintenance radiates carelessness to tenants, customers and residents. It is precisely that daily impression that determines how seriously people take you and your organisation.",
      },
      {
        title: "Postponing maintenance costs more",
        body: "Dirt that becomes ingrained and small defects that are left unattended lead to expensive repairs and loss of value. A fixed maintenance rhythm prevents those costs and protects the condition of your property over the long term.",
      },
    ],
    ctaTitle: "Go for the best quality",
    ctaSubtitle:
      "Choose a maintenance partner that keeps your building up to standard all year round. We deliver top quality that stays the same from the first visit to the last, and respond to your request within one business day.",
    featureHeading: "Why choose",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Fixed rhythm, no hassle",
        body: "We schedule your maintenance on a fixed day and frequency, so everything happens on time by itself without you having to chase it.",
      },
      {
        title: "Safe and insured",
        body: "We work to the safety guidelines and are fully insured, including for working at height.",
      },
      {
        title: "A single point of contact",
        body: "You get one contact person and a fixed team that knows your building and keeps it up to standard visit after visit.",
      },
      {
        title: "Insight after every visit",
        body: "After each visit you know what has been done, so the quality of your maintenance stays demonstrably assured.",
      },
    ],
    faqs: [
      {
        q: "What exactly does periodic cleaning maintenance involve?",
        a: "We take care of the recurring exterior maintenance of your building on a fixed rhythm. Think of window cleaning, façade, entrance, window frames and gutters, which we keep up in one continuous maintenance schedule so your building stays well-kept all year round.",
      },
      {
        q: "How often does the maintenance recur?",
        a: "We determine that together with you. Many buildings choose an interval of four to eight weeks, while busy entrances or presentable locations are seen to more often. We match the rhythm to the use and the surroundings of your building.",
      },
      {
        q: "Am I committing to a long contract?",
        a: "You get a clear, tailored arrangement without unnecessary obligations. We prefer to work in a continuous arrangement because that gives the best result, but we determine the rhythm and the term in consultation with you.",
      },
      {
        q: "Can you combine several tasks in one visit?",
        a: "Yes. By having window cleaning, façade, gutters and entrance done by the same team, you save on coordination and alignment. One party keeps an eye on the entire exterior maintenance of your building.",
      },
      {
        q: "What does periodic cleaning maintenance cost?",
        a: "The price depends on the size of the building, the work involved and the chosen frequency. Request a no-obligation quote and we will calculate a clear, tailored price for your regular maintenance for you.",
      },
      {
        q: "How quickly can you start?",
        a: "After your request we make contact within one business day, look at your building and draw up a maintenance schedule that starts at a time that suits you.",
      },
    ],
    jsonLdServiceType: "Periodic cleaning maintenance",
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
