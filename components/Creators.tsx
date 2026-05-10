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
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C14 4 8 8 8 14s6 10 6 10 6-4 6-10S14 4 14 4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M8 14h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Tech & Digital Creators",
    desc: "Voices simplifying innovation and digital culture.",
    image: "/media/Tech_&_Digital_Creators_Creators_202605100617.jpeg",
    accent: "#7b9fff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.3"/>
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M14 4c-1.5 3-5 5-5 9a5 5 0 0010 0c0-4-3.5-6-5-9z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M11 17c0 1.657 1.343 3 3 3s3-1.343 3-3" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Fitness & Performance Influencers",
    desc: "Content that motivates action and healthy lifestyles.",
    image: "/media/Fitness_&_Performance_Influencers_Creators_202605100616.jpeg",
    accent: "#7fff7f",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="12" r="5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M14 17v7M10 24h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M7 7.5C8.5 5 11 4 14 4s5.5 1 7 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Culture & Trend Drivers",
    desc: "Voices leading conversations and viral moments.",
    image: "/media/Culture_&_Trend_Drivers_Creators_202605100615.jpeg",
    accent: "#ffd700",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 7.5H24l-6.5 4.5 2.5 7.5L14 18l-6 4.5 2.5-7.5L4 10.5h7.5L14 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function CreatorCard({ cat, index, inView }: { cat: typeof categories[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.08 + index * 0.14,
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-none rounded-2xl"
      style={{
        aspectRatio: "9 / 16",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        boxShadow: hovered
          ? `0 28px 72px rgba(0,0,0,0.22), 0 0 0 1px ${cat.accent}40`
          : "0 4px 20px rgba(0,0,0,0.06)",
        transition: "transform 0.28s ease, box-shadow 0.28s ease",
      }}
    >
      {/* Full-card photo — fades in once loaded */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={cat.image}
          alt={cat.title}
          fill
          className="object-cover"
          style={{ opacity: imgLoaded ? 1 : 0, transition: "opacity 0.8s ease" }}
          onLoad={() => setImgLoaded(true)}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      </motion.div>

      {/* Permanent gradient — bottom darkens for text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.80) 100%)" }}
      />

      {/* Accent colour wash on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 0.20 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ background: `linear-gradient(180deg, transparent 40%, ${cat.accent}80 100%)` }}
      />

      {/* Card number — top right */}
      <span
        className="absolute top-4 right-4 text-[10px] font-mono tracking-widest"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        {cat.id}
      </span>

      {/* Icon — top left, fades out on hover */}
      <motion.div
        className="absolute top-4 left-4"
        style={{ color: cat.accent }}
        animate={{ opacity: hovered ? 0 : 1, y: hovered ? -6 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {cat.icon}
      </motion.div>

      {/* Text block — always visible, lifts on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-3 pb-4"
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Category label */}
        <motion.div
          className="text-[8px] tracking-[0.22em] uppercase font-medium mb-1 truncate"
          style={{ color: cat.accent }}
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          Category
        </motion.div>

        {/* Title — wraps inside card width */}
        <h3
          className="font-bold text-white leading-[1.25] mb-2"
          style={{
            fontSize: "clamp(11px, 1.4vw, 14px)",
            letterSpacing: "-0.01em",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {cat.title}
        </h3>

        {/* Desc — slides in on hover */}
        <motion.p
          className="leading-[1.7] mb-3 overflow-hidden"
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(9px, 0.85vw, 10px)",
            letterSpacing: "0.04em",
          }}
          animate={{ opacity: hovered ? 1 : 0, maxHeight: hovered ? 80 : 0 }}
          transition={{ duration: 0.35 }}
        >
          {cat.desc}
        </motion.p>

        {/* CTA arrow */}
        <motion.span
          className="tracking-[0.18em] uppercase font-medium flex items-center gap-1"
          style={{ color: cat.accent, fontSize: "clamp(8px, 0.75vw, 9px)" }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="9" height="9" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ background: cat.accent }}
        animate={{ width: hovered ? "100%" : "0%" }}
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
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              Our Network
            </div>
            <h2
              className="font-black uppercase text-[#0a0a0a] leading-[0.9]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", letterSpacing: "-0.03em" }}
            >
              OUR CREATOR<br /><span className="text-[#1535C2]">NETWORK</span>
            </h2>
          </div>
          <p className="text-[10px] text-[#aaa] tracking-[0.1em] uppercase leading-[2.2] max-w-xs text-left md:text-right">
            A curated ecosystem of creators across MENA and global markets — selected based on relevance, content quality, and performance.
          </p>
        </motion.div>

        {/* 6-card horizontal grid — portrait cards side by side */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat, i) => (
            <CreatorCard key={cat.id} cat={cat} index={i} inView={inView} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center text-[9px] tracking-[0.18em] text-[#ccc] uppercase mt-10"
        >
          Creator selection is tailored for each campaign based on brand objectives and audience fit.
        </motion.p>

      </div>
    </section>
  );
}
