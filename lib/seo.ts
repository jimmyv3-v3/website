import type { Metadata } from "next";

/**
 * SEO datalaag. Per dienst- en stadspagina staan hier de slug, metatitel,
 * meta-description en keywords (door mij keyword-gedreven opgesteld). De
 * paginabodies worden afzonderlijk uitgeschreven; de metadata wordt centraal
 * vanuit dit bestand gezet via serviceMeta() en cityMeta().
 */

export const SITE_URL = "https://www.jversseput.nl";
export const SITE_NAME = "J. Versseput";

export type ServiceSeo = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  serviceType: string;
  intro: string;
};

export const servicePages: ServiceSeo[] = [
  {
    slug: "glasbewassing",
    name: "Glasbewassing",
    h1: "Glasbewassing voor zakelijk vastgoed",
    title: "Glasbewassing zakelijk",
    description:
      "Professionele glasbewassing voor kantoren, VvE's en hoogbouw. Streeploos resultaat met zuiver water, veilig tot zesendertig meter, door heel Nederland. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "glasbewassing",
      "glazenwasser zakelijk",
      "glasbewassing kantoor",
      "glasbewassing op hoogte",
      "glazenwasser VvE",
      "ramen laten wassen zakelijk",
      "streeploos osmosewater",
    ],
    serviceType: "Glasbewassing",
    intro:
      "Heldere ramen zijn het visitekaartje van uw pand. Wij verzorgen de glasbewassing van kantoren, complexen en hoogbouw, streeploos en veilig, van de begane grond tot de hoogste verdieping.",
  },
  {
    slug: "gevelreiniging",
    name: "Gevelreiniging",
    h1: "Gevelreiniging en gevelonderhoud",
    title: "Gevelreiniging en gevelonderhoud",
    description:
      "Professionele gevelreiniging voor alle materialen en vervuilingen. Wij verwijderen algen, mos en aanslag en houden uw gevel representatief, milieubewust en ook op hoogte. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "gevelreiniging",
      "gevel reinigen",
      "gevelonderhoud",
      "kosten gevelreiniging",
      "algen van gevel verwijderen",
      "gevelreiniging zakelijk",
    ],
    serviceType: "Gevelreiniging",
    intro:
      "De gevel bepaalt de eerste indruk van uw vastgoed. Wij reinigen alle gevelmaterialen vakkundig en milieubewust en adviseren over de meest duurzame aanpak om de waarde van uw pand te behouden.",
  },
  {
    slug: "zonnepanelenreiniging",
    name: "Zonnepanelenreiniging",
    h1: "Zonnepanelenreiniging voor maximaal rendement",
    title: "Zonnepanelen reinigen",
    description:
      "Laat uw zonnepanelen professioneel reinigen voor een hoger rendement. Wij reinigen panelen op kantoren, complexen en bedrijfsdaken, veilig en zonder krassen. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "zonnepanelen reinigen",
      "zonnepanelen laten reinigen",
      "zonnepanelenreiniging",
      "rendement zonnepanelen",
      "zonnepanelen schoonmaken",
    ],
    serviceType: "Zonnepanelenreiniging",
    intro:
      "Vuile panelen leveren minder op. Wij houden uw zonne-installatie helder en op rendement, met de juiste techniek en zonder uw panelen te beschadigen.",
  },
  {
    slug: "dakgootreiniging",
    name: "Dakgootreiniging",
    h1: "Dakgootreiniging die lekkage voorkomt",
    title: "Dakgoot reinigen",
    description:
      "Professionele dakgootreiniging voorkomt verstopping, lekkage en houtrot. Wij maken uw goten vrij en nemen dit graag mee in het periodiek onderhoud. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "dakgoot reinigen",
      "dakgoot schoonmaken",
      "wat kost dakgoot schoonmaken",
      "dakgoten laten reinigen",
      "dakgootreiniging",
    ],
    serviceType: "Dakgootreiniging",
    intro:
      "Volle dakgoten leiden tot lekkage en houtrot. Wij houden uw goten vrij en verzorgen dit waar gewenst in een vast ritme, zodat u er geen omkijken naar heeft.",
  },
  {
    slug: "hogedrukreiniging",
    name: "Hogedrukreiniging",
    h1: "Hogedrukreiniging van bestrating en terreinen",
    title: "Hogedrukreiniging bestrating",
    description:
      "Hogedrukreiniging van bestrating, terreinen, terrassen en entrees. Wij verwijderen vuil, groene aanslag en onkruid voor een verzorgde uitstraling. Vraag vrijblijvend een offerte aan.",
    keywords: [
      "hogedrukreiniging",
      "bestrating reinigen",
      "terras reinigen",
      "oprit reinigen",
      "bedrijfsterrein reinigen",
      "hogedrukreiniging zakelijk",
    ],
    serviceType: "Hogedrukreiniging",
    intro:
      "Een verzorgd terrein begint bij een schone bestrating. Wij reinigen bestrating, terreinen en entrees onder hoge druk, voor een representatieve eerste indruk.",
  },
  {
    slug: "schoonmaakonderhoud",
    name: "Schoonmaakonderhoud",
    h1: "Schoonmaakonderhoud voor zakelijk vastgoed",
    title: "Schoonmaakonderhoud",
    description:
      "Periodiek schoonmaakonderhoud, opleveringsschoonmaak en specialistische reiniging voor zakelijk vastgoed. Eén partner voor een pand dat het hele jaar representatief blijft. Vraag een offerte aan.",
    keywords: [
      "schoonmaakonderhoud",
      "periodiek onderhoud vastgoed",
      "opleveringsschoonmaak",
      "bouwschoonmaak",
      "schoonmaak algemene ruimtes",
      "schoonmaakbedrijf zakelijk",
    ],
    serviceType: "Schoonmaakonderhoud",
    intro:
      "Naast glas en gevel verzorgen wij het bredere schoonmaakonderhoud van uw vastgoed, van periodieke beurten en algemene ruimtes tot opleveringsschoonmaak na verbouwing.",
  },
];

