"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="relative bg-[#f5f5f3] text-[#0a0a0a] overflow-hidden">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        >
          <source
            src="/media/About-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-[#f5f5f3]/88" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">

        <Navigation />

        {/* HERO */}
        <section className="pt-64 pb-24 min-h-[72vh] flex items-center justify-center border-b border-black/5">

          <div className="max-w-3xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6">
              About Thinkway
            </p>

            <h1 className="text-[24px] md:text-[38px] font-black leading-[0.95] tracking-[-0.05em] uppercase">

              ABOUT
              <br />

              <span className="text-[#1535C2]">
                THINKWAY
              </span>

            </h1>

            <p className="mt-8 text-[12px] md:text-[13px] leading-[2.1] text-[#666] max-w-2xl mx-auto">

              At Thinkway, we don't just run campaigns — we create impact.

              <br />
              <br />

              We are a modern marketing agency specializing in
              Social Out-Of-Home (SOOH) and Influencer Marketing,
              built to connect brands with audiences in smarter,
              more engaging ways.

              <br />
              <br />

              Our approach combines strategic thinking,
              data-driven insights, and creative execution
              to deliver campaigns that don't just look good —
              but perform.

            </p>

          </div>

        </section>

        {/* MAIN CONTENT */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-12 gap-20">

            {/* LEFT */}
            <div className="lg:col-span-7">

              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-8">
                What We Do
              </p>

              <div className="space-y-8">

                {/* SERVICE */}
                <div className="border-b border-black/6 pb-7">

                  <div className="flex items-start gap-5">

                    <span className="text-[#1535C2] text-[11px] mt-1">
                      01
                    </span>

                    <div>

                      <h3 className="text-[16px] md:text-[18px] font-black uppercase tracking-[-0.03em]">
                        Influencer Marketing
                      </h3>

                      <p className="mt-3 text-[#666] leading-[1.9] text-[13px]">
                        We connect brands with the right creators
                        to deliver authentic storytelling and measurable ROI.
                      </p>

                    </div>

                  </div>

                </div>

                {/* SERVICE */}
                <div className="border-b border-black/6 pb-7">

                  <div className="flex items-start gap-5">

                    <span className="text-[#1535C2] text-[11px] mt-1">
                      02
                    </span>

                    <div>

                      <h3 className="text-[16px] md:text-[18px] font-black uppercase tracking-[-0.03em]">
                        Social Out-Of-Home
                      </h3>

                      <p className="mt-3 text-[#666] leading-[1.9] text-[13px]">
                        We transform traditional outdoor media
                        into dynamic social-driven experiences
                        that extend beyond the street into digital conversations.
                      </p>

                    </div>

                  </div>

                </div>

                {/* SERVICE */}
                <div className="border-b border-black/6 pb-7">

                  <div className="flex items-start gap-5">

                    <span className="text-[#1535C2] text-[11px] mt-1">
                      03
                    </span>

                    <div>

                      <h3 className="text-[16px] md:text-[18px] font-black uppercase tracking-[-0.03em]">
                        Campaign Strategy & Execution
                      </h3>

                      <p className="mt-3 text-[#666] leading-[1.9] text-[13px]">
                        From concept to delivery, we manage end-to-end
                        campaigns tailored to your business objectives.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">

              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-8">
                Our Philosophy
              </p>

              <div className="space-y-8">

                <div className="pb-8 border-b border-black/6">

                  <h3 className="text-[17px] md:text-[19px] font-black leading-[1.05] tracking-[-0.04em]">
                    Performance
                    <br />
                    Driven
                  </h3>

                  <p className="mt-4 text-[#666] leading-[1.9] text-[12px]">
                    Every campaign is built around measurable impact,
                    audience relevance, and ROI.
                  </p>

                </div>

                <div className="pb-8 border-b border-black/6">

                  <h3 className="text-[17px] md:text-[19px] font-black leading-[1.05] tracking-[-0.04em]">
                    Authentic
                    <br />
                    Influence
                  </h3>

                  <p className="mt-4 text-[#666] leading-[1.9] text-[12px]">
                    Real creator partnerships generate stronger
                    engagement and trust than traditional advertising.
                  </p>

                </div>

                <div className="pb-8 border-b border-black/6">

                  <h3 className="text-[17px] md:text-[19px] font-black leading-[1.05] tracking-[-0.04em]">
                    Culture
                    <br />
                    First
                  </h3>

                  <p className="mt-4 text-[#666] leading-[1.9] text-[12px]">
                    We create campaigns designed to feel native
                    to modern social platforms and digital behavior.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CLIENTS */}
        <section className="py-20 border-t border-black/5">

          <div className="max-w-6xl mx-auto px-6">

            <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-14 text-center">
              Selected Clients
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              {[
                "/media/AM Group.png",
                "/media/Arab Bank of Egypt.jpg",
                "/media/Grand water Technologies.jpg",
                "/media/Praxo Pharm 2.jpg",
              ].map((logo, i) => (

                <div
                  key={i}
                  className="h-[120px] flex items-center justify-center border border-black/6 bg-white/20 backdrop-blur-sm"
                >

                  <img
                    src={logo}
                    alt="client"
                    className="max-h-[55px] object-contain opacity-90"
                  />

                </div>

              ))}

            </div>

          </div>

        </section>

        <Footer />

      </div>

    </main>
  );
}
