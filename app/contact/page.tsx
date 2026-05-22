"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] overflow-hidden">

      {/* TOP SECTION */}
      <section className="container-custom pt-40 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-[1px] bg-[#1535C2]" />

              <span className="text-[10px] tracking-[0.3em] uppercase text-[#1535C2]">
                Contact Us
              </span>
            </div>

            <h1
              className="font-black uppercase leading-[0.9] text-[#0a0a0a] mb-8"
              style={{
                fontSize: "clamp(48px,7vw,100px)",
                letterSpacing: "-0.05em",
              }}
            >
              LET’S BUILD
              <br />

              <span className="text-[#1535C2]">
                SOMETHING GREAT.
              </span>
            </h1>

            <p className="text-[12px] uppercase tracking-[0.08em] text-[#777] leading-[2] max-w-md mb-14">
              Whether you're planning a campaign, partnership,
              or collaboration — we’d love to hear from you.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-8">

              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-[#999] mb-2">
                  Email
                </div>

                <a
                  href="mailto:hello@thinkwaymedia.com"
                  className="text-[15px] text-[#111] hover:text-[#1535C2] transition-colors"
                >
                  hello@thinkwaymedia.com
                </a>
              </div>

              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-[#999] mb-2">
                  Phone
                </div>

                <a
                  href="tel:+201204570000"
                  className="text-[15px] text-[#111] hover:text-[#1535C2] transition-colors"
                >
                  +20 120 457 0000
                </a>
              </div>

              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-[#999] mb-2">
                  Address
                </div>

                <p className="text-[14px] leading-[1.9] text-[#555]">
                  Sheikh Zayed — Giza
                  <br />
                  Egypt
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-[#e8e8e8] bg-white p-8 md:p-10">

            <div className="space-y-8">

              <div>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-[#999] mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b border-[#ddd] pb-4 outline-none focus:border-[#1535C2] transition-colors bg-transparent"
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-[#999] mb-3">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border-b border-[#ddd] pb-4 outline-none focus:border-[#1535C2] transition-colors bg-transparent"
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-[#999] mb-3">
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border-b border-[#ddd] pb-4 outline-none focus:border-[#1535C2] transition-colors bg-transparent"
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-[#999] mb-3">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full border border-[#e5e5e5] p-4 outline-none resize-none focus:border-[#1535C2] transition-colors bg-transparent"
                />
              </div>

              <button
                className="w-full bg-[#1535C2] text-white py-5 uppercase tracking-[0.25em] text-[10px] hover:bg-[#0f2ba3] transition-all"
              >
                Send Message
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* BOTTOM */}
      <section className="border-t border-[#ececec] py-16">

        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#1535C2] mb-3">
              Thinkway
            </div>

            <h2 className="text-[34px] md:text-[52px] font-black uppercase leading-none">
              Influence Meets
              <br />
              Performance.
            </h2>
          </div>

          <Link
            href="/"
            className="border border-[#111] px-8 py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-[#111] hover:text-white transition-all"
          >
            Back To Home
          </Link>

        </div>

      </section>

    </main>
  );
}
