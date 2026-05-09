"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function useCounter(target: number, inView: boolean, duration = 2000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setVal(Math.round(eased * target));
      if (elapsed < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return val;
}

const statsData = [
  { val: 500, suffix: "+", label: "Vetted Creators", sub: "Across 12 countries" },
  { val: 150, suffix: "M+", label: "Total Network Reach", sub: "Combined audience" },
  { val: 98, suffix: "%", label: "Client Retention Rate", sub: "Year over year" },
  { val: 3, suffix: ".2x", label: "Average Campaign ROI", sub: "Above industry avg." },
  { val: 320, suffix: "+", label: "Campaigns Executed", sub: "Since founding" },
  { val: 47, suffix: "+", label: "Brand Partners", sub: "Regional & global" },
];

function StatItem({ item, inView, index }: { item: typeof statsData[0]; inView: boolean; index: number }) {
  const count = useCounter(item.val, inView, 2200);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="py-10 px-8 border-b border-r border-[#ebebeb] relative group bg-white"
    >
      <div className="text-[10px] tracking-[0.2em] uppercase text-[#c0392b] mb-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">✦</div>
      <div className="font-black text-[#0a0a0a] leading-none tabular-nums" style={{ fontSize: "clamp(42px, 6vw, 80px)", letterSpacing: "-0.04em" }}>
        {count}<span className="text-[#c0392b]">{item.suffix}</span>
      </div>
      <div className="text-[11px] tracking-[0.15em] uppercase text-[#0a0a0a] mt-4 mb-1">{item.label}</div>
      <div className="text-[9px] tracking-[0.2em] text-[#ccc] uppercase">{item.sub}</div>
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c0392b] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="stats" ref={ref} className="bg-[#f8f8f8] overflow-hidden relative">
      <Image
        src="/media/analytics-bg.jpg"
        alt="Analytics"
        fill
        className="object-cover object-center opacity-[0.04] pointer-events-none"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
      />

      <div className="container-custom pt-24 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#c0392b] uppercase mb-5 flex items-center gap-4">
              <div className="w-6 h-[1px] bg-[#c0392b]" />
              By the Numbers
            </div>
            <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.9]" style={{ fontSize: "clamp(36px, 5vw, 70px)", letterSpacing: "-0.04em" }}>
              RESULTS THAT<br /><span className="text-[#c0392b]">SPEAK.</span>
            </h2>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-[#ebebeb] relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {statsData.map((s, i) => (
              <StatItem key={s.label} item={s} inView={inView} index={i} />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="border-t border-[#ebebeb] py-12 relative z-10 bg-white"
      >
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <blockquote className="text-[13px] text-[#bbb] tracking-[0.08em] italic max-w-xl leading-[2]">
            &ldquo;THINKWAY didn&apos;t just find us influencers — they built us a movement. Our brand awareness jumped 340% in 60 days.&rdquo;
          </blockquote>
          <div className="shrink-0 text-right">
            <div className="text-[11px] tracking-[0.15em] text-[#0a0a0a] uppercase">Ahmed Al-Khalil</div>
            <div className="text-[9px] tracking-[0.2em] text-[#bbb] uppercase mt-1">CMO, NovaBrand KSA</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
