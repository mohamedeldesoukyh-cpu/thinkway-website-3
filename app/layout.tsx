import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {

  metadataBase: new URL("https://thinkwaymedia.com"),

alternates: {
  canonical: "/",
},
  title: "THINKWAY — Influencer Marketing Agency",
  description:
    "We connect brands with high-impact creators to drive real results. From awareness to conversion — we build campaigns that perform.",
  keywords: ["influencer marketing", "creator agency", "social media campaigns", "content creation", "digital marketing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
