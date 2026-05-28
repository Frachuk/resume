# Resume

Personal resume and portfolio site for Franco Mischuk, Platform & Backend Engineer.
Live at [frachuk.github.io/resume](https://frachuk.github.io/resume).

## Stack

- Vite + React 19 + TypeScript
- Tailwind 4 with CSS-first design tokens (light/dark themes via `[data-theme]`)
- i18next (English + Spanish, English default)
- Vitest + Testing Library

## Content

All factual data lives in `src/data/resume.ts`. Long-form copy (bio, summary, and per-entry
descriptions) lives in `src/i18n/locales/{en,es}.json`, keyed by the `id` on each entry.
Adding a project is appending one typed object to `src/data/resume.ts` plus its descriptions in
the locale files. Mark a project `featured: true` to surface it in the Featured section; project
filters derive automatically from the data.

## Theming

Components reference semantic tokens only (`bg-surface`, `text-ink`, `text-accent`). Each theme
is a `[data-theme]` block in `src/index.css`. Adding a theme is adding one block. The toggle
persists to `localStorage` and respects `prefers-color-scheme` on first visit.

## Scripts

```bash
npm run dev        # start the dev server
npm run build      # typecheck + production build to dist/
npm test           # run the test suite
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run format     # prettier
npm run deploy     # build + publish to GitHub Pages (gh-pages)
```
