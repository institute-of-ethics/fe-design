# Section Components

Large building blocks for page content: Hero, MissionStatement, HighlightsSection, NewsSection, EventsSection, PublicationsGrid, TeamGrid, NewsletterSignup. EventCard is used in events listing.

See [00-design-system.md](../00-design-system.md) and [ui-components.md](ui-components.md) for design tokens and primitives.

---

## Hero

**Purpose**: Full-viewport hero with headline, optional subtitle, CTA, and background image. Used on Home and can be used on section landing pages.

**Visual Design**:
- **Section**: relative min-h-[100dvh]; flex flex-col justify-end; text white; overflow-hidden
- **Background**: If image provided: Image fill object-cover; overlay gradient from primary/95 (bottom) via primary/50 to transparent (top). If no image: solid primary bg
- **Content**: relative z-20; max-w-9xl mx-auto; px-4 sm:px-6 lg:px-8; pb-20 lg:pb-28 pt-32 lg:pt-40. Inner max-w-3xl
- **Title**: h1; font-heading heading-display; text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight
- **Subtitle**: optional; mt-8 text-lg sm:text-xl text-white/95 max-w-2xl leading-relaxed
- **CTA**: optional; mt-10; Button with accent bg, primary text, hover accent-light, size lg
- **Scroll hint**: absolute bottom-6 left-1/2 -translate-x-1/2; "Scroll" text (text-xs uppercase tracking-widest) + chevron down with animate-bounce; links to #mission; text-white/80 hover white

**Responsive**: Typography and padding scale; image and gradient unchanged.

**Usage**: Pass title; optional subtitle, ctaLabel, ctaHref (default /engage), backgroundImage. Mission section should use id="mission" for scroll target.

---

## MissionStatement

**Purpose**: Two-column section with mission quote and image. Used on Home below Hero.

**Visual Design**:
- **Section**: id="mission"; py-16 lg:py-24 bg-warm-ivory; aria-labelledby="mission-heading"
- **Layout**: grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center; max-w-9xl mx-auto + standard px
- **Image**: Left (order can vary by implementation); aspect-[4/3] on mobile, lg:aspect-auto lg:min-h-[400px]; rounded-lg overflow-hidden shadow-lg; object-cover
- **Content**: Heading "Our Mission" can be sr-only (h2 id="mission-heading"). Blockquote: border-l-4 border-accent pl-6 lg:pl-8 py-2; paragraph font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-primary leading-relaxed. Link "Learn more about us →" mt-8; font-medium text-primary hover primary-dark; underline underline-offset-4 decoration-2

**Usage**: missionText, imageSrc, imageAlt (default "Mission"), learnMoreHref (default /about/vision).

---

## HighlightsSection

**Purpose**: Grid of research area cards linking to Research. Used on Home.

**Visual Design**:
- **Section**: py-16 lg:py-20 bg-warm-ivory; aria-labelledby="highlights-heading"
- **Heading**: h2 id="highlights-heading"; font-heading heading-display text-2xl lg:text-4xl font-semibold text-primary; mb-10 lg:mb-12. Title prop default "Areas of Research"
- **Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8
- **Card**: Each item is a Link to /research/areas. Block rounded-lg bg-white border border-neutral-200/80 shadow-card hover shadow-card-hover transition-all; border-t-4 border-t-accent. Content p-6 lg:p-8. Title (h3) font-heading text-xl font-semibold text-primary group-hover primary-light. Description mt-4 text-neutral-600 line-clamp-3. "Learn more →" mt-5 text-sm font-semibold text-accent group-hover accent-dark

**Usage**: areas (array of research areas with id, title, description); optional title.

---

## NewsSection

**Purpose**: Mix of one featured news article (large card with image) and smaller list items. Used on Home; can drive traffic to News page.

**Visual Design**:
- **Section**: py-16 lg:py-20 bg-white; aria-labelledby="news-heading"
- **Header**: flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10. Heading (h2) font-heading heading-display text-2xl lg:text-4xl font-semibold text-primary. "View all news" Button outline size sm linking to viewAllHref
- **Layout**: grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10. First item spans lg:col-span-2
- **Featured article**: Large card; rounded-lg overflow-hidden border border-neutral-200 shadow-card hover shadow-card-hover. Link wraps all. Image area aspect-[16/10] (or placeholder bg). Content p-6 lg:p-8: date + category (text-sm neutral-500), title (font-heading text-xl lg:text-2xl font-semibold primary), excerpt line-clamp-2, "Read more →" accent. Image can use featuredImage prop or first article image; hover scale-[1.02] on image
- **Other items**: Smaller cards; rounded-lg border border-neutral-200 bg-warm-ivory/50 p-5; hover border-primary/30 shadow-card. Date·category (text-xs), title (font-heading text-lg font-semibold line-clamp-2), excerpt line-clamp-2

**Usage**: articles array; title (default "News & Updates"); viewAllHref (default /news); maxItems (default 4); optional featuredImage for featured slot.

---

## EventsSection

