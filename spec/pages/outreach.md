# Outreach Section Pages

**Routes**: `/outreach`, `/outreach/events`, `/outreach/symposium`

**Purpose**: Promote events, annual symposium, and community engagement. Overview links to Events and Symposium.

**Navigation context**: Main nav "Outreach" with children Events, Symposium. Breadcrumbs: Home > Outreach [> sub-page].

---

## Outreach Overview (`/outreach`)

**Layout**: Breadcrumbs (Home, Outreach). h1 "Outreach". Intro paragraph (max-w-3xl). Two cards in grid (grid-cols-1 md:grid-cols-2 gap-8). Each: p-6 border border-neutral-200 rounded-lg; h2 (font-heading text-xl font-semibold text-neutral-900), description (mt-2 text-neutral-600), [Button](../components/ui-components.md#button) outline size sm — "View events" to /outreach/events, "Symposium details" to /outreach/symposium.

**Components used**: [Breadcrumbs](../components/layout-components.md#breadcrumbs), Button.

---

## Events (`/outreach/events`)

**Layout**: Breadcrumbs (Home, Outreach, Events). h1 "Events". Intro paragraph. List: mt-12 space-y-4; each event rendered with [EventCard](../components/section-components.md#eventcard). EventCard: date badge, optional image, title, description, "Register / Learn more →" link.

**Components used**: Breadcrumbs, EventCard.

**Visual**: Same EventCard design as Home EventsSection (primary date badge, optional thumbnail, accent CTA). Vertical stack; no sidebar.

---

## Symposium (`/outreach/symposium`)

**Layout**: Breadcrumbs (Home, Outreach, Symposium). h1 "Annual Symposium". Intro paragraph. **Section 1 — Symposium 2025**: mt-12; aria-labelledby="symposium-2025". h2 (font-heading text-2xl font-semibold text-neutral-900). Paragraph (mt-4 text-neutral-600). [Button](../components/ui-components.md#button) primary size md "Get notified when registration opens" (placeholder href). **Section 2 — Past Symposiums**: mt-12 pt-8 border-t border-neutral-200; aria-labelledby="past". h2 "Past Symposiums". Unordered list mt-4 space-y-4; each item: strong year, then description text.

**Components used**: Breadcrumbs, Button.

**Visual**: Two clear sections; primary CTA in first section; list for past events (no cards).

---

## Responsive Behavior

- Overview: two cards stack on mobile.
- Events: EventCards stack; internal layout of EventCard responsive (date badge + content; image hidden on small in some implementations).
- Symposium: Single column; list and CTA full width within container.

---

## Consistency

- Same shell: Breadcrumbs, h1, intro (mt-6 text-lg max-w-3xl).
- Breadcrumbs: Home > Outreach > [Events | Symposium] on sub-pages.
