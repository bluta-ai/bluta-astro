import type { Metadata } from "next";
import TechnologyPage from "../../technology/page";
import { isUrlLocale, pageMetadata } from "../../localized-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isUrlLocale(locale)) return {};
  const title = locale === "zh-hant" ? "技術架構 — Blutech" : locale === "zh-hans" ? "技术架构 — Blutech" : locale === "es" ? "Tecnología — Blutech" : "التقنية — Blutech";
  const description = locale === "zh-hant" ? "邊緣智能支援現場即時回應；雲端提供可視性、協調與管理，並透過開放協議連接現有樓宇系統。" : locale === "zh-hans" ? "边缘智能支持现场即时响应；云端提供可视性、协调与管理，并通过开放协议连接现有楼宇系统。" : locale === "es" ? "Inteligencia en el edge para respuesta inmediata y nube para visibilidad, coordinación y gestión, con integraciones abiertas para edificios." : "ذكاء الحافة للاستجابة الفورية في الموقع، والسحابة للرؤية والتنسيق والإدارة مع تكاملات المباني المفتوحة.";
  return pageMetadata({ locale, path: "/technology", title, description });
}

export default TechnologyPage;
