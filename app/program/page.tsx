"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProgramPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    social: "",
    followers: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/creator-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          social: form.social,
          followers: form.followers,
          message: form.message,
        }),
      });

      if (res.ok) {
        router.push("/application-submitted");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="bg-[#020617] min-h-screen overflow-x-hidden text-white">

      <Navigation />

      <div
        className="relative min-h-screen overflow-hidden"
        style={{ paddingTop: "80px" }}
      >

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

        <div
          className="container-custom relative z-10 pb-32"
          style={{ paddingTop: "120px" }}
        >

          <div className="grid lg:grid-cols-2 gap-24 items-start">

            {/* LEFT */}
            <div>

              <div className="text-[10px] tracking-[0.3em] text-[#4f6fff] uppercase mb-6 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-[#4f6fff]" />
                Creator Program
              </div>

              <h1
                className="font-black uppercase leading-[0.9] mb-8"
                style={{
                  fontSize: "clamp(42px,5vw,84px)",
                  letterSpacing: "-0.06em",
                }}
              >
                APPLY TO
                <br />
                THE
                <span className="text-[#2f54ff]"> PROGRAM.</span>
              </h1>

              <p className="text-[15px] text-[#a1a1aa] leading-[2] max-w-md mb-14">
                {"Join Thinkway's creator network and collaborate with premium brands across influencer marketing, SOOH campaigns, UGC, and performance-driven activations."}
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

                <form onSubmit={handleSubmit} className="space-y-10">

                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 text-[14px] outline-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 text-[14px] outline-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <input
                    type="text"
                    placeholder="Instagram / TikTok Username"
                    required
                    value={form.social}
                    onChange={(e) => setForm({ ...form, social: e.target.value })}
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 text-[14px] outline-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <input
                    type="text"
                    placeholder="Followers Count"
                    required
                    value={form.followers}
                    onChange={(e) => setForm({ ...form, followers: e.target.value })}
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 text-[14px] outline-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <textarea
                    placeholder="Why do you want to join?"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-0 border-b border-white/10 bg-transparent py-5 min-h-[140px] text-[14px] outline-none resize-none text-white focus:border-[#2f54ff] transition-colors placeholder:text-[#71717a]"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />

    </main>
  );
}
