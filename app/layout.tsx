import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hill Country Cricket Association',
  description: 'Developing cricket excellence in the Hill Country through comprehensive youth and adult programs, including APCL Plate and APCL Elite leagues.',
  keywords: ['cricket', 'Hill Country', 'APCL', 'youth cricket', 'adult cricket', 'cricket association'],
  authors: [{ name: 'Hill Country Cricket Association' }],
  openGraph: {
    title: 'Hill Country Cricket Association',
    description: 'Developing cricket excellence in the Hill Country',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
