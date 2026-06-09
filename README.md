# SWIG

The public site for SWIG, hospitality and event logistics, working across the UK from a base in Islington, London.

Built as a single, long-form scrolling experience: **Arrival → Orientation → Understanding → Confidence → Vision → Contact.** Near-monochrome, architectural typography, restrained motion, and a fixed "operations dossier" datum rail with a live London clock. Engineered to load fast and feel like software rather than marketing.

## Stack

- **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS**
- **Geist** + **Geist Mono** (self-hosted via the `geist` package, no network font fetch)
- Programmatic favicon, Apple touch icon and Open Graph image via `next/og`
- Metadata, JSON-LD `Organization` structured data, `robots`, `sitemap`, `manifest` all generated at build time
- Every route prerenders as static content

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a Git repository (GitHub / GitLab / Bitbucket).
2. In Vercel, **New Project → Import** the repository. The framework preset (Next.js) is detected automatically, so no configuration is required.
3. Deploy, then add **swig.info** under **Project → Settings → Domains** and point the domain's DNS at Vercel as instructed.

`metadataBase` is already set to `https://swig.info`, so Open Graph and canonical URLs resolve correctly in production.

## Before you go live: details to confirm

These should be confirmed against the live business before launch:

- **Enquiry inboxes** (`lib/site.ts` `cards`): the contact section routes to `hello@`, `bookings@`, `accounts@` and `ben@` on `swig.info` via `mailto:` links with prefilled subjects. No address is shown as text. Confirm all four inboxes exist and route correctly.
- **Phone** (`lib/site.ts` `phone`): `020 8087 4616` (`tel:02080874616`) appears in the navigation, contact section and footer. Confirm the line is live and answered.
- **Company details** (`lib/site.ts`): `SWIG Studio Ltd`, Company No. `17267035`, headquartered Islington, London, operating nationally. The number appears in the footer and in the structured data. Add the registered office address if you want it shown publicly.
- **what3words** (`lib/site.ts` `what3words`): hero metadata links to `https://what3words.com/data.them.double`. Confirm this is the intended location reference.
- **Capability and process copy** (`lib/site.ts`): written to be accurate and understated. Review against the services SWIG actually offers and adjust wording as needed.

## Editing content

Almost all copy and structure lives in **`lib/site.ts`** (site constants, company details, phone, capabilities, process steps, specs, enquiry cards, navigation). Editing that file updates the corresponding sections, navigation, structured data and metadata together.

The design system (tokens, layout, motion) lives in **`app/globals.css`**. `preview.html` at the repository root is a standalone single-file render of the design for quick reference.
