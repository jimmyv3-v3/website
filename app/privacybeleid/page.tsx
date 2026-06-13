import type { Metadata } from "next";
import { contact } from "@/lib/site";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

// TODO (juridisch): laat dit document vóór definitief gebruik controleren door een
// jurist en vul het vestigingsadres en btw-nummer aan zodra deze vaststaan.

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Lees hoe J. Versseput uw persoonsgegevens verwerkt en beschermt, in overeenstemming met de AVG.",
  alternates: { canonical: "/privacybeleid" },
};

const sections: LegalSection[] = [
  {
    heading: "Wie wij zijn",
    blocks: [
      "J. Versseput Vastgoedonderhoud B.V. is de verwerkingsverantwoordelijke voor de verwerking van uw persoonsgegevens. Onze gegevens zijn:",
      {
        list: [
          `${contact.name}, gevestigd te ${contact.city}.`,
          `Kamer van Koophandel: ${contact.kvk}.`,
          `E-mail: ${contact.email}.`,
          `Telefoon: ${contact.phone}.`,
        ],
      },
      "Wij hebben geen functionaris voor de gegevensbescherming aangesteld. Voor vragen over privacy kunt u contact met ons opnemen via bovenstaande gegevens.",
    ],
  },
  {
    heading: "Welke persoonsgegevens wij verwerken",
    blocks: [
      "Wij verwerken de persoonsgegevens die u aan ons verstrekt en die nodig zijn voor onze dienstverlening. Afhankelijk van de situatie gaat het om:",
      {
        list: [
          "voor- en achternaam en, bij zakelijke klanten, de bedrijfsnaam;",
          "het adres van het object, de postcode en de plaats;",
          "contactgegevens zoals telefoonnummer en e-mailadres;",
          "gegevens over de aangevraagde of uitgevoerde werkzaamheden;",
          "factuur- en betaalgegevens;",
          "foto's van het object ten behoeve van de offerte en de uitvoering, waarop in beginsel geen personen herkenbaar zijn;",
          "technische gegevens van uw bezoek aan onze website, zoals uw IP-adres en apparaatgegevens.",
        ],
      },
    ],
  },
  {
    heading: "Hoe wij uw gegevens verkrijgen",
    blocks: [
      "Wij ontvangen uw gegevens doordat u deze zelf aan ons verstrekt, bijvoorbeeld via het offerteformulier, per telefoon, per e-mail of via WhatsApp. Daarnaast worden bij een bezoek aan onze website automatisch enkele technische gegevens vastgelegd.",
    ],
  },
  {
    heading: "Doeleinden en grondslagen",
    blocks: [
      "Wij verwerken uw persoonsgegevens uitsluitend voor duidelijk omschreven doeleinden en op basis van een wettelijke grondslag:",
      {
        list: [
          "het opstellen van een offerte en het uitvoeren van de overeenkomst, op grond van de uitvoering van de overeenkomst;",
          "contact met u opnemen en u informeren over uw aanvraag of opdracht, op grond van de uitvoering van de overeenkomst of ons gerechtvaardigd belang;",
          "het voeren van onze administratie en facturatie, op grond van een wettelijke verplichting;",
          "het verbeteren van onze dienstverlening en website, op grond van ons gerechtvaardigd belang;",
          "het versturen van informatie of aanbiedingen, uitsluitend wanneer u daarvoor toestemming heeft gegeven.",
        ],
      },
    ],
  },
  {
    heading: "Bijzondere persoonsgegevens en minderjarigen",
    blocks: [
      "Wij verwerken geen bijzondere categorieën van persoonsgegevens. Onze website en dienstverlening zijn niet gericht op personen jonger dan zestien jaar. Meent u dat wij zonder de juiste toestemming gegevens van een minderjarige hebben verwerkt, neem dan contact met ons op, dan verwijderen wij deze.",
    ],
  },
  {
    heading: "Geautomatiseerde besluitvorming",
    blocks: [
      "Wij nemen geen besluiten op basis van geautomatiseerde verwerkingen die voor u gevolgen kunnen hebben.",
    ],
  },
  {
    heading: "Hoe lang wij uw gegevens bewaren",
    blocks: [
      "Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor zij zijn verzameld:",
      {
        list: [
          "offerteaanvragen die niet tot een opdracht leiden, bewaren wij maximaal twaalf maanden;",
          "klant- en contactgegevens bewaren wij gedurende de looptijd van de relatie en een redelijke periode daarna;",
          "factuur- en administratiegegevens bewaren wij zeven jaar, conform de wettelijke fiscale bewaarplicht.",
        ],
      },
    ],
  },
  {
    heading: "Delen met derden",
    blocks: [
      "Wij verstrekken uw gegevens uitsluitend aan derden wanneer dit nodig is voor de uitvoering van de overeenkomst of om te voldoen aan een wettelijke verplichting.",
      "Met partijen die in onze opdracht gegevens verwerken, zoals onze hosting-, e-mail- en boekhoudleveranciers, sluiten wij een verwerkersovereenkomst. Wij verkopen uw gegevens nooit aan derden.",
    ],
  },
  {
    heading: "Cookies en websitestatistieken",
    blocks: [
      "Onze website maakt gebruik van functionele cookies die nodig zijn om de site goed te laten werken, en van privacyvriendelijke statistieken via Vercel Analytics om het gebruik van de website te meten. Hierbij worden geen gegevens aan derden verkocht.",
      "U kunt cookies altijd weigeren of verwijderen via de instellingen van uw browser.",
    ],
  },
  {
    heading: "Doorgifte buiten de Europese Economische Ruimte",
    blocks: [
      "Wij verwerken uw gegevens in beginsel binnen de Europese Economische Ruimte. Wanneer gegevens toch daarbuiten worden verwerkt, zorgen wij voor passende waarborgen zoals de wet die voorschrijft.",
    ],
  },
  {
    heading: "Beveiliging",
    blocks: [
      "Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies en ongeoorloofd gebruik. Mocht er ondanks onze maatregelen sprake zijn van een datalek met een risico voor uw rechten, dan handelen wij conform de wettelijke meldplicht.",
    ],
  },
  {
    heading: "Uw rechten",
    blocks: [
      "U heeft op grond van de wet de volgende rechten met betrekking tot uw persoonsgegevens:",
      {
        list: [
          "het recht op inzage in de gegevens die wij van u verwerken;",
          "het recht op rectificatie van onjuiste gegevens;",
          "het recht op verwijdering van uw gegevens;",
          "het recht op beperking van de verwerking;",
          "het recht van bezwaar tegen de verwerking;",
          "het recht op overdraagbaarheid van uw gegevens;",
          "het recht om een gegeven toestemming weer in te trekken.",
        ],
      },
      `U kunt een verzoek indienen via ${contact.email}. Wij reageren binnen één maand. Ter controle kunnen wij u vragen zich te identificeren.`,
    ],
  },
  {
    heading: "Klacht bij de Autoriteit Persoonsgegevens",
    blocks: [
      "Bent u het niet eens met de manier waarop wij met uw gegevens omgaan, dan heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl.",
    ],
  },
  {
    heading: "Wijzigingen in dit privacybeleid",
    blocks: [
      "Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest recente versie vindt u altijd op onze website.",
    ],
  },
  {
    heading: "Contact",
    blocks: [
      `Heeft u vragen over dit privacybeleid of over de verwerking van uw gegevens, neem dan contact met ons op via ${contact.email} of ${contact.phone}.`,
    ],
  },
];

export default function PrivacybeleidPage() {
  return (
    <LegalPage
      title="Privacybeleid"
      intro={`${contact.name} hecht grote waarde aan de bescherming van uw persoonsgegevens. In dit privacybeleid leggen wij helder uit welke gegevens wij verwerken, met welk doel en welke rechten u heeft. Wij verwerken uw gegevens in overeenstemming met de Algemene Verordening Gegevensbescherming.`}
      updatedAt="13 juni 2026"
      sections={sections}
    />
  );
}
