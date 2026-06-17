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

const SLUG = "glas-en-gevelonderhoud";

// Iconen blijven in code; de tekst per taal staat in CONTENT en wordt per index
// gekoppeld.
const STAKE_ICONS = [AlertTriangle, Eye, TrendingDown];
const FEATURE_ICONS = [Sparkles, ShieldCheck, UserCheck, Users];

const CONTENT = {
  nl: {
    title: "Glas- en gevelonderhoud",
    metaDescription:
      "Streeploze glasbewassing en gevelreiniging voor zakelijk vastgoed, VvE's en hoogbouw door heel Nederland. Tot 36 meter, met osmosewater en vakmanschap.",
    lead: "Het glas en de gevel zijn het visitekaartje van uw pand. Wij houden ze het hele jaar door streeploos en representatief, van de begane grond tot de hoogbouw, met de zorg en het vakmanschap van een gevestigd Haags familiebedrijf.",
    imageAlt: "Glazenwassers reinigen de glasgevel van een hoogbouwpand",
    whatTitle: "Eén partner voor",
    whatAccent: "glas én gevel",
    whatIntro:
      "In plaats van losse leveranciers in te schakelen, regelt u het volledige onderhoud van uw glas en gevel bij één vaste partner. Wij kennen uw pand en houden het er onberispelijk bij.",
    included: [
      "Glasbewassing aan de binnen- en buitenzijde, inclusief kozijnen en lijstwerk",
      "Gevelreiniging voor alle gevelmaterialen en vervuilingen",
      "Reiniging met osmosewater voor een streeploos resultaat",
      "Periodiek in een vast ritme of eenmalig, geheel naar wens",
      "Advies over de meest duurzame onderhoudsmethode",
    ],
    urgencyTitle: "Uitstellen kost u meer dan",
    urgencyAccent: "een schoonmaakbeurt",
    urgencyIntro:
      "Glas en gevel die u laat versloffen, werken stilletjes tegen u. Niet pas over jaren, maar nu al, elke dag dat huurders, bezoekers en kopers uw pand zien.",
    stakes: [
      {
        title: "Vuil brandt zich in",
        body: "Aanslag, kalk, algen en uitlaatgassen tasten glas en gevel blijvend aan. Hoe langer u wacht, hoe hardnekkiger de vervuiling en hoe duurder het herstel. Wat nu een routinebeurt is, wordt later een kostbare renovatie.",
      },
      {
        title: "Elke dag een eerste indruk",
        body: "Doffe ramen en een vuile gevel stralen achterstallig onderhoud uit naar iedereen die binnenstapt. Voor kantoren, retail en VvE's bepaalt juist die eerste indruk wat mensen van u verwachten.",
      },
      {
        title: "Waarde die wegloopt",
        body: "Vastgoed dat er verwaarloosd bij staat, verliest aan uitstraling, verhuurbaarheid en waarde. Regelmatig onderhoud beschermt de staat én de waarde van uw pand op de lange termijn.",
      },
    ],
    ctaTitle: "Ga voor de beste kwaliteit",
    ctaSubtitle:
      "Kies voor de meest verzorgde glas- en gevelpartner van Nederland. Wij leveren topkwaliteit die van de eerste tot de laatste beurt gelijk blijft, en reageren binnen één werkdag op uw aanvraag.",
    featureHeading: "Waarom kiezen voor",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Streeploos resultaat",
        body: "Wij reinigen met gefilterd osmosewater, zodat het glas vanzelf streeploos opdroogt zonder zepen op de gevel.",
      },
      {
        title: "Veilig en verzekerd",
        body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook voor het werken op hoogte.",
      },
      {
        title: "Vast aanspreekpunt",
        body: "U krijgt één contactpersoon en een vaste ploeg die uw pand kent, beurt na beurt.",
      },
      {
        title: "Representatief personeel",
        body: "Nederlands sprekend en representatief gekleed, passend bij elke locatie en opdrachtgever.",
      },
    ],
    faqs: [
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
    ],
    jsonLdServiceType: "Glasbewassing en gevelreiniging",
    jsonLdDescription:
      "Streeploze glasbewassing en gevelreiniging voor zakelijk vastgoed, VvE's en hoogbouw door heel Nederland.",
  },
  en: {
    title: "Window and façade maintenance",
    metaDescription:
      "Streak-free window cleaning and façade cleaning for commercial property, owners' associations and high-rise across the Netherlands. Up to 36 metres, with pure water and craftsmanship.",
    lead: "The glass and the façade are the calling card of your building. We keep them streak-free and presentable all year round, from ground level to high-rise, with the care and craftsmanship of an established family business from The Hague.",
    imageAlt: "Window cleaners cleaning the glass façade of a high-rise building",
    whatTitle: "One partner for",
    whatAccent: "glass and façade",
    whatIntro:
      "Instead of engaging separate suppliers, you arrange the complete maintenance of your glass and façade with one fixed partner. We know your building and keep it impeccable.",
    included: [
      "Window cleaning on the inside and outside, including window frames and trim",
      "Façade cleaning for all façade materials and types of soiling",
      "Cleaning with pure water for a streak-free result",
      "Periodically at a fixed rhythm or as a one-off, entirely as you wish",
      "Advice on the most sustainable maintenance method",
    ],
    urgencyTitle: "Putting it off costs more than",
    urgencyAccent: "a single clean",
    urgencyIntro:
      "Glass and a façade that you let slide quietly work against you. Not years from now, but already today, every day that tenants, visitors and buyers see your building.",
    stakes: [
      {
        title: "Dirt that burns in",
        body: "Deposits, limescale, algae and exhaust fumes attack glass and façade permanently. The longer you wait, the more stubborn the soiling and the more expensive the repair. What is a routine clean now becomes a costly renovation later.",
      },
      {
        title: "A first impression every day",
        body: "Dull windows and a dirty façade signal deferred maintenance to everyone who steps inside. For offices, retail and owners' associations, it is precisely that first impression that shapes what people expect of you.",
      },
      {
        title: "Value that drains away",
        body: "Property that looks neglected loses appeal, lettability and value. Regular maintenance protects both the condition and the value of your building over the long term.",
      },
    ],
    ctaTitle: "Go for the best quality",
    ctaSubtitle:
      "Choose the most well-kept window and façade partner in the Netherlands. We deliver top quality that stays the same from the first visit to the last, and respond to your request within one business day.",
    featureHeading: "Why choose",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Streak-free result",
        body: "We clean with filtered pure water, so the glass dries streak-free on its own without leaving soap on the façade.",
      },
      {
        title: "Safe and insured",
        body: "We work to the safety guidelines and are fully insured, including for working at height.",
      },
      {
        title: "A single point of contact",
        body: "You get one contact person and a fixed team that knows your building, visit after visit.",
      },
      {
        title: "Presentable staff",
        body: "Dutch-speaking and presentably dressed, fitting for every location and client.",
      },
    ],
    faqs: [
      {
        q: "How often should I have the glass and façade cleaned?",
        a: "For most buildings, an interval of four to eight weeks is sufficient. For shops, hospitality and busy entrances we often advise weekly or fortnightly. We are happy to think along with you about the rhythm that suits your building.",
      },
      {
        q: "Do you also clean the inside of the glass?",
        a: "Yes. Window cleaning on the inside and outside, including the window frames, is a standard part of our service.",
      },
      {
        q: "Up to what height can you work?",
        a: "Up to 36 metres with our aerial platform. Below that we work with the telewash system up to 15 metres and traditionally up to 7 metres, so every pane is covered.",
      },
      {
        q: "Do you also work for high-rise and owners' associations?",
        a: "Certainly. We specialise in large, prominent buildings and handle maintenance for owners' associations, property managers and commercial property across the Netherlands.",
      },
      {
        q: "What does window and façade maintenance cost?",
        a: "The price depends on the glass surface area, the height, accessibility and the frequency. Request a no-obligation quote and we will calculate a clear, tailored price for you.",
      },
      {
        q: "How quickly can you start?",
        a: "After your request we make contact within one business day and schedule a first visit at a time that suits you.",
      },
    ],
    jsonLdServiceType: "Window cleaning and façade cleaning",
    jsonLdDescription:
      "Streak-free window cleaning and façade cleaning for commercial property, owners' associations and high-rise across the Netherlands.",
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
          image="/segments/hoogbouw.jpg"
          imageAlt={c.imageAlt}
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
