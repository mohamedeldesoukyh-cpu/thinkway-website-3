"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";

const SOOH_VIDEO = "/media/Make_it_looping_animated_202605100400.mp4";

const pillarsEn = [
  { num: "01", title: "Billboard Placement", desc: "Premium digital screens and static billboards — malls, highways, city centres." },
  { num: "02", title: "Creator Activation", desc: "Influencers film authentic content at the billboard and publish across every platform." },
  { num: "03", title: "Double Amplification", desc: "Physical impressions + social reach. One campaign, two channels, maximum impact." },
  { num: "04", title: "Full Tracking", desc: "Outdoor impression data and social engagement in a single unified report." },
];

const pillarsAr = [
  { num: "01", title: "تركيب اللوحات", desc: "شاشات رقمية ولوحات ثابتة في المولات والطرق السريعة ومراكز المدن." },
  { num: "02", title: "تفعيل المبدعين", desc: "يصوّر المبدعون محتوى أصيلاً عند اللوحة وينشرونه على جميع المنصات." },
  { num: "03", title: "التضخيم المزدوج", desc: "مشاهدات فعلية + وصول اجتماعي. حملة واحدة، قناتان، تأثير أقصى." },
  { num: "04", title: "تتبع كامل", desc: "بيانات مشاهدات الإعلان الخارجي والتفاعل الاجتماعي في تقرير موحد واحد." },
];

const stepsEn = [
  { num: "01", title: "Book Your Billboard", desc: "Premium placements in your target markets." },
  { num: "02", title: "Creator Goes Live", desc: "Authentic vertical content, posted across their channels." },
  { num: "03", title: "Measure Both Worlds", desc: "Impressions, reach, engagement, conversions — unified." },
];

const stepsAr = [
  { num: "01", title: "احجز لوحتك", desc: "مواضع مميزة في أسواقك المستهدفة." },
  { num: "02", title: "المبدع يبث مباشرة", desc: "محتوى عمودي أصيل، منشور عبر قنواته." },
  { num: "03", title: "قِس العالمين معاً", desc: "المشاهدات والوصول والتفاعل والتحويلات — موحدة." },
];

const BIG_STATS = [
  { val: 10, suffix: "M+", labelKey: "sooh.stat1" },
  { val: 3, suffix: "×", labelKey: "sooh.stat2" },
  { val: 48, suffix: "h", labelKey: "sooh.stat3" },
];

function AnimCounter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, to, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; },
    });
    return ctrl.stop;
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function SOOH() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const [videoReady, setVideoReady] = useState(false);
  const { t, lang } = useLang();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const pillars = lang === "ar" ? pillarsAr : pillarsEn;
  const steps = lang === "ar" ? stepsAr : stepsEn;
  const fontStyle = { fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" };

  const headline = lang === "ar"
    ? [t("sooh.headline1"), t("sooh.headline2"), t("sooh.headline3")]
    : ["SOCIAL", "OUT OF", "HOME."];

  return (
    <section id="sooh" ref={sectionRef} className="relative overflow-hidden bg-[#0a0f1e]" style={{ minHeight: "100vh" }} dir={lang === "ar" ? "rtl" : "ltr"}>

      <video src={SOOH_VIDEO} autoPlay muted loop playsInline onCanPlay={() => setVideoReady(true)} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000" style={{ opacity: videoReady ? 1 : 0 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,15,30,0.88) 0%, rgba(10,15,30,0.72) 60%, rgba(10,15,30,0.82) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(21,53,194,0.18) 0%, transparent 70%)" }} />

      <div ref={ref} className="container-custom relative z-10 py-32">

        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="flex items-center gap-4 mb-14">
          <div className="w-6 h-[1px] bg-[#1535C2]" />
          <span className="text-[10px] tracking-[0.35em] text-[#7b9fff] uppercase" style={fontStyle}>{t("sooh.eyebrow")}</span>
        </motion.div>

        <motion.div style={{ y: textY }} className={lang === "ar" ? "mb-[160px]" : "mb-[320px]"}>
          {headline.map((word, wi) => (
            <div key={wi} style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: "110%", opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.1 + wi * 0.14, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-black uppercase leading-[1] block"
                style={{ fontSize: lang === "ar" ? "clamp(26px, 4vw, 60px)" : "clamp(52px, 9vw, 130px)", letterSpacing: "-0.04em", color: wi === 2 ? "#1535C2" : "rgba(255,255,255,0.92)", textShadow: "0 4px 60px rgba(0,0,0,0.5)", lineHeight: lang === "ar" ? "1.3" : "1", ...fontStyle }}
              >
                {word}
              </motion.h2>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 mt-20">
          <div className="space-y-8 pt-[160px]">
            {pillars.map((p, i) => (
              <motion.div key={p.num} initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group flex gap-6 py-7 border-b cursor-none" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <span className="text-[10px] font-mono tracking-widest shrink-0 mt-1 transition-colors duration-300 group-hover:text-[#1535C2]" style={{ color: "rgba(255,255,255,0.25)" }}>{p.num}</span>
                <div>
                  <h3 className="text-[13px] font-semibold tracking-[0.15em] uppercase mb-2 transition-colors duration-300 group-hover:text-white" style={{ color: "rgba(255,255,255,0.7)", ...fontStyle }}>{p.title}</h3>
                  <p className="text-[10px] tracking-[0.07em] leading-[2.1]" style={{ color: "rgba(255,255,255,0.35)", ...fontStyle }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-12 lg:pl-8">
            {BIG_STATS.map((s, i) => (
              <motion.div key={s.labelKey} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 + i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
                <div className="font-black leading-none tabular-nums"
style={{ fontSize: lang === "ar" ? "clamp(36px, 5vw, 72px)" : "clamp(52px, 7vw, 96px)", letterSpacing: "-0.04em", color: "#1535C2", textShadow: "0 0 60px rgba(21,53,194,0.4)" }}>
                  <AnimCounter to={s.val} suffix={s.suffix} />
                </div>
                <div className="text-[9px] tracking-[0.28em] uppercase mt-2" style={{ color: "rgba(255,255,255,0.35)", ...fontStyle }}>{t(s.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9, duration: 0.8 }} className="mb-20" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "48px" }}>
          <div className="text-[9px] tracking-[0.3em] uppercase mb-10" style={{ color: "rgba(255,255,255,0.25)", ...fontStyle }}>{t("sooh.howItWorks")}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((item, i) => (
              <motion.div key={item.num} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1 + i * 0.1, duration: 0.7 }} className="group">
                <div className="text-[9px] tracking-[0.28em] text-[#1535C2] uppercase mb-3" style={fontStyle}>{t("sooh.step")} {item.num}</div>
                <h3 className="text-[13px] font-bold tracking-[0.1em] uppercase mb-2 transition-colors duration-300 group-hover:text-white" style={{ color: "rgba(255,255,255,0.75)", ...fontStyle }}>{item.title}</h3>
                <p className="text-[10px] tracking-[0.06em] leading-[2]" style={{ color: "rgba(255,255,255,0.32)", ...fontStyle }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.1 }} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "40px" }}>
          <div>
            <div className="font-black tracking-[-0.02em] uppercase" style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "rgba(255,255,255,0.85)", ...fontStyle }}>{t("sooh.cta")}</div>
            <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.25)", ...fontStyle }}>{t("sooh.ctaSub")}</div>
          </div>
          <button className="btn-primary shrink-0" style={fontStyle} onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            {t("sooh.ctaBtn")}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: lang === "ar" ? "scaleX(-1)" : "none" }}>
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}