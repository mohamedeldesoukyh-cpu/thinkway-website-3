"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Billboard\nPlacement",
    desc: "We secure premium out-of-home inventory — high-footfall digital billboards and large-format screens positioned where your audience lives, moves, and scrolls.",
    tags: ["Digital Screens", "High-Traffic", "Premium Locations"],
  },
  {
    num: "02",
    title: "Influencer\nAmplification",
    desc: "Creators visit, film, and post their billboard moment — turning a physical ad into shareable social content that multiplies your reach far beyond the screen.",
    tags: ["Creator Content", "Social Sharing", "Organic Reach"],
  },
  {
    num: "03",
    title: "Measurable\nImpact",
    desc: "Track impressions, engagement, and earned media value across both the physical and digital touchpoints. Every campaign is fully reported end to end.",
    tags: ["Analytics", "EMV Tracking", "Full Reporting"],
  },
];

export default function SOOH() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="sooh" ref={ref} className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              New Service
            </div>
            <h2
              className="font-black uppercase text-white leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 70px)", letterSpacing: "-0.04em" }}
            >
              SOCIAL OUT
              <br />
              <span className="text-[#1535C2]">OF HOME</span>
            </h2>
          </div>
          <p className="text-[10px] tracking-[0.1em] text-[#666] uppercase leading-[2.2] max-w-[300px]">
            Where physical advertising meets social virality — your brand on the billboard, your creators on the feed.
          </p>
        </motion.div>

        {/* Video + intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1a1a1a]"
        >
          {/* Video */}
          <div className="relative overflow-hidden bg-[#111] aspect-video lg:aspect-auto lg:min-h-[420px]">
            <video
              ref={videoRef}
              src="/media/Influencer_talking_about_billboard_202605100112.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/40 pointer-events-none" />
          </div>

          {/* What is SOOH */}
          <div className="bg-[#111] p-10 lg:p-14 flex flex-col justify-center">
            <div className="text-[9px] tracking-[0.3em] uppercase text-[#1535C2] mb-6">What Is SOOH?</div>
            <p className="text-white font-black uppercase leading-[0.95] mb-8" style={{ fontSize: "clamp(22px, 2.5vw, 34px)", letterSpacing: "-0.03em" }}>
              THE BRIDGE BETWEEN<br />STREET AND SCREEN
            </p>
            <p className="text-[10px] text-[#666] tracking-[0.08em] leading-[2.4] mb-8">
              Social Out of Home (SOOH) fuses traditional out-of-home media with the power of influencer content. We place your brand on premium digital billboards and large-format screens across high-footfall locations — then send creators to capture and share that moment on social media.
            </p>
            <p className="text-[10px] text-[#666] tracking-[0.08em] leading-[2.4] mb-10">
              The result: a campaign that lives twice — once in the physical world, and again as organic, shareable content that drives engagement, brand recall, and reach far beyond the screen.
            </p>
            <button
              className="btn-primary text-[10px] self-start"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Launch a SOOH Campaign
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.8 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-10 overflow-hidden transition-all duration-500"
              style={{ background: hovered === i ? "#161616" : "#111" }}
            >
              <span className="absolute top-8 right-8 text-[10px] font-mono text-[#2a2a2a] tracking-widest">{p.num}</span>

              <h3
                className="font-bold uppercase text-white leading-[0.95] mb-6 whitespace-pre-line"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.03em" }}
              >
                {p.title}
              </h3>

              <p className="text-[10px] text-[#555] tracking-[0.08em] leading-[2.2] mb-8">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.18em] uppercase px-3 py-[5px] border text-[#444]"
                    style={{ borderColor: hovered === i ? "#1535C2" : "#1f1f1f" }}
                  >
                    {tag}
                  </span>
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

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-px grid grid-cols-3 gap-px bg-[#1a1a1a]"
        >
          {[
            { val: "3×", label: "Higher Recall vs Standard OOH" },
            { val: "10×", label: "Earned Reach Per Billboard" },
            { val: "100%", label: "End-to-End Managed" },
          ].map((stat) => (
            <div key={stat.val} className="bg-[#111] px-10 py-8 flex flex-col gap-2">
              <span className="font-black text-white" style={{ fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-0.04em" }}>
                {stat.val}
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#444]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
