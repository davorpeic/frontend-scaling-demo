# Scaling Frontend Architecture Demo

Teaching monorepo for the masterclass **Scaling Frontend Architecture: When Monorepos and Microfrontends Make Sense**.

This repo is intentionally small. It shows the difference between:

- **Package** = reuse (`@demo/ui`, `@demo/theme`)
- **Monorepo** = organization (pnpm workspaces + Vite+)
- **Microfrontend** = independently owned frontend capability (`@demo/shop`, `@demo/account`)
- **Dynamic import** = local composition
- **Module Federation** = an alternative for independently deployed remotes (not used here)

## Requirements

- Node.js 24 LTS
- Vite+ (`vp`) and pnpm 12.4.2 (Vite+ can download pnpm)

## Setup

```bash
vp install
pnpm build:account
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

If `vp` is not installed yet:

```bash
curl -fsSL https://vite.plus | bash
```

## Commands

| Command | What it does |
| --- | --- |
| `pnpm dev` / `pnpm dev:shell` | Next.js shell on port 3000 |
| `pnpm storybook:shop` | Shop Storybook on port 6006 (no shell) |
| `pnpm storybook:account` | Account Storybook on port 6007 (no shell) |
| `pnpm dev:account` | Vue Account MFE preview |
| `pnpm build:account` | Build the Vue custom element |
| `pnpm build` | Build every workspace package that has a `build` script (shell + account). Shop has no Vite build — Next.js compiles it from source. |
| `pnpm test` | Vitest |
| `pnpm lint` | Oxlint via Vite+ |

Equivalent Vite+ commands:

```bash
vp run @demo/shell#dev
vp run @demo/shop#storybook
vp run @demo/account#storybook
vp run @demo/account#dev
vp run @demo/account#build
vp run -r build
vp run -t @demo/shell#build
vp test
vp lint
```

`vp dev` starts Vite, not Next.js. Always run the shell with `pnpm dev` / `vp run @demo/shell#dev`.

## Layout

```
apps/
  shell/     Next.js host application
  shop/      React microfrontend + Storybook
  account/   Vue microfrontend + Storybook
packages/
  ui/        reusable Card
  theme/     shared Tailwind tokens
```

Every workspace member is a pnpm package. Shop and Account are still microfrontends because a team owns them as frontend capabilities.

## Tooling split

- **pnpm** — workspace, lockfile, `workspace:*`, catalogs
- **Vite+** — install, lint, test, task runner, Vite builds
- **Next.js** — the shell bundler/dev server
