import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Droplets,
  ShieldCheck,
  Gem,
  Sparkles,
  MountainSnow,
  ClipboardCheck,
  CalendarRange,
  HardHat,
  FileCheck2,
  Sun,
  Waves,
  Hammer,
  CalendarClock,
  KeyRound,
  Briefcase,
  HeartPulse,
  Landmark,
  Store,
  Users,
  Leaf,
  ArrowUpToLine,
  Home,
} from "lucide-react";

/**
 * Central content model for the J. Versseput site.
 * Copy follows the repo rules: flowing Dutch sentences, no clause-joining
 * dashes, no fragments, u-vorm. Placeholders that need real data are marked
 * with TODO so they can be verified before launch.
 */

export const contact = {
  name: "J. Versseput Vastgoedonderhoud B.V.",
  shortName: "J. Versseput",
  phone: "+31 6 83351985",
  phoneHref: "tel:+31683351985",
  whatsapp: "+31 6 83351985",
  whatsappHref:
    "https://wa.me/31683351985?text=" +
    encodeURIComponent(
      "Hallo J. Versseput, ik wil graag een vrijblijvende offerte aanvragen voor ",
    ),
  email: "info@jversseput.nl",
  emailHref: "mailto:info@jversseput.nl",
  kvk: "80772226",
  // TODO: btw-nummer verifiëren bij KvK en toevoegen aan de footer.
  btw: undefined as string | undefined,
  city: "Den Haag",
  region: "de Randstad en heel Nederland",
  responsePromise: "Reactie binnen één werkdag",
} as const;

// Anchors are prefixed with "/" so the navigation also works from sub-pages
// (e.g. /privacybeleid): it routes home and then scrolls to the section.
// `key` verwijst naar messages/<locale>.json onder "common.nav"; `label` blijft
// als Nederlandse fallback staan.
export const nav = [
  { key: "services", label: "Diensten", href: "/#diensten" },
  { key: "method", label: "Werkwijze", href: "/#werkwijze" },
  { key: "projects", label: "Projecten", href: "/#projecten" },
  { key: "about", label: "Over ons", href: "/#over-ons" },
  { key: "contact", label: "Contact", href: "/#contact" },
] as const;

/** The four brand values from the wrap, as a trust strip. */
export const values = [
  "Betrouwbaar",
  "Vakmanschap",
  "Kwaliteit",
  "Duurzaam",
] as const;

/** Short service labels for the vertical ServiceTicker (reads after "voor al uw …"). */
export const serviceTicker = [
  "glasbewassing",
  "gevelreiniging",
  "zonnepanelenreiniging",
  "dakgootreiniging",
  "hogedrukreiniging",
  "glasbewassing op hoogte",
  "opleveringsschoonmaak",
  "bouwschoonmaak",
  "specialistische reiniging",
  "schoonmaakonderhoud",
] as const;

/**
 * Impressive but defensible metrics for the count-up band.
 * `value` is numeric so it can animate; format with prefix/suffix.
 * TODO: voeg desgewenst "250+ objecten in onderhoud" toe zodra dit cijfer
 * door het bedrijf is bevestigd.
 */
export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: 60, suffix: "+", label: "jaar ervaring" },
  { value: 475, suffix: "+", label: "objecten in beheer" },
  { value: 12, label: "provincies inzetbaar" },
];

export type Usp = { icon: LucideIcon; title: string; body: string };

export const usps: Usp[] = [
  {
    icon: Gem,
    title: "Vakmanschap in elk detail",
    body: "Een resultaat dat van de eerste tot de laatste beurt gelijk blijft, op elk gebouw dat wij onder handen nemen.",
  },
  {
    icon: ShieldCheck,
    title: "Betrouwbaar en transparant",
    body: "U krijgt een vast aanspreekpunt, een heldere planning en een eerlijke afspraak zonder verrassingen.",
  },
  {
    icon: Building2,
    title: "Kwaliteit die gebouwen behoudt",
    body: "Wij houden uw vastgoed representatief en beschermen de waarde van het pand op de lange termijn.",
  },
  {
    icon: MountainSnow,
    title: "Inzetbaar door heel Nederland",
    body: "Onze ploegen en vloot werken bij grote, aansprekende objecten in de hele Randstad en daarbuiten.",
  },
];

