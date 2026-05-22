"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const whatWeDo = [
  {
    title: "Influencer Marketing",
    desc: "We connect brands with the right voices to deliver authentic storytelling and measurable ROI.",
  },
  {
    title: "Social Out-of-Home (SOOH)",
    desc: "We transform traditional outdoor media into dynamic, social-driven experiences that extend beyond the street into digital conversations.",
  },
  {
    title: "Campaign Strategy & Execution",
    desc: "From concept to delivery, we manage end-to-end campaigns tailored to your business objectives.",
  },
];

const philosophy = [
  "Performance over vanity metrics",
  "Authenticity over noise",
  "Partnership over transactions",
];

export default function AboutUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Subtle blue accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 100% 50%, rgba(21,53,194,0.03) 0%, transparent 70%)" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
            <div className="w-6 h-[1px] bg-[#1535C2]" />
            Who We Are
          </div>
          <h2
            className="font-black uppercase text-[#0a0f1e] leading-[0.9] mb-8"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.03em" }}
          >
            ABOUT<br /><span className="text-[#1535C2]">THINKWAY</span>
          </h2>
          <div className="max-w-2xl">
            <p className="text-[11px] text-[#666] tracking-[0.06em] leading-[2.2] mb-4">
              At Thinkway, we don't just run campaigns — we create impact.
            </p>
            <p className="text-[11px] text-[#888] tracking-[0.06em] leading-[2.2] mb-4">
              We are a modern marketing agency specializing in Social Out-of-Home (SOOH) and Influencer
              Marketing, built to connect brands with audiences in smarter, more engaging ways. Our
              approach combines strategic thinking, data-driven insights, and creative execution to
              deliver campaigns that don't just look good — but perform.
            </p>
            <p className="text-[11px] text-[#888] tracking-[0.06em] leading-[2.2]">
              In today's fast-moving digital world, visibility alone is not enough. Brands need
              relevance, authenticity, and measurable results. We bridge the gap between digital
              influence and real-world presence, helping brands amplify their message across
              platforms — from social media feeds to high-impact outdoor experiences.
            </p>
          </div>
        </motion.div>

        {/* Two-column: What We Do + Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16">
          {/* What We Do */}
          <div className="lg:col-span-3">
            <div className="p-10 pb-6">
              <div className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-8 font-medium">What We Do</div>
              <div className="space-y-0">
                {whatWeDo.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                    className="flex gap-6 py-7 border-b border-[#f0f0f0] group"
                  >
                    <span className="text-[10px] font-mono text-[#1535C2] tracking-widest shrink-0 mt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0a0f1e] mb-2 group-hover:text-[#1535C2] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2.1]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy + Why */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-8 font-medium">Our Philosophy</div>
              <p className="text-[10px] text-[#888] tracking-[0.06em] leading-[2.1] mb-6">We believe in:</p>
              <ul className="space-y-4 mb-12">
                {philosophy.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
                    className="flex items-start gap-3 text-[10px] text-[#555] tracking-[0.08em] leading-[1.8]"
                  >
                    <div className="w-[4px] h-[4px] rounded-full bg-[#1535C2] shrink-0 mt-[6px]" />
                    {p}
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-[#f0f0f0] pt-8">
                <div className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-4 font-medium">Why Thinkway</div>
                <p className="text-[10px] text-[#888] tracking-[0.06em] leading-[2.1] mb-2">
                  Because marketing today needs more than just reach — it needs direction.
                </p>
                <p className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2.1]">
                  At Thinkway, we think forward, act smart, and deliver results that move brands ahead.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
