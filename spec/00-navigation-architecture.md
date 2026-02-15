# Navigation Architecture

Site structure, navigation hierarchy, and how users move between pages.

## Navigation Hierarchy

```
Home                    → /
About                   → /about
  ├── Vision            → /about/vision
  ├── History           → /about/history
  └── Team              → /about/team
Research                → /research
  ├── Areas of Research → /research/areas
  ├── Publications      → /research/publications
  └── Speaker Series     → /research/speaker-series
Education               → /education
Outreach                → /outreach
  ├── Events            → /outreach/events
  └── Symposium         → /outreach/symposium
News & Updates          → /news
Engage                  → /engage
Contact                 → /contact
```

**Search** is available from the header and resolves to `/search` (or equivalent search results).

## Page Relationships

- **Top-level**: Home, About, Research, Education, Outreach, News & Updates, Engage, Contact
- **About group**: About (overview) plus Vision, History, Team as sub-pages
- **Research group**: Research (overview) plus Areas of Research, Publications, Speaker Series
- **Outreach group**: Outreach (overview) plus Events, Symposium

Single-level items (Education, News & Updates, Engage, Contact) have no sub-pages in the nav.

## Breadcrumb Logic

- **Home**: No breadcrumbs (or optional "Home" only)
- **Section overview** (e.g. `/about`): Home > About
- **Sub-page** (e.g. `/about/team`): Home > About > Team
- **Same pattern** for Research and Outreach sub-pages

Current implementation: Breadcrumbs component receives an array of `{ label, href? }`. Last item is current page (no href, `aria-current="page"`). Separator is "/". See [Layout Components](components/layout-components.md#breadcrumbs).

## Desktop Navigation (lg and up)

- **Placement**: Header, right side; logo left
- **Behavior**: Horizontal list of links. Items with children show a dropdown on hover
- **Parent link**: Button or link that opens dropdown; chevron rotates on hover
- **Dropdown**: Positioned below parent; white background, border, shadow-card-hover; min-width 180px; list of child links
- **Active state**: Current page or any child current → parent and current link use primary color and neutral-100 background
- **Inactive**: Neutral-700 text; hover → primary text and neutral-100 background
- **Visibility**: Navigation hidden below lg; see Mobile below

Reference: [Layout Components — Navigation](components/layout-components.md#navigation).

## Mobile Navigation (below lg)

- **Trigger**: Hamburger icon in header; toggles "Open menu" / "Close menu"; `aria-expanded` and `aria-controls` point to menu panel
- **Panel**: Full-width below header; white background; border-bottom; shadow; scrollable if many items
- **Items**: Vertical list. Top-level links go directly to page. Items with children show a chevron; tap to expand/collapse sub-links
- **Sub-links**: Indented (e.g. pl-4); no href on parent when it has children
- **Active state**: Current page or section (pathname match) uses primary color and neutral-50 background
- **Close**: Tapping a link closes the menu; close icon toggles panel

Reference: [Layout Components — MobileMenu](components/layout-components.md#mobilemenu).

## Header and Search

- **Search**: Icon button in header (next to nav on desktop, next to hamburger on mobile). Toggle opens an inline SearchBar below the header row. No separate search page required for the bar itself; results may live on `/search`.
- **Header**: Sticky; white background; bottom border neutral-200; 1px accent strip at very top. Height h-16 (lg:h-20). Logo links to Home.

Reference: [Layout Components — Header](components/layout-components.md#header).

## Footer

- **Structure**: Four columns on large screens (1 col on mobile, 2 at md, 4 at lg). Column 1: logo and tagline. Column 2: Site Links (first 6 flat links). Column 3: Connect (Newsletter, Contact, social icons). Column 4: Newsletter CTA and "Join Mailing List" button
- **Style**: Primary background; neutral-300 text; 1px accent strip at top; accent for "Join Mailing List" button and social hover
- **Bottom bar**: Border-top (accent/30); copyright line; neutral-500 text

Reference: [Layout Components — Footer](components/layout-components.md#footer).

## Consistency and Maintenance

- Nav structure is defined in a single data source (e.g. `navLinks`). Adding/removing a top-level or sub-item is done there; Header, Footer, Navigation, MobileMenu, and Breadcrumbs consume it.
- Adding a new top-level section: add entry to nav data, add route and page spec, update this doc and [spec/README.md](README.md).
- Removing a section: remove from nav data, remove or redirect route, update specs.
