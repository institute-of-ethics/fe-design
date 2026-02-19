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

All amounts are in **USD**. Design fees are not included; the design is already specified in the `spec` folder.

### 6.1 Development Cost

Development is estimated at **Vietnam outsourcing market pricing** for one Senior Full-Stack Developer (full-time, 40 hrs/week). Applied rate: **$35/hr** (market range $30–$40/hr for senior full-stack, 2025–2026).

| Phase | Dev Hours | Cost (at $35/hr) |
|-------|-----------|------------------|
| Phase 1: Discovery & Architecture | 40 hrs | $1,400 |
| Phase 2: CMS & Backend Setup | 40 hrs | $1,400 |
| Phase 3: Frontend Development | 160 hrs | $5,600 |
| Phase 4: Dev Support (during client content entry) | 20 hrs | $700 |
| Phase 5: QA & UAT | 60 hrs | $2,100 |
| Phase 6: Launch & Deployment | 20 hrs | $700 |
| **Total** | **340 hrs** | **$11,900** |

**Fixed-price total: $11,900** (no design fee).

**Payment milestones (tied to phase completion):**

| Milestone | Amount |
|-----------|--------|
| 30% on Phase 1–2 completion | $3,570 |
| 40% on Phase 3 completion | $4,760 |
| 30% on Phase 5–6 sign-off | $3,570 |

### 6.2 Infrastructure Initial Setup Cost

One-time cost during the ~6-week development period (Phases 1–3), before launch. Traffic is zero or internal-only. Client already has a domain; no registration cost.

| Item | Est. Cost (USD) | Notes |
|------|-----------------|-------|
| GCP Cloud SQL (db-g1-small, ~6 weeks) | $38 | $25.55/month × 1.5 months |
| GCP Load Balancer (~6 weeks) | $27 | Always-on component |
| GCP Cloud Run (3 services, minimal testing) | $5 | Near-zero at zero traffic |
| GCP Cloud Storage (test media) | $1 | Negligible |
| GCP Cloud CDN + Artifact Registry | $1 | Minimal usage |
| GCP Cloud Build | $0 | Within free tier (120 min/day) |
| GCP Secret Manager | $0 | Negligible |
| Resend (transactional email) | $0 | Free tier: up to 3,000 emails/month |
| Loops (newsletter) | $0 | Free tier: up to 1,000 contacts |
| Google Maps Embed API | $0 | Free within standard quota |
| Google Analytics 4 | $0 | Free |
| Managed SSL certificate | $0 | Google-managed, free |
| **Total Initial Infrastructure** | **~$72** | |

### 6.3 Monthly Operational Costs (Post-Launch)

Ongoing costs depend on traffic. Three scenarios; all prices USD, GCP us-central1 region.

**Traffic tiers (for reference):**

| Phase | Expected DAU | Description |
|-------|--------------|-------------|
| Early Launch | 10–30 | Mostly internal staff, students, and immediate partners. |
| Steady State | 50–200 | Regular traffic from researchers, students, and organic search. |
| Event Peaks | 500–1,500+ | High traffic during symposiums, case competitions, or when a major paper is cited. |

#### Tier 1 — Early Launch (10–30 DAU)

| Service | Monthly Cost (USD) | Notes |
|---------|--------------------|-------|
| Cloud Run: Next.js (min 1 instance, 0.5 vCPU / 512 MB) | $8 | Always-warm for responsiveness |
| Cloud Run: Strapi (min 0) | $2 | Only runs on admin access |
| Cloud Run: Meilisearch (min 0) | $2 | Only runs on search queries |
| Cloud SQL db-g1-small (1 shared vCPU, 1.7 GB) | $26 | Strapi database |
| Cloud SQL Storage (10 GB SSD) | $2 | $0.17/GB/month |
| Cloud Storage GCS (2 GB media) | $1 | $0.02/GB/month |
| Cloud CDN (egress ~5 GB) | $1 | $0.02/GB first 10 TB |
| Cloud Load Balancer | $19 | Fixed forwarding rule + minimal data processing |
| GCP Miscellaneous (Artifact Registry, Secret Manager) | $1 | Negligible usage |
| Resend | $0 | Free tier (3,000 emails/month) |
| Loops | $0 | Free tier (1,000 contacts) |
| Google Maps, GA4 | $0 | Free |
| **Total** | **~$62/month** | |

#### Tier 2 — Steady State (50–200 DAU)

