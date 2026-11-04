import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Chamroeun SARAN — Personal Brand & Digital Solutions Platform",
  description:
    "Official website of Chamroeun SARAN — Frontend Developer, Computer Science Teacher, and IT Specialist based in Cambodia. Engineering modern web applications, practical computer training, and reliable IT solutions.",
  keywords: [
    "Chamroeun SARAN",
    "Chamroeun SARAN Developer",
    "Frontend Developer Cambodia",
    "Web Developer Cambodia",
    "IT Support Cambodia",
    "Computer Teacher Cambodia",
    "University of South-East Asia IT",
    "Next.js Developer Cambodia",
    "Microsoft Office Specialist Cambodia",
  ],
  authors: [{ name: "Chamroeun SARAN", url: "https://chamroeun12.github.io/portfolio/" }],
  creator: "Chamroeun SARAN",
  metadataBase: new URL("https://chamroeunsaran.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chamroeunsaran.com",
    title: "Chamroeun SARAN — Technology Brand & Digital Solutions",
    description:
      "Frontend Developer, Computer Science Teacher, and IT Specialist based in Cambodia. Building digital experiences that make a difference.",
    siteName: "Chamroeun SARAN Platform",
    images: [
      {
        url: "/assets/images/profile/profile_avatar.jpg",
        width: 800,
        height: 800,
        alt: "Chamroeun SARAN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamroeun SARAN — Personal Brand & Digital Solutions",
    description:
      "Frontend Developer, Computer Science Teacher, and IT Specialist based in Cambodia.",
    creator: "@saranchamroeun",
    images: ["/assets/images/profile/profile_avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-brand-blue selection:text-white">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
