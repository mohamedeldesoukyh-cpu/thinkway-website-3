"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white text-black overflow-hidden">

      <Navigation />

      {/* HERO */}
      <section className="relative pt-40 pb-28 border-b border-[#ececec] overflow-hidden">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Blue Glow */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle, rgba(21,53,194,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#1535C2] uppercase tracking-[0.35em] text-xs mb-10"
          >
            About THINKWAY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-black uppercase leading-[0.9] tracking-[-0.05em] max-w-5xl"
            style={{
              fontSize: "clamp(54px, 8vw, 120px)",
            }}
          >
            Modern Influence.
            <br />
            Real Impact.
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-20 mt-20">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-2xl leading-[1.7] text-[#111] font-medium">
                THINKWAY is a next-generation influencer marketing agency
                helping brands connect with creators, audiences, and culture
                through impactful digital storytelling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <p className="text-[#666] text-lg leading-[2]">
                We combine influencer strategy, Social Out-Of-Home (SOOH),
                creator partnerships, and performance-driven execution to
                build campaigns that generate awareness, engagement,
                measurable ROI, and cultural relevance.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* STORY */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-24 items-start">

            <div>
              <p className="text-[#1535C2] uppercase tracking-[0.35em] text-xs mb-8">
                Our Philosophy
              </p>

              <h2
                className="font-black leading-[0.95] tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(48px, 6vw, 90px)",
                }}
              >
                Influence Is
                <br />
                No Longer
                <br />
                Just Visibility.
              </h2>
            </div>

            <div className="space-y-10">

              <p className="text-[#555] text-xl leading-[2]">
                Modern audiences no longer respond to traditional advertising
                the same way. Brands need authentic voices, trusted creators,
                and meaningful storytelling that feels native to digital culture.
              </p>

              <p className="text-[#555] text-xl leading-[2]">
                THINKWAY was created to bridge the gap between brands and
                creators through strategy, creativity, media intelligence,
                and scalable influencer partnerships.
              </p>

              <p className="text-[#555] text-xl leading-[2]">
                From creator campaigns to Social Out Of Home activations,
                we help brands build awareness, engagement,
                and measurable business impact.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="py-32 bg-[#f8f8f8] border-y border-[#ececec]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">

            <p className="text-[#1535C2] uppercase tracking-[0.35em] text-xs mb-8">
              What We Believe
            </p>

            <h2
              className="font-black leading-[0.95] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(42px, 5vw, 80px)",
              }}
            >
              Built For
              <br />
              Modern Brands.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-12 rounded-[28px] border border-[#e8e8e8]">
              <div className="text-[#1535C2] text-sm tracking-[0.35em] mb-8">
                01
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Authentic Influence
              </h3>

              <p className="text-[#666] leading-[2] text-lg">
                Real creator partnerships build stronger engagement,
                trust, and long-term audience connection.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[28px] border border-[#e8e8e8]">
              <div className="text-[#1535C2] text-sm tracking-[0.35em] mb-8">
                02
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Performance Driven
              </h3>

              <p className="text-[#666] leading-[2] text-lg">
                Every campaign is designed around measurable impact,
                audience relevance, and business growth.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[28px] border border-[#e8e8e8]">
              <div className="text-[#1535C2] text-sm tracking-[0.35em] mb-8">
                03
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Culture First
              </h3>

              <p className="text-[#666] leading-[2] text-lg">
                We create campaigns designed to feel native to
                modern platforms, audiences, and digital behavior.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-40 relative overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(21,53,194,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

          <p className="text-[#1535C2] uppercase tracking-[0.35em] text-xs mb-8">
            Let’s Build Something Impactful
          </p>

          <h2
            className="font-black leading-[0.95] tracking-[-0.05em] mb-12"
            style={{
              fontSize: "clamp(48px, 7vw, 100px)",
            }}
          >
            Ready To Scale
            <br />
            Your Brand?
          </h2>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-[#1535C2] text-white uppercase tracking-[0.2em] text-sm px-10 py-5 hover:opacity-90 transition-opacity"
          >
            Start A Campaign
          </a>

        </div>

      </section>

      <Footer />

    </main>
  );
}
