# Writing content workflow

The homepage loads the Writing & Notes section from `content/writings.json`.

## Add a new externally hosted article

1. Publish the article anywhere you prefer (Medium, Substack, a personal Markdown host, GitHub, etc.).
2. Add one object to `writings.json`:

```json
{
  "title": "Your article title",
  "date": "2026-09-10",
  "summary": "One or two concise sentences describing the idea.",
  "url": "https://example.com/article",
  "type": "Article"
}
```

The homepage sorts entries automatically by date, newest first.

## Optional Markdown source

If you want to keep the source of a note in this repository, add a `.md` file under `content/notes/` using the template in `content/note-template.md`. You can still point the homepage entry to an externally hosted version.

Keep summaries concise and link technical concepts in the published article to Wikipedia, primary papers, or official documentation where useful.
