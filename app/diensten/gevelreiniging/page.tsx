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
const TITLE = "Gevelreiniging";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Professionele gevelreiniging voor zakelijk vastgoed en VvE's door heel Nederland. Algen, mos en aanslag vakkundig verwijderd met de juiste methode per gevelmateriaal.",
  alternates: { canonical: `/diensten/${SLUG}` },
};

const included = [
  "Reiniging van baksteen, beton, stucwerk, natuursteen, kunststof en metaal",
  "Verwijderen van algen, mos, groene aanslag, roet en atmosferische vervuiling",
  "Softwash met lage druk en biologisch afbreekbare middelen voor kwetsbare gevels",
  "Hogedrukreiniging waar het gevelmateriaal dat veilig toelaat",
  "Advies over impregneren en nabehandeling zodat uw gevel langer schoon blijft",
  "Reiniging op hoogte met eigen materieel, tot zesendertig meter",
];

const stakes = [
  {
    icon: AlertTriangle,
    title: "Algen en mos vreten aan de gevel",
    body: "Groene aanslag houdt vocht vast in de gevel. In de winter bevriest dat vocht en springt het voegwerk los, waarna het water dieper de muur in trekt. Wat begint als groene waas, eindigt in vorstschade en herstelwerk dat een veelvoud kost van een tijdige reiniging.",
  },
  {
    icon: Eye,
    title: "Een vuile gevel valt iedereen op",
    body: "Strepen, vlekken en groene plekken op de gevel zijn het eerste wat bezoekers, huurders en kopers zien. Voor kantoren, retail en VvE's straalt juist die buitenkant uit hoe serieus u uw pand neemt, nog voordat iemand binnen is geweest.",
  },
  {
    icon: TrendingDown,
    title: "Uitstel maakt de vervuiling hardnekkig",
    body: "Aanslag die jaren blijft zitten, brandt zich in het oppervlak en vraagt zwaardere middelen en meer tijd om weg te krijgen. Periodieke reiniging houdt de gevel niet alleen mooi, maar voorkomt dat een routinebeurt later een kostbare gevelrenovatie wordt.",
  },
];

const features = [
  {
    icon: Droplets,
    title: "De juiste methode per gevel",
    body: "Wij beoordelen elk gevelmateriaal en kiezen tussen softwash, lage druk of hogedruk, zodat de gevel schoon wordt zonder beschadigd te raken.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig en verzekerd op hoogte",
    body: "Wij zijn VCA-gecertificeerd en volledig verzekerd, ook voor het werken op hoogte met hoogwerker en gevelinstallatie.",
  },
  {
    icon: Leaf,
    title: "Milieubewuste reiniging",
    body: "Wij werken met biologisch afbreekbare middelen en zuiver water, afgestemd op de ondergrond en de omgeving van uw pand.",
  },
  {
    icon: UserCheck,
    title: "Vast aanspreekpunt",
    body: "U krijgt één contactpersoon en een vaste ploeg die uw gevel kent, met een heldere planning en eerlijke afspraken.",
  },
];

const faqs = [
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
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  serviceType: "Gevelreiniging",
  provider: {
    "@type": "LocalBusiness",
    name: contact.name,
    telephone: contact.phone,
    areaServed: "NL",
  },
  areaServed: "Nederland",
  description:
    "Professionele gevelreiniging voor alle gevelmaterialen, met de juiste methode per ondergrond en advies over impregneren en nabehandeling.",
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
          lead="U wilt uw gevel weer fris en representatief, zonder het risico op beschadiging door de verkeerde aanpak. Wij hebben ervaring met alle gevelmaterialen en vervuilingen en kiezen per oppervlak de meest duurzame methode, van softwash tot hogedruk, met de zorg van een gevestigd Haags familiebedrijf."
        />

        {/* Wat wij doen */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              title="Schone gevel,"
              accent="zonder beschadiging"
              intro="Elke gevel vraagt om een eigen aanpak. Wij beoordelen het materiaal en de vervuiling, kiezen de juiste methode en houden uw gevel er onberispelijk bij, van de begane grond tot de hoogbouw."
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
              intro="Een gevel die u laat versloffen, werkt stilletjes tegen u. Niet pas over jaren, maar nu al, elke dag dat huurders, bezoekers en kopers uw pand zien en terwijl algen en mos zich dieper in het oppervlak vreten."
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
          subtitle="Kies voor de meest verzorgde gevelpartner van Nederland. Wij reinigen elke gevel met de juiste methode en dezelfde toewijding, beurt na beurt, en reageren binnen één werkdag op uw aanvraag."
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