export type CitySeo = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
};

const CITY_NAMES: { slug: string; name: string }[] = [
  { slug: "den-haag", name: "Den Haag" },
  { slug: "rotterdam", name: "Rotterdam" },
  { slug: "amsterdam", name: "Amsterdam" },
  { slug: "utrecht", name: "Utrecht" },
  { slug: "leiden", name: "Leiden" },
  { slug: "delft", name: "Delft" },
  { slug: "zoetermeer", name: "Zoetermeer" },
];

export const cityPages: CitySeo[] = CITY_NAMES.map(({ slug, name }) => ({
  slug,
  name,
  h1: `Glas-, gevel- en vastgoedonderhoud in ${name}`,
  title: `Glazenwasser ${name}`,
  description: `Glas-, gevel- en vastgoedonderhoud in ${name}. J. Versseput verzorgt glasbewassing, gevelreiniging, zonnepanelenreiniging en periodiek onderhoud voor zakelijk vastgoed in ${name} en omgeving. Vraag vrijblijvend een offerte aan.`,
  keywords: [
    `glazenwasser ${name}`,
    `gevelreiniging ${name}`,
    `vastgoedonderhoud ${name}`,
    `glasbewassing ${name}`,
    `schoonmaakbedrijf ${name}`,
  ],
  intro: `In ${name} houden wij zakelijk vastgoed het hele jaar door representatief. Van glasbewassing en gevelreiniging tot periodiek onderhoud, met eigen materieel en een vast, opgeleid team.`,
}));

function baseOpenGraph(path: string, title: string, description: string) {
  return {
    type: "website" as const,
    locale: "nl_NL",
    url: SITE_URL + path,
    siteName: SITE_NAME,
    title: `${title} · ${SITE_NAME}`,
    description,
  };
}

export function serviceMeta(slug: string): Metadata {
  const s = servicePages.find((x) => x.slug === slug);
  if (!s) return {};
  const path = `/diensten/${s.slug}`;
  return {
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: path },
    openGraph: baseOpenGraph(path, s.title, s.description),
    twitter: { card: "summary_large_image", title: `${s.title} · ${SITE_NAME}`, description: s.description },
  };
}

export function cityMeta(slug: string): Metadata {
  const c = cityPages.find((x) => x.slug === slug);
  if (!c) return {};
  const path = `/werkgebied/${c.slug}`;
  return {
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    alternates: { canonical: path },
    openGraph: baseOpenGraph(path, c.title, c.description),
    twitter: { card: "summary_large_image", title: `${c.title} · ${SITE_NAME}`, description: c.description },
  };
}
