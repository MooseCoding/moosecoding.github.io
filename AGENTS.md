# Agents

This is Christopher Fontana's (Topher's) engineering portfolio. It is a static site for internship recruiting, and it is deployed on GitHub Pages.

## Goal

A recruiter should be able to open the site and see who he is, what he has built, and how to reach him. The home page covers experience, projects, clubs, skills, and contact. Each project that needs more than a summary has its own page.

Audience: people hiring for simulation, hardware, and flight software.

Voice: plain and specific. Project pages stay in first person. Keep the layout to one narrow column. Do not add slogans, stock photos, or a second visual system.

## Code comments

Do not add comments in TS/TSX/JS/CSS. The only allowed comments are brief notes on non-obvious knobs Topher edits himself (theme `@import` and custom CSS in `src/content/theme.css`). Everything else belongs in this file or in clear naming—not inline commentary.

## What it becomes

It stays this site. It does not become an app, a blog platform, a CMS, or anything that needs a server.

Fill it in as the work continues from `src/content/site.ts` (copy) and `src/content/theme.css` (layout tokens; color preset via `@import "./themes/<name>.css"` , many presets live in `src/content/themes/`):


- Hiring is `site.hiringHeadline` (home title and page description) and `site.hiringContact` (the line under Contact). Empty string hides each; the home title falls back to `bio`. Neither line is on `/resume`.
- Education on the site is the home subtitle. Experience and skills on the home page are `experience` and `skills`.
- Projects and clubs are the `projects` array, in display order. Each entry has `group: "Projects"` or `group: "Clubs"`. Keep each group together in the array. `pinned: true` is optional and only affects the home list: those entries render under Pinned, in array order, and drop out of their group.
- The page a recruiter reads is `/resume`, and it renders the `resume` object only. That object matches `public/resume.pdf`. Site copy (`bio`, `experience`, `skills`, project summaries and paragraphs) does not feed `/resume`.
- Project page copy is `src/content/projects/<slug>.md` (Markdown body; optional frontmatter for `links`, `figures`, and `files`). Listing fields (title, summary, role, dates, tools, group) stay in `site.ts` `projects`.
- Figures and downloadable files for a project go in `public/projects/<slug>/`. Reference them from frontmatter or from Markdown image paths.
- Project links: Apex Pathing (`apexpathing.com`, `github.com/ApexPathing/ApexPathing`), Iron (`github.com/moosecoding/project4-rust-language`). Familyr stays on the resume only. Re-verify before launch.

New work gets an entry in `projects`. Use the existing `/projects/[slug]` page when a summary is not enough.

## GitHub Pages

`npm run build` has to keep writing a static `out/` directory. `.github/workflows/github-pages.yml` publishes that directory. In the repo, Pages must use GitHub Actions as the source.

- Leave `output: "export"`, `trailingSlash: true`, and `images.unoptimized` in place
- A normal project repo is served from `/<repo>`. The workflow sets `GITHUB_PAGES=true`, and `scripts/github-pages-base-path.mjs` turns that into `basePath`. A repo named `<user>.github.io` stays at `/`
- In-app routes, including `/resume`, use `next/link`. Files in `public/` (the PDF, figures) go through `publicFile()` in `src/lib/paths.ts` so the project-site prefix is included
- Do not add Route Handlers, middleware, Server Actions, or anything else that needs a Node server. The favicon and apple icon are static PNGs in `src/app/` for that reason
