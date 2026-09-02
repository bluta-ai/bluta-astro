import type { Metadata } from "next";
import ProjectsPage from "../../projects/page";
import { isUrlLocale, pageMetadata } from "../../localized-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isUrlLocale(locale)) return {};
  const title = locale === "zh-hant" ? "項目案例 — Blutech" : locale === "zh-hans" ? "项目案例 — Blutech" : locale === "es" ? "Proyectos — Blutech" : "المشاريع — Blutech";
  const description = locale === "zh-hant" ? "探索 Blutech 在商業樓宇、機場、鐵路、政府設施、商場及醫院的已確認樓宇 AI 與物聯網項目。" : locale === "zh-hans" ? "探索 Blutech 在商业楼宇、机场、铁路、政府设施、商场及医院的已确认楼宇 AI 与物联网项目。" : locale === "es" ? "Explore proyectos confirmados de IA e IoT para edificios de Blutech en oficinas, aeropuertos, ferrocarril, instalaciones públicas, centros comerciales y hospitales." : "استكشف مشاريع Blutech المؤكدة للذكاء الاصطناعي وإنترنت الأشياء في المباني والمطارات والسكك الحديدية والمرافق الحكومية والمستشفيات.";
  return pageMetadata({ locale, path: "/projects", title, description });
}

export default ProjectsPage;
