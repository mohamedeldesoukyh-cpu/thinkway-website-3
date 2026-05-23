"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

const clients = [
  { name: "AM Group", src: "/media/AM Group.png" },
  { name: "Arab Bank of Egypt", src: "/media/Arab Bank of Egypt.jpg" },
  { name: "Grand Water Technologies", src: "/media/Grand water Technologies.jpg" },
  { name: "Praxo Pharm", src: "/media/Praxo Pharm 2.jpg" },
  { name: "Pharco", src: "/media/Pharco.jpg" },
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { lang } = useLang();
  const fontStyle = { fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" };

  return (
    <section ref={ref} className="bg-[#f8f8f8] overflow-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>

      <div className="hr-line mx-12" />

      <div className="container-custom py-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-5 flex items-center gap-4" style={fontStyle}>
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              {lang === "ar" ? "عملاؤنا" : "Our Clients"}
            </div>
            <h2
              className="font-black uppercase text-[#0a0f1e] leading-[0.9]"
              style={{
  fontSize:
    lang === "ar"
      ? "clamp(18px, 2.5vw, 36px)"
      : "clamp(36px, 5vw, 70px)",
  letterSpacing: "-0.04em",
  lineHeight: "1.2",
  ...fontStyle,
}}
            >
              {lang === "ar" ? "علامات تجارية" : "BRANDS WE'RE"}<br />
              <span className="text-[#1535C2]">{lang === "ar" ? "نفخر بخدمتها" : "PROUD TO SERVE"}</span>
            </h2>
          </div>
          <p className="text-[10px] text-[#aaa] tracking-[0.1em] uppercase leading-[2.4] max-w-[260px]" style={fontStyle}>
            {lang === "ar"
              ? "نتشارك مع علامات تجارية مستقبلية تؤمن بقوة التأثير الأصيل والنتائج القابلة للقياس."
              : "We partner with forward-thinking brands that believe in the power of authentic influence and measurable results."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex items-center justify-center py-12 px-10 overflow-hidden"
            >
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-[#1535C2]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
              <div className="relative w-full max-w-[200px] h-[80px]">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain transition-transform duration-400 group-hover:scale-105"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-[10px] tracking-[0.2em] text-[#ccc] uppercase mt-10"
          style={fontStyle}
        >
          {lang === "ar" ? "موثوق به في مصر ومنطقة الشرق الأوسط وشمال أفريقيا" : "Trusted across Egypt & the MENA region"}
        </motion.p>

      </div>
    </section>
  );
}