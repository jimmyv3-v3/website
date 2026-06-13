import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
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
import { contact, faqs } from "@/lib/site";

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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
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
