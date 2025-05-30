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
  title: "Hospital Website Demo",
  description:
    "A professional hospital website that helps clients access your services, view contact information, book appointments, build trust in your care, and much more — all in one place.",
  icons: "/logo1.png",
  keywords: "Hospital website demo",
  openGraph: {
    title: "Hospital Website Demo",
    description:
      "A professional hospital website that helps clients access your services, view contact information, book appointments, build trust in your care, and much more — all in one place.",
    url: "https://hospital-landingpage1.netlify.app/",
    siteName: "Hospital website demo",
    images: [
      {
        url: "https://hospital-landingpage1.netlify.app/pic23.jpg",
        width: 1200,
        height: 630,
        alt: "Hospital website demo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hospital Website Demo",
    description: "Hospital Website Demo",
    images: ["https://hospital-landingpage1.netlify.app/pic23.jpg"],
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
