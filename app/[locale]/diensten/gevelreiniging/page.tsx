import type { Metadata } from "next";
import {
  Check,
  Droplets,
  ShieldCheck,
  Leaf,
  UserCheck,
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

const SLUG = "gevelreiniging";

// Iconen blijven in code; de tekst per taal staat in CONTENT en wordt per index
// gekoppeld.
const STAKE_ICONS = [AlertTriangle, Eye, TrendingDown];
const FEATURE_ICONS = [Droplets, ShieldCheck, Leaf, UserCheck];

const CONTENT = {
  nl: {
    title: "Gevelreiniging",
    metaDescription:
      "Professionele gevelreiniging voor zakelijk vastgoed en VvE's door heel Nederland. Algen, mos en aanslag vakkundig verwijderd met de juiste methode per gevelmateriaal.",
    lead: "U wilt uw gevel weer fris en representatief, zonder het risico op beschadiging door de verkeerde aanpak. Wij hebben ervaring met alle gevelmaterialen en vervuilingen en kiezen per oppervlak de meest duurzame methode, van softwash tot hogedruk, met de zorg van een gevestigd Haags familiebedrijf.",
    whatTitle: "Schone gevel,",
    whatAccent: "zonder beschadiging",
    whatIntro:
      "Elke gevel vraagt om een eigen aanpak. Wij beoordelen het materiaal en de vervuiling, kiezen de juiste methode en houden uw gevel er onberispelijk bij, van de begane grond tot de hoogbouw.",
    included: [
      "Reiniging van baksteen, beton, stucwerk, natuursteen, kunststof en metaal",
      "Verwijderen van algen, mos, groene aanslag, roet en atmosferische vervuiling",
      "Softwash met lage druk en biologisch afbreekbare middelen voor kwetsbare gevels",
      "Hogedrukreiniging waar het gevelmateriaal dat veilig toelaat",
      "Advies over impregneren en nabehandeling zodat uw gevel langer schoon blijft",
      "Reiniging op hoogte met eigen materieel, tot zesendertig meter",
    ],
    urgencyTitle: "Uitstellen kost u meer dan",
    urgencyAccent: "een schoonmaakbeurt",
    urgencyIntro:
      "Een gevel die u laat versloffen, werkt stilletjes tegen u. Niet pas over jaren, maar nu al, elke dag dat huurders, bezoekers en kopers uw pand zien en terwijl algen en mos zich dieper in het oppervlak vreten.",
    stakes: [
      {
        title: "Algen en mos vreten aan de gevel",
        body: "Groene aanslag houdt vocht vast in de gevel. In de winter bevriest dat vocht en springt het voegwerk los, waarna het water dieper de muur in trekt. Wat begint als groene waas, eindigt in vorstschade en herstelwerk dat een veelvoud kost van een tijdige reiniging.",
      },
      {
        title: "Een vuile gevel valt iedereen op",
        body: "Strepen, vlekken en groene plekken op de gevel zijn het eerste wat bezoekers, huurders en kopers zien. Voor kantoren, retail en VvE's straalt juist die buitenkant uit hoe serieus u uw pand neemt, nog voordat iemand binnen is geweest.",
      },
      {
        title: "Uitstel maakt de vervuiling hardnekkig",
        body: "Aanslag die jaren blijft zitten, brandt zich in het oppervlak en vraagt zwaardere middelen en meer tijd om weg te krijgen. Periodieke reiniging houdt de gevel niet alleen mooi, maar voorkomt dat een routinebeurt later een kostbare gevelrenovatie wordt.",
      },
    ],
    ctaTitle: "Ga voor de beste kwaliteit",
    ctaSubtitle:
      "Kies voor de meest verzorgde gevelpartner van Nederland. Wij reinigen elke gevel met de juiste methode en dezelfde toewijding, beurt na beurt, en reageren binnen één werkdag op uw aanvraag.",
    featureHeading: "Waarom kiezen voor",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "De juiste methode per gevel",
        body: "Wij beoordelen elk gevelmateriaal en kiezen tussen softwash, lage druk of hogedruk, zodat de gevel schoon wordt zonder beschadigd te raken.",
      },
      {
        title: "Veilig en verzekerd op hoogte",
        body: "Wij zijn VCA-gecertificeerd en volledig verzekerd, ook voor het werken op hoogte met hoogwerker en gevelinstallatie.",
      },
      {
        title: "Milieubewuste reiniging",
        body: "Wij werken met biologisch afbreekbare middelen en zuiver water, afgestemd op de ondergrond en de omgeving van uw pand.",
      },
      {
        title: "Vast aanspreekpunt",
        body: "U krijgt één contactpersoon en een vaste ploeg die uw gevel kent, met een heldere planning en eerlijke afspraken.",
      },
    ],
    faqs: [
      {
        q: "Welke gevelmaterialen kunnen jullie reinigen?",
        a: "Wij hebben ervaring met vrijwel alle gevelmaterialen, van baksteen en beton tot stucwerk, natuursteen, kunststof en metalen gevelplaten. Per materiaal kiezen wij de methode die het oppervlak schoon krijgt zonder het te beschadigen.",
      },
      {
        q: "Wat is het verschil tussen softwash en hogedrukreiniging?",
        a: "Bij softwash reinigen wij met lage druk en biologisch afbreekbare middelen die de vervuiling losweken. Dat is ideaal voor kwetsbare gevels zoals stucwerk en zachte natuursteen. Hogedrukreiniging zetten wij alleen in waar het gevelmateriaal die druk veilig kan hebben.",
      },
      {
        q: "Verwijderen jullie ook algen en mos?",
        a: "Ja. Algen, mos en groene aanslag verwijderen wij volledig, en wij behandelen het oppervlak na zodat de aanslag niet meteen terugkomt. Zonder nabehandeling keert groene aanslag vaak binnen één tot twee jaar terug, zeker op schaduwrijke en vochtige gevels.",
      },
      {
        q: "Adviseren jullie over impregneren na de reiniging?",
        a: "Graag. Een impregneerlaag maakt de gevel waterafstotend, waardoor vocht, algen en mos minder kans krijgen en de gevel langer schoon blijft. Wij bekijken per gevel of impregneren zinvol is en lichten de keuze helder voor u toe.",
      },
      {
        q: "Tot welke hoogte kunnen jullie de gevel reinigen?",
        a: "Tot zesendertig meter met onze eigen hoogwerker. Op krappe locaties werken wij met het telewashsysteem tot vijftien meter, zodat ook hoogbouw en lastig bereikbare gevels volledig schoon worden.",
      },
      {
        q: "Wat kost gevelreiniging?",
        a: "De prijs hangt af van het geveloppervlak, het materiaal, de mate van vervuiling, de bereikbaarheid en de hoogte. Vraag een vrijblijvende offerte aan, dan bekijken wij uw gevel en rekenen wij een heldere prijs op maat voor u uit.",
      },
    ],
    jsonLdServiceType: "Gevelreiniging",
    jsonLdDescription:
      "Professionele gevelreiniging voor alle gevelmaterialen, met de juiste methode per ondergrond en advies over impregneren en nabehandeling.",
  },
  en: {
    title: "Façade cleaning",
    metaDescription:
      "Professional façade cleaning for commercial property and owners' associations throughout the Netherlands. Algae, moss and deposits expertly removed with the right method for each façade material.",
    lead: "You want your façade fresh and presentable again, without the risk of damage from the wrong approach. We have experience with every façade material and type of soiling and choose the most sustainable method for each surface, from softwash to high pressure, with the care of an established family business from The Hague.",
    whatTitle: "A clean façade,",
    whatAccent: "without damage",
    whatIntro:
      "Every façade calls for its own approach. We assess the material and the soiling, choose the right method and keep your façade looking immaculate, from the ground floor to the high-rise.",
    included: [
      "Cleaning of brick, concrete, render, natural stone, plastic and metal",
      "Removal of algae, moss, green growth, soot and atmospheric soiling",
      "Softwash with low pressure and biodegradable products for delicate façades",
      "Pressure washing where the façade material can safely take it",
      "Advice on impregnation and aftercare so your façade stays clean for longer",
      "Cleaning at height with our own equipment, up to thirty-six metres",
    ],
    urgencyTitle: "Putting it off costs more than",
    urgencyAccent: "a single clean",
    urgencyIntro:
      "A façade you let slide quietly works against you. Not years from now, but already today, every day that tenants, visitors and buyers see your building and while algae and moss eat deeper into the surface.",
    stakes: [
      {
        title: "Algae and moss eat into the façade",
        body: "Green growth traps moisture in the façade. In winter that moisture freezes and the jointing breaks loose, after which the water draws deeper into the wall. What starts as a green haze ends in frost damage and repair work that costs many times more than a timely clean.",
      },
      {
        title: "A dirty façade stands out to everyone",
        body: "Streaks, stains and green patches on the façade are the first thing visitors, tenants and buyers see. For offices, retail and owners' associations, it is precisely that exterior that signals how seriously you take your building, before anyone has even been inside.",
      },
      {
        title: "Delay makes the soiling stubborn",
        body: "Deposits left for years burn into the surface and demand harsher products and more time to remove. Periodic cleaning not only keeps the façade looking good, but also prevents a routine visit from later becoming a costly façade renovation.",
      },
    ],
    ctaTitle: "Go for the best quality",
    ctaSubtitle:
      "Choose the most meticulous façade partner in the Netherlands. We clean every façade with the right method and the same dedication, visit after visit, and respond to your request within one business day.",
    featureHeading: "Why choose",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "The right method per façade",
        body: "We assess every façade material and choose between softwash, low pressure or high pressure, so the façade comes clean without being damaged.",
      },
      {
        title: "Safe and insured at height",
        body: "We are VCA certified and fully insured, including for working at height with an aerial platform and façade installation.",
      },
      {
        title: "Environmentally aware cleaning",
        body: "We work with biodegradable products and pure water, matched to the surface and the surroundings of your building.",
      },
      {
        title: "A single point of contact",
        body: "You get one contact person and a fixed team that knows your façade, with clear scheduling and honest agreements.",
      },
    ],
    faqs: [
      {
        q: "Which façade materials can you clean?",
        a: "We have experience with virtually all façade materials, from brick and concrete to render, natural stone, plastic and metal cladding panels. For each material we choose the method that gets the surface clean without damaging it.",
      },
      {
        q: "What is the difference between softwash and pressure washing?",
        a: "With softwash we clean using low pressure and biodegradable products that loosen the soiling. That is ideal for delicate façades such as render and soft natural stone. We only use pressure washing where the façade material can safely take that pressure.",
      },
      {
        q: "Do you also remove algae and moss?",
        a: "Yes. We remove algae, moss and green growth completely, and we treat the surface afterwards so the deposits do not return straight away. Without aftercare, green growth often returns within one to two years, especially on shaded and damp façades.",
      },
      {
        q: "Do you advise on impregnation after cleaning?",
        a: "Gladly. An impregnation layer makes the façade water-repellent, giving moisture, algae and moss less of a chance and keeping the façade clean for longer. We look at each façade to see whether impregnation makes sense and explain the choice to you clearly.",
      },
      {
        q: "Up to what height can you clean the façade?",
        a: "Up to thirty-six metres with our own aerial platform. In tight locations we work with the telewash system up to fifteen metres, so that high-rise and hard-to-reach façades also come fully clean.",
      },
      {
        q: "What does façade cleaning cost?",
        a: "The price depends on the façade area, the material, the degree of soiling, accessibility and the height. Request a no-obligation quote and we will look at your façade and calculate a clear, tailored price for you.",
      },
    ],
    jsonLdServiceType: "Façade cleaning",
    jsonLdDescription:
      "Professional façade cleaning for all façade materials, with the right method for each surface and advice on impregnation and aftercare.",
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
