import type { MetadataRoute } from "next";

const SITE_URL = "https://www.jversseput.nl";

// Alle indexeerbare routes (taal-onafhankelijk pad). Vul aan zodra er pagina's
// bijkomen. Nederlands staat op de root, Engels onder /en.
const routes = [
  "",
  "/diensten/glas-en-gevelonderhoud",
  "/diensten/gevelreiniging",
  "/diensten/zonnepanelenreiniging",
  "/diensten/dakgootreiniging",
  "/diensten/hogedrukreiniging",
  "/diensten/opleveringsschoonmaak",
  "/diensten/periodiek-onderhoud",
  "/diensten/specialistische-reiniging",
  "/werkgebied",
  "/werkgebied/amsterdam",
  "/werkgebied/rotterdam",
  "/werkgebied/den-haag",
  "/werkgebied/utrecht",
  "/werkgebied/eindhoven",
  "/privacybeleid",
  "/algemene-voorwaarden",
];

function priorityFor(path: string): number {
  if (path === "") return 1;
  if (path.startsWith("/diensten")) return 0.8;
  if (path.startsWith("/werkgebied")) return 0.7;
  return 0.4;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Per route één entry per taal, elk met hreflang-alternates naar beide talen.
  return routes.flatMap((path) => {
    const nlUrl = `${SITE_URL}${path || "/"}`;
    const enUrl = `${SITE_URL}/en${path}`;
    const languages = { nl: nlUrl, en: enUrl, "x-default": nlUrl };
    const changeFrequency: "weekly" | "monthly" =
      path === "" ? "weekly" : "monthly";
    const shared = {
      lastModified: now,
      changeFrequency,
      priority: priorityFor(path),
      alternates: { languages },
    };
    return [
      { url: nlUrl, ...shared },
      { url: enUrl, ...shared },
    ];
  });
}
