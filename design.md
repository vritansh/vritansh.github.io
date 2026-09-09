# Design system

## Direction

A restrained academic homepage: a white page, dark text, quiet blue accents, and generous spacing. A compact navigation rail and serif headings give a long page a clear reading rhythm. The content, rather than decorative graphics, carries the design.

The entire website is one page. Research interests, research experience, industry experience, publications, ideas, and education/teaching have permanent section anchors. The original teaching anchor remains available.

## Color palette

These exact tokens are defined once in `styles.css`.

| Token | Color | Use |
| --- | --- | --- |
| `--paper` | `#FFFFFF` | Page background and focus-link surface |
| `--ink` | `#202B36` | Body copy, headings, wordmark |
| `--muted` | `#5C6978` | Dates, supporting text, inactive navigation |
| `--accent` | `#305D85` | Links, section numbers, active navigation, focus outlines |
| `--accent-dark` | `#234763` | Hover and active-link text |
| `--line` | `#DCE3EA` | Section dividers and quiet link underlines |
| `--wash` | `#F4F7FA` | Neuro-symbolic AI focus panel |

Use the blue accent sparingly. Keep running text in ink, muted, or accent; do not use the divider color for text. Do not add gradients, unrelated accent colors, heavy shadows, or decorative cards.

## Typography

- **Headings:** local serif stack: Iowan Old Style, Palatino Linotype, Book Antiqua, Georgia.
- **Body and navigation:** local system sans-serif stack, with Segoe UI, Roboto, Helvetica, and Arial fallbacks.
- **Body:** 16px equivalent (`1rem`), line height 1.75.
- **Intro lead:** 20px, reducing to 18px on small screens.
- **Name:** fluid 44–68px on desktop; fluid 40–60px on mobile.
- **Section headings:** 30px on desktop, 26px on small screens.
- **Navigation and dates:** 14px. Small section numbers and secondary eyebrow labels: 13px.

Fonts load from the device, with no external font dependency. Use relative units, natural wrapping, and readable line lengths. Serif headings are regular weight; item headings use a restrained semibold sans serif.

## Layout and spacing

- Outer container: at most 74rem, with 2rem side padding on desktop.
- Desktop grid: 12.5rem navigation rail, 5rem gap, flexible content up to 49rem.
- Navigation stays visible with `position: sticky` and moves into a wrapping header below 50rem.
- Research interests and education use two columns where space permits. They become single columns below 35rem.
- Experience rows use a narrow metadata column and a flexible text column. They stack on small screens.
- Major sections use thin top rules, 2–2.5rem top padding, and 2.75–3.5rem bottom padding.
- The single tinted panel marks the central neuro-symbolic AI interest. Other entries remain on the page background.

## Links and interaction

- Link new technical concepts to primary papers, official documentation, or project repositories at their first useful mention.
- Use quiet underlines for ordinary links; hover strengthens the underline and darkens the text.
- External profile/article/project links may use a small arrow, hidden from assistive technology. Links open in the same tab.
- All sections and notes have stable fragment URLs. The note title links to its own permanent fragment.
- JavaScript only updates active navigation. Content, navigation, and idea links work without it.
- Respect reduced-motion preferences. Use a clear keyboard focus outline and a skip-to-content link.

## Content conventions

- Introduce Vritansh by name and actual experience. Do not add a researcher job title or educational application plans.
- Explain research interests as questions and areas of work. Do not invent results, affiliations, publications, awards, or metrics.
- Label Medium work as technical articles in Publications. Do not present it as peer-reviewed research.
- Keep exploratory writing in Ideas & notes, separate from published articles.
- Keep dates and descriptions specific. Link methods to explanatory sources; source links do not imply Vritansh authored those papers.
- No placeholder photo, invented portrait, or decorative imagery. Add an authentic portrait only when one is supplied for this site.

## Accessibility and performance

Semantic landmarks, one `h1`, ordered section headings, accessible navigation, visible focus styles, and readable text contrast guide the implementation. Mobile layouts wrap without fixed-height text containers. Print styles remove navigation and keep experience entries together where possible.

The page has no framework, build step, third-party JavaScript, tracking, or remote font requests. Keep future additions equally lightweight.
