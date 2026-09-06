#!/usr/bin/env node
/**
 * Pull the résumé from the LaTeX source in The1TrueJoe/The1TrueJoe and write it
 * to src/data/resume.json, which the site renders verbatim. resume.tex is the
 * single source of truth: to change what the Résumé section says, change the
 * résumé.
 *
 * The parser understands the \resume* macros defined at the top of resume.tex,
 * plus one addition of its own — a `% tags: a, b, c` comment directly under a
 * \resumeSubheading becomes the tag row for that entry. LaTeX ignores the
 * comment, so the PDF is unaffected.
 *
 * Network failures are not fatal: the committed resume.json is left in place so
 * a build never depends on GitHub being reachable.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, "../src/data/resume.json");
const REPO = "The1TrueJoe/The1TrueJoe";
const FILE = "resume.tex";

/**
 * The API serves current content; raw.githubusercontent.com sits behind a CDN
 * that will happily hand back a copy several minutes old, which shows up as a
 * push that mysteriously does not reach the site. The raw URL stays as a
 * fallback for when the API is rate-limited (60 requests/hour unauthenticated).
 */
const API = `https://api.github.com/repos/${REPO}/contents/${FILE}`;
const RAW = `https://raw.githubusercontent.com/${REPO}/main/${FILE}`;

/** Turn LaTeX escapes and dashes into the text we actually want to render. */
function clean(tex) {
  return tex
    .replace(/\\href\{[^}]*\}\{\\underline\{([^}]*)\}\}/g, "$1")
    .replace(/\\href\{[^}]*\}\{([^}]*)\}/g, "$1")
    .replace(/\\(?:textbf|textit|underline|emph|small|footnotesize|huge)\b/g, "")
    .replace(/\\vspace\{[^}]*\}/g, "")
    .replace(/\$\|\$/g, "|")
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/\\&/g, "&")
    .replace(/\\%/g, "%")
    .replace(/\\\$/g, "$")
    .replace(/\\#/g, "#")
    .replace(/\\_/g, "_")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Read the balanced `{...}` groups that follow `index` in `tex`, skipping the
 * whitespace and newlines the résumé macros are formatted across.
 */
function readGroups(tex, index, count) {
  const groups = [];
  let i = index;
  while (groups.length < count) {
    while (i < tex.length && /\s/.test(tex[i])) i++;
    if (tex[i] !== "{") return null;
    let depth = 0;
    const start = ++i;
    for (; i < tex.length; i++) {
      if (tex[i] === "{") depth++;
      else if (tex[i] === "}") {
        if (depth === 0) break;
        depth--;
      }
    }
    groups.push(tex.slice(start, i));
    i++;
  }
  return { groups, end: i };
}

/** Split the document into `\section{Name}` blocks, in document order. */
function sections(tex) {
  const body = tex.slice(tex.indexOf("\\begin{document}"));
  const found = [];
  const re = /\\section\{([^}]*)\}/g;
  let match;
  while ((match = re.exec(body))) {
    found.push({ name: clean(match[1]), start: re.lastIndex });
  }
  return found.map((section, i) => ({
    name: section.name,
    body: body.slice(section.start, found[i + 1]?.start ?? body.length),
  }));
}

/** Every `\name{..}{..}` occurrence in `body`, with its trailing text. */
function macros(body, name, arity) {
  const out = [];
  const token = `\\${name}`;
  let from = 0;
  for (;;) {
    const at = body.indexOf(token, from);
    if (at === -1) break;
    // Guard against `\resumeSubheading` matching `\resumeSubheadingEdu`.
    if (/[A-Za-z]/.test(body[at + token.length] ?? "")) {
      from = at + token.length;
      continue;
    }
    const read = readGroups(body, at + token.length, arity);
    if (!read) {
      from = at + token.length;
      continue;
    }
    const nextAt = body.indexOf(token, read.end);
    out.push({ args: read.groups.map(clean), rest: body.slice(read.end, nextAt === -1 ? undefined : nextAt) });
    from = read.end;
  }
  return out;
}

/** Bullets belonging to one entry: the `\resumeItemLine`s in its trailing text. */
function bullets(rest) {
  return macros(rest, "resumeItemLine", 1).map((m) => m.args[0]);
}

/** The `% tags: a, b, c` comment a `\resumeSubheading` may carry. */
function tags(rest) {
  const match = rest.match(/^[^\n]*\n\s*%\s*tags:\s*([^\n]+)/i);
  if (!match) return [];
  return match[1]
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function parse(tex) {
  const resume = {
    source: "https://github.com/The1TrueJoe/The1TrueJoe/blob/main/resume.tex",
    education: [],
    experience: [],
    leadership: [],
    projects: [],
    skills: [],
  };

  for (const section of sections(tex)) {
    const key = section.name.toLowerCase();

    if (key.includes("education")) {
      resume.education = macros(section.body, "resumeSubheadingEdu", 4).map((m) => ({
        school: m.args[0],
        location: m.args[1],
        degree: m.args[2],
        dates: m.args[3],
        bullets: bullets(m.rest),
        tags: tags(m.rest),
      }));
    } else if (key.includes("experience")) {
      resume.experience = macros(section.body, "resumeSubheading", 4).map((m) => ({
        role: m.args[0],
        dates: m.args[1],
        org: m.args[2],
        location: m.args[3],
        bullets: bullets(m.rest),
        tags: tags(m.rest),
      }));
    } else if (key.includes("leadership") || key.includes("service")) {
      resume.leadership = macros(section.body, "resumeSubheadingLeadership", 4).map((m) => ({
        org: m.args[0],
        location: m.args[1],
        role: m.args[2],
        dates: m.args[3],
        bullets: bullets(m.rest),
        tags: tags(m.rest),
      }));
    } else if (key.includes("project")) {
      resume.projects = macros(section.body, "resumeSubItem", 2).map((m) => ({
        name: m.args[0],
        description: m.args[1],
      }));
    } else if (key.includes("skill")) {
      resume.skills = macros(section.body, "resumeSubItem", 2).map((m) => ({
        label: m.args[0],
        items: m.args[1].split(",").map((item) => item.trim()).filter(Boolean),
      }));
    }
  }

  return resume;
}

async function readSource() {
  const local = process.argv[2];
  if (local) return readFileSync(local, "utf8");

  const token = process.env.GITHUB_TOKEN;
  const attempts = [
    {
      url: API,
      headers: {
        Accept: "application/vnd.github.raw",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    },
    { url: RAW, headers: { "Cache-Control": "no-cache" } },
  ];

  const failures = [];
  for (const attempt of attempts) {
    try {
      const response = await fetch(attempt.url, {
        headers: attempt.headers,
        cache: "no-store",
      });
      if (response.ok) return response.text();
      failures.push(`${attempt.url} returned ${response.status}`);
    } catch (error) {
      failures.push(`${attempt.url} failed: ${error.message}`);
    }
  }

  throw new Error(failures.join("; "));
}

try {
  const resume = parse(await readSource());

  const counts = {
    experience: resume.experience.length,
    education: resume.education.length,
    leadership: resume.leadership.length,
    projects: resume.projects.length,
    skills: resume.skills.length,
  };
  if (!counts.experience || !counts.skills) {
    throw new Error(`parsed nothing usable: ${JSON.stringify(counts)}`);
  }

  writeFileSync(OUT, `${JSON.stringify(resume, null, 2)}\n`);
  console.log(
    `sync-resume: wrote src/data/resume.json — ` +
      Object.entries(counts)
        .map(([k, v]) => `${v} ${k}`)
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
