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
  title: "Promptable Studio – AI Image Editing for Teams",
  description:
    "Promptable Studio helps creative teams deliver studio-grade imagery with AI-powered background editing, retouching, and automated workflows.",
  openGraph: {
    title: "Promptable Studio – AI Image Editing for Teams",
    description:
      "Craft studio-grade visuals in the time it takes to write a prompt. Smart background editing, batch automations, and collaborative workflows.",
    url: "https://agentic-98abf213.vercel.app",
    siteName: "Promptable Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promptable Studio – AI Image Editing for Teams",
    description:
      "Launch your AI-powered image editor and ship polished visuals faster than ever.",
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
