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
    <>
      <section
        id="program"
        ref={ref}
        className="section-padding bg-[#f8f8f8] relative overflow-hidden"
      >
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-[#efefef] hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-[20%] w-px bg-[#efefef] hidden lg:block" />

        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20"
          >
            <div>
              <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-[#1535C2]" />
                For Creators
              </div>

              <h2
                className="font-black uppercase text-[#0a0a0a] leading-[0.9]"
                style={{
                  fontSize: "clamp(36px, 5vw, 70px)",
                  letterSpacing: "-0.04em",
                }}
              >
                CREATOR
                <br />
                <span className="text-[#1535C2]">PROGRAM</span>
              </h2>
            </div>

            <div className="max-w-sm">
              <p className="text-[10px] text-[#aaa] tracking-[0.1em] uppercase leading-[2.4] mb-6">
                An intensive development program for creators who want to grow
                their influence, attract premium brand deals, and build a
                sustainable career online.
              </p>

              <div className="flex gap-6">
                {[
                  ["6", "Modules"],
                  ["19", "Total Weeks"],
                  ["Live", "Sessions"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-xl font-bold text-[#0a0a0a]">
                      {val}
                    </div>

                    <div className="text-[9px] tracking-[0.2em] text-[#ccc] uppercase mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="border-t border-[#ebebeb]">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.num}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.7 }}
                className="border-b border-[#ebebeb] group"
              >
                <button
                  className="w-full flex items-center gap-6 py-7 text-left"
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <span className="text-[10px] font-mono text-[#1535C2] tracking-widest shrink-0 w-6">
                    {mod.num}
                  </span>

                  <h3
                    className="flex-1 font-semibold tracking-[0.12em] uppercase text-sm transition-colors duration-300"
                    style={{
                      color: active === i ? "#0a0a0a" : "#aaa",
                    }}
                  >
                    {mod.title}
                  </h3>

                  <div className="flex items-center gap-6 shrink-0">
                    <span className="hidden md:block text-[9px] tracking-[0.15em] text-[#ccc] uppercase">
                      {mod.duration}
                    </span>

                    <span className="hidden md:block text-[9px] tracking-[0.15em] text-[#ccc] uppercase">
                      {mod.level}
                    </span>

                    <motion.div
                      animate={{ rotate: active === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 border border-[#e0e0e0] flex items-center justify-center text-[#bbb] text-lg leading-none"
                    >
                      +
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: active === i ? "auto" : 0,
                    opacity: active === i ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-12 pr-4">
                    <p className="text-[10px] text-[#aaa] tracking-[0.1em] leading-[2.4] max-w-2xl">
                      {mod.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-16 pt-10 border-t border-[#ebebeb]"
          >
            <div>
              <div className="text-sm font-semibold tracking-[0.12em] uppercase text-[#0a0a0a]">
                Ready to grow?
              </div>

              <div className="text-[10px] text-[#bbb] tracking-widest uppercase mt-1">
                Limited spots available per cohort.
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={() =>
                document
                  .querySelector("#creator-apply")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Apply to the Program

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      <section
        id="creator-apply"
        className="bg-[#0a0f1e] text-white py-24 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
            <div className="w-6 h-[1px] bg-[#1535C2]" />
            Creator Application
          </div>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-8">
            APPLY TO
            <br />
            THE PROGRAM
          </h2>

          <p className="text-white/60 mb-12 tracking-[0.08em] uppercase text-[11px] leading-[2]">
            Submit your information and our creator management team will contact
            you shortly.
          </p>

          <form
            action="/api/creator-apply"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="FULL NAME"
              required
              className="w-full bg-transparent border border-white/10 p-5 text-sm tracking-[0.12em] uppercase outline-none focus:border-[#1535C2]"
            />

            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              className="w-full bg-transparent border border-white/10 p-5 text-sm tracking-[0.12em] uppercase outline-none focus:border-[#1535C2]"
            />

            <input
              type="text"
              name="social"
              placeholder="INSTAGRAM / TIKTOK USERNAME"
              required
              className="w-full bg-transparent border border-white/10 p-5 text-sm tracking-[0.12em] uppercase outline-none focus:border-[#1535C2]"
            />

            <input
              type="text"
              name="followers"
              placeholder="FOLLOWERS COUNT"
              className="w-full bg-transparent border border-white/10 p-5 text-sm tracking-[0.12em] uppercase outline-none focus:border-[#1535C2]"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="WHY DO YOU WANT TO JOIN?"
              className="w-full bg-transparent border border-white/10 p-5 text-sm tracking-[0.12em] uppercase outline-none focus:border-[#1535C2]"
            />

            <button type="submit" className="btn-primary">
              Submit Application

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
