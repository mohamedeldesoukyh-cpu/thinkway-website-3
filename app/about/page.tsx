"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/need_like_this_but_for_202605200256.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Blue Glow */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.35em] text-[#60a5fa] text-xs mb-8"
            >
              About THINKWAY
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-semibold tracking-[-0.04em] leading-[0.95]"
              style={{
                fontSize: "clamp(54px, 8vw, 110px)",
              }}
            >
              Modern influence.
              <br />
              Real impact.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-10 text-[20px] leading-[2] text-white/75 max-w-2xl"
            >
              THINKWAY is a next-generation influencer marketing
              agency helping brands connect with audiences,
              creators, and culture through impactful digital
              storytelling, creator partnerships, and
              performance-driven campaigns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 flex gap-5"
            >

              <a
                href="/#contact"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] transition-all duration-300 px-10 py-5 uppercase tracking-[0.2em] text-xs font-medium rounded-full"
              >
                Start A Campaign
              </a>

              <a
                href="#clients"
                className="border border-white/20 hover:border-white/50 transition-all duration-300 px-10 py-5 uppercase tracking-[0.2em] text-xs font-medium rounded-full backdrop-blur-sm"
              >
                Our Clients
              </a>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ABOUT STORY */}
      <section className="bg-[#0b0b0f] py-32 border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

          <div>
            <p className="uppercase tracking-[0.3em] text-[#60a5fa] text-xs mb-8">
              Our Philosophy
            </p>

            <h2
              className="font-semibold leading-[1.05] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(38px, 5vw, 70px)",
              }}
            >
              Influence today
              is built on
              authenticity,
              relevance,
              and culture.
            </h2>
          </div>

          <div className="space-y-8 text-white/70 text-[18px] leading-[2]">

            <p>
              Modern audiences no longer respond to traditional
              advertising the same way. Brands need authentic
              voices, trusted creators, and storytelling that
              feels native to digital culture.
            </p>

            <p>
              THINKWAY bridges the gap between brands and
              creators through strategy, creativity,
              influencer partnerships, and scalable campaign
              execution.
            </p>

            <p>
              From creator campaigns to Social Out-Of-Home
              activations, we help brands build awareness,
              engagement, measurable ROI, and cultural
              relevance across modern platforms.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-black py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">

            <p className="uppercase tracking-[0.3em] text-[#60a5fa] text-xs mb-6">
              Services
            </p>

            <h2
              className="font-semibold tracking-[-0.04em]"
              style={{
                fontSize: "clamp(42px, 5vw, 72px)",
              }}
            >
              What we do.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Influencer Marketing",
              "SOOH Advertising",
              "Creator Strategy",
              "ROI Campaigns",
            ].map((service) => (
              <div
                key={service}
                className="bg-white/[0.03] border border-white/10 rounded-[30px] p-10 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="text-[#60a5fa] text-xs tracking-[0.3em] mb-8">
                  THINKWAY
                </div>

                <h3 className="text-[28px] font-medium leading-[1.2]">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CLIENTS */}
      <section
        id="clients"
        className="bg-[#0b0b0f] py-32 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">

            <p className="uppercase tracking-[0.3em] text-[#60a5fa] text-xs mb-6">
              Selected Clients
            </p>

            <h2
              className="font-semibold tracking-[-0.04em]"
              style={{
                fontSize: "clamp(42px, 5vw, 72px)",
              }}
            >
              Brands we’ve
              worked with.
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">

            {[
              "/AM Group.png",
              "/Arab Bank of Egypt.jpg",
              "/Grand water Technologies.jpg",
              "/Praxo Pharm 2.jpg",
              "/logo.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-white rounded-[24px] p-8 flex items-center justify-center h-[180px]"
              >
                <img
                  src={logo}
                  alt="client"
                  className="max-h-[90px] object-contain"
                />
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-black py-40 relative overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-[#60a5fa] text-xs mb-8">
            Let’s Build Something Impactful
          </p>

          <h2
            className="font-semibold tracking-[-0.04em] leading-[1]"
            style={{
              fontSize: "clamp(52px, 6vw, 90px)",
            }}
          >
            Ready to scale
            your brand?
          </h2>

          <a
            href="/#contact"
            className="inline-block mt-14 bg-[#2563eb] hover:bg-[#1d4ed8] transition-all duration-300 px-12 py-5 uppercase tracking-[0.2em] text-xs font-medium rounded-full"
          >
            Start A Campaign
          </a>

        </div>

      </section>

      <Footer />

    </main>
  );
}
