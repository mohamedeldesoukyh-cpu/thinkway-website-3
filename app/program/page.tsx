"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProgramPage() {
  return (
    <main className="bg-[#020617] min-h-screen overflow-x-hidden text-white">

      <Navigation />

      <section className="relative pt-[180px] pb-32 overflow-hidden">

        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(21,53,194,0.22) 0%, transparent 35%)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container-custom relative z-10">

          <div className="grid lg:grid-cols-2 gap-24 items-start">

            {/* LEFT */}
            <div>

              <div className="text-[10px] tracking-[0.3em] text-[#4f6fff] uppercase mb-6 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-[#4f6fff]" />
                Creator Program
              </div>

              <h1
                className="font-black uppercase leading-[0.88] mb-8"
                style={{
                  fontSize: "clamp(60px,8vw,120px)",
                  letterSpacing: "-0.06em",
                }}
              >
                APPLY TO
                <br />
                THE
                <span className="text-[#2f54ff]"> PROGRAM.</span>
              </h1>

              <p className="text-[15px] text-[#a1a1aa] leading-[2] max-w-md mb-14">
                Join Thinkway’s creator network and collaborate with premium
                brands across influencer marketing, SOOH campaigns, UGC,
                and performance-driven activations.
              </p>

              <div className="space-y-8">

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#71717a] mb-2">
                    What You Get
                  </div>

                  <div className="text-[15px] leading-[1.9] text-white">
                    • Brand partnerships
                    <br />
                    • Paid campaigns
                    <br />
                    • Long-term collaborations
                    <br />
                    • Regional opportunities
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-10">

                <form className="space-y-10">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 text-[14px] outline-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 text-[14px] outline-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <input
                    type="text"
                    placeholder="Instagram / TikTok Username"
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 text-[14px] outline-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <input
                    type="text"
                    placeholder="Followers Count"
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 text-[14px] outline-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <textarea
                    placeholder="Why do you want to join?"
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 min-h-[140px] text-[14px] outline-none resize-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Submit Application
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
