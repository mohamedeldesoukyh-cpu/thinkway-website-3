"use client";

import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f7f5]">

      {/* GLOBAL VIDEO BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        >
          <source src="/media/About-hero.mp4" type="video/mp4" />
        </video>

        {/* WHITE OVERLAY */}
        <div className="absolute inset-0 bg-[#f7f7f5]/90" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "88px 88px",
          }}
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        <Navigation />

        {/* HERO */}
        <section className="pt-52 pb-24">

          <div className="max-w-3xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-5">
              About Thinkway
            </p>

            <h1 className="text-[30px] md:text-[42px] font-black leading-[0.95] tracking-[-0.05em] uppercase">

              ABOUT
              <br />

              <span className="text-[#1535C2]">
                THINKWAY
              </span>

            </h1>

            <p className="mt-8 text-[13px] leading-[2.1] text-[#666] max-w-2xl mx-auto">

              At Thinkway, we don't just run campaigns —
              we create impact.

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

        {/* WHAT WE DO */}
        <section className="pb-24">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-16">
              What We Do
            </p>

            <div className="space-y-20">

              {/* ITEM */}
              <div>

                <p className="text-[#1535C2] text-[10px] tracking-[0.3em] mb-4">
                  01
                </p>

                <h2 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none">
                  Influencer Marketing
                </h2>

                <p className="mt-5 text-[14px] leading-[2] text-[#666] max-w-2xl mx-auto">
                  We connect brands with the right creators
                  to deliver authentic storytelling and measurable ROI.
                </p>

              </div>

              {/* ITEM */}
              <div>

                <p className="text-[#1535C2] text-[10px] tracking-[0.3em] mb-4">
                  02
                </p>

                <h2 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none">
                  Social Out-Of-Home
                </h2>

                <p className="mt-5 text-[14px] leading-[2] text-[#666] max-w-2xl mx-auto">
                  We transform traditional outdoor media into
                  dynamic social-driven experiences that extend
                  beyond the street into digital conversations.
                </p>

              </div>

              {/* ITEM */}
              <div>

                <p className="text-[#1535C2] text-[10px] tracking-[0.3em] mb-4">
                  03
                </p>

                <h2 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none">
                  Campaign Strategy & Execution
                </h2>

                <p className="mt-5 text-[14px] leading-[2] text-[#666] max-w-2xl mx-auto">
                  From concept to delivery, we manage end-to-end
                  campaigns tailored to your business objectives.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* PHILOSOPHY */}
        <section className="pb-32">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-16">
              Our Philosophy
            </p>

            <div className="space-y-20">

              <div>

                <h2 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none">

                  Performance
                  <br />
                  Driven

                </h2>

                <p className="mt-5 text-[14px] leading-[2] text-[#666] max-w-xl mx-auto">
                  Every campaign is built around measurable impact,
                  audience relevance, and ROI.
                </p>

              </div>

              <div>

                <h2 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none">

                  Authentic
                  <br />
                  Influence

                </h2>

                <p className="mt-5 text-[14px] leading-[2] text-[#666] max-w-xl mx-auto">
                  Real creator partnerships generate stronger
                  engagement and trust than traditional advertising.
                </p>

              </div>

              <div>

                <h2 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none">

                  Culture
                  <br />
                  First

                </h2>

                <p className="mt-5 text-[14px] leading-[2] text-[#666] max-w-xl mx-auto">
                  We create campaigns designed to feel native
                  to modern social platforms and digital behavior.
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
