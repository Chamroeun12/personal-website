# CHAMROEUN SARAN — Personal Brand & Digital Solutions Platform

> **"Building Digital Experiences. Empowering People Through Technology."**  
> Modern Personal Brand, Developer Portfolio, and Digital Services Platform for **Chamroeun SARAN** — Frontend Developer, Computer Science Teacher, and IT Specialist based in Cambodia.

---

## 🌟 Platform Highlights

- **Authentic Professional Identity**: Grounded strictly in Chamroeun SARAN's verified qualifications from his GitHub Pages portfolio (`https://chamroeun12.github.io/portfolio/`).
- **Complete Agency & Service Architecture**: 6 dedicated service modules ready for commercial scalability:
  1. **Web Development** (Modern business sites, portfolios, landing pages)
  2. **AI-Powered Solutions** (Workflow automation, productivity tools, prompt engineering)
  3. **Graphic Design & Brand Identity** (Logos, social kits, marketing collateral)
  4. **IT Support & Systems Maintenance** (Windows 10/11 troubleshooting, hardware maintenance, PC repair)
  5. **Computer Training & Education** (MS Word, Excel, PowerPoint, computer fundamentals)
  6. **Digital Products & Templates** (Curated templates and digital guides)
- **Verified Credentials & Lightbox Diplomas**:
  - **Bachelor of Science in Information Technology** (University of South-East Asia, USEA — Conferred March 9, 2026)
  - **Cisco CCNAv7: Introduction to Networks** (Cisco Networking Academy — Conferred June 6, 2023)
  - **Udemy: JavaScript 10 Projects in 10 Days** (Conferred November 25, 2025)
  - **Computer for Administration Teacher Certificate** (USEA — Conferred March 2026)
  - Direct PDF downloads & high-resolution scan previews included.
- **Featured Real Projects**:
  - **Video Pro: Advanced Media Downloader** (Python, CustomTkinter, yt-dlp, FFmpeg, Multithreading) with interactive Architecture Modal.
  - **Interactive Todo App** (Vanilla JS, LocalStorage, Filter tags) with an embedded, live playable widget directly inside the browser.
  - **Luxury Real Estate Landing Page** (Modern UI, Parallax, Responsive CSS Grid) with full live standalone preview.
  - **SaaS Analytics Dashboard UI** (Data visualization layout, CSS Grid, Dark Mode) with KPI showcase modal.
- **Free Client-Side AI & Digital Tools (`/tools`)**:
  - **Image Converter & Optimizer**: Client-side conversion to WebP, PNG, JPG with up to 90% size reduction and zero cloud upload.
  - **Smart Link Generator**: Direct click-to-chat links for Telegram (`t.me`) and WhatsApp (`wa.me`) with custom greetings, plus full UTM marketing tracking URL generator.
  - **Branded QR Code Generator**: High-resolution vector SVG and PNG QR codes with customizable brand colors and support for URLs, Telegram, WiFi networks, and vCards.
  - **AI Prompt Studio**: Battle-tested prompt formulas tailored for Cambodian business outreach, social media growth, and technical IT workflows.
- **Interactive Light & Dark Theme**: Full CSS variable system with smooth toggling and persistence.
- **Administrative CMS Dashboard (`/admin`)**: A centralized control center for managing inquiries, editing skill proficiencies, toggling project visibility, and adding blog articles.
- **Functional Lead Capture (`/contact` & `/api/contact`)**: Form validation with Zod and React Hook Form, honeypot spam protection, and real-time user feedback.
- **Technical SEO Ready**: Canonical metadata, OpenGraph tags, dynamic sitemap (`/sitemap.xml`), and search engine crawling rules (`/robots.txt`).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Islands) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict typing, zero compiler errors) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + CSS Custom Variables |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & CSS keyframes |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Fonts** | Google Fonts: Poppins (Headings) + Inter (Body text) |

---

## 📂 Project Structure

