import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AntigoonBot – Discord Security",
  description:
    "A modern Discord bot designed to protect your community from known threats and malicious users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 
          text-gray-100 min-h-screen antialiased transition-colors duration-300
        `}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
        </div>

        <div className="fade-in px-4 sm:px-8 md:px-16 lg:px-32 py-10">{children}</div>
      </body>
    </html>
  );
}
