# Topher Fontana, engineering portfolio

Next.js App Router + Tailwind portfolio for engineering internship recruiting.

## Edit content (no React)

Recruiter-facing copy lives in **`src/content/site.ts`** and **`src/content/projects/`**.

- Hero, links, experience, skills: edit the `site`, `experience`, and `skills` objects. `subtitle` is the line under the home title (degree and school). `hero.statusLine` is Atlanta and graduation. `footer.footerText` is the footer location line.
- Hiring: `site.hiringHeadline` is the home title and the page description. `site.hiringContact` is the line under Contact. An empty string hides that line; an empty headline also makes the home title fall back to `site.bio`. Neither line is on `/resume`.
- Projects and clubs (home list): one `projects` array in `site.ts`, in display order. Keep each `group` (`"Projects"` or `"Clubs"`) together. `pinned: true` lifts that entry into a Pinned list above the groups and removes it from its group. Omit `pinned` to leave the group order. `slug` must match the URL and the markdown filename.
- Project detail pages: **`src/content/projects/<slug>.md`**. The body is Markdown (headings, lists, links, inline images). Optional YAML frontmatter:
  - `links`: header links under the title (`label`, `href`)
  - `figures`: images above the body (`src`, `alt`). `src` is a path under `public/projects/<slug>/` or an absolute `/…` public path.
  - `files`: downloads (`label`, `path`) served from `public/projects/<slug>/`
  Put assets in **`public/projects/<slug>/`** (figures, PDFs, etc.). In Markdown, image paths are relative to that folder (e.g. `mesh.png` or `./mesh.png`).
- Resume: browser view at **`/resume`** reads the `resume` object, which matches **`public/resume.pdf`**. Home and project copy does not change that page.

Project header links use `apexpathing.com` / `github.com/ApexPathing/ApexPathing`, and `github.com/moosecoding/project4-rust-language` (Iron). Re-check them before launch if anything moves.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on GitHub Pages

This is a **static** Next.js export (`output: "export"`). `npm run build` writes HTML/CSS/JS to `out/`. There is no Node server.

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the **GitHub Pages** workflow succeeds, the site is at:
   - `https://<user>.github.io/<repo>/` for a normal project repo
   - `https://<user>.github.io/` if the repo is named `<user>.github.io`

The workflow sets `GITHUB_PAGES=true` so a project repo automatically uses `/<repo>` as `basePath`. User/org sites (`*.github.io`) stay at the root.

### Preview the static files locally

```bash
npm run build
npm run preview
```

To mimic a project-page URL (`/<repo>/`):

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=<user>/<repo> npm run build
npm run preview
```

## Before launch

- [ ] Re-check Familyr, Apex Pathing, and Iron links on project pages
- [ ] Add UAV figures in `public/projects/uav-wing/` later if they exist
