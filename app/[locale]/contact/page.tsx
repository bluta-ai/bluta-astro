import type { Metadata } from "next";
import ContactPage from "../../contact/page";
import { isUrlLocale, pageMetadata } from "../../localized-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isUrlLocale(locale)) return {};
  const title = locale === "zh-hant" ? "聯絡 Blutech" : locale === "zh-hans" ? "联系 Blutech" : locale === "es" ? "Contacto — Blutech" : "اتصل بـ Blutech";
  const description = locale === "zh-hant" ? "與 Blutech 討論樓宇 AI、物聯網、軟件整合或試點項目。" : locale === "zh-hans" ? "与 Blutech 讨论楼宇 AI、物联网、软件集成或试点项目。" : locale === "es" ? "Hable con Blutech sobre IA para edificios, IoT, integración de software o un proyecto piloto." : "ناقش مع Blutech مشروعاً للذكاء الاصطناعي أو إنترنت الأشياء أو تكامل البرمجيات أو تجربة أولية.";
  return pageMetadata({ locale, path: "/contact", title, description });
}

export default ContactPage;
