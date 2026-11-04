export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "all" | "web" | "ui" | "python";
  categoryLabel: string;
  featured: boolean;
  image: string;
  technologies: string[];
  summary: string;
  fullDescription: string;
  challenge: string;
  architecture: string;
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  demoUrl?: string;
  githubUrl: string;
  modalType?: "video-pro" | "saas" | "interactive-todo";
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "video-pro",
    slug: "video-pro-downloader",
    title: "Video Pro: Advanced Downloader",
    subtitle: "High-throughput desktop utility for lossless video stream acquisition",
    category: "python",
    categoryLabel: "Python & Media",
    featured: true,
    image: "/assets/images/projects/video_downloader_mockup_1775306873596.png",
    technologies: ["Python 3.10", "CustomTkinter", "yt-dlp", "FFmpeg Engine", "Multithreading"],
    summary:
      "A robust desktop media processing utility capable of extracting high-quality video (up to 4K / 60FPS) from multiple platforms with asynchronous scrapers and automatic FFmpeg stream muxing.",
    fullDescription:
      "Video Pro is an advanced desktop application engineered to eliminate the invasive ads, low download limits, and broken audio streams common in commercial downloaders. Utilizing yt-dlp core scrapers combined with custom multithreading logic, it downloads fragmented DASH video and audio chunks concurrently and fuses them with FFmpeg into pristine MP4/MKV files.",
    challenge:
      "Most existing media downloaders are plagued with intrusive ads, telemetry, low download caps, or fail to merge separate high-bitrate video and audio streams beyond 1080p.",
    architecture:
      "Engineered an asynchronous Python core leveraging yt-dlp scraper logic. Integrated FFmpeg for automatic post-processing, remuxing separate DASH audio/video streams into pristine MP4/MKV files with concurrent chunk workers.",
    metrics: [
      {
        label: "Max Stream Quality",
        value: "4K / 60 FPS",
        sublabel: "Lossless Resolution",
      },
      {
        label: "Download Velocity",
        value: "5x Faster",
        sublabel: "Multithreaded Chunking",
      },
      {
        label: "Platform Engine",
        value: "100% Ad-Free",
        sublabel: "Open Source Core",
      },
    ],
    githubUrl: "https://github.com/Chamroeun12",
    modalType: "video-pro",
  },
  {
    id: "interactive-todo",
    slug: "interactive-todo-app",
    title: "Interactive Todo App",
    subtitle: "Modern client-side task management with reactive state and LocalStorage",
    category: "web",
    categoryLabel: "Web Applications",
    featured: true,
    image: "/assets/images/projects/video_downloader_mockup_1775306873596.png", // fallback preview
    technologies: ["Semantic HTML5", "CSS3 Modern Grid", "Vanilla JavaScript (ES6+)", "LocalStorage API", "Fluid Animations"],
    summary:
      "A high-performance client-side task management application featuring instant state persistence, real-time category filtering, task completion toggles, and smooth micro-interactions.",
    fullDescription:
      "Demonstrating fundamental DOM manipulation, event delegation, and browser state management without bulky runtime dependencies. Includes active/completed filtering, counter tracking, keyboard shortcuts, and responsive CSS styling.",
    challenge:
      "Demonstrating clean JavaScript architecture, predictable state persistence, and responsive interactive feedback without external framework baggage.",
    architecture:
      "Crafted with pure ES6+ JavaScript, event delegation for dynamic lists, custom localStorage sync wrappers, and CSS transitions that eliminate layout shifts.",
    metrics: [
      {
        label: "Bundle Overhead",
        value: "0 KB",
        sublabel: "Pure Vanilla JS",
      },
      {
        label: "State Latency",
        value: "<1 ms",
        sublabel: "LocalStorage Sync",
      },
      {
        label: "Accessibility",
        value: "WCAG AA",
        sublabel: "Keyboard & Screen Reader",
      },
    ],
    githubUrl: "https://github.com/Chamroeun12",
    modalType: "interactive-todo",
  },
  {
    id: "luxury-real-estate",
    slug: "luxury-real-estate-landing",
    title: "Luxury Real Estate Landing Page",
    subtitle: "High-end responsive architectural showcase with parallax effects",
    category: "web",
    categoryLabel: "Web Applications",
    featured: true,
    image: "/assets/images/projects/video_downloader_mockup_1775306873596.png",
    technologies: ["Semantic HTML5", "CSS3 Flex & Grid", "Parallax Scroll", "Modern UI/UX Design", "Responsive Layout"],
    summary:
      "A luxury real estate landing page template showcasing premium properties with dynamic parallax scrolling, high-resolution imagery cards, and modern typography.",
    fullDescription:
      "Engineered with clean architectural principles, subtle glassmorphism cards, property amenity badges, and interactive inquiry triggers. Fully optimized for instant rendering across all mobile and desktop devices.",
    challenge:
      "Creating an elegant, upscale visual identity for luxury real estate while maintaining ultra-fast load times and smooth scroll animations.",
    architecture:
      "Semantic HTML5 structure with custom CSS variables, CSS subgrid property layouts, and optimized image containers preventing layout shift (CLS 0.0).",
    metrics: [
      {
        label: "Core Web Vitals",
        value: "98/100",
        sublabel: "Performance Score",
      },
      {
        label: "Responsive Breakpoints",
        value: "100%",
        sublabel: "Fluid Across Devices",
      },
      {
        label: "Visual Aesthetic",
        value: "Modern Minimalist",
        sublabel: "Architectural Focus",
      },
    ],
    demoUrl: "/real-estate.html",
    githubUrl: "https://github.com/Chamroeun12",
  },
  {
    id: "saas-dashboard",
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard UI",
    subtitle: "Enterprise data visualization hub crafted with modern CSS Grid & Dark Mode",
    category: "ui",
    categoryLabel: "UI / UX Design",
    featured: true,
    image: "/assets/images/projects/video_downloader_mockup_1775306873596.png",
    technologies: ["Dashboard UI", "CSS Grid & Subgrid", "Data Visualization", "Dark Mode", "Accessible Components"],
    summary:
      "A complex analytics and operations dashboard featuring interactive KPI metric rows, revenue growth charts, user retention monitoring, and glassmorphic aesthetics.",
    fullDescription:
      "Built with a modular card component system, responsive CSS subgrids, and custom CSS variables supporting dynamic theme toggles. Optimized for fast render times and zero external layout shifts.",
    challenge:
      "Organizing large amounts of real-time metrics, data visualisations, and filtering controls into an intuitive, uncluttered user interface.",
    architecture:
      "Modular dashboard cards with CSS Grid layout, SVG data representations, WCAG 2.1 AA compliant color contrast, and complete keyboard accessibility.",
    metrics: [
      {
        label: "ARR Growth Tracked",
        value: "$48,250",
        sublabel: "+24.5% vs last month",
      },
      {
        label: "Active User Base",
        value: "14,890",
        sublabel: "+18.2% new signups",
      },
      {
        label: "User Retention",
        value: "96.4%",
        sublabel: "Industry Top 5%",
      },
    ],
    githubUrl: "https://github.com/Chamroeun12",
    modalType: "saas",
  },
];

