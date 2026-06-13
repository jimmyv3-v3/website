import { contact } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { Monogram } from "@/components/brand/monogram";

export function About() {
  return (
    <section
      id="over-ons"
      className="relative scroll-mt-24 overflow-hidden border-y border-border/60 bg-card/20 py-16 sm:py-20"
    >
      {/* large watermark monogram */}
      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-[0.06] lg:block">
        <Monogram idSuffix="about-mark" className="h-[28rem] w-auto" />
      </div>

      <div className="container relative">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-2xl font-light leading-tight tracking-tight text-foreground sm:text-3xl">
              Een familiebedrijf dat de standaard in{" "}
              <span className="text-titanium font-normal">
                vastgoedonderhoud
              </span>{" "}
              opnieuw definieert.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                De oorsprong van J. Versseput ligt in het glazenwassen, ruim
                zestig jaar geleden begonnen in de Haagse binnenstad en van
                vader op zoon uitgegroeid tot een professionele organisatie.
                Diezelfde toewijding sturen wij vandaag aan op de grootste en
                meest aansprekende objecten van het land.
              </p>
              <p>
                Wij werken met representatief en goed Nederlands sprekend
                personeel dat elk gebouw met dezelfde zorg behandelt, van de
                eerste beurt tot de laatste. Onze ambitie is helder. Wij willen
                de meest betrouwbare en meest luxe partner in vastgoedonderhoud
                van Nederland zijn.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-sm text-muted-foreground">
              Gevestigd in {contact.city}, actief in {contact.region}.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
