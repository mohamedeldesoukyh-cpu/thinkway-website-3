"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const budgetOptions = ["$5K – $15K", "$15K – $50K", "$50K – $150K", "$150K+", "Not sure yet"];
const platformOptions = ["Instagram", "TikTok", "YouTube", "Snapchat", "X (Twitter)"];
const goalOptions = ["Brand Awareness", "Product Launch", "App Downloads", "Sales / Conversions", "Community Growth", "Event Promotion"];
const timelineOptions = ["ASAP", "1 Month", "2–3 Months", "Q3 2026", "Q4 2026", "Flexible"];

export default function CampaignBrief() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    brand: "",
    email: "",
    budget: "",
    audience: "",
    timeline: "",
  });

  const toggleArr = (arr: string[], item: string, setArr: (v: string[]) => void) => {
    setArr(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-[#080808] relative overflow-hidden">
      {/* CTA background image (cta-bg.jpg — prompt #11) */}
      <Image
        src="/media/cta-bg.jpg"
        alt="Start your campaign"
        fill
        className="object-cover object-center opacity-[0.08] pointer-events-none"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
      />
      {/* BG accent overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(192,57,43,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[10px] tracking-[0.3em] text-[#c0392b] uppercase mb-6 flex items-center gap-4">
              <div className="w-6 h-[1px] bg-[#c0392b]" />
              Let&apos;s Work Together
            </div>
            <h2
              className="font-black uppercase text-white leading-[0.88] mb-8"
              style={{ fontSize: "clamp(38px, 5.5vw, 78px)", letterSpacing: "-0.04em" }}
            >
              START YOUR
              <br />
              <span className="text-[#c0392b]">CAMPAIGN</span>
            </h2>
            <p className="text-[10px] text-[#444] tracking-[0.1em] uppercase leading-[2.4] mb-12 max-w-sm">
              Tell us about your brand and goals. Our team will review your brief and get back within 24 hours with a tailored proposal.
            </p>

            {/* Contact details */}
            <div className="space-y-6 border-t border-[#111] pt-10">
              {[
                { label: "Email", val: "hello@thinkway.agency" },
                { label: "WhatsApp", val: "+971 50 123 4567" },
                { label: "Based in", val: "Dubai, UAE · London, UK" },
              ].map((c) => (
                <div key={c.label} className="flex items-baseline gap-6">
                  <span className="text-[9px] tracking-[0.25em] text-[#333] uppercase w-20 shrink-0">{c.label}</span>
                  <span className="text-[10px] tracking-[0.08em] text-[#666]">{c.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-24 text-center border border-[#c0392b22] bg-[#c0392b08]"
                >
                  <div className="w-14 h-14 border border-[#c0392b] flex items-center justify-center mb-8">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M4 11l5 5 9-9" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold tracking-[0.1em] uppercase text-white mb-3">Brief Received</h3>
                  <p className="text-[10px] text-[#444] tracking-[0.1em] uppercase leading-[2.2] max-w-xs">
                    Thank you. Our team will review your campaign brief and respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-0 border border-[#111]"
                >
                  {/* Brand name */}
                  <div className="border-b border-[#111] p-6">
                    <label className="block text-[9px] tracking-[0.25em] text-[#444] uppercase mb-3">Brand Name *</label>
                    <input
                      type="text"
                      required
                      value={form.brand}
                      onChange={(e) => setForm({ ...form, brand: e.target.value })}
                      placeholder="Your brand or company name"
                      className="w-full bg-transparent text-[11px] text-white tracking-[0.08em] outline-none placeholder-[#222] border-b border-transparent focus:border-[#c0392b] pb-2 transition-colors"
                    />
                  </div>

                  {/* Contact email */}
                  <div className="border-b border-[#111] p-6">
                    <label className="block text-[9px] tracking-[0.25em] text-[#444] uppercase mb-3">Contact Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-transparent text-[11px] text-white tracking-[0.08em] outline-none placeholder-[#222] border-b border-transparent focus:border-[#c0392b] pb-2 transition-colors"
                    />
                  </div>

                  {/* Budget */}
                  <div className="border-b border-[#111] p-6">
                    <label className="block text-[9px] tracking-[0.25em] text-[#444] uppercase mb-4">Campaign Budget *</label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          className="tag transition-all duration-200"
                          style={{
                            borderColor: form.budget === b ? "#c0392b" : "#1a1a1a",
                            color: form.budget === b ? "#c0392b" : "#555",
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="border-b border-[#111] p-6">
                    <label className="block text-[9px] tracking-[0.25em] text-[#444] uppercase mb-4">Target Platforms</label>
                    <div className="flex flex-wrap gap-2">
                      {platformOptions.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => toggleArr(selectedPlatforms, p, setSelectedPlatforms)}
                          className="tag transition-all duration-200"
                          style={{
                            borderColor: selectedPlatforms.includes(p) ? "#c0392b" : "#1a1a1a",
                            color: selectedPlatforms.includes(p) ? "#c0392b" : "#555",
                          }}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Campaign Goals */}
                  <div className="border-b border-[#111] p-6">
                    <label className="block text-[9px] tracking-[0.25em] text-[#444] uppercase mb-4">Campaign Goals</label>
                    <div className="flex flex-wrap gap-2">
                      {goalOptions.map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => toggleArr(selectedGoals, g, setSelectedGoals)}
                          className="tag transition-all duration-200"
                          style={{
                            borderColor: selectedGoals.includes(g) ? "#c0392b" : "#1a1a1a",
                            color: selectedGoals.includes(g) ? "#c0392b" : "#555",
                          }}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target audience */}
                  <div className="border-b border-[#111] p-6">
                    <label className="block text-[9px] tracking-[0.25em] text-[#444] uppercase mb-3">Target Audience</label>
                    <input
                      type="text"
                      value={form.audience}
                      onChange={(e) => setForm({ ...form, audience: e.target.value })}
                      placeholder="e.g. 18–35 women in the GCC interested in beauty"
                      className="w-full bg-transparent text-[11px] text-white tracking-[0.08em] outline-none placeholder-[#222] border-b border-transparent focus:border-[#c0392b] pb-2 transition-colors"
                    />
                  </div>

                  {/* Timeline */}
                  <div className="border-b border-[#111] p-6">
                    <label className="block text-[9px] tracking-[0.25em] text-[#444] uppercase mb-4">Timeline</label>
                    <div className="flex flex-wrap gap-2">
                      {timelineOptions.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, timeline: t })}
                          className="tag transition-all duration-200"
                          style={{
                            borderColor: form.timeline === t ? "#c0392b" : "#1a1a1a",
                            color: form.timeline === t ? "#c0392b" : "#555",
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="p-6">
                    <button type="submit" className="btn-primary w-full justify-center">
                      Submit Brief
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