/**
 * Full service catalogue. The Services bento features the first entry large
 * and lays the rest out as tiles, so the full breadth is visible at a glance.
 */
export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "glas-en-gevelonderhoud",
    icon: Sparkles,
    title: "Glas- en gevelonderhoud",
    summary:
      "Het zichtbare visitekaartje van uw pand, vakkundig schoongehouden van de begane grond tot de hoogbouw. Glas binnen en buiten, kozijnen en lijstwerk standaard inbegrepen.",
    featured: true,
  },
  {
    id: "gevelreiniging",
    icon: Building2,
    title: "Gevelreiniging",
    summary:
      "Ervaring met alle gevelmaterialen en vervuilingen, met advies over de meest duurzame methode.",
  },
  {
    id: "zonnepanelenreiniging",
    icon: Sun,
    title: "Zonnepanelenreiniging",
    summary:
      "Schone panelen leveren meer op. Wij houden uw installatie helder en op rendement.",
  },
  {
    id: "dakgootreiniging",
    icon: Droplets,
    title: "Dakgootreiniging",
    summary:
      "Vrije goten voorkomen lekkage en houtrot, in één beurt meegenomen tijdens het onderhoud.",
  },
  {
    id: "hogedrukreiniging",
    icon: Waves,
    title: "Hogedrukreiniging",
    summary:
      "Bestrating, terreinen en entrees weer fris, voor een verzorgde eerste indruk.",
  },
  {
    id: "opleveringsschoonmaak",
    icon: Hammer,
    title: "Oplevering- en bouwschoonmaak",
    summary:
      "Een nieuw of verbouwd pand bezemschoon tot showroomklaar opgeleverd.",
  },
  {
    id: "specialistische-reiniging",
    icon: Gem,
    title: "Specialistische reiniging",
    summary:
      "Complex werk op hoogte en bijzondere oppervlakken waar anderen afhaken.",
  },
  {
    id: "periodiek-onderhoud",
    icon: CalendarClock,
    title: "Periodiek schoonmaakonderhoud",
    summary:
      "Een vast ritme zodat uw pand het hele jaar door representatief blijft, zonder omkijken.",
  },
];

/**
 * Grouped pillars (kept for reference / alternative layouts). The live
 * Services section now uses `services` above.
 */
export type Pillar = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  items: string[];
};

export const pillars: Pillar[] = [
  {
    id: "glas-en-gevelonderhoud",
    icon: Sparkles,
    title: "Glas- en gevelonderhoud",
    summary:
      "Het zichtbare visitekaartje van uw pand, vakkundig schoongehouden van begane grond tot hoogbouw.",
    items: [
      "Glasbewassing binnen en buiten",
      "Gevelreiniging voor alle materialen en vervuilingen",
      "Kozijnen en lijstwerk standaard meegenomen",
    ],
  },
  {
    id: "exterieurzorg",
    icon: Droplets,
    title: "Exterieurzorg",
    summary:
      "De bredere buitenkant van uw vastgoed, onderhouden in een vast ritme zodat het pand altijd verzorgd oogt.",
    items: [
      "Zonnepaneelreiniging voor hoger rendement",
      "Periodiek onderhoud op een vast interval",
      "Advies over de meest milieuvriendelijke methode",
    ],
  },
  {
    id: "specialistische-service",
    icon: MountainSnow,
    title: "Specialistische service",
    summary:
      "Het werk op hoogte en de complexe klussen waar anderen afhaken, veilig en volgens de richtlijnen uitgevoerd.",
    items: [
      "Hoogwerker tot een bereik van 36 meter",
      "Telewash systeem tot 15 meter voor krappe locaties",
      "Specialistische toegang voor complexe gevels",
    ],
  },
];

