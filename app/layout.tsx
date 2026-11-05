import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "301 Build Recipe: Writing | How to AI",
  description: "Make Claude write like you. Copy the AI 301 live workshop prompt.",
  metadataBase: new URL("https://301-build-recipe-writing.vercel.app"),
  robots: { index: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Spectral:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
