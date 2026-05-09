"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = {
  Agency: ["About Us", "Our Approach", "Case Studies", "Careers"],
  Services: ["Influencer Campaigns", "Content Creation", "Performance Marketing", "Brand Strategy"],
  Network: ["Browse Creators", "Creator Program", "Apply as Creator", "Partner Brands"],
  Connect: ["hello@thinkway.agency", "+971 50 123 4567", "Dubai, UAE", "London, UK"],
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
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 relative shrink-0">
                <div className="absolute inset-0 bg-[#c0392b]" />
                <div className="absolute inset-[3px] bg-[#f8f8f8]" />
                <div className="absolute inset-[6px] bg-[#c0392b]" />
              </div>
              <span className="text-sm font-bold tracking-[0.25em] text-[#0a0a0a] uppercase">THINKWAY</span>
            </div>
            <p className="text-[10px] text-[#bbb] tracking-[0.1em] uppercase leading-[2.4] max-w-xs mb-8">
              Where influence meets strategy. We build campaigns that move culture — and move product.
            </p>
            <div className="flex gap-3">
              {["IG", "TT", "LI", "YT"].map((s) => (
                <div key={s} className="w-9 h-9 border border-[#e0e0e0] bg-white flex items-center justify-center text-[10px] text-[#ccc] hover:border-[#c0392b] hover:text-[#c0392b] transition-all duration-300 cursor-none">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-[9px] tracking-[0.28em] uppercase text-[#c0392b] mb-6 font-medium">{group}</div>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-[10px] tracking-[0.1em] text-[#bbb] uppercase hover:text-[#0a0a0a] transition-colors duration-300 cursor-none">
                      {link}
                    </span>
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
