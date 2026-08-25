import type { Metadata } from "next";

export const supportedLocales = ["zh-hant", "zh-hans", "ar"] as const;
export type UrlLocale = (typeof supportedLocales)[number];

export const localeToLanguage = {
  "zh-hant": "tc",
  "zh-hans": "sc",
  ar: "ar",
} as const;

export const localeToHtml = {
  "zh-hant": "zh-Hant",
  "zh-hans": "zh-Hans",
  ar: "ar",
} as const;

export function isUrlLocale(value: string): value is UrlLocale {
  return supportedLocales.includes(value as UrlLocale);
}

export function localizedPath(path: string, locale?: UrlLocale) {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return locale ? `/${locale}${normalized}` : normalized || "/";
}

export function languageAlternates(path: string) {
  return {
    en: localizedPath(path),
    "zh-Hant": localizedPath(path, "zh-hant"),
    "zh-Hans": localizedPath(path, "zh-hans"),
    ar: localizedPath(path, "ar"),
    "x-default": localizedPath(path),
  };
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  image = "/og.png",
}: {
  locale: UrlLocale;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const canonical = localizedPath(path, locale);
  return {
    title,
    description,
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: { title, description, url: canonical, images: [image], locale: localeToHtml[locale].replace("-", "_") },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
