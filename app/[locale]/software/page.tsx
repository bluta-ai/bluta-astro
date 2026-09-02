import type { Metadata } from "next";
import SoftwarePage from "../../software/page";
import { isUrlLocale, pageMetadata } from "../../localized-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isUrlLocale(locale)) return {};
  const title = locale === "zh-hant" ? "Blutech Halo 與 Core 軟件" : locale === "zh-hans" ? "Blutech Halo 与 Core 软件" : locale === "es" ? "Software Blutech Halo y Core" : "برمجيات Blutech Halo وCore";
  const description = locale === "zh-hant" ? "Halo 為業主與營運團隊提供樓宇可視性；Core 管理設備、網關、規則、健康狀態與整合。" : locale === "zh-hans" ? "Halo 为业主与运营团队提供楼宇可视性；Core 管理设备、网关、规则、健康状态与集成。" : locale === "es" ? "Halo ofrece visibilidad del edificio a propietarios y operadores; Core gestiona dispositivos, gateways, reglas, estado e integraciones." : "يوفر Halo رؤية واضحة للمالكين وفرق التشغيل، بينما يدير Core الأجهزة والبوابات والقواعد والتكاملات.";
  return pageMetadata({ locale, path: "/software", title, description });
}

export default SoftwarePage;
