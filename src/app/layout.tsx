import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vasculart.com.br'
  ),
  title: {
    default: 'Clínica Vasculart | Angiologia e Cirurgia Vascular em Presidente Prudente',
    template: '%s | Clínica Vasculart',
  },
  description:
    'Clínica Vasculart — Angiologia e Cirurgia Vascular em Presidente Prudente, SP. Dra. Fernanda Toreto, CRM/SP 78575. Varizes, trombose, escleroterapia, laser vascular. Desde 2009.',
  keywords: [
    'angiologista Presidente Prudente',
    'cirurgião vascular Presidente Prudente',
    'clínica vascular Presidente Prudente',
    'Clínica Vasculart',
    'Dra Fernanda Toreto',
    'tratamento de varizes',
    'trombose venosa',
    'escleroterapia',
    'laser transdérmico',
    'espuma densa varizes',
    'cirurgia vascular',
    'doppler vascular',
  ],
  authors: [{ name: 'Clínica Vasculart' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Clínica Vasculart',
    title: 'Clínica Vasculart | Angiologia e Cirurgia Vascular em Presidente Prudente',
    description:
      'Clínica Vasculart — Referência em Angiologia e Cirurgia Vascular em Presidente Prudente desde 2009. Dra. Fernanda Toreto, +30 anos de experiência.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#115e59" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
