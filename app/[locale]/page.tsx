import type { Metadata } from "next";
import Home from "../page";
import { isUrlLocale, pageMetadata } from "../localized-metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isUrlLocale(locale)) return {};
  const title = locale === "zh-hant" ? "Blutech — 樓宇 AI 與物聯網" : locale === "zh-hans" ? "Blutech — 楼宇 AI 与物联网" : "Blutech — الذكاء الاصطناعي وإنترنت الأشياء للمباني";
  const description = locale === "zh-hant" ? "Blutech 將精準感測、邊緣智能、無線網絡與樓宇軟件連接，改善安全、營運效率和物業表現。" : locale === "zh-hans" ? "Blutech 将精准感知、边缘智能、无线网络与楼宇软件连接，改善安全、运营效率和物业表现。" : "تربط Blutech الاستشعار الدقيق وذكاء الحافة والشبكات اللاسلكية وبرمجيات المباني لتحسين السلامة والتشغيل والأداء.";
  return pageMetadata({ locale, path: "/", title, description });
}

export default Home;
