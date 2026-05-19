"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_VIDEO = "/media/make_looping_animation_extended_202605100112.mp4";

const platforms = [
  { name: "Instagram", color: "#E1306C", icon: "IG" },
  { name: "TikTok", color: "#ff0050", icon: "TT"},
  { name: "YouTube", color: "#FF0000", icon: "YT" },
  { name: "Snapchat", color: "#f5a623", icon: "SC" },
];

const HEADLINE = ["YOUR BRAND", "DESERVES", "MORE THAN", "ADS."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const [count, setCount] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => {
        if (c >= 500) { clearInterval(t); return 500; }
        return c + 5;
      });
    }, 18);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* ── LOOPING VIDEO BACKGROUND ── */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: videoScale }}>
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: videoReady ? 0.60 : 0 }}
        />
        <div
          className="absolute inset-0 bg-white transition-opacity duration-1000"
          style={{ opacity: videoReady ? 0 : 1, pointerEvents: "none" }}
        />
        {/* Left fade so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0.1) 100%)",
          }}
        />
        {/* Top & bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.7) 100%)",
          }}
        />
        {/* Blue glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 80% 50%, rgba(21,53,194,0.06) 0%, transparent 65%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* ── FLOATING PLATFORM CARDS ── */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-[42%] hidden lg:block z-10"
        style={{ y, opacity }}
      >
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            className="absolute"
            style={{ top: `${18 + i * 19}%`, right: `${6 + (i % 2) * 10}%` }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-3 px-2 py-2">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />
                <div>
                  <div className="text-[#0a0a0a] text-[11px] font-semibold tracking-wider">{p.name}</div>
                  <div className="text-[#888] text-[9px] tracking-widest uppercase">{p.stat}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Campaign counter */}
        <motion.div
          className="absolute bottom-[22%] right-[18%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0a0a0a] tabular-nums">{count}+</div>
            <div className="text-[9px] tracking-[0.2em] text-[#aaa] uppercase mt-1">Campaigns Launched</div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── HERO TEXT CONTENT — full width ── */}
      <motion.div className="container-custom relative z-20 pt-28 pb-16 w-full" style={{ opacity }}>
        <div className="w-full max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-6 h-[1px] bg-[#1535C2]" />
            <span className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase font-medium">
              Influencer Marketing · Global Network
            </span>
          </motion.div>

          {/* Headline — readable size */}
          <div className="overflow-hidden">
            {HEADLINE.map((line, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-black uppercase leading-[0.9] text-[#0a0a0a]"
                  style={{ fontSize: "clamp(38px, 5.5vw, 76px)", letterSpacing: "-0.03em" }}
                >
                  {line === "ADS." ? <>ADS<span className="text-[#1535C2]">.</span></> : line}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-8 text-[#888] text-[11px] tracking-[0.1em] uppercase leading-[2.2] max-w-md"
          >
            We connect brands with high-impact creators to drive real results.
            From awareness to conversion — we build campaigns that perform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <button className="btn-primary" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Start a Campaign
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="btn-outline" onClick={() => document.querySelector("#creators")?.scrollIntoView({ behavior: "smooth" })}>
              View Creators
            </button>
          </motion.div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex items-center gap-10 mt-16 pt-8 border-t border-[#ebebeb]"
          >
            {[
              { val: "150M+", label: "Total Reach" },
              { val: "3.2x", label: "Avg. ROI" },
              { val: "98%", label: "Client Retention" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-bold text-[#0a0a0a] tracking-tight">{s.val}</div>
                <div className="text-[9px] tracking-[0.22em] text-[#bbb] uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[9px] tracking-[0.3em] text-[#ccc] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[#1535C2] to-transparent"
        />
      </motion.div>
    </section>
  );
}
