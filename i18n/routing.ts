import { defineRouting } from "next-intl/routing";

// Nederlands is de standaardtaal en krijgt geen URL-prefix (schone root-URL's).
// Engels leeft onder /en. Door "as-needed" blijven Nederlandse paden ongewijzigd
// en is alleen de Engelse variant herkenbaar aan de prefix.
export const routing = defineRouting({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  localePrefix: "as-needed",
  // Taaldetectie regelen we volledig zelf in middleware.ts (IP-geo + cookie),
  // zodat het IP-signaal voorrang heeft op de browser-taal.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
