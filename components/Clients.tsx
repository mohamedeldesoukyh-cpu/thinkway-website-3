"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "AM Group",                 src: "/media/AM Group.png" },
  { name: "Arab Bank of Egypt",       src: "/media/Arab Bank of Egypt.jpg" },
  { name: "Grand Water Technologies", src: "/media/Grand water Technologies.jpg" },
  { name: "Paraxo Pharm",             src: "/media/Paraxo Pharm.jfif" },
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
              <div className="relative w-full max-w-[180px] h-[72px] transition-all duration-500"
                style={{ filter: "grayscale(1) opacity(0.55)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.filter = "grayscale(0) opacity(1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.filter = "grayscale(1) opacity(0.55)")}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
