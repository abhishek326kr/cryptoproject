import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('http://texnova.org'),
  title: {
    default: 'Texnova | Enterprise Crypto Payment Gateway',
    template: '%s | Texnova'
  },
  description: 'Global crypto payment infrastructure with ultra-low 0.1% fees, instant settlement, and enterprise-grade security.',
  keywords: ['Crypto Payment Gateway', 'Enterprise Blockchain', 'B2B Payments', 'Stablecoin Settlement', 'RWA Tokenization', 'MPC Wallets'],
  openGraph: {
    title: 'Texnova | Enterprise Crypto Payment Gateway',
    description: 'Global crypto payment infrastructure with ultra-low 0.1% fees.',
    url: 'http://texnova.org',
    siteName: 'Texnova',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texnova | Enterprise Crypto Payment Gateway',
    description: 'Global crypto payment infrastructure with ultra-low 0.1% fees, instant settlement, and enterprise-grade security.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Texnova',
  url: 'http://texnova.org',
  logo: 'http://texnova.org/icon.svg',
  sameAs: [
    'https://twitter.com/texnova',
    'https://linkedin.com/company/texnova'
  ],
  description: 'Enterprise crypto payment gateway providing stablecoin settlement, programmatic wallets, and RWA tokenization.'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
