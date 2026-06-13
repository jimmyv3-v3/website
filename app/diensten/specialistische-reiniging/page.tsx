import type { Metadata } from "next";
import {
  Check,
  Gem,
  ShieldCheck,
  UserCheck,
  Microscope,
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

const SLUG = "specialistische-reiniging";
const TITLE = "Specialistische reiniging";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Complex reinigingswerk op hoogte en op bijzondere oppervlakken, van graffiti tot atriumglas. Voor situaties waar standaard schoonmaak afhaakt, door heel Nederland.",
  alternates: { canonical: `/diensten/${SLUG}` },
};

const included = [
  "Reiniging op grote hoogte en op moeilijk bereikbare plekken met hoogwerker, telewash en gevelinstallatie",
  "Verwijderen van graffiti, kauwgom, plakresten en ingebrande aanslag zonder de ondergrond te beschadigen",
  "Reiniging van bijzondere oppervlakken zoals atriumglas, glaskappen, natuursteen, beton en geanodiseerd metaal",
  "Vooraf een analyse van de ondergrond en de vervuiling, zodat wij de juiste methode en druk kiezen",
  "Aanbrengen van een beschermende anti-graffiticoating zodat een volgende keer eenvoudiger te reinigen is",
];

const stakes = [
  {
    icon: AlertTriangle,
    title: "Verkeerde aanpak beschadigt blijvend",
    body: "Een aannemer die met te hoge druk of het verkeerde middel aan de slag gaat, schiet de coating of toplaag stuk en laat strepen achter die nooit meer weggaan. Wat een reinigingsbeurt had moeten zijn, wordt dan een dure renovatie van het hele oppervlak.",
  },
  {
    icon: Eye,
    title: "Graffiti trekt graffiti aan",
    body: "Een beklad of bevuild pand straalt verwaarlozing uit en nodigt uit tot meer overlast. Hoe langer u wacht, hoe dieper de verf in de ondergrond trekt en hoe lastiger het wordt om uw gevel weer representatief te krijgen.",
  },
  {
    icon: TrendingDown,
    title: "Onbereikbaar vuil tast uw pand aan",
    body: "Juist de plekken die niemand kan bereiken, zoals glaskappen, atria en hoge gevelpartijen, laten vervuiling zich inbranden. Dat ondermijnt op termijn de uitstraling, de daglichttoetreding en de waarde van uw vastgoed.",
  },
];

const features = [
  {
    icon: Microscope,
    title: "Eerst analyse, dan reiniging",
    body: "Wij bepalen vooraf de hardheid van de ondergrond en de aard van de vervuiling, zodat wij altijd de juiste methode en druk kiezen.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig en verzekerd op hoogte",
    body: "Als VCA-gecertificeerd bedrijf werken wij volgens de strengste richtlijnen en zijn wij volledig verzekerd, ook voor complex werk op grote hoogte.",
  },
  {
    icon: Gem,
    title: "Specialisten waar anderen afhaken",
    body: "Bijzondere oppervlakken en moeilijk bereikbare situaties zijn precies het werk waar wij met decennia ervaring in gespecialiseerd zijn.",
  },
  {
    icon: UserCheck,
    title: "Vast aanspreekpunt",
    body: "U krijgt één contactpersoon die uw object kent en met u meedenkt over de beste aanpak, van eerste opname tot oplevering.",
  },
];

const faqs = [
  {
    q: "Wat valt er allemaal onder specialistische reiniging?",
    a: "Alles wat buiten de gewone glasbewassing en gevelreiniging valt en om extra kennis of techniek vraagt. Denk aan reiniging op grote hoogte, het verwijderen van graffiti en plakresten, en het reinigen van bijzondere oppervlakken zoals atriumglas, glaskappen, natuursteen en metaal.",
  },
  {
    q: "Kunnen jullie graffiti verwijderen zonder de gevel te beschadigen?",
    a: "Ja. Wij analyseren eerst de ondergrond en de verfsoort en kiezen daarop de juiste methode, van een speciaal reinigingsmiddel tot stoom of gepaste hoge druk. Zo halen wij de graffiti weg zonder de coating of toplaag te beschadigen.",
  },
  {
    q: "Hoe bereiken jullie moeilijk bereikbare plekken?",
    a: "Wij beschikken over hoogwerkers tot zesendertig meter, het telewash-systeem tot vijftien meter en zetten waar mogelijk de gevelinstallatie van het gebouw in. Daarmee komen wij bij atria, glaskappen en hoge gevelpartijen die voor anderen onbereikbaar zijn.",
  },
  {
    q: "Reinigen jullie ook binnenoppervlakken zoals atriumglas en glaskappen?",
    a: "Zeker. Juist hoge binnenruimtes zoals atria, vides en glaskappen vragen om specialistische toegang en de juiste techniek. Wij verzorgen deze reiniging veilig en met aandacht voor de omgeving eronder.",
  },
  {
    q: "Kunnen jullie een anti-graffiticoating aanbrengen?",
    a: "Ja. Na het reinigen brengen wij desgewenst een beschermende coating aan, zodat een eventuele volgende bekladding veel eenvoudiger en sneller te verwijderen is.",
  },
  {
    q: "Wat kost specialistische reiniging?",
    a: "Dat hangt sterk af van de situatie, de bereikbaarheid, het oppervlak en de aard van de vervuiling. Vraag een vrijblijvende offerte aan, dan komen wij langs voor een opname en rekenen wij een heldere prijs op maat voor u uit.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  serviceType: "Specialistische reiniging op hoogte en bijzondere oppervlakken",
  provider: {
    "@type": "LocalBusiness",
    name: contact.name,
    telephone: contact.phone,
    areaServed: "NL",
  },
  areaServed: "Nederland",
  description:
    "Complex reinigingswerk op hoogte en op bijzondere oppervlakken, van graffiti tot atriumglas, voor situaties waar standaard schoonmaak afhaakt.",
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
          lead="U heeft een reinigingsklus waar de meeste schoonmaakbedrijven van wegblijven. Een bekladde gevel, een glaskap die niemand bereikt of een bijzonder oppervlak dat geen schade mag oplopen. Wij zijn juist gespecialiseerd in dit complexe werk en pakken het veilig en vakkundig op, door heel Nederland."
        />

        {/* Wat wij doen */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              title="Het werk waar"
              accent="anderen afhaken"
              intro="Voor situaties die om extra kennis, techniek of bereik vragen, schakelt u één specialist in. Wij bepalen per oppervlak de juiste aanpak en voeren ook het meest complexe werk netjes en veilig uit."
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
              title="Uitstellen of beknibbelen"
              accent="kost u meer"
              intro="Specialistisch werk verdraagt geen halve maatregelen. Wie het laat liggen of door de verkeerde partij laat uitvoeren, betaalt later het dubbele."
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
          subtitle="Kies voor de specialist die complex werk vakkundig en veilig oplevert, met de juiste methode voor elk oppervlak. Wij denken met u mee en reageren binnen één werkdag op uw aanvraag."
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
