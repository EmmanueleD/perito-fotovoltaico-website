import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: "Danilo Fulminis - Perito Industriale | Sistemi Fotovoltaici",
  description: "Progettazione e installazione di sistemi fotovoltaici per privati e aziende. Danilo Fulminis, perito industriale specializzato in energia solare.",
  keywords: "fotovoltaico, pannelli solari, energia rinnovabile, perito industriale, Milano, Lombardia",
  authors: [{ name: "Danilo Fulminis" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Danilo Fulminis - Sistemi Fotovoltaici",
    description: "Specialista in progettazione e installazione di impianti fotovoltaici",
    url: "https://studiofulminis.it",
    siteName: "Studio Fulminis",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Studio Fulminis - Sistemi Fotovoltaici',
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
        <Header />
        <div className="pt-16 md:pt-20">
          {children}
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
