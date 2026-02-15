# Institute of Ethics — Website

Professional, responsive website for the Institute of Ethics built with Next.js 14 (App Router) and Tailwind CSS.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (headings), Inter (body) via next/font/google

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Structure

- `src/app/` — Routes and page components
- `src/components/layout/` — Header, Footer, Navigation, Breadcrumbs
- `src/components/ui/` — Button, Card, Input, SearchBar, Modal
- `src/components/sections/` — Hero, NewsSection, EventsSection, PublicationsGrid, TeamGrid, etc.
- `src/lib/data.ts` — Placeholder content and shared data structures

## Pages

- **Home** — Hero, research areas, events, publications, news, newsletter signup
- **About** — Vision, History, Team
- **Research** — Areas, Publications (filterable), Speaker Series
- **Education** — Programs and resources
- **Outreach** — Events, Symposium
- **News** — Article grid with category filter
- **Engage** — Newsletter signup, social links, partnership form
- **Contact** — Contact form, address, map placeholder

## Responsive Breakpoints

- Mobile: &lt; 640px
- Tablet: 640px – 1024px
- Desktop: &gt; 1024px

## Accessibility

- Skip link to main content
- Semantic HTML and ARIA where needed
- Keyboard navigation and focus styles
- Screen reader–friendly labels

## Deployment

### GitHub Pages (automated)

The site deploys to GitHub Pages on every push to `main` via GitHub Actions.

**One-time setup:** In the repository go to **Settings → Pages**. Under "Build and deployment", set **Source** to **GitHub Actions**.

**Live URL:** [https://institute-of-ethics.github.io/fe-design/](https://institute-of-ethics.github.io/fe-design/)

After pushing to `main`, the workflow builds the static site (with base path `/fe-design`) and deploys it. Check the **Actions** tab for build status; the site is usually live within 1–2 minutes.

For production environment variables, add them under **Settings → Secrets and variables → Actions** and reference in `.github/workflows/deploy.yml` if needed.

### Local / other hosting

Build and run locally:

```bash
npm run build
npm run start
```

For Google Drive hosting, use `npm run deploy` to build and create `static-site.zip` from the `out` folder, then upload and share as needed.

Set `NEXT_PUBLIC_SITE_URL` for production if using absolute URLs in metadata.

## Content and CMS

Placeholder content lives in `src/lib/data.ts`. Replace with a headless CMS or API when ready. Data shapes (Publication, Event, NewsArticle, TeamMember, ResearchArea) are defined for easy integration.
