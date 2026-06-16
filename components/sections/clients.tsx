import { clients } from "@/lib/site";
import { Marquee } from "@/components/ui/marquee";

/**
 * Prestige client ticker. Logos are forced to a uniform titanium monochrome
 * (brightness(0) + invert(1)) so brand colours never break the dark, luxe
 * palette. Scrolling + fade + pause-on-hover handled by the Marquee.
 */
export function Clients() {
  return (
    <section
      aria-label="Opdrachtgevers"
      className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-4"
    >
      <Marquee
        className="items-center"
        duration={36}
        pauseOnHover
        fadeAmount={10}
      >
        {clients.map((client) => (
          <div key={client.name} className="mx-10 flex items-center sm:mx-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.src}
              alt={client.name}
              loading="lazy"
              className="h-7 w-auto opacity-50 grayscale transition-opacity duration-500 [filter:brightness(0)_invert(1)] hover:opacity-100 sm:h-8"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
