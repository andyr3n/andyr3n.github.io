# Andy Ren · Portfolio

Personal portfolio site built with React 19, TypeScript, Vite, and Tailwind CSS v4. Fonts are self-hosted via Fontsource; animations are plain CSS.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
```

## Editing content

All copy lives in [`src/data/resume.ts`](src/data/resume.ts): profile, stats, experience, projects, skills, education, and nav links. Wrap text in `**double asterisks**` to emphasise it.

Before publishing:

1. Drop your resume PDF into `public/` as `Andy_Ren_Resume.pdf` (or change `resumeUrl`).
2. Add repo / demo links to each project's `links` array as they become public.
3. Once you have a domain, add `<meta property="og:url">` and make the `og:image` URL absolute in `index.html`, and add a `sitemap.xml` to `public/`.

`public/og.png` is the 1200x630 link-preview image shown by LinkedIn, Slack, etc.

## Structure

```
src/
  data/resume.ts        # all site content
  hooks/useTheme.ts     # light/dark toggle persisted to localStorage
  hooks/useReveal.ts    # IntersectionObserver scroll reveal
  components/
    Nav.tsx             # sticky header, mobile menu, theme toggle
    Hero.tsx            # intro, CTAs
    Stats.tsx           # impact metrics strip
    Experience.tsx      # timeline of roles
    Projects.tsx        # featured + grid project cards
    Skills.tsx          # grouped skill chips
    Education.tsx
    Footer.tsx          # contact section
    Section.tsx         # shared section wrapper with scroll reveal
  index.css             # Tailwind + semantic colour tokens (light/dark) + animations
.github/workflows/deploy.yml   # builds and deploys to GitHub Pages on push to main
```

## Deploy

The build output is static. Any of these work with zero config:

- **Vercel / Netlify**: import the repo, framework = Vite, build `npm run build`, output `dist`.
- **GitHub Pages** (workflow included): push to `main`, then in the repo go to Settings → Pages and set Source to "GitHub Actions". The workflow picks the right base path automatically. If you attach a custom domain, add a repository variable `CUSTOM_DOMAIN=true` so the site is built for `/`.
