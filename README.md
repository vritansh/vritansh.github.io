# Vritansh Kamal

Personal homepage: [vritansh.github.io](https://vritansh.github.io/).

A single-page, static website for research interests, research and industry experience, Medium publications, ideas, education, and teaching. No build step or package installation is required.

## Files

- `index.html`: all page content and metadata.
- `styles.css`: shared palette, typography, responsive layouts, and print styles.
- `script.js`: optional active-section navigation. The page works without JavaScript.
- `design.md`: visual design system and content conventions.

## Publish an idea

1. In `index.html`, find the section with `id="ideas"`.
2. Copy one complete `<article class="idea">` block and put it above the existing notes.
3. Give it a unique, stable `id`, such as `evaluating-graph-reasoning`. Set the title's link to that same fragment, for example `href="#evaluating-graph-reasoning"`.
4. Add the title, paragraphs, and links to relevant papers, code, or other sources. Use “Open question” for exploratory ideas. Use an accurate `<time datetime="YYYY-MM-DD">` when adding a publication date.
5. Commit the change to `main`. The existing GitHub Pages deployment publishes the update.

The note can then be linked directly as `https://vritansh.github.io/#evaluating-graph-reasoning`. Keep existing IDs unchanged so shared links continue working.

## Add a Medium article

Copy a complete `<article class="publication">` block in the Publications section. Update its title, original Medium URL, short description, and publication date. Place the newest article first. Keep the `Medium` label so readers can identify the publication type.

## Preview and validate

Open `index.html` in a browser for a local preview. For a JavaScript syntax check, run `node --check script.js`. Before publishing, verify internal anchors, external links, and any new local asset paths. Keep source files in the repository root for the existing GitHub Pages configuration.

## Content provenance

Experience and teaching details preserve the existing homepage, with the neuro-symbolic focus expanded from Vritansh's supplied research interests. Publications link to verified articles on [his Medium profile](https://medium.com/@vritansh14); display titles have minor spelling and length edits for readability. The Ideas section contains open research questions, not claims of completed experiments. External paper links explain methods and do not imply authorship.
