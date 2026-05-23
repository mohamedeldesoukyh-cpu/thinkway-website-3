"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThinkwayLogo from "@/components/ThinkwayLogo";
import { useLang } from "@/components/LanguageProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Creators", href: "/#creators" },
  { label: "Results", href: "/#stats" },
  { label: "SOOH", href: "/#sooh" },
  { label: "Program", href: "/#program" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      window.location.href = href;
      return;
    }
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 left-0 right-0 z-[100] transition-all duration-500 shadow-sm"
        style={{
          background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        <div
          className="w-full max-w-[1440px] mx-auto flex items-center justify-between h-[82px]"
          style={{ padding: "0 48px" }}
        >

          {/* LOGO */}
          <a href="/" className="block">
            <ThinkwayLogo variant="dark" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 justify-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[11px] tracking-[0.24em] uppercase text-[#8d8d8d] hover:text-[#1535C2] transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
<div className="hidden md:flex items-center gap-3">
  <button
    onClick={toggleLang}
    className="text-[11px] tracking-[0.2em] uppercase text-[#8d8d8d] hover:text-[#1535C2] transition-colors duration-300 border border-[#e0e0e0] px-4 py-2 hover:border-[#1535C2]"
  >
    {lang === "en" ? "عربي" : "EN"}
  </button>
  <button
    onClick={() => handleNav("/#contact")}
    className="btn-primary"
  >
    {lang === "en" ? "Start A Campaign" : "ابدأ حملتك"}
  </button>
</div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px] bg-[#0a0f1e] origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1px] bg-[#0a0f1e]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
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
            <div className="absolute top-7 left-7">
              <ThinkwayLogo variant="dark" />
            </div>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => handleNav(link.href)}
                className="text-3xl font-black tracking-[-0.04em] uppercase text-[#0a0a0a]"
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
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