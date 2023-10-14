import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HiLink',
  description: 'Travel UI/UX App for Camping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
