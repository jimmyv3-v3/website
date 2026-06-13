# CLAUDE.md — working agreement for this repo

Orientation and conventions for any AI agent building the J. Versseput website.
This is a **fresh, unbranded** Next.js starter. There is intentionally no design
system yet — invent J. Versseput's identity here, don't import one from elsewhere.

## What this repo is (and isn't)

- It IS: a clean, navigable Next.js 16 + TypeScript + Tailwind + shadcn scaffold.
- It is NOT: a clone of any other company's site. No carried-over branding,
  colors, copy, or components. Start visual decisions from zero.

## What J. Versseput does (services)

J. Versseput Vastgoedonderhoud B.V. — glas-, gevel- en vastgoedonderhoud.
Kernwaarden: betrouwbaar, vakmanschap, kwaliteit, duurzaam. Werkzaamheden:

- Glasbewassing
- Gevelreiniging
- Zonnepanelenreiniging
- Dakgootreiniging
- Hogedrukreiniging van bestrating en terreinen
- Schoonmaak van algemene ruimtes
- Opleveringsschoonmaak
- Specialistische reiniging
- Periodiek vastgoedonderhoud

Use this list as the source of truth for service pages/sections; keep copy in
Dutch, professional, u-vorm.

## Stack & commands

- Next.js 16 App Router, React 18, TypeScript (strict), Tailwind, shadcn/ui.
- `npm run dev` (localhost:3000) · `npm run build` · `npm run lint`.
- Add primitives: `npx shadcn@latest add <component>` → `components/ui/`.

## Where things go

| Need                                   | Put it in              |
| -------------------------------------- | ---------------------- |
| A route / page                         | `app/<route>/page.tsx` |
| Reusable primitive (button, input…)    | `components/ui/`        |
| Page section (hero, feature grid…)     | `components/sections/`  |
| Helpers, hooks, data                   | `lib/`                  |
| Images, fonts, og, favicon             | `public/`               |
| Design tokens (colors, radius)         | `app/globals.css`       |

- Import alias is `@/*` → repo root (e.g. `import { cn } from "@/lib/utils"`).
- Use `cn()` for conditional/merged Tailwind classes.

## Design tokens — the one place to theme

Color and radius are CSS variables in `app/globals.css` (`:root` + `.dark`),
mapped to Tailwind utilities in `tailwind.config.ts`. Use semantic classes
(`bg-background`, `text-foreground`, `bg-primary`, `text-muted-foreground`,
`border-border`) — never hardcode hex values in components. To rebrand, edit the
variables in one file. Set the font via `next/font` in `app/layout.tsx` and aim
`--font-sans` at it.

## How to build a good page here

1. **Content first.** Get the real copy/structure before styling. Sketch
   sections as plain semantic HTML, then style.
2. **Compose sections.** A page = a stack of `components/sections/*`. Keep
   sections self-contained and presentational; pass data via props.
3. **Reuse primitives.** Reach for `components/ui/*` (shadcn) before hand-rolling
   buttons/cards/inputs. Add the shadcn component if it's missing.
4. **Semantic + accessible.** Real landmarks (`header`/`main`/`nav`/`footer`),
   one `h1` per page, alt text, labelled controls, visible focus states.
5. **Responsive by default.** Mobile-first; layout with fl/grid + Tailwind
   breakpoints. Verify at narrow and wide widths.
6. **Motion with restraint.** framer-motion for entrance/scroll accents; respect
   `prefers-reduced-motion`; never block content on animation.
7. **Performance.** `next/image` for images, `next/font` for fonts, server
   components by default — add `"use client"` only when you need interactivity.
8. **SEO.** Per-route `metadata` exports (title/description/canonical/OG). Keep
   `app/layout.tsx` metadata as the global default.

## Copy & writing rules

- **Headings only**: use `h1` (title) and `h2` (subtitle/section). No eyebrows /
  kickers / overline labels above headings.
- **No dashes in sentences.** Don't use `-` (or `–`/`—`) to join or break a
  clause. Rewrite as a full, flowing sentence instead.
- **No choppy fragments.** Avoid "few words. then a few more words." style.
  Write complete, well-formed sentences that read naturally.
- Keep copy clear and human; prefer one good sentence over several stubs.

## Conventions

- TypeScript strict — type props, avoid `any`.
- Server Components by default; `"use client"` only when needed (state, effects,
  browser APIs, event handlers).
- Keep components focused; extract a section once a page file gets long.
- Match the style of existing files. Run `npm run lint` before finishing.
- Don't add dependencies for trivial things; prefer the stack already here.

## Context & inspiration

Bedrijfscontext en research staan in [`context/`](context/) — start daar via
[`context/README.md`](context/README.md). Bestanden `00`–`06` beschrijven J.
Versseput zelf (diensten, doelgroep, historie, bestaande site-content, SEO).
Wanneer je inspiratie of best-practice-context nodig hebt voor structuur, copy,
CTA's, formulieren, trust-elementen, design of lokale SEO, lees
[`context/07-website-research-inspiratie.md`](context/07-website-research-inspiratie.md):
gebundelde research naar wat de beste glazenwasser-/dienstverlenersites doen.
Het is **generieke inspiratie** — neem er geen merk/branding of letterlijke
copy van een concurrent uit over; vertaal patronen naar J. Versseput's eigen
identiteit.

## When unsure

Ask about brand/content direction rather than inventing a permanent visual
identity silently. Placeholders are fine — mark them clearly (`TODO`).
