"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const fontAr = { fontFamily: isAr ? "var(--font-cairo)" : "inherit" };

  const whatWeDo = [
    { title: t("about.s1title"), desc: t("about.s1desc") },
    { title: t("about.s2title"), desc: t("about.s2desc") },
    { title: t("about.s3title"), desc: t("about.s3desc") },
  ];

  const philosophy = [
    t("about.p1"),
    t("about.p2"),
    t("about.p3"),
  ];

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navigation />
      <section
        id="about"
        ref={ref}
        className="pt-4 pb-32 bg-white relative overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div
          className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 100% 50%, rgba(21,53,194,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="container-custom relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div
              className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4"
              style={fontAr}
            >
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              {t("about.eyebrow")}
            </div>
            <h2
              className="font-black uppercase text-[#0a0f1e] leading-[0.9] mb-8"
              style={{
                fontSize: isAr ? "clamp(28px, 4vw, 52px)" : "clamp(32px, 4vw, 56px)",
                letterSpacing: "-0.03em",
                ...fontAr,
              }}
            >
              {t("about.title1")}
              <br />
              <span className="text-[#1535C2]">{t("about.title2")}</span>
            </h2>
            <div className="max-w-2xl">
              <p className="text-[11px] text-[#666] tracking-[0.06em] leading-[2.2] mb-4" style={fontAr}>
                {t("about.intro1")}
              </p>
              <p className="text-[11px] text-[#888] tracking-[0.06em] leading-[2.2] mb-4" style={fontAr}>
                {t("about.intro2")}
              </p>
              <p className="text-[11px] text-[#888] tracking-[0.06em] leading-[2.2]" style={fontAr}>
                {t("about.intro3")}
              </p>
            </div>
          </motion.div>

          {/* Two-column: What We Do + Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16">

            {/* What We Do */}
            <div className="lg:col-span-3">
              <div className="p-10 pb-6">
                <div
                  className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-8 font-medium"
                  style={fontAr}
                >
                  {t("about.whatWeDo")}
                </div>
                <div className="space-y-0">
                  {whatWeDo.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isAr ? 16 : -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                      className="flex gap-6 py-7 border-b border-[#f0f0f0] group"
                    >
                      <span className="text-[10px] font-mono text-[#1535C2] tracking-widest shrink-0 mt-1">
                        0{i + 1}
                      </span>
                      <div>
                        <h3
                          className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0a0f1e] mb-2 group-hover:text-[#1535C2] transition-colors"
                          style={fontAr}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2.1]"
                          style={fontAr}
                        >
                          {item.desc}
                        </p>
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
                <div
                  className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-8 font-medium"
                  style={fontAr}
                >
                  {t("about.philosophy")}
                </div>
                <p
                  className="text-[10px] text-[#888] tracking-[0.06em] leading-[2.1] mb-6"
                  style={fontAr}
                >
                  {t("about.webelieve")}
                </p>
                <ul className="space-y-4 mb-12">
                  {philosophy.map((p, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: isAr ? -12 : 12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
                      className="flex items-start gap-3 text-[10px] text-[#555] tracking-[0.08em] leading-[1.8]"
                      style={fontAr}
                    >
                      <div className="w-[4px] h-[4px] rounded-full bg-[#1535C2] shrink-0 mt-[6px]" />
                      {p}
                    </motion.li>
                  ))}
                </ul>

                <div className="border-t border-[#f0f0f0] pt-8">
                  <div
                    className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-4 font-medium"
                    style={fontAr}
                  >
                    {t("about.whyTitle")}
                  </div>
                  <p
                    className="text-[10px] text-[#888] tracking-[0.06em] leading-[2.1] mb-2"
                    style={fontAr}
                  >
                    {t("about.why1")}
                  </p>
                  <p
                    className="text-[10px] text-[#aaa] tracking-[0.06em] leading-[2.1]"
                    style={fontAr}
                  >
                    {t("about.why2")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}