**Purpose**: List of upcoming events with date badge, optional image, title, description, and register link. Used on Home.

**Visual Design**:
- **Section**: py-16 lg:py-20 bg-warm-gray; aria-labelledby="events-heading"
- **Header**: Same pattern as NewsSection (heading + "View all events" outline button to viewAllHref)
- **List**: space-y-4. Each event: Link; flex flex-col sm:flex-row rounded-lg overflow-hidden bg-white border border-neutral-200 shadow-card hover shadow-card-hover
- **Date badge**: shrink-0 sm:w-28 lg:w-32; flex flex-col items-center justify-center bg-primary text-white py-4 px-3 text-center. Day (font-heading text-2xl font-bold), month (text-xs uppercase tracking-wider), year (text-xs opacity-90)
- **Image**: optional; hidden on small screens; sm:block w-48 lg:w-64 shrink-0; aspect auto; object-cover
- **Content**: flex-1 p-5 lg:p-6. Location (text-sm neutral-500), title (font-heading text-lg lg:text-xl font-semibold primary), description line-clamp-2, "Register / Learn more →" (accent) if registrationLink

**Usage**: events array; title (default "Upcoming Events"); viewAllHref (default /outreach/events); maxItems (default 3); optional featuredEventImage for first event.

---

## PublicationsGrid

**Purpose**: List of publications with optional thumbnail, title, authors, abstract, PDF link, and meta. Used on Home and Research/Publications.

**Visual Design**:
- **Section**: py-16 lg:py-20 bg-white; aria-labelledby="publications-heading"
- **Header**: Same pattern (heading + "View all publications" outline button)
- **List**: border-t border-neutral-200. Each item: border-b border-neutral-200 py-6 lg:py-8; flex flex-col lg:flex-row lg:gap-8
- **Thumbnail**: if image; shrink-0 w-24 h-[120px] lg:w-28 lg:h-[140px] rounded overflow-hidden border border-neutral-200
- **Content**: Title (font-heading text-lg lg:text-xl font-semibold primary), authors (mt-1 text-sm neutral-600), abstract (mt-2 neutral-600), "Download PDF" link (mt-3 text-sm font-semibold accent) if pdfUrl. Meta (mt-auto pt-3 text-sm neutral-500): type | date

**Usage**: publications array; title (default "Featured Publications"); viewAllHref (default /research/publications); maxItems (default 3).

---

## TeamGrid

**Purpose**: Grid of team member cards (photo placeholder, name, title, bio). Used on About/Team.

**Visual Design**:
- **Section**: py-12 lg:py-16; optional title; aria-labelledby if title
- **Heading**: h2; font-heading text-2xl lg:text-3xl font-semibold text-neutral-900 mb-8
- **Grid**: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
- **Card**: Uses Card component (default variant). Placeholder: aspect-square bg-neutral-200 (photo optional later). CardContent: CardTitle (h3) name; title text-sm text-primary font-medium mt-1; bio text-sm text-neutral-600 line-clamp-4

**Usage**: members array (id, name, title, bio, etc.); optional title (default "Our Team"); className.

---

## NewsletterSignup

**Purpose**: Centered CTA for email signup plus social follow links. Used on Engage and in Footer (link only); can appear on Home.

**Visual Design**:
- **Section**: relative py-20 lg:py-24 overflow-hidden; optional background pattern (radial dot in primary/6, 24px grid) on warm-ivory
- **Content**: max-w-2xl mx-auto text-center. Heading (h2 id="newsletter-heading") font-heading heading-display text-2xl lg:text-4xl font-semibold text-primary. Subtitle mt-4 text-neutral-600 text-lg
- **Form**: mt-8; flex flex-col sm:flex-row gap-3 sm:max-w-md sm:mx-auto. Email input flex-1 rounded-md border border-neutral-300 bg-white px-4 py-3; focus ring accent. "Sign up" Button primary size md. Label sr-only "Email address"
- **After submit**: "Thank you for signing up." mt-8 text-neutral-600
- **Follow**: mt-10 flex items-center justify-center gap-6. "Follow us" text-sm neutral-500; LinkedIn and Twitter icon links (text-neutral-600 hover primary)

**Usage**: title (default "Join Our Mailing List"); subtitle (default copy); className.

---

## EventCard

**Purpose**: Single event card for listing pages (e.g. Outreach/Events). Date badge + optional image + content; link to registration or detail.

**Visual Design**:
- **Container**: Link; flex flex-col sm:flex-row rounded-lg overflow-hidden bg-white border border-neutral-200 shadow-card hover shadow-card-hover
- **Date badge**: Same as EventsSection (shrink-0 sm:w-28 lg:w-32; primary bg; day/month/year)
- **Image**: Optional; w-full sm:w-48 lg:w-64; aspect-video on mobile, aspect-auto on sm+; object-cover
- **Content**: flex-1 p-5 lg:p-6. Location, title (h2 font-heading text-lg lg:text-xl font-semibold), description line-clamp-2, "Register / Learn more →" if registrationLink

**Usage**: Pass single event object. Used in events listing grid.
