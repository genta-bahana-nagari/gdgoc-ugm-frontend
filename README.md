# GDGOC Website — Google Developer Groups On Campus UGM

A performant, responsive digital platform for [Google Developer Groups On Campus](https://gdsc.com/), built with **Next.js 16.4.5** (App Router), **React 19.3.0**, and **Tailwind CSS v4**. Serves as the official digital hub to drive community engagement, articulate chapter values, showcase technical focus tracks and events, and guide prospective student developers to join the chapter.

---

## 📖 Table of Contents

- [Project Information](#-project-information)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [API Configuration](#-api-configuration)
- [Project Structure](#-project-structure)
- [Development Notes](#-development-notes)
- [Deployment](#-deployment)

---

## 📦 Project Information

| Property | Value |
|----------|-------|
| **Name** | gdgoc-frontend |
| **Version** | 0.1.0 |
| **Description** | Official website for GDG On Campus UGM (Universitas Gadjah Mada) — a community of learners and makers building technology with purpose |
| **Framework** | Next.js 16.4.5 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | react-icons (Fi, Io, Fa, Bs) |
| **Linting** | ESLint 9 (eslint-config-next) |
| **API** | Integrated via `src/lib/api.ts` — server components fetch from `https://gdgoc-ugm-api.vercel.app/api` |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/genta-bahana-nagari/gdgoc-ugm-frontend.git

# Change into the project directory
cd gdgoc-frontend

# Install dependencies
pnpm install
# or
npm install
# or
yarn install
```

### Environment Setup

Copy the environment file and verify the API URL:

```bash
cp .env.example .env
```

The `.env` file should contain:

```
NEXT_PUBLIC_API_URL=https://gdgoc-ugm-api.vercel.app/api
```

> ⚠️ The API endpoint (`https://gdgoc-ugm-api.vercel.app/api`) must be reachable for server components to fetch data. If the API is down, pages relying on server data will fall back to static UI or throw errors (depending on implementation).

### Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The page auto-updates as you edit files.

Available pages:
- `/` — Main Landing Page
- `/about` — Dedicated About Page
- `/overview` — Overview Page with tracks, formats, journey
- `/contact` — Contact Page

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Run the development server with Turbopack |
| `pnpm build` | Build for production (`next build`) |
| `pnpm start` | Start the production server (`next start`) |
| `pnpm lint` | Run ESLint to enforce code quality |
| `pnpm lint:fix` | Auto-fix lint issues where possible |

---

## 🔌 API Configuration

This project integrates with a remote API via `src/lib/api.ts`. The `apiFetch<T>()` function is a server-component helper that:

- Fetches data from `${API_URL}${endpoint}`
- Enforces `Accept: application/json` headers
- Caches responses via Next.js `cacheLife("hours")`
- Throws if `NEXT_PUBLIC_API_URL` is not configured

### API Endpoints Used

| Endpoint | Purpose | Data |
|----------|---------|------|
| `/navigation` | Navbar links | 4 items: Home, About, Overview, Contact |
| `/tracks` | Tracks section (home & overview) | 3 tracks: Research & Discovery, Design & Creativity, Development |
| `/stats` | Stats section | Community members, workshops, projects, tracks, university, founded year |
| `/faqs` | FAQ accordion | 7 FAQs across 3 categories: joining-learning, collaboration, speaking-sharing |
| `/formats` | Formats section | 4 learning formats: study-groups, hands-on-workshops, project-circles, knowledge-sharing |
| `/journey` | Student journey section | 4 progress steps |

> 💡 The API data shapes are defined in `src/types/`. See `src/types/stats.ts`, `src/types/track.ts`, `src/types/faqs.ts`, etc.

---

## 📁 Project Structure

```
gdgoc-frontend/
├── app/              # Next.js App Router pages & layouts
│   ├── page.tsx      # Home page
│   ├── about/        # About page
│   ├── overview/     # Overview page
│   └── contact/      # Contact page
├── components/
│   ├── layouts/      # Shared layouts (Navbar, Footer, SmoothScroll)
│   └── sections/     # Page sections (Hero, Stats, Tracks, Faq, etc.)
├── lib/              # Utility functions (apiFetch)
├── types/            # TypeScript interfaces for API data
├── public/           # Static assets (images, SVGs)
├── .env              # Environment variables (API URL)
├── next-config.ts    # Next.js Turbopack/Tailwind config
├── tsconfig.json     # TypeScript config (strict: true)
└── eslint.config.mjs # ESLint config
```

---

## 🛠️ Development Notes

### Code Quality

- `strict: true` is enabled in `tsconfig.json`
- ESLint configured with `eslint-config-next` + TypeScript
- Run `pnpm lint` before committing to catch issues
- Build with `pnpm build` to verify zero TypeScript errors

### API Integration Pattern

All data-fetching uses Server Components + `apiFetch<T>()`:

```tsx
// Example: TracksSection.tsx
export default async function TracksSection() {
  const result = await apiFetch<Track[]>("/tracks");
  const tracks = result.data;
  return <TracksSectionContent tracks={tracks} />;
}
```

### Client-Side State

Components requiring interactivity are wrapped with `'use client'` and use React `useState`/`useEffect`. Examples:

- `NavbarContent.tsx` — mobile menu drawer state
- `FaqSectionContent.tsx` — FAQ accordion open/close state
- `TracksSectionContent.tsx` — skill filter persistence via `localStorage`

### Tailwind CSS v4

- Design tokens: Google 4-color accent palette (`#4285F4` Blue, `#EA4335` Red, `#FBBC04` Yellow, `#34A853` Green)
- Neutral slate/warm background palette (`#F8FAFC` to `#0F172A`)
- Fluid typography via `--font-inter` variable
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`

---

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push to a GitHub/GitLab/Bitbucket repository
2. Import the repo to Vercel
3. Vercel will automatically detect the Next.js framework
4. Add the environment variable: `NEXT_PUBLIC_API_URL=https://gdgoc-ugm-api.vercel.app/api`
5. Deploy

### Manual Build & Start

```bash
pnpm build    # Generate .next bundle
pnpm start    # Start production server (default: port 3000)
```

---

## 📦 Learn More

- [Next.js Documentation](https://nextjs.org/docs) — app router, data fetching, caching
- [Learn Next.js](https://nextjs.org/learn) — interactive tutorial
- [Tailwind CSS v4 Docs](https://tailwindcss.com) — utility-first styling
- [react-icons Docs](https://react-icons.github.io/react-icons/) — icon library
- [Vercel Deployment Docs](https://vercel.com/docs) — deployment guides

---

## 🙏 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

Please follow the existing code quality standards (ESLint, TypeScript strict mode) and run `pnpm build` to verify no regressions.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file (if present) or contact the maintainers.