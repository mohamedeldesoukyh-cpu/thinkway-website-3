"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const packages = [
  {
    tier: "Starter",
    tagline: "Launch your first campaign",
    price: "Custom",
    note: "Starting from $5,000",
    highlight: false,
    features: [
      { label: "Creators", val: "Up to 5" },
      { label: "Platforms", val: "1 Platform" },
      { label: "Reporting", val: "Basic Dashboard" },
      { label: "Campaign Manager", val: "Shared" },
      { label: "Content Formats", val: "Feed + Stories" },
      { label: "Revisions", val: "1 Round" },
      { label: "Support", val: "Email Only" },
      { label: "Turnaround", val: "3–4 Weeks" },
    ],
  },
  {
    tier: "Growth",
    tagline: "For brands ready to scale",
    price: "Custom",
    note: "Most popular · From $15,000",
    highlight: true,
    features: [
      { label: "Creators", val: "Up to 20" },
      { label: "Platforms", val: "3 Platforms" },
      { label: "Reporting", val: "Real-Time Analytics" },
      { label: "Campaign Manager", val: "Dedicated" },
      { label: "Content Formats", val: "Reels + TikTok + UGC" },
      { label: "Revisions", val: "3 Rounds" },
      { label: "Support", val: "Priority (WhatsApp)" },
      { label: "Turnaround", val: "2 Weeks" },
    ],
  },
  {
    tier: "Enterprise",
    tagline: "Full-scale brand partnerships",
    price: "Custom",
    note: "Bespoke · Contact us",
    highlight: false,
    features: [
      { label: "Creators", val: "Unlimited" },
      { label: "Platforms", val: "All Platforms" },
      { label: "Reporting", val: "Custom BI Dashboard" },
      { label: "Campaign Manager", val: "Senior Team Lead" },
      { label: "Content Formats", val: "Full Production Suite" },
      { label: "Revisions", val: "Unlimited" },
      { label: "Support", val: "24/7 Dedicated Line" },
      { label: "Turnaround", val: "Agile Timeline" },
    ],
  },
];

export default function Packages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="packages" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, #c0392b, transparent)" }} />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-[10px] tracking-[0.3em] text-[#c0392b] uppercase mb-5 flex items-center justify-center gap-4">
            <div className="w-6 h-[1px] bg-[#c0392b]" />Pricing<div className="w-6 h-[1px] bg-[#c0392b]" />
          </div>
          <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.9]" style={{ fontSize: "clamp(36px, 5vw, 70px)", letterSpacing: "-0.04em" }}>
            PRICING &amp;<br /><span className="text-[#c0392b]">PACKAGES</span>
          </h2>
          <p className="text-[10px] text-[#aaa] tracking-[0.12em] uppercase mt-6 leading-[2.2] max-w-md mx-auto">
            Every package is tailored to your brand&apos;s goals. All pricing is bespoke — these tiers are frameworks, not ceilings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ebebeb]">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.tier}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.8 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-8 overflow-hidden transition-all duration-500"
              style={{
                background: pkg.highlight ? "#fff" : hovered === i ? "#fff" : "#fafafa",
                border: pkg.highlight ? "1px solid rgba(192,57,43,0.2)" : "none",
                boxShadow: pkg.highlight ? "0 8px 40px rgba(192,57,43,0.06)" : "none",
              }}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-[#c0392b] text-white text-[9px] tracking-[0.2em] uppercase px-4 py-2">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#c0392b] mb-3">{pkg.tier}</h3>
                <div className="font-black uppercase text-[#0a0a0a] leading-none" style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.04em" }}>
                  {pkg.price}
                </div>
                <div className="text-[9px] tracking-[0.15em] text-[#bbb] uppercase mt-2">{pkg.note}</div>
                <div className="text-[10px] text-[#ccc] mt-2">{pkg.tagline}</div>
              </div>

              <div className="space-y-0 border-t border-[#f0f0f0] pt-6">
                {pkg.features.map((f) => (
                  <div key={f.label} className="flex justify-between items-center py-3 border-b border-[#f7f7f7]">
                    <span className="text-[9px] tracking-[0.12em] uppercase text-[#bbb]">{f.label}</span>
                    <span className="text-[9px] tracking-[0.08em] text-[#0a0a0a] font-medium">{f.val}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full mt-8 py-4 text-[10px] tracking-[0.18em] uppercase font-medium transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-[#c0392b] text-white hover:bg-[#e74c3c]"
                    : "border border-[#e0e0e0] text-[#aaa] hover:border-[#c0392b] hover:text-[#c0392b]"
                }`}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {pkg.tier === "Enterprise" ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-[9px] text-[#ccc] tracking-[0.18em] uppercase mt-10"
        >
          All packages include brand safety audit · Content licensing · Post-campaign debrief
        </motion.p>
      </div>
    </section>
  );
}
