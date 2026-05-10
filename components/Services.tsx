"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES_VIDEO = "/media/Influencer_marketing_services_fo…_202605100439.mp4";

const influencerServices = [
  {
    num: "01",
    category: "Campaigns",
    title: "End-to-End\nExecution",
    desc: "From creator selection to content delivery and reporting. Every detail handled so your campaign launches on time and on-brand.",
    tags: ["Casting", "Briefing", "Delivery", "Reporting"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    category: "Content Creation",
    title: "High-Quality\nMedia",
    desc: "Reels, TikToks, and short-form content built for engagement. Creators who don't just post — they produce work that stops the scroll.",
    tags: ["Reels", "TikTok", "UGC", "Short-Form"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="5" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M11 10l7 4-7 4V10z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    category: "Performance",
    title: "ROI-Driven\nStrategy",
    desc: "Trackable campaigns optimized for conversions and sales. Every metric mapped to your business objective — no vanity numbers.",
    tags: ["Analytics", "Conversion", "A/B Testing", "Attribution"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L10 14l5 4 5-8 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "04",
    category: "Brand Strategy",
    title: "Creative\nDirection",
    desc: "Positioning your brand within creator culture. Visual and tonal guidelines that speak authentically to your audience.",
    tags: ["Positioning", "Moodboarding", "Guidelines", "Tone"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M5 23L14 5l9 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M7.5 17h13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const soohServices = [
  {
    num: "01",
    category: "Billboard Placement",
    title: "Premium\nPlacements",
    desc: "Your brand on high-traffic digital screens and static billboards — malls, highways, city centres across the MENA region.",
    tags: ["Digital OOH", "Static", "Malls", "Highways"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 18v6M18 18v6M7 24h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    category: "Creator Activation",
    title: "Influencer\nat the Billboard",
    desc: "Creators film authentic content at your billboard location and publish it across TikTok, Instagram, and Snapchat.",
    tags: ["TikTok", "Instagram", "Snapchat", "On-Site"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    category: "Double Amplification",
    title: "Two Channels,\nOne Campaign",
    desc: "Physical OOH impressions combined with social media reach — maximising brand visibility across both worlds simultaneously.",
    tags: ["Dual Channel", "10M+ Impressions", "3× Recall"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h8M16 14h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2.5" fill="currentColor" />
        <path d="M14 4v4M14 20v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    category: "Full Tracking",
    title: "Unified\nReporting",
    desc: "Outdoor impression data plus social engagement, views, and conversions — all in a single dashboard report.",
    tags: ["Analytics", "Impressions", "Engagement", "ROI"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 18l4-5 4 3 4-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function ServiceCard({ s, i, hovered, setHovered, offset = 0 }: {
  s: typeof influencerServices[0]; i: number;
  hovered: number | null; setHovered: (v: number | null) => void;
  offset?: number;
}) {
  const idx = i + offset;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay: i * 0.08, duration: 0.7 }}
      onMouseEnter={() => setHovered(idx)}
      onMouseLeave={() => setHovered(null)}
      className="relative p-8 overflow-hidden transition-all duration-400"
      style={{ background: hovered === idx ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.82)", backdropFilter: "blur(8px)" }}
    >
      <span className="absolute top-6 right-6 text-[10px] font-mono text-[#ccc] tracking-widest">{s.num}</span>
      <div className="w-10 h-10 flex items-center justify-center mb-5 transition-colors duration-300"
        style={{ color: hovered === idx ? "#1535C2" : "#bbb" }}>
        {s.icon}
      </div>
      <div className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-3">{s.category}</div>
      <h3 className="font-bold uppercase text-[#0a0a0a] leading-[0.95] mb-4 whitespace-pre-line"
        style={{ fontSize: "clamp(18px, 2vw, 26px)", letterSpacing: "-0.02em" }}>
        {s.title}
      </h3>
      <p className="text-[10px] text-[#777] tracking-[0.06em] leading-[2.1] mb-5">{s.desc}</p>
      <div className="flex flex-wrap gap-2">
        {s.tags.map((tag) => (
          <span key={tag} className="tag" style={{ borderColor: hovered === idx ? "rgba(21,53,194,0.2)" : "#e0e0e0", color: hovered === idx ? "#1535C2" : "#999" }}>{tag}</span>
        ))}
      </div>
      <motion.div className="absolute bottom-0 left-0 h-[2px] bg-[#1535C2]"
        initial={{ width: 0 }} animate={{ width: hovered === idx ? "100%" : 0 }} transition={{ duration: 0.4 }} />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section id="services" ref={ref} className="section-padding relative overflow-hidden">

      {/* Background video at 100% opacity */}
      <video
        src={SERVICES_VIDEO}
        autoPlay muted loop playsInline
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000"
        style={{ opacity: videoReady ? 1 : 0 }}
      />
      {/* White gradient overlay — keeps text sharp while video is fully visible */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(248,248,248,0.80) 50%, rgba(240,240,240,0.75) 100%)" }} />

      <div className="container-custom relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
            <div className="w-6 h-[1px] bg-[#1535C2]" />
            What We Do
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.9]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", letterSpacing: "-0.03em" }}>
              SERVICES
            </h2>
            <p className="text-[10px] tracking-[0.1em] text-[#777] uppercase leading-[2.2] max-w-[280px]">
              Two powerful disciplines, one agency — built for brands that demand measurable outcomes.
            </p>
          </div>
        </motion.div>

        {/* ── CATEGORY 1: INFLUENCER MARKETING ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-px"
        >
          <div className="flex items-center gap-4 mb-px py-4 border-y border-white/40">
            <div className="w-2 h-2 rounded-full bg-[#1535C2]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#0a0a0a]">
              Influencer Marketing
            </span>
            <div className="flex-1 h-px bg-white/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/30">
            {influencerServices.map((s, i) => (
              <ServiceCard key={s.num} s={s} i={i} hovered={hovered} setHovered={setHovered} offset={0} />
            ))}
          </div>
        </motion.div>

        {/* ── CATEGORY 2: SOOH ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8"
        >
          <div className="flex items-center gap-4 mb-px py-4 border-y border-white/40">
            <div className="w-2 h-2 rounded-full bg-[#1535C2]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#0a0a0a]">
              Social Out-of-Home
            </span>
            <div className="flex-1 h-px bg-white/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/30">
            {soohServices.map((s, i) => (
              <ServiceCard key={s.num} s={s} i={i} hovered={hovered} setHovered={setHovered} offset={10} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
