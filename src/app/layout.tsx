import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title:
    "Danilo Fulminis - Perito Industriale Specialista in Sistemi Fotovoltaici",
  description:
    "Con oltre 15 anni di esperienza nel settore energetico, Danilo Fulminis si dedica alla progettazione e installazione di sistemi fotovoltaici all'avanguardia in Lombardia. Energia sostenibile accessibile a tutti.",
  keywords:
    "fotovoltaico, pannelli solari, energia rinnovabile, impianti fotovoltaici, Milano, Lombardia, perito industriale, sostenibilità",
  authors: [{ name: "Danilo Fulminis" }],
  creator: "Danilo Fulminis",
  publisher: "Studio Fulminis",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://perito-fotovoltaico-website.vercel.app",
    siteName: "Studio Fulminis",
    title: "Danilo Fulminis - Specialista Sistemi Fotovoltaici",
    description:
      "Progettazione e installazione di sistemi fotovoltaici in Lombardia. Oltre 15 anni di esperienza nel settore dell'energia rinnovabile.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Danilo Fulminis - Perito Industriale Fotovoltaico"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Danilo Fulminis - Specialista Sistemi Fotovoltaici",
    description:
      "Progettazione e installazione di sistemi fotovoltaici in Lombardia. Energia sostenibile accessibile a tutti.",
    images: ["/images/og-image.jpg"]
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e40af",
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Slabo+13px&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Slabo 13px', serif" }}
      >
        <Header />
        <div className="pt-16 md:pt-20">{children}</div>
        <CookieBanner />
      </body>
    </html>
  );
}
