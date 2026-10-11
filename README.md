# Abhishek Upadhayay — Portfolio

A responsive React + Vite portfolio with light/dark themes, project previews, a contact form, downloadable CV, and an interactive developer console.

## Run locally

```bash
npm ci
npm run dev
```

## Validate a production build

```bash
npm run lint
npm run build
npm run preview
```

## Publish with GitHub Pages

This project uses a relative Vite base path so its assets work both at a GitHub Pages project URL and at a custom domain.

1. Push the project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set the Pages build and deployment source to **GitHub Actions**.
4. Push to `main` (or run the **Deploy portfolio to GitHub Pages** workflow manually).
5. After the workflow completes, GitHub will show the public site URL under **Settings → Pages**.

The workflow builds the site and publishes the generated `dist` folder. No secrets or backend credentials are required for this static portfolio.
