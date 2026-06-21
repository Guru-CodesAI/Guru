import type { Metadata } from "next";
import { Inter, Orbitron, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gurunathan V | AI Engineer & Product Builder",
  description: "Official portfolio of Gurunathan V, B.Tech AI & Data Science student. Exploring machine learning, cloud engineering, and building state-of-the-art intelligent products.",
  keywords: [
    "Gurunathan V",
    "Gurunathan",
    "AI Engineer",
    "Product Builder",
    "Data Scientist",
    "Mahendra Engineering College",
    "B.Tech AI & Data Science",
    "Hackathon Competitor",
    "SkillForge",
    "GitHub Portfolio Analyzer"
  ],
  authors: [{ name: "Gurunathan V" }],
  openGraph: {
    title: "Gurunathan V | AI Engineer & Product Builder",
    description: "Official portfolio of Gurunathan V. Specializing in AI/ML, web development, and digital innovation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurunathan V | AI Engineer & Product Builder",
    description: "Official portfolio of Gurunathan V. Specializing in AI/ML, web development, and digital innovation.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth select-none" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${orbitron.variable} ${syne.variable} antialiased bg-[#04060F] text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
