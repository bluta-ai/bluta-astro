import type { Metadata } from "next";
import { Localized } from "../components/LanguageContext";
import { languageAlternates } from "../localized-metadata";
import { PageCta, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Company — Blutech Building AI and IoT",
  description: "Blutech designs and delivers building AI and IoT hardware, software and integration across Hong Kong, China and Qatar.",
  alternates: { canonical: "/company", languages: languageAlternates("/company") },
};

const offices = [
  { city: "Hong Kong", image: "/images/office-hong-kong.webp", role: ["Headquarters", "總部", "总部", "المقر الرئيسي"], body: ["Product strategy, project delivery, commercial leadership and customer support.", "產品策略、項目交付、商務領導與客戶支援。", "产品策略、项目交付、商务领导与客户支持。", "استراتيجية المنتجات وتنفيذ المشاريع والقيادة التجارية ودعم العملاء."] },
  { city: "China", image: "/images/office-songshan-lake.webp", role: ["Engineering & product development", "工程與產品開發", "工程与产品开发", "الهندسة وتطوير المنتجات"], body: ["Hardware engineering, firmware, prototyping, testing and product development in China.", "在中國進行硬件工程、韌體、原型製作、測試與產品開發。", "在中国进行硬件工程、固件、原型制作、测试与产品开发。", "هندسة الأجهزة والبرمجيات الثابتة والنماذج الأولية والاختبار وتطوير المنتجات في الصين."] },
  { city: "Qatar", image: "/images/office-qatar.webp", role: ["Regional office", "區域辦公室", "区域办公室", "المكتب الإقليمي"], body: ["Regional project development and customer support for the Middle East.", "負責中東地區的項目發展與客戶支援。", "负责中东地区的项目发展与客户支持。", "تطوير المشاريع الإقليمية ودعم العملاء في الشرق الأوسط."] },
];

const deploymentGroups = [
  { key: "healthcare", title: ["Healthcare", "醫療", "医疗", "الرعاية الصحية"], names: ["Princess Margaret Hospital", "Queen Mary Hospital", "North Lantau Hospital", "MacLehose Medical Rehabilitation Centre", "TWGHs Fung Yiu King Hospital", "The Duchess of Kent Children’s Hospital at Sandy Bay", "Union Hospital"] },
  { key: "transport-public", title: ["Transport, Government & Education", "交通、政府及教育", "交通、政府及教育", "النقل والحكومة والتعليم"], names: ["Hong Kong International Airport", "Hong Kong West Kowloon Station", "EMSD Headquarters", "Immigration Department Headquarters", "OGCIO Office", "Efficiency Office", "sky100 Hong Kong Observation Deck", "Hong Kong University of Science and Technology", "Hong Kong Academy for Performing Arts"] },
  { key: "office", title: ["Offices & Commercial Properties", "辦公及商業物業", "办公及商业物业", "المكاتب والعقارات التجارية"], names: ["Three Garden Road", "IFC Mall", "ICC Offices", "Lee Garden One", "Towngas Office Tower", "HSBC Office Building", "Central Plaza", "Exchange Tower", "China Resources Building", "Tsim Sha Tsui Centre", "Skyline Tower", "Pacific Centre", "Jardine House", "Chater House", "Exchange Square", "York House", "East Town Building"] },
  { key: "retail", title: ["Retail & Mixed-Use", "零售及綜合用途", "零售及综合用途", "التجزئة والاستخدامات المختلطة"], names: ["Metroplaza", "MOKO", "V City", "V Walk", "apm", "East Point City", "Landmark North", "Chelsea Heights", "Tai Po Mega Mall", "Nan Fung Plaza", "Citywalk", "Olympian City", "Shatin Galleria", "China Hong Kong City", "Domain", "TMT Plaza Phase 1", "TMT Plaza Phase 2", "Regentville Shopping Mall", "Gold Coast Plaza"] },
  { key: "hospitality", title: ["Hospitality, Residential & Leisure", "酒店、住宅及休閒", "酒店、住宅及休闲", "الضيافة والسكن والترفيه"], names: ["Gold Coast Yacht & Country Club", "Gold Coast Residences Club House", "Gold Coast Hotel", "Royal Pacific Hotel", "The Staunton", "Commune Modern", "Waterside Plaza", "Grand Regentville", "Silver Sea Place", "Corinthia by the Sea", "Hong Kong Jockey Club Sha Tin Racecourse"] },
];

