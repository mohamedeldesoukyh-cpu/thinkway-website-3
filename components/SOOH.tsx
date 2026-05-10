"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SOOH_VIDEO = "/media/Influencer_talking_about_billboard_202605100112.mp4";

const pillars = [
  {
    num: "01",
    title: "Billboard Placement",
    desc: "Your brand on premium digital screens and static billboards across high-traffic locations — malls, highways, city centres.",
  },
  {
    num: "02",
    title: "Creator Activation",
    desc: "Influencers film authentic content at the billboard location and publish it across TikTok, Instagram, and Snapchat.",
  },
  {
    num: "03",
    title: "Double Amplification",
    desc: "Physical OOH impressions combined with social media reach — one campaign, two powerful channels working together.",
  },
  {
    num: "04",
    title: "Full Tracking",
    desc: "We measure both worlds: outdoor impression data plus social engagement, views, and conversions in a single report.",
  },
];

const stats = [
  { val: "10M+", label: "Physical impressions per campaign" },
  { val: "3×", label: "Higher recall vs OOH alone" },
  { val: "48h", label: "Average content turnaround" },
];

export default function SOOH() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section id="sooh" ref={ref} className="section-padding bg-[#f8f8f8] relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 right-[38%] w-px bg-[#efefef] hidden lg:block" />

      <div className="container-custom">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
            <div className="w-6 h-[1px] bg-[#1535C2]" />
            New Service
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              className="font-black uppercase text-[#0a0f1e] leading-[0.88]"
              style={{ fontSize: "clamp(40px, 6vw, 82px)", letterSpacing: "-0.04em" }}
            >
              SOCIAL
              <br />
              OUT OF
              <br />
              <span className="text-[#1535C2]">HOME.</span>
            </h2>
            <div className="max-w-sm pb-2">
              <p className="text-[11px] text-[#888] tracking-[0.08em] leading-[2.4] uppercase">
                We take your brand off the screen and onto the street — then back online.
                SOOH fuses physical billboard presence with creator-driven social content
                for an impact no single channel can match.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── MAIN CONTENT: pillars left, video right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-[#e8e8e8]">

          {/* Left — pillars */}
          <div className="lg:col-span-2 bg-white">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
                className="flex gap-5 p-8 border-b border-[#f4f4f4] group"
              >
                <span className="text-[10px] font-mono text-[#1535C2] tracking-widest shrink-0 mt-1">{p.num}</span>
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0a0f1e] mb-2 group-hover:text-[#1535C2] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2.1]">{p.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats strip */}
            <div className="grid grid-cols-3 divide-x divide-[#f4f4f4]">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-6 text-center"
                >
                  <div className="text-lg font-black text-[#1535C2] tracking-tight leading-none">{s.val}</div>
                  <div className="text-[8px] tracking-[0.18em] text-[#bbb] uppercase mt-2 leading-[1.8]">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — video */}
          <motion.div
            className="lg:col-span-3 relative bg-[#0a0f1e] overflow-hidden"
            style={{ minHeight: "520px" }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Video */}
            <video
              ref={videoRef}
              src={SOOH_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => setVideoReady(true)}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: videoReady ? 1 : 0 }}
            />

            {/* Dark fallback */}
            <div
              className="absolute inset-0 bg-[#0a0f1e] transition-opacity duration-700"
              style={{ opacity: videoReady ? 0 : 1, pointerEvents: "none" }}
            />

            {/* Bottom gradient for label */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, transparent 50%, rgba(10,15,30,0.85) 100%)",
              }}
            />

            {/* Video label */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8 z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-2">
                    SOOH in Action
                  </div>
                  <div className="text-white text-xs font-semibold tracking-[0.1em] uppercase">
                    Creator × Billboard
                  </div>
                </div>
                {/* Live badge */}
                <div className="flex items-center gap-2 bg-[#1535C2] px-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-[9px] tracking-[0.2em] text-white uppercase font-medium">Live</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── HOW IT WORKS — simple 3-step flow ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-px bg-white border-t border-[#ebebeb]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#f0f0f0]">
            {[
              { step: "Step 01", title: "Book Your Billboard", desc: "Choose location, format, and duration. We secure premium placements in your target markets." },
              { step: "Step 02", title: "Creator Goes Live", desc: "Our matched influencer films vertical content at the billboard and posts across their channels." },
              { step: "Step 03", title: "Measure Both Worlds", desc: "Receive a unified report: outdoor impressions, social reach, engagement rate, and conversions." },
            ].map((item, i) => (
              <div key={item.step} className="p-8 group">
                <div className="text-[9px] tracking-[0.25em] text-[#1535C2] uppercase mb-4">{item.step}</div>
                <h3 className="text-sm font-bold tracking-[0.08em] uppercase text-[#0a0f1e] mb-3 group-hover:text-[#1535C2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2.2]">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-16 pt-10 border-t border-[#ebebeb]"
        >
          <div>
            <div className="text-sm font-black tracking-[-0.02em] uppercase text-[#0a0f1e]">
              Ready to own the street — and the feed?
            </div>
            <div className="text-[10px] text-[#bbb] tracking-widest uppercase mt-1">
              SOOH campaigns available across the MENA region.
            </div>
          </div>
          <button
            className="btn-primary shrink-0"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Launch a SOOH Campaign
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
