# SYSTEM LOG: BRUTALIST PORTFOLIO [V 4.0.9]

> **STATUS:** ONLINE  
> **DESIGN PROTOCOL:** CYBERPUNK BRUTALISM  
> **OBJECTIVE:** BEYOND AESTHETICS. PURE FUNCTIONALITY.

A personal portfolio built with a strict brutalist and cyberpunk design language. Designed to break the standard mold of generic web portfolios, this project treats the browser as a raw terminal. It merges my two core disciplines: Web Development and UX Design.

## 🛠 TECH STACK

- **Framework:** [Astro](https://astro.build/) - For ultra-fast static site generation.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Raw utility classes. No bloat.
- **Languages:** TypeScript & HTML.
- **i18n:** Native Astro internationalization (ES & EN).
- **Typography:** JetBrains Mono, Space Mono, Playfair Display, Pirata One.

## ⚙️ INICIAR SECUENCIA (RUN LOCALLY)

Clone the repository and install dependencies to spin up the local server:

```bash
# 1. Clone the repo
git clone https://github.com/Alexgmatosc/brutalist-portfolio.git

# 2. Enter directory
cd brutalist-portfolio

# 3. Install dependencies
npm install

# 4. Start local dev server
npm run dev
```

Your terminal will provide the localhost port (usually `http://localhost:4321/`).

## 📁 ARCHITECTURE / DATA

The portfolio follows a DRY approach for its internationalization. All text and data are centralized and managed from:
`src/data/portfolioData.ts`

To edit the bio, skills, or any text on the site, simply modify this file. The `Home.astro` component will automatically inject the correct language (`/` for ES, `/en/` for EN).

## 📡 DYNAMIC ROUTES

- **DEV Projects:** The `/dev/` route connects to the GitHub API to dynamically fetch repository data and README files.
- **UX Projects:** The `/ux/` route connects to the Medium RSS feed to dynamically render UX case studies and articles.

---
**AUTHOR:** Alexander Matos  
**LICENSE:** MIT
