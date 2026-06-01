import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import CursorGlow from "@/components/effects/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Vinothini | AI & Data Analytics Portfolio',
  description: 'AI & Data Analytics enthusiast passionate about building intelligent digital solutions using Machine Learning, Deep Learning, RAG systems, and modern web technologies.',
  openGraph: {
    title: 'Vinothini | AI & Data Analytics Portfolio',
    description: 'AI & Data Analytics enthusiast passionate about building intelligent digital solutions',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinothini | AI & Data Analytics Portfolio',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
