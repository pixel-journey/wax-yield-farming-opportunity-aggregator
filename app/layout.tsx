import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'The higher of two typed rates',
  description: '400 bps beats 250 bps by 150. These numbers are not yields.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
