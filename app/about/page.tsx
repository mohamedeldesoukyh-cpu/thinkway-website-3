"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f7f5] min-h-screen relative">

      {/* GLOBAL VIDEO BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-[0.10]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/media/About-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/55" />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">

        <Navigation />

        <section style={{ paddingTop: "80px" }}>

          <div className="w-full max-w-[1440px] mx-auto px-10 md:px-20 lg:px-28" style={{ paddingTop: "120px", paddingBottom: "120px" }}>

            {/* HEADER */}
            <div className="mb-20">

              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6 flex items-center gap-4">
                <span className="w-6 h-[1px] bg-[#1535C2] inline-block" />
                About Thinkway
              </p>

              <h1
                className="font-black uppercase leading-[0.9] text-black"
                style={{ fontSize: "clamp(56px,8vw,120px)", letterSpacing: "-0.05em" }}
              >
                ABOUT
                <br />
                <span className="text-[#1535C2]">THINKWAY</span>
              </h1>

            </div>

            {/* INTRO */}
            <div className="max-w-[900px] mb-24">

              <h2 className="text-[22px] leading-[1.4] font-black text-black mb-8 uppercase tracking-[-0.02em]">
                We Don&apos;t Just Run Campaigns —
                <br />
                We Build Lasting Impact.
              </h2>

              <div className="space-y-6 text-[14px] leading-[2] text-[#5f5f5f]">
                <p>
                  Thinkway is a modern marketing agency redefining how brands show up in the world.
                  Specializing in Social Out-Of-Home (SOOH) and Influencer Marketing,
                  we sit at the intersection of culture, technology, and creativity —
                  helping brands move beyond traditional advertising and into the spaces
                  where real attention lives.
                </p>
                <p>
                  We were founded on a simple but powerful belief:
                  that the most effective marketing doesn&apos;t interrupt people —
                  it resonates with them.
                </p>
              </div>

            </div>

            {/* TWO COLUMN SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-28">

              {/* WHAT WE DO */}
              <div>

                <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6 flex items-center gap-4">
                  <span className="w-6 h-[1px] bg-[#1535C2] inline-block" />
                  What We Do
                </p>

                <div className="space-y-12">

                  <div>
                    <h3 className="text-[16px] font-black uppercase mb-4 tracking-[-0.02em]">
                      Social Out-Of-Home (SOOH)
                    </h3>
                    <p className="text-[13px] leading-[2] text-[#666]">
                      Social Out-Of-Home is the evolution of outdoor advertising —
                      where physical presence meets digital amplification.
                      We design campaigns that spark conversations online,
                      generate organic reach,
                      and turn real-world moments into shareable content.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-black uppercase mb-4 tracking-[-0.02em]">
                      Influencer Marketing
                    </h3>
                    <p className="text-[13px] leading-[2] text-[#666]">
                      Influencer Marketing, done right,
                      is one of the most powerful trust-building tools available to brands today.
                      We identify voices that genuinely align with your brand&apos;s values
                      and craft partnerships that feel authentic to the audience
                      and meaningful to the creator.
                    </p>
                  </div>

                </div>

              </div>

              {/* HOW WE THINK */}
              <div>

                <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6 flex items-center gap-4">
                  <span className="w-6 h-[1px] bg-[#1535C2] inline-block" />
                  How We Think
                </p>

                <div className="space-y-8">

                  <p className="text-[13px] leading-[2] text-[#666]">
                    Every campaign we build starts with a question:
                    what does this audience actually care about?
                    From there, we layer in data intelligence,
                    cultural context, and creative strategy
                    to develop work that speaks to people — not at them.
                  </p>

                  <div className="space-y-8 pt-2">

                    <div>
                      <span className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">01</span>
                      <h3 className="text-[15px] font-black uppercase mt-2 mb-2 tracking-[-0.02em]">
                        Strategic Thinking
                      </h3>
                      <p className="text-[13px] leading-[2] text-[#666]">
                        We study your market, competitors, and audience
                        before a single creative asset is produced.
                        Strategy guides every decision we make.
                      </p>
                    </div>

                    <div>
                      <span className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">02</span>
                      <h3 className="text-[15px] font-black uppercase mt-2 mb-2 tracking-[-0.02em]">
                        Data-Driven Insights
                      </h3>
                      <p className="text-[13px] leading-[2] text-[#666]">
                        Real-time analytics, audience behavior data,
                        and performance metrics continuously optimize campaigns in motion.
                      </p>
                    </div>

                    <div>
                      <span className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">03</span>
                      <h3 className="text-[15px] font-black uppercase mt-2 mb-2 tracking-[-0.02em]">
                        Creative Execution
                      </h3>
                      <p className="text-[13px] leading-[2] text-[#666]">
                        Our creative team translates strategy into compelling,
                        visually powerful campaigns built for modern platforms.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* WHY THINKWAY */}
            <div className="max-w-[900px] border-t border-black/10 pt-16">

              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6 flex items-center gap-4">
                <span className="w-6 h-[1px] bg-[#1535C2] inline-block" />
                Why Thinkway
              </p>

              <div className="space-y-6 text-[14px] leading-[2] text-[#5f5f5f]">

                <p>
                  The marketing landscape is noisier than ever.
                  Brands face the dual challenge of cutting through the clutter
                  while maintaining authenticity.
                  We exist to solve exactly that.
                </p>

                <p>
                  We are a team of strategists, creatives, analysts, and cultural enthusiasts
                  who bring both rigor and imagination to every brief.
                  We work as true partners to our clients —
                  embedded in your goals, invested in your growth,
                  and accountable to real outcomes.
                </p>

                <p className="text-black font-semibold">
                  At Thinkway, we measure our success by yours.
                </p>

              </div>

            </div>

          </div>

        </section>

        <Footer />

      </div>

    </main>
  );
}
