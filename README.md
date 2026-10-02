# Joint Bricks

A premium commercial real-estate platform focused on structured participation through property-specific SPVs.

## Overview

Joint Bricks is the brand of:

**Joint Bricks Propshare Private Limited**  
- **CIN:** U68100RJ2025PTC109627  
- **Incorporated:** 15 December 2025  

The platform website is an informational, research, and inquiry-focused public resource. It does not operate as an online investment transaction platform, brokerage exchange, or automated investment portal.

## About Joint Bricks

Joint Bricks identifies, curates, and structures fractional participation in high-quality commercial real estate across India:

- **Asset Class Focus:** Institutional commercial real estate, primarily premium retail and high-street commercial assets.
- **Target Geographies:** Mumbai, Delhi NCR, and Pune.
- **Lease Profiles:** Properties are primarily pre-leased or tenanted prior to acquisition, providing immediate operational visibility.
- **Property-Specific SPV Structure:** Each property is held in an independent Special Purpose Vehicle (SPV) incorporated as a private limited company under the Companies Act, 2013.
- **Legal Title:** The applicable SPV holds 100% legal title and ownership of the underlying property.
- **Investor Participation:** Investors participate by acquiring equity shares and statutory instruments in the specific SPV owning the target asset.
- **Minimum Allocation:** ₹10 lakh minimum participation policy per property (company policy).
- **Investor Economics:** Potential economics may include periodic rental distributions and long-term capital appreciation upon asset liquidation or share transfer. Rental yields and capital appreciation are market-dependent and not guaranteed.
- **Brand Terminology:** The term **"Brick"** is a brand metaphor for a structured participation unit within an SPV and does not represent a direct physical title unit or undivided deed.

## Website Purpose

The website serves strictly to:

- Inform prospective participants and institutions about the business model and governance.
- Educate investors on commercial real estate economics, leasing fundamentals, and risks.
- Explain the legal and operational mechanics of property-specific SPV ownership.
- Detail the property-selection and due-diligence framework.
- Publish proprietary market research, whitepapers, and commercial sector perspectives.
- Present illustrative pre-launch and sample opportunity dossiers.
- Allow institutional and individual participants to submit inquiries and request consultation.

### Public Experience Scope

The public website intentionally does **not** provide:
- Investor login or registration systems
- Investor portal or account administration
- Investor portfolio dashboard
- Online payment processing, checkout, or monetary transaction capability

**Primary Call to Action:** Enquire Now

## Public Routes

| Route | Page | Purpose & Scope |
| :--- | :--- | :--- |
| `/` | Home | Platform positioning, institutional thesis, featured sample asset overview, process framework, and compliance safeguards. |
| `/opportunities` | Opportunities | Catalog of property-specific opportunities with status filtering (Pre-Launch, Due Diligence, Fully Funded). |
| `/opportunities/sample-retail-mumbai` | Opportunity Detail | In-depth asset dossier showing property specifications, tenant profile, lease terms, financial breakdown, and due diligence verification. |
| `/how-it-works` | How It Works | End-to-end institutional workflow: property sourcing, SPV incorporation, due diligence, conveyance, and asset management. |
| `/why-joint-bricks` | Why Joint Bricks | Core platform advantages: retail commercial focus, institutional tenant selection, asset-backed equity, and comparative analysis. |
| `/research` | Research & Perspectives | Industry research papers, market commentary, and retail real estate educational guides. |
| `/about` | About Us | Company background, leadership philosophy, corporate governance, and corporate identity. |
| `/faq` | FAQs | Structured question-and-answer library covering SPV mechanics, company policy minimums, liquidity terms, and taxation. |
| `/contact` | Advisory & Inquiries | Consultation inquiry form, direct coordination channels, and institutional dialogue requests. |
| `/legal` | Legal & Disclosures | Regulatory positioning, detailed risk disclosures, non-REIT affirmation, and statutory corporate information. |

## Technology Stack

