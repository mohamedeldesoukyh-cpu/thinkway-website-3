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
            <ThinkwayLogo className="w-[150px] max-w-full" />
          </div>
          <p className="text-[10px] text-[#bbb] tracking-[0.1em] uppercase leading-[2.4] max-w-xs mb-8">
            Where influence meets strategy. We build campaigns that move culture — and move product.
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="https://www.instagram.com/thinkway_media/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Thinkway on Instagram"
              className="w-9 h-9 border border-[#e0e0e0] bg-white flex items-center justify-center text-[#888] hover:border-[#1535C2] hover:text-[#1535C2] transition-all duration-300 cursor-none"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/thinkwaymedia/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Thinkway on LinkedIn"
              className="w-9 h-9 border border-[#e0e0e0] bg-white flex items-center justify-center text-[#888] hover:border-[#1535C2] hover:text-[#1535C2] transition-all duration-300 cursor-none"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <circle cx="5.25" cy="6" r="1.75" />
                <path d="M3.75 9.25h3v11h-3zM9.25 9.25h2.9v1.5h.05c.4-.75 1.4-1.85 3.55-1.85 3.8 0 4.5 2.4 4.5 5.5v5.85h-3v-5.2c0-1.25-.02-2.85-1.75-2.85-1.75 0-2 1.35-2 2.75v5.3h-3z" />
              </svg>
            </a>
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
