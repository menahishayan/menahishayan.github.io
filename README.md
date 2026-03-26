# Portfolio — menahishayan.github.io

Personal portfolio website for Shayan Menahi — AI Product Manager and public speaker.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **Content:** JSON/MDX-based CMS
- **Deployment:** GitHub Pages

## Project Structure

```
app/                  # Next.js App Router (layout, page, globals)
components/
  sections/           # Page sections (Hero, About, Experience, Speaking, etc.)
  ui/                 # Reusable UI primitives
lib/                  # Data utilities, animation variants, custom hooks
cms/                  # Content (talks as MDX, open source projects as JSON)
public/               # Static assets and gallery photos
```

## Sections

- **Hero** — Introduction and headline
- **Stats Banner** — Animated key metrics
- **About** — Professional bio
- **Experience** — Work history
- **Speaking** — Conference talks and appearances
- **Photo Gallery** — Event and professional photography
- **Open Source** — Featured projects with live GitHub stats
- **Testimonials** — Social proof
- **Contact** — Call-to-action

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Management

Talks are stored as MDX files in [cms/talks/](cms/talks/) with metadata in `index.json`. Open source project data is in [cms/open_source.json](cms/open_source.json) and can be refreshed from the GitHub API using `cms/populate_json.py`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
