# Milestones

## Phase 1 — Foundation Cleanup

- [ ] Extract product data into a `src/data/products.js` constants file
- [ ] Replace per-pack `useState` calls with a single cart state (array or `useReducer`)
- [ ] Move inline Tailwind-style classes to `styles.css` rules (remove duplicate utility strings)
- [ ] Pin dependency versions in `package.json`

## Phase 2 — Component Decomposition

- [ ] Extract `Header` component (brand, cart pill, hamburger menu, search)
- [ ] Extract `HeroSection` component
- [ ] Extract `ProductCard` component (reusable across all packs)
- [ ] Extract `DeliveryCalendar` component
- [ ] Extract `PromiseStrip` component

## Phase 3 — Interactivity & State

- [ ] Wire cart pill to open a cart drawer / summary
- [ ] Make delivery calendar data-driven (generate days from month/year)
- [ ] Add day-selection toggle logic (scheduled / skipped / locked)
- [ ] Implement search filtering over product cards
- [ ] Add month navigation (prev / next) to calendar

## Phase 4 — Routing & Pages

- [ ] Install and configure React Router
- [ ] Add routes: `/` (home), `/cart`, `/account`
- [ ] Wire hamburger quick-menu items to routes
- [ ] Add 404 fallback page

## Phase 5 — Polish & Production

- [ ] Accessibility audit (keyboard nav, ARIA labels, contrast)
- [ ] Performance audit (image optimization, lazy loading, code splitting)
- [ ] SEO meta tags and Open Graph
- [ ] Replace placeholder WhatsApp number
- [ ] Final `npm run build` with zero warnings
