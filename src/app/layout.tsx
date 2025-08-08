import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: "Danilo Fulminis - Perito Industriale | Sistemi Fotovoltaici",
  description: "Progettazione e installazione di sistemi fotovoltaici per privati e aziende. Danilo Fulminis, perito industriale specializzato in energia solare.",
  keywords: "fotovoltaico, pannelli solari, energia rinnovabile, perito industriale, Milano, Lombardia",
  authors: [{ name: "Danilo Fulminis" }],
  openGraph: {
    title: "Danilo Fulminis - Sistemi Fotovoltaici",
    description: "Specialista in progettazione e installazione di impianti fotovoltaici",
    url: "https://studiofulminis.it",
    siteName: "Studio Fulminis",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Slabo+13px&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Slabo 13px', serif" }}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
