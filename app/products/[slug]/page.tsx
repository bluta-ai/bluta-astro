import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { Arrow, PageCta, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { Localized, LocalizedLink } from "../../components/LanguageContext";
import { productBySlug, products } from "../../product-catalogue";
import { localizeProduct } from "../../product-localization";
import { isUrlLocale, languageAlternates, localizedPath, socialPreviewImage } from "../../localized-metadata";

type Props = { params: Promise<{ slug: string; locale?: string }> };
const siteUrl = "https://blutech.io";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};

  const title = `${product.model} ${product.name} — Blutech`;
  const image = `${siteUrl}${socialPreviewImage(product.image)}`;
  const url = `${siteUrl}/products/${product.slug}`;
  return {
    title,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}`, languages: languageAlternates(`/products/${product.slug}`) },
    openGraph: { title, description: product.summary, url, type: "website", siteName: "Blutech", images: [image] },
    twitter: { card: "summary_large_image", title, description: product.summary, images: [image] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug, locale } = await params;
  const legacySlug = ({ "bt102n-smart-info-station": "bt102-smart-info-station", bt102n: "bt102-smart-info-station", "bt107-smart-tv-display": "bt107-smart-display" } as Record<string, string>)[slug];
  if (legacySlug) {
    const routeLocale = locale && isUrlLocale(locale) ? locale : undefined;
    permanentRedirect(localizedPath(`/products/${legacySlug}`, routeLocale));
  }
  const sourceProduct = productBySlug(slug);
  if (!sourceProduct) notFound();
  const product = localizeProduct(sourceProduct, locale);
  const related = products.filter((item) => item.category === sourceProduct.category && item.slug !== sourceProduct.slug).slice(0, 3).map((item) => localizeProduct(item, locale));
  const routeLocale = locale && isUrlLocale(locale) ? locale : undefined;
  const productUrl = `${siteUrl}${localizedPath(`/products/${product.slug}`, routeLocale)}`;
  const productsUrl = `${siteUrl}${localizedPath("/products", routeLocale)}`;
  const homeUrl = `${siteUrl}${localizedPath("/", routeLocale)}`;
  const language = routeLocale === "zh-hant" ? "zh-Hant" : routeLocale === "zh-hans" ? "zh-Hans" : routeLocale === "ar" ? "ar" : routeLocale === "es" ? "es" : "en";
  const breadcrumbHome = routeLocale === "zh-hant" ? "首頁" : routeLocale === "zh-hans" ? "首页" : routeLocale === "ar" ? "الرئيسية" : routeLocale === "es" ? "Inicio" : "Home";
  const breadcrumbProducts = routeLocale === "zh-hant" ? "產品" : routeLocale === "zh-hans" ? "产品" : routeLocale === "ar" ? "المنتجات" : routeLocale === "es" ? "Productos" : "Products";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${productUrl}#webpage`,
        url: productUrl,
        name: `${product.model} ${product.name} — Blutech`,
        description: product.summary,
        inLanguage: language,
        isPartOf: { "@id": `${siteUrl}/#website` },
        publisher: { "@id": `${siteUrl}/#organization` },
        about: { "@id": `${productUrl}#equipment` },
      },
      {
        "@type": "Thing",
        "@id": `${productUrl}#equipment`,
        url: productUrl,
        name: `${product.model} ${product.name}`,
        identifier: product.model,
        description: product.summary,
        image: product.image ? `${siteUrl}${product.image}` : undefined,
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: breadcrumbHome, item: homeUrl },
        { "@type": "ListItem", position: 2, name: breadcrumbProducts, item: productsUrl },
        { "@type": "ListItem", position: 3, name: `${product.model} ${product.name}`, item: productUrl },
      ] },
    ],
  };

  return (
    <main className="internal-page product-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader active="products" />

      <section className="detail-hero">
        <div className="detail-copy">
          <p className="eyebrow light">{product.category}</p>
          <div className="detail-meta-row"><span className="model-chip">{product.model}</span>{product.award && <span className="detail-award"><span className="if-mark" role="img" aria-label="iF Design Award">iF</span><b>{product.award}</b></span>}</div>
          <h1>{product.name}</h1>
          <p>{product.summary}</p>
          <div className="detail-actions">
            <a className="button button-light" href={`mailto:enquiry@blutech.io?subject=${encodeURIComponent(`${product.model} ${product.name} enquiry`)}`}><Localized en="Discuss this product" tc="查詢此產品" sc="咨询此产品" ar="ناقش هذا المنتج" es="Consultar este producto" /> <Arrow /></a>
            <LocalizedLink className="text-link light-link" href="/products"><Localized en="All products" tc="所有產品" sc="所有产品" ar="كل المنتجات" es="Todos los productos" /> <Arrow /></LocalizedLink>
          </div>
        </div>

        {product.image ? (
          <figure className={`detail-media${product.imageFit === "contain" ? " image-contain" : ""}`}>
            <img src={product.image} alt={`${product.model} ${product.name}`} />
            {product.imageNote && <figcaption>{product.imageNote}</figcaption>}
          </figure>
        ) : (
          <div className="detail-media system-visual" aria-label={`${product.model} functional signal path`}>
            <span className="system-visual-label"><Localized en="FUNCTIONAL VIEW" tc="功能視圖" sc="功能视图" ar="عرض وظيفي" es="VISTA FUNCIONAL" /> · {product.model}</span>
            <div className="system-visual-core"><small>BLUTECH</small><strong>{product.model}</strong><em>{product.name}</em></div>
            <div className="system-visual-path">
              {product.flow.map((step, index) => (
                <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b>{index < product.flow.length - 1 && <i />}</div>
              ))}
            </div>
            <p><Localized en="Functional diagram — request the current product submittal for exact enclosure and installation details." tc="功能示意圖——外殼及安裝細節以最新產品提交文件為準。" sc="功能示意图——外壳及安装细节以最新产品提交文件为准。" ar="مخطط وظيفي — اطلب وثيقة المنتج الحالية لتأكيد تفاصيل الهيكل والتركيب." es="Diagrama funcional: solicite la documentación vigente para confirmar la carcasa y la instalación exactas." /></p>
          </div>
        )}
      </section>

      <nav className="product-subnav" aria-label="Product page sections"><a href="#overview"><Localized en="Overview" tc="概覽" sc="概览" ar="نظرة عامة" es="Resumen" /></a><a href="#capabilities"><Localized en="Capabilities" tc="功能" sc="功能" ar="القدرات" es="Funciones" /></a>{product.facts && product.facts.length > 0 && <a href="#specifications"><Localized en="Specifications" tc="規格" sc="规格" ar="المواصفات" es="Especificaciones" /></a>}</nav>

      <section id="overview" className="product-value section-pad">
        <div className="product-value-heading">
          <p className="section-label"><Localized en="Product benefits" tc="產品效益" sc="产品效益" ar="فوائد المنتج" es="Beneficios del producto" /></p>
          <h2><Localized en="What this product improves." tc="這項產品帶來甚麼改善。" sc="这项产品带来什么改善。" ar="ما الذي يحسّنه هذا المنتج؟" es="Qué mejora este producto." /></h2>
          <p>{product.description}</p>
        </div>
        <div className="product-benefit-list">
          <article><h3><Localized en="Outcome for the property" tc="物業成果" sc="物业成果" ar="النتيجة للعقار" es="Resultado para el inmueble" /></h3><p>{product.outcome}</p></article>
          <article><h3><Localized en="Value for operations" tc="營運價值" sc="运营价值" ar="القيمة للتشغيل" es="Valor para las operaciones" /></h3><p>{product.features[0]?.body}</p></article>
          <article><h3><Localized en="How it fits the project" tc="如何配合項目" sc="如何配合项目" ar="ملاءمته للمشروع" es="Cómo encaja en el proyecto" /></h3><p>{product.deployment}</p></article>
        </div>
        <div className="product-context-row"><div><h3><Localized en="Installation approach" tc="安裝方式" sc="安装方式" ar="نهج التركيب" es="Enfoque de instalación" /></h3><p>{product.installation}</p></div><div><h3><Localized en="Best suited to" tc="適用場景" sc="适用场景" ar="الأنسب لـ" es="Especialmente indicado para" /></h3><ul>{product.applications.map((application) => <li key={application}>{application}</li>)}</ul></div></div>
      </section>

      <section id="capabilities" className="product-capabilities section-pad">
        <div className="section-intro compact-intro">
          <div><p className="section-label"><Localized en="Core capabilities" tc="主要功能" sc="主要功能" ar="القدرات الأساسية" es="Funciones principales" /></p><h2><Localized en="Built for a specific building outcome." tc="每項功能都對應實際樓宇成果。" sc="每项功能都对应实际楼宇成果。" ar="مصمم لتحقيق نتيجة واضحة في المبنى." es="Diseñado para un resultado concreto del edificio." /></h2></div>
          <p><Localized en="Each capability supports clearer information, faster response, better use of space or simpler operations." tc="功能聚焦於更清晰的資訊、更快回應、更有效運用空間與更簡單的營運。" sc="功能聚焦于更清晰的信息、更快响应、更有效利用空间与更简单的运营。" ar="تدعم كل قدرة معلومات أوضح واستجابة أسرع واستخداماً أفضل للمساحة وعمليات أبسط." es="Cada función aporta información más clara, respuesta más rápida, mejor uso del espacio u operaciones más sencillas." /></p>
        </div>
        <div className="capability-grid">
          {product.features.map((feature, index) => (
            <article key={feature.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{feature.title}</h3><p>{feature.body}</p></article>
          ))}
        </div>
      </section>

      {product.facts && product.facts.length > 0 && (
        <section id="specifications" className="product-fact-sheet section-pad">
          <div><p className="section-label"><Localized en="Documented specifications" tc="已確認資料" sc="已确认资料" ar="المواصفات الموثقة" es="Especificaciones documentadas" /></p><h2><Localized en="Confirmed product facts." tc="目前已確認的產品規格。" sc="目前已确认的产品规格。" ar="حقائق المنتج المؤكدة." es="Datos confirmados del producto." /></h2></div>
          <dl>{product.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </section>
      )}

      {product.gallery && product.gallery.length > 0 && (
        <section className="product-gallery section-pad">
          <div className="gallery-heading">
            <div><p className="eyebrow"><Localized en="IN CONTEXT" tc="實際場景" sc="实际场景" ar="في السياق" es="EN CONTEXTO" /></p><h2><Localized en="Designed to belong." tc="自然融入建築。" sc="自然融入建筑。" ar="مصمم لينتمي إلى المكان." es="Diseñado para integrarse." /></h2></div>
            <p><Localized en="Application visuals show the intended architectural character and use. Final housing, finish and installation follow the approved product submittal." tc="應用圖片展示預期的建築語言與使用方式；最終外殼、飾面及安裝以獲批產品提交文件為準。" sc="应用图片展示预期的建筑语言与使用方式；最终外壳、饰面及安装以获批产品提交文件为准。" ar="توضح صور التطبيق الطابع المعماري والاستخدام المقصودين؛ ويتبع الهيكل والتشطيب والتركيب النهائي وثيقة المنتج المعتمدة." es="Las imágenes muestran el uso y el carácter arquitectónico previstos; la carcasa, el acabado y la instalación finales siguen la documentación aprobada." /></p>
          </div>
          <div className={`gallery-grid gallery-${product.gallery.length}`}>
            {product.gallery.map((image, index) => <img key={image} src={image} alt={`${product.model} ${product.name} application visual ${index + 1}`} />)}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="related section-pad">
          <p className="eyebrow"><Localized en="SAME PRODUCT FAMILY" tc="同一產品系列" sc="同一产品系列" ar="من عائلة المنتج" es="MISMA FAMILIA DE PRODUCTOS" /></p><h2><Localized en="Related products." tc="相關產品。" sc="相关产品。" ar="منتجات ذات صلة." es="Productos relacionados." /></h2>
          <div>{related.map((item) => <LocalizedLink key={item.slug} href={`/products/${item.slug}`}><span>{item.model}</span><h3>{item.name}</h3><p>{item.outcome}</p><b><Localized en="View product" tc="查看產品" sc="查看产品" ar="عرض المنتج" es="Ver producto" /> <Arrow /></b></LocalizedLink>)}</div>
        </section>
      )}

      <PageCta />
      <SiteFooter />
    </main>
  );
}
