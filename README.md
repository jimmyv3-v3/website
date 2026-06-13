# J. Versseput — website

Marketing/site project for J. Versseput. Clean Next.js starter — no design
decisions baked in yet. Build the brand and pages from scratch.

## Stack

- **Next.js 16** (App Router)
- **React 18** + **TypeScript** (strict)
- **Tailwind CSS** with CSS-variable design tokens (neutral baseline)
- **shadcn/ui** wired up (`components.json`) — add primitives on demand
- **framer-motion** for animation, **lucide-react** for icons
- **Vercel Analytics**

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project layout

```
app/                 App Router — routes, layouts, pages
  layout.tsx         Root layout + metadata (placeholder — fill in)
  page.tsx           Homepage (placeholder)
  globals.css        Tailwind + design tokens (the one place to theme)
components/
  ui/                Reusable primitives (shadcn-style: button, card, …)
  sections/          Page-level building blocks (hero, footer, …)
lib/
  utils.ts           cn() class-name helper
public/              Static assets (images, fonts, og, favicon)
tailwind.config.ts   Token → Tailwind mapping (neutral)
components.json      shadcn config for `npx shadcn@latest add <comp>`
```

## Adding UI

```bash
npx shadcn@latest add button card badge   # lands in components/ui
```

## Theming

All color/radius tokens live as CSS variables in `app/globals.css`
(`:root` + `.dark`). Change them there to give the site an identity — every
component picks them up automatically. Pick a font via `next/font` in
`app/layout.tsx` and point `--font-sans` at it.

## Conventions

See **CLAUDE.md** for structure rules and the workflow for building pages.
