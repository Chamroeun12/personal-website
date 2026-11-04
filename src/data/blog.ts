export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: "webdev" | "python" | "ai" | "computertips" | "office" | "design" | "education";
  categoryLabel: string;
  readTime: string;
  publishedDate: string;
  author: string;
  tags: string[];
  featured?: boolean;
  content: string; // Markdown or rich formatted text
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "essential-excel-formulas",
    slug: "mastering-essential-excel-formulas-for-business",
    title: "Mastering Essential Microsoft Excel Formulas for Business & Administration",
    summary:
      "A practical guide to the 5 most valuable formulas (XLOOKUP, SUMIFS, INDEX/MATCH, and PivotTables) that save office professionals hours every week.",
    category: "office",
    categoryLabel: "Microsoft Office Tutorials",
    readTime: "6 min read",
    publishedDate: "October 18, 2026",
    author: "Chamroeun SARAN",
    featured: true,
    tags: ["Microsoft Excel", "Productivity", "Formulas", "Office Training"],
    content: `
Microsoft Excel remains the backbone of administrative and financial productivity worldwide. Having taught over 100 students in Cambodia through university courses and private training, I notice one recurring challenge: most people manually calculate and copy-paste data instead of letting Excel do the heavy lifting.

In this tutorial, we will break down the essential formulas that every administrative assistant, business owner, and accountant should master.

---

### 1. Why XLOOKUP Replaces VLOOKUP
For decades, \`VLOOKUP\` was the gold standard for searching data tables. However, it had significant drawbacks:
- It could only search from left to right.
- Inserting a new column broke existing formula indices.
- Exact match required an extra \`FALSE\` parameter.

\`XLOOKUP\` solves all of these problems with simpler syntax:
\`\`\`excel
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])
\`\`\`
For example, to find an employee's salary using their Staff ID:
\`\`\`excel
=XLOOKUP(A2, Employees!A:A, Employees!D:D, "Not Found")
\`\`\`

---

### 2. SUMIFS for Dynamic Financial Reporting
When you need to calculate totals based on multiple conditions (such as sales by a specific salesperson in a specific month), \`SUMIFS\` is unbeatable:
\`\`\`excel
=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)
\`\`\`

---

### 3. Harnessing PivotTables for Instant Summary
Formulas are great, but for summarizing thousands of transaction rows in seconds, nothing beats a PivotTable:
1. Select your data table.
2. Go to **Insert > PivotTable**.
3. Drag your Category into **Rows** and your Amount into **Values**.
4. Right-click any number and select **Show Values As > % of Column Total** to see percentage contributions instantly.

---

### Key Takeaway for Cambodian Businesses
Investing just 2 hours into mastering these formulas saves days of repetitive manual entry, eliminates human error, and gives you clean, audit-ready data.
    `,
  },
  {
    id: "building-media-scrapers-python",
    slug: "building-robust-media-scrapers-with-python-and-ffmpeg",
    title: "Building High-Throughput Media Scrapers with Python, yt-dlp & FFmpeg",
    summary:
      "An architectural look into building Video Pro: multithreaded chunk downloads, asynchronous subprocesses, and lossless stream remuxing.",
    category: "python",
    categoryLabel: "Python",
    readTime: "8 min read",
    publishedDate: "September 24, 2026",
    author: "Chamroeun SARAN",
    featured: true,
    tags: ["Python", "yt-dlp", "FFmpeg", "Multithreading", "Architecture"],
    content: `
Building desktop utilities that handle large media streams presents unique architectural challenges: network latency, platform rate limiting, stream fragmentation, and blocking the graphical user interface.

When creating **Video Pro**, my goal was to extract up to 4K / 60FPS video streams cleanly without the ads or security risks prevalent in commercial download tools. Here is how the engine was designed.

---

### The Architecture: Decoupling UI and Processing

A common mistake in desktop development is running heavy network I/O or subprocesses on the main GUI thread. In CustomTkinter or Tkinter, this results in the dreaded "(Not Responding)" window freeze.

To prevent this:
1. The GUI runs on the main thread, receiving progress updates via an event queue.
2. Video scraping and chunk acquisition run inside a \`concurrent.futures.ThreadPoolExecutor\`.
3. FFmpeg post-processing executes as an isolated asynchronous subprocess using Python's \`subprocess.Popen\`.

---

### Fusing Fragmented DASH Streams with FFmpeg
Modern platforms serve high-resolution video (1080p, 1440p, 4K) as separate video-only and audio-only streams (DASH format) to save bandwidth.

Using yt-dlp, we extract the best available video stream and the best available audio stream, then instruct FFmpeg to remux them into a single container without re-encoding:
\`\`\`bash
ffmpeg -i video_chunk.mp4 -i audio_chunk.m4a -c:v copy -c:a copy output_final.mp4
\`\`\`
By passing \`-c:v copy -c:a copy\`, FFmpeg performs stream copying rather than transcoding. This processes 4K files in seconds with zero loss in visual clarity!

---

### Conclusion
Combining Python's scripting agility with FFmpeg's low-level performance delivers a fast, stable, and ad-free experience.
    `,
  },
  {
    id: "optimizing-windows-for-peak-performance",
    slug: "complete-windows-10-and-11-optimization-guide",
    title: "The Comprehensive Windows 10 & 11 Optimization Guide for IT Specialists",
    summary:
      "Proven hardware and software optimization steps to speed up sluggish PCs, eliminate background telemetry, and resolve driver conflicts.",
    category: "computertips",
    categoryLabel: "Computer Tips",
    readTime: "5 min read",
    publishedDate: "August 12, 2026",
    author: "Chamroeun SARAN",
    featured: false,
    tags: ["Windows 11", "IT Support", "Hardware", "Optimization", "Troubleshooting"],
    content: `
In my freelance IT support practice across Cambodia, more than 70% of performance complaints can be resolved without spending money on new hardware. Bloatware, disabled trim settings, unnecessary startup daemons, and fragmented thermal paste are the usual culprits.

Here is my checklist for restoring PC performance.

---

### 1. Disable Heavy Startup Applications
Open Task Manager (\`Ctrl + Shift + Esc\`) and switch to the **Startup Apps** tab. Look for apps with "High" impact that you don't need upon system boot:
- Disable automatic launching for update checkers, chat clients, and browser helpers.
- Keep only your primary antivirus and essential hardware drivers enabled.

---

### 2. Enable Fast TRIM for SSDs
If a PC has an SSD that feels slow, verify whether TRIM is active:
\`\`\`powershell
fsutil behavior query DisableDeleteNotify
\`\`\`
If the result is \`0\`, TRIM is active. If it is \`1\`, enable it with:
\`\`\`powershell
fsutil behavior set DisableDeleteNotify 0
\`\`\`

---

### 3. Thermal Throttling: The Silent Performance Killer
In Cambodia's tropical climate, dust accumulation and dried thermal paste frequently cause CPUs to hit 95°C and throttle down their clock speeds. Cleaning fans and applying fresh high-conductivity thermal paste often doubles real-world multi-core speed!
    `,
  },
  {
    id: "modern-frontend-best-practices",
    slug: "modern-frontend-web-development-standards",
    title: "Modern Frontend Web Development: Semantic HTML, Responsive Design & Fast Core Web Vitals",
    summary:
      "Why clean semantic HTML and responsive CSS subgrids matter more than bloated JavaScript libraries for real user experience.",
    category: "webdev",
    categoryLabel: "Web Development",
    readTime: "7 min read",
    publishedDate: "July 30, 2026",
    author: "Chamroeun SARAN",
    featured: false,
    tags: ["Next.js", "Frontend", "Tailwind CSS", "SEO", "Web Performance"],
    content: `
With modern JavaScript frameworks constantly evolving, developers often overlook the fundamentals: semantic HTML, accessibility (a11y), responsive breakpoints, and Core Web Vitals.

In this article, we look at how to build websites that look stunning, load in under 1 second, and rank prominently on search engines.

---

### 1. Semantic HTML Is the Foundation of SEO
Search engine crawlers rely on semantic markup to understand document hierarchy. Always prefer:
- \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<section>\`, and \`<footer>\` over endless generic \`<div>\` trees.
- Legitimate \`<button>\` tags for interactive triggers instead of \`<div onClick={...}>\`.

---

### 2. Zero Layout Shift (CLS) with Image Dimensions
One of the most frustrating user experiences is content jumping while reading as images load. Always supply explicit \`width\` and \`height\` or use Next.js \`<Image />\` components with layout wrappers to reserve aspect-ratio placeholders.

---

### 3. Fluid Responsive Typography
Instead of writing dozens of media queries for font sizes, use CSS \`clamp()\`:
\`\`\`css
font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);
\`\`\`
This scales headings smoothly between mobile smartphones and ultrawide desktop monitors without sudden breakpoint jumps.
    `,
  },
];

