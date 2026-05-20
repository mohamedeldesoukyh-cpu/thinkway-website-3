"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f7f5] min-h-screen overflow-hidden relative pt-[110px]">

      {/* GLOBAL VIDEO BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-[0.10]">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/media/About-hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-white/90" />

      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10 pt-[120px]">

        <Navigation />

        {/* ABOUT SECTION */}
       <section className="pt-[40px] pb-[120px]">

  <div className="max-w-[1180px] mx-auto pl-[160px] pr-[80px]">

    {/* HEADER */}
    <div className="pl-[40px] mb-20">

      <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-5">
        About Thinkway
      </p>

      <h1 className="text-[30px] leading-[0.95] font-black uppercase tracking-[-0.03em] text-black">

        ABOUT
        <br />

        <span className="text-[#1535C2]">
          THINKWAY
        </span>

      </h1>

    </div>

    {/* INTRO */}
    <div className="max-w-[900px] pl-[40px] mb-24">

      <h2 className="text-[18px] leading-[1.4] font-black text-black mb-8">

        We Don't Just Run Campaigns —
        <br />
        We Build Lasting Impact.

      </h2>

      <div className="space-y-6 text-[13px] leading-[2] text-[#5f5f5f] font-light">

        <p>
          Thinkway is a modern marketing agency redefining how brands show up in the world.
          Specializing in Social Out-Of-Home (SOOH) and Influencer Marketing,
          we sit at the intersection of culture, technology, and creativity —
          helping brands move beyond traditional advertising and into the spaces
          where real attention lives.
        </p>

        <p>
          We were founded on a simple but powerful belief:
          that the most effective marketing doesn't interrupt people —
          it resonates with them.
        </p>

      </div>

    </div>
            {/* TWO COLUMN SECTION */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 mb-28 pl-[40px]">

              {/* WHAT WE DO */}
              <div>

                <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6">
                  What We Do
                </p>

                <div className="space-y-12">

                  <div>

                    <h3 className="text-[16px] font-black uppercase mb-4">
                      Social Out-Of-Home (SOOH)
                    </h3>

                    <p className="text-[12px] leading-[2] text-[#666]">
                      Social Out-Of-Home is the evolution of outdoor advertising —
                      where physical presence meets digital amplification.
                      We design campaigns that don't just occupy a billboard or a screen;
                      they spark conversations online,
                      generate organic reach,
                      and turn real-world moments into shareable content.
                    </p>

                  </div>

                  <div>

                    <h3 className="text-[16px] font-black uppercase mb-4">
                      Influencer Marketing
                    </h3>

                    <p className="text-[12px] leading-[2] text-[#666]">
                      Influencer Marketing, done right,
                      is one of the most powerful trust-building tools
                      available to brands today.
                      We identify voices that genuinely align with your brand's values
                      and craft partnerships that feel authentic to the audience
                      and meaningful to the creator.
                    </p>

                  </div>

                </div>

              </div>

              {/* HOW WE THINK */}
              <div>

                <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6">
                  How We Think
                </p>

                <div className="space-y-8">

                  <p className="text-[12px] leading-[2] text-[#666]">
                    Every campaign we build starts with a question:
                    what does this audience actually care about?
                    From there,
                    we layer in data intelligence,
                    cultural context,
                    and creative strategy
                    to develop work that speaks to people — not at them.
                  </p>

                  <p className="text-[12px] leading-[2] text-[#666]">
                    Our process is built around three core pillars:
                  </p>

                  <div className="space-y-8 pt-2">

                    <div>

                      <span className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">
                        01
                      </span>

                      <h3 className="text-[15px] font-black uppercase mt-2 mb-2">
                        Strategic Thinking
                      </h3>

                      <p className="text-[12px] leading-[2] text-[#666]">
                        We study your market,
                        competitors,
                        and audience before a single creative asset is produced.
                        Strategy guides every decision we make.
                      </p>

                    </div>

                    <div>

                      <span className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">
                        02
                      </span>

                      <h3 className="text-[15px] font-black uppercase mt-2 mb-2">
                        Data-Driven Insights
                      </h3>

                      <p className="text-[12px] leading-[2] text-[#666]">
                        Real-time analytics,
                        audience behavior data,
                        and performance metrics continuously optimize campaigns in motion.
                      </p>

                    </div>

                    <div>

                      <span className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">
                        03
                      </span>

                      <h3 className="text-[15px] font-black uppercase mt-2 mb-2">
                        Creative Execution
                      </h3>

                      <p className="text-[12px] leading-[2] text-[#666]">
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

              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[10px] mb-6">
                Why Thinkway
              </p>

              <div className="space-y-6 text-[13px] leading-[2] text-[#5f5f5f] font-light">

                <p>
                  The marketing landscape is noisier than ever.
                  Brands face the dual challenge of cutting through the clutter
                  while maintaining authenticity.
                  We exist to solve exactly that.
                </p>

                <p>
                  We are a team of strategists,
                  creatives,
                  analysts,
                  and cultural enthusiasts
                  who bring both rigor and imagination to every brief.
                  We work as true partners to our clients —
                  embedded in your goals,
                  invested in your growth,
                  and accountable to real outcomes.
                </p>

                <p className="text-black font-medium">
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
