import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mwala for vwaza",
  description: "Mwala application for vwaza.com",
  openGraph: {
    title: "Joel Mwala – Vwaza Application",
    description: "Custom-designed visuals tailored for Vwaza Multimedia.",
    url: "https://mwala-application-for-vwaza.vercel.app/",
    images: [
      {
        url: "/og.jpg", // since it's in /public
        width: 1200,
        height: 630,
        alt: "Vwaza Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Mwala – Vwaza Application",
    description: "Check out my visuals for Vwaza.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
