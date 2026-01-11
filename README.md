# Astro GitHub Pages Template

This repository is an Astro site preconfigured to deploy to **GitHub Pages via GitHub Actions**, with automatic base-path detection based on the repo name.

---

## 🚀 Getting Started (after using this template)

After creating a new repository from this template:

### 1. Enable GitHub Pages

Go to:

**Settings → Pages**

Under **Build and deployment**:

- Set **Source** to: `GitHub Actions`

### 2. Trigger a deployment

Push any commit (or use the initial commit).

Your site will be available at:

https://<your-username>.github.io/<repo-name>/

Example:

https://mordsy.github.io/my-new-site/

That’s it. No base-path config needed — it’s automatic.

---

## 💻 Local development

```bash
npm install
npm run dev

Open:

http://localhost:4321

Project structure

Pages → src/pages

Components → src/components

Layouts → src/layouts

Static assets → public/

Static assets rule

Anything in public/ is referenced like:

/images/example.png


(not relative paths like ../images/...)

The correct GitHub Pages subpath is applied automatically during build.

🧞 Commands

All commands are run from the project root:

Command	Action
npm install	Install dependencies
npm run dev	Start local dev server
npm run build	Build production site to ./dist/
npm run preview	Preview build locally
npm run astro ...	Run Astro CLI commands
ℹ️ Notes

Deployment is handled by .github/workflows/deploy.yml

GitHub Pages base path is auto-detected from the repo name during CI

Favicon should remain at public/favicon.svg

📚 Astro starter info (original)

This project was originally created using:

npm create astro@latest -- --template basics


Astro documentation:

https://docs.astro.build

https://astro.build/chat


---

## Then commit it

Run:

```powershell
git add README.md
git commit -m "Add template usage instructions to README"
git push