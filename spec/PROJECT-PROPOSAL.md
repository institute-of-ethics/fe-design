# Institute of Ethics — Project Proposal

**Website Development — Full-Stack Engagement**

This document is the project proposal for the client. It defines scope, architecture (in plain language), design and UX approach, timeline, financials, and assumptions.

---

## 1. Executive Summary

**Project purpose**  
To build a professional, academic website for the Institute of Ethics that presents its mission, research, education, outreach, events, publications, team, and engagement opportunities. The site will support thought leadership, showcase research and events, and provide clear ways for audiences to connect and stay informed.

**Our role**  
We will deliver the full system: design-aligned frontend, content management system (CMS), site-wide search, contact and newsletter flows, integrations (maps, social feeds, analytics), and deployment on a secure, scalable cloud platform. You will receive a live website and an admin interface for your team to update content without developer involvement.

**Key outcomes**  
- A public website with 20+ pages, including detail pages for news, publications, and events.  
- A single admin portal (Strapi) for managing all content, media, and team data.  
- Working contact form, newsletter signup, and partnership inquiry forms.  
- Site-wide search, Google Maps on the Contact page, and social feeds on the News page.  
- Analytics (Google Analytics 4) and a clear path for ongoing maintenance.

---

## 2. Project Scope & Functional Requirements

### 2.1 User-Facing Webapp

| Area | Features |
|------|----------|
| **Pages** | Home; About (overview, Vision, History, Team); Research (overview, Areas, Publications list and detail, Speaker Series); Education; Outreach (overview, Events list and detail, Symposium); News (list and article detail); Engage; Contact; Search results. |
| **Navigation** | Main menu with dropdowns, breadcrumbs, mobile menu, header search. |
| **Content** | Research areas, publications (with PDF download), events (with registration links), team bios, news articles, education programs, learning resources, symposium information. All driven by the CMS. |
| **Search** | Site-wide search bar; results page with filters by content type. |
| **Forms** | Contact form (name, email, subject, message); newsletter signup (email); partnership inquiry (name, email, organization, message). Submissions handled securely and emails delivered as specified. |
| **Integrations** | Google Maps embed on Contact page; Twitter/X and LinkedIn feeds on News page; Google Analytics 4 for traffic and key events. |

### 2.2 Admin Portal (Content Management)

The admin experience is provided by **Strapi** (no custom admin application). Your staff will use the Strapi web interface to:

| Capability | Description |
|------------|-------------|
| **User management** | Two roles: **Admin** (full access) and **Editor** (content and media only). No public sign-up; accounts created by an Admin. |
| **Content management** | Create, edit, and publish: News articles; Publications (with PDF upload); Events; Team members; Research areas; Speaker series entries; Symposium entries; Education programs; Learning resources; and a single “Site settings” record for hero and mission content. |
| **Media library** | Upload and manage images and PDFs. Media is stored in the cloud and delivered via a fast CDN. |
| **No custom dev** | No separate “custom admin portal” or bespoke dashboards; Strapi’s standard UI is used after a short onboarding session. |

### 2.3 Out of Scope (This Phase)

- Content migration from legacy systems (you will populate content after launch).  
- Multilingual support.  
- Membership portal or user accounts for the public.  
- Custom approval workflows beyond Strapi’s draft/publish.  
- Integration with external academic databases.

---

## 3. Technical Architecture (Non-Technical Summary)

The system is built from well-supported, industry-standard building blocks and hosted on **Google Cloud Platform (GCP)** for security and scalability.

| Component | What it does |
|-----------|----------------|
| **Website (frontend)** | The public site visitors see. Built with Next.js and TypeScript, following the approved design system. It fetches content from the CMS and search from a dedicated search service. |
| **Content management (Strapi)** | The “engine” for your content. Your team logs in to Strapi to add or edit news, events, publications, team, and other content. The website reads this content automatically. |
| **Database** | A managed PostgreSQL database stores all CMS content and settings. Backed up and maintained as part of the service. |
| **Search** | A dedicated search service (Meilisearch) indexes news, publications, and events so site-wide search is fast and accurate. |
| **Email** | Contact and partnership forms send email via Resend. Newsletter signups are sent to Loops so you can run campaigns. |
| **Media storage** | Images and PDFs are stored in Google Cloud Storage and delivered via a content delivery network (CDN) for fast loading. |
| **Hosting** | All of the above run on GCP: HTTPS everywhere, managed SSL certificates, and a CDN for performance. We target high availability (e.g. 99.9% uptime where applicable). |

---

## 4. Design & User Experience (UX/UI)

- **Design system**  
  The visual design is already specified in this repository (see the `spec` folder): colors, typography, spacing, and components. The build will follow these specs so the site is clean, academic, and on-brand.

- **Responsive design**  
  The site will work on desktop, tablet, and mobile. Navigation, layout, and key interactions are defined for each breakpoint in the specs.

- **Accessibility**  
  We will implement to **WCAG 2.1 Level AA** where applicable: focus states, contrast, skip links, and semantic structure so the site is usable with screen readers and keyboards.

