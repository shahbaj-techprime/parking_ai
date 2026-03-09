"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "..";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang) {
      setLang(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const changeLanguage = (lng) => {
    setLang(lng);
    localStorage.setItem("lang", lng);

    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);