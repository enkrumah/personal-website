# Ebenezer Nkrumah

Personal portfolio. Next.js, TypeScript, Tailwind CSS, and MDX. Content is static. There is no database.

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

## Railway

Nixpacks detects Next.js. The start command is `npm run start`, which listens on `PORT`.

Set these variables when you have them:

- `NEXT_PUBLIC_SITE_URL` — production domain, no trailing slash
- `CONTACT_WEBHOOK_URL` — JSON endpoint for the contact form

Until the webhook is set, the form validates and tells people to use email.

## Content

- Projects: `content/projects/index.ts`
- Vybemoves case study: `content/projects/vybemoves.mdx` and `content/projects/vybemoves-data.ts`
- Experience, about, and résumé copy: `content/experience.ts`, `content/about.ts`, `content/resume.ts`
- Writing navigation appears when `content/writing/index.ts` has posts

Search the repository for `PLACEHOLDER` before launch. Replace `public/resume/ebenezer-nkrumah-resume.pdf` with the approved résumé.
