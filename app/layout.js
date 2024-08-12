import Navbar from '@/components/header/Navbar';
import { connectDB } from '@/data/connectDb';
import { mongoUrl } from '@/secret';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Khana khazana',
  description: 'A simple recipes App',
};

export default async function RootLayout({ children }) {
  await connectDB(mongoUrl);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main> {children}</main>
      </body>
    </html>
  );
}
