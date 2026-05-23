"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const fontAr = { fontFamily: isAr ? "var(--font-cairo)" : "inherit" };

  return (
    <main className="bg-[#f7f7f5] min-h-screen relative">

      {/* GLOBAL VIDEO BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-[0.10]">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/media/About-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/55" />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">

        <Navigation />

        <section style={{ paddingTop: "80px" }} dir={isAr ? "rtl" : "ltr"}>
          <div className="container-custom" style={{ paddingTop: "120px", paddingBottom: "120px" }}>

            {/* HEADER */}
            <div className="mb-24">
              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6 flex items-center gap-4" style={fontAr}>
                <span className="w-6 h-[1px] bg-[#1535C2] inline-block" />
                {t("about.eyebrow")}
              </p>
              <h1
  className="font-black uppercase text-black"
  style={{
    fontSize: isAr ? "clamp(80px,14vw,180px)" : "clamp(56px,8vw,120px)",
    letterSpacing: isAr ? "-0.03em" : "-0.05em",
    lineHeight: isAr ? "0.85" : "0.9",
    fontFamily: isAr ? "var(--font-cairo)" : "inherit",
  }}
>
  {t("about.title1")}
  <br />
  <span className="text-[#1535C2]">{t("about.title2")}</span>
</h1>
            </div>

            {/* INTRO */}
            <div className="max-w-[760px] mb-28">
              <h2
                className="font-black text-black mb-8 uppercase"
                style={{ fontSize: isAr ? "clamp(14px,1.6vw,20px)" : "clamp(18px,2vw,26px)", letterSpacing: "-0.02em", lineHeight: "1.3", ...fontAr }}
              >
                {t("about.intro_headline")}
              </h2>
              <div className="space-y-5 text-[14px] leading-[2] text-[#5f5f5f]">
                <p style={fontAr}>{t("about.intro1")}</p>
                <p style={fontAr}>{t("about.intro2")}</p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="hr-line mb-28" />

            {/* TWO COLUMN SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-28">

              {/* WHAT WE DO */}
              <div>
                <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-8 flex items-center gap-4" style={fontAr}>
                  <span className="w-6 h-[1px] bg-[#1535C2] inline-block" />
                  {t("about.whatWeDo")}
                </p>
                <div className="space-y-14">
                  <div>
                    <h3 className="text-[15px] font-black uppercase mb-4 tracking-[-0.02em]" style={fontAr}>
                      {t("about.s2title")}
                    </h3>
                    <p className="text-[13px] leading-[2] text-[#666]" style={fontAr}>
                      {t("about.s2full")}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-black uppercase mb-4 tracking-[-0.02em]" style={fontAr}>
                      {t("about.s1title")}
                    </h3>
                    <p className="text-[13px] leading-[2] text-[#666]" style={fontAr}>
                      {t("about.s1full")}
                    </p>
                  </div>
                </div>
              </div>

              {/* HOW WE THINK */}
              <div>
                <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-8 flex items-center gap-4" style={fontAr}>
                  <span className="w-6 h-[1px] bg-[#1535C2] inline-block" />
                  {t("about.howWeThink")}
                </p>
                <div className="space-y-8">
                  <p className="text-[13px] leading-[2] text-[#666]" style={fontAr}>
                    {t("about.howWeThinkDesc")}
                  </p>
                  <div className="space-y-10 pt-2">
                    <div>
                      <span className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">01</span>
                      <h3 className="text-[15px] font-black uppercase mt-2 mb-3 tracking-[-0.02em]" style={fontAr}>{t("about.step1title")}</h3>
                      <p className="text-[13px] leading-[2] text-[#666]" style={fontAr}>{t("about.step1desc")}</p>
                    </div>
                    <div>
                      <span className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">02</span>
                      <h3 className="text-[15px] font-black uppercase mt-2 mb-3 tracking-[-0.02em]" style={fontAr}>{t("about.step2title")}</h3>
                      <p className="text-[13px] leading-[2] text-[#666]" style={fontAr}>{t("about.step2desc")}</p>
                    </div>
                    <div>
                      <span className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">03</span>
                      <h3 className="text-[15px] font-black uppercase mt-2 mb-3 tracking-[-0.02em]" style={fontAr}>{t("about.step3title")}</h3>
                      <p className="text-[13px] leading-[2] text-[#666]" style={fontAr}>{t("about.step3desc")}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* DIVIDER */}
            <div className="hr-line mb-28" />

            {/* WHY THINKWAY */}
            <div className="max-w-[760px]">
              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-8 flex items-center gap-4" style={fontAr}>
                <span className="w-6 h-[1px] bg-[#1535C2] inline-block" />
                {t("about.whyTitle")}
              </p>
              <div className="space-y-6 text-[14px] leading-[2] text-[#5f5f5f]">
                <p style={fontAr}>{t("about.why1")}</p>
                <p style={fontAr}>{t("about.why2")}</p>
                <p className="text-black font-semibold text-[15px]" style={fontAr}>{t("about.why3")}</p>
              </div>
            </div>

          </div>
        </section>

        <Footer />

      </div>

    </main>
  );
}