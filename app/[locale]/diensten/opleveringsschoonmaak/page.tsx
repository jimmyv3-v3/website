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

const SLUG = "opleveringsschoonmaak";

// Iconen blijven in code; de tekst per taal staat in CONTENT en wordt per index
// gekoppeld.
const STAKE_ICONS = [Wind, Clock, Eye];
const FEATURE_ICONS = [Sparkles, HardHat, CalendarClock, ShieldCheck];

const CONTENT = {
  nl: {
    title: "Oplevering- en bouwschoonmaak",
    metaDescription:
      "Bouwstof, cementsluier en kit- en verfresten vakkundig verwijderd. Wij maken uw nieuwbouw of verbouwing bezemschoon tot showroomklaar opgeleverd, door heel Nederland.",
    lead: "Uw nieuwbouw of verbouwing is bijna klaar, maar overal ligt nog bouwstof, cementsluier en resten van kit en verf. Wij maken uw pand grondig schoon en leveren het stofvrij en showroomklaar op, precies op de afgesproken datum, met het vakmanschap van een gevestigd Haags familiebedrijf.",
    whatTitle: "Van bezemschoon tot",
    whatAccent: "showroomklaar",
    whatIntro:
      "Wij verzorgen de volledige schoonmaak na de bouw, van de eerste grove bouwschoonmaak tot de grondige eindbeurt. U levert een pand op dat direct gebruiksklaar is, zonder zelf nog iets te hoeven regelen.",
    included: [
      "Afvoeren van bouwafval en het bezemschoon opleveren van de ruimtes",
      "Verwijderen van cementsluier, kit-, verf-, lijm- en stickerresten",
      "Stofvrij maken van plafonds, wanden, kozijnen, deuren en radiatoren",
      "Glasbewassing aan binnen- en buitenzijde, inclusief het verwijderen van bouwstickers",
      "Reinigen van vloeren, sanitair, keukens en alle natte ruimtes tot gebruiksklaar",
      "Eindcontrole zodat het pand showroomklaar en zonder bouwstof wordt opgeleverd",
    ],
    urgencyTitle: "Bouwstof negeren kost u",
    urgencyAccent: "meer dan een schoonmaakbeurt",
    urgencyIntro:
      "Een pand dat niet vakkundig wordt opgeleverd, werkt stilletjes tegen u. Niet pas later, maar op het moment dat het er het meest toe doet, bij de oplevering zelf.",
    stakes: [
      {
        title: "Fijnstof dat blijft hangen",
        body: "Bouwstof bestaat uit cement, kwarts en gips en zweeft nog dagen door de lucht en de installaties. Zonder grondige opleveringsschoonmaak ademen uw eerste gebruikers het in en zet het zich vast in ventilatie en kanalen, met klachten en extra reiniging tot gevolg.",
      },
      {
        title: "Resten die zich vastzetten",
        body: "Cementsluier, kit en verfspatten laten zich vlak na de bouw nog eenvoudig verwijderen. Wacht u te lang, dan hechten ze zich blijvend aan glas, tegels en vloeren en is een dure specialistische behandeling nodig om de schade te herstellen.",
      },
      {
        title: "Een valse start bij oplevering",
        body: "Een nieuw of verbouwd pand vol bouwstof en stickers maakt een onafgewerkte indruk op de opdrachtgever, huurder of koper. Juist op het moment van oplevering bepaalt die eerste blik het vertrouwen in het hele project.",
      },
    ],
    ctaTitle: "Ga voor de beste kwaliteit",
    ctaSubtitle:
      "Kies voor een opleverpartner die uw pand stofvrij en showroomklaar aflevert, precies op de afgesproken datum. Wij leveren topkwaliteit tot in het laatste detail en reageren binnen één werkdag op uw aanvraag.",
    featureHeading: "Waarom kiezen voor",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Showroomklaar opgeleverd",
        body: "Wij stoppen niet bij bezemschoon, maar leveren het pand stofvrij en gebruiksklaar op, tot in de hoeken, kozijnen en sanitaire ruimtes.",
      },
      {
        title: "Professioneel materieel",
        body: "Wij werken met HEPA-stofzuigers en speciaal voor bouwvuil geschikte machines, zodat fijnstof zich niet opnieuw verspreidt door het pand.",
      },
      {
        title: "Strak op uw planning",
        body: "Wij sluiten naadloos aan op de laatste bouwfase en leveren op de afgesproken opleverdatum, ook bij krappe en kortlopende planningen.",
      },
      {
        title: "Veilig en verzekerd",
        body: "Als VCA-gecertificeerd bedrijf werken wij veilig op de bouwlocatie en op hoogte, en is het werk volledig verzekerd.",
      },
    ],
    faqs: [
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
    ],
    jsonLdServiceType: "Oplevering- en bouwschoonmaak",
    jsonLdDescription:
      "Grondige oplevering- en bouwschoonmaak voor nieuwbouw, renovatie en verbouwing, van bezemschoon tot showroomklaar opgeleverd door heel Nederland.",
  },
  en: {
    title: "Handover and construction cleaning",
    metaDescription:
      "Construction dust, cement film and adhesive and paint residue expertly removed. We deliver your new build or renovation from broom-clean to showroom-ready, throughout the Netherlands.",
    lead: "Your new build or renovation is nearly finished, yet construction dust, cement film and traces of adhesive and paint are still everywhere. We clean your building thoroughly and deliver it dust-free and showroom-ready, exactly on the agreed date, with the craftsmanship of an established family business from The Hague.",
    whatTitle: "From broom-clean to",
    whatAccent: "showroom-ready",
    whatIntro:
      "We take care of the complete clean after construction, from the first rough construction cleaning to the thorough final pass. You hand over a building that is ready to use straight away, without having to arrange anything yourself.",
    included: [
      "Removing construction waste and delivering the spaces broom-clean",
      "Removing cement film and adhesive, paint, glue and sticker residue",
      "Making ceilings, walls, window frames, doors and radiators dust-free",
      "Window cleaning on the inside and outside, including removal of construction stickers",
      "Cleaning floors, sanitary facilities, kitchens and all wet rooms until ready to use",
      "A final inspection so the building is handed over showroom-ready and free of construction dust",
    ],
    urgencyTitle: "Ignoring construction dust costs you",
    urgencyAccent: "more than a single clean",
    urgencyIntro:
      "A building that is not handed over expertly quietly works against you. Not only later, but at the moment it matters most, at the handover itself.",
    stakes: [
      {
        title: "Fine dust that lingers",
        body: "Construction dust consists of cement, quartz and gypsum and keeps floating through the air and the systems for days. Without a thorough handover clean, your first occupants breathe it in and it settles in the ventilation and ducts, leading to complaints and extra cleaning.",
      },
      {
        title: "Residue that takes hold",
        body: "Cement film, sealant and paint splashes are still easy to remove right after construction. Wait too long and they bond permanently to glass, tiles and floors, and an expensive specialist treatment is needed to repair the damage.",
      },
      {
        title: "A false start at handover",
        body: "A new or renovated building full of construction dust and stickers makes an unfinished impression on the client, tenant or buyer. It is precisely at the moment of handover that this first look determines confidence in the entire project.",
      },
    ],
    ctaTitle: "Go for the best quality",
    ctaSubtitle:
      "Choose a handover partner that delivers your building dust-free and showroom-ready, exactly on the agreed date. We deliver top quality down to the last detail and respond to your request within one business day.",
    featureHeading: "Why choose",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Delivered showroom-ready",
        body: "We do not stop at broom-clean, but deliver the building dust-free and ready to use, right into the corners, window frames and sanitary areas.",
      },
      {
        title: "Professional equipment",
        body: "We work with HEPA vacuum cleaners and machines designed for construction debris, so fine dust does not spread through the building again.",
      },
      {
        title: "Right on your schedule",
        body: "We connect seamlessly to the final construction phase and deliver on the agreed handover date, even with tight and short-running schedules.",
      },
      {
        title: "Safe and insured",
        body: "As a VCA certified company we work safely on the construction site and at height, and the work is fully insured.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between construction cleaning and handover cleaning?",
        a: "Construction cleaning is the first rough pass directly after the works, in which we remove the construction waste and make the spaces broom-clean. Handover cleaning is the thorough final pass afterwards, which makes the building dust-free and fully ready to use. We take care of both phases in one hand.",
      },
      {
        q: "What does a handover clean include?",
        a: "We remove cement film and adhesive, paint and sticker residue, make ceilings, walls, window frames and doors dust-free, clean the glass on both sides and clean the floors, sanitary facilities and kitchens until ready to use. We then inspect everything before we hand over.",
      },
      {
        q: "Why is a professional handover clean needed after construction?",
        a: "Construction dust consists of fine particles of cement, quartz and gypsum that are harmful to health and settle everywhere. With HEPA vacuum cleaners and professional products we remove this dust from the surfaces and out of the air, so it does not spread again.",
      },
      {
        q: "When do you schedule the handover clean?",
        a: "We connect to the final construction phase, as soon as all the works are finished and nothing is being drilled or sanded any more. This way you hand over a building on the agreed date that can be put into use straight away.",
      },
      {
        q: "Do you also work on large and complex projects?",
        a: "Certainly. We take care of handover and construction cleaning for new builds, renovations and refurbishments of offices, high-rise and commercial property throughout the Netherlands, with a team matched to the scale of your project.",
      },
      {
        q: "What does handover and construction cleaning cost?",
        a: "The price depends on the surface area, the degree of soiling, accessibility and the desired handover date. Request a no-obligation quote and we will calculate a clear, tailored price for you.",
      },
    ],
    jsonLdServiceType: "Handover and construction cleaning",
    jsonLdDescription:
      "Thorough handover and construction cleaning for new builds, renovation and refurbishment, from broom-clean to showroom-ready throughout the Netherlands.",
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
