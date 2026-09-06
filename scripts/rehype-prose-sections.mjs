/**
 * Markdown renders as a flat list of siblings, but the design wants each `##`
 * heading to sit as a flush-left label in a narrow left column with its prose
 * beside it, divided by the system's 2px rules.
 *
 * Trying to get that from CSS grid auto-placement alone is fragile — the
 * heading and its first paragraph end up in different rows as soon as a section
 * runs long. So group it in the tree instead: every `h2` starts a
 *
 *   <section class="prose-section">
 *     <h2>…</h2>
 *     <div class="prose-section__body">…everything until the next h2…</div>
 *   </section>
 *
 * Content before the first heading (or a document with no headings at all) gets
 * a body-only section, so an unstructured note still lays out correctly.
 */

const isBlank = (node) => node.type === "text" && !node.value.trim();

export function rehypeProseSections() {
  return (tree) => {
    const sections = [];

    const open = (heading) => {
      const body = {
        type: "element",
        tagName: "div",
        properties: { className: ["prose-section__body"] },
        children: [],
      };
      const section = {
        type: "element",
        tagName: "section",
        properties: { className: ["prose-section"] },
        children: heading ? [heading, body] : [body],
        _heading: Boolean(heading),
        _body: body,
      };
      sections.push(section);
      return section;
    };

    let current = null;

    for (const node of tree.children) {
      if (node.type === "element" && node.tagName === "h2") {
        current = open(node);
        continue;
      }
      if (!current && isBlank(node)) continue;
      if (!current) current = open(null);
      current._body.children.push(node);
    }

    tree.children = sections
      .filter((section) => section._heading || section._body.children.some((n) => !isBlank(n)))
      .map(({ _heading, _body, ...section }) => section);
  };
}
