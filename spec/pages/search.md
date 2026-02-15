# Search Page

**Route**: `/search` (query via `?q=...`)

**Purpose**: Display search results for site-wide search. User reaches this page after submitting the header [SearchBar](../components/ui-components.md#searchbar); query is passed in URL. Current implementation shows placeholder copy; results can be wired to a search API later.

**Navigation context**: No breadcrumbs (search is utility, not in main nav). Header search submits to /search?q=...

---

## Layout Structure

- **Container**: max-w-4xl mx-auto (narrower than standard 9xl); px-4 py-12.
- **Title**: h1 "Search" (font-heading text-2xl font-semibold text-neutral-900).
- **Message**: mt-2 text-neutral-600. If query present: `Results for "{q}" (placeholder – integrate with search API later).` If no query: "Enter a search term above."
- **Loading**: Wrapped in Suspense; fallback: same container with "Loading..." (font-body text-neutral-600).

---

## Components Used

- None from layout or UI library. Page uses search params (useSearchParams) for q; content is text-only placeholder.

---

## Visual Design

- Minimal: heading + one paragraph. No filters, no result cards in current spec. When results are implemented: consider reusing Card or list patterns from News/Publications; keep max-w-4xl or expand to 9xl for result list.

---

## Responsive Behavior

- Single column; narrow container. No layout changes at breakpoints in current placeholder.

---

## Consistency

- Typography and spacing follow [design system](../00-design-system.md). Search entry point is header SearchBar; this page is the results destination.
