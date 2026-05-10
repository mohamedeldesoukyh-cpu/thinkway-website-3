"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: "01",
    title: "Fashion & Lifestyle Voices",
    desc: "Creators shaping trends and everyday inspiration.",
    image: "/media/Fashion_&_Lifestyle_Voices_Creators_202605100615.jpeg",
    accent: "#e94560",
    overlay: "linear-gradient(180deg, rgba(10,15,30,0.3) 0%, rgba(10,15,30,0.75) 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C14 4 8 8 8 14s6 10 6 10 6-4 6-10S14 4 14 4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M8 14h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Tech & Digital Creators",
    desc: "Voices simplifying innovation and digital culture.",
    image: "/media/Tech_&_Digital_Creators_Creators_202605100617.jpeg",
    accent: "#7b9fff",
    overlay: "linear-gradient(180deg, rgba(10,15,30,0.25) 0%, rgba(10,15,30,0.78) 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M9 12l3 3-3 3M15 18h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Beauty & Wellness Experts",
    desc: "Trusted creators driving routines and product discovery.",
    image: "/media/Beauty_&_Wellness_Experts_Creators_202605100617.jpeg",
    accent: "#f8b4ff",
    overlay: "linear-gradient(180deg, rgba(10,15,30,0.2) 0%, rgba(10,15,30,0.72) 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4c-1.5 3-5 5-5 9a5 5 0 0010 0c0-4-3.5-6-5-9z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M11 17c0 1.657 1.343 3 3 3s3-1.343 3-3" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Fitness & Performance Influencers",
    desc: "Content that motivates action and healthy lifestyles.",
    image: "/media/Fitness_&_Performance_Influencers_Creators_202605100616.jpeg",
    accent: "#7fff7f",
    overlay: "linear-gradient(180deg, rgba(10,15,30,0.2) 0%, rgba(10,15,30,0.75) 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h3l2-6 4 12 3-8 2 4h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Food & Travel Storytellers",
    desc: "Creators capturing experiences and destinations.",
    image: "/media/Food_&_Travel_Storytellers_Creators_202605100616.jpeg",
    accent: "#ffb07f",
    overlay: "linear-gradient(180deg, rgba(10,15,30,0.2) 0%, rgba(10,15,30,0.75) 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="12" r="5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M14 17v7M10 24h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M7 7.5C8.5 5 11 4 14 4s5.5 1 7 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Culture & Trend Drivers",
    desc: "Voices leading conversations and viral moments.",
    image: "/media/Culture_&_Trend_Drivers_Creators_202605100615.jpeg",
    accent: "#ffd700",
    overlay: "linear-gradient(180deg, rgba(10,15,30,0.2) 0%, rgba(10,15,30,0.75) 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 7.5H24l-6.5 4.5 2.5 7.5L14 18l-6 4.5 2.5-7.5L4 10.5h7.5L14 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function CreatorCard({ cat, index, inView }: { cat: typeof categories[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-[#ebebeb] p-8 group overflow-hidden card-hover"
    >
      {/* Image panel — animated */}
      <div className="relative w-full h-48 mb-7 overflow-hidden">
        {/* Photo with scale-in on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            className="object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        </motion.div>

        {/* Gradient overlay — darkens bottom for text legibility */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: cat.overlay }} />

        {/* Accent glow on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 0.18 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${cat.accent}, transparent)` }}
        />

        {/* Card number */}
        <span className="absolute top-3 right-4 text-[10px] font-mono tracking-widest"
          style={{ color: "rgba(255,255,255,0.4)" }}>
          {cat.id}
        </span>

        {/* Icon — bottom left of image */}
        <motion.div
          className="absolute bottom-3 left-4"
          style={{ color: cat.accent }}
          animate={{ scale: hovered ? 1.15 : 1, y: hovered ? -4 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {cat.icon}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-[9px] tracking-[0.28em] uppercase mb-3 font-medium"
          style={{ color: cat.accent }}>
          Category
        </div>

        <h3 className="text-sm font-bold tracking-[0.06em] text-[#0a0a0a] mb-3 leading-[1.3] group-hover:text-[#1535C2] transition-colors duration-300">
          {cat.title}
        </h3>

        <p className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2]">
          {cat.desc}
        </p>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 mt-6 pt-5 border-t border-[#f4f4f4]"
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-[#1535C2] font-medium flex items-center gap-2">
          Explore Category
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ background: cat.accent }}
        initial={{ width: 0 }}
        animate={{ width: hovered ? "100%" : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export default function Creators() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="creators" ref={ref} className="section-padding bg-white">
      <div className="container-custom">

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
              Our Network
            </div>
            <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.9]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", letterSpacing: "-0.03em" }}>
              OUR CREATOR<br /><span className="text-[#1535C2]">NETWORK</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-[10px] text-[#aaa] tracking-[0.1em] uppercase leading-[2.2] max-w-xs text-left md:text-right">
              A curated ecosystem of creators across MENA and global markets — selected based on relevance, content quality, and performance.
            </p>
          </div>
        </motion.div>

        {/* 3-col card grid — same layout as before */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ebebeb]">
          {categories.map((cat, i) => (
            <CreatorCard key={cat.id} cat={cat} index={i} inView={inView} />
          ))}
        </div>

        {/* Note under grid */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center text-[9px] tracking-[0.18em] text-[#ccc] uppercase mt-10"
        >
          Creator selection is tailored for each campaign based on brand objectives and audience fit.
        </motion.p>

      </div>
    </section>
  );
}
