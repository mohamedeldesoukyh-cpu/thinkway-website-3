"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProgramPage() {
  return (
    <main className="bg-[#020617] min-h-screen overflow-x-hidden text-white">

      <Navigation />

      <section className="relative pt-[180px] pb-32 overflow-hidden">

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

        <div className="container-custom relative z-10">

          <div className="grid lg:grid-cols-2 gap-24 items-start">

            {/* LEFT */}
            <div>

              <div className="text-[10px] tracking-[0.3em] text-[#4f6fff] uppercase mb-6 flex items-center gap-4">
                <
