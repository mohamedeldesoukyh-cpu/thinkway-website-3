"use client";

import { createContext, useContext, useState, useEffect } from "react";
import en from "../messages/en.json";
import ar from "../messages/ar.json";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations = { en, ar };

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("thinkway_lang") as Language;
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
  const newLang = lang === "en" ? "ar" : "en";
  setLang(newLang);
  localStorage.setItem("thinkway_lang", newLang);
  document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = newLang;
  window.location.reload();
};

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}