import Hero from '@/components/header/Hero';
import Navbar from '@/components/header/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Khana khazana',
  description: 'A simple recipes App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main> {children}</main>
      </body>
    </html>
  );
}
