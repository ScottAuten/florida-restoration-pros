import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: {
    default: `${SITE.businessName} | Water Damage Restoration Florida`,
    template: `%s | ${SITE.businessName}`,
  },
  description:
    'IICRC-certified water damage restoration serving Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami. 24/7 emergency response, structural drying, mold remediation, insurance claims handled.',
  metadataBase: new URL(SITE.siteUrl),
  openGraph: {
    siteName: SITE.businessName,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
