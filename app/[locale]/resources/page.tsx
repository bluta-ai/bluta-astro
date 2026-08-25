import type { Metadata } from "next";
import ResourcesPage from "../../resources/page";
import { isUrlLocale, pageMetadata } from "../../localized-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isUrlLocale(locale)) return {};
  const title = locale === "zh-hant" ? "資源 — Blutech" : locale === "zh-hans" ? "资源 — Blutech" : "الموارد — Blutech";
  const description = locale === "zh-hant" ? "Blutech 樓宇 AI、物聯網、營運與整合的實用資料。" : locale === "zh-hans" ? "Blutech 楼宇 AI、物联网、运营与集成的实用资料。" : "مواد عملية من Blutech حول ذكاء المباني وإنترنت الأشياء والتشغيل والتكامل.";
  return pageMetadata({ locale, path: "/resources", title, description });
}

export default ResourcesPage;
