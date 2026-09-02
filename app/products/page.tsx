import type { Metadata } from "next";
import { Arrow, PageCta, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { Localized, LocalizedLink } from "../components/LanguageContext";
import { categories, products } from "../product-catalogue";
import { localizeCategory, localizeProduct } from "../product-localization";
import { languageAlternates } from "../localized-metadata";

export const metadata: Metadata = {
  title: "Products — Blutech",
  description: "Explore Blutech building AI and IoT hardware: accurate sensing, smart lighting, indoor air quality, gateways, smart washroom and architectural information displays.",
  alternates: { canonical: "/products", languages: languageAlternates("/products") },
};

export default async function ProductsPage({ params }: { params?: Promise<{ locale?: string }> } = {}) {
  const locale = (await params)?.locale;
  const featured = products.filter((product) => product.featured).map((product) => localizeProduct(product, locale));
  return (
    <main className="internal-page">
      <SiteHeader active="products" />
      <section className="page-hero products-hero">
        <div className="page-hero-copy">
          <p className="eyebrow light"><Localized en="VERIFIED PRODUCT CATALOGUE" tc="已驗證產品目錄" sc="已验证产品目录" ar="كتالوج منتجات موثّق" es="CATÁLOGO DE PRODUCTOS VERIFICADO" /></p>
          <h1><Localized en={<>Built for the realities<br />of a live building.</>} tc={<>為真實營運中的建築<br />而設計。</>} sc={<>为真实运营中的建筑<br />而设计。</>} ar={<>مصمم لواقع<br />المباني العاملة.</>} es={<>Diseñado para la realidad<br />de un edificio activo.</>} /></h1>
          <p><Localized en="Purpose-built sensors, gateways and interfaces designed around property outcomes—not novelty. Every model shown here is drawn from Blutech's current, proven catalogue." tc="感測器、網關與資訊介面均以物業成果為中心，而非追求新奇。頁面所列型號均來自 Blutech 現行並經實際應用的產品目錄。" sc="传感器、网关与信息界面均以物业成果为中心，而非追求新奇。页面所列型号均来自 Blutech 现行并经实际应用的产品目录。" ar="مستشعرات وبوابات وواجهات مصممة حول نتائج العقار، وليست لمجرد الحداثة. كل طراز معروض من كتالوج Blutech الحالي والمثبت." es="Sensores, gateways e interfaces diseñados para resultados concretos del inmueble. Todos los modelos proceden del catálogo actual y probado de Blutech." /></p>
          <a className="button button-light" href="#catalogue"><Localized en="Explore the range" tc="查看產品系列" sc="查看产品系列" ar="استكشف المجموعة" es="Explorar la gama" /> <Arrow /></a>
        </div>
        <div className="product-hero-stack" aria-hidden="true">
          <img src="/images/heatmap-fusion.webp" alt="" />
          <img src="/images/iaq.webp" alt="" />
          <img src="/images/info-station.webp" alt="" />
        </div>
      </section>

      <section className="product-principles section-pad">
        <div className="section-intro">
          <div><p className="section-label"><Localized en="Designed as a system" tc="以完整系統思維設計" sc="以完整系统思维设计" ar="مصمم كنظام متكامل" es="Diseñado como un sistema" /></p><h2><Localized en={<>Quiet hardware.<br />Useful signals.</>} tc={<>低調硬件。<br />實用訊號。</>} sc={<>低调硬件。<br />实用信号。</>} ar={<>أجهزة هادئة.<br />إشارات مفيدة.</>} es={<>Hardware discreto.<br />Señales útiles.</>} /></h2></div>
          <p><Localized en="Choose the field signals a property actually needs, connect them through an appropriate network, and turn them into clear action in Blutech Halo and Blutech Core." tc="選擇物業真正需要的現場訊號，透過合適網絡連接，再於 Blutech Halo 與 Core 中轉化為清晰行動。" sc="选择物业真正需要的现场信号，通过合适网络连接，再于 Blutech Halo 与 Core 中转化为清晰行动。" ar="اختر إشارات الموقع التي يحتاجها العقار فعلاً، واربطها بالشبكة المناسبة، وحولها إلى إجراء واضح في Halo وCore." es="Elija las señales que el inmueble realmente necesita, conéctelas mediante la red adecuada y conviértalas en acciones claras en Blutech Halo y Core." /></p>
        </div>
        <div className="principle-grid">
          <article><span>01</span><h3><Localized en="Accurate sensing" tc="精準感測" sc="精准感知" ar="استشعار دقيق" es="Detección precisa" /></h3><p><Localized en="Start with the signal the building actually needs, then select thermal, mmWave, contact, environmental or spatial sensing around that outcome." tc="先確認建築真正需要的訊號，再按成果選擇熱能、毫米波、接點、環境或空間感測。" sc="先确认建筑真正需要的信号，再按成果选择热能、毫米波、触点、环境或空间感知。" ar="ابدأ بالإشارة التي يحتاجها المبنى فعلاً، ثم اختر الاستشعار الحراري أو الموجات المليمترية أو البيئي أو المكاني." es="Empiece por la señal que el edificio necesita y seleccione detección térmica, mmWave, de contacto, ambiental o espacial en torno a ese resultado." /></p></article>
          <article><span>02</span><h3><Localized en="Retrofit ready" tc="適合改造" sc="适合改造" ar="جاهز للتحديث" es="Preparado para reformas" /></h3><p><Localized en="Wireless-first options reduce disruption in operating properties while gateways and open interfaces connect what is already there." tc="無線優先方案減少對營運中物業的干擾，網關與開放介面則連接既有系統。" sc="无线优先方案减少对运营中物业的干扰，网关与开放接口则连接既有系统。" ar="تقلل الخيارات اللاسلكية أثر التنفيذ في العقارات العاملة، بينما تربط البوابات والواجهات المفتوحة الأنظمة القائمة." es="Las opciones inalámbricas reducen las molestias en edificios activos, mientras gateways e interfaces abiertas conectan los sistemas existentes." /></p></article>
          <article><span>03</span><h3><Localized en="Operationally clear" tc="營運清晰" sc="运营清晰" ar="وضوح تشغيلي" es="Claridad operativa" /></h3><p><Localized en="Product selection begins with the alarm, workflow, report or occupant experience the team needs to improve." tc="由團隊需要改善的警報、流程、報告或使用者體驗出發選擇產品。" sc="从团队需要改善的警报、流程、报告或使用者体验出发选择产品。" ar="يبدأ اختيار المنتج من التنبيه أو سير العمل أو التقرير أو تجربة المستخدم التي يحتاج الفريق إلى تحسينها." es="La selección del producto empieza por la alarma, el flujo, el informe o la experiencia que el equipo necesita mejorar." /></p></article>
        </div>
      </section>

      <section className="featured-products dark-section section-pad">
        <div className="catalogue-heading"><div><p className="section-label light"><Localized en="Core range" tc="核心產品" sc="核心产品" ar="المجموعة الأساسية" es="Gama principal" /></p><h2><Localized en="Start with the outcome." tc="由成果開始。" sc="从成果开始。" ar="ابدأ بالنتيجة." es="Empiece por el resultado." /></h2></div><p><Localized en="These products form the core of Blutech deployments across offices, aviation, healthcare, government and retail." tc="這些產品構成 Blutech 在辦公室、航空、醫療、政府及零售項目的核心。" sc="这些产品构成 Blutech 在办公室、航空、医疗、政府及零售项目的核心。" ar="تشكل هذه المنتجات أساس مشاريع Blutech في المكاتب والطيران والرعاية الصحية والقطاع الحكومي والتجزئة." es="Estos productos forman el núcleo de las implantaciones de Blutech en oficinas, aviación, sanidad, administración pública y retail." /></p></div>
        <div className="featured-product-grid">
          {featured.map((product) => (
            <LocalizedLink className="featured-product" key={product.slug} href={`/products/${product.slug}`}>
              <div className={product.image ? `featured-image${product.imageFit === "contain" ? " image-contain" : ""}` : "featured-image no-product-image"}>
                {product.image ? <img src={product.image} alt={`${product.model} ${product.name}`} /> : <><span>{product.model}</span><i /></>}
                {product.award && <span className="if-award-badge if-mark" role="img" aria-label="iF Design Award">iF</span>}
              </div>
              <div><p>{product.model} · {product.category}</p><h3>{product.name}</h3><span>{product.summary}</span><b><Localized en="View product" tc="查看產品" sc="查看产品" ar="عرض المنتج" es="Ver producto" /> <Arrow /></b></div>
            </LocalizedLink>
          ))}
        </div>
      </section>

      <section id="catalogue" className="catalogue section-pad">
        <div className="catalogue-heading"><div><p className="section-label"><Localized en="Current and proven" tc="現行並經驗證" sc="现行并经验证" ar="حالي ومثبت" es="Actual y probado" /></p><h2><Localized en="The complete catalogue." tc="完整產品目錄。" sc="完整产品目录。" ar="الكتالوج الكامل." es="El catálogo completo." /></h2></div><p><Localized en="Products are grouped by the building outcome they support. Project specifications, interfaces and installation details are confirmed against the actual site condition." tc="產品按其支援的樓宇成果分類；規格、介面及安裝細節會根據實際現場情況確認。" sc="产品按其支持的楼宇成果分类；规格、界面及安装细节会根据实际现场情况确认。" ar="تصنف المنتجات حسب نتيجة المبنى التي تدعمها، وتؤكد المواصفات والواجهات وتفاصيل التركيب وفق ظروف الموقع الفعلية." es="Los productos se agrupan por el resultado que respaldan. Especificaciones, interfaces e instalación se confirman según las condiciones reales del emplazamiento." /></p></div>
        {categories.map((category, categoryIndex) => {
          const family = products.filter((product) => product.category === category).map((product) => localizeProduct(product, locale));
          return (
            <div className="catalogue-family" key={category}>
              <div className="family-title"><span>{String(categoryIndex + 1).padStart(2, "0")}</span><h3>{localizeCategory(category, locale)}</h3><b>{family.length} <Localized en={family.length === 1 ? "product" : "products"} tc="款產品" sc="款产品" ar="منتج" es={family.length === 1 ? "producto" : "productos"} /></b></div>
              <div className="family-products">
                {family.map((product) => (
                  <LocalizedLink href={`/products/${product.slug}`} key={product.slug} className="catalogue-row">
                    <span>{product.model}</span><h4>{product.name}{product.award && <em className="catalogue-award">iF</em>}</h4><p>{product.outcome}</p><i><Arrow /></i>
                  </LocalizedLink>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="catalogue-note"><p><Localized en="Only current, supported products are shown. Context visuals explain use and character; the approved submittal confirms the exact ordered model, dimensions, performance and certification." tc="頁面只展示現行並受支援的產品。情境圖片用於說明用途與設計語言；最終型號、尺寸、性能與認證以獲批提交文件為準。" sc="页面只展示现行并受支持的产品。情境图片用于说明用途与设计语言；最终型号、尺寸、性能与认证以获批提交文件为准。" ar="نعرض المنتجات الحالية والمدعومة فقط. تشرح الصور السياق والاستخدام، بينما تؤكد وثيقة الاعتماد الطراز والأبعاد والأداء والشهادات النهائية." es="Solo se muestran productos actuales y compatibles. Las imágenes explican el uso; la documentación aprobada confirma el modelo, dimensiones, rendimiento y certificación exactos." /></p></section>
      <PageCta />
      <SiteFooter />
    </main>
  );
}
