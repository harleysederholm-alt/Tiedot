import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harley Sederholm | Tekninen Orkestroija",
  description: "Enterprise-tason AI-ratkaisut ja modernit web-sovellukset. Datanomista AI-arkkitehdiksi.",
  keywords: ["AI", "Full Stack Developer", "Startup", "Finland", "Portfolio", "TypeScript", "Python"],
  authors: [{ name: "Harley Christian Sederholm" }],
  openGraph: {
    title: "Harley Sederholm | Tekninen Orkestroija",
    description: "Enterprise-tason AI-ratkaisut ja modernit web-sovellukset.",
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
    <html lang="fi">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900`}
      >
        {children}
      </body>
    </html>
  );
}
