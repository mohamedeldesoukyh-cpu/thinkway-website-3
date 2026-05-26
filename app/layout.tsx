import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import Script from "next/script";
import AIWrapper from "@/components/AIWrapper";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "THINKWAY — Influencer Marketing Agency",
  description:
    "We connect brands with high-impact creators to drive real results. From awareness to conversion — we build campaigns that perform.",
  keywords: [
    "influencer marketing",
    "creator agency",
    "social media campaigns",
    "content creation",
    "digital marketing",
  ],
  icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon.png", type: "image/png" },
  ],
  apple: "/favicon.png",
  shortcut: "/favicon.png",
},
openGraph: {
  title: "THINKWAY — Influencer Marketing Agency",
  description: "We connect brands with high-impact creators to drive real results. From awareness to conversion — we build campaigns that perform.",
  url: "https://thinkwaymedia.com",
  siteName: "Thinkway Media",
  type: "website",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WER3W107Q7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WER3W107Q7');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${cairo.variable} antialiased`}>
        <LanguageProvider>
          {children}
          <AIWrapper />
        </LanguageProvider>
      </body>
    </html>
  );
}