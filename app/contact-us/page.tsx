"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const fontAr = { fontFamily: isAr ? "var(--font-cairo)" : "inherit" };

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navigation />

      <section
        className="relative pb-32 overflow-hidden"
        style={{ paddingTop: "80px" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 20% 30%, rgba(21,53,194,0.05) 0%, transparent 35%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container-custom relative z-10" style={{ paddingTop: "120px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-start">

            {/* LEFT */}
            <div>
              <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-6 flex items-center gap-4" style={fontAr}>
                <div className="w-6 h-[1px] bg-[#1535C2]" />
                {t("contact.eyebrow")}
              </div>

              <h1
                className="font-black uppercase text-[#0a0a0a] leading-[0.88] mb-8"
                style={{
                  fontSize: isAr ? "clamp(36px,5vw,72px)" : "clamp(56px,7vw,110px)",
                  letterSpacing: isAr ? "-0.03em" : "-0.06em",
                  lineHeight: isAr ? "1.2" : "0.88",
                  ...fontAr,
                }}
              >
                {t("contact.title1")}
                <br />
                <span className="text-[#1535C2]">{t("contact.title2")}</span>
              </h1>

              <p className="text-[15px] text-[#666] leading-[2] max-w-md mb-14" style={fontAr}>
                {t("contact.desc")}
              </p>

              <div className="space-y-8">
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2" style={fontAr}>{t("contact.emailLabel")}</div>
                  <a href="mailto:hello@thinkwaymedia.com" className="text-[#111] text-[15px] leading-[1.9] hover:text-[#1535C2] transition-colors">hello@thinkwaymedia.com</a>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2" style={fontAr}>{t("contact.phoneLabel")}</div>
                  <a href="tel:+201204570000" className="text-[#111] text-[15px] leading-[1.9] hover:text-[#1535C2] transition-colors">+20 120 457 0000</a>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2" style={fontAr}>{t("contact.addressLabel")}</div>
                  <div className="text-[#111] text-[15px] leading-[1.9]" style={fontAr}>
                    {t("contact.address")}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - FORM */}
            <div>
              <div className="bg-white/80 backdrop-blur-xl border border-[#ececec] rounded-[28px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">
                <form className="space-y-10">
                  <input
                    type="text"
                    placeholder={t("contact.namePlaceholder")}
                    style={{ color: "#111", ...fontAr }}
                    className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                  />
                  <input
                    type="email"
                    placeholder={t("contact.emailPlaceholder")}
                    style={{ color: "#111", ...fontAr }}
                    className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                  />
                  <input
                    type="text"
                    placeholder={t("contact.companyPlaceholder")}
                    style={{ color: "#111", ...fontAr }}
                    className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                  />
                  <input
                    type="text"
                    placeholder={t("contact.phonePlaceholder")}
                    style={{ color: "#111", ...fontAr }}
                    className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                  />
                  <textarea
                    placeholder={t("contact.messagePlaceholder")}
                    style={{ color: "#111", ...fontAr }}
                    className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 min-h-[140px] text-[14px] outline-none resize-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                  />
                  <button type="submit" className="btn-primary" style={fontAr}>
                    {t("contact.submit")}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}