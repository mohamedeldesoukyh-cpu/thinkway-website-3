"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />

     {/* HERO */}
<section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24">

  {/* Background glow */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at 70% 40%, rgba(21,53,194,0.08) 0%, transparent 45%)",
    }}
  />

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
      backgroundSize: "90px 90px",
    }}
  />

  <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-[#1535C2] uppercase tracking-[0.35em] text-xs mb-8">
        About THINKWAY
      </p>
    </motion.div>

    <div className="max-w-6xl">

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="font-black uppercase leading-[0.88] tracking-[-0.06em] text-black"
        style={{
          fontSize: "clamp(70px, 11vw, 180px)",
        }}
      >
        BUILT FOR
        <br />

        MODERN
        <br />

        <span className="text-[#1535C2]">
          INFLUENCE.
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.9 }}
        className="mt-14 grid lg:grid-cols-2 gap-20 items-start"
      >
        <div>
          <p className="text-[#111] text-2xl leading-[1.6] font-medium">
            THINKWAY is a next-generation influencer marketing agency
            helping brands connect with creators, audiences, and culture
            through impactful digital campaigns and social storytelling.
          </p>
        </div>

        <div>
          <p className="text-[#777] leading-[2] text-lg">
            We combine influencer strategy, Social Out-Of-Home (SOOH),
            creator partnerships, and performance-driven campaign execution
            to help brands move beyond traditional advertising and create
            measurable cultural impact.
          </p>
        </div>
      </motion.div>

    </div>

  </div>

</section>
      {/* STORY */}
      <section className="px-6 py-28 border-t border-[#efefef]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#1535C2] uppercase tracking-[0.3em] text-xs mb-6">
              Our Story
            </p>

            <h2 className="text-5xl font-black leading-tight tracking-[-0.03em]">
              Influence is no longer just visibility.
            </h2>
          </div>

          <div className="space-y-8 text-[#666] leading-[2] text-lg">
            <p>
              Modern audiences no longer respond to traditional advertising the
              same way. Brands need authentic voices, trusted creators, and
              meaningful storytelling that feels native to digital culture.
            </p>

            <p>
              THINKWAY was created to bridge the gap between brands and creators
              through strategy, creativity, media intelligence, and scalable
              influencer partnerships.
            </p>

            <p>
              From creator campaigns to Social Out Of Home activations, we help
              brands build awareness, engagement, and measurable business
              results.
            </p>
          </div>
        </div>
      </section>

    {/* VALUES */}
<section className="py-32 bg-[#f8f8f8] border-t border-[#e5e5e5]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="mb-20">
      <p className="text-[#1535C2] uppercase tracking-[0.35em] text-xs mb-6">
        What We Believe
      </p>

      <h2 className="text-black font-black uppercase leading-[0.95] tracking-[-0.05em]"
        style={{
          fontSize: "clamp(48px, 6vw, 110px)",
        }}
      >
        Influence Is
        <br />
        More Than Reach.
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-12 border border-[#e8e8e8] rounded-[24px]">
        <div className="text-[#1535C2] text-sm tracking-[0.3em] uppercase mb-8">
          01
        </div>

        <h3 className="text-3xl font-bold text-black mb-6">
          Authentic Influence
        </h3>

        <p className="text-[#666] leading-[2] text-lg">
          Real creator partnerships build stronger engagement,
          audience trust, and long-term brand perception.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-12 border border-[#e8e8e8] rounded-[24px]">
        <div className="text-[#1535C2] text-sm tracking-[0.3em] uppercase mb-8">
          02
        </div>

        <h3 className="text-3xl font-bold text-black mb-6">
          Performance Driven
        </h3>

        <p className="text-[#666] leading-[2] text-lg">
          Every campaign is designed around measurable business
          outcomes, audience relevance, and ROI.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-12 border border-[#e8e8e8] rounded-[24px]">
        <div className="text-[#1535C2] text-sm tracking-[0.3em] uppercase mb-8">
          03
        </div>

        <h3 className="text-3xl font-bold text-black mb-6">
          Culture First
        </h3>

        <p className="text-[#666] leading-[2] text-lg">
          We create campaigns designed to feel native to
          digital culture, social behavior, and modern audiences.
        </p>
      </div>

    </div>

  </div>

</section>
      {/* CTA */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#1535C2] uppercase tracking-[0.3em] text-xs mb-6">
            Let’s Build Something Impactful
          </p>

          <h2 className="text-6xl font-black leading-[0.95] tracking-[-0.04em] mb-10">
            READY TO SCALE
            <br />
            YOUR BRAND?
          </h2>

          <a
            href="/#contact"
            className="inline-flex items-center gap-3 bg-[#1535C2] text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm font-semibold hover:opacity-90 transition"
          >
            Start a Campaign
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
