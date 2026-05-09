"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    num: "01",
    category: "Influencer Campaigns",
    title: "End-to-End\nExecution",
    desc: "From creator selection to content delivery and reporting. We handle every detail so your campaign launches on time and on-brand.",
    tags: ["Casting", "Briefing", "Delivery", "Reporting"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
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
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
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
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
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
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 23L14 5l9 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M7.5 17h13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="section-padding bg-[#060606]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#c0392b] uppercase mb-5 flex items-center gap-4">
              <div className="w-6 h-[1px] bg-[#c0392b]" />
              What We Do
            </div>
            <h2
              className="font-black uppercase text-white leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 70px)", letterSpacing: "-0.04em" }}
            >
              SERVICES
            </h2>
          </div>
          <p className="text-[10px] tracking-[0.1em] text-[#444] uppercase leading-[2.2] max-w-[280px]">
            A full suite of influencer marketing services — built for brands that demand measurable outcomes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#111]">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-10 bg-[#060606] group overflow-hidden transition-all duration-500"
              style={{
                background: hovered === i ? "rgba(192,57,43,0.04)" : "#060606",
              }}
            >
              {/* Corner mark */}
              <span className="absolute top-8 right-8 text-[10px] font-mono text-[#222] tracking-widest">
                {s.num}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center mb-8 transition-colors duration-300"
                style={{ color: hovered === i ? "#c0392b" : "#333" }}
              >
                {s.icon}
              </div>

              {/* Category */}
              <div className="text-[9px] tracking-[0.28em] uppercase text-[#c0392b] mb-4">{s.category}</div>

              {/* Title */}
              <h3
                className="font-bold uppercase text-white leading-[0.95] mb-6 whitespace-pre-line"
                style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}
              >
                {s.title}
              </h3>

              {/* Desc */}
              <p className="text-[10px] text-[#444] tracking-[0.08em] leading-[2.2] mb-8">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Bottom border accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-[#c0392b]"
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
