# Home Page

**Route**: `/`

**Purpose**: Landing page that presents the institute as a thought leader. Communicates mission, highlights research areas, news, events, publications, and invites engagement (newsletter). Drives users to key sections.

**Navigation context**: Top-level; no breadcrumbs.

---

## Layout Structure

Vertical stack of full-width sections. No outer page title; Hero acts as the main headline.

1. **Hero** — Full-viewport; mission headline and CTA
2. **MissionStatement** — Two-column mission quote and image; id="mission" for scroll target
3. **HighlightsSection** — Research areas grid (4 cards)
4. **NewsSection** — Featured news + list; "View all news" to /news
5. **EventsSection** — Upcoming events list; "View all events" to /outreach/events
6. **PublicationsGrid** — Featured publications; "View all publications" to /research/publications
7. **NewsletterSignup** — Mailing list + social follow

---

## Components Used

- [Hero](../components/section-components.md#hero): title, subtitle, ctaLabel "Engage with Us", ctaHref /engage, backgroundImage
- [MissionStatement](../components/section-components.md#missionstatement): missionText, imageSrc, imageAlt, learnMoreHref /about/vision
- [HighlightsSection](../components/section-components.md#highlightssection): areas (research areas), title "Areas of Research"
- [NewsSection](../components/section-components.md#newssection): articles, maxItems 4, featuredImage
- [EventsSection](../components/section-components.md#eventssection): events, maxItems 3, featuredEventImage
- [PublicationsGrid](../components/section-components.md#publicationsgrid): publications, maxItems 3
- [NewsletterSignup](../components/section-components.md#newslettersignup): default title and subtitle

---

## Visual Design

- **Backgrounds**: Hero uses image + gradient then primary; Mission and Highlights use warm-ivory; News and Publications use white; Events uses warm-gray; Newsletter uses warm-ivory with dot pattern.
- **Hierarchy**: Single h1 in Hero; section headings are h2 with heading-display and primary color.
- **CTAs**: Primary CTA in Hero (accent button); outline "View all" buttons in News, Events, Publications; Newsletter "Sign up" primary.

---

## Responsive Behavior

- Hero title and subtitle scale (text-4xl up to xl:text-7xl); content remains left-aligned with max-width.
- MissionStatement: stacked on mobile (image then content); two columns from lg.
- HighlightsSection: 1 col → md:2 → lg:4.
- NewsSection: Featured article spans 2 cols on lg; list in 1 col.
- EventsSection and PublicationsGrid: Single column to multi-column as per component specs.
- NewsletterSignup: Centered; form stacks on small screens (flex-col), row on sm.

---

## Key Visual Elements

- **Hero**: Large serif title, white text on dark overlay, scroll hint to #mission.
- **Mission**: Accent left border on blockquote; "Learn more about us" link.
- **Highlights**: Cards with accent top border; "Learn more →" in accent.
- **News**: One large featured card with image; smaller cards for rest.
- **Events**: Date badges (primary), optional thumbnails, "Register / Learn more →".
- **Publications**: Thumbnail + title, authors, abstract, "Download PDF" where applicable.
- **Newsletter**: Centered heading, form, "Follow us" with social icons.