/**
 * Hero image accordion — doelgroepen met echte fotografie, groot naar klein.
 * Photos live in /public/segments.
 */
export type Segment = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  icon: LucideIcon;
  /** CSS object-position for the photo crop (default "center"). */
  focus?: string;
};

export const segments: Segment[] = [
  {
    id: "commercieel",
    title: "Hoogbouw & commercieel",
    blurb: "Kantoren, hotels, retail en hoogbouw.",
    image: "/segments/hoogbouw.jpg",
    icon: Building2,
    focus: "0% center",
  },
  {
    id: "vve",
    title: "VvE's & vastgoedbeheer",
    blurb: "Appartementencomplexen en beheerportefeuilles.",
    image: "/segments/vve-new.avif",
    icon: KeyRound,
  },
  {
    id: "overheid",
    title: "Overheid & instituten",
    blurb: "Overheid, ambassades en representatieve locaties.",
    image: "/segments/overheid-2.avif",
    icon: Landmark,
  },
  {
    id: "particulier",
    title: "Particulier & villa's",
    blurb: "Privéwoningen en vrijstaande villa's.",
    image: "/segments/villas.jpg",
    icon: Home,
  },
];

/** Work-height ladder and technique, for the Capabilities/Materieel section. */
export type ReachLevel = {
  height: string;
  method: string;
  body: string;
  icon: LucideIcon;
};

export const reachLevels: ReachLevel[] = [
  {
    height: "7 m",
    method: "Traditioneel",
    body: "Ladder en vakmanschap voor glas, kozijnen en de begane grond.",
    icon: Sparkles,
  },
  {
    height: "15 m",
    method: "Telewash-systeem",
    body: "Zuiver water tot vijftien meter, ook op krappe locaties en alle ondergronden.",
    icon: Droplets,
  },
  {
    height: "36 m",
    method: "Hoogwerker",
    body: "Eigen hoogwerkers en gevelinstallaties voor hoogbouw tot zesendertig meter.",
    icon: ArrowUpToLine,
  },
];

/** Quality and safety assurances. Claims are kept verifiable. */
export type Assurance = { icon: LucideIcon; title: string; body: string };

export const assurances: Assurance[] = [
  {
    icon: ShieldCheck,
    title: "Professioneel verzekerd",
    body: "Mocht er onverhoopt iets gebeuren, dan is het werk volledig verzekerd en handelen wij netjes af.",
  },
  {
    icon: HardHat,
    title: "Veilig werken op hoogte",
    body: "Als VCA-gecertificeerd bedrijf werken wij volgens de strengste veiligheidsrichtlijnen, met een risico-inventarisatie per object.",
  },
  {
    icon: Users,
    title: "Opgeleid en vast team",
    body: "Representatief, Nederlands sprekend personeel dat uw object door en door kent.",
  },
  {
    icon: Leaf,
    title: "Milieubewust",
    body: "Zuiver water en de meest milieuvriendelijke methode, afgestemd op elke ondergrond.",
  },
];

// TODO: voeg officiële keurmerk-/certificeringslogo's (zoals VCA) toe zodra
// deze formeel zijn behaald, voor een "Kwaliteit zwart-op-wit"-logostrip.

export type Step = { n: string; icon: LucideIcon; title: string; body: string };

export const steps: Step[] = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Intake en advies",
    body: "Wij bekijken uw pand en bepalen samen de beste en meest duurzame aanpak voor elke gevel.",
  },
  {
    n: "02",
    icon: CalendarRange,
    title: "Plan op maat",
    body: "U ontvangt een heldere planning met een vast interval en een vast aanspreekpunt voor uw object.",
  },
  {
    n: "03",
    icon: HardHat,
    title: "Vakkundige uitvoering",
    body: "Ons team werkt representatief en veilig op hoogte met de juiste techniek voor elke situatie.",
  },
  {
    n: "04",
    icon: FileCheck2,
    title: "Rapportage en nazorg",
    body: "Na elke beurt weet u precies wat er is gedaan, zodat de kwaliteit aantoonbaar gewaarborgd blijft.",
  },
];

