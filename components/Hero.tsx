"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const platforms = [
  { name: "Instagram", color: "#E1306C", icon: "IG", stat: "2.4B users" },
  { name: "TikTok", color: "#ff0050", icon: "TT", stat: "1.7B users" },
  { name: "YouTube", color: "#FF0000", icon: "YT", stat: "2.7B users" },
  { name: "Snapchat", color: "#FFFC00", icon: "SC", stat: "750M users" },
];

const HEADLINE = ["YOUR BRAND", "DESERVES", "MORE THAN", "ADS."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => {
        if (c >= 500) { clearInterval(t); return 500; }
        return c + 5;
      });
    }, 18);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">
      {/* Background image placeholder with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 75% 50%, rgba(192,57,43,0.12) 0%, transparent 70%), linear-gradient(135deg, #080808 0%, #0d0d0d 100%)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating platform cards */}
      <motion.div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block" style={{ y, opacity }}>
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            className="absolute"
            style={{
              top: `${18 + i * 20}%`,
              right: `${8 + (i % 2) * 12}%`,
            }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className="relative"
            >
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-none"
                style={{
                  background: "rgba(12,12,12,0.9)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px)",
                  boxShadow: `0 0 30px ${p.color}20`,
                }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center text-[10px] font-bold"
                  style={{ background: p.color, color: "#fff" }}
                >
                  {p.icon}
                </div>
                <div>
                  <div className="text-white text-xs font-medium tracking-wider">{p.name}</div>
                  <div className="text-[#555] text-[10px] tracking-widest uppercase">{p.stat}</div>
                </div>
                <div className="ml-2">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent" style={{ background: `linear-gradient(90deg, transparent, ${p.color}80)` }} />
                </div>
              </div>
              {/* Glow dot */}
              <div
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Live campaign counter */}
        <motion.div
          className="absolute bottom-[22%] right-[18%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <div
            className="px-6 py-4 text-center"
            style={{
              background: "rgba(192,57,43,0.08)",
              border: "1px solid rgba(192,57,43,0.25)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="text-3xl font-bold text-white tabular-nums">{count}+</div>
            <div className="text-[10px] tracking-[0.2em] text-[#888] uppercase mt-1">Campaigns Launched</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div className="container-custom relative z-10 pt-24 pb-16" style={{ opacity }}>
        <div className="max-w-[720px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-6 h-[1px] bg-[#c0392b]" />
            <span className="text-[10px] tracking-[0.3em] text-[#c0392b] uppercase font-medium">
              Influencer Marketing · Global Network
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            {HEADLINE.map((line, i) => (
              <motion.div
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1
                  className="block font-black uppercase leading-[0.9] text-white"
                  style={{ fontSize: "clamp(52px, 8vw, 110px)", letterSpacing: "-0.04em" }}
                >
                  {line === "ADS." ? (
                    <>
                      ADS
                      <span className="text-[#c0392b]">.</span>
                    </>
                  ) : (
                    line
                  )}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-10 text-[#666] text-xs tracking-[0.12em] uppercase leading-[2.2] max-w-[420px]"
          >
            We connect brands with high-impact creators to drive real results.
            From awareness to conversion — we build campaigns that perform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4 mt-12"
          >
            <button
              className="btn-primary"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start a Campaign
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="btn-outline"
              onClick={() => document.querySelector("#creators")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Creators
            </button>
          </motion.div>

          {/* Bottom stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex items-center gap-10 mt-20 pt-8 border-t border-[#111]"
          >
            {[
              { val: "150M+", label: "Total Reach" },
              { val: "3.2x", label: "Avg. ROI" },
              { val: "98%", label: "Client Retention" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold text-white tracking-tight">{s.val}</div>
                <div className="text-[9px] tracking-[0.22em] text-[#555] uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[9px] tracking-[0.3em] text-[#444] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[#c0392b] to-transparent"
        />
      </motion.div>
    </section>
  );
}
