# Design System

Visual foundation for the Institute of Ethics website. All components and pages should align with these tokens and patterns.

## Color Palette

### Primary
- **Default**: `#1B2A4A` — Main brand blue; used for headings, links, header/footer backgrounds
- **Light**: `#2C4A7C` — Hover states, lighter primary surfaces
- **Dark**: `#141E32` — Pressed or emphasis states

### Secondary
- **Default**: `#5B7F95` — Supporting elements, secondary text
- **Light**: `#7A9AAA`
- **Dark**: `#4A6575`

### Accent
- **Default**: `#C9A84C` — Gold; CTAs, highlights, top bar, footer accents
- **Light**: `#D4B96A` — Hover on accent buttons
- **Dark**: `#A88B3A`

### Warm (Backgrounds)
- **Ivory**: `#FAF8F5` — Section backgrounds, warm contrast
- **Gray**: `#F0EDE8` — Softer section alternates

### Neutral (Grayscale)
- **50–950**: Full scale from near-white to near-black
- **100**: `#F5F5F5` — Light backgrounds, hover
- **200**: `#E5E5E5` — Borders (e.g. header border)
- **400**: `#A3A3A3` — Muted separators (e.g. breadcrumb slash)
- **500–600**: Muted text
- **700–900**: Body and heading text; **900** `#333333` is default foreground

### Semantic
- **Background**: `#ffffff` (page default)
- **Foreground**: `#333333` (body text)

### Usage Guidelines
- Primary for navigation, links, and key headings
- Accent sparingly: top bar strip, footer strip, primary CTAs, hover on footer links
- Warm ivory/gray for alternating section backgrounds
- Neutral for body text, borders, and secondary UI

## Typography

### Font Families
- **Heading**: Cormorant Garamond (serif), variable `--font-heading`; fallbacks: Georgia, serif
- **Body**: Source Sans 3 (sans-serif), variable `--font-body`; fallbacks: system-ui, sans-serif

All `h1`–`h6` use the heading font. Body copy and UI use the body font.

### Display Sizes
- **display-lg**: 3rem, line-height 1.2
- **display-md**: 2.25rem, line-height 1.25
- **display-sm**: 1.875rem, line-height 1.3

Display classes use `letter-spacing: -0.02em` (utility: `heading-display`).

### Font Weights
- Heading font: 400, 500, 600, 700 available
- Body: default weight; medium (500) for buttons and labels; semibold (600) for small headings (e.g. footer column titles)

### Links (Unstyled)
- Color: primary
- Underline offset: 0.2em
- Hover: underline thickness 2px

### Selection
- Background: `rgba(201, 168, 76, 0.25)` (accent tint)
- Text: foreground color

## Spacing and Layout

### Container
- Max width: **9xl** (96rem)
- Horizontal padding: `px-4` (mobile), `sm:px-6`, `lg:px-8`

### Spacing Scale
- Base scale: Tailwind default (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, etc.)
- Custom: **18** (4.5rem), **88** (22rem), **128** (32rem)

### Max Widths
- **8xl**: 88rem
- **9xl**: 96rem (main content container)

## Breakpoints and Responsive Behavior

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

Design is mobile-first. Key behavior:
- **Navigation**: Desktop (lg+) shows horizontal nav with dropdowns; below lg, hamburger and MobileMenu
- **Grids**: Single column on small screens; multi-column at md/lg (e.g. footer 1 → 2 → 4 columns)
- **Typography**: Display and heading sizes can scale down on smaller viewports (e.g. `text-xl lg:text-2xl`)

## Shadows

- **card**: `0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)` — Default card elevation
- **card-hover**: `0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)` — Dropdowns, hovered cards

## Visual Utilities

- **accent-border-top**: 3px solid accent (e.g. featured card variant)
- **bg-warm / bg-ivory**: Background `#FAF8F5`
- **text-balance**: Balanced text wrap for headings

## Accessibility (Visual)

- **Focus**: Interactive elements must have visible focus styles (e.g. ring or outline)
- **Contrast**: Primary and accent on white/ivory meet contrast requirements; neutral-600/700 for secondary text
- **Skip link**: Positioned off-screen; on focus moves to top with primary background and white text
- **Screen reader only**: `.sr-only` utility hides content visually but keeps it for assistive tech

## Summary

Use primary and accent consistently for brand; neutrals for UI and text; warm backgrounds for section variety. Typography is serif for headings and sans-serif for body. Layout is constrained to 9xl with responsive padding; components adapt at sm/md/lg. Shadows and accent border are used for cards and dropdowns.
