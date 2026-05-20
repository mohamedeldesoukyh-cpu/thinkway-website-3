"use client";

import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="bg-[#f8f8f8] border-t border-[#ebebeb] py-24"
    >
      <div className="container-custom max-w-4xl">

        <div className="mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#1535C2] mb-5">
            Contact Us
          </p>

          <h2
            className="font-black uppercase text-[#0a0a0a] leading-[0.9]"
            style={{
              fontSize: "clamp(38px, 5vw, 72px)",
              letterSpacing: "-0.04em",
            }}
          >
            LET’S BUILD
            <br />
            SOMETHING
            <span className="text-[#1535C2]"> GREAT.</span>
          </h2>

          <p className="mt-8 text-[#8d8d8d] max-w-2xl leading-[2] text-[15px]">
            Whether you're planning a campaign, partnership,
            or collaboration — we'd love to hear from you.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="border border-[#e5e5e5] bg-white px-6 py-5 text-[#0a0a0a] outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border border-[#e5e5e5] bg-white px-6 py-5 text-[#0a0a0a] outline-none"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="border border-[#e5e5e5] bg-white px-6 py-5 text-[#0a0a0a] outline-none md:col-span-2"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows={6}
            className="border border-[#e5e5e5] bg-white px-6 py-5 text-[#0a0a0a] outline-none md:col-span-2 resize-none"
          />

          <button
            type="submit"
            className="bg-[#1535C2] text-white px-10 py-5 uppercase tracking-[0.2em] text-[11px] hover:bg-[#2a4fd4] transition-all duration-300 md:col-span-2"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
