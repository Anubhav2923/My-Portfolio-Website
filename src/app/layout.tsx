import type { Metadata } from "next";
import "./globals.css";
import {Inter , Calistoga} from 'next/font/google'
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'],  variable: '--font-sans' });

const calistoge = Calistoga ({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
});

export const metadata: Metadata = {
  title: "Anubhav Singh",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {twMerge(
        inter.variable,
        calistoge.variable,
        "bg-gray-900 text-white antialiased font-sans"
      )}>{children}</body>
    </html>
  );
}
