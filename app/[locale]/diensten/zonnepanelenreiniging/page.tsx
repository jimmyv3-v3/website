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

const SLUG = "zonnepanelenreiniging";

// Iconen blijven in code; de tekst per taal staat in CONTENT en wordt per index
// gekoppeld.
const STAKE_ICONS = [TrendingDown, Bird, Sprout];
const FEATURE_ICONS = [Sun, Sparkles, ShieldCheck, UserCheck];

const CONTENT = {
  nl: {
    title: "Zonnepanelenreiniging",
    metaDescription:
      "Professionele zonnepanelenreiniging met osmosewater voor zakelijk vastgoed en VvE's in heel Nederland. Streeploos schoon en weer op maximaal rendement.",
    lead: "U heeft fors geïnvesteerd in zonnepanelen, dus u wilt dat ze leveren waarvoor u betaalt. Een laag stof, vogelpoep en mos houdt zonlicht tegen en kost u stilletjes opbrengst. Wij houden uw installatie streeploos schoon en weer op vol rendement, met de zorg en het vakmanschap van een gevestigd Haags familiebedrijf.",
    whatTitle: "Schone panelen,",
    whatAccent: "meer opbrengst",
    whatIntro:
      "In plaats van zelf het dak op te klimmen of het er bij te laten zitten, laat u de reiniging over aan één vaste partner. Wij kennen uw installatie en houden de panelen het hele jaar door helder en op rendement.",
    included: [
      "Reiniging met zuiver osmosewater en zachte borstels, zonder hogedruk",
      "Verwijderen van vogelpoep, mos, algen, stof en hardnekkige aanslag",
      "Veilig werken op elk dak en op hoogte volgens de richtlijnen",
      "Periodiek in een vast ritme of eenmalig, geheel naar wens",
      "Advies over de ideale reinigingsfrequentie voor uw installatie",
    ],
    urgencyTitle: "Uitstellen kost u meer dan",
    urgencyAccent: "een schoonmaakbeurt",
    urgencyIntro:
      "Vervuilde panelen werken stilletjes tegen u. Niet pas over jaren, maar nu al, bij elke zonnige dag dat uw installatie minder oplevert dan ze zou kunnen.",
    stakes: [
      {
        title: "Rendement dat wegloopt",
        body: "Een laag vuil, stof en aanslag houdt zonlicht tegen en kost u tot vijfentwintig procent opbrengst. Elke maand dat u wacht, verdienen vervuilde panelen minder terug dan ze zouden moeten. Reiniging betaalt zichzelf terug in extra opbrengst.",
      },
      {
        title: "Vogelpoep slaat een gat in de opbrengst",
        body: "Een enkele plek vogelpoep blokkeert het zonlicht en kan via het hotspot-effect een heel paneel afremmen. Hoe langer het blijft zitten, hoe hardnekkiger het wordt en hoe meer opbrengst u onderweg verliest.",
      },
      {
        title: "Mos en algen tasten het glas aan",
        body: "Mos en algen hechten zich vast aan de randen en kruipen over het glas. Op termijn beschadigen ze de beschermlaag van het paneel, waardoor de schade blijvend wordt en de hele installatie eerder aan vervanging toe is.",
      },
    ],
    ctaTitle: "Ga voor de beste kwaliteit",
    ctaSubtitle:
      "Kies voor de meest verzorgde partner in zonnepanelenreiniging van Nederland. Wij reinigen met zuiver osmosewater voor topkwaliteit die uw installatie spaart en uw rendement maximaal houdt, en reageren binnen één werkdag op uw aanvraag.",
    featureHeading: "Waarom kiezen voor",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Maximaal rendement",
        body: "Streeploos schone panelen vangen weer alle zonlicht op, zodat uw installatie levert waarvoor u heeft betaald.",
      },
      {
        title: "Zuiver osmosewater",
        body: "Wij reinigen met kalkvrij osmosewater en zachte borstels, zodat de panelen streeploos opdrogen zonder een waas of krassen.",
      },
      {
        title: "Veilig en verzekerd",
        body: "Wij werken volgens de veiligheidsrichtlijnen en zijn volledig verzekerd, ook voor het werken op daken en op hoogte.",
      },
      {
        title: "Vast aanspreekpunt",
        body: "U krijgt één contactpersoon en een vaste ploeg die uw installatie kent, beurt na beurt.",
      },
    ],
    faqs: [
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
    ],
    jsonLdServiceType: "Zonnepanelenreiniging",
    jsonLdDescription:
      "Professionele zonnepanelenreiniging met osmosewater voor zakelijk vastgoed en VvE's, voor maximaal rendement door heel Nederland.",
  },
  en: {
    title: "Solar panel cleaning",
    metaDescription:
      "Professional solar panel cleaning with deionised water for commercial property and owners' associations throughout the Netherlands. Streak-free clean and back to maximum yield.",
    lead: "You have invested heavily in solar panels, so you want them to deliver what you paid for. A layer of dust, bird droppings and moss blocks sunlight and quietly costs you yield. We keep your installation streak-free clean and back at full performance, with the care and craftsmanship of an established family business from The Hague.",
    whatTitle: "Clean panels,",
    whatAccent: "more yield",
    whatIntro:
      "Instead of climbing onto the roof yourself or leaving it untouched, you leave the cleaning to one dedicated partner. We know your installation and keep the panels clear and performing throughout the year.",
    included: [
      "Cleaning with pure deionised water and soft brushes, without high pressure",
      "Removal of bird droppings, moss, algae, dust and stubborn deposits",
      "Safe working on every roof and at height according to the guidelines",
      "Periodically at a fixed rhythm or as a one-off, entirely as you wish",
      "Advice on the ideal cleaning frequency for your installation",
    ],
    urgencyTitle: "Putting it off costs more than",
    urgencyAccent: "a single clean",
    urgencyIntro:
      "Soiled panels quietly work against you. Not years from now, but already today, on every sunny day that your installation delivers less than it could.",
    stakes: [
      {
        title: "Yield that drains away",
        body: "A layer of dirt, dust and deposits blocks sunlight and costs you up to twenty-five percent of your yield. Every month you wait, soiled panels earn back less than they should. Cleaning pays for itself in extra yield.",
      },
      {
        title: "Bird droppings punch a hole in your yield",
        body: "A single spot of bird droppings blocks the sunlight and can slow down an entire panel through the hotspot effect. The longer it stays put, the more stubborn it becomes and the more yield you lose along the way.",
      },
      {
        title: "Moss and algae attack the glass",
        body: "Moss and algae cling to the edges and creep across the glass. Over time they damage the protective layer of the panel, so the damage becomes permanent and the whole installation needs replacing sooner.",
      },
    ],
    ctaTitle: "Go for the best quality",
    ctaSubtitle:
      "Choose the most meticulous partner in solar panel cleaning in the Netherlands. We clean with pure deionised water for top quality that protects your installation and keeps your yield at its maximum, and respond to your request within one business day.",
    featureHeading: "Why choose",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Maximum yield",
        body: "Streak-free clean panels capture all the sunlight again, so your installation delivers what you paid for.",
      },
      {
        title: "Pure deionised water",
        body: "We clean with lime-free deionised water and soft brushes, so the panels dry streak-free without a haze or scratches.",
      },
      {
        title: "Safe and insured",
        body: "We work to the safety guidelines and are fully insured, including for working on roofs and at height.",
      },
      {
        title: "A single point of contact",
        body: "You get one contact person and a fixed team that knows your installation, visit after visit.",
      },
    ],
    faqs: [
      {
        q: "Why should I have my solar panels cleaned?",
        a: "Dust, bird droppings, moss and deposits block sunlight and reduce the yield of your installation. By keeping the panels clean, they capture all the sunlight again and your installation delivers the return you invested in.",
      },
      {
        q: "How often should I have my solar panels cleaned?",
        a: "For most installations, once or twice a year is sufficient. If the panels lie flat or at a slight angle, rain rinses the dirt away less effectively and we advise cleaning more often. We are happy to think along with you about the rhythm that suits your installation.",
      },
      {
        q: "What water do you use to clean the panels?",
        a: "We clean with pure deionised water that has been filtered of lime and minerals. As a result, the panels dry streak-free without leaving a haze. Tap water contains lime and would form a layer on the glass instead, so we never use it.",
      },
      {
        q: "Do you use a pressure washer on the panels?",
        a: "No. High pressure can damage the panels and the seals. We always work with soft brushes and pure deionised water, so the glass and the protective layer stay intact.",
      },
      {
        q: "Do you also work for large installations and owners' associations?",
        a: "Certainly. We carry out the cleaning of large solar roofs for businesses, property managers and owners' associations throughout the Netherlands, including at height and on roofs that are hard to reach.",
      },
      {
        q: "What does solar panel cleaning cost?",
        a: "The price depends on the number of panels, accessibility, the height and the frequency. Request a no-obligation quote and we will calculate a clear, tailored price for you.",
      },
    ],
    jsonLdServiceType: "Solar panel cleaning",
    jsonLdDescription:
      "Professional solar panel cleaning with deionised water for commercial property and owners' associations, for maximum yield throughout the Netherlands.",
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
