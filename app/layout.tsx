import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hidayet Çiftçi | Junior Full Stack Developer",
  description:
    "Portfolio of Hidayet Çiftçi — Junior Full Stack Developer specializing in React, Next.js, ASP.NET Core, and AI-powered applications with Hybrid RAG.",
  keywords: [
    "Hidayet Çiftçi",
    "Full Stack Developer",
    "React",
    "Next.js",
    "ASP.NET Core",
    "Portfolio",
  ],
  authors: [{ name: "Hidayet Çiftçi" }],
  openGraph: {
    title: "Hidayet Çiftçi | Junior Full Stack Developer",
    description:
      "Computer Engineering graduate building scalable web, mobile, and AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#030712] text-zinc-100">{children}</body>
    </html>
  );
}
