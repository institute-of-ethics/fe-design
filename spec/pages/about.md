# About Section Pages

**Routes**: `/about`, `/about/vision`, `/about/history`, `/about/team`

**Purpose**: Present the institute's vision, history, and team. About overview links to three sub-pages; each sub-page has focused content.

**Navigation context**: Main nav "About" with children Vision, History, Team. Breadcrumbs: Home > About [> sub-page].

---

## About Overview (`/about`)

**Layout**: Single column; max-w-9xl; standard padding. Breadcrumbs (Home, About). Page title h1 "About the Institute". Intro paragraph (text-lg text-neutral-600 max-w-3xl). Three cards in grid (grid-cols-1 md:grid-cols-3 gap-8).

**Cards**: Each card p-6 border border-neutral-200 rounded-lg. Content: h2 (font-heading text-xl font-semibold text-neutral-900), short description (mt-2 text-neutral-600), Button outline size sm — "Learn more" / "Meet the team" linking to /about/vision, /about/history, /about/team.

**Components used**: [Breadcrumbs](../components/layout-components.md#breadcrumbs), [Button](../components/ui-components.md#button).

---

## Vision (`/about/vision`)

**Layout**: Breadcrumbs (Home, About, Vision). h1 "Our Vision". Prose block max-w-3xl: intro paragraphs (text-lg text-neutral-600), then "Our Values" (h2 font-heading text-xl font-semibold), unordered list (list-disc pl-6 text-neutral-600), then "Impact Areas" (h2, paragraph).

**Visual**: Standard content page; no cards. Typography and spacing from [design system](../00-design-system.md).

**Components used**: Breadcrumbs only.

---

## History (`/about/history`)

**Layout**: Breadcrumbs (Home, About, History). h1 "Our History". Intro paragraph. Vertical timeline: relative container with left border (absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200). List items pl-12; each has a circular badge (absolute left-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-medium) showing shortened year (e.g. "20" for 2020); then h2 title and description.

**Visual**: Timeline conveys chronology; primary used for year badges.

**Components used**: Breadcrumbs only.

---

## Team (`/about/team`)

**Layout**: Breadcrumbs (Home, About, Team). h1 "Our Team". Intro paragraph. [TeamGrid](../components/section-components.md#teamgrid) with members; title prop empty so section heading is not repeated. Grid: 1 col → sm:2 → lg:3; each card uses default Card (photo placeholder aspect-square bg-neutral-200, name as CardTitle h3, title in primary, bio line-clamp-4).

**Components used**: Breadcrumbs, TeamGrid (and Card/CardContent/CardTitle from UI).

---

## Responsive Behavior

- All pages: container padding and max-width consistent; grids collapse to one column on small screens.
- About overview: 3 cards stack on mobile.
- Team: TeamGrid responsive as per section-components spec.

---

## Consistency

- All use same page shell: Breadcrumbs, h1 (text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4), intro (mt-6 text-lg text-neutral-600 max-w-3xl).
- Sub-pages use consistent breadcrumb depth: Home > About > [current].
