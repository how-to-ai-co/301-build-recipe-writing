import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "301 Build Recipe: Writing | How to AI",
  description: "One prompt builds a writing room in Claude Code: Claude drafts, a second Claude checks against your rules, and your edits become the rules.",
  metadataBase: new URL("https://301-build-recipe-writing.vercel.app"),
  robots: { index: false },
};

const theme = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme" strategy="beforeInteractive">{theme}</Script>
        {children}
      </body>
    </html>
  );
}
