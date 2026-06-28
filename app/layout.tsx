import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
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
    "Hidayet Çiftçi'nin portföyü — React, Next.js, ASP.NET Core ve Hybrid RAG ile yapay zeka destekli uygulamalarda uzmanlaşan Junior Full Stack Developer.",
  keywords: [
    "Hidayet Çiftçi",
    "Full Stack Developer",
    "React",
    "Next.js",
    "ASP.NET Core",
    "Portföy",
  ],
  authors: [{ name: "Hidayet Çiftçi" }],
  openGraph: {
    title: "Hidayet Çiftçi | Junior Full Stack Developer",
    description:
      "Ölçeklenebilir web, mobil ve yapay zeka destekli uygulamalar geliştiren Bilgisayar Mühendisliği mezunu.",
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
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='portfolio-locale';var s=localStorage.getItem(k);var n=navigator.language.toLowerCase();var l=s||(n.startsWith('en')?'en':n.startsWith('tr')?'tr':'tr');document.documentElement.lang=l;}catch(e){document.documentElement.lang='tr';}})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-[#030712] text-zinc-100">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
