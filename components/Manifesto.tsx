"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Manifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="section-padding bg-[#080808] relative overflow-hidden">
      {/* Section background image (manifesto.jpg — prompt #3) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
        <Image
          src="/media/manifesto.jpg"
          alt="Creators First"
          fill
          className="object-cover object-center opacity-[0.12]"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #080808 0%, transparent 60%)" }} />
      </div>
      {/* Accent orb fallback */}
      <div
        className="absolute top-1/2 left-[60%] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,57,43,0.06) 0%, transparent 70%)" }}
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left: large text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[10px] tracking-[0.3em] text-[#c0392b] uppercase mb-8 flex items-center gap-4">
              <div className="w-6 h-[1px] bg-[#c0392b]" />
              Our Philosophy
            </div>

            <h2
              className="font-black uppercase leading-[0.88] text-white"
              style={{ fontSize: "clamp(42px, 6vw, 80px)", letterSpacing: "-0.04em" }}
            >
              CREATORS
              <br />
              FIRST.
              <br />
              <em className="text-[#c0392b] not-italic font-light">RESULTS</em>
              <br />
              ALWAYS.
            </h2>

            <div className="mt-12 flex items-start gap-4">
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#c0392b] to-transparent shrink-0 mt-1" />
              <p className="text-[11px] tracking-[0.1em] uppercase leading-[2.4] text-[#555] max-w-sm">
                We don&apos;t just run campaigns — we build influence.
                Our network of creators, data-driven strategy, and creative execution
                deliver measurable impact for brands across the region.
              </p>
            </div>

            <motion.button
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="btn-outline mt-10"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Approach
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right: feature list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-0"
          >
            {[
              { num: "01", title: "Creator Matching", desc: "We pair your brand with creators whose audience, values, and aesthetic align perfectly with your goals." },
              { num: "02", title: "Campaign Architecture", desc: "Data-informed strategy covering platform selection, content format, posting cadence, and amplification." },
              { num: "03", title: "Real-Time Reporting", desc: "Full-funnel dashboards tracking impressions, engagement, clicks, and conversions — live, always." },
              { num: "04", title: "Brand Safety First", desc: "Every creator is vetted for authenticity, audience quality, and brand-safe content history." },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.7 }}
                className="flex gap-6 py-7 border-b border-[#111] group"
              >
                <span className="text-[10px] text-[#c0392b] font-mono tracking-widest pt-1 shrink-0">{item.num}</span>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-2 group-hover:text-[#c0392b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-[#444] tracking-[0.08em] leading-[2]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
