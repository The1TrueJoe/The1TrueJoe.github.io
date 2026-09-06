---
title: How this site is built
date: 2026-09-06
summary: Astro, a flat design system with no rounded corners, and a résumé section parsed straight out of the LaTeX source it is compiled from.
tags:
  - Astro
  - LaTeX
  - Meta
draft: false
---

## One résumé, two outputs

My résumé lives in [The1TrueJoe/The1TrueJoe](https://github.com/The1TrueJoe/The1TrueJoe) as `resume.tex`, and a GitHub Action compiles it to the PDF you can download. Keeping a second copy of the same facts in a website data file is how those two drift apart, so this site does not keep one.

Instead the build runs `npm run sync:resume`, which fetches `resume.tex`, parses the `\resume*` macros defined at the top of it, and writes `src/data/resume.json`. The Résumé section renders that verbatim. Change the résumé, and the site follows.

The one addition to the LaTeX is a comment convention: a `% tags: a, b, c` line directly under a `\resumeSubheading` becomes that entry's tag row on the site. LaTeX ignores comments, so the PDF never sees it.

## Writing without a deploy

Everything under `src/content` — these notes and the project writeups — is Markdown edited through [Pages CMS](https://pagescms.org), which commits straight to this repository over the GitHub API. No separate database, no serverless functions, no admin bundle shipped to visitors. A commit lands, the Pages workflow rebuilds, and the change is live.

## The look

The design system is called Modernist: a near-mono red on a light ground, everything set in Archivo, zero corner radius anywhere, and strong 2px rules doing the work that shadows and rounded cards usually do. Photographs print in black and white. Nothing floats.
