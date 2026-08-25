import { notFound } from "next/navigation";
import { LanguageProvider } from "../components/LanguageContext";
import { isUrlLocale, localeToHtml, localeToLanguage, supportedLocales } from "../localized-metadata";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isUrlLocale(locale)) notFound();
  const language = localeToLanguage[locale];
  return <LanguageProvider initialLanguage={language}><div lang={localeToHtml[locale]} dir={locale === "ar" ? "rtl" : "ltr"}>{children}</div></LanguageProvider>;
}