export type Client = { name: string; src: string };

/** Prestige opdrachtgevers — rendered monochrome titanium in the ticker. */
export const clients: Client[] = [
  { name: "ABN AMRO", src: "/clients/abn-ambro.png" },
  { name: "Koninklijke BAM Groep", src: "/clients/bam-logo.webp" },
  { name: "Amsterdam Airport Schiphol", src: "/clients/schiphol.png" },
  { name: "New Babylon Den Haag", src: "/clients/new-babylon.png" },
  { name: "MVGM Vastgoedbeheer", src: "/clients/mvgm-beheer.png" },
  { name: "Louwman", src: "/clients/louwman.png" },
];

/**
 * Project portfolio. The building is the hero. Images are placeholders for now;
 * the Projects gallery renders an elegant fallback when `src` is undefined.
 * TODO: vervang door echte, hoogwaardige projectfoto's.
 */
export type Project = {
  name: string;
  city: string;
  type: string;
  src?: string;
};

export const projects: Project[] = [
  { name: "Babylon Tower", city: "Den Haag", type: "Hoogbouw · glas en gevel" },
  { name: "New Babylon", city: "Den Haag", type: "Mixed-use complex" },
  { name: "Kantoorportefeuille", city: "Randstad", type: "Multi-tenant onderhoud" },
  { name: "Retail en etalages", city: "Den Haag", type: "Periodiek onderhoud" },
  { name: "Bedrijfsterreinen", city: "Zuid-Holland", type: "Hogedruk en gevel" },
];

export const proof = {
  quote:
    "Versseput verzorgt al jaren de glasbewassing en het gevelonderhoud bij ons en doet dat keer op keer onberispelijk.",
  author: "Babylon Tower",
  role: "Den Haag, meerjarige opdrachtgever",
};

/** Kept for backwards compatibility; the live metrics live in `metrics`. */
export const stats = [
  { value: "3", label: "generaties vakmanschap" },
  { value: "36 m", label: "bereik op hoogte" },
  { value: "NL", label: "landelijk inzetbaar" },
];

/** FAQ — also emitted as FAQPage JSON-LD for SEO and AI answers. */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "In welke regio's is J. Versseput actief?",
    a: "Onze thuisbasis is Den Haag. Met eigen materieel en team zijn wij door heel Nederland inzetbaar, met de nadruk op de Randstad.",
  },
  {
    q: "Werken jullie voor zakelijke én particuliere opdrachtgevers?",
    a: "Ja. Onze focus ligt op zakelijk vastgoed zoals beheerders, VvE's, kantoren en overheid, maar ook particuliere opdrachtgevers in het hogere segment kunnen bij ons terecht.",
  },
  {
    q: "Tot welke hoogte kunnen jullie werken?",
    a: "Met onze hoogwerkers bereiken wij tot zesendertig meter en met het telewash-systeem tot vijftien meter. Voor hoogbouw zetten wij waar mogelijk de gevelinstallatie van het gebouw in.",
  },
  {
    q: "Hoe vaak wordt het onderhoud uitgevoerd?",
    a: "Wij werken het liefst in een vast interval dat past bij uw pand en omgeving, zodat het er het hele jaar door verzorgd uitziet. Eenmalig werk is uiteraard ook mogelijk.",
  },
  {
    q: "Zijn jullie verzekerd en werken jullie veilig?",
    a: "Ja. Wij zijn VCA-gecertificeerd en professioneel verzekerd, en werken volgens de strengste veiligheidsrichtlijnen met een risico-inventarisatie per object.",
  },
  {
    q: "Hoe snel krijg ik antwoord op mijn aanvraag?",
    a: "Wij reageren binnen één werkdag op uw offerteaanvraag en denken graag met u mee over de beste aanpak.",
  },
];
