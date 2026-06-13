import Link from "next/link";
import { ArrowRight, Building2, MapPin, ShieldCheck, Users } from "lucide-react";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { OfferteForm } from "@/components/sections/offerte-form";
import { ServiceHero } from "@/components/service/service-hero";
import {
  ServiceFeatureGrid,
  type ServiceFeature,
} from "@/components/service/service-feature-grid";
import { ServiceFaq } from "@/components/service/service-faq";
import { ServiceCta } from "@/components/service/service-cta";
import { SectionHeading } from "@/components/sections/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { contact, services } from "@/lib/site";
import { SITE_URL, type CityArea } from "@/lib/werkgebied";

function featuresFor(name: string): ServiceFeature[] {
  return [
    {
      icon: MapPin,
      title: "Lokaal aanwezig",
      body: `Met eigen team en materieel actief in ${name} en omgeving, en inzetbaar door heel Nederland.`,
    },
    {
      icon: ShieldCheck,
      title: "VCA-gecertificeerd",
      body: "Veilig werken op hoogte volgens de strengste richtlijnen, en volledig verzekerd.",
    },
    {
      icon: Users,
      title: "Vast, opgeleid team",
      body: "Representatief, Nederlands sprekend personeel dat uw object door en door kent.",
    },
    {
      icon: Building2,
      title: "Eén vaste partner",
      body: "Glas, gevel, zonnepanelen en periodiek onderhoud, alles onder één hand.",
    },
  ];
}

export function CityPage({ city }: { city: CityArea }) {
  const path = `/werkgebied/${city.slug}`;

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: contact.name,
    url: SITE_URL + path,
    telephone: contact.phone,
    email: contact.email,
    image: `${SITE_URL}/brand/jv-mark.png`,
    areaServed: { "@type": "City", name: city.name },
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.city,
      addressCountry: "NL",
    },
    description: city.metaDescription,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Werkgebied",
        item: `${SITE_URL}/werkgebied`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: SITE_URL + path,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <SiteHeader />
      <main>
        <ServiceHero
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Werkgebied", href: "/werkgebied" },
            { label: city.name },
          ]}
          title={city.h1}
          lead={city.lead}
          image={city.image}
          imageAlt={city.imageAlt}
        />

        {/* Lokale intro */}
        <section className="relative scroll-mt-24 py-16 sm:py-20">
          <div className="container max-w-3xl">
            <SectionHeading title="Uw vaste partner in" accent={city.name} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {city.introBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Diensten in deze stad */}
        <section className="relative scroll-mt-24 border-y border-border/60 bg-card/20 py-16 sm:py-20">
          <div className="container">
            <SectionHeading
              title={`Onze diensten in`}
              accent={city.name}
              intro="Eén partner voor alles aan de buitenzijde van uw vastgoed."
            />
            <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <RevealItem key={s.id} className="h-full">
                  <Link
                    href={`/diensten/${s.id}`}
                    className="group relative flex h-full flex-col rounded-lg border border-border/70 bg-card/40 p-6 transition-all duration-500 hover:border-titanium-mid/50 hover:bg-card/70"
                  >
                    <s.icon
                      className="h-6 w-6 text-titanium-mid"
                      strokeWidth={1.4}
                      aria-hidden
                    />
                    <h3 className="mt-4 font-display text-base font-medium text-foreground">
                      {s.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-titanium-bright">
                      Meer over deze dienst
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <ServiceFeatureGrid
          heading="Waarom J. Versseput in"
          accent={city.name}
          features={featuresFor(city.name)}
        />

        <ServiceFaq
          items={city.faq}
          heading={`Veelgestelde vragen over ${city.name}`}
        />

        <ServiceCta
          title={`Vastgoedonderhoud in ${city.name}?`}
          subtitle="Vraag vrijblijvend een offerte aan. Wij reageren binnen één werkdag en denken met u mee over de beste aanpak."
        />

        <div id="offerte" className="scroll-mt-24">
          <OfferteForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
