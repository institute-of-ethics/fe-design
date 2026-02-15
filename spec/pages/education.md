# Education Page

**Route**: `/education`

**Purpose**: Present courses, workshops, and academic programs; link to learning resources. Target audience: students, faculty, practitioners.

**Navigation context**: Single top-level nav item; no children. Breadcrumbs: Home > Education.

---

## Layout Structure

- **Container**: max-w-9xl mx-auto; standard px; py-8 lg:py-12.
- **Breadcrumbs**: Home, Education.
- **Page title**: h1 "Education" (font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4).
- **Intro**: mt-6 text-lg text-neutral-600 max-w-3xl.
- **Section 1 — Programs & Offerings**: mt-12; aria-labelledby="programs-heading". h2 id="programs-heading" (font-heading text-2xl font-semibold text-neutral-900 mb-6). Grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 of [Card](../components/ui-components.md#card) (default variant, as="article"). Each card: [CardContent](../components/ui-components.md#card), [CardTitle](../components/ui-components.md#cardtitle) as h3, [CardExcerpt](../components/ui-components.md#cardexcerpt). No image; no link.
- **Section 2 — Learning Resources**: mt-12 py-8 border-t border-neutral-200; aria-labelledby="resources-heading". h2 id="resources-heading" (font-heading text-2xl font-semibold text-neutral-900 mb-4). Unordered list space-y-2; each item a link (text-primary hover:text-primary-dark font-medium) to syllabus, modules, partnerships (placeholder hrefs).

---

## Components Used

- [Breadcrumbs](../components/layout-components.md#breadcrumbs)
- [Card](../components/ui-components.md#card), CardContent, CardTitle, CardExcerpt

---

## Visual Design

- Programs: Card default style (white, border, shadow); no accent. Text hierarchy: title (heading font), excerpt (neutral-600).
- Resources: Simple list of text links; no cards.

---

## Responsive Behavior

- Programs grid: 1 column on mobile, 2 at md, 3 at lg.
- Single column for resources list.
