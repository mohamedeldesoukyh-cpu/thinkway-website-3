"use client";

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutUs from "@/components/AboutUs";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Creators from "@/components/Creators";
import Stats from "@/components/Stats";
import SOOH from "@/components/SOOH";
import CreatorProgram from "@/components/CreatorProgram";
import CampaignBrief from "@/components/CampaignBrief";
import Footer from "@/components/Footer";

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
      rx += (e.clientX - rx) * 0.18;
      ry += (e.clientY - ry) * 0.18;
      if (ring.current) {
        ring.current.style.left = e.clientX + "px";
        ring.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor" />
      <div ref={ring} className="cursor-follower" />
    </>
  );
}

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Cursor />
      <Navigation />
      <Hero />
      <Marquee />
      <AboutUs />
      <Manifesto />
      <Services />
      <Creators />
      <Stats />
      <SOOH />
      <CreatorProgram />
      <CampaignBrief />
      <Footer />
    </main>
  );
}
