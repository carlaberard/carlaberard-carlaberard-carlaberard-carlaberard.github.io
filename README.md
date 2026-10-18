# Carla Berard — Biomedical Engineering Portfolio

A free, static GitHub Pages website for displaying projects in biomedical engineering, AI, neuroimaging and robotics.

## Publish in 5 steps (no coding required)

1. Extract this ZIP on your computer.
2. Open `assets/data/config.js` in Notepad or VS Code and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username. Save.
3. Optional: add your email and LinkedIn in the same file. To enable CV download, put your PDF at `assets/CV.pdf` and set `showCVButton: true`.
4. In GitHub, create a **public** repository named `YOUR_GITHUB_USERNAME.github.io` (the exact username you use on GitHub). Do **not** generate a README in GitHub: one is included here.
5. Upload the **contents of this folder** into that repository (not the ZIP file and not the outer folder). In **Settings → Pages**, choose **Deploy from a branch → main → /(root)** and save. In up to 10 minutes, visit `https://YOUR_GITHUB_USERNAME.github.io`.

Official guide: https://docs.github.com/en/pages/quickstart

## Before uploading

- The **`index.html` must be at repository root**, alongside `project.html`, `assets/`, and `README.md`.
- Repository buttons only activate after you fill the username. These are links, not copies of your full project files.
- The 12 repository names are the suggestions used in this chat. If your repositories have different names, edit the relevant `repo` fields in `assets/data/projects.js`.
- The project illustrations are original schematic illustrations included with this site. They are *not actual medical images or robot result photographs*.
- Your email and LinkedIn are blank by default. Add only the contact information you are comfortable publishing.
- The site displays academic project results and their limitations rather than claiming validated clinical performance. Check project claims, group attribution and permission to share any extra images before publishing.

## Customize content

- Profile headline and About: edit `index.html` in Notepad/VS Code.
- Portfolio project details: edit `assets/data/projects.js`.
- Website colors and typography: edit `assets/style.css`.
- Each project case study is rendered at `project.html?id=PROJECT_ID`.
- Preview offline: double-click `index.html` after extracting the ZIP.

Built with HTML, CSS and JavaScript; no paid tools, no build process and no subscription required.

## Blue & white design edition

This version uses a minimalist blue-and-white visual identity: white and pale-blue sections, deep navy type, cobalt highlights, subtle project-card hover effects, and recolored original schematics.

To switch to a different blue, edit the `--blue` variable and the `.btn-primary` styles at the end of `assets/style.css`. No paid themes or hosting are required.


## Homepage update (v2)

The homepage now uses a single-column hero with no right-hand dark illustration. The main headline is “From data to devices. Engineering for people.” To change it, edit the `<h1>` in `index.html`.


## Homepage update (v3)

The hero headline is now “Interested in the technology behind better movement.” To edit it, change the `<h1>` inside `index.html`.


## Homepage update (v4)

The hero headline now covers engineering, neuroscience and healthcare instead of focusing exclusively on movement. The introduction, About section and contact text are also broadened to reflect interests in neurotechnology and rehabilitation.
