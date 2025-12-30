import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE } from "./site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.year} ${SITE.name} | Free Payment Calculator`,
  description: SITE.description,
  keywords: [
    "mortgage calculator",
    "mortgage payment calculator",
    "home loan calculator",
    "house payment calculator",
    "mortgage amortization calculator",
    "home affordability calculator",
    "refinance calculator",
    "rent vs buy calculator",
  ],
  openGraph: {
    title: `${SITE.year} Mortgage Calculator | Free`,
    description: "Calculate your monthly mortgage payment for free. Includes taxes, insurance, PMI, and amortization schedule.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-slate-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