```
personal-website/
├── public/
│   ├── assets/
│   │   ├── docs/
│   │   │   ├── resume.pdf
│   │   │   └── certificates/           # Real verified official certificate PDFs
│   │   └── images/
│   │       ├── profile/                # Real portrait photo
│   │       ├── projects/               # Real project mockups & assets
│   │       └── certificates/           # High-resolution scanned certificate images
│   ├── real-estate.html                # Standalone preview for Luxury Real Estate project
│   ├── robots.txt                      # Search engine crawlers guide
│   └── sitemap.xml                     # XML Sitemap for Google Search Console
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout with theme provider & meta tags
│   │   ├── page.tsx                    # Premium 10-section homepage
│   │   ├── about/                      # About Chamroeun SARAN, journey & philosophies
│   │   ├── services/                   # All 6 service offerings
│   │   │   └── [slug]/                 # Individual service deep-dive pages
│   │   ├── portfolio/                  # Project showcase, category filters & search
│   │   ├── certificates/               # Verified credentials gallery with PDF downloads
│   │   ├── resources/                  # Curated developer, AI & designer toolkit
│   │   ├── blog/                       # Technology & education blog
│   │   │   └── [slug]/                 # In-depth technical tutorial articles
│   │   ├── contact/                    # Multi-channel contact page with quote request
│   │   ├── admin/                      # Business & content management dashboard preview
│   │   └── api/
│   │       └── contact/route.ts        # POST endpoint for lead capture with Zod validation
│   ├── components/
│   │   ├── home/                       # Hero, Intro, Services, Featured, Skills, Experience, CTA
│   │   ├── layout/                     # Navbar, Footer, ThemeToggle, ThemeProvider
│   │   └── ui/                         # Modals (Certificates, VideoPro, Saas, InteractiveTodo)
│   └── data/
│       ├── profile.ts                  # Brand data, bio, experience timeline, contact
│       ├── services.ts                 # Service details, problems, solutions, deliverables
│       ├── projects.ts                 # Authentic projects with real links & metrics
│       ├── skills.ts                   # 6 skill categories with editable proficiency scores
│       ├── certificates.ts             # Verified credentials & issuance dates
│       ├── resources.ts                # Curated free/paid tools
│       └── blog.ts                     # Educational technology tutorials
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.18.0 or later (Node 20+ LTS recommended)
- `npm` or `pnpm`

### 1. Installation

Clone or open the directory in your terminal and install dependencies:

```bash
npm install
```

### 2. Running the Development Server

Run the development server with **Turbopack** for ultra-fast hot reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the platform.

### 3. Running Webpack Dev (Alternative)

```bash
npm run dev:webpack
```

### 4. Type Checking

Validate all TypeScript definitions:

```bash
npx tsc --noEmit
```

### 5. Production Build

To build the static and server-rendered assets for production:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

---

## 🌐 Deploying to Vercel (Recommended)

1. Push your repository to your **GitHub** account (`https://github.com/chamroeun12/personal-website`).
2. Visit [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New Project** and select `personal-website`.
4. Leave build settings as default (`Framework Preset: Next.js`).
5. Click **Deploy**. Vercel will build and assign you a fast worldwide edge URL (e.g. `https://chamroeun-saran.vercel.app`).
6. Under **Project Settings > Domains**, connect your custom domain (e.g., `chamroeunsaran.com`).

---

## 📞 Official Contact & Socials

- **Brand Name**: Chamroeun SARAN
- **Email**: [saranchamroeun@gmail.com](mailto:saranchamroeun@gmail.com)
- **Telegram**: [@SARANChamroeun](https://t.me/SARANChamroeun)
- **Direct Call / Telegram**: `+855 96 787 6525`
- **Location**: Cambodia
- **Existing Portfolio**: [chamroeun12.github.io/portfolio](https://chamroeun12.github.io/portfolio/)

---

© 2026 Chamroeun SARAN. All Rights Reserved. Built with precision and care.

