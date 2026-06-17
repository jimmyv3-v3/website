/**
 * Engelse content-overlay voor de stadspagina's. Alleen de vertaalbare velden;
 * slug, name, province en image komen uit de Nederlandse bron (werkgebied.ts).
 * getCity(slug, "en") merge't deze velden over de basisdata heen.
 */

export type CityContent = {
  // Optionele Engelse weergavenaam (alleen nodig waar die afwijkt, bijv. Den Haag).
  name?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  lead: string;
  imageAlt: string;
  introBody: string[];
  faq: { q: string; a: string }[];
};

export const cityContentEn: Record<string, CityContent> = {
  amsterdam: {
    metaTitle: "Window cleaning Amsterdam",
    metaDescription:
      "Window, façade and property maintenance in Amsterdam. From monumental canal houses to the glass towers of the Zuidas, streak-free and safe at height. Request a no-obligation quote.",
    keywords: [
      "window cleaner Amsterdam",
      "façade cleaning Amsterdam",
      "property maintenance Amsterdam",
      "window cleaning Amsterdam",
      "window cleaner Zuidas",
    ],
    h1: "Window, façade and property maintenance in Amsterdam",
    lead: "In Amsterdam, monumental canal houses stand side by side with the glass towers of the Zuidas. We keep both presentable, with the care and craftsmanship of an established family business.",
    imageAlt: "Property in Amsterdam maintained by J. Versseput",
    introBody: [
      "From the office towers on the Zuidas and hotels in the centre to apartment complexes along the canals, Amsterdam property calls for a partner who can handle both high-rise and monumental façades. We work with our own equipment up to thirty-six metres and know the demands of working in a busy, cramped city centre.",
      "For property managers, owners' associations and offices in Amsterdam we handle the complete maintenance of the exterior, from window and façade cleaning to solar panels and periodic maintenance, at a fixed rhythm that suits the location.",
    ],
    faq: [
      {
        q: "Do you work throughout Amsterdam and the surrounding area?",
        a: "Yes. We operate throughout Amsterdam, from the Zuidas and the centre to the surrounding municipalities in Noord-Holland.",
      },
      {
        q: "Do you also do high-rise on the Zuidas?",
        a: "Certainly. With our aerial platforms and the telewash system we work safely at height, and where possible we use the building's own façade installation.",
      },
      {
        q: "Do you also clean monumental canal houses?",
        a: "Yes. We have experience with every façade material and choose the most careful and environmentally friendly method for each building, including delicate and monumental façades.",
      },
      {
        q: "How quickly can you start in Amsterdam?",
        a: "After your request we make contact within one business day and schedule a first visit at a time that suits you.",
      },
    ],
  },
  rotterdam: {
    metaTitle: "Window cleaning Rotterdam",
    metaDescription:
      "Window, façade and property maintenance in Rotterdam. We keep the city's modern office towers, high-rise and commercial buildings streak-free and presentable. Request a no-obligation quote.",
    keywords: [
      "window cleaner Rotterdam",
      "façade cleaning Rotterdam",
      "property maintenance Rotterdam",
      "window cleaning Rotterdam",
      "high-rise window cleaner Rotterdam",
    ],
    h1: "Window, façade and property maintenance in Rotterdam",
    lead: "Rotterdam has the most vertical skyline in the Netherlands. We keep the city's glass façades, from the Kop van Zuid to the office towers in the centre, streak-free all year round.",
    imageAlt: "Property in Rotterdam maintained by J. Versseput",
    introBody: [
      "Rotterdam's modern high-rise places high demands on window and façade maintenance. We work safely at height with our own equipment and make sure office towers, hotels and commercial buildings stay presentable, whatever the height or complexity.",
      "For property managers and owners' associations in Rotterdam we are one dedicated partner for the entire exterior, from window and façade cleaning to pressure washing of entrances and grounds.",
    ],
    faq: [
      {
        q: "Do you work throughout Rotterdam and the region?",
        a: "Yes. We operate throughout Rotterdam and the surrounding municipalities in the Rijnmond region.",
      },
      {
        q: "Can you handle the tall office towers?",
        a: "Certainly. With our aerial platforms we reach up to thirty-six metres, and for high-rise we use the building's own façade installation where possible.",
      },
      {
        q: "Do you also maintain business grounds and entrances?",
        a: "Yes. Besides glass and façades, we clean paving, grounds and entrances with high pressure, for a well-kept appearance.",
      },
      {
        q: "How quickly can you start in Rotterdam?",
        a: "After your request we make contact within one business day and schedule a first visit at a time that suits you.",
      },
    ],
  },
  "den-haag": {
    name: "The Hague",
    metaTitle: "Window cleaning The Hague",
    metaDescription:
      "Window, façade and property maintenance in The Hague, our home base. From the Beatrixkwartier to embassies and international institutions, kept presentable. Request a no-obligation quote.",
    keywords: [
      "window cleaner The Hague",
      "façade cleaning The Hague",
      "property maintenance The Hague",
      "window cleaning The Hague",
      "window cleaner government city",
    ],
    h1: "Window, façade and property maintenance in The Hague",
    lead: "The Hague is our home base. From the Beatrixkwartier to the embassies and international institutions, we know the city's property like no other and have kept it presentable for generations.",
    imageAlt: "Property in The Hague maintained by J. Versseput",
    introBody: [
      "As a family business from The Hague, we started here more than sixty years ago. You notice those roots in everything: short lines of communication, a permanent team and thorough knowledge of the local property, from office towers and high-rise to embassies and prestigious buildings where the appearance must be impeccable.",
      "For property managers, owners' associations, government and international organisations in The Hague we handle the entire exterior, from window and façade cleaning to solar panels, gutters and periodic maintenance.",
    ],
    faq: [
      {
        q: "Are you really a company from The Hague?",
        a: "Yes. J. Versseput started in the heart of The Hague more than sixty years ago and grew into a professional organisation. The Hague is and remains our home base.",
      },
      {
        q: "Do you work for government and embassies?",
        a: "Certainly. We work with screened, presentable and well-spoken staff, suited to government institutions, embassies and prestigious locations.",
      },
      {
        q: "Do you work throughout The Hague and the surrounding area?",
        a: "Yes. We operate throughout The Hague and the surrounding municipalities, from Scheveningen to the Westland.",
      },
      {
        q: "How quickly can you start?",
        a: "After your request we make contact within one business day and schedule a first visit at a time that suits you.",
      },
    ],
  },
  utrecht: {
    metaTitle: "Window cleaning Utrecht",
    metaDescription:
      "Window, façade and property maintenance in Utrecht. We keep offices around the Station area and buildings in the historic city centre presentable. Request a no-obligation quote.",
    keywords: [
      "window cleaner Utrecht",
      "façade cleaning Utrecht",
      "property maintenance Utrecht",
      "window cleaning Utrecht",
      "window cleaner Station area",
    ],
    h1: "Window, façade and property maintenance in Utrecht",
    lead: "Utrecht lies at the centre of the country and is growing fast around the redeveloped Station area. We keep the modern offices and the buildings in the historic city centre presentable all year round.",
    imageAlt: "Property in Utrecht maintained by J. Versseput",
    introBody: [
      "Around the Station area and the Jaarbeurs, more and more offices and mixed-use complexes are rising, while the historic city centre calls for a careful approach. We combine safe working at height with the precision that delicate and monumental façades require.",
      "For property managers, owners' associations and offices in Utrecht we are one dedicated partner for the entire exterior, from window and façade cleaning to solar panels and periodic maintenance.",
    ],
    faq: [
      {
        q: "Do you work throughout Utrecht and the surrounding area?",
        a: "Yes. We operate throughout Utrecht and the surrounding municipalities in the province of Utrecht.",
      },
      {
        q: "Do you also do the offices around the Station area?",
        a: "Certainly. We provide window and façade maintenance for offices and mixed-use complexes, including at height up to thirty-six metres.",
      },
      {
        q: "Can you also work in the historic city centre?",
        a: "Yes. We choose the most careful method for each building, including delicate and monumental façades in the city centre.",
      },
      {
        q: "How quickly can you start in Utrecht?",
        a: "After your request we make contact within one business day and schedule a first visit at a time that suits you.",
      },
    ],
  },
  eindhoven: {
    metaTitle: "Window cleaning Eindhoven",
    metaDescription:
      "Window, façade and property maintenance in Eindhoven. We keep the modern campuses and commercial buildings of Brainport streak-free and presentable. Request a no-obligation quote.",
    keywords: [
      "window cleaner Eindhoven",
      "façade cleaning Eindhoven",
      "property maintenance Eindhoven",
      "window cleaning Eindhoven",
      "window cleaner Brainport",
    ],
    h1: "Window, façade and property maintenance in Eindhoven",
    lead: "Eindhoven is the beating heart of Brainport, with modern campuses and commercial buildings full of glass. We keep them presentable and performing, with craftsmanship that has been passed down for generations.",
    imageAlt: "Property in Eindhoven maintained by J. Versseput",
    introBody: [
      "From the High Tech Campus and Strijp-S to the offices in the centre, Eindhoven has many modern, glass-rich buildings. They call for a partner who works safely at height and understands the image of an innovative environment.",
      "For property managers, owners' associations and businesses in Eindhoven we handle the complete exterior maintenance, from window and façade cleaning to solar panel cleaning for maximum yield.",
    ],
    faq: [
      {
        q: "Do you work throughout Eindhoven and the region?",
        a: "Yes. With our own team and equipment we operate in Eindhoven and the Brainport region.",
      },
      {
        q: "Do you also do campuses and commercial buildings?",
        a: "Certainly. We provide window and façade maintenance for campuses, offices and commercial buildings, including at height and on large glass surfaces.",
      },
      {
        q: "Do you also clean solar panels on commercial roofs?",
        a: "Yes. We clean solar panels with pure water for a higher yield, including on large roofs and at height.",
      },
      {
        q: "How quickly can you start in Eindhoven?",
        a: "After your request we make contact within one business day and schedule a first visit at a time that suits you.",
      },
    ],
  },
};
