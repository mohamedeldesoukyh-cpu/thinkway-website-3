"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const fontAr = { fontFamily: isAr ? "var(--font-cairo)" : "inherit" };

  return (
    <main className="min-h-screen bg-[#f8f8f8] overflow-hidden">
      <Navigation />

      {/* TOP SECTION */}
      <section className="container-custom pt-16 pb-24" dir={isAr ? "rtl" : "ltr"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-[1px] bg-[#1535C2]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#1535C2]" style={fontAr}>
                {t("contact.eyebrow")}
              </span>
            </div>

            <h1
              className="font-black uppercase text-[#0a0a0a] mb-8"
              style={{
                fontSize: isAr ? "clamp(16px,2vw,28px)" : "clamp(56px,7vw,110px)",
letterSpacing: isAr ? "0em" : "-0.06em",
lineHeight: isAr ? "3" : "0.88",
                ...fontAr,
              }}
            >
              {t("contact.title1")}
              <br />
              <span className="text-[#1535C2]">{t("contact.title2")}</span>
            </h1>

            <p className="text-[12px] uppercase tracking-[0.08em] text-[#777] leading-[2] max-w-md mb-14" style={fontAr}>
              {t("contact.desc")}
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-8">
              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-[#999] mb-2" style={fontAr}>
                  {t("contact.emailLabel")}
                </div>
                <a href="mailto:hello@thinkwaymedia.com" className="text-[15px] text-[#111] hover:text-[#1535C2] transition-colors">
                  hello@thinkwaymedia.com
                </a>
              </div>

              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-[#999] mb-2" style={fontAr}>
                  {t("contact.phoneLabel")}
                </div>
                <a href="tel:+201204570000" className="text-[15px] text-[#111] hover:text-[#1535C2] transition-colors">
                  +20 120 457 0000
                </a>
              </div>

              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-[#999] mb-2" style={fontAr}>
                  {t("contact.addressLabel")}
                </div>
                <p className="text-[14px] leading-[1.9] text-[#555]" style={fontAr}>
                  {t("contact.address")}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="border border-[#e8e8e8] bg-white p-8 md:p-10">
            <div className="space-y-8">

              <div>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-[#999] mb-3" style={fontAr}>
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full border-b border-[#ddd] pb-4 outline-none focus:border-[#1535C2] transition-colors bg-transparent"
                  style={fontAr}
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-[#999] mb-3" style={fontAr}>
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full border-b border-[#ddd] pb-4 outline-none focus:border-[#1535C2] transition-colors bg-transparent"
                  style={fontAr}
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-[#999] mb-3" style={fontAr}>
                  {t("contact.companyLabel")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.companyPlaceholder")}
                  className="w-full border-b border-[#ddd] pb-4 outline-none focus:border-[#1535C2] transition-colors bg-transparent"
                  style={fontAr}
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-[#999] mb-3" style={fontAr}>
                  {t("contact.messageLabel")}
                </label>
                <textarea
                  rows={5}
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full border border-[#e5e5e5] p-4 outline-none resize-none focus:border-[#1535C2] transition-colors bg-transparent"
                  style={fontAr}
                />
              </div>

              <button className="w-full bg-[#1535C2] text-white py-5 uppercase tracking-[0.25em] text-[10px] hover:bg-[#0f2ba3] transition-all" style={fontAr}>
                {t("contact.submit")}
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM */}
      <section className="border-t border-[#ececec] py-16" dir={isAr ? "rtl" : "ltr"}>
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#1535C2] mb-3">
              Thinkway
            </div>
            <h2 className="font-black uppercase leading-none" style={{ fontSize: "clamp(28px,4vw,52px)", ...fontAr }}>
              {t("contact.bottom1")}
              <br />
              {t("contact.bottom2")}
            </h2>
          </div>
          <Link
            href="/"
            className="border border-[#111] px-8 py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-[#111] hover:text-white transition-all"
            style={fontAr}
          >
            {t("contact.backHome")}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}