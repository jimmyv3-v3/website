import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/**
 * Projectengalerij. Het gebouw is de held: een uniform raster van even grote
 * tegels met echte projectfoto's, zonder tekst in de blokken.
 * Foto's staan in /public/projects (overgenomen uit de portfolio-map).
 */
const photos = [
  {
    src: "/projects/abn.avif",
    alt: "ABN AMRO-toren, glas- en gevelonderhoud door J. Versseput",
  },
  {
    src: "/projects/babylon.png",
    alt: "New Babylon, glas- en gevelonderhoud door J. Versseput",
  },
  { src: "/projects/gallery-7.jpg", alt: "Vastgoedproject onderhouden door J. Versseput" },
  { src: "/projects/gallery-8.jpg", alt: "Vastgoedproject onderhouden door J. Versseput" },
  { src: "/projects/gallery-9.jpg", alt: "Vastgoedproject onderhouden door J. Versseput" },
  { src: "/projects/gallery-10.png", alt: "Vastgoedproject onderhouden door J. Versseput" },
  { src: "/projects/gallery-11.jpg", alt: "Vastgoedproject onderhouden door J. Versseput" },
  { src: "/projects/gallery-12.jpg", alt: "Vastgoedproject onderhouden door J. Versseput" },
  { src: "/projects/gallery-13.jpg", alt: "Vastgoedproject onderhouden door J. Versseput" },
  { src: "/projects/cta-1.png", alt: "Vastgoedproject onderhouden door J. Versseput" },
  { src: "/projects/cta-2.png", alt: "Vastgoedproject onderhouden door J. Versseput" },
  { src: "/projects/cta-4.png", alt: "Vastgoedproject onderhouden door J. Versseput" },
];

export function Projects() {
  return (
    <section id="projecten" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container relative">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
            Vastgoed waar men{" "}
            <span className="text-titanium font-normal">trots op is</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Van Haagse kantoorkolossen tot retailgalerijen door heel Nederland:
            wij onderhouden objecten die er het hele jaar door representatief bij
            moeten staan.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          stagger={0.05}
          delayChildren={0.1}
        >
          {photos.map((photo) => (
            <RevealItem key={photo.src}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border/70 bg-card/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-transparent transition-colors duration-500 group-hover:ring-titanium-mid/40" />
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
