import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://www.jversseput.nl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("titleDefault");
  const description = t("description");
  const homePath = locale === "en" ? "/en" : "/";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: t("titleTemplate"),
    },
    description,
    applicationName: "J. Versseput",
    publisher: "J. Versseput Vastgoedonderhoud B.V.",
    keywords: t.raw("keywords") as string[],
    alternates: {
      canonical: homePath,
      languages: {
        nl: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "nl_NL",
      url: SITE_URL + homePath,
      siteName: "J. Versseput",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c0f",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  const inLanguage = locale === "en" ? "en-NL" : "nl-NL";

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "J. Versseput Vastgoedonderhoud B.V.",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/jv-mark.png`,
    description: t("description"),
    areaServed: "NL",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31 6 83351985",
      contactType: "customer service",
      areaServed: "NL",
      availableLanguage: ["Dutch", "English"],
    },
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "J. Versseput",
    url: SITE_URL,
    inLanguage,
  };

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
