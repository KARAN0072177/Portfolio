import React from "react"
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Full-Stack Developer | Auth & System Architecture",
  description:
    "I build reliable web applications with strong authentication, scalable APIs, and production-ready foundations. Specializing in SaaS platforms, admin dashboards, and secure backend systems.",
  keywords: [
    "full-stack developer",
    "SaaS",
    "authentication",
    "API design",
    "system architecture",
    "freelance developer",
  ],
};

export const viewport = {
  themeColor: "#0a0f1c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
