import type { Metadata } from "next";
import CompanyPage from "../../company/page";
import { isUrlLocale, pageMetadata } from "../../localized-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isUrlLocale(locale)) return {};
  const title = locale === "zh-hant" ? "關於 Blutech" : locale === "zh-hans" ? "关于 Blutech" : "عن Blutech";
  const description = locale === "zh-hant" ? "Blutech 於 2019 年在香港成立，提供樓宇 AI、物聯網硬件、軟件、整合與項目交付。" : locale === "zh-hans" ? "Blutech 于 2019 年在香港成立，提供楼宇 AI、物联网硬件、软件、集成与项目交付。" : "تأسست Blutech في هونغ كونغ عام 2019 وتقدم أجهزة وبرمجيات وتكامل وتسليم مشاريع الذكاء الاصطناعي وإنترنت الأشياء للمباني.";
  return pageMetadata({ locale, path: "/company", title, description });
}

export default CompanyPage;
