"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">

      <Navigation />

      <section
        className="relative pb-32 overflow-hidden"
        style={{ paddingTop: "80px" }}
      >

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 20% 30%, rgba(21,53,194,0.05) 0%, transparent 35%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container-custom relative z-10" style={{ paddingTop: "120px" }}>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-start">

            <div>

              <div className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase mb-6 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-[#1535C2]" />
                Contact Us
              </div>

              <h1
                className="font-black uppercase text-[#0a0a0a] leading-[0.88] mb-8"
                style={{ fontSize: "clamp(56px,7vw,110px)", letterSpacing: "-0.06em" }}
              >
                {"LET'S BUILD"}
                <br />
                SOMETHING
                <span className="text-[#1535C2]"> GREAT.</span>
              </h1>

              <p className="text-[15px] text-[#666] leading-[2] max-w-md mb-14">
                {"Whether you're planning a campaign, partnership, or collaboration — we'd love to hear from you."}
              </p>

              <div className="space-y-8">

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">Email</div>
                  <a href="mailto:hello@thinkwaymedia.com" className="text-[#111] text-[15px] leading-[1.9] hover:text-[#1535C2] transition-colors">hello@thinkwaymedia.com</a>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">Phone</div>
                  <a href="tel:+201204570000" className="text-[#111] text-[15px] leading-[1.9] hover:text-[#1535C2] transition-colors">+20 120 457 0000</a>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">Address</div>
                  <div className="text-[#111] text-[15px] leading-[1.9]">
                    Sheikh Zayed — Giza
                    <br />
                    Egypt
                  </div>
                </div>

              </div>
            </div>

            <div>
              <div className="bg-white/80 backdrop-blur-xl border border-[#ececec] rounded-[28px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">
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

                  <button type="submit" className="btn-primary">
                    Send Message
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