| Service | Monthly Cost (USD) | Notes |
|---------|--------------------|-------|
| Cloud Run: Next.js (min 1, 1 vCPU / 1 GB) | $14 | Upgraded for responsiveness |
| Cloud Run: Strapi (min 1) | $5 | Keep warm for editor use |
| Cloud Run: Meilisearch (min 0) | $4 | Search queries growing |
| Cloud SQL db-n1-standard-1 (1 vCPU, 3.75 GB) | $50 | Production stability |
| Cloud SQL Storage (20 GB SSD) + backups | $5 | Storage + automated daily backups |
| Cloud Storage GCS (10 GB media) | $1 | Growing media library |
| Cloud CDN (egress ~25 GB) | $3 | More page loads and media |
| Cloud Load Balancer | $21 | More data processing volume |
| GCP Miscellaneous | $1 | |
| Resend | $0 | Free tier still sufficient |
| Loops (Starter — 2,500 contacts) | $49 | When list exceeds 1,000 contacts |
| Google Maps, GA4 | $0 | Free |
| **Total (with Loops)** | **~$153/month** | |
| **Total (without Loops, list under 1,000)** | **~$104/month** | |

#### Tier 3 — Event Peak Month (500–1,500+ DAU)

Symposiums, competitions, or media-cited publications. Cloud Run autoscales; no pre-provisioning.

| Service | Monthly Cost (USD) | Notes |
|---------|--------------------|-------|
| Cloud Run: Next.js (autoscales 1→5 during events) | $28 | ~3 event days/month |
| Cloud Run: Strapi (autoscales) | $7 | |
| Cloud Run: Meilisearch (autoscales) | $6 | Heavy search during events |
| Cloud SQL db-n1-standard-1 | $50 | Connection pooling for peaks |
| Cloud SQL Storage + backups | $5 | |
| Cloud Storage GCS (20 GB media) | $2 | More uploads pre-event |
| Cloud CDN (egress ~100 GB) | $8 | CDN absorbs peak page loads |
| Cloud Load Balancer | $27 | Higher data processing at peak |
| GCP Miscellaneous | $2 | |
| Resend | $0 | Free tier |
| Loops (Starter) | $49 | |
| Google Maps, GA4 | $0 | Free |
| **Total** | **~$184/month** | For a month with major event(s) |

#### Monthly Cost Summary

| Traffic Tier | DAU Range | Monthly Cost (USD) |
|--------------|-----------|--------------------|
| Early Launch | 10–30 | ~$62 |
| Steady State | 50–200 | ~$104–$153 |
| Event Peak Month | 500–1,500+ | ~$184 |


### 6.4 Maintenance and Post-Launch Support

- **30-day warranty**  
  Bug fixes included at no charge after launch.

- **Monthly retainer (optional)**  
  $300–$500/month — dependency updates, Strapi version upgrades, security patches, and up to 4 hrs of minor change requests.

### 6.5 Assumptions (What We Expect From You)

- **Content and assets**  
  You will provide final copy for static pages (e.g. Vision, History, Education) and any brand assets (logo, approved imagery). You will populate the CMS with news, events, publications, and team information after Phase 4 onboarding.

- **Access and accounts**  
  You will provide (or create with our guidance) access to DNS/domain for Phase 6. You will provide or confirm social media accounts (Twitter/X, LinkedIn) for the News page feed integration and the institute’s email address(es) for contact and partnership forms.

- **Decisions**  
  One designated point of contact for content and acceptance; timely feedback during QA and UAT so the timeline can be kept.

- **Third-party terms**  
  Use of Resend, Loops, Google (Maps, GA4), and GCP is subject to their respective terms; you accept responsibility for compliance (e.g. privacy, marketing consent) for newsletter and contact data.

### 6.6 Full Cost Summary

| Item | Cost (USD) |
|------|------------|
| Development (fixed price, 340 hrs) | $11,900 |
| Infrastructure setup (6-week dev period) | ~$72 |
| Monthly operations (Early Launch) | ~$62/month |
| Monthly operations (Steady State) | ~$104–$153/month |
| Monthly operations (Event Peak) | ~$184/month |
| Post-launch retainer (optional) | $300–$500/month |

---

## 7. Next Steps

1. **Contract and payment schedule**  
   Align on contract, payment milestones (e.g. tied to phases above), and total budget.

2. **Kick-off**  
   Confirm project start date, point of contact, and access (repo, GCP if applicable, domain/DNS).

3. **Phase 1**  
   Finalize architecture (SAD), provision GCP, and lock Strapi content models so Phase 2 can begin on schedule.

This proposal, together with the **Software Architecture Document (SAD)** in this repository, defines the technical and project scope for the Institute of Ethics website. Any changes to scope, timeline, or assumptions should be documented in a change order or amended proposal.
