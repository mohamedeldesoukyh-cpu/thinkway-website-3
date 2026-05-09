"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const modules = [
  {
    num: "01",
    title: "Content Strategy",
    desc: "Master the frameworks behind viral content. Learn platform algorithms, content calendars, and what makes audiences stop scrolling.",
    duration: "4 Weeks",
    level: "Beginner–Intermediate",
  },
  {
    num: "02",
    title: "Personal Branding",
    desc: "Define your aesthetic, voice, and niche. Build a visual identity that attracts the right brand deals and loyal followers.",
    duration: "3 Weeks",
    level: "All Levels",
  },
  {
    num: "03",
    title: "Monetization",
    desc: "Turn your audience into income. Sponsored content, affiliate revenue, digital products, and direct-to-brand negotiation.",
    duration: "3 Weeks",
    level: "Intermediate",
  },
  {
    num: "04",
    title: "Platform Growth",
    desc: "Deep-dives into Instagram, TikTok, YouTube, and Snapchat. Tailored growth tactics per platform with real case studies.",
    duration: "5 Weeks",
    level: "All Levels",
  },
  {
    num: "05",
    title: "Analytics & Insights",
    desc: "Read your numbers like a strategist. Understand engagement rate, reach vs impressions, story retention, and what to optimize.",
    duration: "2 Weeks",
    level: "Intermediate",
  },
  {
    num: "06",
    title: "Campaign Collaboration",
    desc: "Work directly with brands. Briefing, scripting, deliverables, and post-campaign reporting — the professional creator workflow.",
    duration: "2 Weeks",
    level: "Advanced",
  },
];

export default function CreatorProgram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="program" ref={ref} className="section-padding bg-[#060606] relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[20%] w-px bg-[#0d0d0d] hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-[20%] w-px bg-[#0d0d0d] hidden lg:block" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20"
        >
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#c0392b] uppercase mb-5 flex items-center gap-4">
              <div className="w-6 h-[1px] bg-[#c0392b]" />
              For Creators
            </div>
            <h2
              className="font-black uppercase text-white leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 70px)", letterSpacing: "-0.04em" }}
            >
              CREATOR
              <br />
              <span className="text-[#c0392b]">PROGRAM</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[10px] text-[#444] tracking-[0.1em] uppercase leading-[2.4] mb-6">
              An intensive development program for creators who want to grow their influence, attract premium brand deals, and build a sustainable career online.
            </p>
            <div className="flex gap-6">
              <div>
                <div className="text-xl font-bold text-white">6</div>
                <div className="text-[9px] tracking-[0.2em] text-[#333] uppercase mt-1">Modules</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">19</div>
                <div className="text-[9px] tracking-[0.2em] text-[#333] uppercase mt-1">Total Weeks</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Live</div>
                <div className="text-[9px] tracking-[0.2em] text-[#333] uppercase mt-1">Sessions</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modules accordion */}
        <div className="border-t border-[#111]">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.7 }}
              className="border-b border-[#111] group"
            >
              <button
                className="w-full flex items-center gap-6 py-7 text-left"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="text-[10px] font-mono text-[#c0392b] tracking-widest shrink-0 w-6">{mod.num}</span>
                <h3
                  className="flex-1 font-semibold tracking-[0.12em] uppercase text-sm transition-colors duration-300"
                  style={{ color: active === i ? "#fff" : "#555" }}
                >
                  {mod.title}
                </h3>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="hidden md:block text-[9px] tracking-[0.15em] text-[#333] uppercase">{mod.duration}</span>
                  <span className="hidden md:block text-[9px] tracking-[0.15em] text-[#333] uppercase">{mod.level}</span>
                  <motion.div
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 border border-[#1a1a1a] flex items-center justify-center text-[#555] text-lg leading-none"
                  >
                    +
                  </motion.div>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-8 pl-12 pr-4">
                  <p className="text-[10px] text-[#444] tracking-[0.1em] leading-[2.4] max-w-2xl">{mod.desc}</p>
                  <div className="flex gap-6 mt-6 md:hidden">
                    <div className="text-[9px] text-[#333] tracking-widest uppercase">{mod.duration}</div>
                    <div className="text-[9px] text-[#333] tracking-widest uppercase">{mod.level}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-16 pt-10 border-t border-[#111]"
        >
          <div>
            <div className="text-sm font-semibold tracking-[0.12em] uppercase text-white">Ready to grow?</div>
            <div className="text-[10px] text-[#444] tracking-widest uppercase mt-1">Limited spots available per cohort.</div>
          </div>
          <button className="btn-primary">
            Apply to the Program
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
