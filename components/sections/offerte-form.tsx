"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact } from "@/lib/site";
import { MetalButton } from "@/components/ui/metal-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

type FormState = {
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  plaats: string;
  opdrachtgever: string;
  bericht: string;
  akkoord: boolean;
};

const INITIAL: FormState = {
  naam: "",
  bedrijf: "",
  email: "",
  telefoon: "",
  plaats: "",
  opdrachtgever: "",
  bericht: "",
  akkoord: false,
};

const INPUT_CLASS =
  "mt-1.5 w-full rounded-md border border-input bg-card/40 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-titanium-mid/60 focus:outline-none focus:ring-2 focus:ring-ring";

const LABEL_CLASS = "text-sm text-muted-foreground";

export function OfferteForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: typeof errors = {};
    if (!form.naam.trim()) next.naam = "Vul uw naam in.";
    if (!form.email.trim()) next.email = "Vul uw e-mailadres in.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Vul een geldig e-mailadres in.";
    if (!form.akkoord) next.akkoord = "U dient akkoord te gaan om door te gaan.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitError(
        "Het formulier is nog niet gekoppeld. Bel of mail ons gerust direct, dan helpen wij u meteen.",
      );
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nieuwe offerteaanvraag van ${form.naam || "de website"}`,
          from_name: "J. Versseput website",
          replyto: form.email,
          Naam: form.naam,
          Bedrijf: form.bedrijf,
          "E-mail": form.email,
          Telefoon: form.telefoon,
          "Plaats of object": form.plaats,
          "Type opdrachtgever": form.opdrachtgever,
          Bericht: form.bericht,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setSubmitError(
          "Er ging iets mis bij het versturen. Probeer het opnieuw of bel ons direct.",
        );
      }
    } catch {
      setSubmitError(
        "Er ging iets mis bij het versturen. Probeer het opnieuw of bel ons direct.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* LEFT — intro + contact channels */}
          <RevealGroup>
            <RevealItem>
              <h2
                id="contact-heading"
                className="font-display text-2xl font-light tracking-tight sm:text-3xl"
              >
                Klaar om uw vastgoed in{" "}
                <span className="text-titanium font-normal">topconditie</span>{" "}
                te brengen?
              </h2>
            </RevealItem>

            <RevealItem>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
                Vraag vrijblijvend een offerte aan. Wij denken met u mee over
                de beste aanpak en reageren binnen één werkdag.
              </p>
            </RevealItem>

            <RevealItem>
              <ul className="mt-8 space-y-4" role="list">
                <li>
                  <a
                    href={contact.phoneHref}
                    className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-titanium-mid"
                    />
                    <span>{contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.emailHref}
                    className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-titanium-mid"
                    />
                    <span>{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-titanium-mid"
                    />
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </RevealItem>

            <RevealItem>
              <dl className="mt-8 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-titanium-mid"
                  />
                  <dt className="sr-only">Reactietijd</dt>
                  <dd>{contact.responsePromise}</dd>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-titanium-mid"
                  />
                  <dt className="sr-only">Kosten</dt>
                  <dd>Gratis en vrijblijvend</dd>
                </div>
              </dl>
            </RevealItem>
          </RevealGroup>

          {/* RIGHT — form card */}
          <Reveal delay={0.1}>
            <div className="glass-panel rounded-lg p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-10 w-10 text-titanium-bright"
                  />
                  <p className="text-foreground font-display font-light text-lg">
                    Bedankt voor uw aanvraag.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Wij nemen binnen één werkdag contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <fieldset className="contents" disabled={false}>
                    <legend className="sr-only">Offerteaanvraag</legend>

                    <div className="space-y-5">
                      {/* Naam */}
                      <div>
                        <label htmlFor="offerte-naam" className={LABEL_CLASS}>
                          Naam <span aria-hidden="true" className="text-muted-foreground/40">*</span>
                        </label>
                        <input
                          id="offerte-naam"
                          type="text"
                          autoComplete="name"
                          required
                          value={form.naam}
                          onChange={(e) => set("naam", e.target.value)}
                          placeholder="Uw volledige naam"
                          className={cn(INPUT_CLASS, errors.naam && "border-destructive/60")}
                          aria-describedby={errors.naam ? "err-naam" : undefined}
                          aria-invalid={!!errors.naam}
                        />
                        {errors.naam && (
                          <p id="err-naam" role="alert" className="mt-1 text-xs text-destructive">
                            {errors.naam}
                          </p>
                        )}
                      </div>

                      {/* Bedrijf */}
                      <div>
                        <label htmlFor="offerte-bedrijf" className={LABEL_CLASS}>
                          Bedrijf{" "}
                          <span className="text-muted-foreground/40">(optioneel)</span>
                        </label>
                        <input
                          id="offerte-bedrijf"
                          type="text"
                          autoComplete="organization"
                          value={form.bedrijf}
                          onChange={(e) => set("bedrijf", e.target.value)}
                          placeholder="Naam van uw organisatie"
                          className={INPUT_CLASS}
                        />
                      </div>

                      {/* E-mail */}
                      <div>
                        <label htmlFor="offerte-email" className={LABEL_CLASS}>
                          E-mail <span aria-hidden="true" className="text-muted-foreground/40">*</span>
                        </label>
                        <input
                          id="offerte-email"
                          type="email"
                          autoComplete="email"
                          required
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="uw@emailadres.nl"
                          className={cn(INPUT_CLASS, errors.email && "border-destructive/60")}
                          aria-describedby={errors.email ? "err-email" : undefined}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p id="err-email" role="alert" className="mt-1 text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Telefoon */}
                      <div>
                        <label htmlFor="offerte-telefoon" className={LABEL_CLASS}>
                          Telefoon
                        </label>
                        <input
                          id="offerte-telefoon"
                          type="tel"
                          autoComplete="tel"
                          value={form.telefoon}
                          onChange={(e) => set("telefoon", e.target.value)}
                          placeholder="+31 6 …"
                          className={INPUT_CLASS}
                        />
                      </div>

                      {/* Plaats of object */}
                      <div>
                        <label htmlFor="offerte-plaats" className={LABEL_CLASS}>
                          Plaats of object
                        </label>
                        <input
                          id="offerte-plaats"
                          type="text"
                          value={form.plaats}
                          onChange={(e) => set("plaats", e.target.value)}
                          placeholder="Bijv. Den Haag of naam van het pand"
                          className={INPUT_CLASS}
                        />
                      </div>

                      {/* Type opdrachtgever */}
                      <div>
                        <label htmlFor="offerte-opdrachtgever" className={LABEL_CLASS}>
                          Type opdrachtgever
                        </label>
                        <select
                          id="offerte-opdrachtgever"
                          value={form.opdrachtgever}
                          onChange={(e) => set("opdrachtgever", e.target.value)}
                          className={cn(INPUT_CLASS, "appearance-none")}
                        >
                          <option value="">Selecteer een categorie</option>
                          <option value="vastgoedbeheer">Vastgoedbeheer</option>
                          <option value="vve">VvE</option>
                          <option value="kantoor">Kantoor</option>
                          <option value="overheid">Overheid of instelling</option>
                          <option value="particulier">Particulier</option>
                          <option value="anders">Anders</option>
                        </select>
                      </div>

                      {/* Bericht */}
                      <div>
                        <label htmlFor="offerte-bericht" className={LABEL_CLASS}>
                          Bericht
                        </label>
                        <textarea
                          id="offerte-bericht"
                          rows={4}
                          value={form.bericht}
                          onChange={(e) => set("bericht", e.target.value)}
                          placeholder="Beschrijf uw situatie of de gewenste werkzaamheden."
                          className={cn(INPUT_CLASS, "resize-y")}
                        />
                      </div>

                      {/* AVG-checkbox */}
                      <div>
                        <div className="flex items-start gap-3">
                          <input
                            id="offerte-akkoord"
                            type="checkbox"
                            required
                            checked={form.akkoord}
                            onChange={(e) => set("akkoord", e.target.checked)}
                            className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-current focus:ring-2 focus:ring-ring"
                            aria-describedby={errors.akkoord ? "err-akkoord" : undefined}
                            aria-invalid={!!errors.akkoord}
                          />
                          <label
                            htmlFor="offerte-akkoord"
                            className={cn(LABEL_CLASS, "leading-snug cursor-pointer")}
                          >
                            Ik ga akkoord met de verwerking van mijn gegevens voor deze aanvraag.{" "}
                            <span aria-hidden="true" className="text-muted-foreground/40">*</span>
                          </label>
                        </div>
                        {errors.akkoord && (
                          <p id="err-akkoord" role="alert" className="mt-1 text-xs text-destructive">
                            {errors.akkoord}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <div className="pt-1">
                        <MetalButton
                          type="submit"
                          size="lg"
                          className="w-full justify-center"
                          disabled={submitting}
                        >
                          {submitting ? "Versturen…" : "Aanvraag versturen"}
                        </MetalButton>
                        {submitError && (
                          <p
                            role="alert"
                            className="mt-3 text-sm text-destructive"
                          >
                            {submitError}
                          </p>
                        )}
                      </div>
                    </div>
                  </fieldset>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
