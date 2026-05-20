"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="relative bg-[#f5f5f3] text-[#0a0a0a] overflow-hidden">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0">

        {/* VIDEO */}
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

      {/* CONTENT */}
      <div className="relative z-10">

        <Navigation />

        {/* HERO */}
        <section className="pt-44 pb-28 border-b border-black/5">

          <div className="max-w-7xl mx-auto px-6">

            <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[11px] mb-8">
              About Thinkway
            </p>

            <div className="max-w-4xl">

              <h1 className="text-[72px] md:text-[110px] font-black leading-[0.88] tracking-[-0.06em] uppercase">

                ABOUT
                <br />

                <span className="text-[#1535C2]">
                  THINKWAY
                </span>

              </h1>

              <div className="mt-10 max-w-3xl">

                <p className="text-[17px] leading-[2] text-[#5c5c5c]">

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

            </div>

          </div>

        </section>

        {/* CONTENT SECTION */}
        <section className="py-28">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">

            {/* LEFT */}
            <div className="lg:col-span-7">

              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[11px] mb-8">
                What We Do
              </p>

              <div className="space-y-10">

                {/* ITEM */}
                <div className="border-b border-black/6 pb-8">

                  <div className="flex items-start gap-6">

                    <span className="text-[#1535C2] text-[12px] font-medium mt-1">
                      01
                    </span>

                    <div>

                      <h3 className="text-[28px] font-black uppercase tracking-[-0.03em]">
                        Influencer Marketing
                      </h3>

                      <p className="mt-4 text-[#666] leading-[1.9] text-[15px]">
                        We connect brands with the right creators
                        to deliver authentic storytelling and
                        measurable ROI.
                      </p>

                    </div>

                  </div>

                </div>

                {/* ITEM */}
                <div className="border-b border-black/6 pb-8">

                  <div className="flex items-start gap-6">

                    <span className="text-[#1535C2] text-[12px] font-medium mt-1">
                      02
                    </span>

                    <div>

                      <h3 className="text-[28px] font-black uppercase tracking-[-0.03em]">
                        Social Out-Of-Home
                      </h3>

                      <p className="mt-4 text-[#666] leading-[1.9] text-[15px]">
                        We transform traditional outdoor media
                        into dynamic social-driven experiences
                        that extend beyond the street into digital conversations.
                      </p>

                    </div>

                  </div>

                </div>

                {/* ITEM */}
                <div className="border-b border-black/6 pb-8">

                  <div className="flex items-start gap-6">

                    <span className="text-[#1535C2] text-[12px] font-medium mt-1">
                      03
                    </span>

                    <div>

                      <h3 className="text-[28px] font-black uppercase tracking-[-0.03em]">
                        Campaign Strategy & Execution
                      </h3>

                      <p className="mt-4 text-[#666] leading-[1.9] text-[15px]">
                        From concept to delivery, we manage
                        end-to-end campaigns tailored to your business objectives.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">

              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[11px] mb-8">
                Our Philosophy
              </p>

              <div className="space-y-8">

                <div className="border border-black/5 bg-white/40 backdrop-blur-sm p-8">

                  <h3 className="text-[30px] font-black leading-[1] tracking-[-0.04em]">
                    Performance
                    <br />
                    Driven
                  </h3>

                  <p className="mt-5 text-[#666] leading-[1.9] text-[15px]">
                    Every campaign is built around measurable impact,
                    audience relevance, and ROI.
                  </p>

                </div>

                <div className="border border-black/5 bg-white/40 backdrop-blur-sm p-8">

                  <h3 className="text-[30px] font-black leading-[1] tracking-[-0.04em]">
                    Authentic
                    <br />
                    Influence
                  </h3>

                  <p className="mt-5 text-[#666] leading-[1.9] text-[15px]">
                    Real creator partnerships generate stronger engagement
                    and trust than traditional advertising.
                  </p>

                </div>

                <div className="border border-black/5 bg-white/40 backdrop-blur-sm p-8">

                  <h3 className="text-[30px] font-black leading-[1] tracking-[-0.04em]">
                    Culture
                    <br />
                    First
                  </h3>

                  <p className="mt-5 text-[#666] leading-[1.9] text-[15px]">
                    We create campaigns designed to feel native
                    to modern social platforms and digital behavior.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CLIENTS */}
        <section className="py-28 border-t border-black/5">

          <div className="max-w-7xl mx-auto px-6">

            <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[11px] mb-14 text-center">
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
                  className="bg-white/45 backdrop-blur-sm border border-black/5 h-[180px] flex items-center justify-center p-10"
                >

                  <img
                    src={logo}
                    alt="client"
                    className="max-h-[80px] object-contain"
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
