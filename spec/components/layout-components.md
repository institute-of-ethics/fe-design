# Layout Components

Components that define the global shell: header, footer, navigation, and breadcrumbs.

See [00-design-system.md](../00-design-system.md) for colors and typography. See [00-navigation-architecture.md](../00-navigation-architecture.md) for full nav hierarchy.

---

## Header

**Purpose**: Sticky top bar with logo, main navigation, search toggle, and mobile menu. Provides consistent wayfinding and search access.

**Visual Design**:
- Full-width; content constrained to max-w-9xl with horizontal padding (px-4 sm:px-6 lg:px-8)
- **Top strip**: 1px full-width bar in accent color (decorative, aria-hidden)
- **Background**: White
- **Bottom border**: 1px neutral-200
- **Height**: h-16 (lg: h-20)
- **Layout**: Flex; logo left, right side: Navigation (desktop) + search icon button + MobileMenu (hamburger)

**Logo**:
- Link to `/`; text "Institute of Ethics"
- Font: heading (Cormorant Garamond); text-xl (lg:text-2xl); font-semibold; color primary; hover primary-dark

**Search**:
- Icon-only button (magnifying glass); p-2; rounded-md; text neutral-600; hover bg-neutral-100
- aria-label "Toggle search"
- When open: SearchBar is rendered below the header row, inside the same container, with pb-4

**States**:
- Default: search panel closed
- Search open: SearchBar visible below main header row

**Responsive**:
- Desktop (lg+): Navigation visible; hamburger hidden
- Below lg: Navigation hidden; hamburger visible; search icon remains

**Accessibility**: Skip link exists in root layout (not in Header). Search button has aria-label. Focus order: logo, nav links, search, menu.

---

## Footer

**Purpose**: Site-wide footer with branding, key links, connect/CTA, and newsletter signup. Reinforces primary brand and engagement.

**Visual Design**:
- **Top strip**: 1px accent bar (aria-hidden)
- **Background**: primary (dark blue)
- **Text**: neutral-300 for body; white for headings and key links
- **Padding**: py-12 lg:py-16; same horizontal container as header (max-w-9xl, px-4 sm:px-6 lg:px-8)

**Structure** (four columns on lg; 1 col mobile, 2 col md):
1. **Column 1**: Logo link (heading, text-xl, font-semibold, white; hover accent). Tagline paragraph (text-sm, max-w-xs, mt-3).
2. **Column 2**: Heading "Site Links" (text-sm, font-semibold, white, uppercase, tracking-wider). List of first 6 flat nav links (text-sm, hover white).
3. **Column 3**: Heading "Connect". Links: Newsletter, Contact. Social icons (LinkedIn, Twitter) with hover accent.
4. **Column 4**: Heading "Newsletter". Short line of copy. CTA button "Join Mailing List" (accent bg, primary text, hover accent-light).

**Bottom bar**:
- mt-12 pt-8; border-t border-accent/30
- Copyright line: text-sm, neutral-500

**Responsive**: Grid cols 1 → md:2 → lg:4; gap-8 lg:gap-12.

**Accessibility**: Links and buttons have visible hover states. Social links use aria-label (e.g. "LinkedIn", "Twitter").

---

## Navigation

**Purpose**: Desktop-only horizontal main nav with dropdowns for parent items. Reflects [00-navigation-architecture](../00-navigation-architecture.md).

**Visual Design**:
- **Container**: hidden lg:flex; items-center gap-1
- **aria-label**: "Main navigation"

**Link (no children)**:
- Rendered as Next Link
- px-3 py-2; rounded-md; text-sm font-medium
- Default: text neutral-700; hover text-primary, bg-neutral-100
- Active (current path): text-primary, bg-neutral-100

**Parent with dropdown**:
- Trigger: button (not link); same padding and typography; chevron down icon that rotates 180 on group-hover
- aria-expanded, aria-haspopup for accessibility
- **Dropdown panel**: absolute, left-0 top-full pt-1; opacity/visibility toggled by group-hover; z-50
- Panel: white bg; rounded-md; shadow-card-hover; border border-neutral-200; py-1; min-w-[180px]
- Child links: block px-4 py-2 text-sm; default text-neutral-700 hover bg-neutral-50; current page text-primary font-medium bg-neutral-50

**Responsive**: Entire nav hidden below lg (replaced by MobileMenu).

---

## MobileMenu

**Purpose**: Full-width dropdown menu for small screens; replicates main nav structure with expandable sections for parents.

**Visual Design**:
- **Trigger**: Visible only lg:hidden. Button: p-2, rounded-md, text-neutral-700, hover bg-neutral-100. Icon toggles between hamburger and X. aria-label "Open menu" / "Close menu"; aria-expanded; aria-controls="mobile-menu".
- **Panel**: id="mobile-menu"; absolute left-0 right-0 top-full; white bg; border-b border-neutral-200; shadow-lg; z-50. Shown/hidden via open state (block/hidden).
- **Content**: px-4 py-4; space-y-1; max-h-[calc(100vh-4rem)] overflow-y-auto

**Items**:
- **Top-level link (no children)**: Link; block px-4 py-3 rounded-md text-sm font-medium; current path: text-primary bg-neutral-50; else text-neutral-700.
- **Parent with children**: Button (no href); same styling; chevron that rotates when expanded. Sub-links in pl-4 space-y-1; Link block px-4 py-2 text-sm; current: text-primary font-medium. Clicking a child link closes the menu.

**States**: open / closed; per-parent expanded / collapsed.

**Accessibility**: aria-expanded and aria-controls on trigger; focus management when opening/closing is recommended.

---

## Breadcrumbs

**Purpose**: Show current location in site hierarchy; improve wayfinding and SEO.

**Visual Design**:
- **Container**: nav, aria-label "Breadcrumb"; py-4
- **List**: ol; flex flex-wrap items-center gap-2; text-sm text-neutral-600
- **Items**: Each li flex items-center gap-2. Between items (i > 0): separator "/" in neutral-400, aria-hidden.
- **Link item**: href present; hover text-primary
- **Current page**: no href; text-neutral-900 font-medium; aria-current="page"

**Usage**: Pass array of `{ label, href? }`. Last item is current page (no href). Example: Home > About > Team.

**Responsive**: Wraps on small screens (flex-wrap).
