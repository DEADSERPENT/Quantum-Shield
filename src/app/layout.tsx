import type { Metadata } from "next";
import { Space_Grotesk, Syne, JetBrains_Mono } from 'next/font/google';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "QuantumShield | The World's First Quantum-Safe Security Key",
  description: "Protect your data from future quantum attacks with the world's first quantum-safe security key. Features post-quantum encryption and quantum-random number generation.",
  keywords: ["quantum security", "PQC", "post-quantum cryptography", "QRNG", "security key", "cybersecurity", "hardware security"],
  authors: [{ name: "QuantumShield" }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "QuantumShield | Quantum-Safe Security Key",
    description: "The world's first quantum-safe security key with PQC chip and QRNG technology.",
    type: "website",
    siteName: "QuantumShield",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumShield | Quantum-Safe Security Key",
    description: "The world's first quantum-safe security key with PQC chip and QRNG technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-quantum-cyan focus:text-quantum-black focus:rounded-lg focus:font-semibold focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
