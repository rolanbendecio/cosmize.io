import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Crypto Presales October 2025 | Top 12 Tokens – Cosmize",
  description: "Discover the top 12 crypto presales for October 2025. Cosmize.io reviews new token launches, project details, and links to official presales.",
  openGraph: {
    title: "Best Crypto Presales October 2025 | Top 12 Tokens – Cosmize",
    description: "Discover the top 12 crypto presales for October 2025. Cosmize.io reviews new token launches, project details, and links to official presales.",
    url: "https://cosmize.io/",
    siteName: "Cosmize.io",
    images: [
      {
        url: "https://cosmize.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cosmize - Best Crypto Presales 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Presales October 2025 | Top 12 Tokens – Cosmize",
    description: "Discover the top 12 crypto presales for October 2025. Cosmize.io reviews new token launches, project details, and links to official presales.",
    images: ["https://cosmize.io/og-image.png"],
    site: "@cosmize_io"
  },
  keywords: [
    "crypto presales",
    "best crypto presales 2025",
    "token presale",
    "Solaxy",
    "MIND of Pepe",
    "Best Wallet Token",
    "crypto launch",
    "Cosmize.io"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
