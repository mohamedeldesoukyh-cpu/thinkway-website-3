"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">

      <Navigation />

      <section className="pt-40 pb-32">
        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            {/* LEFT */}
            <div>

              <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-6 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-[#1535C2]" />
                Contact Us
              </div>

              <h1
                className="font-black uppercase text-[#0a0a0a] leading-[0.9] mb-8"
                style={{
                  fontSize: "clamp(48px,7vw,96px)",
                  letterSpacing: "-0.05em",
                }}
              >
                LET’S BUILD
                <br />
                SOMETHING
                <span className="text-[#1535C2]"> GREAT.</span>
              </h1>

              <p className="text-[15px] text-[#666] leading-[2] max-w-md mb-14">
                Whether you're planning a campaign, partnership, or collaboration —
                we'd love to hear from you.
              </p>

              <div className="space-y-8">

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">
                    Email
                  </div>

                  <div className="text-[#111]">
                    hello@thinkwaymedia.com
                  </div>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">
                    Phone
                  </div>

                  <div className="text-[#111]">
                    +201204570000
                  </div>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">
                    Location
                  </div>

                  <div className="text-[#111] leading-[1.8]">
                    Sheikh Zayed — Giza
                    <br />
                    Egypt
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div>

              <form className="space-y-10">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors"
                />

                <textarea
                  placeholder="Tell us about your project..."
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 min-h-[140px] text-[14px] outline-none resize-none focus:border-[#1535C2] transition-colors"
                />

                <button
                  type="submit"
                  className="bg-[#1535C2] text-white px-12 py-5 uppercase tracking-[0.2em] text-[11px] hover:bg-[#2a4fd4] transition-all duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}
