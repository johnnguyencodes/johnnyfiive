# Hydrogen template: Skeleton

### //BEGIN: Note from the repo-owner

This project serves as the boilerplate to build a hydrogen storefront with mock store data by following this [tutorial](https://shopify.dev/docs/custom-storefronts/hydrogen/building/begin-development).

After running `npm create @shopify/hydrogen@latest`, the following configurations were entered:

- Connect to Shopify: <strong>Use sample data from Mock.shop.</strong>
- Where would you like to create your storefront? <strong>hydrogen-storefront</strong>
- Select a language: <strong>TypeScript</strong>
- Select a styling library: <strong>Tailwind</strong>
- Install dependencies with npm? <strong>(y) Yes</strong>
- Create a global `h2` alias? <strong>(y) Yes</strong>
- Do you want to scaffold routes and core functionality? <strong>(n) No, set up later</strong>

Please see `Additional Configurations` below for other changes.

### //END: Note from the repo-owner

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

- Tailwind CSS v3.4.0, and the following plugins/packages:
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

Create a `.env` file at the root level, and enter the following:

```bash
# The variables added in this file are only available locally in MiniOxygen.
# Run `h2 link` to also inject environment variables from your storefront,
# or `h2 env pull` to populate this file.
SESSION_SECRET="foobar"
PUBLIC_STORE_DOMAIN="mock.shop"
```

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```
