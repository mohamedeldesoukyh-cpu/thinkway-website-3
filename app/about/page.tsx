"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {

  useEffect(() => {

    const video = document.getElementById(
      "bgVideo"
    ) as HTMLVideoElement;

    if (!video) return;

    video.pause();

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const maxScroll =
        document.body.scrollHeight - window.innerHeight;

      const scrollFraction = scrollTop / maxScroll;

      const duration = video.duration || 1;

      video.currentTime = duration * scrollFraction;

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <main className="bg-[#f5f5f3] text-[#0a0a0a] overflow-hidden relative">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden">

        {/* VIDEO */}
        <video
          id="bgVideo"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source
            src="/media/About-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,245,243,0.45) 0%, rgba(245,245,243,0.58) 100%)",
          }}
        />

        {/* LEFT FADE */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(245,245,243,0.72) 0%, rgba(245,245,243,0.48) 35%, rgba(245,245,243,0.12) 70%, rgba(245,245,243,0.02) 100%)",
          }}
        />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      <Navigation />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full pt-32 pb-20">

          <div className="max-w-3xl">

            {/* LABEL */}
            <div className="flex items-center gap-4 mb-10">

              <div className="w-8 h-[1px] bg-[#1535C2]" />

              <span className="text-[10px] tracking-[0.35em] uppercase text-[#1535C2] font-medium">
                About Thinkway
              </span>

            </div>

            {/* HEADING */}
            <h1
              className="font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#0a0a0a]"
              style={{
                fontSize: "clamp(54px, 8vw, 140px)",
              }}
            >
              MODERN
              <br />
              INFLUENCE.
              <br />

              <span className="text-[#1535C2]">
                REAL IMPACT.
              </span>

            </h1>

            {/* PARAGRAPH */}
            <p className="mt-12 text-[#5f5f5f] max-w-2xl leading-[2] uppercase tracking-[0.08em] text-[13px]">

              THINKWAY is a next-generation influencer marketing
              agency helping brands connect with creators,
              audiences, and culture through impactful
              storytelling, creator partnerships, performance
              marketing, and Social Out-Of-Home experiences.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-14">

              <a
                href="/#contact"
                className="bg-[#1535C2] text-white px-10 py-5 uppercase tracking-[0.25em] text-[11px]"
              >
                Start A Campaign
              </a>

              <a
                href="#clients"
                className="border border-[#d9d9d9] px-10 py-5 uppercase tracking-[0.25em] text-[11px] text-[#0a0a0a] bg-white/50 backdrop-blur-sm"
              >
                View Clients
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="relative z-10 py-32">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">

          <div>

            <p className="uppercase tracking-[0.3em] text-[#1535C2] text-xs mb-8">
              Our Philosophy
            </p>

            <h2
              className="font-black leading-[0.95] tracking-[-0.05em]"
              style={{
                fontSize: "clamp(44px, 5vw, 90px)",
              }}
            >
              Influence
              today is
              built on
              trust.
            </h2>

          </div>

          <div className="space-y-8 text-[#5f5f5f] text-[18px] leading-[2]">

            <p>
              Modern audiences no longer respond to
              traditional advertising the same way.
              Brands need authentic voices, trusted creators,
              and storytelling that feels native to
              digital culture.
            </p>

            <p>
              THINKWAY bridges the gap between brands
              and creators through strategy, creativity,
              influencer partnerships, and scalable
              campaign execution.
            </p>

            <p>
              From creator campaigns to Social Out-Of-Home
              activations, we help brands build awareness,
              engagement, measurable ROI, and
              cultural relevance.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="relative z-10 py-32 border-t border-black/5">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-24">

            <p className="uppercase tracking-[0.3em] text-[#1535C2] text-xs mb-6">
              Services
            </p>

            <h2
              className="font-black tracking-[-0.05em]"
              style={{
                fontSize: "clamp(44px, 5vw, 90px)",
              }}
            >
              What we do.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-black/10">

            {[
              "Influencer Marketing",
              "SOOH Advertising",
              "Creator Strategy",
              "ROI Campaigns",
            ].map((service) => (
              <div
                key={service}
                className="bg-[#f5f5f3] p-12 min-h-[260px] flex flex-col justify-between"
              >

                <div className="text-[#1535C2] text-[10px] tracking-[0.3em] uppercase">
                  Thinkway
                </div>

                <h3 className="text-[34px] font-bold leading-[1.1] tracking-[-0.03em]">
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
        className="relative z-10 py-32 border-t border-black/5"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-24">

            <p className="uppercase tracking-[0.3em] text-[#1535C2] text-xs mb-6">
              Selected Clients
            </p>

            <h2
              className="font-black tracking-[-0.05em]"
              style={{
                fontSize: "clamp(44px, 5vw, 90px)",
              }}
            >
              Brands we’ve
              worked with.
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-black/10">

            {[
              "/media/AM Group.png",
              "/media/Arab Bank of Egypt.jpg",
              "/media/Grand water Technologies.jpg",
              "/media/Praxo Pharm 2.jpg",
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-[#f5f5f3] h-[220px] flex items-center justify-center p-10"
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
      <section className="relative z-10 py-40 border-t border-black/5">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-[#1535C2] text-xs mb-8">
            Let’s Build Something Impactful
          </p>

          <h2
            className="font-black tracking-[-0.05em] leading-[0.95]"
            style={{
              fontSize: "clamp(54px, 7vw, 120px)",
            }}
          >
            READY TO
            <br />
            SCALE YOUR
            <br />
            BRAND?
          </h2>

          <a
            href="/#contact"
            className="inline-block mt-14 bg-[#1535C2] text-white px-12 py-5 uppercase tracking-[0.25em] text-[11px]"
          >
            Start A Campaign
          </a>

        </div>

      </section>

      <Footer />

    </main>
  );
}
