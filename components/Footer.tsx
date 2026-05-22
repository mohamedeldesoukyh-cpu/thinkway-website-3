"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ThinkwayLogo from "@/components/ThinkwayLogo";

const footerLinks: Record<string, { label: string; anchor?: string }[]> = {
  Agency: [
  { label: "About Us", anchor: "/about" },
  { label: "Our Approach", anchor: "/about#why-thinkway" },
  { label: "Careers", anchor: "/careers" },
],
  
  Services: [
    { label: "Influencer Campaigns", anchor: "#services" },
    { label: "Content Creation", anchor: "#services" },
    { label: "SOOH", anchor: "#sooh" },
    { label: "Brand Strategy", anchor: "#services" },
  ],
  Network: [
    { label: "Browse Creators", anchor: "#creators" },
    { label: "Creator Program", anchor: "#program" },
    { label: "Apply as Creator", anchor: "#program" },
    { label: "Partner Brands", anchor: "#contact" },
  ],
  Connect: [
    { label: "hello@thinkwaymedia.com" },
    { label: "+201204570000" },
    { label: "Sheikh Zayed – Giza" },
    { label: "Egypt" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] border-t border-[#ebebeb] relative overflow-hidden">
      <Image
        src="/media/footer-texture.jpg"
        alt=""
        fill
        className="object-cover object-center opacity-[0.04] pointer-events-none"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
      />

      {/* Main footer */}
      <div className="container-custom py-20 relative z-10 text-center">
        {/* Brand — centered */}
        <div className="flex flex-col items-center mb-16">
          <div className="mb-6">
            <ThinkwayLogo variant="dark" />
          </div>
          <p className="text-[10px] text-[#bbb] tracking-[0.1em] uppercase leading-[2.4] max-w-xs mb-8">
            Where influence meets strategy. We build campaigns that move culture — and move product.
          </p>
          <div className="flex gap-3 justify-center">
            {[
              { label: "IG", href: "https://www.instagram.com/thinkway_tw" },
              { label: "TT", href: null },
              { label: "LI", href: "https://www.linkedin.com/company/thinkwaymedia/" },
              { label: "YT", href: null },
            ].map(({ label, href }) =>
              href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#e0e0e0] bg-white flex items-center justify-center text-[10px] text-[#ccc] hover:border-[#1535C2] hover:text-[#1535C2] transition-all duration-300 cursor-none">
                  {label}
                </a>
              ) : (
                <div key={label} className="w-9 h-9 border border-[#e0e0e0] bg-white flex items-center justify-center text-[10px] text-[#ccc] hover:border-[#1535C2] hover:text-[#1535C2] transition-all duration-300 cursor-none">
                  {label}
                </div>
              )
            )}
          </div>
        </div>

        {/* Links — centered columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col items-center">
              <div className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-6 font-medium">{group}</div>
              <ul className="space-y-4">
                {links.map((item) => (
                  <li key={item.label} className="text-center">
                   {item.anchor ? (
  <a
    href={item.anchor}
    className="text-[10px] tracking-[0.1em] text-[#bbb] uppercase hover:text-[#0a0a0a] transition-colors duration-300 cursor-none"
  >
    {item.label}
  </a>
                    ) : (
                      <span className="text-[10px] tracking-[0.1em] text-[#bbb] uppercase cursor-none">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="hr-line mx-12" />

      {/* Bottom bar */}
      <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="text-[9px] tracking-[0.18em] text-[#ccc] uppercase">
          © 2026 THINKWAY Agency. All rights reserved.
        </div>
        <div className="flex items-center gap-8">
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((l) => (
            <span key={l} className="text-[9px] tracking-[0.15em] text-[#ccc] uppercase hover:text-[#888] transition-colors cursor-none">{l}</span>
          ))}
        </div>
      </div>

      {/* Large watermark */}
      <div className="overflow-hidden border-t border-[#efefef] relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="container-custom"
        >
          <div
            className="font-black uppercase text-[#efefef] leading-none select-none pointer-events-none"
            style={{ fontSize: "clamp(60px, 14vw, 200px)", letterSpacing: "-0.06em", lineHeight: 0.85 }}
          >
            THINKWAY
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
