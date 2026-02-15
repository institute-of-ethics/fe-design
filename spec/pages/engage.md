# Engage Page

**Route**: `/engage`

**Purpose**: Newsletter signup, social follow links, and partnership/collaboration inquiry form. Central hub for "Connect" and engagement CTAs from Footer and Home.

**Navigation context**: Top-level nav "Engage". Breadcrumbs: Home > Engage.

---

## Layout Structure

- **Container**: max-w-9xl mx-auto; standard px; py-8 lg:py-12.
- **Breadcrumbs**: Home, Engage.
- **Page title**: h1 "Engage with Us" (font-heading text-3xl lg:text-4xl font-semibold text-neutral-900 mt-4).
- **Intro**: mt-6 text-lg text-neutral-600 max-w-3xl.
- **Section 1 — Newsletter & Follow**: mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12; aria-labelledby="newsletter-heading".
  - **Column 1**: h2 id="newsletter-heading" "Join Our Mailing List" (font-heading text-2xl font-semibold text-neutral-900). Short copy (mt-2 text-neutral-600). If not submitted: form mt-6 space-y-4 with [Input](../components/ui-components.md#input) (email, required) and [Button](../components/ui-components.md#button) "Sign up". If submitted: "Thank you for signing up." (mt-4 text-neutral-600).
  - **Column 2**: h2 "Follow Us" (font-heading text-2xl font-semibold text-neutral-900). List mt-4 space-y-2; links to LinkedIn, Twitter / X (text-primary hover:text-primary-dark font-medium; target _blank).
- **Section 2 — Partnership**: mt-16 pt-12 border-t border-neutral-200; aria-labelledby="partnership-heading". h2 id="partnership-heading" "Partnership & Collaboration Inquiries". Short copy. If not submitted: form mt-6 max-w-xl space-y-4 — Input name, Input email, Input organization, [Textarea](../components/ui-components.md#textarea) message rows 5, Button "Submit". If submitted: "Thank you. We will be in touch." (mt-4 text-neutral-600).

---

## Components Used

- [Breadcrumbs](../components/layout-components.md#breadcrumbs)
- [Input](../components/ui-components.md#input), [Textarea](../components/ui-components.md#textarea), [Button](../components/ui-components.md#button)

---

## Visual Design

- Two-column section for newsletter + follow; single column for partnership form (max-w-xl).
- Headings: consistent h2 font-heading text-2xl font-semibold text-neutral-900.
- Forms: Standard Input/Textarea/Button styling from design system. No card wrappers; form fields stacked.

---

## Responsive Behavior

- Newsletter + Follow: Two columns at lg; stack on smaller screens.
- Partnership: Full-width form within container; max-w-xl constrains form width.

---

## Consistency

- Same shell: Breadcrumbs, h1, intro. Form patterns match Contact page (Input, Textarea, Button; success message on submit).