- **Process**  
  Wireframes and layout behavior are captured in the existing specs. No separate “wireframe phase” is in scope unless you request it; development will follow the current design documentation.

- **Admin UI**  
  Strapi’s interface is straightforward. We will provide one onboarding session so your staff can manage content with minimal training.

---

## 5. Project Timeline & Milestones

| Phase | Deliverables | Duration |
|-------|--------------|----------|
| **Phase 1: Discovery & Architecture** | Finalized technical architecture (SAD), GCP project and core infrastructure provisioned, Strapi content models defined and agreed. | 1 week |
| **Phase 2: CMS & Backend Setup** | Strapi installed and configured, all content types and media provider in place, API tested, Meilisearch deployed and synced with Strapi. | 1 week |
| **Phase 3: Frontend Development** | All 24 routes implemented (including news, publication, and event detail pages), content wired to CMS, forms and integrations (Maps, social feeds, GA4) working. | 4 weeks |
| **Phase 4: Content Integration** | Client populates CMS with real content; we provide one onboarding session and answer questions. | 2 weeks |
| **Phase 5: QA & UAT** | Cross-browser and device testing, accessibility check, performance (Core Web Vitals), and user acceptance sign-off. | 1.5 weeks |
| **Phase 6: Launch** | DNS cutover (if applicable), production deployment, monitoring and post-launch checklist. | 0.5 weeks |
| **Total** | | **~10 weeks** |

Payment milestones can be tied to phase completions (e.g. Phase 1–2, Phase 3, Phase 4–5, Phase 6). Exact schedule and payment split to be agreed in the contract.

---

## 6. Financials & Terms

### 6.1 Cost Breakdown (Categories)

- **Development**  
  Effort for architecture, CMS setup, frontend (all pages and components), search, forms, integrations, deployment, and documentation. Priced per phase or as a fixed project fee as agreed.

- **Design**  
  Design is already specified in the `spec` folder. If no further visual or UX scope is added, design cost may be limited to any small refinements or asset preparation; otherwise design fees to be quoted separately.

- **Third-party and operational services**  
  - **GCP**: Cloud Run, Cloud SQL, Cloud Storage, Load Balancer, CDN, Secret Manager, Cloud Build (usage-based; we will provide an estimated monthly range).  
  - **Resend**: Transactional email (usage-based; typically low volume).  
  - **Loops**: Newsletter/audience management (subscription tier to be chosen by client).  
  - **Google Maps Embed API**: Typically free within quotas; any excess usage is minimal.  
  - **Google Analytics 4**: Free.  
  - **Domain and SSL**: Managed as part of GCP or your existing registrar; cost passed through or quoted separately.

A detailed quote will list these categories with fixed and/or estimated recurring costs.

### 6.2 Monthly Operational Costs (Estimate)

After launch, ongoing costs are mainly:

- GCP (compute, database, storage, egress).  
- Resend and Loops according to usage/tier.  
- Domain renewal if we manage it.

We will provide a one-page “run rate” estimate for the first 12 months based on expected traffic and content volume.

### 6.3 Maintenance and Post-Launch Support

- **In scope for proposal (optional)**  
  A defined post-launch period (e.g. 30–90 days) for bug fixes, small tweaks, and security/Strapi updates. Can be quoted as a retainer or fixed fee.

- **Ongoing**  
  Beyond that, maintenance (patches, Strapi upgrades, dependency updates) and any new features can be covered by a separate support or retainer agreement.

### 6.4 Assumptions (What We Expect From You)

- **Content and assets**  
  You will provide final copy for static pages (e.g. Vision, History, Education) and any brand assets (logo, approved imagery). You will populate the CMS with news, events, publications, and team information after Phase 4 onboarding.

- **Access and accounts**  
  You will provide (or create with our guidance) access to DNS/domain for Phase 6. You will provide or confirm social media accounts (Twitter/X, LinkedIn) for the News page feed integration and the institute’s email address(es) for contact and partnership forms.

- **Decisions**  
  One designated point of contact for content and acceptance; timely feedback during QA and UAT so the timeline can be kept.

- **Third-party terms**  
  Use of Resend, Loops, Google (Maps, GA4), and GCP is subject to their respective terms; you accept responsibility for compliance (e.g. privacy, marketing consent) for newsletter and contact data.

---

## 7. Next Steps

1. **Contract and payment schedule**  
   Align on contract, payment milestones (e.g. tied to phases above), and total budget.

2. **Kick-off**  
   Confirm project start date, point of contact, and access (repo, GCP if applicable, domain/DNS).

3. **Phase 1**  
   Finalize architecture (SAD), provision GCP, and lock Strapi content models so Phase 2 can begin on schedule.

This proposal, together with the **Software Architecture Document (SAD)** in this repository, defines the technical and project scope for the Institute of Ethics website. Any changes to scope, timeline, or assumptions should be documented in a change order or amended proposal.
