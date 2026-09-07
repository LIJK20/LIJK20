# Jinke Li — Academic Homepage

A bilingual, self-contained academic website. English is the default; 中文 opens `zh.html`.

## Preview

Open `index.html` in a browser, or serve this folder with any static web server. No installation, build step, API keys, or external font service is required.

## Publish with GitHub Pages

1. Create a public repository named `LIJK20.github.io`.
2. Upload the contents of this folder so that `index.html` is at the repository root, together with `zh.html`, `style.css`, `app.js`, `.nojekyll`, and `assets/`.
3. In **Settings → Pages**, select **Deploy from a branch**, then the branch containing your files and **/ (root)**. Save.
4. After the Pages deployment succeeds, visit the address displayed in Settings → Pages. GitHub notes that publishing may take up to 10 minutes.

Official guide: https://docs.github.com/en/pages/quickstart

This package has not been published to GitHub. The intended public address is https://lijk20.github.io/. A custom domain is optional.

## Update the site

- `index.html`: English biography, publications, experience, education, honors, and contact information.
- `zh.html`: matching Chinese content. Update both files together when facts change.
- `style.css`: layout, colors, mobile styles, and print styles. The color variables are at the beginning.
- `app.js`: publication filters, theme preference, active navigation, and language-link behavior.
- `assets/portrait.jpg`: original outdoor profile photograph supplied by the owner; framed with CSS without modifying the image.
- `assets/Jinke-Li-CV.pdf`: the updated two-page English CV, matching the confirmed publication title and statuses.
- `assets/mindshow.svg`, `neuroalign.svg`, `brainage.svg`: original conceptual illustrations, not paper figures or experimental results. They may be replaced with real research teasers later.

Publication filters use the `data-category` attribute on each `.publication`. Keep paper IDs unique so highlight cards can link to them.

## Design

Inspired by the warm neutral palette, sidebar navigation, and research cards of Christie Pang's academic homepage (https://christiep-academic.github.io/). The implementation and concept illustrations were created specifically for Jinke Li; no source code or personal media were copied from the reference site.

All content is present in HTML. JavaScript adds filters and theme switching; reading, navigation, contact links, and CV access still work without it.
