import type { Metadata } from "next";
import ProductsPage from "../../products/page";
import { isUrlLocale, pageMetadata } from "../../localized-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isUrlLocale(locale)) return {};
  const title = locale === "zh-hant" ? "產品 — Blutech" : locale === "zh-hans" ? "产品 — Blutech" : "المنتجات — Blutech";
  const description = locale === "zh-hant" ? "探索 Blutech 樓宇 AI 與物聯網硬件，包括感測器、智能照明、室內空氣質素、網關及智能洗手間產品。" : locale === "zh-hans" ? "探索 Blutech 楼宇 AI 与物联网硬件，包括传感器、智能照明、室内空气质量、网关及智能洗手间产品。" : "استكشف أجهزة Blutech للمباني، من الاستشعار والإضاءة الذكية وجودة الهواء إلى البوابات وحلول دورات المياه الذكية.";
  return pageMetadata({ locale, path: "/products", title, description });
}

export default ProductsPage;
