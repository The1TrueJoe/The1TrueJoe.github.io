# telaak.dev

My personal site. Astro, no framework runtime, static output to GitHub Pages.

Two things about it are worth knowing before you change anything:

1. **The Résumé section is generated, not written.** It is parsed out of `resume.tex`
   in [The1TrueJoe/The1TrueJoe](https://github.com/The1TrueJoe/The1TrueJoe) at build
   time. Editing it here does nothing; edit the résumé.
2. **The look is a design system, not ad-hoc CSS.** `src/styles/modernist.css` holds the
   tokens and component classes. Take colors, type, spacing, radius and shadow from its
   variables — never a raw hex or px value the tokens already carry.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run sync:resume` | Re-pull the résumé into `src/data/resume.json` |
| `npm run build` | Sync the résumé, then build to `./dist` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check the Astro and TypeScript sources |

`npm run build` runs `sync:resume` first via `prebuild`. If GitHub is unreachable it
keeps the committed `src/data/resume.json`, so a build never fails on the network.

## Writing and editing

Content is Markdown under `src/content`, edited either in an editor or through
**[Pages CMS](https://app.pagescms.org)** — sign in with GitHub, pick this repository,
and the fields defined in [`.pages.yml`](.pages.yml) appear as a form. Saving commits to
`main`, which triggers the deploy workflow. There is no CMS code in the site bundle and
no service to run.

Three things are editable there:

- **Project writeups** (`src/content/work`) — the Selected Work run and the pages behind
  it. `order` sets the position and the number printed beside the row.
- **Notes** (`src/content/notes`) — the writing section at `/notes`.
- **Site details** (`src/data/site.json`) — name, hero copy, the red "Now" panel, and the
  contact block.

If you add a field in `.pages.yml`, add it to the matching schema in
`src/content.config.ts` too. The schemas are what the build validates against, and a
field the CMS writes but the schema does not know about will fail the build.

### How work rows lay out

An entry with an `image` takes a full-width row, alternating which side the photograph
sits on. Entries without one pair up two-across, so the grid never shows a hole. Nothing
needs configuring — it follows from whether a writeup has a photograph.

There are no photographs in the repository right now; the ones the design mocked up were
placeholders and were removed. Upload real ones through the CMS media library (they land
in `public/assets/images`) and set them on a writeup to get the full-width treatment
back. The same applies to the social share image, which is empty in Site details — until
one is set, link previews correctly fall back to a text-only card rather than pointing at
a missing file.

## Résumé sync

`scripts/sync-resume.mjs` fetches `resume.tex`, parses the `\resume*` macros defined at
the top of it, and writes `src/data/resume.json`. It reads the GitHub API rather than
`raw.githubusercontent.com`, which is CDN-cached and will serve a copy several minutes
stale.

It understands one addition to the LaTeX: a `% tags: a, b, c` comment directly under a
`\resumeSubheading` becomes that entry's tag row on the site. LaTeX ignores comments, so
the PDF never changes.

To test a résumé edit before pushing it, pass a path:

```bash
npm run sync:resume -- ../The1TrueJoe/resume.tex
```

The résumé lives in another repository, so a push there cannot trigger a build here on
its own. `The1TrueJoe/The1TrueJoe` sends a `repository_dispatch` of type `resume-updated`
whenever `resume.tex` changes, which this workflow listens for — a résumé edit reaches
the site within a minute or so.

That ping needs a repository secret `SITE_DISPATCH_TOKEN` **in the résumé repository** — a
fine-grained PAT with *Actions: read & write* on this repository. If it is missing, the
ping is skipped and the nightly run picks the change up instead; the deploy workflow can
also be run on demand from the Actions tab.

## Layout

```
public/assets/
  fonts/Archivo/     self-hosted variable font — no third-party requests
  images/            photographs; the CMS media library points here (empty)
scripts/
  sync-resume.mjs    resume.tex -> src/data/resume.json
src/
  components/        header, footer, meta, tags, work row
  content/
    work/            project writeups (Markdown)
    notes/           notes (Markdown)
  content.config.ts  collection schemas — keep in step with .pages.yml
  data/
    site.json        editable site details
    resume.json      generated; do not edit by hand
  layouts/Base.astro
  pages/
    index.astro      hero, selected work, Now, résumé, contact
    work/[...slug]   one page per writeup
    notes/           index and one page per note
    404.astro
  styles/
    modernist.css    design tokens and components — the system
    site.css         page composition built from those tokens
.pages.yml           Pages CMS configuration
```

## The design system

Modernist: flat, architectural, set entirely in Archivo. A near-mono red (`#ec3013`) on a
light ground, a visible modular grid, zero corner radius, and strong 2px rules. Nothing
floats and nothing is decorated — alignment and the strength of the dividers do all the
organising.

- Everything is flush left, including labels inside wide buttons.
- The accent is for the primary action and small emphasis. The one place red runs as a
  field is the "Now" panel.
- Photographs print black and white, through the `.grayscale` wrapper.
- Do not round a corner, soften a rule into a hairline, or center hero copy.

## Deploying

Pushing to `main` builds and publishes to GitHub Pages
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). The same workflow runs
on a résumé-change ping, nightly, and on demand.
