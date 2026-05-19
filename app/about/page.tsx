"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#fafafa] text-black overflow-hidden">

      <Navigation />

      {/* HERO */}
      <section className="relative pt-44 pb-28 overflow-hidden">

        {/* soft grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* subtle glow */}
        <div
          className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(21,53,194,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#1535C2] uppercase tracking-[0.3em] text-xs mb-10">
              About THINKWAY
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >

            <h1
              className="font-semibold tracking-[-0.045em] text-[#0a0a0a]"
              style={{
                fontSize: "clamp(44px, 5vw, 78px)",
                lineHeight: "1.02",
              }}
            >
              Building modern influence
              for brands that want
              real cultural impact.
            </h1>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 mt-16 max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              <p className="text-[22px] leading-[1.7] text-[#111]">
                THINKWAY is a modern influencer marketing agency
                connecting brands with creators, audiences,
                and culture through strategic storytelling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              <p className="text-[#666] text-[17px] leading-[1.9]">
                We combine influencer strategy, Social Out-Of-Home (SOOH),
                creator partnerships, and performance-driven execution
                to deliver campaigns that generate awareness,
                engagement, measurable ROI, and relevance.
              </p>
            </motion.div>

          </div>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="py-28 border-t border-[#ececec]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <div>

              <p className="text-[#1535C2] uppercase tracking-[0.3em] text-xs mb-8">
                Our Philosophy
              </p>

              <h2
                className="font-semibold tracking-[-0.045em]"
                style={{
                  fontSize: "clamp(36px, 4vw, 58px)",
                  lineHeight: "1.05",
                }}
              >
                Influence today
                is built on trust,
                relevance, and culture.
              </h2>

            </div>

            <div className="space-y-8">

              <p className="text-[#555] text-[18px] leading-[2]">
                Modern audiences no longer respond to traditional
                advertising the same way. Brands need authentic voices,
                trusted creators, and storytelling that feels native
                to digital culture.
              </p>

              <p className="text-[#555] text-[18px] leading-[2]">
                THINKWAY bridges the gap between brands and creators
                through strategy, creativity, media intelligence,
                and scalable influencer partnerships.
              </p>

              <p className="text-[#555] text-[18px] leading-[2]">
                From creator campaigns to Social Out Of Home activations,
                we help brands build awareness, engagement,
                and measurable business impact.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="py-28">

        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-16">

            <p className="text-[#1535C2] uppercase tracking-[0.3em] text-xs mb-6">
              What We Believe
            </p>

            <h2
              className="font-semibold tracking-[-0.04em]"
              style={{
                fontSize: "clamp(34px, 4vw, 52px)",
                lineHeight: "1.08",
              }}
            >
              Built for modern brands.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white border border-[#ececec] rounded-[24px] p-10">

              <div className="text-[#1535C2] text-xs tracking-[0.3em] mb-6">
                01
              </div>

              <h3 className="text-[28px] font-medium mb-5">
                Authentic Influence
              </h3>

              <p className="text-[#666] leading-[1.9]">
                Real creator partnerships build stronger engagement,
                audience trust, and long-term connection.
              </p>

            </div>

            <div className="bg-white border border-[#ececec] rounded-[24px] p-10">

              <div className="text-[#1535C2] text-xs tracking-[0.3em] mb-6">
                02
              </div>

              <h3 className="text-[28px] font-medium mb-5">
                Performance Driven
              </h3>

              <p className="text-[#666] leading-[1.9]">
                Every campaign is built around measurable impact,
                audience relevance, and business growth.
              </p>

            </div>

            <div className="bg-white border border-[#ececec] rounded-[24px] p-10">

              <div className="text-[#1535C2] text-xs tracking-[0.3em] mb-6">
                03
              </div>

              <h3 className="text-[28px] font-medium mb-5">
                Culture First
              </h3>

              <p className="text-[#666] leading-[1.9]">
                We create campaigns designed to feel native to
                modern digital behavior and social culture.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-36 border-t border-[#ececec] relative overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(21,53,194,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

          <p className="text-[#1535C2] uppercase tracking-[0.3em] text-xs mb-8">
            Let’s Build Something Meaningful
          </p>

          <h2
            className="font-semibold tracking-[-0.045em] mb-12"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: "1.05",
            }}
          >
            Ready to scale
            your brand?
          </h2>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-[#1535C2] text-white uppercase tracking-[0.2em] text-xs px-10 py-5 rounded-full hover:opacity-90 transition-opacity"
          >
            Start A Campaign
          </a>

        </div>

      </section>

      <Footer />

    </main>
  );
}
