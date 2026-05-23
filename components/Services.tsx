"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES_VIDEO = "/media/Influencer_marketing_services_202605100439.mp4";

const influencerServices = [
  {
    num: "01",
    category: "Campaigns",
    title: "End-to-End Execution",
    desc: "From creator selection to content delivery and reporting. Every detail handled so your campaign launches on time and on-brand.",
    tags: ["Casting", "Briefing", "Delivery", "Reporting"],
  },
  {
    num: "02",
    category: "Content Creation",
    title: "High-Quality Media",
    desc: "Reels, TikToks, and short-form content built for engagement. Creators who stop the scroll and drive action.",
    tags: ["Reels", "TikTok", "UGC", "Short-Form"],
  },
  {
    num: "03",
    category: "Performance",
    title: "ROI-Driven Strategy",
    desc: "Trackable campaigns optimized for conversions and sales. Every metric mapped to your business objective.",
    tags: ["Analytics", "Conversion", "A/B Testing", "Attribution"],
  },
  {
    num: "04",
    category: "Brand Strategy",
    title: "Creative Direction",
    desc: "Positioning your brand within creator culture authentically. Guidelines that speak to your audience.",
    tags: ["Positioning", "Moodboarding", "Guidelines", "Tone"],
  },
];

const soohServices = [
  {
    num: "01",
    category: "Billboard Placement",
    title: "Premium Placements",
    desc: "Your brand on high-traffic digital screens and static billboards — malls, highways, city centres across MENA.",
    tags: ["Digital OOH", "Static", "Malls", "Highways"],
  },
  {
    num: "02",
    category: "Creator Activation",
    title: "Influencer at the Billboard",
    desc: "Creators film authentic content at your billboard and publish across TikTok, Instagram, and Snapchat.",
    tags: ["TikTok", "Instagram", "Snapchat", "On-Site"],
  },
  {
    num: "03",
    category: "Double Amplification",
    title: "Two Channels, One Campaign",
    desc: "Physical OOH impressions combined with social media reach — maximising brand visibility across both worlds.",
    tags: ["Dual Channel", "10M+ Impressions", "3x Recall"],
  },
  {
    num: "04",
    category: "Full Tracking",
    title: "Unified Reporting",
    desc: "Outdoor impression data plus social engagement and conversions — all in a single dashboard.",
    tags: ["Analytics", "Impressions", "Engagement", "ROI"],
  },
];

function ServiceItem({
  s, i, hovered, setHovered, idx,
}: {
  s: typeof influencerServices[0];
  i: number;
  hovered: number | null;
  setHovered: (v: number | null) => void;
  idx: number;
}) {
  const isHovered = hovered === idx;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay: i * 0.09, duration: 0.7 }}
      onMouseEnter={() => setHovered(idx)}
      onMouseLeave={() => setHovered(null)}
      className="group py-6 px-2 border-b border-white/10"
    >
      <div className="flex items-start gap-6">
        <span
          className="text-[10px] font-mono tracking-widest shrink-0 mt-1 transition-colors duration-300"
          style={{ color: isHovered ? "#1535C2" : "rgba(255,255,255,0.3)" }}
        >
          {s.num}
        </span>

        <div className="flex-1 min-w-0">
          <div
            className="text-[9px] tracking-[0.28em] uppercase mb-1 transition-colors duration-300"
            style={{ color: isHovered ? "#7b9fff" : "rgba(255,255,255,0.25)" }}
          >
            {s.category}
          </div>

          <h3
            className="font-semibold uppercase leading-[1] mb-3 transition-colors duration-300"
            style={{
              fontSize: "clamp(12px, 1vw, 14px)",
              letterSpacing: "0.05em",
              color: isHovered ? "#ffffff" : "rgba(255,255,255,0.6)",
            }}
          >
            {s.title}
          </h3>

          <div
            style={{
              color: isHovered ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0)",
              height: isHovered ? "auto" : 0,
              overflow: "hidden",
              fontSize: "10px",
              lineHeight: "2",
              letterSpacing: "0.06em",
              transition: "all 0.4s",
            }}
          >
            {s.desc}
          </div>

          <div
            className="flex flex-wrap gap-2 mt-3"
            style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.4s" }}
          >
            {s.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] tracking-[0.18em] uppercase px-3 py-1 border"
                style={{ borderColor: "rgba(21,53,194,0.6)", color: "rgba(180,200,255,0.9)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(0)" : "translateX(-6px)",
            transition: "all 0.3s",
            flexShrink: 0,
            marginTop: "4px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="#1535C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section id="services" ref={ref} className="section-padding relative overflow-hidden bg-[#0a0f1e]">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 82% 80% at 50% 50%, black 45%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 82% 80% at 50% 50%, black 45%, transparent 100%)",
        }}
      >
        <video
          src={SERVICES_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: videoReady ? 0.4 : 0 }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(10,15,30,0.55) 0%, rgba(10,15,30,0.42) 60%, rgba(10,15,30,0.50) 100%)" }}
      />

      <div className="container-custom relative z-10">

        <motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="mb-20"
>
  <div className="text-[10px] tracking-[0.3em] text-[#7b9fff] uppercase mb-5 flex items-center gap-4">
    <div className="w-6 h-[1px] bg-[#1535C2]" />
    What We Do
  </div>
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
    <h2
      className="font-black uppercase text-white leading-[0.9]"
      style={{ fontSize: "clamp(30px, 4vw, 56px)", letterSpacing: "-0.03em" }}
    >
      SERVICES
    </h2>
    <p
      className="text-[10px] tracking-[0.1em] uppercase leading-[2.2] max-w-[280px]"
      style={{ color: "rgba(255,255,255,0.4)" }}
    >
      AI-assisted strategy. Human-led execution. Built for brands that demand measurable outcomes.
    </p>
  </div>
</motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mb-40"
            >
              
              <h3
                className="font-black uppercase text-white leading-[0.9]"
                style={{ fontSize: "clamp(28px, 3vw, 48px)", letterSpacing: "-0.03em" }}
              >
                Influencer
                <br />Marketing
              </h3>
            </motion.div>
            <div>
              {influencerServices.map((s, i) => (
                <ServiceItem
                  key={s.num}
                  s={s}
                  i={i}
                  hovered={hovered}
                  setHovered={setHovered}
                  idx={i}
                />
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-40"
            >
              
              <h3
                className="font-black uppercase text-white leading-[1.05]"
                style={{ fontSize: "clamp(28px, 3vw, 48px)", letterSpacing: "-0.03em" }}
              >
                Social
                <br />Out-of-Home
              </h3>
            </motion.div>
            <div>
              {soohServices.map((s, i) => (
                <ServiceItem
                  key={s.num}
                  s={s}
                  i={i}
                  hovered={hovered}
                  setHovered={setHovered}
                  idx={i + 10}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}