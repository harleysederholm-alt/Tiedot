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
  title: "Harley Sederholm | AI-Arkitehti & Startup-Yrittäjä",
  description: "Portfolio 2026 – Autonomiset AI-järjestelmät, Full Stack Development ja tuotekehitys. Datanomista AI-startup-perustajaksi.",
  keywords: ["AI", "Full Stack Developer", "Startup", "Finland", "Portfolio", "TypeScript", "Python"],
  authors: [{ name: "Harley Christian Sederholm" }],
  openGraph: {
    title: "Harley Sederholm | AI-Arkitehti",
    description: "10 tuotantotason projektia – AI-agentit, turvallinen viestintä, ja data-arkkitehtuurit.",
    type: "website",
    locale: "fi_FI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
