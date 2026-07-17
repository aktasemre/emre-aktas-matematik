import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import "./hero-motion.css";
import "./reveal-motion.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.teacher.name} | ${siteConfig.teacher.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.teacher.name} | ${siteConfig.teacher.expertise}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1600,
        height: 900,
        alt: "Matematik Akademi ders planı görseli",
      },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Some browser extensions inject body attributes before React hydrates. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
