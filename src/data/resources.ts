export interface ResourceItem {
  id: string;
  name: string;
  category: "ai" | "webdev" | "design" | "productivity" | "learning";
  categoryLabel: string;
  description: string;
  pricing: "Free" | "Freemium" | "Paid" | "Open Source";
  link: string;
  recommended: boolean;
  tags: string[];
}

export const RESOURCES_DATA: ResourceItem[] = [
  // AI Tools
  {
    id: "chatgpt",
    name: "ChatGPT / OpenAI",
    category: "ai",
    categoryLabel: "AI Tools",
    description: "Industry-standard conversational AI for code refactoring, content drafting, and productivity pipelines.",
    pricing: "Freemium",
    link: "https://chatgpt.com",
    recommended: true,
    tags: ["Productivity", "Copywriting", "Code Assistance"],
  },
  {
    id: "claude",
    name: "Claude by Anthropic",
    category: "ai",
    categoryLabel: "AI Tools",
    description: "Exceptional model for long-document analysis, complex logic debugging, and architectural review.",
    pricing: "Freemium",
    link: "https://claude.ai",
    recommended: true,
    tags: ["Long Context", "Coding", "Reasoning"],
  },
  {
    id: "v0-dev",
    name: "v0 by Vercel",
    category: "ai",
    categoryLabel: "AI Tools",
    description: "Generative UI system crafting modern React and Tailwind CSS components from natural language prompts.",
    pricing: "Freemium",
    link: "https://v0.dev",
    recommended: true,
    tags: ["Generative UI", "React", "Tailwind"],
  },
  // Web Development Tools
  {
    id: "nextjs",
    name: "Next.js",
    category: "webdev",
    categoryLabel: "Web Development",
    description: "The React framework for the Web with App Router, server-rendered components, and built-in image optimization.",
    pricing: "Open Source",
    link: "https://nextjs.org",
    recommended: true,
    tags: ["React", "Fullstack", "Production"],
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "webdev",
    categoryLabel: "Web Development",
    description: "Utility-first CSS framework for rapid and maintainable user interface styling.",
    pricing: "Open Source",
    link: "https://tailwindcss.com",
    recommended: true,
    tags: ["Styling", "CSS", "UI"],
  },
  {
    id: "lucide-icons",
    name: "Lucide Icons",
    category: "webdev",
    categoryLabel: "Web Development",
    description: "Beautiful & consistent open-source icon suite engineered for modern React interfaces.",
    pricing: "Open Source",
    link: "https://lucide.dev",
    recommended: true,
    tags: ["Icons", "Design", "SVG"],
  },
  {
    id: "vercel",
    name: "Vercel Cloud Platform",
    category: "webdev",
    categoryLabel: "Web Development",
    description: "Seamless global hosting, edge CDN, automated CI/CD previews, and instant DNS routing.",
    pricing: "Freemium",
    link: "https://vercel.com",
    recommended: true,
    tags: ["Deployment", "Hosting", "Serverless"],
  },
  // Graphic Design Tools
  {
    id: "canva",
    name: "Canva Pro & Free",
    category: "design",
    categoryLabel: "Graphic Design",
    description: "The premier collaborative design platform for social media banners, marketing slides, and brand collateral.",
    pricing: "Freemium",
    link: "https://www.canva.com",
    recommended: true,
    tags: ["Templates", "Social Media", "Branding"],
  },
  {
    id: "figma",
    name: "Figma",
    category: "design",
    categoryLabel: "Graphic Design",
    description: "Collaborative interface design tool for wireframing, component systems, and client prototypes.",
    pricing: "Freemium",
    link: "https://www.figma.com",
    recommended: true,
    tags: ["UI/UX", "Prototyping", "Vector"],
  },
  {
    id: "coolors",
    name: "Coolors.co",
    category: "design",
    categoryLabel: "Graphic Design",
    description: "Super fast color palette generator with contrast checker and accessibility audits.",
    pricing: "Free",
    link: "https://coolors.co",
    recommended: false,
    tags: ["Color Palettes", "Accessibility", "Design"],
  },
  // Productivity Tools
  {
    id: "microsoft-365",
    name: "Microsoft 365 (Word, Excel, PowerPoint)",
    category: "productivity",
    categoryLabel: "Productivity Tools",
    description: "The world's standard productivity suite for document authoring, financial spreadsheets, and presentation decks.",
    pricing: "Paid",
    link: "https://www.microsoft.com/microsoft-365",
    recommended: true,
    tags: ["Office", "Corporate", "Productivity"],
  },
  {
    id: "notion",
    name: "Notion",
    category: "productivity",
    categoryLabel: "Productivity Tools",
    description: "All-in-one workspace for notes, project documentation, personal knowledge management, and task boards.",
    pricing: "Freemium",
    link: "https://www.notion.so",
    recommended: true,
    tags: ["Knowledge Base", "Notes", "Tasks"],
  },
  // Learning Resources
  {
    id: "mdn-web-docs",
    name: "MDN Web Docs",
    category: "learning",
    categoryLabel: "Learning Resources",
    description: "The definitive reference documentation for HTML, CSS, JavaScript, and modern browser Web APIs.",
    pricing: "Free",
    link: "https://developer.mozilla.org",
    recommended: true,
    tags: ["Documentation", "Reference", "Standards"],
  },
  {
    id: "cisco-netacad",
    name: "Cisco Networking Academy",
    category: "learning",
    categoryLabel: "Learning Resources",
    description: "World-class curriculum in networking fundamentals, CCNA routing & switching, cybersecurity, and packet tracer labs.",
    pricing: "Free",
    link: "https://www.netacad.com",
    recommended: true,
    tags: ["Networking", "CCNA", "Certification"],
  },
];

