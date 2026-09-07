#!/usr/bin/env node
/**
 * Pull the résumé into src/data/resume.json, which the Résumé section renders
 * verbatim.
 *
 * The extraction itself does not happen here. resume.tex in
 * The1TrueJoe/The1TrueJoe is tagged with `%%:` directives, and that repository's
 * Pages workflow runs The1TrueJoe/resume-tex-action to publish resume.json next
 * to the compiled PDF. This script just fetches that file, so the site holds no
 * LaTeX parser and the résumé is extracted once, at its source.
 *
 * Network failures are not fatal: the committed resume.json is left in place so
 * a build never depends on the résumé being reachable.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, "../src/data/resume.json");

/**
 * Published by the résumé repository's Pages deploy. The cache-busting query is
 * not optional: that deploy finishes moments before this build starts, and
 * without it the CDN happily serves the previous résumé.
 */
const SOURCE = "https://telaak.dev/The1TrueJoe/resume.json";

/** Sections the site renders. A résumé missing all of them is not usable. */
const EXPECTED = ["experience", "education", "skills"];

async function readSource() {
  const local = process.argv[2];
  if (local) return JSON.parse(readFileSync(local, "utf8"));

  const url = `${SOURCE}?t=${Date.now()}`;
  const response = await fetch(url, {
    cache: "no-store",
    headers: { "Cache-Control": "no-cache", Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`${SOURCE} returned ${response.status}`);
  return response.json();
}

try {
  const resume = await readSource();

  const sections = resume?.sections;
  if (!sections || typeof sections !== "object") {
    throw new Error("no `sections` object in the response");
  }

  const missing = EXPECTED.filter((name) => !Array.isArray(sections[name]) || !sections[name].length);
  if (missing.length) {
    throw new Error(`sections empty or absent: ${missing.join(", ")}`);
  }

  writeFileSync(OUT, `${JSON.stringify(resume, null, 2)}\n`);
  console.log(
    "sync-resume: wrote src/data/resume.json — " +
      Object.entries(sections)
        .map(([name, entries]) => `${entries.length} ${name}`)
        .join(", ")
  );
} catch (error) {
  const message = `sync-resume: ${error.message}`;
  if (existsSync(OUT)) {
    console.warn(`${message} — keeping the committed src/data/resume.json`);
  } else {
    console.error(`${message} — and there is no committed resume.json to fall back on`);
    process.exit(1);
  }
}
