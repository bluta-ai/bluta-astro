import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { Arrow, PageCta, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { Localized, LocalizedLink } from "../../components/LanguageContext";
import { projectBySlug, projects } from "../../project-catalogue";
import { localizeProject } from "../../project-localization";
import { isUrlLocale, languageAlternates, localizedPath, socialPreviewImage } from "../../localized-metadata";
import { productBySlug } from "../../product-catalogue";
import { localizeProduct } from "../../product-localization";

type Props = { params: Promise<{ slug: string; locale?: string }> };
const siteUrl = "https://blutech.io";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectBySlug((await params).slug);
  if (!project) return {};
  const title = `${project.name} Building AI and IoT Case Study — Blutech`;
  const image = `${siteUrl}${socialPreviewImage(project.image)}`;
  const url = `${siteUrl}/projects/${project.slug}`;
  return { title, description: project.summary, alternates: { canonical: `/projects/${project.slug}`, languages: languageAlternates(`/projects/${project.slug}`) }, openGraph: { title, description: project.summary, url, type: "article", siteName: "Blutech", images: [image] }, twitter: { card: "summary_large_image", title, description: project.summary, images: [image] } };
}

export default async function ProjectPage({ params }: Props) {
  const { slug, locale } = await params;
  const legacySlug = ({ "immigration-department-headquarters": "immigration-department-queue-monitoring", "princess-margaret-hospital": "hospital-patient-safety" } as Record<string, string>)[slug];
  if (legacySlug) {
    const routeLocale = locale && isUrlLocale(locale) ? locale : undefined;
    permanentRedirect(localizedPath(`/projects/${legacySlug}`, routeLocale));
  }
  const sourceProject = projectBySlug(slug);
  if (!sourceProject) notFound();
  const project = localizeProject(sourceProject, locale);
  const projectProducts = project.products.flatMap((item) => { const product = productBySlug(item); return product ? [localizeProduct(product, locale)] : []; });
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2).map((item) => localizeProject(item, locale));
  const routeLocale = locale && isUrlLocale(locale) ? locale : undefined;
  const projectUrl = `${siteUrl}${localizedPath(`/projects/${project.slug}`, routeLocale)}`;
  const projectsUrl = `${siteUrl}${localizedPath("/projects", routeLocale)}`;
  const homeUrl = `${siteUrl}${localizedPath("/", routeLocale)}`;
  const language = routeLocale === "zh-hant" ? "zh-Hant" : routeLocale === "zh-hans" ? "zh-Hans" : routeLocale === "ar" ? "ar" : routeLocale === "es" ? "es" : "en";
  const breadcrumbHome = routeLocale === "zh-hant" ? "首頁" : routeLocale === "zh-hans" ? "首页" : routeLocale === "ar" ? "الرئيسية" : routeLocale === "es" ? "Inicio" : "Home";
  const breadcrumbProjects = routeLocale === "zh-hant" ? "項目" : routeLocale === "zh-hans" ? "项目" : routeLocale === "ar" ? "المشاريع" : routeLocale === "es" ? "Proyectos" : "Projects";
  const data = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${projectUrl}#case-study`, headline: project.name, description: project.summary, image: `${siteUrl}${project.image}`, articleSection: project.sector, inLanguage: language, mainEntityOfPage: projectUrl, author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Blutech" }, publisher: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Blutech" }, about: projectProducts.map((product) => ({ "@type": "Thing", name: `${product.model} ${product.name}`, identifier: product.model, url: `${siteUrl}${localizedPath(`/products/${product.slug}`, routeLocale)}` })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: breadcrumbHome, item: homeUrl }, { "@type": "ListItem", position: 2, name: breadcrumbProjects, item: projectsUrl }, { "@type": "ListItem", position: 3, name: project.name, item: projectUrl }] },
  ] };

  return <main className="internal-page project-detail-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
    <SiteHeader active="projects" />
    <section className="case-hero"><div className="case-hero-copy"><LocalizedLink href="/projects" className="case-back">← <Localized en="Selected work" tc="精選項目" sc="精选项目" ar="مشاريع مختارة" es="Proyectos seleccionados" /></LocalizedLink><p className="eyebrow light">{project.sector.toUpperCase()} · {project.location.toUpperCase()}</p><h1>{project.name}</h1><p>{project.summary}</p></div><div className="case-hero-image"><img src={project.image} alt={project.imageAlt || `${project.name} project`} /></div></section>
    <section className="case-intro section-pad"><div><p className="section-label"><Localized en="Project brief" tc="項目需要" sc="项目需要" ar="متطلبات المشروع" es="Resumen del proyecto" /></p><h2><Localized en="The operational challenge." tc="需要解決的營運挑戰。" sc="需要解决的运营挑战。" ar="التحدي التشغيلي." es="El reto operativo." /></h2></div><p>{project.challenge}</p></section>
    <section className="case-delivery section-pad"><div className="case-section-heading"><p className="section-label"><Localized en="What Blutech delivered" tc="Blutech 交付內容" sc="Blutech 交付内容" ar="ما قدمته Blutech" es="Lo que entregó Blutech" /></p><h2><Localized en="A coordinated solution, explained clearly." tc="清楚呈現每項交付內容。" sc="清楚呈现每项交付内容。" ar="حل متكامل بشرح واضح." es="Una solución coordinada, explicada con claridad." /></h2></div><ol>{project.delivery.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></section>
    <section className="case-impact section-pad"><div className="case-impact-heading"><p className="section-label"><Localized en="Project benefits" tc="項目效益" sc="项目效益" ar="فوائد المشروع" es="Beneficios del proyecto" /></p><h2><Localized en="Better outcomes for owners, operators and building users." tc="為業主、營運團隊與使用者帶來更好成果。" sc="为业主、运营团队与使用者带来更好成果。" ar="نتائج أفضل للمالكين والمشغلين ومستخدمي المبنى." es="Mejores resultados para propietarios, operadores y usuarios." /></h2><p>{project.outcome}</p></div><div className="case-benefit-grid">{project.benefits.map((benefit) => <article key={benefit.title}><h3>{benefit.title}</h3><p>{benefit.body}</p></article>)}</div><div className="case-system-path"><span><Localized en="System path" tc="系統路徑" sc="系统路径" ar="مسار النظام" es="Ruta del sistema" /></span><ol>{project.flow.map((item, index) => <li key={item}><b>{item}</b>{index < project.flow.length - 1 && <i>→</i>}</li>)}</ol></div></section>
    {projectProducts.length > 0 && <section className="case-products section-pad"><div className="catalogue-heading"><div><p className="eyebrow"><Localized en="SYSTEM COMPONENTS" tc="系統組件" sc="系统组件" ar="مكونات النظام" es="COMPONENTES DEL SISTEMA" /></p><h2><Localized en="Products used in the project." tc="項目採用的產品。" sc="项目采用的产品。" ar="المنتجات المستخدمة في المشروع." es="Productos utilizados en el proyecto." /></h2></div><p><Localized en="Each product has a defined role in the outcome—sensing, local response, connectivity, information or operations." tc="每項產品都對成果承擔明確角色：感測、本地回應、連接、資訊或營運。" sc="每项产品都对成果承担明确角色：感知、本地响应、连接、信息或运营。" ar="لكل منتج دور محدد في النتيجة: الاستشعار أو الاستجابة المحلية أو الاتصال أو المعلومات أو التشغيل." es="Cada producto desempeña una función definida: detección, respuesta local, conectividad, información u operaciones." /></p></div><div className="case-product-grid">{projectProducts.map((product) => <LocalizedLink key={product.slug} href={`/products/${product.slug}`}><span>{product.model}</span><h3>{product.name}</h3><p>{product.summary}</p><b><Localized en="View product" tc="查看產品" sc="查看产品" ar="عرض المنتج" es="Ver producto" /> <Arrow /></b></LocalizedLink>)}</div></section>}
    <section className="related case-related section-pad"><p className="eyebrow"><Localized en="MORE SELECTED WORK" tc="更多精選項目" sc="更多精选项目" ar="المزيد من المشاريع المختارة" es="MÁS PROYECTOS SELECCIONADOS" /></p><h2><Localized en="Continue exploring." tc="繼續探索。" sc="继续探索。" ar="تابع الاستكشاف." es="Seguir explorando." /></h2><div>{related.map((item) => <LocalizedLink key={item.slug} href={`/projects/${item.slug}`}><span>{item.sector}</span><h3>{item.name}</h3><p>{item.summary}</p><b><Localized en="View case study" tc="查看案例" sc="查看案例" ar="عرض دراسة الحالة" es="Ver caso de estudio" /> <Arrow /></b></LocalizedLink>)}</div></section>
    <PageCta /><SiteFooter />
  </main>;
}
