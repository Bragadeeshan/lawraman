# Lawraman Pvt Ltd — Official Website

A professional 4-page business website for Lawraman Pvt Ltd, an investment process consultancy and civil/environmental engineering firm based in Kurunegala, Sri Lanka. Built with Next.js App Router, TypeScript, and CSS Modules.

---

## Live Site

> Add your Vercel URL here once deployed

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14+ (App Router) | Framework |
| TypeScript | Language |
| CSS Modules | Component styling |
| Framer Motion | Hero background paths animation |
| Google Fonts | Cormorant Garamond + DM Sans |
| Vercel | Hosting and deployment |

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, services overview, why us, process, clientele, CTA |
| About | `/about` | Company story, leadership team, mission and values |
| Services | `/services` | Detailed breakdown of all 3 service disciplines |
| Contact | `/contact` | Contact form, office details, Google Maps embed |

---

## Project Structure

```
/lawraman
├── public/
│   ├── images/
│   │   ├── logo-white.png
│   │   ├── logo-black.png
│   │   ├── logo.png
│   │   └── team/
│   │       ├── lawrance-madapatha.jpg
│   │       ├── kavindu-madapatha.jpg
│   │       └── madusha-madapatha.jpg
│   └── videos/
│       └── hero.mp4              (to be added)
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx              (Home)
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── page.module.css
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── page.module.css
│   │   └── contact/
│   │       ├── page.tsx
│   │       └── page.module.css
│   └── components/
│       ├── BackgroundPaths/
│       ├── ClientImage/
│       ├── ContactForm/
│       ├── CtaBand/
│       ├── Footer/
│       ├── HeroSection/
│       ├── Leadership/
│       ├── Nav/
│       ├── ProcessSteps/
│       ├── SectionLabel/
│       ├── ServiceCard/
│       └── WhyUs/
├── CLAUDE.md
├── DESIGN_SYSTEM.md
└── README.md
```

---

## Brand

| Token | Value |
|---|---|
| Primary green | `#41ab5d` |
| Dark green | `#2d8a45` |
| Mid green | `#a1d99b` |
| Light green | `#e3f3df` |
| Black | `#111111` |
| Off white | `#f8f9f6` |
| Gray | `#6b7280` |
| Border | `#d4e4d0` |

**Fonts**
- Headings: Cormorant Garamond (400, 500, 600)
- Body: DM Sans (300, 400, 500)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/lawraman.git

# Navigate into the project
cd lawraman

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## Deployment

This project is deployed on Vercel. Every push to the `main` branch triggers an automatic redeployment.

### Manual deployment steps

```bash
# Make your changes, then:
git add .
git commit -m "describe your change"
git push
```

Vercel picks up the push and redeploys automatically within 30 seconds.

---

## Services

**1. Investment Process Consultancy and Project Management**
End-to-end guidance through Sri Lanka's investment landscape, from feasibility and regulatory navigation to project coordination and approval management.

**2. Environmental Engineering Consultancy**
Expert assessment and solutions for solid waste disposal, wastewater treatment, and environmental compliance aligned with Sri Lankan regulatory standards.

**3. Civil Engineering Project Consultancy**
Technical consultancy for civil infrastructure supporting manufacturing facilities, commercial developments, and industrial projects from design to delivery.

---

## Leadership

| Name | Role |
|---|---|
| Lawrance Madapatha | Founder and Chairman |
| Kavindu Madapatha | Director |
| Madusha Madapatha | Director |

---

## Contact Details

| Field | Value |
|---|---|
| Phone | 0777 915 787 |
| Email | lawramanpvtltd@gmail.com |
| Location | Kurunegala, Sri Lanka |
| Facebook | https://www.facebook.com/share/18MDA2JyuZ/ |
| YouTube | https://www.youtube.com/@Lawramanpvtltd |

---

## Development Notes

- All colors use CSS variables defined in `globals.css` - never hardcode hex values
- Use `ClientImage` wrapper instead of `next/image` directly to avoid React Client Manifest errors
- CSS Modules only - no Tailwind, no styled-components
- Inline SVG only - no icon libraries
- No `!important` anywhere
- All grids use CSS Grid, flexbox for alignment only
- Border radius is tight throughout (2px) - this is a professional consultancy site
- No gradients anywhere in the design
- For Claude Code sessions: read `CLAUDE.md` first, one file per task, no explanations

---

## Pending

- [ ] Hero background video (MP4, 1920x1080, under 15MB, 15-30 seconds)
- [ ] Client logo images for clientele section
- [ ] Google Maps embed API key for contact page
- [ ] Mobile responsive review across all pages
- [ ] Contact form backend (email submission)
- [ ] Final content review with client
- [ ] Custom domain setup on Vercel