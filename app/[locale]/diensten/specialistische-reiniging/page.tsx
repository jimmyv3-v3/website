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

const SLUG = "specialistische-reiniging";

// Iconen blijven in code; de tekst per taal staat in CONTENT en wordt per index
// gekoppeld.
const STAKE_ICONS = [AlertTriangle, Eye, TrendingDown];
const FEATURE_ICONS = [Microscope, ShieldCheck, Gem, UserCheck];

const CONTENT = {
  nl: {
    title: "Specialistische reiniging",
    metaDescription:
      "Complex reinigingswerk op hoogte en op bijzondere oppervlakken, van graffiti tot atriumglas. Voor situaties waar standaard schoonmaak afhaakt, door heel Nederland.",
    lead: "U heeft een reinigingsklus waar de meeste schoonmaakbedrijven van wegblijven. Een bekladde gevel, een glaskap die niemand bereikt of een bijzonder oppervlak dat geen schade mag oplopen. Wij zijn juist gespecialiseerd in dit complexe werk en pakken het veilig en vakkundig op, door heel Nederland.",
    whatTitle: "Het werk waar",
    whatAccent: "anderen afhaken",
    whatIntro:
      "Voor situaties die om extra kennis, techniek of bereik vragen, schakelt u één specialist in. Wij bepalen per oppervlak de juiste aanpak en voeren ook het meest complexe werk netjes en veilig uit.",
    included: [
      "Reiniging op grote hoogte en op moeilijk bereikbare plekken met hoogwerker, telewash en gevelinstallatie",
      "Verwijderen van graffiti, kauwgom, plakresten en ingebrande aanslag zonder de ondergrond te beschadigen",
      "Reiniging van bijzondere oppervlakken zoals atriumglas, glaskappen, natuursteen, beton en geanodiseerd metaal",
      "Vooraf een analyse van de ondergrond en de vervuiling, zodat wij de juiste methode en druk kiezen",
      "Aanbrengen van een beschermende anti-graffiticoating zodat een volgende keer eenvoudiger te reinigen is",
    ],
    urgencyTitle: "Uitstellen of beknibbelen",
    urgencyAccent: "kost u meer",
    urgencyIntro:
      "Specialistisch werk verdraagt geen halve maatregelen. Wie het laat liggen of door de verkeerde partij laat uitvoeren, betaalt later het dubbele.",
    stakes: [
      {
        title: "Verkeerde aanpak beschadigt blijvend",
        body: "Een aannemer die met te hoge druk of het verkeerde middel aan de slag gaat, schiet de coating of toplaag stuk en laat strepen achter die nooit meer weggaan. Wat een reinigingsbeurt had moeten zijn, wordt dan een dure renovatie van het hele oppervlak.",
      },
      {
        title: "Graffiti trekt graffiti aan",
        body: "Een beklad of bevuild pand straalt verwaarlozing uit en nodigt uit tot meer overlast. Hoe langer u wacht, hoe dieper de verf in de ondergrond trekt en hoe lastiger het wordt om uw gevel weer representatief te krijgen.",
      },
      {
        title: "Onbereikbaar vuil tast uw pand aan",
        body: "Juist de plekken die niemand kan bereiken, zoals glaskappen, atria en hoge gevelpartijen, laten vervuiling zich inbranden. Dat ondermijnt op termijn de uitstraling, de daglichttoetreding en de waarde van uw vastgoed.",
      },
    ],
    ctaTitle: "Ga voor de beste kwaliteit",
    ctaSubtitle:
      "Kies voor de specialist die complex werk vakkundig en veilig oplevert, met de juiste methode voor elk oppervlak. Wij denken met u mee en reageren binnen één werkdag op uw aanvraag.",
    featureHeading: "Waarom kiezen voor",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Eerst analyse, dan reiniging",
        body: "Wij bepalen vooraf de hardheid van de ondergrond en de aard van de vervuiling, zodat wij altijd de juiste methode en druk kiezen.",
      },
      {
        title: "Veilig en verzekerd op hoogte",
        body: "Als VCA-gecertificeerd bedrijf werken wij volgens de strengste richtlijnen en zijn wij volledig verzekerd, ook voor complex werk op grote hoogte.",
      },
      {
        title: "Specialisten waar anderen afhaken",
        body: "Bijzondere oppervlakken en moeilijk bereikbare situaties zijn precies het werk waar wij met decennia ervaring in gespecialiseerd zijn.",
      },
      {
        title: "Vast aanspreekpunt",
        body: "U krijgt één contactpersoon die uw object kent en met u meedenkt over de beste aanpak, van eerste opname tot oplevering.",
      },
    ],
    faqs: [
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
    ],
    jsonLdServiceType:
      "Specialistische reiniging op hoogte en bijzondere oppervlakken",
  },
  en: {
    title: "Specialist cleaning",
    metaDescription:
      "Complex cleaning work at height and on specialist surfaces, from graffiti to atrium glass. For situations where standard cleaning gives up, throughout the Netherlands.",
    lead: "You have a cleaning job that most cleaning companies steer clear of. A graffitied façade, a glass roof that no one can reach or an unusual surface that must not be damaged. We specialise in exactly this complex work and take it on safely and expertly, throughout the Netherlands.",
    whatTitle: "The work where",
    whatAccent: "others give up",
    whatIntro:
      "For situations that call for extra knowledge, technique or reach, you bring in a single specialist. We determine the right approach for each surface and carry out even the most complex work neatly and safely.",
    included: [
      "Cleaning at great height and in hard to reach places with an aerial platform, telewash and façade installation",
      "Removal of graffiti, chewing gum, adhesive residue and burnt-in soiling without damaging the surface",
      "Cleaning of specialist surfaces such as atrium glass, glass roofs, natural stone, concrete and anodised metal",
      "An analysis of the surface and the soiling in advance, so that we choose the right method and pressure",
      "Application of a protective anti-graffiti coating so that cleaning is easier the next time",
    ],
    urgencyTitle: "Putting it off or cutting corners",
    urgencyAccent: "costs you more",
    urgencyIntro:
      "Specialist work tolerates no half measures. Anyone who leaves it untreated or has it carried out by the wrong party pays double later on.",
    stakes: [
      {
        title: "The wrong approach causes permanent damage",
        body: "A contractor who works with too much pressure or the wrong product ruins the coating or top layer and leaves behind streaks that never come out. What should have been a cleaning visit then becomes an expensive renovation of the entire surface.",
      },
      {
        title: "Graffiti attracts graffiti",
        body: "A graffitied or dirty building radiates neglect and invites further nuisance. The longer you wait, the deeper the paint soaks into the surface and the harder it becomes to make your façade presentable again.",
      },
      {
        title: "Unreachable dirt damages your building",
        body: "It is precisely the places that no one can reach, such as glass roofs, atriums and high façade sections, where soiling burns itself in. Over time that undermines the appearance, the daylight intake and the value of your property.",
      },
    ],
    ctaTitle: "Go for the best quality",
    ctaSubtitle:
      "Choose the specialist who delivers complex work expertly and safely, with the right method for every surface. We think along with you and respond to your request within one business day.",
    featureHeading: "Why choose",
    featureAccent: "J. Versseput",
    features: [
      {
        title: "Analysis first, then cleaning",
        body: "We determine the hardness of the surface and the nature of the soiling in advance, so that we always choose the right method and pressure.",
      },
      {
        title: "Safe and insured at height",
        body: "As a VCA certified company we work to the strictest guidelines and are fully insured, including for complex work at great height.",
      },
      {
        title: "Specialists where others give up",
        body: "Unusual surfaces and hard to reach situations are exactly the work we have specialised in over decades of experience.",
      },
      {
        title: "A single point of contact",
        body: "You get one contact person who knows your property and thinks along with you about the best approach, from first survey to completion.",
      },
    ],
    faqs: [
      {
        q: "What all falls under specialist cleaning?",
        a: "Everything that lies outside ordinary window cleaning and façade cleaning and calls for extra knowledge or technique. Think of cleaning at great height, the removal of graffiti and adhesive residue, and the cleaning of specialist surfaces such as atrium glass, glass roofs, natural stone and metal.",
      },
      {
        q: "Can you remove graffiti without damaging the façade?",
        a: "Yes. We first analyse the surface and the type of paint and choose the right method accordingly, from a special cleaning agent to steam or appropriate high pressure. That way we remove the graffiti without damaging the coating or top layer.",
      },
      {
        q: "How do you reach hard to reach places?",
        a: "We have aerial platforms up to thirty-six metres, the telewash system up to fifteen metres and where possible we use the building's own façade installation. With these we reach atriums, glass roofs and high façade sections that are unreachable for others.",
      },
      {
        q: "Do you also clean interior surfaces such as atrium glass and glass roofs?",
        a: "Certainly. High interior spaces such as atriums, voids and glass roofs in particular call for specialist access and the right technique. We carry out this cleaning safely and with care for the surroundings below.",
      },
      {
        q: "Can you apply an anti-graffiti coating?",
        a: "Yes. After cleaning we apply a protective coating on request, so that any future graffiti is much easier and quicker to remove.",
      },
      {
        q: "What does specialist cleaning cost?",
        a: "That depends heavily on the situation, the accessibility, the surface and the nature of the soiling. Request a no-obligation quote and we will come by for a survey and calculate a clear, tailored price for you.",
      },
    ],
    jsonLdServiceType:
      "Specialist cleaning at height and on specialist surfaces",
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
