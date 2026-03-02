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
    process.env.NEXT_PUBLIC_SITE_URL || 'https://institutovascular.vercel.app'
  ),
  title: {
    default: 'Instituto Vascular Prudente | Cirurgia Vascular e Angiologia',
    template: '%s | Instituto Vascular Prudente',
  },
  description:
    'Instituto Vascular Prudente - Clínica especializada em Cirurgia Vascular, Angiologia, tratamento de varizes, trombose e doenças vasculares em Presidente Prudente, SP.',
  keywords: [
    'cirurgião vascular Presidente Prudente',
    'angiologista Presidente Prudente',
    'clínica vascular',
    'tratamento de varizes',
    'trombose venosa',
    'cirurgia vascular',
    'escleroterapia',
    'doppler vascular',
    'varizes a laser',
  ],
  authors: [{ name: 'Instituto Vascular Prudente' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Instituto Vascular Prudente',
    title: 'Instituto Vascular Prudente | Cirurgia Vascular e Angiologia',
    description:
      'Clínica especializada em Cirurgia Vascular e Angiologia em Presidente Prudente, SP. Tratamento de varizes, trombose e doenças vasculares.',
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
