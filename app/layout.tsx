import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  icon: "/favicon.png",
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

      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
