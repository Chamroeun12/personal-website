export interface ProfileData {
  name: string;
  brandName: string;
  initials: string;
  title: string;
  tagline: string;
  subTagline: string;
  location: string;
  availability: string;
  avatarUrl: string;
  resumeUrl: string;
  contact: {
    email: string;
    telegramUsername: string;
    telegramUrl: string;
    phone: string;
    phoneDisplay: string;
    locationDisplay: string;
  };
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  journey: {
    year: string;
    phase: string;
    title: string;
    institution: string;
    description: string;
    tag: string;
    color: "blue" | "cyan" | "gold";
  }[];
  philosophies: {
    title: string;
    desc: string;
    icon: string;
  }[];
  values: {
    title: string;
    desc: string;
  }[];
}

export const PROFILE_DATA: ProfileData = {
  name: "Chamroeun SARAN",
  brandName: "CHAMROEUN SARAN",
  initials: "CS",
  title: "Frontend Developer | Computer Science Teacher | IT Specialist",
  tagline: "Building Digital Experiences That Make a Difference.",
  subTagline:
    "I'm Chamroeun SARAN, a Frontend Developer, Computer Science Teacher, and IT Specialist based in Cambodia. I combine technology, creativity, and education to build practical digital solutions and empower people through technology.",
  location: "Cambodia",
  availability: "Available for Projects & Consultations",
  avatarUrl: "/assets/images/profile/profile_avatar.jpg",
  resumeUrl: "/assets/docs/resume.pdf",
  contact: {
    email: "saranchamroeun@gmail.com",
    telegramUsername: "@SARANChamroeun",
    telegramUrl: "https://t.me/SARANChamroeun",
    phone: "+855967876525",
    phoneDisplay: "+855 96 787 6525",
    locationDisplay: "Phnom Penh & Siem Reap, Cambodia",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Chamroeun12",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chamroeun-saran-548a34302/",
      icon: "Linkedin",
    },
    {
      name: "Telegram",
      url: "https://t.me/SARANChamroeun",
      icon: "Send",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@chamroeunsaran",
      icon: "Youtube",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/KroeunZ/",
      icon: "Facebook",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@chamroeun_12",
      icon: "Share2",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kroeunz",
      icon: "Instagram",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/saranchamroeun",
      icon: "Twitter",
    },
  ],
  stats: [
    {
      label: "Teaching Impact",
      value: "100+",
      sublabel: "Students Trained in Office & Tech",
    },
    {
      label: "Experience",
      value: "2+",
      sublabel: "Years Professional Practice",
    },
    {
      label: "Technical Accuracy",
      value: "100%",
      sublabel: "Clean Code & System Integrity",
    },
    {
      label: "Verified Credentials",
      value: "7+",
      sublabel: "Degrees & Industry Certifications",
    },
  ],
  journey: [
    {
      year: "2023",
      phase: "Networking & Enterprise Foundations",
      title: "Cisco CCNAv7 Certified",
      institution: "Cisco Networking Academy & USEA",
      description:
        "Mastered enterprise switching, routing protocols, VLANs, EtherChannel, and network security architectures.",
      tag: "Networking",
      color: "cyan",
    },
    {
      year: "2024 - Present",
      phase: "Educational Leadership",
      title: "Computer Science Teacher",
      institution: "Various Academic & Training Environments",
      description:
        "Educated over 100+ students in practical computer fundamentals, advanced Microsoft Word documentation, Excel modeling, and PowerPoint presentations.",
      tag: "Education",
      color: "blue",
    },
    {
      year: "2023 - Present",
      phase: "Technical Operations",
      title: "Freelance IT Support Specialist",
      institution: "Independent Consultancy",
      description:
        "Providing end-to-end Windows 10/11 system deployments, hardware troubleshooting, OS optimization, driver maintenance, and reliable bug fixing.",
      tag: "IT Support",
      color: "cyan",
    },
    {
      year: "2025",
      phase: "Media Processing & Web Innovation",
      title: "Video Pro Engine & Dynamic Web Engineering",
      institution: "Independent Software Development",
      description:
        "Architected high-throughput multithreaded media scrapers with yt-dlp & FFmpeg, alongside modern project-based JavaScript web applications.",
      tag: "Software Engineering",
      color: "blue",
    },
    {
      year: "2026",
      phase: "Academic Milestone",
      title: "Bachelor of Science in Information Technology",
      institution: "University of South-East Asia (USEA)",
      description:
        "Completed formal higher education degree in Information Technology with specialized coursework in software engineering, database systems, and networking.",
      tag: "Academic Degree",
      color: "gold",
    },
  ],
  philosophies: [
    {
      title: "Design with Purpose, Build with Passion",
      desc: "Every pixel, animation, and line of code should serve the user's intent. Technology must eliminate friction and spark confidence.",
      icon: "Compass",
    },
    {
      title: "Empowerment Through Technical Education",
      desc: "True mastery is reflected in the ability to teach. Making technology accessible to students and local business owners builds lasting digital progress.",
      icon: "GraduationCap",
    },
    {
      title: "Precision & Reliable Architecture",
      desc: "Whether configuring network routing, troubleshooting operating systems, or crafting scalable web applications, accuracy and speed come first.",
      icon: "ShieldCheck",
    },
  ],
  values: [
    {
      title: "Integrity & Authenticity",
      desc: "Delivering honest recommendations, verified credentials, and proven solutions without exaggeration.",
    },
    {
      title: "Continuous Learning",
      desc: "Staying ahead of modern development paradigms, AI advancements, and global design systems.",
    },
    {
      title: "Impact-Driven Results",
      desc: "Focusing on tangible business growth, student comprehension, and rock-solid system stability.",
    },
  ],
};

