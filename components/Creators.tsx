"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const creators = [
  {
    id: "01",
    name: "Layla Al-Hassan",
    handle: "@laylacreates",
    category: "Lifestyle & Fashion",
    followers: "2.4M",
    engagement: "6.8%",
    platforms: ["IG", "TT", "YT"],
    specialty: "Luxury & Fashion",
    location: "Dubai, UAE",
    color: "#c0392b",
  },
  {
    id: "02",
    name: "Khalid Mansour",
    handle: "@khalidtech",
    category: "Tech & Innovation",
    followers: "1.8M",
    engagement: "8.2%",
    platforms: ["YT", "TT", "IG"],
    specialty: "Consumer Tech",
    location: "Riyadh, KSA",
    color: "#c0392b",
  },
  {
    id: "03",
    name: "Sara Nour",
    handle: "@saranour.life",
    category: "Beauty & Wellness",
    followers: "3.1M",
    engagement: "7.4%",
    platforms: ["IG", "SC", "TT"],
    specialty: "Beauty & Skincare",
    location: "Cairo, Egypt",
    color: "#c0392b",
  },
  {
    id: "04",
    name: "Faisal Al-Rashidi",
    handle: "@faisalfit",
    category: "Fitness & Sports",
    followers: "890K",
    engagement: "9.1%",
    platforms: ["IG", "YT", "TT"],
    specialty: "Health & Fitness",
    location: "Kuwait City",
    color: "#c0392b",
  },
  {
    id: "05",
    name: "Nora Bakr",
    handle: "@norafoodstories",
    category: "Food & Travel",
    followers: "1.3M",
    engagement: "5.9%",
    platforms: ["IG", "YT", "TT"],
    specialty: "Food & Hospitality",
    location: "Beirut, Lebanon",
    color: "#c0392b",
  },
  {
    id: "06",
    name: "Omar Diallo",
    handle: "@omardiallostyle",
    category: "Streetwear & Culture",
    followers: "740K",
    engagement: "10.3%",
    platforms: ["TT", "IG", "SC"],
    specialty: "Street Culture",
    location: "London, UK",
    color: "#c0392b",
  },
];

function CreatorCard({ creator, index, inView }: { creator: typeof creators[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-[#111] bg-[#080808] p-8 group overflow-hidden card-hover"
      style={{ borderColor: hovered ? "#c0392b22" : "#111" }}
    >
      {/* Background fill on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#c0392b08] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-6 relative z-10">
        {/* Avatar placeholder */}
        <div
          className="w-12 h-12 flex items-center justify-center text-xs font-bold text-white"
          style={{ background: `linear-gradient(135deg, #c0392b, #870d0d)` }}
        >
          {creator.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <span className="text-[10px] font-mono text-[#222] tracking-widest">{creator.id}</span>
      </div>

      {/* Identity */}
      <div className="relative z-10 mb-6">
        <h3 className="text-sm font-semibold tracking-[0.08em] text-white mb-1">{creator.name}</h3>
        <div className="text-[10px] text-[#555] tracking-widest">{creator.handle}</div>
        <div className="mt-2 tag inline-block">{creator.category}</div>
      </div>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-[#0f0f0f]">
        <div>
          <div className="text-lg font-bold text-white">{creator.followers}</div>
          <div className="text-[9px] tracking-[0.2em] text-[#444] uppercase mt-1">Followers</div>
        </div>
        <div>
          <div className="text-lg font-bold text-[#c0392b]">{creator.engagement}</div>
          <div className="text-[9px] tracking-[0.2em] text-[#444] uppercase mt-1">Engagement</div>
        </div>
      </div>

      {/* Platforms + location */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex gap-2">
          {creator.platforms.map((p) => (
            <span
              key={p}
              className="w-7 h-7 flex items-center justify-center text-[9px] font-bold border border-[#1a1a1a] text-[#555]"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="text-[9px] text-[#333] tracking-widest">{creator.location}</div>
      </div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 flex gap-3 mt-6 pt-6 border-t border-[#111]"
      >
        <button className="btn-primary text-[9px] px-4 py-3 flex-1 justify-center">View Profile</button>
        <button className="btn-outline text-[9px] px-4 py-3 flex-1 justify-center">Case Study</button>
      </motion.div>
    </motion.div>
  );
}

export default function Creators() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="creators" ref={ref} className="section-padding bg-[#080808]">
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
              Our Network
            </div>
            <h2
              className="font-black uppercase text-white leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 70px)", letterSpacing: "-0.04em" }}
            >
              FEATURED
              <br />
              <span className="text-[#c0392b]">CREATORS</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-[10px] text-[#444] tracking-[0.1em] uppercase leading-[2.2] max-w-xs text-left md:text-right">
              500+ vetted creators across the MENA region and beyond. Every niche, every platform, every audience.
            </p>
            <button className="btn-outline text-[10px]">
              Browse All Creators
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0f0f0f]">
          {creators.map((creator, i) => (
            <CreatorCard key={creator.id} creator={creator} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
