"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThinkwayLogo from "@/components/ThinkwayLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Creators", href: "/#creators" },
  { label: "Results", href: "/#stats" },
  { label: "SOOH", href: "/#sooh" },
  { label: "Program", href: "/#program" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);

    // Homepage sections
    if (href.startsWith("/#")) {
      window.location.href = href;
      return;
    }

    // Pages
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }

    // Same-page sections
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="sticky top-0 left-0 right-0 z-50 transition-all duration-500"
  style={{
    background: "rgba(255,255,255,0.96)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  }}
>    
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-[auto_1fr_auto] items-center h-20">
          
          {/* LOGO */}
          <a
  href="/"
  className="block pl-24"
>
            <ThinkwayLogo variant="dark" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 justify-center">
            
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[11px] tracking-[0.22em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}

          </div>

          {/* CTA */}
          <div className="hidden md:flex">

            <button
              onClick={() => handleNav("/#contact")}
              className="bg-[#1535C2] text-white px-8 py-4 uppercase tracking-[0.22em] text-[10px] hover:opacity-90 transition"
            >
              Start A Campaign
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
          >

            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 7 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-[1px] bg-[#0a0f1e] origin-center"
            />

            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className="block w-6 h-[1px] bg-[#0a0f1e]"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-[1px] bg-[#0a0f1e] origin-center"
            />

          </button>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#f5f5f3]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >

            {/* Mobile Logo */}
            <div className="absolute top-7 left-7">
              <ThinkwayLogo variant="dark" />
            </div>

            {/* Links */}
            {navLinks.map((link, i) => (

              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.4,
                }}
                onClick={() => handleNav(link.href)}
                className="text-3xl font-black tracking-[-0.04em] uppercase text-[#0a0a0a]"
              >
                {link.label}
              </motion.button>

            ))}

            {/* Mobile CTA */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: navLinks.length * 0.08,
                duration: 0.4,
              }}
              onClick={() => handleNav("/#contact")}
              className="mt-6 bg-[#1535C2] text-white px-10 py-5 uppercase tracking-[0.22em] text-[11px]"
            >
              Start A Campaign
            </motion.button>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}
