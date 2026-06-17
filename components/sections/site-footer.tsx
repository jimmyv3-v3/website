import { Phone, Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { contact, services } from "@/lib/site";
import { Link } from "@/i18n/navigation";
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
  { name: "Den Haag", href: "/werkgebied/den-haag" },
  { name: "Rotterdam", href: "/werkgebied/rotterdam" },
  { name: "Amsterdam", href: "/werkgebied/amsterdam" },
  { name: "Utrecht", href: "/werkgebied/utrecht" },
  { name: "Eindhoven", href: "/werkgebied/eindhoven" },
];

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

// Namen komen uit messages/<locale>.json onder "footer"; hrefs houden de
// Nederlandse slugs aan.
const legalLinks = [
  { key: "privacy", href: "/privacybeleid" },
  { key: "terms", href: "/algemene-voorwaarden" },
] as const;

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="container py-20">
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start">
          {/* Brand + description + contact channels */}
          <div className="flex w-full max-w-sm flex-col gap-6">
            <Link href="/#top" aria-label={contact.name}>
              <Wordmark idSuffix="footer" />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
            <p className="text-sm font-medium text-titanium-bright">
              {t("responsePromise")}
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
            <nav aria-label={t("columns.services")}>
              <h2 className="mb-4 font-display text-xs font-medium uppercase tracking-wider text-foreground">
                {t("columns.services")}
              </h2>
              <ul className="space-y-3 text-sm">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-titanium-bright"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={t("columns.workArea")}>
              <h2 className="mb-4 font-display text-xs font-medium uppercase tracking-wider text-foreground">
                {t("columns.workArea")}
              </h2>
              <ul className="space-y-3 text-sm">
                {areaLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-titanium-bright"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/werkgebied"
                    className="text-titanium-mid transition-colors hover:text-titanium-bright"
                  >
                    {t("allOfNetherlands")}
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="mb-4 font-display text-xs font-medium uppercase tracking-wider text-foreground">
                {t("columns.contact")}
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
            {t("rights", {
              year: String(new Date().getFullYear()),
              name: contact.name,
            })}
          </p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-titanium-bright"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
