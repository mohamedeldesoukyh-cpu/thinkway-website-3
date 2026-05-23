"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ThinkwayLogo from "@/components/ThinkwayLogo";
import { useLang } from "@/components/LanguageProvider";

export default function Footer() {
  const { t, lang } = useLang();

  const footerLinks: Record<string, { label: string; anchor?: string }[]> = {
    [t("footer.agency")]: [
      { label: lang === "ar" ? "من نحن" : "About Us", anchor: "/about" },
      { label: lang === "ar" ? "نهجنا" : "Our Approach", anchor: "/about#why-thinkway" },
      { label: lang === "ar" ? "وظائف" : "Careers", anchor: "/careers" },
    ],
    [t("footer.services")]: [
      { label: lang === "ar" ? "حملات المؤثرين" : "Influencer Campaigns", anchor: "#services" },
      { label: lang === "ar" ? "إنتاج المحتوى" : "Content Creation", anchor: "#services" },
      { label: "SOOH", anchor: "#sooh" },
      { label: lang === "ar" ? "استراتيجية العلامة" : "Brand Strategy", anchor: "#services" },
    ],
    [t("footer.network")]: [
      { label: lang === "ar" ? "استعرض المبدعين" : "Browse Creators", anchor: "#creators" },
      { label: lang === "ar" ? "برنامج المبدعين" : "Creator Program", anchor: "#program" },
      { label: lang === "ar" ? "انضم كمبدع" : "Apply as Creator", anchor: "#program" },
      { label: lang === "ar" ? "العلامات الشريكة" : "Partner Brands", anchor: "#contact" },
    ],
    [t("footer.connect")]: [
      { label: "hello@thinkwaymedia.com" },
      { label: "+201204570000" },
      { label: lang === "ar" ? "الشيخ زايد – الجيزة" : "Sheikh Zayed – Giza" },
      { label: lang === "ar" ? "مصر" : "Egypt" },
    ],
  };

  return (
    <footer className="bg-[#f8f8f8] border-t border-[#ebebeb] relative overflow-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Image src="/media/footer-texture.jpg" alt="" fill className="object-cover object-center opacity-[0.04] pointer-events-none" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />

      <div className="container-custom py-20 relative z-10 text-center">

        <div className="flex flex-col items-center mb-16">
          <div className="mb-6">
            <ThinkwayLogo variant="dark" />
          </div>
          <p className="text-[10px] text-[#bbb] tracking-[0.1em] uppercase leading-[2.4] max-w-xs mb-8" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>
            {t("footer.tagline")}
          </p>

          <div className="flex gap-4 justify-center">
            <a href="https://www.instagram.com/thinkway_media/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-all duration-300">
              <Image src="/media/Instagram.svg.png" alt="Instagram" width={28} height={28} className="object-contain" />
            </a>
            <a href="https://www.linkedin.com/company/thinkwaymedia/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-all duration-300">
              <Image src="/media/new-LinkedIn-icon-blue-png-large-size.png" alt="LinkedIn" width={28} height={28} className="object-contain" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col items-center">
              <div className="text-[9px] tracking-[0.28em] uppercase text-[#1535C2] mb-6 font-medium" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>{group}</div>
              <ul className="space-y-4">
                {links.map((item) => (
                  <li key={item.label} className="text-center">
                    {item.anchor ? (
                      <a href={item.anchor} className="text-[10px] tracking-[0.1em] text-[#bbb] uppercase hover:text-[#0a0a0a] transition-colors duration-300 cursor-none" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>{item.label}</a>
                    ) : (
                      <span className="text-[10px] tracking-[0.1em] text-[#bbb] uppercase cursor-none">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="hr-line mx-12" />

      <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="text-[9px] tracking-[0.18em] text-[#ccc] uppercase" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>
          {t("footer.copyright")}
        </div>
        <div className="flex items-center gap-8">
          {[
            lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
            lang === "ar" ? "شروط الخدمة" : "Terms of Service",
            lang === "ar" ? "إعدادات الكوكيز" : "Cookie Settings",
          ].map((l) => (
            <span key={l} className="text-[9px] tracking-[0.15em] text-[#ccc] uppercase hover:text-[#888] transition-colors cursor-none" style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : "inherit" }}>{l}</span>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-t border-[#efefef] relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="container-custom">
          <div className="font-black uppercase text-[#efefef] leading-none select-none pointer-events-none" style={{ fontSize: "clamp(60px, 14vw, 200px)", letterSpacing: "-0.06em", lineHeight: 0.85 }}>
            THINKWAY
          </div>
        </motion.div>
      </div>
    </footer>
  );
}