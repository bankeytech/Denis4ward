import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DENIS4WARD TECHNOLOGY | Premium Gadgets & Electronics",
  description:
    "Shop premium smartphones, laptops, tablets, smart watches and accessories from DENIS4WARD TECHNOLOGY. Luxury gadgets curated for professionals.",
  keywords: [
    "DENIS4WARD",
    "premium gadgets",
    "luxury electronics",
    "smartphones",
    "laptops",
    "tablets",
    "smartwatches",
  ],
  openGraph: {
    title: "DENIS4WARD TECHNOLOGY | Premium Gadgets & Electronics",
    description:
      "Discover flagship smartphones, powerful laptops, premium tablets, smart watches and accessories curated for professionals.",
    siteName: "DENIS4WARD TECHNOLOGY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DENIS4WARD TECHNOLOGY | Premium Gadgets & Electronics",
    description:
      "Discover flagship smartphones, powerful laptops, premium tablets, smart watches and accessories curated for professionals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-[#050505] text-[#F8F8F8] antialiased font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
