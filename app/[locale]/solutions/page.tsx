import type { Metadata } from "next";
import SolutionsPage from "../../solutions/page";
import { isUrlLocale, pageMetadata } from "../../localized-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isUrlLocale(locale)) return {};
  const title = locale === "zh-hant" ? "解決方案 — Blutech" : locale === "zh-hans" ? "解决方案 — Blutech" : "الحلول — Blutech";
  const description = locale === "zh-hant" ? "由智能洗手間、空氣質素、空間使用、漏水和病人安全，到照明及 HVAC 協調。" : locale === "zh-hans" ? "从智能洗手间、空气质量、空间使用、漏水和病人安全，到照明及 HVAC 协调。" : "حلول لدورات المياه الذكية وجودة الهواء واستخدام المساحات وتسرب المياه وسلامة المرضى وتنسيق الإضاءة وHVAC.";
  return pageMetadata({ locale, path: "/solutions", title, description });
}

export default SolutionsPage;
