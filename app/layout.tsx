import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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

const SITE_DESCRIPTION =
  "J. Versseput is uw vertrouwde partner voor glas-, gevel- en vastgoedonderhoud. Wij houden zakelijk vastgoed door heel Nederland representatief en in waarde, met vakmanschap uit drie generaties.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Glas-, gevel- en vastgoedonderhoud · J. Versseput",
    template: "%s · J. Versseput",
  },
  description: SITE_DESCRIPTION,
  applicationName: "J. Versseput",
  publisher: "J. Versseput Vastgoedonderhoud B.V.",
  keywords: [
    "glasbewassing",
    "glazenwasser",
    "gevelreiniging",
    "gevelonderhoud",
    "vastgoedonderhoud",
    "zonnepanelen reinigen",
    "dakgoot reinigen",
    "hogedrukreiniging",
    "schoonmaakonderhoud",
    "glazenwasser Den Haag",
    "glasbewassing zakelijk",
    "glazenwasser VvE",
    "glasbewassing op hoogte",
  ],
  alternates: { canonical: "/" },
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
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "J. Versseput",
    title: "Glas-, gevel- en vastgoedonderhoud · J. Versseput",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Glas-, gevel- en vastgoedonderhoud · J. Versseput",
    description: SITE_DESCRIPTION,
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "J. Versseput Vastgoedonderhoud B.V.",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/jv-mark.png`,
  description: SITE_DESCRIPTION,
  areaServed: "NL",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+31 6 83351985",
    contactType: "customer service",
    areaServed: "NL",
    availableLanguage: "Dutch",
  },
};

const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "J. Versseput",
  url: SITE_URL,
  inLanguage: "nl-NL",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c0f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
