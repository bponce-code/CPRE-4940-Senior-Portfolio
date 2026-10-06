# Ben Ponce — Senior Portfolio

Electrical engineering senior portfolio for CPRE/EE 4940. Static HTML and CSS with no dependencies, deployed on Vercel at https://bponce.vercel.app.

## Run locally

`npm run dev` serves the site at http://localhost:3000.

`npm run build` copies the site into `dist/`. The dev server serves `dist/` whenever it exists, so delete `dist/` after building if you keep editing.

## Deploy

Vercel settings: Framework preset **Other**, build command `npm run build`, output directory `dist`.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | Cover, contents, then sections I–VIII: About, Senior Design, Projects (i–iv), Experience (i–ii), Résumé, Reflections (i–ii), Ethics, Contact |
| `resume.html` | Résumé shown as a page, with a download panel on the side |
| `ethics.html` | Full EE 232 ethics case study |
| `style.css` | All styles. Colours are tokens at the top (`--accent` is the lime) |
| `app.js` | Mobile menu and header divider |
| `assets/` | Cover photo and project figures |
| `documents/` | PDFs: résumé, lab reports, CPRE 288 SOW, senior design problem statement, ethics paper |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Lime "BP" tab icon |
| `og-image.png` | Link preview image for LinkedIn, iMessage, and other apps |

## Updating content

- **Résumé:** replace `documents/Benjamin-Ponce-Martinez-Resume.pdf` and update the matching text in `resume.html`.
- **Placeholders:** search `index.html` for `class="todo"` to find what still needs to be filled in.
- **Link preview:** the preview tags point to `https://bponce.vercel.app`. If the domain changes, update `og:url`, `og:image`, and `canonical` in each HTML file.
