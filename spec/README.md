# Institute of Ethics — Design Specifications

Design and UX specifications for the Institute of Ethics website. These documents describe the current visual implementation so that features can be maintained, adjusted, or added/removed without impacting others.

## Project Overview

The Institute of Ethics website presents the institute's mission, research, education, outreach, events, publications, team, and engagement opportunities. The design is academic, professional, and responsive, with clear typography and a restrained color palette.

## Feature Summary

- **Home**: Hero with mission, research highlights, news, and events
- **About**: Vision, History, Team (with leadership bios)
- **Research**: Areas of Research, Publications (filterable), Speaker Series
- **Education**: Programs and teaching initiatives
- **Outreach**: Events listing and flagship Symposium
- **News & Updates**: Listing with category filters
- **Engage**: Newsletter signup, social links, partnership inquiries
- **Contact**: Contact form and institute information
- **Search**: Site-wide search

## Specification Index

### Foundation

| Document | Description |
|----------|-------------|
| [00-design-system.md](00-design-system.md) | Colors, typography, spacing, breakpoints, shadows |
| [00-navigation-architecture.md](00-navigation-architecture.md) | Site structure, nav hierarchy, breadcrumbs, mobile vs desktop |

### Components

| Document | Description |
|----------|-------------|
| [components/layout-components.md](components/layout-components.md) | Header, Footer, Navigation, MobileMenu, Breadcrumbs |
| [components/ui-components.md](components/ui-components.md) | Button, Card, Input, Modal, SearchBar |
| [components/section-components.md](components/section-components.md) | Hero, MissionStatement, HighlightsSection, NewsSection, EventsSection, PublicationsGrid, TeamGrid, NewsletterSignup |

### Pages

| Document | Description |
|----------|-------------|
| [pages/home.md](pages/home.md) | Home page layout and sections |
| [pages/about.md](pages/about.md) | About overview, Vision, History, Team |
| [pages/research.md](pages/research.md) | Research overview, Areas, Publications, Speaker Series |
| [pages/education.md](pages/education.md) | Education page |
| [pages/outreach.md](pages/outreach.md) | Outreach overview, Events, Symposium |
| [pages/news.md](pages/news.md) | News listing and filters |
| [pages/engage.md](pages/engage.md) | Newsletter, social links, partnerships |
| [pages/contact.md](pages/contact.md) | Contact form and info |
| [pages/search.md](pages/search.md) | Search UI and results |

## How to Use These Specifications

1. **Maintenance**: Update a single spec when changing one feature; other specs stay unchanged.
2. **Adding features**: Add a new page or component spec and link it from the index and navigation architecture.
3. **Removing features**: Remove the relevant spec and update the index and navigation architecture.
4. **Understanding design**: Read the design system first, then the component specs, then page specs for full context.
5. **AI agents**: Use these docs as the source of truth for visual design; do not infer layout or styling from code alone.

## Audience

These specifications are written for AI designers and business analysts. They focus on visual design, layout, and UX only. Technical implementation (APIs, data models) is out of scope.
