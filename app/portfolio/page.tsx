import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Navigation from "@/components/Navigation";
import PortfolioCopyInteractions from "./PortfolioCopyInteractions";
import { portfolioMarkup } from "./portfolio-content";
import "./portfolio.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Thinkway Portfolio",
  description:
    "Thinkway: influencer strategy, creator relationships, campaign execution and technology for brands in Egypt.",
};

export default function PortfolioPage() {
  return (
    <div className={`portfolio-route ${bricolage.variable}`}>
      <Navigation />
      <PortfolioCopyInteractions>
        <div
          id="portfolio-content"
          data-theme="dark"
          dangerouslySetInnerHTML={{ __html: portfolioMarkup }}
        />
      </PortfolioCopyInteractions>
    </div>
  );
}
