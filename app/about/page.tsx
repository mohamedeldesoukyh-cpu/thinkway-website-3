"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f7f5] min-h-screen overflow-hidden">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-[0.12]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/media/About-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/88" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        <Navigation />

        {/* ABOUT SECTION */}
        <section className="pt-[180px] pb-[140px]">

          <div className="max-w-[1050px] mx-auto px-8">

            {/* TITLE */}
            <div className="mb-20">

              <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[11px] mb-6">
                About Thinkway
              </p>

              <h1 className="text-[58px] leading-[0.92] font-black uppercase tracking-[-0.05em] text-black">
                ABOUT
                <br />
                <span className="text-[#1535C2]">
                  THINKWAY
                </span>
              </h1>

            </div>

            {/* CONTENT */}
            <div className="space-y-20">

              {/* INTRO */}
              <div className="max-w-[900px]">

                <h2 className="text-[28px] leading-[1.2] font-black text-black mb-8">
                  We Don't Just Run Campaigns — We Build Lasting Impact.
                </h2>

                <div className="space-y-8 text-[18px] leading-[2] text-[#5d5d5d] font-light">

                  <p>
                    Thinkway is a modern marketing agency redefining how brands
                    show up in the world. Specializing in Social Out-Of-Home
                    (SOOH) and Influencer Marketing, we sit at the intersection
                    of culture, technology, and creativity — helping brands move
                    beyond traditional advertising and into the spaces where
                    real attention lives.
                  </p>

                  <p>
                    We were founded on a simple but powerful belief: that the
                    most effective marketing doesn't interrupt people — it
                    resonates with them. In a world of shrinking attention spans
                    and growing skepticism toward conventional advertising, we
                    build campaigns that feel native, timely, and genuinely
                    engaging.
                  </p>

                </div>

              </div>

              {/* WHAT WE DO */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                <div>

                  <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[11px] mb-8">
                    What We Do
                  </p>

                  <div className="space-y-8">

                    <div>
                      <h3 className="text-[24px] font-black uppercase mb-5">
                        Social Out-Of-Home (SOOH)
                      </h3>

                      <p className="text-[16px] leading-[2] text-[#666]">
                        Social Out-Of-Home (SOOH) is the evolution of outdoor
                        advertising — where physical presence meets digital
                        amplification. We design campaigns that don't just
                        occupy a billboard or a screen; they spark conversations
                        online, generate organic reach, and turn real-world
                        moments into shareable content.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[24px] font-black uppercase mb-5">
                        Influencer Marketing
                      </h3>

                      <p className="text-[16px] leading-[2] text-[#666]">
                        Influencer Marketing, done right, is one of the most
                        powerful trust-building tools available to brands today.
                        We identify voices that genuinely align with your
                        brand's values and craft partnerships that feel
                        authentic to the audience and meaningful to the creator.
                      </p>
                    </div>

                  </div>

                </div>

                {/* HOW WE THINK */}
                <div>

                  <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[11px] mb-8">
                    How We Think
                  </p>

                  <div className="space-y-8">

                    <div>
                      <h3 className="text-[22px] font-black mb-4">
                        Strategic Thinking
                      </h3>

                      <p className="text-[16px] leading-[2] text-[#666]">
                        We study your market, competitors, and audience before a
                        single creative asset is produced. Strategy guides every
                        decision we make.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[22px] font-black mb-4">
                        Data-Driven Insights
                      </h3>

                      <p className="text-[16px] leading-[2] text-[#666]">
                        We use analytics, audience behavior data, and
                        performance metrics to optimize campaigns continuously in
                        motion.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[22px] font-black mb-4">
                        Creative Execution
                      </h3>

                      <p className="text-[16px] leading-[2] text-[#666]">
                        Our creative team transforms strategy into compelling,
                        visually powerful campaigns built for modern platforms
                        and environments.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* WHY THINKWAY */}
              <div className="max-w-[950px] pt-10 border-t border-black/10">

                <p className="uppercase tracking-[0.35em] text-[#1535C2] text-[11px] mb-8">
                  Why Thinkway
                </p>

                <div className="space-y-8 text-[18px] leading-[2] text-[#5d5d5d] font-light">

                  <p>
                    The marketing landscape is noisier than ever. Brands face
                    the dual challenge of cutting through the clutter while
                    maintaining authenticity. We exist to solve exactly that.
                  </p>

                  <p>
                    We are a team of strategists, creatives, analysts, and
                    cultural enthusiasts who bring both rigor and imagination to
                    every brief. We work as true partners to our clients —
                    embedded in your goals, invested in your growth, and
                    accountable to real outcomes.
                  </p>

                  <p className="text-black font-medium">
                    At Thinkway, we measure our success by yours.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        <Footer />

      </div>

    </main>
  );
}
