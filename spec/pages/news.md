# News & Updates Page

**Route**: `/news`

**Purpose**: List press releases, announcements, and case competition updates. Users can filter by category and scan cards to open individual items (anchor or detail page).

**Navigation context**: Top-level nav "News & Updates". Breadcrumbs: Home > News & Updates.

---

## Layout Structure

- **Container**: max-w-9xl mx-auto; standard px; py-8 lg:py-12.
- **Breadcrumbs**: Home, News & Updates.
- **Page title**: h1 "News & Updates" (font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4).
- **Intro**: mt-6 text-lg text-neutral-600 max-w-3xl — mentions filter by category.
- **Filter**: mt-8; single [Select](../components/ui-components.md#select) — name "category", label "Category", options from article categories; className max-w-xs. Value drives filtered list.
- **Grid**: mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6. Each article: [Card](../components/ui-components.md#card) as="article" with [CardContent](../components/ui-components.md#card). Content: [CardMeta](../components/ui-components.md#cardmeta) (date · category), [CardTitle](../components/ui-components.md#cardtitle) as h2, [CardExcerpt](../components/ui-components.md#cardexcerpt), paragraph (mt-2 text-xs text-neutral-500) for author. Cards are not links in current implementation; can link to #id or detail route.

---

## Components Used

- [Breadcrumbs](../components/layout-components.md#breadcrumbs)
- [Select](../components/ui-components.md#select) (from Input)
- [Card](../components/ui-components.md#card), CardContent, CardTitle, CardExcerpt, CardMeta

---

## Visual Design

- Filter: One dropdown; compact (max-w-xs).
- Cards: Default Card variant; no image; meta on top, then title, excerpt, author. Neutral hierarchy; no accent except link if added.

---

## Responsive Behavior

- Grid: 1 column on mobile, 2 at md, 3 at lg.
- Filter and content stack vertically.

---

## Consistency

- Same page shell: Breadcrumbs, h1, intro. Filtering UI is similar to Publications (Select dropdowns) but single filter here.
