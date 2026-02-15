# Contact Page

**Route**: `/contact`

**Purpose**: Contact form and institute address/contact details. Supports general and topic-specific inquiries (subject dropdown).

**Navigation context**: Top-level nav "Contact". Breadcrumbs: Home > Contact.

---

## Layout Structure

- **Container**: max-w-9xl mx-auto; standard px; py-8 lg:py-12.
- **Breadcrumbs**: Home, Contact.
- **Page title**: h1 "Contact" (font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4).
- **Two columns**: mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12.
  - **Column 1 — Get in Touch**: h2 (font-heading text-xl font-semibold text-neutral-900) "Get in Touch". Short copy (mt-2 text-neutral-600). If not submitted: form mt-6 space-y-4 — [Input](../components/ui-components.md#input) name, Input email (type email), [Select](../components/ui-components.md#select) subject (options: General inquiry, Research, Education, Events), [Textarea](../components/ui-components.md#textarea) message rows 5, [Button](../components/ui-components.md#button) "Send message". If submitted: "Thank you. Your message has been sent." (mt-6 text-neutral-600).
  - **Column 2 — Institute of Ethics**: h2 "Institute of Ethics". [address](../00-design-system.md) block mt-4 not-italic text-neutral-600 space-y-2 — street, city/state/zip, mailto link (text-primary hover:text-primary-dark), tel link (same style). Below: map placeholder — div mt-8 h-48 bg-neutral-200 rounded-lg flex items-center justify-center text-neutral-500 text-sm "Map placeholder".

---

## Components Used

- [Breadcrumbs](../components/layout-components.md#breadcrumbs)
- [Input](../components/ui-components.md#input), [Select](../components/ui-components.md#select), [Textarea](../components/ui-components.md#textarea), [Button](../components/ui-components.md#button)

---

## Visual Design

- Form: Standard labels, borders, focus ring (primary). Required fields indicated. Success state replaces form with thank-you text.
- Address: Semantic address element; links styled as primary. Map placeholder is neutral; can be replaced with embedded map later.

---

## Responsive Behavior

- Two columns at lg; single column on smaller screens (form above address/map).
- Form and address each full width within their column.

---

## Accessibility (Visual)

- Form inputs have visible labels and focus states. Error states (if added) use red border and error message. Address and contact links are clearly distinguishable.
