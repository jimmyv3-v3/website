import type { Metadata } from "next";
import { cityContentEn } from "./werkgebied.en";

/**
 * Lokale SEO: landingspagina's per stad onder /werkgebied/[stad]. Elke stad
 * heeft eigen, unieke content (lead, lokale alinea's en FAQ) zodat het geen
 * dunne doorway-pagina's zijn. Metadata wordt centraal gezet via cityMeta().
 */

export const SITE_URL = "https://www.jversseput.nl";
export const SITE_NAME = "J. Versseput";

export type CityArea = {
  slug: string;
  name: string;
  province: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  introBody: string[];
  faq: { q: string; a: string }[];
};

export const cityAreas: CityArea[] = [
  {
    slug: "amsterdam",
    name: "Amsterdam",
    province: "Noord-Holland",
    metaTitle: "Glazenwasser Amsterdam",
    metaDescription:
      "Glas-, gevel- en vastgoedonderhoud in Amsterdam. Van monumentale grachtenpanden tot de glazen torens van de Zuidas, streeploos en veilig op hoogte. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "glazenwasser Amsterdam",
      "gevelreiniging Amsterdam",
      "vastgoedonderhoud Amsterdam",
      "glasbewassing Amsterdam",
      "glazenwasser Zuidas",
    ],
    h1: "Glas-, gevel- en vastgoedonderhoud in Amsterdam",
    lead: "In Amsterdam staan monumentale grachtenpanden en de glazen torens van de Zuidas naast elkaar. Wij houden beide representatief, met de zorg en het vakmanschap van een gevestigd familiebedrijf.",
    image: "/projects/gallery-2.jpg",
    imageAlt: "Vastgoed in Amsterdam onderhouden door J. Versseput",
    introBody: [
      "Van de kantoortorens op de Zuidas en hotels in het centrum tot appartementencomplexen langs de grachten, Amsterdams vastgoed vraagt om een partner die zowel hoogbouw als monumentale gevels aankan. Wij werken met eigen materieel tot zesendertig meter en kennen de eisen van werken in een drukke, krappe binnenstad.",
      "Voor vastgoedbeheerders, VvE's en kantoren in Amsterdam verzorgen wij het volledige onderhoud van de buitenzijde, van glasbewassing en gevelreiniging tot zonnepanelen en periodiek onderhoud, in een vast ritme dat past bij de locatie.",
    ],
    faq: [
      {
        q: "Werken jullie in heel Amsterdam en omgeving?",
        a: "Ja. Wij zijn actief in heel Amsterdam, van de Zuidas en het centrum tot de omliggende gemeenten in Noord-Holland.",
      },
      {
        q: "Doen jullie ook hoogbouw op de Zuidas?",
        a: "Zeker. Met onze hoogwerkers en het telewashsysteem werken wij veilig op hoogte, en waar mogelijk zetten wij de gevelinstallatie van het gebouw zelf in.",
      },
      {
        q: "Reinigen jullie ook monumentale grachtenpanden?",
        a: "Ja. Wij hebben ervaring met alle gevelmaterialen en kiezen per pand de meest zorgvuldige en milieuvriendelijke methode, ook bij kwetsbare en monumentale gevels.",
      },
      {
        q: "Hoe snel kunnen jullie in Amsterdam starten?",
        a: "Na uw aanvraag nemen wij binnen één werkdag contact op en plannen wij een eerste beurt op een moment dat u uitkomt.",
      },
    ],
  },
  {
    slug: "rotterdam",
    name: "Rotterdam",
    province: "Zuid-Holland",
    metaTitle: "Glazenwasser Rotterdam",
    metaDescription:
      "Glas-, gevel- en vastgoedonderhoud in Rotterdam. Wij houden de moderne kantoortorens, hoogbouw en bedrijfspanden van de stad streeploos en representatief. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "glazenwasser Rotterdam",
      "gevelreiniging Rotterdam",
      "vastgoedonderhoud Rotterdam",
      "glasbewassing Rotterdam",
      "glazenwasser hoogbouw Rotterdam",
    ],
    h1: "Glas-, gevel- en vastgoedonderhoud in Rotterdam",
    lead: "Rotterdam heeft de meest verticale skyline van Nederland. Wij houden de glasgevels van de stad, van de Kop van Zuid tot de kantoortorens in het centrum, het hele jaar door streeploos.",
    image: "/projects/gallery-13.jpg",
    imageAlt: "Vastgoed in Rotterdam onderhouden door J. Versseput",
    introBody: [
      "De moderne hoogbouw van Rotterdam stelt hoge eisen aan glas- en gevelonderhoud. Wij werken veilig op hoogte met eigen materieel en zorgen dat kantoortorens, hotels en bedrijfspanden er representatief bij blijven staan, ongeacht de hoogte of complexiteit.",
      "Voor vastgoedbeheerders en VvE's in Rotterdam zijn wij één vaste partner voor de volledige buitenzijde, van glasbewassing en gevelreiniging tot hogedrukreiniging van entrees en terreinen.",
    ],
    faq: [
      {
        q: "Werken jullie in heel Rotterdam en de regio?",
        a: "Ja. Wij zijn actief in heel Rotterdam en de omliggende gemeenten in de regio Rijnmond.",
      },
      {
        q: "Kunnen jullie de hoge kantoortorens aan?",
        a: "Zeker. Met onze hoogwerkers bereiken wij tot zesendertig meter en voor hoogbouw zetten wij waar mogelijk de gevelinstallatie van het gebouw in.",
      },
      {
        q: "Verzorgen jullie ook bedrijfsterreinen en entrees?",
        a: "Ja. Naast glas en gevel reinigen wij bestrating, terreinen en entrees onder hoge druk, voor een verzorgde uitstraling.",
      },
      {
        q: "Hoe snel kunnen jullie in Rotterdam starten?",
        a: "Na uw aanvraag nemen wij binnen één werkdag contact op en plannen wij een eerste beurt in op een moment dat u uitkomt.",
      },
    ],
  },
  {
    slug: "den-haag",
    name: "Den Haag",
    province: "Zuid-Holland",
    metaTitle: "Glazenwasser Den Haag",
    metaDescription:
      "Glas-, gevel- en vastgoedonderhoud in Den Haag, onze thuisbasis. Van het Beatrixkwartier tot ambassades en internationale instellingen, representatief onderhouden. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "glazenwasser Den Haag",
      "gevelreiniging Den Haag",
      "vastgoedonderhoud Den Haag",
      "glasbewassing Den Haag",
      "glazenwasser regeringsstad",
    ],
    h1: "Glas-, gevel- en vastgoedonderhoud in Den Haag",
    lead: "Den Haag is onze thuisbasis. Van het Beatrixkwartier tot de ambassades en internationale instellingen, wij kennen het Haagse vastgoed als geen ander en houden het al generaties representatief.",
    image: "/projects/gallery-7.jpg",
    imageAlt: "Vastgoed in Den Haag onderhouden door J. Versseput",
    introBody: [
      "Als Haags familiebedrijf zijn wij hier ruim zestig jaar geleden begonnen. Die wortels merkt u in alles: korte lijnen, een vast team en grondige kennis van het lokale vastgoed, van kantoortorens en hoogbouw tot ambassades en representatieve panden waar de uitstraling onberispelijk moet zijn.",
      "Voor vastgoedbeheerders, VvE's, overheid en internationale organisaties in Den Haag verzorgen wij de volledige buitenzijde, van glasbewassing en gevelreiniging tot zonnepanelen, dakgoten en periodiek onderhoud.",
    ],
    faq: [
      {
        q: "Zijn jullie echt een Haags bedrijf?",
        a: "Ja. J. Versseput is ruim zestig jaar geleden in de Haagse binnenstad begonnen en uitgegroeid tot een professionele organisatie. Den Haag is en blijft onze thuisbasis.",
      },
      {
        q: "Werken jullie voor overheid en ambassades?",
        a: "Zeker. Wij werken met gescreend, representatief en Nederlands sprekend personeel, passend bij overheidsinstellingen, ambassades en representatieve locaties.",
      },
      {
        q: "Werken jullie in heel Den Haag en omgeving?",
        a: "Ja. Wij zijn actief in heel Den Haag en de omliggende gemeenten, van Scheveningen tot het Westland.",
      },
      {
        q: "Hoe snel kunnen jullie starten?",
        a: "Na uw aanvraag nemen wij binnen één werkdag contact op en plannen wij een eerste beurt op een moment dat u uitkomt.",
      },
    ],
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    province: "Utrecht",
    metaTitle: "Glazenwasser Utrecht",
    metaDescription:
      "Glas-, gevel- en vastgoedonderhoud in Utrecht. Wij houden kantoren rond het Stationsgebied en panden in de historische binnenstad representatief. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "glazenwasser Utrecht",
      "gevelreiniging Utrecht",
      "vastgoedonderhoud Utrecht",
      "glasbewassing Utrecht",
      "glazenwasser Stationsgebied",
    ],
    h1: "Glas-, gevel- en vastgoedonderhoud in Utrecht",
    lead: "Utrecht ligt centraal in het land en groeit hard rond het vernieuwde Stationsgebied. Wij houden de moderne kantoren en de panden in de historische binnenstad het hele jaar door representatief.",
    image: "/projects/gallery-8.jpg",
    imageAlt: "Vastgoed in Utrecht onderhouden door J. Versseput",
    introBody: [
      "Rond het Stationsgebied en de Jaarbeurs verrijzen steeds meer kantoren en gemengde complexen, terwijl de historische binnenstad om een zorgvuldige aanpak vraagt. Wij combineren veilig werken op hoogte met de precisie die kwetsbare en monumentale gevels nodig hebben.",
      "Voor vastgoedbeheerders, VvE's en kantoren in Utrecht zijn wij één vaste partner voor de volledige buitenzijde, van glasbewassing en gevelreiniging tot zonnepanelen en periodiek onderhoud.",
    ],
    faq: [
      {
        q: "Werken jullie in heel Utrecht en omgeving?",
        a: "Ja. Wij zijn actief in heel Utrecht en de omliggende gemeenten in de provincie Utrecht.",
      },
      {
        q: "Doen jullie ook de kantoren rond het Stationsgebied?",
        a: "Zeker. Wij verzorgen glas- en gevelonderhoud voor kantoren en gemengde complexen, ook op hoogte tot zesendertig meter.",
      },
      {
        q: "Kunnen jullie ook in de historische binnenstad werken?",
        a: "Ja. Wij kiezen per pand de meest zorgvuldige methode, ook bij kwetsbare en monumentale gevels in de binnenstad.",
      },
      {
        q: "Hoe snel kunnen jullie in Utrecht starten?",
        a: "Na uw aanvraag nemen wij binnen één werkdag contact op en plannen wij een eerste beurt op een moment dat u uitkomt.",
      },
    ],
  },
  {
    slug: "eindhoven",
    name: "Eindhoven",
    province: "Noord-Brabant",
    metaTitle: "Glazenwasser Eindhoven",
    metaDescription:
      "Glas-, gevel- en vastgoedonderhoud in Eindhoven. Wij houden de moderne campussen en bedrijfspanden van Brainport streeploos en representatief. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "glazenwasser Eindhoven",
      "gevelreiniging Eindhoven",
      "vastgoedonderhoud Eindhoven",
      "glasbewassing Eindhoven",
      "glazenwasser Brainport",
    ],
    h1: "Glas-, gevel- en vastgoedonderhoud in Eindhoven",
    lead: "Eindhoven is het kloppende hart van Brainport, met moderne campussen en bedrijfspanden vol glas. Wij houden die representatief en op rendement, met vakmanschap dat al generaties wordt doorgegeven.",
    image: "/projects/gallery-9.jpg",
    imageAlt: "Vastgoed in Eindhoven onderhouden door J. Versseput",
    introBody: [
      "Van de High Tech Campus en Strijp-S tot de kantoren in het centrum kent Eindhoven veel moderne, glasrijke gebouwen. Die vragen om een partner die veilig op hoogte werkt en de uitstraling van een innovatieve omgeving begrijpt.",
      "Voor vastgoedbeheerders, VvE's en bedrijven in Eindhoven verzorgen wij het volledige buitenonderhoud, van glasbewassing en gevelreiniging tot zonnepanelenreiniging voor maximaal rendement.",
    ],
    faq: [
      {
        q: "Werken jullie in heel Eindhoven en de regio?",
        a: "Ja. Wij zijn met eigen team en materieel actief in Eindhoven en de Brainport-regio.",
      },
      {
        q: "Doen jullie ook campussen en bedrijfspanden?",
        a: "Zeker. Wij verzorgen glas- en gevelonderhoud voor campussen, kantoren en bedrijfspanden, ook op hoogte en bij grote glasoppervlakken.",
      },
      {
        q: "Reinigen jullie ook zonnepanelen op bedrijfsdaken?",
        a: "Ja. Wij reinigen zonnepanelen met zuiver water voor een hoger rendement, ook op grote daken en op hoogte.",
      },
      {
        q: "Hoe snel kunnen jullie in Eindhoven starten?",
        a: "Na uw aanvraag nemen wij binnen één werkdag contact op en plannen wij een eerste beurt op een moment dat u uitkomt.",
      },
    ],
  },
];

// De Engelse variant overlay't alleen de vertaalbare velden; slug, name,
// province en image blijven uit de Nederlandse bron.
export function getCity(
  slug: string,
  locale: string = "nl",
): CityArea | undefined {
  const base = cityAreas.find((c) => c.slug === slug);
  if (!base) return undefined;
  if (locale === "en" && cityContentEn[slug]) {
    return { ...base, ...cityContentEn[slug] };
  }
  return base;
}

export function cityMeta(slug: string, locale: string = "nl"): Metadata {
  const c = getCity(slug, locale);
  if (!c) return {};
  const path = `/werkgebied/${c.slug}`;
  const canonical = locale === "en" ? `/en${path}` : path;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "nl_NL",
      url: SITE_URL + canonical,
      siteName: SITE_NAME,
      title: `${c.metaTitle} · ${SITE_NAME}`,
      description: c.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.metaTitle} · ${SITE_NAME}`,
      description: c.metaDescription,
    },
  };
}
