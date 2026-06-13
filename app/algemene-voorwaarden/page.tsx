import type { Metadata } from "next";
import { contact } from "@/lib/site";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

// TODO (juridisch): laat dit document vóór definitief gebruik controleren door een
// jurist en vul het vestigingsadres en btw-nummer aan zodra deze vaststaan.

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "De algemene voorwaarden van J. Versseput Vastgoedonderhoud B.V. voor glas-, gevel- en vastgoedonderhoud.",
  alternates: { canonical: "/algemene-voorwaarden" },
};

const sections: LegalSection[] = [
  {
    heading: "Definities",
    blocks: [
      "In deze algemene voorwaarden wordt verstaan onder:",
      {
        list: [
          `Opdrachtnemer: ${contact.name}, gevestigd te ${contact.city} en ingeschreven bij de Kamer van Koophandel onder nummer ${contact.kvk}.`,
          "Opdrachtgever: de natuurlijke persoon of rechtspersoon die met opdrachtnemer een overeenkomst aangaat of daartoe een offerte ontvangt.",
          "Overeenkomst: iedere afspraak tussen opdrachtnemer en opdrachtgever tot het verrichten van werkzaamheden, waaronder eenmalige opdrachten en periodieke onderhoudsovereenkomsten.",
          "Werkzaamheden: alle door opdrachtnemer te verrichten diensten op het gebied van glas-, gevel- en vastgoedonderhoud, waaronder glasbewassing, gevelreiniging, zonnepanelenreiniging, dakgootreiniging, hogedrukreiniging en schoonmaakonderhoud.",
          "Object: het pand, terrein of de installatie waarop de werkzaamheden worden uitgevoerd.",
          "Schriftelijk: per brief of per e-mail.",
        ],
      },
    ],
  },
  {
    heading: "Toepasselijkheid",
    blocks: [
      "Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, opdrachten en overeenkomsten waarbij opdrachtnemer werkzaamheden verricht, en op alle daaruit voortvloeiende rechtsverhoudingen.",
      "Afwijkingen van deze voorwaarden gelden uitsluitend wanneer deze schriftelijk door opdrachtnemer zijn bevestigd.",
      "De toepasselijkheid van eventuele inkoop- of andere voorwaarden van de opdrachtgever wordt uitdrukkelijk van de hand gewezen.",
      "Wanneer een of meer bepalingen geheel of gedeeltelijk nietig zijn of vernietigd worden, blijven de overige bepalingen volledig van kracht en treden partijen in overleg over een vervangende bepaling die de strekking van de oorspronkelijke zo dicht mogelijk benadert.",
    ],
  },
  {
    heading: "Offertes en aanbiedingen",
    blocks: [
      "Alle offertes en aanbiedingen zijn vrijblijvend en geldig gedurende dertig dagen na dagtekening, tenzij anders vermeld.",
      "Offertes zijn gebaseerd op de door de opdrachtgever verstrekte gegevens en op een eventuele opname van het object. Blijken deze gegevens onjuist of onvolledig, dan heeft opdrachtnemer het recht de prijs aan te passen.",
      "Voor zakelijke opdrachtgevers worden prijzen vermeld exclusief btw, voor consumenten inclusief btw, tenzij anders aangegeven.",
      "Kennelijke vergissingen of verschrijvingen in een offerte binden opdrachtnemer niet.",
    ],
  },
  {
    heading: "Totstandkoming van de overeenkomst",
    blocks: [
      "De overeenkomst komt tot stand op het moment dat de opdrachtgever een offerte schriftelijk aanvaardt, dan wel op het moment dat opdrachtnemer met instemming van de opdrachtgever met de werkzaamheden aanvangt.",
      "Voor zakelijke opdrachten geldt een schriftelijke opdrachtbevestiging als bewijs van de overeenkomst. Met particuliere opdrachtgevers kunnen ook mondeling afspraken worden gemaakt.",
    ],
  },
  {
    heading: "Uitvoering van de werkzaamheden",
    blocks: [
      "Opdrachtnemer voert de werkzaamheden uit naar beste inzicht en vermogen en volgens de eisen van goed vakmanschap.",
      "De werkzaamheden worden in beginsel uitgevoerd op werkdagen tussen 08:00 en 17:00 uur. Werkzaamheden op andere tijdstippen, in het weekend of op feestdagen worden in overleg en eventueel tegen een toeslag uitgevoerd.",
      "Bij periodieke onderhoudsovereenkomsten worden de werkzaamheden uitgevoerd volgens de overeengekomen frequentie en een vooraf gedeelde planning.",
      "Opdrachtnemer is gerechtigd de werkzaamheden geheel of gedeeltelijk door zorgvuldig geselecteerde derden te laten uitvoeren, waarbij opdrachtnemer verantwoordelijk blijft voor een correcte uitvoering.",
    ],
  },
  {
    heading: "Verplichtingen van de opdrachtgever",
    blocks: [
      "De opdrachtgever zorgt ervoor dat opdrachtnemer tijdig en zonder belemmeringen toegang heeft tot het object en dat de te reinigen ramen, gevels en oppervlakken vrij, veilig en goed bereikbaar zijn.",
      "De opdrachtgever stelt waar nodig kosteloos water en elektriciteit ter beschikking en zorgt voor een veilige werkomgeving en, indien van toepassing, voor parkeergelegenheid in de directe omgeving van het object.",
      "De opdrachtgever informeert opdrachtnemer vooraf over bijzonderheden, risico's en gebreken die voor de uitvoering of de veiligheid van belang zijn.",
      "Wanneer de opdrachtgever deze verplichtingen niet nakomt, is opdrachtnemer gerechtigd de werkzaamheden op te schorten en de daaruit voortvloeiende kosten in rekening te brengen.",
    ],
  },
  {
    heading: "Werken op hoogte, veiligheid en arbeidsomstandigheden",
    blocks: [
      "Opdrachtnemer is VCA-gecertificeerd en werkt volgens de geldende veiligheidsrichtlijnen. Voor werkzaamheden op hoogte wordt waar nodig een risico-inventarisatie per object opgesteld.",
      "Opdrachtnemer is gerechtigd het uitvoeren of voortzetten van werkzaamheden te weigeren of te staken wanneer de situatie naar zijn oordeel onveilig is, zonder dat dit leidt tot aansprakelijkheid van opdrachtnemer.",
      "Indien gebruik wordt gemaakt van op het object aanwezige voorzieningen, zoals een gevelinstallatie of hoogwerker, staat de opdrachtgever ervoor in dat deze deugdelijk en gekeurd zijn.",
    ],
  },
  {
    heading: "Weersomstandigheden",
    blocks: [
      "Weersomstandigheden vormen in beginsel geen beletsel voor de uitvoering van de werkzaamheden.",
      "Bij vorst, harde wind, onweer of andere omstandigheden die het werk onveilig of onwerkbaar maken, kan opdrachtnemer de werkzaamheden uitstellen en in overleg opnieuw inplannen. Reeds gemaakte kosten kunnen in rekening worden gebracht.",
    ],
  },
  {
    heading: "Niet of gedeeltelijk uitgevoerde werkzaamheden",
    blocks: [
      "Wanneer de werkzaamheden door een oorzaak die in de risicosfeer van de opdrachtgever ligt niet of slechts gedeeltelijk kunnen worden uitgevoerd, bijvoorbeeld door gesloten ramen, een geblokkeerde toegang of de afwezigheid van een sleutelhouder, blijft het overeengekomen bedrag volledig verschuldigd.",
    ],
  },
  {
    heading: "Wijzigingen en meerwerk",
    blocks: [
      "Wijzigingen in de overeenkomst worden schriftelijk vastgelegd.",
      "Werkzaamheden die buiten de oorspronkelijke opdracht vallen, gelden als meerwerk en worden in overleg of tegen het geldende uurtarief in rekening gebracht. Meerwerk kan gevolgen hebben voor de planning.",
    ],
  },
  {
    heading: "Prijzen, tarieven en indexering",
    blocks: [
      "De overeengekomen prijzen zijn gebaseerd op de op dat moment geldende kostprijsbepalende factoren.",
      "Opdrachtnemer is gerechtigd de prijzen van periodieke overeenkomsten jaarlijks per 1 januari aan te passen, ten minste op basis van de consumentenprijsindex van het Centraal Bureau voor de Statistiek en de van toepassing zijnde cao.",
      "Wijzigingen in lonen, belastingen, heffingen of andere kostprijsbepalende factoren mogen aan de opdrachtgever worden doorberekend.",
    ],
  },
  {
    heading: "Facturering en betaling",
    blocks: [
      "Facturering vindt plaats per uitgevoerde beurt, per periode of per maand, afhankelijk van hetgeen is overeengekomen.",
      "Betaling dient te geschieden binnen veertien dagen na factuurdatum, zonder korting, opschorting of verrekening, tenzij schriftelijk anders is overeengekomen.",
      "Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim en is hij de wettelijke rente, dan wel de wettelijke handelsrente, verschuldigd, vermeerderd met de buitengerechtelijke incassokosten.",
      "Opdrachtnemer is gerechtigd de werkzaamheden op te schorten zolang de opdrachtgever zijn betalingsverplichtingen niet nakomt.",
    ],
  },
  {
    heading: "Duur, verlenging en opzegging",
    blocks: [
      "Een periodieke onderhoudsovereenkomst wordt aangegaan voor de overeengekomen termijn en wordt daarna, tenzij anders afgesproken, stilzwijgend voortgezet voor onbepaalde tijd.",
      "Een overeenkomst met een consument die stilzwijgend is verlengd, kan op elk moment worden opgezegd met inachtneming van een opzegtermijn van één maand.",
      "Een zakelijke overeenkomst kan tegen het einde van de looptijd worden opgezegd met inachtneming van een opzegtermijn van twee maanden. Opzegging geschiedt schriftelijk tegen het einde van een kalendermaand.",
      "Beide partijen kunnen de overeenkomst met onmiddellijke ingang ontbinden wanneer de andere partij in staat van faillissement wordt verklaard, surseance van betaling aanvraagt of zijn verplichtingen na een schriftelijke ingebrekestelling blijft verzaken.",
    ],
  },
  {
    heading: "Annulering en verzetten van afspraken",
    blocks: [
      "Een afgesproken afspraak kan kosteloos worden verzet of geannuleerd tot uiterlijk vierentwintig uur van tevoren. Bij een latere annulering kunnen voorrijkosten of reeds gemaakte kosten in rekening worden gebracht.",
    ],
  },
  {
    heading: "Klachten en reclamatie",
    blocks: [
      "Klachten over de uitgevoerde werkzaamheden dienen zo spoedig mogelijk, doch uiterlijk binnen acht dagen na uitvoering, schriftelijk aan opdrachtnemer te worden gemeld.",
      "Zichtbare schade dient binnen drie werkdagen schriftelijk te worden gemeld, zodat opdrachtnemer de gelegenheid heeft de schade te onderzoeken en zo nodig vast te leggen met foto's of video.",
      "Een klacht schort de betalingsverplichting van een zakelijke opdrachtgever niet op. Wanneer een klacht gegrond is, voert opdrachtnemer de betreffende werkzaamheden alsnog correct uit.",
    ],
  },
  {
    heading: "Aansprakelijkheid",
    blocks: [
      "Opdrachtnemer is professioneel verzekerd. De aansprakelijkheid van opdrachtnemer is beperkt tot het bedrag dat in het betreffende geval door de verzekeraar wordt uitgekeerd, vermeerderd met het eigen risico. Wanneer geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot de factuurwaarde van de betreffende opdracht of, bij periodieke overeenkomsten, tot het over de laatste drie maanden gefactureerde bedrag.",
      "Opdrachtnemer is uitsluitend aansprakelijk voor directe schade. Aansprakelijkheid voor indirecte schade, waaronder gevolgschade, gederfde winst, gemiste besparingen en bedrijfsstilstand, is uitgesloten.",
      "Opdrachtnemer is niet aansprakelijk voor schade die het gevolg is van:",
      {
        list: [
          "reeds aanwezige gebreken aan glas, kozijnen, gevels, voegen of kitwerk, waaronder bestaande krassen, barsten of verwering;",
          "door de opdrachtgever niet of onvoldoende gemelde bijzonderheden, gebreken of risico's;",
          "ondeugdelijke, niet-gekeurde of onjuist gebruikte voorzieningen die door de opdrachtgever ter beschikking zijn gesteld;",
          "onjuiste of onvolledige informatie die door de opdrachtgever is verstrekt;",
          "werkzaamheden of nalaten van derden die niet door opdrachtnemer zijn ingeschakeld.",
        ],
      },
      "Iedere vordering tot schadevergoeding vervalt twaalf maanden na het moment waarop de opdrachtgever met de schade bekend werd of redelijkerwijs bekend had kunnen zijn.",
    ],
  },
  {
    heading: "Overmacht",
    blocks: [
      "In geval van overmacht worden de verplichtingen van opdrachtnemer opgeschort. Onder overmacht wordt mede verstaan extreme weersomstandigheden, ziekte of uitval van personeel, storingen in de levering van water of elektriciteit, transportbelemmeringen, overheidsmaatregelen en pandemieën.",
      "Wanneer de overmacht langer dan twee maanden voortduurt, zijn beide partijen gerechtigd de overeenkomst te ontbinden, zonder dat opdrachtnemer tot enige schadevergoeding gehouden is.",
    ],
  },
  {
    heading: "Overname van personeel",
    blocks: [
      "Het is de opdrachtgever niet toegestaan om gedurende de looptijd van de overeenkomst en tot twaalf maanden na afloop daarvan medewerkers van opdrachtnemer in dienst te nemen of anderszins, direct of indirect, voor zich te laten werken, behoudens voorafgaande schriftelijke toestemming van opdrachtnemer.",
      "Bij overtreding is de opdrachtgever een direct opeisbare boete verschuldigd, onverminderd het recht van opdrachtnemer op volledige schadevergoeding. Deze bepaling sluit aan bij de cao in het Schoonmaak- en Glazenwassersbedrijf.",
    ],
  },
  {
    heading: "Geheimhouding en persoonsgegevens",
    blocks: [
      "Beide partijen behandelen vertrouwelijke informatie die zij in het kader van de overeenkomst ontvangen met de nodige zorgvuldigheid en gebruiken deze uitsluitend voor het doel waarvoor zij is verstrekt.",
      "Opdrachtnemer verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming. Meer hierover leest u in ons privacybeleid.",
    ],
  },
  {
    heading: "Intellectueel eigendom",
    blocks: [
      "Alle door opdrachtnemer opgestelde offertes, plannen, werkwijzen en adviezen blijven eigendom van opdrachtnemer en mogen zonder schriftelijke toestemming niet worden verveelvoudigd of aan derden ter beschikking gesteld.",
    ],
  },
  {
    heading: "Toepasselijk recht en geschillen",
    blocks: [
      "Op alle overeenkomsten en op deze algemene voorwaarden is uitsluitend Nederlands recht van toepassing.",
      "Geschillen worden voorgelegd aan de bevoegde rechter van de rechtbank Den Haag, tenzij dwingend recht een andere rechter aanwijst en behoudens het recht van een consument om binnen een maand voor de wettelijk bevoegde rechter te kiezen.",
    ],
  },
  {
    heading: "Slotbepalingen",
    blocks: [
      "Opdrachtnemer is gerechtigd deze algemene voorwaarden te wijzigen. De gewijzigde voorwaarden gelden vanaf het moment dat zij aan de opdrachtgever bekend zijn gemaakt of op de website zijn gepubliceerd.",
      "Op de overeenkomst is steeds de meest recente versie van deze voorwaarden van toepassing. Deze voorwaarden zijn te raadplegen op de website van opdrachtnemer.",
    ],
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <LegalPage
      title="Algemene voorwaarden"
      intro={`Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten van ${contact.name}. Wij maken heldere afspraken, zodat u altijd weet waar u aan toe bent.`}
      updatedAt="13 juni 2026"
      sections={sections}
      articlePrefix="Artikel "
    />
  );
}
