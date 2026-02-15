# UI Components

Reusable primitives: Button, Card (and subcomponents), Input, Textarea, Select, Modal, SearchBar. Used across pages and section components.

See [00-design-system.md](../00-design-system.md) for colors, typography, and focus behavior.

---

## Button

**Purpose**: Primary action control. Supports link (href) or button; multiple variants and sizes.

**Base styles**: inline-flex items-center justify-center; font-medium; rounded-md; focus:outline-none focus:ring-2 focus:ring-offset-2; transition-colors; disabled:opacity-50 disabled:pointer-events-none

**Variants**:
- **primary**: bg-primary text-white; hover bg-primary-dark; focus ring primary-light; border transparent
- **secondary**: bg-secondary text-white; hover secondary-dark; focus ring secondary-light
- **outline**: bg transparent text-primary border-2 border-primary; hover bg-primary text-white; focus ring primary
- **ghost**: bg transparent text-neutral-700; hover bg-neutral-100; focus ring neutral-400

**Sizes**:
- **sm**: px-3 py-1.5 text-sm
- **md**: px-4 py-2 text-sm (default)
- **lg**: px-6 py-3 text-base

**Usage**: Use primary for main CTAs; outline for secondary actions (e.g. "View all"); ghost for tertiary. Can override with className (e.g. Hero CTA uses accent bg and custom focus ring).

**Accessibility**: When used as button, type and disabled supported. Optional ariaLabel. Focus ring from design system.

---

## Card

**Purpose**: Container for content blocks (articles, team members, news items). Can be a link (href) or a div/article.

**Variants**:
- **default**: White bg; rounded-lg; border border-neutral-200; shadow-card; hover shadow-card-hover; transition-shadow; overflow-hidden
- **featured**: Same as default but border-t-4 border-t-accent (accent top bar)
- **editorial**: Transparent bg; border-b border-neutral-200; pb-6; last:border-b-0; rounded-none; no shadow. For list-style editorial blocks.

**Subcomponents** (composition):
- **CardImage**: Wrapper with aspect-video; bg-neutral-200; img object-cover. Use for thumbnails.
- **CardContent**: Padding p-5; wraps title, excerpt, meta.
- **CardTitle**: Renders as h2/h3/h4 (default h3); font-heading text-lg font-semibold text-neutral-900
- **CardExcerpt**: mt-2 text-sm text-neutral-600 line-clamp-3
- **CardMeta**: mt-2 text-xs text-neutral-500 (e.g. date, category)

**Usage**: Use default for grids; featured for highlighted items (e.g. first news card); editorial for bordered list items without full card shadow.

**Accessibility**: When Card is a link, ensure link text or aria-label describes destination. CardTitle level should match page outline (e.g. h2 for section, h3 for card).

---

## Input

**Purpose**: Single-line text input with optional label and error message.

**Visual Design**:
- **Label**: Optional; block text-sm font-medium text-neutral-700 mb-1; required indicator: asterisk in primary
- **Field**: block w-full rounded-md border px-3 py-2 text-sm; default border neutral-300 hover neutral-400; focus ring-2 ring-primary ring-offset-0
- **Error state**: border red-500; focus border red-500; error message below: mt-1 text-sm text-red-600, role="alert", id linked via aria-describedby

**Supported types**: text, email, tel, number, search, password (default text).

**Accessibility**: label associated via htmlFor; aria-label or label for screen readers; aria-invalid and aria-describedby when error present.

---

## Textarea

**Purpose**: Multi-line text input with optional label and error.

**Visual Design**: Same border, focus, and error styling as Input. Default rows=4. Label and error pattern match Input.

**Accessibility**: Same as Input (label, aria-invalid, aria-describedby).

---

## Select

**Purpose**: Dropdown for single choice from options.

**Visual Design**: Same container/label pattern as Input. Select: block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm; focus ring primary. First option value "" label "Select...".

**Accessibility**: Label associated; no error variant in current implementation.

---

## Modal

**Purpose**: Modal dialog for focused tasks (e.g. confirmations, forms). Traps focus and closes on Escape.

**Visual Design**:
- **Overlay**: fixed inset-0 z-50 flex items-center justify-center p-4; role="dialog" aria-modal="true" aria-labelledby="modal-title"; optional aria-label
- **Backdrop**: absolute inset-0 bg-neutral-900/50; click closes; aria-hidden
- **Panel**: relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto
- **Header**: flex justify-between p-4 border-b border-neutral-200; title (h2 id="modal-title") font-heading text-lg font-semibold text-neutral-900; close button p-2 rounded-md text-neutral-500 hover text-neutral-700 hover bg-neutral-100; aria-label "Close modal"
- **Body**: p-4

**States**: Open (visible) / closed (null). Body scroll locks when open; Escape closes.

**Accessibility**: aria-labelledby, aria-modal; focus should move to dialog when opened and return on close (implementation detail).

---

## SearchBar

**Purpose**: Site search form; used in header expandable panel and can be used on search page.

**Visual Design**:
- **Form**: role="search"; optional className
- **Label**: "Search site" for input; sr-only
- **Layout**: flex gap-2. Input flex-1; Submit button; optional Close button when onClose provided
- **Input**: id="site-search"; type="search"; rounded-md border border-neutral-300 px-3 py-2 text-sm; focus ring primary; placeholder "Search..."
- **Submit**: "Search" button; px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover bg-primary-dark
- **Close**: When onClose present; icon-only button; px-2 py-2 text-neutral-600 hover neutral-900; aria-label "Close search"

**Behavior**: Submit navigates to `/search?q=...` and clears input; onClose callback used to collapse header search panel.

**Accessibility**: label and aria-label on input; submit and close buttons have clear labels.
