# Ebenezer Nkrumah

Personal portfolio. Next.js, TypeScript, Tailwind CSS, and MDX. Content is static. There is no database.

## Architecture

`app/` is the App Router. Each route composes layout and content. `app/contact/actions.ts` and `app/api/contact/route.ts` both call `lib/contact.ts`.

`content/` holds the site facts, résumé, experience, about, projects, and the Vybemoves case study (`vybemoves.mdx` plus `vybemoves-data.ts`). Writing stays out of the nav until `content/writing/index.ts` has posts and the matching routes exist.

`components/` is presentation. Client components are the nav, theme, contact form, résumé actions, and analytics clicks.

`lib/` is the shared seams: contact validation and delivery, SEO helpers, JSON-LD, and analytics.

`public/` holds the portrait, the Vybemoves screenshot, and the résumé PDF.

## Local

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Before deploy

Copy `.env.example` only if you have real values. Leave both unset otherwise.

- `NEXT_PUBLIC_SITE_URL` — production origin, no trailing slash. Canonical URLs use `http://localhost:3000` until this is set.
- `CONTACT_WEBHOOK_URL` — JSON endpoint `{ name, email, message, source }`. Until it is set, the form validates and asks people to email.

Do not commit `.env`.

## Railway

Nixpacks detects Next.js. `railway.toml` starts `npm run start`, which listens on `PORT`.
