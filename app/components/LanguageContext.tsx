"use client";

import { createContext, useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SiteLanguage = "en" | "tc" | "sc" | "ar" | "es";

type LanguageContextValue = {
  language: SiteLanguage;
};

const LanguageContext = createContext<LanguageContextValue>({ language: "en" });

export function LanguageProvider({ children, initialLanguage = "en" }: { children: React.ReactNode; initialLanguage?: SiteLanguage }) {
  const language = initialLanguage;

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : language === "tc" ? "zh-Hant" : language === "sc" ? "zh-Hans" : language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("cjk", language === "tc" || language === "sc");
    document.body.classList.toggle("rtl", language === "ar");
  }, [language]);

  return <LanguageContext.Provider value={{ language }}>{children}</LanguageContext.Provider>;
}

export function localePath(path: string, language: SiteLanguage) {
  const clean = path.replace(/^\/(zh-hant|zh-hans|ar|es)(?=\/|$)/, "") || "/";
  const prefix = language === "tc" ? "/zh-hant" : language === "sc" ? "/zh-hans" : language === "ar" ? "/ar" : language === "es" ? "/es" : "";
  return clean === "/" ? (prefix || "/") : `${prefix}${clean.startsWith("/") ? clean : `/${clean}`}`;
}

export function useSiteLanguage() {
  return useContext(LanguageContext);
}

export function LocalizedLink({ href, children, className, onClick, ariaLabel }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void; ariaLabel?: string }) {
  const { language } = useSiteLanguage();
  return <Link href={localePath(href, language)} className={className} onClick={onClick} aria-label={ariaLabel}>{children}</Link>;
}

export function Localized({ en, tc, sc, ar, es }: { en: React.ReactNode; tc: React.ReactNode; sc: React.ReactNode; ar: React.ReactNode; es: React.ReactNode }) {
  const { language } = useSiteLanguage();
  return <>{language === "tc" ? tc : language === "sc" ? sc : language === "ar" ? ar : language === "es" ? es : en}</>;
}

export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { language } = useSiteLanguage();
  const pathname = usePathname() || "/";
  return <div className={compact ? "mobile-language global-language" : "language global-language"} aria-label="Language selector">
    {(["en", "tc", "sc", "ar", "es"] as SiteLanguage[]).map((item) => <a key={item} href={localePath(pathname, item)} hrefLang={item === "tc" ? "zh-Hant" : item === "sc" ? "zh-Hans" : item} lang={item === "tc" ? "zh-Hant" : item === "sc" ? "zh-Hans" : item} className={language === item ? "active" : ""}>{item === "en" ? "EN" : item === "tc" ? (compact ? "繁體" : "繁") : item === "sc" ? (compact ? "简体" : "简") : item === "ar" ? (compact ? "العربية" : "AR") : (compact ? "Español" : "ES")}</a>)}
  </div>;
}
