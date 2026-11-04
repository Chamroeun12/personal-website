export interface CertificateItem {
  id: string;
  credentialId: string;
  title: string;
  category: string;
  badge: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  color: string;
  image?: string;
  pdfUrl?: string;
  featured?: boolean;
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "usea-bsc-it",
    credentialId: "USEA-BSC-IT-2026-6397",
    title: "Bachelor of Science in Information Technology",
    category: "Academic Degree",
    badge: "Bachelor's Degree",
    issuer: "University of South-East Asia (President: Dr. Mean Sothy)",
    date: "Conferred March 9, 2026",
    description:
      "Official Bachelor's Degree diploma certifying successful completion of the academic requirements for the Bachelor of Science in Information Technology (B.Sc. IT) at the University of South-East Asia.",
    skills: [
      "Computer Science",
      "Software Engineering",
      "Database Architecture",
      "Web Engineering",
      "Network Infrastructure",
      "Information Security",
    ],
    color: "#f59e0b",
    image: "/assets/images/certificates/Bachelor_Degree_Certificate.jpg",
    pdfUrl: "/assets/docs/certificates/Bachelor_Degree_Certificate.pdf",
    featured: true,
  },
  {
    id: "udemy-javascript",
    credentialId: "UC-9628c601-a3ee-44ff-b6a1-2d25d852f4fe",
    title: "JavaScript 10 Projects in 10 Days",
    category: "Udemy Verified Certification",
    badge: "Udemy Verified",
    issuer: "Udemy • Instructor: Ram Din",
    date: "November 25, 2025",
    description:
      "Official Certificate of Completion awarded to Chamroeun Saran for successfully completing the 'JavaScript 10 Projects in 10 Days Course for Beginners'. Demonstrated practical competence in modern JavaScript syntax, DOM manipulation, interactive event flows, asynchronous programming, and dynamic web applications.",
    skills: [
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "Event Listeners",
      "Web APIs",
      "Dynamic UI Components",
      "Asynchronous JS",
      "Algorithmic Thinking",
    ],
    color: "#f7df1e",
    image: "/assets/images/certificates/JavaScript_Certificate.jpg",
    pdfUrl: "/assets/docs/certificates/JavaScript_Certificate.pdf",
    featured: true,
  },
  {
    id: "cisco-ccna7",
    credentialId: "CISCO-CCNA7-2023-0606",
    title: "CCNAv7: Switching, Routing & Wireless Essentials",
    category: "Cisco Networking Academy",
    badge: "Cisco Certified",
    issuer: "Cisco Networking Academy & University of South-East Asia (Instructor: Sokonthea EAN)",
    date: "June 6, 2023",
    description:
      "Official Cisco Networking Academy Certificate of Course Completion awarded to Saran Chamroeun for proficiently configuring VLANs, inter-VLAN routing, STP, EtherChannel redundancy, dynamic and static IPv4/IPv6 routing, WLANs via Wireless LAN Controllers (WLC), and switch security mitigation protocols.",
    skills: [
      "Cisco Networking",
      "VLANs & Trunking",
      "Inter-VLAN Routing",
      "STP & EtherChannel",
      "IPv4/IPv6 Routing",
      "Wireless LAN (WLC)",
      "Switch Security",
    ],
    color: "#049fd9",
    image: "/assets/images/certificates/CCNAv7_Certificate.jpg",
    pdfUrl: "/assets/docs/certificates/CCNAv7_Certificate.pdf",
    featured: true,
  },
  {
    id: "usea-administration",
    credentialId: "USEA-ADM-2026-0502",
    title: "Computer for Administration (Word & Excel)",
    category: "University of South-East Asia",
    badge: "Teacher Internship",
    issuer: "University of South-East Asia (Siem Reap, Cambodia)",
    date: "October 6, 2025 – March 31, 2026",
    description:
      "Official Certificate of Internship awarded for successfully completing an academic teaching appointment instructing the 'Extra Computer for Administration Course (Microsoft Word & Microsoft Excel)' at University of South-East Asia.",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Curriculum Instruction",
      "Corporate Document Architecture",
      "Data Modeling",
      "Administrative Systems",
    ],
    color: "#c3922e",
    image: "/assets/images/certificates/Computer_for_Administration_Certificate.jpg",
    pdfUrl: "/assets/docs/certificates/Computer_for_Administration_Certificate.pdf",
    featured: true,
  },
  {
    id: "mos-word-expert",
    credentialId: "MOS-WD-2024-8192",
    title: "Expert: Microsoft Word",
    category: "Microsoft Office Specialist",
    badge: "Office Expert",
    issuer: "University of South-East Asia / Academic Training",
    date: "2025 – 2026",
    description:
      "Recognized expertise in professional document architecture, multi-level styling, automated indexes, dynamic field codes, and corporate template design.",
    skills: [
      "Advanced Word Processing",
      "Template Engineering",
      "Styles Architecture",
      "Mail Merge",
      "Document Automation",
    ],
    color: "#2b579a",
    image: "/assets/images/certificates/Computer_for_Administration_Certificate.jpg",
    pdfUrl: "/assets/docs/certificates/Computer_for_Administration_Certificate.pdf",
    featured: false,
  },
  {
    id: "mos-excel-master",
    credentialId: "MOS-XL-2025-4710",
    title: "Master: Microsoft Excel",
    category: "Microsoft Office Specialist",
    badge: "Data Master",
    issuer: "University of South-East Asia / Academic Training",
    date: "2025 – Present",
    description:
      "Demonstrated mastery in large-scale data modeling, PivotTables, lookup functions (XLOOKUP/VLOOKUP), financial formulas, and interactive dashboard creation.",
    skills: [
      "Financial Formulas",
      "Data Validation",
      "PivotTables & Slicers",
      "XLOOKUP",
      "Data Modeling",
      "Chart Design",
    ],
    color: "#217346",
    image: "/assets/images/certificates/Computer_for_Administration_Certificate.jpg",
    pdfUrl: "/assets/docs/certificates/Computer_for_Administration_Certificate.pdf",
    featured: false,
  },
  {
    id: "it-support-pro",
    credentialId: "ITSP-HW-2025-9923",
    title: "IT Support Professional",
    category: "Hardware & Systems Engineering",
    badge: "Hardware & OS",
    issuer: "Professional IT Support & Maintenance Bureau",
    date: "2023 – Present",
    description:
      "Comprehensive certification in hardware assembly, Windows 10/11 enterprise configuration, driver deployment, system repair, and performance tuning.",
    skills: [
      "Windows 10/11 Deployment",
      "Hardware Troubleshooting",
      "OS Diagnostics",
      "Driver Configuration",
      "Registry & Recovery",
    ],
    color: "#10b981",
    featured: false,
  },
];

