import "@/styles/globals.css";

import { cx } from "class-variance-authority";
import type { Metadata } from "next";
import { Dancing_Script as DancingScript, Raleway } from "next/font/google";
import { ReactNode } from "react";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const dancingScript = DancingScript({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel",
  description: "Hotel for every moment rich in emotion",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cx(raleway.className, dancingScript.variable)}>
        {children}
      </body>
    </html>
  );
}
