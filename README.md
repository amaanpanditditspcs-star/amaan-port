# Amaan Javaid: Personal Portfolio

A distinctive, calm, editorial portfolio for Amaan Javaid. Built with a Swiss-inspired layout, strict editorial typography, subtle transitions, and a clean theme toggle.

---

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Language:** TypeScript 5.8
- **Styling:** Tailwind CSS v4 (CSS-first architecture via `@theme` in `src/styles/global.css`)
- **Routing:** React Router v7
- **Motion:** Framer Motion (subtle scroll reveals, page transitions, prefers-reduced-motion respected)
- **Icons:** Lucide React
- **Typography:** Self-hosted Plus Jakarta Sans Variable (`@fontsource-variable/plus-jakarta-sans`)

---

## Project Structure

```
amaan-port/
├── public/
│   ├── favicon.svg             # Minimalist 'AJ' SVG favicon
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sitemap.xml             # Search engine sitemap index
│   ├── _redirects              # Netlify SPA redirect rule (/* /index.html 200)
│   └── resume/                 # Place your resume PDF here
│       └── .gitkeep
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── profile-home.webp   # Neutral geometric placeholder (800x1000)
│   │       └── profile-about.webp  # Neutral geometric placeholder (800x1000)
│   ├── components/
│   │   ├── BackToTop.tsx       # Smooth scroll-to-top button
│   │   ├── Footer.tsx          # Site footer with dynamic email and auto year
│   │   ├── ImagePlaceholder.tsx # Responsive image container with fallback
│   │   ├── Navbar.tsx          # Fixed header with mobile drawer
│   │   ├── PageTransition.tsx  # Route transition wrapper
│   │   ├── ProjectRow.tsx      # Editorial project presentation
│   │   ├── ScrollReveal.tsx    # Single-fire 12px subtle fade-up
│   │   ├── SectionHeading.tsx  # Numbered editorial section divider
│   │   ├── SEO.tsx             # Document head meta & Open Graph manager
│   │   ├── SkillTag.tsx        # Minimal pill tag for skills
│   │   ├── ThemeToggle.tsx     # Light/Dark toggle with localStorage persistence
│   │   └── TimelineItem.tsx    # Work and education timeline element
│   ├── data/                   # ALL text and personal data lives here
│   │   ├── about.ts            # About intro, narrative sections, and languages
│   │   ├── education.ts        # Degree, training, and diploma history
│   │   ├── experience.ts       # Factual work experience entries
│   │   ├── projects.ts         # Portfolio projects with tech stacks and links
│   │   ├── site.ts             # Central configuration (name, email, domain, flags)
│   │   ├── skills.ts           # Categorised skill groupings
│   │   └── social.ts           # Social profile links (empty URLs remain hidden)
│   ├── pages/
│   │   ├── About.tsx           # Profile, background, education, languages
│   │   ├── Contact.tsx         # Direct contact, honeypot form, and social links
│   │   ├── Experience.tsx      # Chronological work history
│   │   ├── Home.tsx            # Hero, page index, selected work, contact strip
│   │   ├── NotFound.tsx        # Minimal 404 page
│   │   ├── Projects.tsx        # Full projects inventory
│   │   └── Skills.tsx          # Categorised skills and separate exploration block
│   ├── styles/
│   │   └── global.css          # Color tokens, typography clamps, base reset
│   ├── App.tsx                 # Route declarations and layout shell
│   ├── main.tsx                # React root mount
│   └── vite-env.d.ts           # Vite client type definitions
├── .env.example                # Template for environment variables
├── index.html                  # HTML shell with anti-FOUC theme script
├── package.json                # Pinned dependencies and build scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vercel.json                 # Vercel SPA rewrite rule
└── vite.config.ts              # Vite configuration
```

---

