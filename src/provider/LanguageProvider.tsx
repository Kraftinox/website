"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ro" | "en";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ro",
  toggle: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ro");
  const toggle = () => setLang((l) => (l === "ro" ? "en" : "ro"));

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
