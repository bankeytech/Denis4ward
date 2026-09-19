import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solvora — Smarter Technology For Everyday Living",
  description:
    "Discover engineered audio, smart wearables, and next-generation lifestyle gear crafted for seamless performance and aesthetic perfection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-[#F7F6F4] text-[#141414] antialiased selection:bg-[#111111] selection:text-white font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
