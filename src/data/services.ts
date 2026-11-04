export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  badge: string;
  icon: string;
  subcategories: string[];
  problemsAddressed: string[];
  solutions: string[];
  deliverables: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  pricingNotice: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    badge: "Core Expertise",
    icon: "Globe",
    shortDesc:
      "Modern, fast, and responsive websites engineered to elevate your brand presence and convert visitors into clients.",
    longDesc:
      "From sleek business showcases and high-conversion landing pages to interactive web applications, I deliver tailor-made digital experiences built with Next.js, React, Tailwind CSS, and clean semantic architecture. Designed for speed, SEO excellence, and flawless mobile performance.",
    subcategories: [
      "Business websites",
      "Portfolio websites",
      "Landing pages",
      "Responsive web applications",
      "Custom UI components",
    ],
    problemsAddressed: [
      "Outdated, slow-loading websites that drive potential customers away",
      "Poor mobile responsiveness causing broken layouts across phones and tablets",
      "Lack of SEO optimization leading to low visibility on search engines",
      "Cluttered codebases that are difficult to update or expand",
    ],
    solutions: [
      "Modern Next.js and React architecture engineered for high speed and clean scalability",
      "Mobile-first responsive design ensuring seamless browsing across all screen dimensions",
      "Built-in SEO metadata, Open Graph cards, fast Core Web Vitals, and accessibility (WCAG AA)",
      "Intuitive content structures and modular components that make future updates effortless",
    ],
    deliverables: [
      "Production-ready Next.js / React web application",
      "Responsive UI tested across desktop, tablet, and mobile browsers",
      "SEO configuration (sitemap, meta tags, schema markup)",
      "Contact form integration & lead capture setup",
      "Full source code and deployment assistance (Vercel / GitHub)",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Requirements",
        description:
          "We analyze your brand goals, target audience, content structure, and key functionality requirements.",
      },
      {
        step: "02",
        title: "Wireframing & UI Architecture",
        description:
          "Designing the user flow, layout hierarchy, visual components, and interactive prototypes.",
      },
      {
        step: "03",
        title: "Engineering & Performance Optimization",
        description:
          "Writing clean, modular code with React, Tailwind CSS, smooth animations, and fast asset loading.",
      },
      {
        step: "04",
        title: "Testing, Launch & Handover",
        description:
          "Cross-browser testing, SEO audit, deployment to production, and full project handover.",
      },
    ],
    faqs: [
      {
        question: "How long does a website project take?",
        answer:
          "Typical landing pages take 1–2 weeks, while comprehensive multi-page business websites take 3–4 weeks depending on scope and content readiness.",
      },
      {
        question: "Can I manage or update the content myself later?",
        answer:
          "Yes! The architecture is modular and can be integrated with headless CMS platforms (such as Supabase, Strapi, or markdown files) for easy editing.",
      },
      {
        question: "Is domain and hosting included?",
        answer:
          "I assist you through every step of domain connection and free or cost-effective hosting setup on top platforms like Vercel or Cloudflare.",
      },
    ],
    pricingNotice: "Request a Quote — Tailored to project scope and requirements",
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Solutions",
    badge: "Smart Automation",
    icon: "Bot",
    shortDesc:
      "Streamline operations, optimize workflows, and integrate modern AI tooling into daily business practices.",
    longDesc:
      "Unlock the practical power of artificial intelligence without overcomplication. I assist businesses, educators, and creators in adopting generative AI workflows, automating content drafting, configuring productivity pipelines, and identifying smart automation opportunities.",
    subcategories: [
      "AI-powered workflows",
      "AI content workflows",
      "Business productivity solutions",
      "AI integration planning",
      "Prompt engineering & task automation",
    ],
    problemsAddressed: [
      "Hours lost on repetitive manual drafting, summarizing, and data formatting",
      "Overwhelmed by AI hype without knowing which specific tools deliver real ROI",
      "Disjointed customer communication and slow response turnarounds",
      "Difficulty establishing consistent brand tone across automated outputs",
    ],
    solutions: [
      "Practical AI workflows tailored specifically to your daily operations",
      "Custom system prompts and templates for marketing, emails, and reporting",
      "Integration plans connecting AI APIs to your website, CRM, or document pipelines",
      "Hands-on training for your team to utilize AI tools productively and responsibly",
    ],
    deliverables: [
      "AI workflow blueprint and implementation roadmap",
      "Custom system prompts and reusable content generation templates",
      "Automated document and communication helpers",
      "Practical documentation and team training session",
    ],
    process: [
      {
        step: "01",
        title: "Workflow Audit",
        description:
          "Identifying repetitive bottlenecks in your daily tasks where AI provides immediate time savings.",
      },
      {
        step: "02",
        title: "Tool Selection & System Design",
        description:
          "Selecting the right models, platforms, and prompt frameworks suited to your domain.",
      },
      {
        step: "03",
        title: "Prototype & Validation",
        description:
          "Building and testing automated pipelines with real-world business scenarios to ensure high output quality.",
      },
      {
        step: "04",
        title: "Integration & Training",
        description:
          "Deploying the workflow and conducting a practical training walkthrough for your team.",
      },
    ],
    faqs: [
      {
        question: "Do I need coding knowledge to use these AI workflows?",
        answer:
          "Not at all. My solutions are designed for ease of use by non-technical teams, featuring clear interfaces and straightforward instructions.",
      },
      {
        question: "Will my business data remain secure?",
        answer:
          "Security and privacy come first. We configure workflows following best practices that keep proprietary data protected and private.",
      },
    ],
    pricingNotice: "Request a Quote — Scaled to operational scope and integration needs",
  },
  {
    id: "graphic-design-branding",
    slug: "graphic-design-branding",
    title: "Graphic Design & Branding",
    badge: "Creative Identity",
    icon: "Palette",
    shortDesc:
      "Eye-catching visual identities, Canva templates, and high-impact marketing graphics tailored for modern businesses.",
    longDesc:
      "A strong brand identity establishes instant credibility. I craft professional logo designs, brand style guides, social media campaign graphics, Canva design systems, and marketing collateral that resonate with Cambodian and international audiences.",
    subcategories: [
      "Logo design",
      "Brand identity",
      "Canva designs",
      "Social media graphics",
      "Marketing materials & banners",
    ],
    problemsAddressed: [
      "Inconsistent visual style across Facebook, TikTok, Instagram, and printed banners",
      "Generic or low-resolution logos that look amateurish on modern displays",
      "Lack of editable templates for non-design team members to make quick social posts",
      "Weak brand distinction against local market competitors",
    ],
    solutions: [
      "Distinctive logos and cohesive color palettes that tell your brand story",
      "Complete brand guideline manuals detailing typography, color codes, and usage rules",
      "Editable Canva and Figma templates your team can customize in minutes",
      "High-resolution export packages for both digital screens and physical print",
    ],
    deliverables: [
      "Vector logo files (SVG, EPS, PNG transparent, high-res JPG)",
      "Brand identity guide (color codes HEX/RGB/CMYK, typography hierarchy)",
      "Social media graphic kit (profile pictures, covers, story templates, post frames)",
      "Editable Canva template links for future self-service design",
      "Print-ready promotional collateral (posters, banners, business cards)",
    ],
    process: [
      {
        step: "01",
        title: "Brand Discovery",
        description:
          "Understanding your vision, industry vibe, audience demographic, and aesthetic preferences.",
      },
      {
        step: "02",
        title: "Concept Creation",
        description:
          "Developing 2–3 unique design directions exploring layout, symbolism, and color schemes.",
      },
      {
        step: "03",
        title: "Refinement & Polish",
        description:
          "Incorporating your feedback to perfect the chosen direction down to the finest detail.",
      },
      {
        step: "04",
        title: "Brand Asset Delivery",
        description:
          "Exporting all formats for web, social media, print, and providing editable master files.",
      },
    ],
    faqs: [
      {
        question: "What files will I receive upon completion?",
        answer:
          "You receive vector SVG, high-resolution PNG, JPG, PDF, and direct editable links (such as Canva or Figma).",
      },
      {
        question: "Can I edit the designs myself without Photoshop?",
        answer:
          "Yes! I specialize in creating editable Canva templates that allow you to change text, photos, and colors directly from your phone or browser.",
      },
    ],
    pricingNotice: "Request a Quote — Customized by asset volume and branding scope",
  },
  {
    id: "it-support",
    slug: "it-support",
    title: "IT Support & Technical Services",
    badge: "Reliable Systems",
    icon: "Wrench",
    shortDesc:
      "Comprehensive hardware and software maintenance, Windows 10/11 optimization, and enterprise troubleshooting.",
    longDesc:
      "Backed by over two years of practical IT support experience and Cisco CCNA networking expertise, I solve complex hardware malfunctions, perform bulk Windows 10/11 enterprise setups, resolve driver conflicts, and keep office and home workstations running at peak performance.",
    subcategories: [
      "Windows installation & configuration",
      "Software configuration & licensing",
      "PC troubleshooting & diagnosis",
      "Hardware maintenance & upgrades",
      "System optimization & malware removal",
      "Local network & Wi-Fi configuration",
    ],
    problemsAddressed: [
      "Slow, sluggish computers hindering employee productivity and causing crashes",
      "Corrupted Windows operating systems, blue-screen errors (BSOD), or boot loops",
      "Unconfigured drivers, software licensing headaches, and update failures",
      "Unstable local Wi-Fi, Ethernet, and office network connectivity",
    ],
    solutions: [
      "Complete clean Windows 10 / 11 installation with automated debloating and speed tuning",
      "Accurate hardware diagnosis, SSD upgrades, RAM installations, and thermal repasting",
      "Professional driver setup, essential productivity software packaging, and security hardening",
      "Network routing, switch port configuration, and wireless access point optimization",
    ],
    deliverables: [
      "Fast, stable, and fully updated operating system environment",
      "Diagnostic report detailing hardware health and upgrade recommendations",
      "Configured office workstation with all required software installed and ready",
      "Follow-up troubleshooting support and maintenance advice",
    ],
    process: [
      {
        step: "01",
        title: "Diagnosis & Inspection",
        description:
          "Testing system components, checking storage drive SMART health, and diagnosing error logs.",
      },
      {
        step: "02",
        title: "Solution Strategy",
        description:
          "Determining whether the issue requires OS reinstallation, driver updates, or hardware replacement.",
      },
      {
        step: "03",
        title: "Execution & Optimization",
        description:
          "Performing clean setups, applying performance tweaks, and configuring software and security.",
      },
      {
        step: "04",
        title: "Stress Testing & Verification",
        description:
          "Running benchmark tests to verify thermal stability, networking speeds, and overall responsiveness.",
      },
    ],
    faqs: [
      {
        question: "Do you offer remote IT support or on-site assistance?",
        answer:
          "Both! I provide remote troubleshooting via AnyDesk / TeamViewer for software glitches, and on-site support in Cambodia for hardware setups.",
      },
      {
        question: "Can an old computer be upgraded instead of buying a new one?",
        answer:
          "In many cases, yes. Installing a fast NVMe/SATA SSD and expanding RAM can make an older machine feel brand new at a fraction of the cost.",
      },
    ],
    pricingNotice: "Request a Quote — Based on service type and number of devices",
  },
  {
    id: "computer-training",
    slug: "computer-training",
    title: "Computer Training & Education",
    badge: "100+ Students Taught",
    icon: "GraduationCap",
    shortDesc:
      "Practical, patient instruction in Microsoft Office (Word, Excel, PowerPoint) and everyday digital productivity.",
    longDesc:
      "Having personally trained over 100 students through university internships and academic courses, I translate complex software features into simple, actionable steps. Whether you need training for office staff, university students, or personal skill building, I offer clear step-by-step guidance.",
    subcategories: [
      "Microsoft Word (Corporate documents, tables, styling)",
      "Microsoft Excel (Formulas, PivotTables, VLOOKUP/XLOOKUP, charts)",
      "Microsoft PowerPoint (Slide design, animations, presentations)",
      "Computer fundamentals & digital hygiene",
      "Practical technology training for office staff",
    ],
    problemsAddressed: [
      "Employees wasting hours formatting documents or struggling with Excel calculations",
      "Unprofessional presentation slides that fail to engage audiences",
      "Lack of confidence in basic computer navigation and file management",
      "High training costs from generic online courses that lack personalized feedback",
    ],
    solutions: [
      "Hands-on exercises based on real business documents and administrative workflows",
      "Mastery of high-value Excel formulas (SUMIFS, XLOOKUP, PivotTables) to automate numbers",
      "Professional corporate styling techniques in Word for polished letters, contracts, and reports",
      "Visual storytelling in PowerPoint to present ideas clearly and persuasively",
    ],
    deliverables: [
      "Tailored curriculum syllabus matching student or staff proficiency levels",
      "Real-world exercise workbooks, sample spreadsheets, and templates",
      "One-on-one or group interactive training sessions",
      "Practical reference cheat-sheets for continuous self-study",
    ],
    process: [
      {
        step: "01",
        title: "Skill Assessment",
        description:
          "Evaluating the current proficiency of students or employees to pinpoint areas needing focus.",
      },
      {
        step: "02",
        title: "Custom Curriculum Design",
        description:
          "Building targeted lessons focused on the specific documents and tasks used in their daily routine.",
      },
      {
        step: "03",
        title: "Interactive Instruction",
        description:
          "Conducting hands-on walkthroughs with real-time feedback and practical troubleshooting.",
      },
      {
        step: "04",
        title: "Practical Evaluation",
        description:
          "Testing student capability with real project scenarios to guarantee lasting confidence.",
      },
    ],
    faqs: [
      {
        question: "Can sessions be conducted in Khmer or English?",
        answer:
          "Yes! Training can be delivered fluently in Khmer, English, or a bilingual mix to ensure complete student comfort.",
      },
      {
        question: "Do you offer corporate training for office employees?",
        answer:
          "Yes, I design customized workplace workshops for small businesses, NGOs, and administrative teams.",
      },
    ],
    pricingNotice: "Request a Quote — Tailored to class size, duration, and curriculum depth",
  },
  {
    id: "digital-products",
    slug: "digital-products",
    title: "Digital Products & Resources",
    badge: "Ready-to-Use",
    icon: "FolderDown",
    shortDesc:
      "Curated Canva templates, website components, productivity workbooks, and digital learning assets.",
    longDesc:
      "Accelerate your workflow with ready-to-use digital assets designed for efficiency and aesthetic appeal. Explore customizable Canva social templates, responsive website starter components, Excel business models, and educational study guides built for modern professionals.",
    subcategories: [
      "Canva social media & banner templates",
      "Responsive website templates & UI kits",
      "Microsoft Office business & tracking templates",
      "Productivity resources & checklists",
      "Digital learning materials & cheat sheets",
    ],
    problemsAddressed: [
      "Starting every document, presentation, or website from a blank canvas is exhausting",
      "Hiring a full design agency for simple social posts is cost-prohibitive for small shops",
      "Lack of structured Excel sheets for daily inventory, invoicing, or expense tracking",
    ],
    solutions: [
      "Professionally styled templates that only require replacing text and photos",
      "Pre-coded, accessible UI modules ready to drop into modern web projects",
      "Automated spreadsheet templates with pre-built formulas and clean formatting",
      "Instant digital downloads with lifetime access and clear instructions",
    ],
    deliverables: [
      "Instant access to master Canva / Figma template links",
      "Clean source code packages (HTML/CSS/React components)",
      "Pre-configured Excel workbooks with formula documentation",
      "Comprehensive PDF user guides for quick customization",
    ],
    process: [
      {
        step: "01",
        title: "Need Identification",
        description:
          "Analyzing common operational friction points faced by Cambodian businesses and students.",
      },
      {
        step: "02",
        title: "Design & Quality Engineering",
        description:
          "Crafting aesthetic, error-free templates that comply with modern design standards.",
      },
      {
        step: "03",
        title: "Documentation & User Testing",
        description:
          "Writing clear visual walkthroughs to ensure anyone can modify the assets in seconds.",
      },
      {
        step: "04",
        title: "Publishing & Updates",
        description:
          "Releasing downloadable assets and continuously updating them based on user feedback.",
      },
    ],
    faqs: [
      {
        question: "Are these templates free or paid?",
        answer:
          "We offer a selection of free community resources alongside premium comprehensive commercial kits.",
      },
      {
        question: "Can I request a custom template for my specific business?",
        answer:
          "Absolutely! Reach out via the contact form and I can craft a bespoke template system for your business.",
      },
    ],
    pricingNotice: "Explore Resources or Request a Custom Template Kit",
  },
];

