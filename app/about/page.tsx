"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f5f3] text-[#0a0a0a] relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        >
          <source
            src="/media/About-hero.mp4"
            type="video/mp4"
          />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background:
              "rgba(245,245,243,0.72)",
          }}
        />

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
      <section className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.35em] text-[#1535C2] text-xs mb-10">
            About Thinkway
          </p>

          <h1
            className="font-black uppercase leading-[0.9] tracking-[-0.06em]"
            style={{
              fontSize: "clamp(60px, 10vw, 180px)",
            }}
          >
            MODERN
            <br />

            <span className="text-[#1535C2]">
              INFLUENCE.
            </span>

          </h1>

          <p className="mt-14 max-w-3xl mx-auto text-[#5f5f5f] leading-[2] uppercase tracking-[0.08em] text-[13px]">

            THINKWAY is a next-generation influencer marketing
            agency helping brands connect with creators,
            audiences, and culture through impactful digital
            storytelling, creator partnerships,
            performance campaigns, and Social Out-Of-Home experiences.

          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="relative z-10 py-24 border-t border-black/5">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

            {[
              "Influencer Marketing",
              "SOOH Advertising",
              "Creator Strategy",
              "ROI Campaigns",
            ].map((service) => (
              <div key={service}>

                <div className="w-10 h-[1px] bg-[#1535C2] mx-auto mb-6" />

                <h3 className="text-[28px] font-black leading-[1.1] tracking-[-0.03em]">
                  {service}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="relative z-10 py-32">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#1535C2] text-xs mb-10">
            Our Philosophy
          </p>

          <h2
            className="font-black leading-[0.95] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(44px, 6vw, 100px)",
            }}
          >
            REAL
            CONNECTIONS
            CREATE REAL
            RESULTS.
          </h2>

          <p className="mt-14 text-[#5f5f5f] leading-[2] text-[18px]">

            Modern audiences no longer respond to traditional
            advertising the same way. Brands need authentic
            voices, trusted creators, and storytelling
            designed for digital culture.

          </p>

        </div>

      </section>

      {/* CLIENTS */}
      <section className="relative z-10 py-32 border-t border-black/5">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#1535C2] text-xs mb-10">
            Selected Clients
          </p>

          <h2
            className="font-black tracking-[-0.05em]"
            style={{
              fontSize: "clamp(40px, 5vw, 90px)",
            }}
          >
            BRANDS WE’VE
            WORKED WITH.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 items-center">

            {[
              "/media/AM Group.png",
              "/media/Arab Bank of Egypt.jpg",
              "/media/Grand water Technologies.jpg",
              "/media/Praxo Pharm 2.jpg",
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-white/40 backdrop-blur-sm border border-black/5 p-10 h-[180px] flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="client"
                  className="max-h-[80px] object-contain"
                />
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative z-10 py-40 text-center border-t border-black/5">

        <div className="max-w-4xl mx-auto px-6">

          <p className="uppercase tracking-[0.35em] text-[#1535C2] text-xs mb-10">
            Let’s Build Something Impactful
          </p>

          <h2
            className="font-black leading-[0.92] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(54px, 8vw, 140px)",
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
