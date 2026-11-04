export interface SkillItem {
  name: string;
  category: "frontend" | "programming" | "media" | "it" | "productivity" | "networking";
  proficiency?: number; // editable percentage
  iconName: string;
  color: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Modern, responsive, and performant web interfaces built with cutting-edge standards.",
    iconName: "Layout",
    skills: [
      { name: "HTML5", category: "frontend", proficiency: 98, iconName: "Code", color: "#e34c26", description: "Semantic markup, accessibility, modern standards" },
      { name: "CSS3 / Modern Grid", category: "frontend", proficiency: 95, iconName: "Palette", color: "#264de4", description: "Subgrids, flexbox, glassmorphism, responsive" },
      { name: "JavaScript (ES6+)", category: "frontend", proficiency: 92, iconName: "FileCode", color: "#f7df1e", description: "DOM manipulation, asynchronous flows, APIs" },
      { name: "React / Next.js", category: "frontend", proficiency: 88, iconName: "Atom", color: "#61dbfb", description: "Component lifecycle, state hooks, server rendering" },
    ],
  },
  {
    id: "programming",
    name: "Programming & Development",
    description: "Robust scripting, logic automation, and collaborative version control.",
    iconName: "Terminal",
    skills: [
      { name: "Python", category: "programming", proficiency: 86, iconName: "FileTerminal", color: "#3776ab", description: "Automation scripts, GUI with CustomTkinter, data tools" },
      { name: "Git & Version Control", category: "programming", proficiency: 88, iconName: "GitBranch", color: "#f1502f", description: "Branching, repositories, GitHub collaboration" },
    ],
  },
  {
    id: "media",
    name: "Media Processing",
    description: "High-throughput stream extraction, transcode remuxing, and media pipeline scripting.",
    iconName: "Video",
    skills: [
      { name: "yt-dlp Scrapers", category: "media", proficiency: 90, iconName: "DownloadCloud", color: "#ff0050", description: "Custom platform extractors, audio/video stream selection" },
      { name: "FFmpeg Engine", category: "media", proficiency: 85, iconName: "Cpu", color: "#0ea5e9", description: "Lossless transcoding, stream muxing, DASH chunk fusion" },
    ],
  },
  {
    id: "it",
    name: "IT Support & Systems",
    description: "Practical operating system engineering, maintenance, and reliable bug resolution.",
    iconName: "Wrench",
    skills: [
      { name: "Windows 10 / 11", category: "it", proficiency: 96, iconName: "Monitor", color: "#00a4ef", description: "Enterprise deployment, debloating, optimization" },
      { name: "OS Troubleshooting", category: "it", proficiency: 94, iconName: "AlertTriangle", color: "#94a3b8", description: "Registry repair, event log diagnostics, BSOD resolution" },
      { name: "Hardware Maintenance", category: "it", proficiency: 90, iconName: "HardDrive", color: "#10b981", description: "Component diagnosis, SSD/RAM upgrades, thermal servicing" },
    ],
  },
  {
    id: "productivity",
    name: "Productivity & Education",
    description: "Certified instruction and document architecture empowering over 100+ students.",
    iconName: "GraduationCap",
    skills: [
      { name: "Microsoft Word", category: "productivity", proficiency: 98, iconName: "FileText", color: "#2b579a", description: "Corporate templates, styles hierarchy, index automation" },
      { name: "Microsoft Excel", category: "productivity", proficiency: 94, iconName: "Sheet", color: "#217346", description: "XLOOKUP/VLOOKUP, PivotTables, financial data modeling" },
      { name: "Microsoft PowerPoint", category: "productivity", proficiency: 92, iconName: "Presentation", color: "#d24726", description: "Visual storytelling, slide master layouts, animations" },
    ],
  },
  {
    id: "networking",
    name: "Networking Fundamentals",
    description: "Enterprise network topologies, routing protocols, and certified switching infrastructure.",
    iconName: "Network",
    skills: [
      { name: "Cisco CCNAv7 Fundamentals", category: "networking", proficiency: 88, iconName: "Share2", color: "#049fd9", description: "VLANs, inter-VLAN routing, STP, IPv4/IPv6, EtherChannel" },
      { name: "Wireless LAN (WLC)", category: "networking", proficiency: 84, iconName: "Wifi", color: "#38bdf8", description: "Enterprise Wi-Fi essentials and switch port security" },
    ],
  },
];

export const CORE_PROFICIENCY_BARS = [
  { label: "Frontend Development", percent: 95, color: "#2563EB" },
  { label: "Responsive Design & Architecture", percent: 90, color: "#38BDF8" },
  { label: "UI / UX & Design Systems", percent: 85, color: "#6366F1" },
  { label: "IT Systems & OS Optimization", percent: 94, color: "#10B981" },
  { label: "Microsoft Office Education", percent: 96, color: "#F59E0B" },
];

