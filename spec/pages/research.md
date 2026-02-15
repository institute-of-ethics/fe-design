# Research Section Pages

**Routes**: `/research`, `/research/areas`, `/research/publications`, `/research/speaker-series`

**Purpose**: Showcase research areas, publications (filterable), and speaker series/collaborations. Research overview links to three sub-pages.

**Navigation context**: Main nav "Research" with children. Breadcrumbs: Home > Research [> sub-page].

---

## Research Overview (`/research`)

**Layout**: Breadcrumbs (Home, Research). h1 "Research". Intro paragraph (max-w-3xl). Three cards in grid (grid-cols-1 md:grid-cols-3 gap-8). Each card: p-6 border border-neutral-200 rounded-lg; h2 (font-heading text-xl font-semibold text-neutral-900), description (mt-2 text-neutral-600), Button outline size sm — "Explore areas", "View publications", "Learn more" to /research/areas, /research/publications, /research/speaker-series.

**Components used**: [Breadcrumbs](../components/layout-components.md#breadcrumbs), [Button](../components/ui-components.md#button).

---

## Areas of Research (`/research/areas`)

**Layout**: Breadcrumbs (Home, Research, Areas of Research). h1 "Areas of Research". Intro paragraph. Grid grid-cols-1 md:grid-cols-2 gap-8: each area in p-6 lg:p-8 border border-neutral-200 rounded-lg bg-white hover:shadow-card-hover transition-shadow. Content: h2 (font-heading text-xl font-semibold text-neutral-900), description (mt-4 text-neutral-600). No link; informational cards.

**Components used**: Breadcrumbs only.

---

## Publications (`/research/publications`)

**Layout**: Breadcrumbs (Home, Research, Publications). h1 "Publications". Intro mentioning filter and PDFs. **Filters**: mt-8 flex flex-wrap gap-4; three [Select](../components/ui-components.md#select) dropdowns — Year, Topic, Type — each min-w-[120px] or min-w-[160px]. **Results**: mt-8; list of publication rows. Empty state: "No publications match the selected filters." (text-neutral-600).

**Publication row**: article py-6 border-b border-neutral-200 last:border-0. Flex flex-col sm:flex-row gap-4 sm:gap-6. Thumbnail: shrink-0 w-full sm:w-28 h-[140px] sm:h-[180px] rounded overflow-hidden border border-neutral-200 bg-neutral-100; image object-cover. Content: meta line (date · type · topic) text-sm text-neutral-500; h2 title (font-heading text-lg font-semibold text-neutral-900); authors (text-sm text-neutral-600); abstract (mt-2 text-neutral-600); "Download PDF" link (mt-2 text-sm font-medium text-primary) if pdfUrl.

**Components used**: Breadcrumbs, Select (from Input), custom PublicationRow (not a shared component; page-level).

**Visual**: Filter bar horizontal; results stack; thumbnail left on desktop, full-width on mobile.

---

## Speaker Series (`/research/speaker-series`)

**Layout**: Breadcrumbs (Home, Research, Speaker Series). h1 "Speaker Series & Collaborations". Intro paragraph. List: space-y-8; each item p-6 border border-neutral-200 rounded-lg bg-white. Content: date (text-sm text-neutral-500), h2 title (font-heading text-xl font-semibold text-neutral-900 mt-1), description (mt-2 text-neutral-600).

**Components used**: Breadcrumbs only.

---

## Responsive Behavior

- Overview: three cards stack on mobile.
- Areas: two columns from md.
- Publications: filters wrap; each row stacks on mobile (image full width).
- Speaker Series: list remains vertical.

---

## Consistency

- Same page shell pattern: Breadcrumbs, h1, intro (mt-6 text-lg max-w-3xl).
- Sub-pages: Home > Research > [current] in breadcrumbs.
