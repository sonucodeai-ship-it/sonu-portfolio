# Sonu Kumar — AI/ML Engineer Portfolio

Responsive React + Vite portfolio with project case-study modals, skills, experience, education, contact links, résumé download, and a passport-photo slot.

## Requirements
- Node.js 20.19+ (or a supported current LTS)
- npm

## Run locally
1. Extract the ZIP and open the `sonu_portfolio` folder in VS Code.
2. Add your real portrait at `public/sonu-passport.jpg`.
3. Replace `public/sonu-kumar-resume.pdf` with your latest résumé if needed.
4. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite, usually `http://localhost:5173`.

## Photo
The site looks for `public/sonu-passport.jpg`. Use a professional head-and-shoulders image with a plain background. The design shows an SK placeholder if the photo is not present; it does not fabricate a portrait.

## Customize
Edit the `profile`, `skills`, `projects`, `experience`, and `education` arrays near the top of `src/sonu_portfolio.jsx`. `src/App.jsx` is only the app wrapper. Update contact and social links before publishing.

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Deploy to Render
1. Push the folder to a GitHub repository.
2. In Render, create a **Static Site** and connect the repository.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Deploy. You can add a custom domain later.

Vercel and Netlify also support Vite static deployments.

## Accuracy checklist
- Project narratives are based on the supplied CV; review for confidentiality before publishing.
- 94% Plant Leaf Disease Detection accuracy is presented as reported in the CV, not independently verified.
- Dates for Unified Mentor and Mbit Computraining were not in the CV and are not invented.
- Add verified repo/demo links, screenshots, evaluation methods, and architecture details when available.
- Contact buttons open email/profile links; there is no backend contact form.