export default function CompanyPage() {
  return <main className="internal-page company-page">
    <SiteHeader active="company" />
    <section className="page-hero company-hero"><div className="page-hero-copy">
      <p className="eyebrow light"><Localized en="BUILDING AI AND IOT · SINCE 2019" tc="建築 AI 與 IOT · 始於 2019" sc="建筑 AI 与 IOT · 始于 2019" ar="ذكاء المباني وإنترنت الأشياء · منذ 2019" /></p>
      <h1><Localized en={<>Built close<br />to the building.</>} tc={<>貼近建築，<br />把系統做好。</>} sc={<>贴近建筑，<br />把系统做好。</>} ar={<>قريبون من المبنى،<br />من الفكرة إلى التشغيل.</>} /></h1>
      <p><Localized en="Blutech brings hardware, software, integration and delivery into one accountable team—so the idea on the drawing becomes a dependable system on site." tc="Blutech 把硬件、軟件、整合與交付集中於同一負責團隊，讓圖紙上的構思成為現場可靠運作的系統。" sc="Blutech 把硬件、软件、集成与交付集中于同一负责团队，让图纸上的构思成为现场可靠运行的系统。" ar="تجمع Blutech الأجهزة والبرمجيات والتكامل والتنفيذ ضمن فريق واحد مسؤول، لتحويل الفكرة على المخطط إلى نظام موثوق في الموقع." /></p>
    </div></section>

    <section className="company-story section-pad"><div>
      <p className="section-label"><Localized en="Our position" tc="我們的定位" sc="我们的定位" ar="موقعنا" /></p>
      <h2><Localized en="Technology earns its place when operations trust it." tc="營運團隊信任，科技才真正有價值。" sc="运营团队信任，科技才真正有价值。" ar="تثبت التقنية قيمتها عندما يثق بها فريق التشغيل." /></h2>
    </div><div>
      <p><Localized en="Buildings combine new and legacy systems, public and private spaces, design intent and daily pressure. Blutech works across these boundaries with a practical, outcome-led approach." tc="建築同時包含新舊系統、公私領域、設計理念與日常營運壓力。Blutech 以務實、成果導向的方式跨越這些界面。" sc="建筑同时包含新旧系统、公私领域、设计理念与日常运营压力。Blutech 以务实、成果导向的方式跨越这些界面。" ar="تجمع المباني بين أنظمة جديدة وقديمة ومساحات عامة وخاصة ورؤية تصميمية وضغوط تشغيل يومية. تعمل Blutech عبر هذه الحدود بأسلوب عملي يركز على النتائج." /></p>
      <p><Localized en="We design and deliver connected products, wireless infrastructure, operator software and technical integration for commercial property, aviation, healthcare, government and retail." tc="我們為商業物業、航空、醫療、政府及零售設計並交付聯網產品、無線基建、營運軟件與技術整合。" sc="我们为商业物业、航空、医疗、政府及零售设计并交付联网产品、无线基础设施、运营软件与技术集成。" ar="نصمم وننفذ المنتجات المتصلة والبنية اللاسلكية وبرمجيات التشغيل والتكامل التقني للعقارات التجارية والطيران والرعاية الصحية والقطاع الحكومي والتجزئة." /></p>
    </div></section>

    <section className="company-facts">
      <div><strong>2019</strong><span><Localized en="Founded in Hong Kong" tc="於香港成立" sc="于香港成立" ar="تأسست في هونغ كونغ" /></span></div>
      <div><strong>100+</strong><span><Localized en="Deployed locations" tc="個部署地點" sc="个部署地点" ar="موقعاً منفذاً" /></span></div>
      <div><strong>16+</strong><span><Localized en="Patented innovations" tc="項專利創新" sc="项专利创新" ar="ابتكاراً مسجلاً" /></span></div>
      <div><strong><Localized en="End-to-end" tc="端到端" sc="端到端" ar="متكامل" /></strong><span><Localized en="Hardware to daily operations" tc="由硬件至日常營運" sc="从硬件到日常运营" ar="من الأجهزة إلى التشغيل اليومي" /></span></div>
    </section>

    <section className="company-footprint section-pad">
      <div className="catalogue-heading"><div><p className="section-label"><Localized en="Three offices · one team" tc="三個辦公室 · 一個團隊" sc="三个办公室 · 一个团队" ar="ثلاثة مكاتب · فريق واحد" /></p><h2><Localized en="Designed, engineered and delivered together." tc="設計、工程與交付，協同完成。" sc="设计、工程与交付，协同完成。" ar="تصميم وهندسة وتنفيذ ضمن فريق واحد." /></h2></div><p><Localized en="Local project understanding stays connected to product development and regional delivery." tc="本地項目理解與產品開發及區域交付緊密連接。" sc="本地项目理解与产品开发及区域交付紧密连接。" ar="تبقى معرفة المشروع المحلية متصلة بتطوير المنتج والتنفيذ الإقليمي." /></p></div>
      <div className="office-grid">{offices.map((office, index) => <article key={office.city}><figure><img src={office.image} alt={`${office.city} office region`} /></figure><div><span>{String(index + 1).padStart(2, "0")}</span><small><Localized en={office.role[0]} tc={office.role[1]} sc={office.role[2]} ar={office.role[3]} /></small><h3>{office.city}</h3><p><Localized en={office.body[0]} tc={office.body[1]} sc={office.body[2]} ar={office.body[3]} /></p></div></article>)}</div>
    </section>

    <section className="deployment-network section-pad">
      <div className="catalogue-heading"><div><p className="section-label"><Localized en="SELECTED DEPLOYMENT NETWORK" tc="精選部署網絡" sc="精选部署网络" ar="شبكة مشاريع مختارة" /></p><h2><Localized en={<>Deployed across the buildings<br />Hong Kong relies on.</>} tc={<>服務香港日常運作所依賴的<br />重要建築。</>} sc={<>服务香港日常运行所依赖的<br />重要建筑。</>} ar={<>منتشرون في المباني<br />التي تعتمد عليها هونغ كونغ.</>} /></h2></div><p><Localized en="More than 100 real-world deployments span healthcare, transport, government, offices, retail, hospitality, education and residential properties. The names below are selected public deployment locations, not a claim that every site is a direct contracting client." tc="超過 100 個真實部署橫跨醫療、交通、政府、辦公、零售、酒店、教育及住宅物業。以下為可公開列出的精選部署地點，並不表示每個地點均為直接合約客戶。" sc="超过 100 个真实部署横跨医疗、交通、政府、办公、零售、酒店、教育及住宅物业。以下为可公开列出的精选部署地点，并不表示每个地点均为直接合同客户。" ar="تغطي أكثر من 100 عملية نشر فعلية الرعاية الصحية والنقل والحكومة والمكاتب والتجزئة والضيافة والتعليم والعقارات السكنية. الأسماء أدناه مواقع نشر عامة مختارة ولا تعني أن كل موقع عميل تعاقد مباشر." /></p></div>
      <div className="deployment-groups">{deploymentGroups.map((group) => <article key={group.key}><h3><Localized en={group.title[0]} tc={group.title[1]} sc={group.title[2]} ar={group.title[3]} /></h3><ul>{group.names.map((name) => <li key={name}>{name}</li>)}</ul></article>)}</div>
    </section>

    <section className="brand-boundary section-pad dark-section"><div><p className="section-label light"><Localized en="One group · clear roles" tc="同一集團 · 清晰分工" sc="同一集团 · 清晰分工" ar="مجموعة واحدة · أدوار واضحة" /></p><h2><Localized en={<>Blutech for buildings.<br />BLUTA for Fire Safety.</>} tc={<>Blutech 專注建築。<br />BLUTA 專注消防安全。</>} sc={<>Blutech 专注建筑。<br />BLUTA 专注消防安全。</>} ar={<>Blutech للمباني.<br />BLUTA للسلامة من الحريق.</>} /></h2></div><div className="brand-cards"><article><span>BLUTECH</span><h3><Localized en="Building AI and IoT" tc="建築 AI 與 IoT" sc="建筑 AI 与 IoT" ar="ذكاء المباني وإنترنت الأشياء" /></h3><p><Localized en="Sensing, displays, gateways, Halo dashboard, Core IoT platform, integration and delivery for owners and property operations." tc="為業主與物業營運提供感測、顯示、網關、Halo 儀表板、Core IoT 平台、整合與交付。" sc="为业主与物业运营提供传感、显示、网关、Halo 仪表板、Core IoT 平台、集成与交付。" ar="استشعار وشاشات وبوابات ولوحة Halo ومنصة Core والتكامل والتنفيذ للمالكين وفرق تشغيل العقارات." /></p></article><article><span>BLUTA</span><h3><Localized en="For Fire Safety" tc="消防安全" sc="消防安全" ar="للسلامة من الحريق" /></h3><p><Localized en="Fire-safety products and claims stay in a separate catalogue, with model-specific certification and compliance information." tc="消防產品與聲明獨立列於專屬目錄，並提供按型號劃分的認證與合規資料。" sc="消防产品与声明独立列于专属目录，并提供按型号划分的认证与合规资料。" ar="تبقى منتجات السلامة من الحريق ومطالباتها في كتالوج مستقل مع معلومات الاعتماد والامتثال الخاصة بكل طراز." /></p><a className="brand-link" href="https://www.bluta.io/en/" target="_blank" rel="noopener noreferrer"><Localized en="Explore BLUTA fire safety" tc="前往 BLUTA 消防安全網站" sc="前往 BLUTA 消防安全网站" ar="استكشف BLUTA للسلامة من الحريق" /> ↗</a></article></div></section>
    <PageCta /><SiteFooter />
  </main>;
}
