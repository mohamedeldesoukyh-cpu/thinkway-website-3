"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#0a0a0a] overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 md:px-16 lg:px-24 pt-40 pb-24 border-b border-[#ececec]">

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#1535C2]" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#1535C2]">
                Contact Thinkway
              </span>
            </div>

            <h1
              className="font-black uppercase leading-[0.9] mb-10"
              style={{
                fontSize: "clamp(52px, 8vw, 120px)",
                letterSpacing: "-0.06em",
              }}
            >
              LET’S BUILD
              <br />
              <span className="text-[#1535C2]">
                SOMETHING GREAT.
              </span>
            </h1>

            <p className="text-[13px] leading-[2] tracking-[0.08em] uppercase text-[#666] max-w-xl mb-16">
              Whether you are planning an influencer campaign,
              launching a new brand, or exploring SOOH advertising,
              our team is ready to help you scale with strategy,
              creators, and measurable impact.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-10">

              <div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-[#999] mb-3">
                  Email
                </div>

                <a
                  href="mailto:hello@thinkwaymedia.com"
                  className="text-[18px] font-medium hover:text-[#1535C2] transition-colors"
                >
                  hello@thinkwaymedia.com
                </a>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-[#999] mb-3">
                  Phone
                </div>

                <a
                  href="tel:+201204570000"
                  className="text-[18px] font-medium hover:text-[#1535C2] transition-colors"
                >
                  +20 120 457 0000
                </a>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-[#999] mb-3">
                  Office
                </div>

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Unit No. 2B — Lower Ground Floor
                  <br />
                  Al Saraya Mall — 44 Central Axis
                  <br />
                  Sheikh Zayed — Giza — Egypt
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-[#e9e9e9] p-8 md:p-12">

            <div className="mb-10">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#1535C2] mb-4">
                Quick Inquiry
              </div>

              <h2 className="text-[42px] font-black uppercase leading-none">
                CONTACT
                <br />
                THINKWAY
              </h2>
            </div>

            <form className="space-y-8">

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#888] mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-b border-[#d9d9d9] bg-transparent pb-4 outline-none focus:border-[#1535C2] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#888] mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border-b border-[#d9d9d9] bg-transparent pb-4 outline-none focus:border-[#1535C2] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#888] mb-3">
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Brand or company name"
                  className="w-full border-b border-[#d9d9d9] bg-transparent pb-4 outline-none focus:border-[#1535C2] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#888] mb-3">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full border border-[#d9d9d9] p-4 bg-transparent outline-none resize-none focus:border-[#1535C2] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1535C2] text-white py-5 uppercase tracking-[0.25em] text-[11px] hover:bg-[#0f2ba3] transition-all"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-6 md:px-16 lg:px-24">

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 border-t border-[#e5e5e5] pt-16">

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#1535C2] mb-5">
              Thinkway Media
            </div>

            <h3 className="text-[36px] md:text-[54px] font-black uppercase leading-none">
              Influence Meets
              <br />
              Performance.
            </h3>
          </div>

          <Link
            href="/"
            className="border border-[#111] px-10 py-5 uppercase tracking-[0.25em] text-[11px] hover:bg-[#111] hover:text-white transition-all"
          >
            Back To Home
          </Link>

        </div>
      </section>

    </main>
  );
}
