"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

export default function Manifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { t, lang } = useLang();

  const features = [
    { num: "01", title: t("manifesto.f1title"), desc: t("manifesto.f1desc") },
    { num: "02", title: t("manifesto.f2title"), desc: t("manifesto.f2desc") },
    { num: "03", title: t("manifesto.f3title"), desc: t("manifesto.f3desc") },
    { num: "04", title: t("manifesto.f4title"), desc: t("manifesto.f4desc") },
  ];

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>

      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
        <Image
          src="/media/manifesto.jpg"
          alt="Creators First"
          fill
          className="object-cover object-center opacity-[0.07]"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #fff 0%, transparent 50%)" }} />
      </div>

      <div
        className="absolute top-1/2 left-[60%] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(21,53,194,0.04) 0%, transparent 70%)" }}
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-8 flex items-center gap-4" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              {t("manifesto.eyebrow")}
            </div>

            <h2
              className="font-black uppercase leading-[0.88] text-[#0a0a0a]"
              style={{ fontSize: lang === "ar" ? "clamp(22px, 5vw, 50px)" : "clamp(32px, 9vw, 80px)", letterSpacing: "-0.02em", lineHeight: lang === "ar" ? "1.3" : "0.88", fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}
            >
              {t("manifesto.line1")}
              <br />{t("manifesto.line2")}
              <br /><em className="text-[#1535C2] not-italic font-black">{t("manifesto.line3")}</em>
              <br />{t("manifesto.line4")}
            </h2>

            <div className="mt-12 flex items-start gap-4">
              <div className="hidden sm:block w-[1px] h-20 bg-gradient-to-b from-[#1535C2] to-transparent shrink-0 mt-1" />
              <p className="text-[11px] tracking-[0.1em] uppercase leading-[2.4] text-[#999] max-w-sm" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>
                {t("manifesto.desc")}
              </p>
            </div>

            <motion.button
              whileHover={{ x: lang === "ar" ? -6 : 6 }}
              transition={{ duration: 0.2 }}
              className="btn-outline mt-10"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}
            >
              {t("manifesto.cta")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: lang === "ar" ? "scaleX(-1)" : "none" }}>
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
            {features.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.7 }}
                className="flex gap-6 py-7 border-b border-[#f0f0f0] group"
              >
                <span className="text-[10px] text-[#1535C2] font-mono tracking-widest pt-1 shrink-0">{item.num}</span>
                <div>
                  <h3
                    className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a0a0a] mb-2 group-hover:text-[#1535C2] transition-colors"
                    style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[10px] text-[#aaa] tracking-[0.08em] leading-[2]"
                    style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}