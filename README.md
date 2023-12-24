# Hydrogen template: Skeleton

Hydrogen is Shopify’s stack for headless commerce. Hydrogen is designed to dovetail with [Remix](https://remix.run/), Shopify’s full stack web framework. This template contains a **minimal setup** of components, queries and tooling to get started with Hydrogen.

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- React v18.2.0
- Remix v2.4.1
- Hydrogen ~2023.10.3
- Oxygen v2.0.2
- Shopify CLI v3.52.0
- ESLint v8.38.0
- Prettier v3.1.1
- GraphQL generator v16.6.0
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Additional configurations

- Tailwind CSS v3.4.0, and the following plugins:
  - The theme has been extended with the following:
    - `xs` as an additional breakpoint at 375px minimum
    - Inter var as the Font Family
  - Tailwind Debug Screens
  - Tailwind Typography
  - Tailwind Forms
  - Tailwind Aspect Ratio
  - Tailwind Container Queries
  - Tailwind Hero Icons
- Zod
  - Installed, but not used yet

## Future considerations

- Will Integrate with Vite when available

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher

Git clone repo

```bash
git clone https://github.com/johnnguyencodes/hydrogen-boilerplate.git <name of local folder>
```

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```
