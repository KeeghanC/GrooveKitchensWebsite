# Groove Kitchens — Agent Handoff

## Current status

Groove Kitchens is an Angular 19 website mockup for a kitchen design, cabinetry, renovation, and installation business operating across Auckland.

The current work is focused on presenting the brand and generating enquiries. It is not yet a production quoting or pricing system. The site currently uses static content, local image assets, and a front-end-only consultation form flow.

Repository state at handoff:

- Branch: `master`
- Remote: `origin/master`
- Working tree: clean and up to date
- Local development URL: `http://localhost:4200/`
- Latest pushed commit: `fa194d2 Refine navigation call link and favicon`

## What has been built

### Pages and navigation

Routes currently include:

- `/` — home page
- `/services` — kitchen services
- `/kitchen-inspiration` — kitchen inspiration/projects
- `/about` — about Groove Kitchens
- `/contact` — consultation/contact page
- `/testimonials` — testimonials

The responsive navigation includes the main page links and a single prominent “Call me” control using the real business phone number. The separate “Request a Quote” navigation CTA was removed after review.

The supplied favicon is installed at `src/favicon.svg` and is referenced by `src/index.html`.

### Imagery

The supplied kitchen images were added as optimised WebP assets under `src/assets/`:

- `hero-kitchen.webp`
- `compact-kitchen.webp`
- `entertainer-kitchen.webp`
- `timeless-kitchen.webp`
- `service-design-planning.webp`
- `service-hardware-finishes.webp`
- `service-renovations.webp`
- `service-storage.webp`

They are wired into the hero, project cards, and service cards. Service imagery uses a consistent landscape 4:3 presentation with responsive sizing, `object-fit`, lazy loading, and async decoding.

### Contact details and enquiry UI

The canonical contact details are in `src/constants/contact-details.consts.ts`:

- Actual business phone: `021 397 863`
- Email: `groovekitchens@gmail.com`

The contact form uses the generic placeholder `021 123 4567`; it does not expose the business phone as an example value. The “Start Your Kitchen Project” contact panel contains two stacked, matching contact cards:

- “Prefer to talk? / Call me” — links to the real phone number
- “Prefer to email? / Email me” — links to the email address via `mailto:`

The form currently captures name, email, phone, project type, and project description, and displays a front-end success state. Confirm the eventual submission/email integration before treating it as production-ready.

## Important mockup limitations

This is a visual and content mockup, not a complete commercial system. In particular:

- No pricing data model or pricing page exists yet.
- No product catalogue, supplier costs, labour rates, or margin rules exist yet.
- No authenticated admin area exists for maintaining prices.
- The consultation form should be verified for real backend delivery and spam protection before launch.
- Project, service, testimonial, and company content is currently local/static data.
- Generated/supplied imagery should be reviewed for final licensing, brand suitability, and factual representation before production use.
- Accessibility, SEO, analytics, legal pages, and performance should receive a final production pass.

## Next workstream: pricing structure

The immediate next task is to define a pricing structure before building pricing UI. Do not invent firm public prices without business input. Start by agreeing how Groove Kitchens actually sells and quotes work.

### Recommended discovery questions

1. Does Groove Kitchens want indicative “starting from” prices, package prices, or quote-only pricing?
2. Which parts are priced separately: design, cabinetry, benchtops, hardware/finishes, appliances, demolition, plumbing/electrical, delivery, and installation?
3. What is included and excluded in each service or package?
4. Are prices based on kitchen size, cabinetry length, project complexity, material tier, or a combination?
5. Should Auckland travel/site-measure costs, consent work, demolition, and project management be separate line items?
6. Are prices GST-inclusive, and what currency/region wording is required?
7. Which prices are stable enough to publish, and which must remain estimate-only because supplier/labour costs change?

### A sensible first pricing model

Use a transparent, quote-led structure initially:

- Publish service categories and clear inclusions.
- Add indicative ranges or “starting from” figures only where the business can support them.
- Keep custom cabinetry, renovations, installation, appliances, and site-specific work as consultation-based estimates.
- Show the factors that move a quote up or down so visitors understand why a fixed online price is not always appropriate.
- Add a pricing/estimate enquiry path that pre-fills the relevant project type in the contact form.

Potential presentation structure:

| Area                           | Public presentation                            | Quote inputs                                               |
| ------------------------------ | ---------------------------------------------- | ---------------------------------------------------------- |
| Design & planning              | Fixed fee or “from” price, if approved         | Scope, revisions, site measure                             |
| Cabinetry & storage            | Indicative range or package tiers              | Layout, materials, cabinetry length, accessories           |
| Benchtops, hardware & finishes | Material/finish allowances or ranges           | Surface area, edge detail, hardware, sink/tapware          |
| Renovation & installation      | Quote-only with clear inclusions               | Demolition, trades, access, plumbing/electrical, programme |
| Appliances and extras          | Allowance or client-supplied/quoted separately | Brand, model, integration, installation                    |

### Suggested implementation sequence after business approval

1. Capture the agreed pricing rules and inclusions in a typed static data model.
2. Add a pricing page or pricing section only after the copy and figures are approved.
3. Add reusable price cards/tiers with mobile-first responsive layout.
4. Extend the contact form with pricing-relevant fields such as approximate scope, budget range, and project stage.
5. Add validation, real form delivery, analytics events, and tests.
6. Recheck all pricing copy for GST wording, exclusions, validity dates, and legal/consumer requirements.

## Useful files

- `src/app/app.routes.ts` — route metadata and page routes
- `src/constants/contact-details.consts.ts` — canonical phone/email
- `src/constants/nav-content.const.ts` — navigation links
- `src/services/services.consts.ts` — service content and service images
- `src/projects/projects.consts.ts` — project/inspiration content and images
- `src/services/service/service.type.ts` — service data type
- `src/contactus/contactus.component.html` — contact cards and form
- `src/contactus/contactus.component.scss` — contact page layout/styling
- `src/nav/nav.component.html` and `src/nav/nav.component.scss` — responsive navigation and call control
- `src/assets/` — optimised WebP imagery

## Development checks

From the repository root:

```bash
npm ci
npm start
npm run build
npm run lint
npm run format:check
npm test -- --watch=false --browsers=ChromeHeadless
```

Before handing pricing work back, verify the local UI at desktop and mobile widths, confirm the call/email links, and ensure the production build still succeeds.
