import { Phone, Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { contact, services } from "@/lib/site";
import { Wordmark } from "@/components/brand/wordmark";

/**
 * Footer in the "Footer7" layout, adapted to the J. Versseput identity:
 * Wordmark + description + contact-channel icons on the left, three link
 * columns (Diensten, Werkgebied, Contact met NAW) on the right, and a legal
 * bottom bar. Uses lucide icons (react-icons is not a project dependency).
 */
const serviceLinks = services.map((s) => ({
  name: s.title,
  href: `/diensten/${s.id}`,
}));

const areaLinks = [
  "Den Haag",
  "Rotterdam",
  "Leiden",
  "Delft",
  "Zoetermeer",
  "Amsterdam",
  "Utrecht",
].map((city) => ({ name: city, href: "/#contact" }));

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jimmy-versseput-4007a62a3/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/jversseput.vastgoedonderhoudbv/",
    label: "Instagram",
  },
];

const legalLinks = [
  { name: "Privacybeleid", href: "/privacybeleid" },
  { name: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="container py-20">
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start">
          {/* Brand + description + contact channels */}
          <div className="flex w-full max-w-sm flex-col gap-6">
            <a href="/#top" aria-label={contact.name}>
              <Wordmark idSuffix="footer" />
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Uw vertrouwde partner voor glas- en gevelonderhoud. Wij houden
              vastgoed representatief en in waarde, met vakmanschap uit drie
              generaties.
            </p>
            <p className="text-sm font-medium text-titanium-bright">
              {contact.responsePromise}
            </p>
            <ul className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/40 text-muted-foreground transition-colors hover:text-titanium-bright"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid w-full gap-10 sm:grid-cols-3 lg:max-w-2xl lg:gap-16">
            <nav aria-label="Diensten">
              <h2 className="mb-4 font-display text-xs font-medium uppercase tracking-wider text-foreground">
                Diensten
              </h2>
              <ul className="space-y-3 text-sm">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-titanium-bright"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Werkgebied">
              <h2 className="mb-4 font-display text-xs font-medium uppercase tracking-wider text-foreground">
                Werkgebied
              </h2>
              <ul className="space-y-3 text-sm">
                {areaLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-titanium-bright"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="text-titanium-mid">en heel Nederland</li>
              </ul>
            </nav>

            <div>
              <h2 className="mb-4 font-display text-xs font-medium uppercase tracking-wider text-foreground">
                Contact
              </h2>
              <address className="space-y-3 text-sm not-italic text-muted-foreground">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-titanium-bright"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {contact.phone}
                </a>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-titanium-bright"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={contact.emailHref}
                  className="flex items-center gap-2 transition-colors hover:text-titanium-bright"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {contact.email}
                </a>
                <p>{contact.city}</p>
                <p>KvK {contact.kvk}</p>
                {contact.btw && <p>BTW {contact.btw}</p>}
                {/* TODO: btw-nummer toevoegen in lib/site.ts zodra bekend */}
              </address>
            </div>
          </div>
        </div>

        {/* Legal bottom bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border/40 pt-8 pb-24 text-xs font-medium text-muted-foreground md:flex-row md:items-center lg:pb-0">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()} {contact.name}. Alle rechten
            voorbehouden.
          </p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-titanium-bright"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
