import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { contact } from "@/lib/site";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

// TODO (juridisch): laat dit document vóór definitief gebruik controleren door een
// jurist en vul het vestigingsadres en btw-nummer aan zodra deze vaststaan.

const CONTENT = {
  nl: {
    title: "Algemene voorwaarden",
    metaDescription:
      "De algemene voorwaarden van J. Versseput Vastgoedonderhoud B.V. voor glas-, gevel- en vastgoedonderhoud.",
    intro: `Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten van ${contact.name}. Wij maken heldere afspraken, zodat u altijd weet waar u aan toe bent.`,
    updatedAt: "13 juni 2026",
    articlePrefix: "Artikel ",
    sections: [
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
    ] as LegalSection[],
  },
  en: {
    title: "Terms and conditions",
    metaDescription:
      "The terms and conditions of J. Versseput Vastgoedonderhoud B.V. for glass, facade and property maintenance.",
    intro: `These terms and conditions apply to all quotes, assignments and agreements of ${contact.name}. We make clear arrangements, so that you always know where you stand.`,
    updatedAt: "13 June 2026",
    articlePrefix: "Article ",
    sections: [
      {
        heading: "Definitions",
        blocks: [
          "In these terms and conditions, the following definitions apply:",
          {
            list: [
              `Contractor: ${contact.name}, established in ${contact.city} and registered with the Chamber of Commerce under number ${contact.kvk}.`,
              "Client: the natural person or legal entity that enters into an agreement with the contractor or receives a quote for that purpose.",
              "Agreement: any arrangement between the contractor and the client for the performance of works, including one-off assignments and recurring maintenance agreements.",
              "Works: all services to be performed by the contractor in the field of glass, facade and property maintenance, including window cleaning, facade cleaning, solar panel cleaning, gutter cleaning, high-pressure cleaning and cleaning maintenance.",
              "Object: the building, site or installation on which the works are carried out.",
              "In writing: by letter or by email.",
            ],
          },
        ],
      },
      {
        heading: "Applicability",
        blocks: [
          "These terms and conditions apply to all quotes, offers, assignments and agreements under which the contractor performs works, and to all legal relationships arising from them.",
          "Deviations from these terms and conditions apply only where they have been confirmed in writing by the contractor.",
          "The applicability of any purchasing or other conditions of the client is expressly rejected.",
          "If one or more provisions are wholly or partly null and void or are annulled, the remaining provisions remain fully in force and the parties will consult on a replacement provision that approximates the purport of the original as closely as possible.",
        ],
      },
      {
        heading: "Quotes and offers",
        blocks: [
          "All quotes and offers are without obligation and valid for thirty days from their date, unless stated otherwise.",
          "Quotes are based on the information provided by the client and on any inspection of the object. If this information proves to be incorrect or incomplete, the contractor is entitled to adjust the price.",
          "For business clients, prices are stated excluding VAT, and for consumers including VAT, unless indicated otherwise.",
          "Obvious mistakes or clerical errors in a quote do not bind the contractor.",
        ],
      },
      {
        heading: "Formation of the agreement",
        blocks: [
          "The agreement is formed at the moment the client accepts a quote in writing, or at the moment the contractor begins the works with the client's consent.",
          "For business assignments, a written assignment confirmation serves as evidence of the agreement. With private clients, arrangements may also be made verbally.",
        ],
      },
      {
        heading: "Performance of the works",
        blocks: [
          "The contractor performs the works to the best of its insight and ability and in accordance with the standards of good workmanship.",
          "The works are in principle carried out on working days between 08:00 and 17:00. Works at other times, at weekends or on public holidays are carried out by arrangement and possibly subject to a surcharge.",
          "For recurring maintenance agreements, the works are carried out according to the agreed frequency and a schedule shared in advance.",
          "The contractor is entitled to have the works carried out wholly or partly by carefully selected third parties, whereby the contractor remains responsible for correct performance.",
        ],
      },
      {
        heading: "Obligations of the client",
        blocks: [
          "The client ensures that the contractor has timely and unobstructed access to the object and that the windows, facades and surfaces to be cleaned are clear, safe and readily accessible.",
          "Where necessary, the client makes water and electricity available free of charge and ensures a safe working environment and, where applicable, parking facilities in the immediate vicinity of the object.",
          "The client informs the contractor in advance of any particulars, risks and defects that are relevant to the performance or the safety of the works.",
          "Where the client fails to fulfil these obligations, the contractor is entitled to suspend the works and to charge the costs arising from this.",
        ],
      },
      {
        heading: "Working at height, safety and working conditions",
        blocks: [
          "The contractor is VCA-certified and works in accordance with the applicable safety guidelines. For works at height, a risk assessment per object is drawn up where necessary.",
          "The contractor is entitled to refuse or cease the performance or continuation of works where, in its judgement, the situation is unsafe, without this giving rise to any liability on the part of the contractor.",
          "If use is made of facilities present on the object, such as a facade installation or an aerial work platform, the client warrants that these are sound and inspected.",
        ],
      },
      {
        heading: "Weather conditions",
        blocks: [
          "Weather conditions are in principle no impediment to the performance of the works.",
          "In the event of frost, strong wind, thunderstorms or other conditions that make the work unsafe or unworkable, the contractor may postpone the works and reschedule them by arrangement. Costs already incurred may be charged.",
        ],
      },
      {
        heading: "Works not carried out or only partly carried out",
        blocks: [
          "Where the works cannot be carried out, or can be carried out only in part, due to a cause that lies within the client's sphere of risk, for example because of closed windows, blocked access or the absence of a key holder, the agreed amount remains payable in full.",
        ],
      },
      {
        heading: "Changes and additional work",
        blocks: [
          "Changes to the agreement are recorded in writing.",
          "Works that fall outside the original assignment qualify as additional work and are charged by arrangement or at the applicable hourly rate. Additional work may affect the schedule.",
        ],
      },
      {
        heading: "Prices, rates and indexation",
        blocks: [
          "The agreed prices are based on the cost-determining factors applicable at that time.",
          "The contractor is entitled to adjust the prices of recurring agreements annually on 1 January, at least on the basis of the consumer price index of Statistics Netherlands and the applicable collective labour agreement.",
          "Changes in wages, taxes, levies or other cost-determining factors may be passed on to the client.",
        ],
      },
      {
        heading: "Invoicing and payment",
        blocks: [
          "Invoicing takes place per completed visit, per period or per month, depending on what has been agreed.",
          "Payment must be made within fourteen days of the invoice date, without discount, suspension or set-off, unless agreed otherwise in writing.",
          "In the event of late payment, the client is in default by operation of law and owes the statutory interest, or the statutory commercial interest, increased by the extrajudicial collection costs.",
          "The contractor is entitled to suspend the works for as long as the client fails to fulfil its payment obligations.",
        ],
      },
      {
        heading: "Term, renewal and cancellation",
        blocks: [
          "A recurring maintenance agreement is entered into for the agreed term and is thereafter, unless agreed otherwise, tacitly continued for an indefinite period.",
          "An agreement with a consumer that has been tacitly renewed may be cancelled at any time subject to a notice period of one month.",
          "A business agreement may be cancelled at the end of its term subject to a notice period of two months. Cancellation takes place in writing as at the end of a calendar month.",
          "Either party may terminate the agreement with immediate effect where the other party is declared bankrupt, applies for a suspension of payments, or continues to fail to fulfil its obligations after a written notice of default.",
        ],
      },
      {
        heading: "Cancellation and rescheduling of appointments",
        blocks: [
          "A scheduled appointment may be rescheduled or cancelled free of charge up to no later than twenty-four hours in advance. In the event of a later cancellation, call-out costs or costs already incurred may be charged.",
        ],
      },
      {
        heading: "Complaints and notices of defect",
        blocks: [
          "Complaints about the works carried out must be reported to the contractor in writing as soon as possible, but no later than eight days after performance.",
          "Visible damage must be reported in writing within three working days, so that the contractor has the opportunity to investigate the damage and, where necessary, record it with photos or video.",
          "A complaint does not suspend the payment obligation of a business client. Where a complaint is well-founded, the contractor will still carry out the works in question correctly.",
        ],
      },
      {
        heading: "Liability",
        blocks: [
          "The contractor carries professional insurance. The liability of the contractor is limited to the amount paid out by the insurer in the relevant case, increased by the deductible. Where no payment is made, liability is limited to the invoice value of the relevant assignment or, in the case of recurring agreements, to the amount invoiced over the last three months.",
          "The contractor is liable only for direct damage. Liability for indirect damage, including consequential damage, lost profit, missed savings and business interruption, is excluded.",
          "The contractor is not liable for damage that is the result of:",
          {
            list: [
              "pre-existing defects in glass, frames, facades, joints or sealant, including existing scratches, cracks or weathering;",
              "particulars, defects or risks not reported, or insufficiently reported, by the client;",
              "unsound, uninspected or improperly used facilities made available by the client;",
              "incorrect or incomplete information provided by the client;",
              "works or omissions of third parties not engaged by the contractor.",
            ],
          },
          "Any claim for compensation lapses twelve months after the moment at which the client became, or could reasonably have become, aware of the damage.",
        ],
      },
      {
        heading: "Force majeure",
        blocks: [
          "In the event of force majeure, the obligations of the contractor are suspended. Force majeure also includes extreme weather conditions, illness or absence of personnel, disruptions in the supply of water or electricity, transport impediments, government measures and pandemics.",
          "Where the force majeure continues for longer than two months, either party is entitled to terminate the agreement, without the contractor being liable for any compensation.",
        ],
      },
      {
        heading: "Recruitment of personnel",
        blocks: [
          "The client is not permitted, during the term of the agreement and for up to twelve months after its end, to employ employees of the contractor or otherwise, directly or indirectly, to have them work for it, save with the prior written consent of the contractor.",
          "In the event of a breach, the client owes an immediately payable penalty, without prejudice to the contractor's right to full compensation. This provision aligns with the collective labour agreement in the Cleaning and Window Cleaning industry.",
        ],
      },
      {
        heading: "Confidentiality and personal data",
        blocks: [
          "Both parties treat confidential information that they receive in the context of the agreement with due care and use it only for the purpose for which it was provided.",
          "The contractor processes personal data in accordance with the General Data Protection Regulation. You can read more about this in our privacy policy.",
        ],
      },
      {
        heading: "Intellectual property",
        blocks: [
          "All quotes, plans, working methods and advice drawn up by the contractor remain the property of the contractor and may not be reproduced or made available to third parties without written consent.",
        ],
      },
      {
        heading: "Applicable law and disputes",
        blocks: [
          "Dutch law applies exclusively to all agreements and to these terms and conditions.",
          "Disputes are submitted to the competent court of the District Court of The Hague, unless mandatory law designates another court and without prejudice to a consumer's right to choose the legally competent court within one month.",
        ],
      },
      {
        heading: "Final provisions",
        blocks: [
          "The contractor is entitled to amend these terms and conditions. The amended terms and conditions apply from the moment they are made known to the client or are published on the website.",
          "The most recent version of these terms and conditions always applies to the agreement. These terms and conditions can be consulted on the contractor's website.",
        ],
      },
    ] as LegalSection[],
  },
};

function pick(locale: string) {
  return locale === "en" ? CONTENT.en : CONTENT.nl;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = pick(locale);
  return {
    title: c.title,
    description: c.metaDescription,
    alternates: {
      canonical:
        locale === "en" ? "/en/algemene-voorwaarden" : "/algemene-voorwaarden",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = pick(locale);
  return (
    <LegalPage
      title={c.title}
      intro={c.intro}
      updatedAt={c.updatedAt}
      sections={c.sections}
      articlePrefix={c.articlePrefix}
    />
  );
}
