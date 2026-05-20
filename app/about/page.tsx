"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import CampaignBrief from "@/components/CampaignBrief";
import Footer from "@/components/Footer";

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dot.current) { dot.current.style.left = e.clientX + "px"; dot.current.style.top = e.clientY + "px"; }
      if (ring.current) { ring.current.style.left = e.clientX + "px"; ring.current.style.top = e.clientY + "px"; }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (<><div ref={dot} className="cursor" /><div ref={ring} className="cursor-follower" /></>);
}

const stats = [
  { val: "50+", label: "Brands Served" },
  { val: "500+", label: "Campaigns Delivered" },
  { val: "10M+", label: "Physical Impressions" },
  { val: "MENA", label: "Region Coverage" },
];

const services = [
  { num: "01", title: "Influencer Marketing", desc: "We connect brands with the right voices to deliver authentic storytelling and measurable ROI across all major platforms." },
  { num: "02", title: "Social Out-of-Home (SOOH)", desc: "We transform traditional outdoor media into dynamic, social-driven experiences that extend beyond the street into digital conversations." },
  { num: "03", title: "Campaign Strategy & Execution", desc: "From concept to delivery, we manage end-to-end campaigns tailored to your business objectives and audience." },
  { num: "04", title: "Content Creation", desc: "High-quality, platform-native content crafted by creators who understand your audience and know how to move them." },
];

const values = [
  { title: "Performance over vanity metrics", desc: "Every campaign is measured by real outcomes — reach, engagement, and conversion — not just impressions." },
  { title: "Authenticity over noise", desc: "We curate creators who genuinely connect with their audiences, ensuring your message lands with impact." },
  { title: "Partnership over transactions", desc: "We work as an extension of your team, invested in your long-term growth, not just the next campaign." },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`section-padding ${className}`}>{children}</section>;
}

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const servicesRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);

  const heroIn = useInView(heroRef, { once: true });
  const storyIn = useInView(storyRef, { once: true, margin: "-10%" });
  const servicesIn = useInView(servicesRef, { once: true, margin: "-10%" });
  const valuesIn = useInView(valuesRef, { once: true, margin: "-10%" });
  const statsIn = useInView(statsRef, { once: true, margin: "-10%" });

  return (
    <main className="bg-white min-h-screen">
      <Cursor />
      <Navigation />

      {/* ── HERO ── */}
      <section ref={heroRef} className="bg-[#0a0f1e] relative overflow-hidden" style={{ paddingTop: "160px", paddingBottom: "120px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(21,53,194,0.22) 0%, transparent 70%)" }} />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={heroIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="flex items-center gap-4 mb-12">
            <div className="w-6 h-[1px] bg-[#1535C2]" />
            <span className="text-[10px] tracking-[0.35em] text-[#7b9fff] uppercase">Who We Are</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              {["ABOUT", "THINKWAY"].map((word, i) => (
                <div key={word} style={{ overflow: "hidden" }}>
                  <motion.h1
                    initial={{ y: "110%", opacity: 0 }}
                    animate={heroIn ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 + i * 0.14, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-black uppercase leading-[0.88] block"
                    style={{
                      fontSize: "clamp(52px, 9vw, 120px)",
                      letterSpacing: "-0.04em",
                      color: i === 1 ? "#1535C2" : "rgba(255,255,255,0.92)",
                    }}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.9 }}>
              <p className="text-[11px] text-[rgba(255,255,255,0.55)] tracking-[0.08em] leading-[2.4] mb-8">
                At Thinkway, we don&apos;t just run campaigns — we create impact. A modern marketing agency specializing in Social Out-of-Home and Influencer Marketing, built to connect brands with audiences in smarter, more engaging ways.
              </p>
              <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] text-[rgba(255,255,255,0.25)] uppercase">
                <span>Cairo, Egypt</span>
                <div className="w-1 h-1 rounded-full bg-[#1535C2]" />
                <span>MENA & Global</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div ref={statsRef} className="bg-white border-b border-[#f0f0f0]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#f0f0f0]">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={statsIn ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="py-10 px-8 text-center"
              >
                <div className="font-black text-[#0a0f1e] leading-none mb-2" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
                  {s.val}
                </div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-[#aaa]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OUR STORY ── */}
      <Section>
        <div className="container-custom">
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={storyIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }}>
              <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-6 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-[#1535C2]" />
                Our Story
              </div>
              <h2 className="font-black uppercase text-[#0a0f1e] leading-[0.9] mb-10" style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.03em" }}>
                WHERE INFLUENCE<br /><span className="text-[#1535C2]">MEETS STRATEGY</span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={storyIn ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.9 }} className="space-y-6">
              <p className="text-[11px] text-[#555] tracking-[0.06em] leading-[2.4]">
                Thinkway was founded on a simple belief: marketing should move people, not just reach them. In today&apos;s fast-moving digital world, visibility alone is not enough. Brands need relevance, authenticity, and measurable results.
              </p>
              <p className="text-[11px] text-[#888] tracking-[0.06em] leading-[2.4]">
                We bridge the gap between digital influence and real-world presence — helping brands amplify their message across platforms, from social media feeds to high-impact outdoor experiences.
              </p>
              <p className="text-[11px] text-[#888] tracking-[0.06em] leading-[2.4]">
                Our team combines strategic thinking, data-driven insights, and creative execution to deliver campaigns that don&apos;t just look good — but perform. We think forward, act smart, and deliver results that move brands ahead.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── WHAT WE DO ── */}
      <Section className="bg-[#f8f8f8]">
        <div ref={servicesRef} className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={servicesIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-16">
            <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              What We Do
            </div>
            <h2 className="font-black uppercase text-[#0a0f1e] leading-[0.9]" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}>
              OUR SERVICES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#ebebeb]">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                animate={servicesIn ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.8 }}
                className="p-10 border-b border-r border-[#ebebeb] group hover:bg-white transition-colors duration-300"
              >
                <div className="text-[10px] font-mono text-[#1535C2] tracking-widest mb-6">{s.num}</div>
                <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#0a0f1e] mb-4 group-hover:text-[#1535C2] transition-colors">{s.title}</h3>
                <p className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2.1]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── VALUES ── */}
      <Section>
        <div ref={valuesRef} className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={valuesIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
              <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-[#1535C2]" />
                Our Philosophy
              </div>
              <h2 className="font-black uppercase text-[#0a0f1e] leading-[0.9]" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}>
                WHAT WE<br /><span className="text-[#1535C2]">BELIEVE IN</span>
              </h2>
            </motion.div>

            <div className="space-y-0">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={valuesIn ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.8 }}
                  className="flex gap-6 py-8 border-b border-[#f0f0f0] group"
                >
                  <div className="w-1 h-1 rounded-full bg-[#1535C2] shrink-0 mt-2" />
                  <div>
                    <h3 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0a0f1e] mb-3 group-hover:text-[#1535C2] transition-colors">{v.title}</h3>
                    <p className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2.1]">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CampaignBrief />
      <Footer />
    </main>
  );
}
