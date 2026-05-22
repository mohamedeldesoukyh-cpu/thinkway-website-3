"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">

      <Navigation />

      <section className="relative pt-48 pb-32 overflow-hidden">

        {/* Background Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(21,53,194,0.05) 0%, transparent 35%)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container-custom relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

            {/* LEFT */}
            <div>

              {/* Eyebrow */}
              <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-6 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-[#1535C2]" />
                Contact Us
              </div>

              {/* Title */}
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

              {/* Paragraph */}
              <p className="text-[15px] text-[#666] leading-[2] max-w-md mb-14">
                Whether you're planning a campaign, partnership, or collaboration —
                we'd love to hear from you.
              </p>

              {/* Contact Info */}
              <div className="space-y-8">

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">
                    Email
                  </div>

                  <div className="text-[#111] text-[15px] leading-[1.9]">
                    hello@thinkwaymedia.com
                  </div>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">
                    Phone
                  </div>

                  <div className="text-[#111] text-[15px] leading-[1.9]">
                    +201204570000
                  </div>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">
                    Location
                  </div>

                  <div className="text-[#111] text-[15px] leading-[1.9]">
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
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 text-[14px] outline-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                />

                <textarea
                  placeholder="Tell us about your project..."
                  className="w-full border-0 border-b border-[#d9d9d9] bg-transparent py-5 min-h-[140px] text-[14px] outline-none resize-none focus:border-[#1535C2] transition-colors placeholder:text-[#999]"
                />

                <button
                  type="submit"
                  className="btn-primary"
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
