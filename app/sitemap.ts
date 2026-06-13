import type { MetadataRoute } from "next";

const SITE_URL = "https://www.jversseput.nl";

// Alle indexeerbare routes. Vul aan zodra er pagina's bijkomen.
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/diensten")
          ? 0.8
          : path.startsWith("/werkgebied")
            ? 0.7
            : 0.4,
  }));
}
