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
          className="absolute inset-0 w-full h-full object-cover opacity-[0.10]"
        >
          <source src="/media/About-hero.mp4" type="video/mp4" />
        </video>

        {/* WHITE OVERLAY */}
        <div className="absolute inset-0 bg-[#f7f7f5]/88" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "86px 86px",
          }}
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        <Navigation />

        {/* HERO */}
        <section className="pt-56 pb-24 min-h-[72vh] flex items-center justify-center border-b border-black/5">

          <div className="max-w-3xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6">
              About Thinkway
            </p>

            <h1 className="text-[28px] md:text-[42px] font-black leading-[0.92] tracking-[-0.05em] uppercase">

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

       {/* SERVICES + PHILOSOPHY */}
<section className="py-24">

  <div className="max-w-6xl mx-auto px-6">

    {/* WHAT WE DO */}
    <div className="mb-28">

      <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-14 text-center">
        What We Do
      </p>

      <div className="space-y-20">

        {/* ITEM */}
        <div className="grid md:grid-cols-12 gap-8 items-start">

          <div className="md:col-span-2">

            <p className="text-[#1535C2] text-[11px] tracking-[0.3em]">
              01
            </p>

          </div>

          <div className="md:col-span-10">

            <h3 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none mb-5">
              Influencer Marketing
            </h3>

            <p className="text-[14px] leading-[2] text-[#666] max-w-2xl">
              We connect brands with the right creators to deliver
              authentic storytelling and measurable ROI.
            </p>

          </div>

        </div>

        {/* ITEM */}
        <div className="grid md:grid-cols-12 gap-8 items-start">

          <div className="md:col-span-2">

            <p className="text-[#1535C2] text-[11px] tracking-[0.3em]">
              02
            </p>

          </div>

          <div className="md:col-span-10">

            <h3 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none mb-5">
              Social Out-Of-Home
            </h3>

            <p className="text-[14px] leading-[2] text-[#666] max-w-2xl">
              We transform traditional outdoor media into dynamic
              social-driven experiences that extend beyond the street
              into digital conversations.
            </p>

          </div>

        </div>

        {/* ITEM */}
        <div className="grid md:grid-cols-12 gap-8 items-start">

          <div className="md:col-span-2">

            <p className="text-[#1535C2] text-[11px] tracking-[0.3em]">
              03
            </p>

          </div>

          <div className="md:col-span-10">

            <h3 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none mb-5">
              Campaign Strategy & Execution
            </h3>

            <p className="text-[14px] leading-[2] text-[#666] max-w-2xl">
              From concept to delivery, we manage end-to-end campaigns
              tailored to your business objectives.
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* PHILOSOPHY */}
    <div>

      <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-14 text-center">
        Our Philosophy
      </p>

      <div className="grid md:grid-cols-3 gap-14">

        {/* CARD */}
        <div>

          <h3 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none mb-5">

            Performance
            <br />
            Driven

          </h3>

          <p className="text-[14px] leading-[2] text-[#666]">
            Every campaign is built around measurable impact,
            audience relevance, and ROI.
          </p>

        </div>

        {/* CARD */}
        <div>

          <h3 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none mb-5">

            Authentic
            <br />
            Influence

          </h3>

          <p className="text-[14px] leading-[2] text-[#666]">
            Real creator partnerships generate stronger engagement
            and trust than traditional advertising.
          </p>

        </div>

        {/* CARD */}
        <div>

          <h3 className="text-[22px] md:text-[30px] font-black uppercase tracking-[-0.04em] leading-none mb-5">

            Culture
            <br />
            First

          </h3>

          <p className="text-[14px] leading-[2] text-[#666]">
            We create campaigns designed to feel native to modern
            social platforms and digital behavior.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      </div>

    </main>
  );
}
