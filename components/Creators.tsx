"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const creators = [
  { id: "01", name: "Layla Al-Hassan", handle: "@laylacreates", category: "Lifestyle & Fashion", followers: "2.4M", engagement: "6.8%", platforms: ["IG", "TT", "YT"], location: "Dubai, UAE", image: "/media/creator-01.jpg" },
  { id: "02", name: "Khalid Mansour", handle: "@khalidtech", category: "Tech & Innovation", followers: "1.8M", engagement: "8.2%", platforms: ["YT", "TT", "IG"], location: "Riyadh, KSA", image: "/media/creator-02.jpg" },
  { id: "03", name: "Sara Nour", handle: "@saranour.life", category: "Beauty & Wellness", followers: "3.1M", engagement: "7.4%", platforms: ["IG", "SC", "TT"], location: "Cairo, Egypt", image: "/media/creator-03.jpg" },
  { id: "04", name: "Faisal Al-Rashidi", handle: "@faisalfit", category: "Fitness & Sports", followers: "890K", engagement: "9.1%", platforms: ["IG", "YT", "TT"], location: "Kuwait City", image: "/media/creator-04.jpg" },
  { id: "05", name: "Nora Bakr", handle: "@norafoodstories", category: "Food & Travel", followers: "1.3M", engagement: "5.9%", platforms: ["IG", "YT", "TT"], location: "Beirut, Lebanon", image: "/media/creator-05.jpg" },
  { id: "06", name: "Omar Diallo", handle: "@omardiallostyle", category: "Streetwear & Culture", followers: "740K", engagement: "10.3%", platforms: ["TT", "IG", "SC"], location: "London, UK", image: "/media/creator-06.jpg" },
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
      className="relative border border-[#ebebeb] p-8 group overflow-hidden card-hover"
      style={{ borderColor: hovered ? "#1535C222" : "#ebebeb" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1535C204] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className="w-12 h-12 relative overflow-hidden shrink-0">
          <Image
            src={creator.image}
            alt={creator.name}
            fill
            className="object-cover"
            onError={(e) => {
              const parent = (e.currentTarget as HTMLImageElement).parentElement;
              if (parent) {
                parent.innerHTML = `<div style="width:100%;height:100%;background:linear-gradient(135deg,#1535C2,#0b1f8a);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">${creator.name.split(" ").map((n: string) => n[0]).join("")}</div>`;
              }
            }}
          />
        </div>
        <span className="text-[10px] font-mono text-[#ddd] tracking-widest">{creator.id}</span>
      </div>

      {/* Identity */}
      <div className="relative z-10 mb-6">
        <h3 className="text-sm font-semibold tracking-[0.08em] text-[#0a0a0a] mb-1">{creator.name}</h3>
        <div className="text-[10px] text-[#bbb] tracking-widest">{creator.handle}</div>
        <div className="mt-2 tag inline-block">{creator.category}</div>
      </div>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-[#f4f4f4]">
        <div>
          <div className="text-lg font-bold text-[#0a0a0a]">{creator.followers}</div>
          <div className="text-[9px] tracking-[0.2em] text-[#bbb] uppercase mt-1">Followers</div>
        </div>
        <div>
          <div className="text-lg font-bold text-[#1535C2]">{creator.engagement}</div>
          <div className="text-[9px] tracking-[0.2em] text-[#bbb] uppercase mt-1">Engagement</div>
        </div>
      </div>

      {/* Platforms + location */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex gap-2">
          {creator.platforms.map((p) => (
            <span key={p} className="w-7 h-7 flex items-center justify-center text-[9px] font-bold border border-[#ebebeb] text-[#bbb]">
              {p}
            </span>
          ))}
        </div>
        <div className="text-[9px] text-[#ccc] tracking-widest">{creator.location}</div>
      </div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 flex gap-3 mt-6 pt-6 border-t border-[#f4f4f4]"
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
    <section id="creators" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
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
            <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.9]" style={{ fontSize: "clamp(36px, 5vw, 70px)", letterSpacing: "-0.04em" }}>
              FEATURED
              <br /><span className="text-[#1535C2]">CREATORS</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-[10px] text-[#aaa] tracking-[0.1em] uppercase leading-[2.2] max-w-xs text-left md:text-right">
              500+ vetted creators across the MENA region and beyond.
            </p>
            <button className="btn-outline text-[10px]">
              Browse All Creators
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ebebeb]">
          {creators.map((creator, i) => (
            <CreatorCard key={creator.id} creator={creator} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