The platform is built as a modern, high-performance static client application:

- **Core Framework:** [React 19](https://react.dev/) (`react`, `react-dom` v19.2.8)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (~6.0.2)
- **Build System & Dev Server:** [Vite 8](https://vite.dev/) (`vite` v8.2.2)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`tailwindcss`, `@tailwindcss/vite` v4.3.3)
- **Client Routing:** [React Router v7](https://reactrouter.com/) (`react-router-dom` v7.18.3)
- **Animation System:** [Framer Motion](https://www.framer.com/motion/) (`framer-motion` v13.2.0)
- **Iconography:** [Lucide React](https://lucide.dev/) (`lucide-react` v1.41.0)
- **Linter & Code Quality:** [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (`oxlint` v1.79.0)

No backend server, database, authentication provider, or API layer is used by the public website.

## Project Structure

```
├── public/
│   ├── images/              # High-resolution architectural photography
│   ├── favicon.svg          # Brand vector favicon
│   ├── icons.svg            # Static icon symbol definitions
│   ├── robots.txt           # Search crawler directives
│   ├── sitemap.xml          # XML sitemap indexing all public routes
│   └── _redirects           # SPA redirect rules for static hosting
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI widgets, cards, dialogs, SEO & checklists
│   │   └── layout/          # Header, navigation, and persistent Footer
│   ├── data/                # Structured static data (properties, FAQs)
│   ├── pages/               # Route-level page components
│   ├── App.tsx              # Application shell and route declarations
│   ├── index.css            # Global CSS, typography imports, and theme tokens
│   └── main.tsx             # DOM mount and application bootstrap
├── index.html               # Entry HTML with meta tags, Google Fonts, and JSON-LD schema
├── package.json             # Project dependencies and operational scripts
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel SPA rewrite configuration
└── vite.config.ts           # Vite bundler plugins and settings
```

## Local Development

### Prerequisites

- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### Production Build

Type-check and compile optimized static assets to `/dist`:

```bash
npm run build
```

### Linting

Run Oxlint to check code quality and adherence to React/TypeScript rules:

```bash
npm run lint
```

## Environment Variables

Environment variables are optional. An example configuration template is available in `.env.example`:

```bash
# Analytics Tracking Configuration (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Environment Target
VITE_APP_ENV=production
```

> **Note:** No application backend or external API is required for the current public website.

## Business & Regulatory Notes

- **Non-REIT Status:** Joint Bricks is **NOT** a Real Estate Investment Trust (REIT) or Small and Medium REIT (SM-REIT).
- **Regulatory Standing:** Joint Bricks is **NOT** registered, recognized, or approved by the Securities and Exchange Board of India (SEBI) as an SM-REIT or collective investment scheme.
- **Minimum Investment Policy:** The ₹10 lakh threshold is an internal company policy guideline per property, not a statutory SM-REIT minimum.
- **Yield Screening Benchmark:** Any reference to 5% p.a. reflects an acquisition-stage gross rental-yield screening benchmark used during property evaluation, not a promised or guaranteed investor return.
- **Holding Period:** The minimum recommended holding horizon is 1 year. No early exit mechanisms exist prior to 1 year.
- **Transferability:** After 1 year, share transfers or secondary liquidations remain subject to the Articles of Association (AoA) of the applicable SPV, board approval, and statutory private company regulations.
- **Sample Structures:** Currently displayed properties and opportunities represent pre-launch and sample underwriting structures. They do not constitute an active public offering of securities.
- **Risk Disclosure:** Rental yields, lease renewals, and capital appreciation are commercial variables subject to market cycles, tenant default, vacancy, and macroeconomic conditions. Returns are not guaranteed.

## Design & Experience

The visual system is engineered around an architectural, editorial, and institutional design language:

- **Typography:** Refined editorial typography combining classical serif headings (*Cinzel*, *Cormorant Garamond*, *DM Serif Display*) with clear modernist sans-serif interfaces (*Inter*, *Plus Jakarta Sans*) and technical metadata fonts (*JetBrains Mono*).
- **Architectural Grid:** Structured geometry, balanced proportional layouts, and clear typographic hierarchy.
- **Cadastral Elements:** Architectural stamps, parcel identification badges, and technical metadata tags.
- **Color Palette:** Warm architectural paper background (`#FAF8F5`), deep obsidian surfaces (`#14171B`), with restrained warm brass/gold accents (`#BFA272`).
- **Responsive Layout:** Tailored layout states engineered across mobile, tablet, and wide desktop viewports.
- **Accessibility & Motion Preferences:** Built-in support for `prefers-reduced-motion` across all animated elements.

## Motion & Interaction

Interactive feedback is intentionally restrained, cinematic, and performance-conscious:

- **Page Transitions:** Coordinated mount and view transitions between route changes.
- **Scroll Reveals:** Intersection-observer-driven section entrances and stat counting.
- **Image Reveal Effects:** Controlled scale and opacity reveals on architectural photography.
- **Navigation Response:** Scroll-linked header background elevation and mobile overlay transitions.
- **Drawer Animations:** Smooth slide-over transitions for the Expression of Interest (EOI) drawer.
- **Micro-Interactions:** Subtle border, shadow, and elevation hover states across interactive cards.
- **Reduced-Motion Compliance:** Respects operating system motion reduction preferences, instantly rendering static final states when requested.

## Inquiries

All client interactions on the public platform operate through private advisory inquiries:

- Visitors may request detailed investment memorandums, schedule private consultations, or express non-binding interest via the **Expression of Interest (EOI)** drawer and the `/contact` form.
- Submission of an inquiry initiates direct communication with the Joint Bricks advisory team.
- Inquiries do not constitute binding commitments, share purchase agreements, or online transactions.

## Deployment

The website builds to standard static HTML, CSS, and JavaScript bundles ready for immediate distribution across any Content Delivery Network (CDN) or static hosting provider:

- **Vercel:** Single-Page Application rewrites configured via [`vercel.json`](./vercel.json).
- **Netlify / Static CDN:** Route fallback configured via [`public/_redirects`](./public/_redirects).
- **Static Output:** Production builds are generated directly into the `dist/` folder via `npm run build`.

## Search Engine Optimization (SEO)

- **Metadata Architecture:** Dynamic title, meta description, and keyword injection per route via the `<SEO />` component.
- **Canonical URLs:** Automated canonical link binding for all navigable pages.
- **Sitemap & Robots:** Search crawler discoverability enabled via `public/sitemap.xml` and `public/robots.txt`.
- **Structured Data:** Schema.org JSON-LD scripts embedded for the core `Organization` identity and site-wide `WebSite` SearchAction specification.
- **Social Graph Sharing:** Pre-configured Open Graph (`og:*`) and Twitter Card (`twitter:*`) tags for consistent preview rendering across messaging and social platforms.

## Development Guidelines

- **Fact Fidelity:** Preserve approved corporate facts, CIN, incorporation details, and governance disclosures.
- **Financial Compliance:** Do not introduce guaranteed yield claims, projected IRR assurances, or speculative financial promises.
- **Scope Discipline:** Do not introduce customer authentication, user accounts, wallet connections, or payment gateways without explicit institutional requirements.
- **Responsiveness:** Maintain seamless usability across small mobile screens, tablets, and wide-format monitors.
- **Motion Restraint:** Ensure all interactive animations respect the user's `prefers-reduced-motion` settings.
- **Quality Gates:** Verify code cleanliness with `npm run lint` and `npm run build` prior to committing updates.
- **Integrity:** Never introduce fictitious executive profiles, simulated investor testimonials, fake properties, or unsupported regulatory endorsements.

## License

This project is licensed under the [MIT License](LICENSE) — see the [LICENSE](LICENSE) file for details.

Copyright (c) 2026 Joint Bricks Propshare Private Limited.
