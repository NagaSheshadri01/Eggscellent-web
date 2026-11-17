# Conventions

## Stack

- **Framework:** React (latest, currently v19) with JSX — no TypeScript
- **Bundler:** Vite (latest) with `@vitejs/plugin-react`
- **Styling:** Plain CSS with custom properties defined in `src/styles.css`
- **Fonts:** Inter (body), Plus Jakarta Sans (headings) — loaded via Google Fonts in `index.html`
- **Package type:** ES modules (`"type": "module"`)

## Project Structure

```
src/
  main.jsx        — React DOM bootstrap
  Home.jsx        — Single-page storefront component
  styles.css      — Global styles and design tokens
public/
  assets/         — Static images (webp) and icons (svg)
index.html        — HTML shell, font links, #root mount
```

## Naming

- **Components:** PascalCase files and function names (`Home.jsx`, `export default function Home()`)
- **CSS classes:** PascalCase matching Figma layer names (e.g. `.StickyHeader`, `.ProductCard`)
- **CSS variables:** kebab-case with descriptive names (`--pale-green`, `--forest`)
- **Event handlers:** `on` prefix for props, descriptive verbs for internal fns (`addItem`, `updatePackQuantity`)

## Code Style

- Functional components only — no class components
- Hooks: `useState` from `'react'`; no external state management
- No default exports except the page component
- No code comments unless explicitly requested
- No semicolons in JSX files (existing convention)
- Single quotes for JS strings, double quotes for JSX attribute values

## CSS Conventions

- Mobile-first at 390px max, centered with `margin: 0 auto`
- Breakpoints: `@media (min-width: 600px)` for desktop card, `@media (max-width: 360px)` for small screens
- Design tokens in `:root` — always use `var(--token)` instead of raw hex in new rules
- Border-radius: 16px for cards/containers, smaller (3-4px) for markers
- Transitions: 160ms ease for interactive elements
- `overflow: hidden` on section containers

## Gotchas

- All deps pinned to `latest` — `npm install` may pull breaking changes. Pin versions before deploying.
- `data-layer` and `data-node-id` attributes exist for design-tool traceability; preserve them on existing elements, omit on new elements.
- The `FarmSeal` badge is absolutely positioned with a hardcoded `left: 195px` / `top: 216px` — will break on images of different dimensions.
- Cart state (`cartCount`, `cartTotal`) and individual pack quantities are independent local `useState` calls with no shared model — adding a second quantity stepper requires refactoring to a products array or reducer.
- `scrollIntoView({ behavior: 'smooth' })` uses element IDs (`#shop`, `#ledger`); new sections must get a unique `id`.
- CSS `.CalendarDay` states (scheduled, locked, skipped) are driven by positional `:nth-child` / `:nth-of-type` selectors, not data attributes — they will break if calendar rows change length.
- WhatsApp link (`wa.me/919000000000`) is a placeholder number.
- No router installed — all navigation is scroll-based or external links.
- `vite --host 0.0.0.0` exposes the dev server on all interfaces; fine for containers, risky on public networks.
