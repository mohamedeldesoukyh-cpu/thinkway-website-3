"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  {
    name: "AM Group",
    logo: (
      <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="8" y="38" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="30" letterSpacing="-1" fill="currentColor">AM</text>
        <text x="72" y="38" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="18" letterSpacing="4" fill="currentColor" opacity="0.6">GROUP</text>
        <line x1="8" y1="44" x2="152" y2="44" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Arab Bank Egypt",
    logo: (
      <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="8" y="14" width="6" height="32" fill="currentColor" opacity="0.8" />
        <text x="22" y="30" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="700" fontSize="13" letterSpacing="2" fill="currentColor">ARAB BANK</text>
        <text x="22" y="45" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="11" letterSpacing="3" fill="currentColor" opacity="0.55">EGYPT</text>
      </svg>
    ),
  },
  {
    name: "Praxo Pharm",
    logo: (
      <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="22" cy="30" r="12" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        <path d="M18 30h8M22 26v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        <text x="42" y="27" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.5" fill="currentColor">PRAXO</text>
        <text x="42" y="43" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="11" letterSpacing="4" fill="currentColor" opacity="0.55">PHARM</text>
      </svg>
    ),
  },
  {
    name: "Grand Water Technologies",
    logo: (
      <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M10 36 Q15 24 20 36 Q25 48 30 36" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.75" />
        <path d="M30 36 Q35 24 40 36" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.45" />
        <text x="48" y="27" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1" fill="currentColor">GRAND WATER</text>
        <text x="48" y="43" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="10" letterSpacing="3" fill="currentColor" opacity="0.55">TECHNOLOGIES</text>
      </svg>
    ),
  },
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-20 bg-white border-y border-[#ebebeb] overflow-hidden">
      <div className="container-custom">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-6 h-[1px] bg-[#1535C2]" />
          <span className="text-[10px] tracking-[0.3em] text-[#1535C2] uppercase">Trusted By</span>
          <div className="flex-1 h-px bg-[#ebebeb]" />
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#ebebeb]">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center justify-center py-10 px-8 bg-white transition-colors duration-400 hover:bg-[#f6f8ff]"
            >
              <div
                className="w-full max-w-[160px] h-[60px] transition-all duration-400"
                style={{ color: "#c8c8c8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1535C2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#c8c8c8")}
              >
                {client.logo}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
