"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

const categoriesEn = [
  { id: "01", title: "Fashion & Lifestyle Voices", desc: "Creators shaping trends and everyday inspiration.", image: "/media/Fashion_&_Lifestyle_Voices_Creators_202605100615.jpeg", accent: "#e94560" },
  { id: "02", title: "Tech & Digital Creators", desc: "Voices simplifying innovation and digital culture.", image: "/media/Tech_&_Digital_Creators_Creators_202605100617.jpeg", accent: "#7b9fff" },
  { id: "03", title: "Beauty & Wellness Experts", desc: "Trusted creators driving routines and product discovery.", image: "/media/Beauty_&_Wellness_Experts_Creators_202605100617.jpeg", accent: "#f8b4ff" },
  { id: "04", title: "Fitness & Performance Influencers", desc: "Content that motivates action and healthy lifestyles.", image: "/media/Fitness_&_Performance_Influencers_Creators_202605100616.jpeg", accent: "#7fff7f" },
  { id: "05", title: "Food & Travel Storytellers", desc: "Creators capturing experiences and destinations.", image: "/media/Food_&_Travel_Storytellers_Creators_202605100616.jpeg", accent: "#ffb07f" },
  { id: "06", title: "Culture & Trend Drivers", desc: "Voices leading conversations and viral moments.", image: "/media/Culture_&_Trend_Drivers_Creators_202605100615.jpeg", accent: "#ffd700" },
];

const categoriesAr = [
  { id: "01", title: "أصوات الموضة ونمط الحياة", desc: "مبدعون يصنعون الترندات والإلهام اليومي.", image: "/media/Fashion_&_Lifestyle_Voices_Creators_202605100615.jpeg", accent: "#e94560" },
  { id: "02", title: "مبدعو التقنية والرقمنة", desc: "أصوات تبسّط الابتكار والثقافة الرقمية.", image: "/media/Tech_&_Digital_Creators_Creators_202605100617.jpeg", accent: "#7b9fff" },
  { id: "03", title: "خبراء الجمال والعافية", desc: "مبدعون موثوقون يقودون اكتشاف المنتجات.", image: "/media/Beauty_&_Wellness_Experts_Creators_202605100617.jpeg", accent: "#f8b4ff" },
  { id: "04", title: "مؤثرو اللياقة والأداء", desc: "محتوى يحفز على العمل ونمط حياة صحي.", image: "/media/Fitness_&_Performance_Influencers_Creators_202605100616.jpeg", accent: "#7fff7f" },
  { id: "05", title: "رواة الطعام والسفر", desc: "مبدعون يوثّقون التجارب والوجهات.", image: "/media/Food_&_Travel_Storytellers_Creators_202605100616.jpeg", accent: "#ffb07f" },
  { id: "06", title: "قادة الثقافة والترند", desc: "أصوات تقود الحوارات واللحظات الفيروسية.", image: "/media/Culture_&_Trend_Drivers_Creators_202605100615.jpeg", accent: "#ffd700" },
];

function CreatorCard({ cat, index, inView, lang }: { cat: typeof categoriesEn[0]; index: number; inView: boolean; lang: string }) {
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.08 + index * 0.14, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-none rounded-2xl"
      style={{
        aspectRatio: "9 / 16",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        boxShadow: hovered ? `0 28px 72px rgba(0,0,0,0.22), 0 0 0 1px ${cat.accent}40` : "0 4px 20px rgba(0,0,0,0.06)",
        transition: "transform 0.28s ease, box-shadow 0.28s ease",
      }}
    >
      <motion.div className="absolute inset-0" animate={{ scale: hovered ? 1.07 : 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
        <Image src={cat.image} alt={cat.title} fill className="object-cover" style={{ opacity: imgLoaded ? 1 : 0, transition: "opacity 0.8s ease" }} onLoad={() => setImgLoaded(true)} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.80) 100%)" }} />

      <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: hovered ? 0.20 : 0 }} transition={{ duration: 0.4 }} style={{ background: `linear-gradient(180deg, transparent 40%, ${cat.accent}80 100%)` }} />

      <span className="absolute top-4 right-4 text-[10px] font-mono tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>{cat.id}</span>

      <motion.div className="absolute bottom-0 left-0 right-0 px-3 pb-4" animate={{ y: hovered ? -6 : 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
        <motion.div className="text-[8px] tracking-[0.22em] uppercase font-medium mb-1 truncate" style={{ color: cat.accent, fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }} animate={{ opacity: hovered ? 1 : 0.7 }} transition={{ duration: 0.3 }}>
          {lang === "ar" ? "الفئة" : "Category"}
        </motion.div>

        <h3 className="font-bold text-white leading-[1.25] mb-2" style={{ fontSize: "clamp(11px, 1.4vw, 14px)", letterSpacing: "-0.01em", textShadow: "0 2px 12px rgba(0,0,0,0.6)", wordBreak: "break-word", fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>
          {cat.title}
        </h3>

        <motion.p className="leading-[1.7] mb-3 overflow-hidden" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(9px, 0.85vw, 10px)", letterSpacing: "0.04em", fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }} animate={{ opacity: hovered ? 1 : 0, maxHeight: hovered ? 80 : 0 }} transition={{ duration: 0.35 }}>
          {cat.desc}
        </motion.p>

        <motion.span className="tracking-[0.18em] uppercase font-medium flex items-center gap-1" style={{ color: cat.accent, fontSize: "clamp(8px, 0.75vw, 9px)" }} animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }} transition={{ duration: 0.3 }}>
          <svg width="9" height="9" viewBox="0 0 14 14" fill="none" style={{ transform: lang === "ar" ? "scaleX(-1)" : "none" }}>
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </motion.div>

      <motion.div className="absolute bottom-0 left-0 h-[2px]" style={{ background: cat.accent }} animate={{ width: hovered ? "100%" : "0%" }} transition={{ duration: 0.4 }} />
    </motion.div>
  );
}

export default function Creators() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { t, lang } = useLang();

  const categories = lang === "ar" ? categoriesAr : categoriesEn;

  return (
    <section id="creators" ref={ref} className="section-padding bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container-custom">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className={`flex flex-col md:flex-row md:items-end justify-between gap-8 ${lang === "ar" ? "mb-6" : "mb-16"}`}>
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              {t("creators.eyebrow")}
            </div>
            <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.9]" style={{ fontSize: lang === "ar" ? "clamp(22px, 3vw, 42px)" : "clamp(30px, 4vw, 56px)", letterSpacing: "-0.03em", fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>
  {t("creators.title")}<br /><span className="text-[#1535C2]">{t("creators.title2")}</span>
</h2>
          </div>
          <p className="text-[10px] text-[#aaa] tracking-[0.1em] uppercase leading-[2.2] max-w-xs text-left md:text-right" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>
            {t("creators.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat, i) => (
            <CreatorCard key={cat.id} cat={cat} index={i} inView={inView} lang={lang} />
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9, duration: 0.8 }} className="text-center text-[9px] tracking-[0.18em] text-[#ccc] uppercase mt-10" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>
          {t("creators.note")}
        </motion.p>

      </div>
    </section>
  );
}