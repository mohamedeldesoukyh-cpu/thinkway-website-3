"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES_VIDEO = "/media/Influencer_marketing_services_fo…_202605100439.mp4";

const services = [
  {
    num: "01",
    category: "Influencer Campaigns",
    title: "End-to-End\nExecution",
    desc: "From creator selection to content delivery and reporting. We handle every detail so your campaign launches on time and on-brand.",
    tags: ["Casting", "Briefing", "Delivery", "Reporting"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    category: "Content Creation",
    title: "High-Quality\nMedia",
    desc: "Reels, TikToks, and short-form content built for engagement. Our creators don't just post — they produce work that stops the scroll.",
    tags: ["Reels", "TikTok", "UGC", "Short-Form"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="5" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M11 10l7 4-7 4V10z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    category: "Performance Marketing",
    title: "ROI-Driven\nStrategy",
    desc: "Trackable campaigns optimized for conversions and sales. Every metric mapped to your business objective — no vanity numbers.",
    tags: ["Analytics", "Conversion", "A/B Testing", "Attribution"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L10 14l5 4 5-8 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "04",
    category: "Brand Strategy",
    title: "Creative\nDirection",
    desc: "Positioning your brand within creator culture authentically. We develop visual and tonal guidelines that speak to your audience.",
    tags: ["Positioning", "Moodboarding", "Guidelines", "Tone"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M5 23L14 5l9 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M7.5 17h13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    category: "Social Out-of-Home",
    title: "SOOH\nCampaigns",
    desc: "Physical billboard presence fused with creator-driven social content. One campaign, two powerful channels — outdoor impressions plus social reach.",
    tags: ["Billboards", "Creator Activation", "OOH", "MENA"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 18v6M18 18v6M7 24h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section id="services" ref={ref} className="section-padding bg-[#f8f8f8] relative overflow-hidden">

      {/* Background video — very low opacity */}
      <video
        src={SERVICES_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000"
        style={{ opacity: videoReady ? 0.07 : 0 }}
      />
      {/* Overlay to ensure bg-[#f8f8f8] still reads */}
      <div className="absolute inset-0 bg-[#f8f8f8] pointer-events-none" style={{ opacity: 0.75 }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              What We Do
            </div>
            <h2
              className="font-black uppercase text-[#0a0a0a] leading-[0.9]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", letterSpacing: "-0.03em" }}
            >
              SERVICES
            </h2>
          </div>
          <p className="text-[10px] tracking-[0.1em] text-[#aaa] uppercase leading-[2.2] max-w-[280px]">
            A full suite of influencer marketing services — built for brands that demand measurable outcomes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0e0e0]">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-8 overflow-hidden transition-all duration-500"
              style={{ background: hovered === i ? "#fff" : "rgba(250,250,250,0.95)" }}
            >
              <span className="absolute top-6 right-6 text-[10px] font-mono text-[#ddd] tracking-widest">{s.num}</span>

              <div
                className="w-10 h-10 flex items-center justify-center mb-6 transition-colors duration-300"
                style={{ color: hovered === i ? "#1535C2" : "#ccc" }}
              >
                {s.icon}
              </div>

              <div className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-3">{s.category}</div>

              <h3
                className="font-bold uppercase text-[#0a0a0a] leading-[0.95] mb-5 whitespace-pre-line"
                style={{ fontSize: "clamp(20px, 2.2vw, 30px)", letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h3>

              <p className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2.1] mb-6">{s.desc}</p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-[#1535C2]"
                initial={{ width: 0 }}
                animate={{ width: hovered === i ? "100%" : 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
