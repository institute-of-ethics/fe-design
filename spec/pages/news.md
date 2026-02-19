# News & Updates Page

**Routes**: `/news`, `/news/[slug]`

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

---

## News Article Detail (`/news/[slug]`)

**Route**: `/news/[slug]`

**Purpose**: Full article view for a single news item. Reached from the News listing via card link.

**Navigation context**: Breadcrumbs: Home > News & Updates > [article title].

**Layout Structure**:
- **Breadcrumbs**: Home, News & Updates (href /news), current title (no href, aria-current="page").
- **Back link**: text-sm text-primary font-medium "← Back to News" linking to /news; mt-4.
- **Featured image**: If present; w-full max-h-[480px] object-cover rounded-lg mt-6.
- **Article header**: mt-8; [CardMeta](../components/ui-components.md#cardmeta) date · category (text-sm neutral-500); h1 title (font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-2); author (mt-2 text-sm neutral-600).
- **Body**: mt-8 prose max-w-3xl; richtext content rendered as HTML. Headings use font-heading. Links styled as primary.
- **Footer**: mt-12 pt-8 border-t border-neutral-200; [Button](../components/ui-components.md#button) outline size sm "← Back to News" href /news.

**Data**: `NewsArticle` by slug. 404 if not found.

**Components used**: Breadcrumbs, Button, CardMeta (styles applied inline).

**Responsive**: Single column; max-w-3xl for prose; image full-width and height-capped.
