import { ArrowRight, Building2, MapPin, ShieldCheck, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { OfferteForm } from "@/components/sections/offerte-form";
import { ServiceHero } from "@/components/service/service-hero";
import { ServiceFeatureGrid } from "@/components/service/service-feature-grid";
import { ServiceFaq } from "@/components/service/service-faq";
import { ServiceCta } from "@/components/service/service-cta";
import { SectionHeading } from "@/components/sections/section-heading";
import { Link } from "@/i18n/navigation";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { contact, services } from "@/lib/site";
import { SITE_URL, type CityArea } from "@/lib/werkgebied";

// Iconen blijven in code; de teksten komen uit messages onder
// werkgebied.city.features, met {city} ingevuld per stad.
const FEATURE_DEFS = [
  { key: "local", icon: MapPin },
  { key: "vca", icon: ShieldCheck },
  { key: "team", icon: Users },
  { key: "partner", icon: Building2 },
] as const;

export function CityPage({ city }: { city: CityArea }) {
  const t = useTranslations();
  const path = `/werkgebied/${city.slug}`;

  const features = FEATURE_DEFS.map((f) => ({
    icon: f.icon,
    title: t(`werkgebied.city.features.${f.key}.title`),
    body: t(`werkgebied.city.features.${f.key}.body`, { city: city.name }),
  }));

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
      {
        "@type": "ListItem",
        position: 1,
        name: t("common.nav.home"),
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("werkgebied.navLabel"),
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
            { label: t("common.nav.home"), href: "/" },
            { label: t("werkgebied.navLabel"), href: "/werkgebied" },
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
            <SectionHeading title={t("werkgebied.city.partnerIn")} accent={city.name} />
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
              title={t("werkgebied.city.servicesIn")}
              accent={city.name}
              intro={t("werkgebied.city.servicesIntro")}
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
                      {t(`services.${s.id}.title`)}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-titanium-bright">
                      {t("werkgebied.city.moreAbout")}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <ServiceFeatureGrid
          heading={t("werkgebied.city.whyIn")}
          accent={city.name}
          features={features}
        />

        <ServiceFaq
          items={city.faq}
          heading={t("werkgebied.city.faqHeading", { city: city.name })}
        />

        <ServiceCta
          title={t("werkgebied.city.ctaTitle", { city: city.name })}
          subtitle={t("werkgebied.city.ctaSubtitle")}
        />

        <div id="offerte" className="scroll-mt-24">
          <OfferteForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
