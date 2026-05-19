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
import Clients from "@/components/Clients";
import SOOH from "@/components/SOOH";
import CreatorProgram from "@/components/CreatorProgram";
import CampaignBrief from "@/components/CampaignBrief";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Creators />
      <Stats />
      <SOOH />
      <CreatorProgram />
      <CampaignBrief />
      <Clients />
      <Footer />
    </main>
  );
}
