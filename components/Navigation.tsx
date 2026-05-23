"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThinkwayLogo from "@/components/ThinkwayLogo";
import { useLang } from "@/components/LanguageProvider";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.creators"), href: "/#creators" },
    { label: t("nav.results"), href: "/#stats" },
    { label: t("nav.sooh"), href: "/#sooh" },
    { label: t("nav.program"), href: "/#program" },
    { label: t("nav.contactUs"), href: "/contact-us" },
  ];

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

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 left-0 right-0 z-[100] transition-all duration-500 shadow-sm"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.98)"
            : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.04)",
        }}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div
          className="w-full max-w-[1440px] mx-auto flex items-center justify-between h-[82px] px-4 lg:px-12"
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
                style={{
                  fontFamily:
                    lang === "ar"
                      ? "var(--font-cairo)"
                      : "inherit",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-3 shrink-0">

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">

              {/* Desktop Language Switch */}
              <button
                onClick={toggleLang}
                className="h-[38px] min-w-[44px] px-3 border border-[#e5e5e5] bg-white text-[#8d8d8d] hover:text-[#1535C2] hover:border-[#1535C2] transition-all duration-300 text-[10px] tracking-[0.18em] uppercase flex items-center justify-center rounded-none"
                style={{
                  fontFamily:
                    lang === "ar"
                      ? "var(--font-cairo)"
                      : "inherit",
                }}
              >
                {lang === "en" ? "عربي" : "EN"}
              </button>

              {/* CTA Button */}
              <button
                onClick={() => handleNav("/#contact")}
                className="btn-primary"
              >
                {t("nav.startCampaign")}
              </button>
            </div>

            {/* Mobile Language Switch */}
            <button
              onClick={toggleLang}
              className="lg:hidden flex h-[36px] min-w-[42px] items-center justify-center px-3 border border-[#e5e5e5] bg-white text-[#8d8d8d] hover:text-[#1535C2] hover:border-[#1535C2] transition-all duration-300 text-[10px] tracking-[0.18em] uppercase flex items-center justify-center"
              style={{
                fontFamily:
                  lang === "ar"
                    ? "var(--font-cairo)"
                    : "inherit",
              }}
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex shrink-0 flex-col gap-[5px] p-2"
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
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {/* Mobile Logo */}
            <div className="absolute top-7 left-7">
              <ThinkwayLogo variant="dark" />
            </div>

            {/* Mobile Links */}
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
                style={{
                  fontFamily:
                    lang === "ar"
                      ? "var(--font-cairo)"
                      : "inherit",
                }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Mobile Language Switch Inside Menu */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: (navLinks.length + 1) * 0.08,
                duration: 0.4,
              }}
              onClick={toggleLang}
              className="h-[44px] px-6 border border-[#e5e5e5] bg-white text-[#8d8d8d] hover:text-[#1535C2] hover:border-[#1535C2] transition-all duration-300 text-[11px] tracking-[0.18em] uppercase flex items-center justify-center"
              style={{
                fontFamily:
                  lang === "ar"
                    ? "var(--font-cairo)"
                    : "inherit",
              }}
            >
              {lang === "en" ? "عربي" : "EN"}
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}