## 1. Running Locally

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Installation & Development
1. Clone or navigate to the project folder:
   ```bash
   cd C:\dev\amaan-port
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local Vite development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Run a production build:
   ```bash
   npm run build
   ```
5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 2. How to Edit Text and Data

All personal facts, summaries, and information are strictly separated into `src/data/`. Never modify page components directly to change content:

- **Site details (`src/data/site.ts`):** Change your public name, location, email split parts, and site URL.
- **About narrative (`src/data/about.ts`):** Modify opening statement, background sections, and spoken/written language proficiency.
- **Education (`src/data/education.ts`):** Add or update degrees, institutions, training courses, and enrollment dates.
- **Experience (`src/data/experience.ts`):** Update roles, responsibilities, locations, and completion statuses.
- **Projects (`src/data/projects.ts`):** Update titles, descriptions, roles, tech stacks, or add live demo and source code links.
- **Skills (`src/data/skills.ts`):** Add skills as strings to the appropriate arrays. The UI automatically displays them.

---

## 3. How to Replace the Two Photos

The site uses two neutral WebP placeholder compositions located at:
- `src/assets/images/profile-home.webp` (Home hero image)
- `src/assets/images/profile-about.webp` (About page photo)

To replace them with your own photos:
1. Export your photos as **WebP** files with an aspect ratio of approximately **4:5** (recommended: 800 x 1000 px).
2. Save them with the exact file names above to overwrite the placeholders.
3. The Vite build system will automatically optimize and bundle them.

---

## 4. How to Add Your Resume PDF

1. Place your resume PDF in the public directory at:
   ```
   public/resume/Amaan_Javaid_Resume.pdf
   ```
2. Open `src/data/site.ts` and set `resume.enabled` to `true`:
   ```ts
   resume: {
     enabled: true,
     path: '/resume/Amaan_Javaid_Resume.pdf',
     filename: 'Amaan_Javaid_Resume.pdf',
   },
   ```
3. The "Download Resume" buttons in the hero section and footer will immediately become active and visible.

---

## 5. How to Add Social Profile Links

Open `src/data/social.ts` and paste your profile URLs:
```ts
export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/your-username',
    icon: Github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/your-username',
    icon: Linkedin,
  },
  // ...
];
```
*Note: Any entry with an empty string (`url: ''`) is automatically hidden from both the Contact page and the Footer. No empty or broken links will ever be rendered.*

---

## 6. How to Configure the Contact Form (Web3Forms)

1. Obtain a free access key from [Web3Forms](https://web3forms.com/).
2. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```
3. Insert your key:
   ```env
   VITE_WEB3FORMS_KEY=your-access-key-here
   ```
4. *Graceful fallback:* If `VITE_WEB3FORMS_KEY` is not set, clicking submit on the contact form automatically opens the visitor's default email client via a pre-filled `mailto:` link.

---

## 7. How to Set Your Custom Domain

When you connect your custom domain (e.g., `https://amaanjavaid.com`):
1. In `src/data/site.ts`, update `siteUrl`:
   ```ts
   siteUrl: 'https://amaanjavaid.com',
   ```
2. In `public/robots.txt`, update the Sitemap directive:
   ```txt
   Sitemap: https://amaanjavaid.com/sitemap.xml
   ```
3. In `public/sitemap.xml`, replace `https://YOUR-DOMAIN-HERE.com` with your domain across all `<loc>` tags.

---

## 8. Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the repository.
4. Set the Framework Preset to **Vite**.
5. Build settings will auto-detect:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Under **Environment Variables**, add `VITE_WEB3FORMS_KEY` if using Web3Forms.
7. Click **Deploy**.
*(The included `vercel.json` ensures full-page refreshes on deep routes like `/about` and `/projects` work cleanly without 404 errors).*

### Deploying to Netlify
1. Go to [Netlify](https://www.netlify.com/) and click **Add new site** > **Import an existing project**.
2. Connect your Git repository.
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Under **Site configuration** > **Environment variables**, add `VITE_WEB3FORMS_KEY`.
5. Click **Deploy Site**.
*(The included `public/_redirects` file instructs Netlify to route all requests to `index.html` with a 200 status code).*

---

## License & Credits

Designed and built for **Amaan Javaid**. All rights reserved.
