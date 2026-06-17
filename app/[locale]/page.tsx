import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { SegmentAccordion } from "@/components/sections/segment-accordion";
import { Metrics } from "@/components/sections/metrics";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServiceTicker } from "@/components/sections/service-ticker";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Proof } from "@/components/sections/proof";
import { Assurance } from "@/components/sections/assurance";
import { About } from "@/components/sections/about";
import Faq from "@/components/sections/faq";
import { OfferteForm } from "@/components/sections/offerte-form";
import { SiteFooter } from "@/components/sections/site-footer";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { contact } from "@/lib/site";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: contact.name,
  image: "https://www.jversseput.nl/og.jpg",
  url: "https://www.jversseput.nl",
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: contact.city,
    addressCountry: "NL",
  },
  areaServed: [
    "Den Haag",
    "Rotterdam",
    "Leiden",
    "Delft",
    "Amsterdam",
    "Utrecht",
    "Nederland",
  ],
  description:
    "J. Versseput is uw vertrouwde partner voor glas- en gevelonderhoud en specialistisch vastgoedonderhoud door heel Nederland.",
  identifier: { "@type": "PropertyValue", name: "KvK", value: contact.kvk },
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const faqItems = t.raw("faq.items") as { q: string; a: string }[];
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Clients />
        {/* Doelgroepen onder de logo's op mobiel; op desktop staan ze in de hero */}
        <section aria-label={t("segments.ariaLabel")} className="lg:hidden">
          <div className="container pb-2">
            <SegmentAccordion />
          </div>
        </section>
        <Metrics />
        <TrustBar />
        <ServiceTicker />
        <Services />
        <Process />
        <Projects />
        <Proof />
        <Assurance />
        <About />
        <Faq />
        <OfferteForm />
      </main>
      <SiteFooter />
    </>
  );
}
