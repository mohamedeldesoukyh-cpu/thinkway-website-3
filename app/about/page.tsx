"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#1535C2] uppercase tracking-[0.3em] text-xs mb-6"
          >
            About THINKWAY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(48px,8vw,110px)] font-black leading-[0.9] tracking-[-0.04em] text-black max-w-5xl"
          >
            BUILT FOR
            <br />
            MODERN
            <span className="text-[#1535C2]"> INFLUENCE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-2xl text-[#666] text-lg leading-[1.9]"
          >
            THINKWAY is a next-generation influencer marketing agency helping
            brands connect with creators, audiences, and culture through
            impactful digital campaigns and social storytelling.
          </motion.p>
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
      <section className="px-6 py-28 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#1535C2] uppercase tracking-[0.3em] text-xs mb-12">
            What We Believe
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Influence",
                text: "Real creator partnerships generate stronger engagement and trust than traditional advertising.",
              },
              {
                title: "Performance Driven",
                text: "Every campaign is built around measurable impact, audience relevance, and ROI.",
              },
              {
                title: "Culture First",
                text: "We create campaigns designed to feel native to modern social platforms and digital behavior.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-10 rounded-2xl border border-[#ececec]"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {item.title}
                </h3>

                <p className="text-[#666] leading-[1.9]">
                  {item.text}
                </p>
              </div>
            ))}
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
