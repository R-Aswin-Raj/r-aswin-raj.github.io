# R Aswin Raj — Portfolio

A modern, single-page developer portfolio built to showcase my work as a **Generative AI Engineer** — production-grade LLM, RAG, and agentic AI systems. The site is fully responsive, animated, and deployed as a static build to GitHub Pages.

🔗 **Live site:**r-aswin-raj.github.io

---

## ✨ Features

- **Single-page, section-based layout** — Hero, Services, Work, Tech Stack, About, Journal, and Contact, with smooth scroll navigation.
- **Animated hero** — gradient orbs, grid backdrop, and a circular profile photo.
- **Downloadable CV** — one-click resume download.
- **Working contact form** — visitor messages are delivered straight to my inbox via [Web3Forms](https://web3forms.com) (no backend required), with spam honeypot, loading, success, and error states.
- **Scroll-reveal animations** and a cohesive dark theme.
- **Fully responsive** across desktop, tablet, and mobile.

---

## 🛠 Tech Stack

| Area | Technology |
|------|-----------|
| Framework | [React 19](https://react.dev) |
| Build tool | [Vite](https://vite.dev) |
| Icons | [lucide-react](https://lucide.dev) |
| Styling | Plain CSS (per-component stylesheets, CSS custom properties) |
| Form delivery | [Web3Forms](https://web3forms.com) |
| Hosting | GitHub Pages |
| Linting | ESLint |

---

## 📁 Project Structure

```
Aswin_Webpage_Portfolio/
├── public/                      # Static assets served at the site root
│   ├── images/                  # Project & profile images
│   ├── Aswin_Raj_Resume.pdf     # CV (downloaded via the Hero button)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/              # One .jsx + .css per section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   ├── TechStack.jsx
│   │   ├── About.jsx
│   │   ├── Journal.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                  # Assembles all sections
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles & CSS variables
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/R-Aswin-Raj/<your-repo-name>.git
cd <your-repo-name>

# 2. Install dependencies
npm install

# 3. Start the dev server (hot reload at http://localhost:5173)
npm run dev
```

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local dev server with hot module reload |
| `npm run build` | Produce an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## ✉️ Contact Form Setup

The contact form delivers messages through Web3Forms. To enable it:

1. Get a free access key at [web3forms.com](https://web3forms.com/#start) (just enter your email).
2. Open [`src/components/Contact.jsx`](src/components/Contact.jsx) and replace the placeholder:
   ```js
   const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
   ```
3. Submitted messages now arrive in the inbox tied to that key.

> The access key is public by design — it only identifies which inbox to deliver to and is safe to commit.

---

## 📦 Deploying to GitHub Pages

> **Important:** for a *project* page (`https://R-Aswin-Raj.github.io/<repo-name>/`), set the `base` in
> [`vite.config.js`](vite.config.js) to `'/<repo-name>/'` before building, or asset paths will 404.

The simplest route is the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package:

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then:
```bash
npm run deploy
```

Finally, in the repo's **Settings → Pages**, set the source to the `gh-pages` branch.

---

## 📄 License

Personal project — all rights reserved. Feel free to draw inspiration, but please don't republish as your own.

---

Built by **R Aswin Raj** · [GitHub](https://github.com/R-Aswin-Raj) · [LinkedIn](https://www.linkedin.com/in/r-aswin-raj/)
