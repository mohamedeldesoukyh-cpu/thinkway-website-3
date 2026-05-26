"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

export default function Creators() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { t, lang } = useLang();

  return (
    <section id="creators" ref={ref} className="section-padding bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-2 ${lang === "ar" ? "mb-4" : "mb-16"}`}
        >
          <div>
            <div
              className={`text-[10px] tracking-[0.3em] text-[#1535C2] uppercase flex items-center gap-4 ${lang === "ar" ? "mb-1" : "mb-5"}`}
              style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}
            >
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              {t("creators.eyebrow")}
            </div>
            <h2
              className="font-black uppercase text-[#0a0a0a]"
              style={{
                fontSize: lang === "ar" ? "clamp(16px, 2vw, 26px)" : "clamp(30px, 4vw, 56px)",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit",
              }}
            >
              {t("creators.title")}<br /><span className="text-[#1535C2]">{t("creators.title2")}</span>
            </h2>
          </div>
          <p
            className="text-[10px] text-[#aaa] tracking-[0.1em] uppercase leading-[2.2] max-w-xs text-left md:text-right"
            style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}
          >
            {t("creators.desc")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-screen overflow-hidden rounded-3xl"
style={{ aspectRatio: "16 / 7", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}
        >
          <Image
            src="/media/Creators_Photo.jpeg"
            alt="Creator Network"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center text-[9px] tracking-[0.18em] text-[#ccc] uppercase mt-10"
          style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}
        >
          {t("creators.note")}
        </motion.p>
      </div>
    </section>
  );
}