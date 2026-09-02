import type { Metadata } from "next";
import { languageAlternates } from "../localized-metadata";
import { Arrow, PageCta, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { toSimplified } from "../project-localization";

export const metadata: Metadata = { title: "Smart Building Solutions — Blutech", description: "Outcome-led building AI and IoT solutions for property owners, facility teams, architects and consultants.", alternates:{canonical:"/solutions",languages:languageAlternates("/solutions")} };

const solutionsEn = [
  ["01", "Smart washroom", "Live vacancy, service demand and facility conditions for a smoother occupant experience and more focused operations.", "Vacancy · Service · IAQ · Leakage"],
  ["02", "Privacy-preserving occupancy", "Understand presence, utilisation and circulation without putting conventional cameras into sensitive spaces.", "Thermal · mmWave · Contacts"],
  ["03", "Accessible-space safety", "Detect long-stay, no-motion and project-defined safety conditions so the right team can respond sooner.", "Privacy first · Local alert · Workflow"],
  ["04", "Indoor air & HVAC", "Turn live environmental data into clearer comfort management, reporting and informed building-system action.", "Trends · Thresholds · BMS"],
  ["05", "Water leakage", "Surface local and zone-based leakage early, identify where to respond and preserve finishes and equipment.", "Local sensing · Alerts · History"],
  ["06", "Smart waste", "Move from routine bin checks to collection based on actual fill conditions.", "Fill level · Routing · Reporting"],
  ["07", "Wireless smart lighting", "Connect lighting actions to real space use with retrofit-aware wireless controls and integration.", "Occupancy · Controls · Open integration"],
  ["08", "Building IoT retrofit", "Add a coherent data and operations layer without discarding systems that still work.", "LoRaWAN · Gateways · APIs"],
];

const solutionsTc = [
  ["01", "智慧洗手間", "以即時可用狀態、服務需求及設施狀況，帶來更順暢的使用體驗及更集中營運。", "可用狀態 · 服務 · IAQ · 漏水"],
  ["02", "保障私隱的佔用感測", "在敏感空間不使用傳統攝影機，也能了解人員存在、使用率及流動。", "熱能 · 毫米波 · 接點"],
  ["03", "無障礙空間安全", "偵測逗留過久、無動作及項目定義的安全狀況，讓合適團隊更早回應。", "私隱優先 · 本地警報 · 流程"],
  ["04", "室內空氣與 HVAC", "把即時環境數據轉化為清晰舒適度管理、報告及樓宇系統行動。", "趨勢 · 門檻 · BMS"],
  ["05", "漏水監測", "及早顯示局部或區域漏水，指出回應位置並保護裝修與設備。", "本地感測 · 警報 · 記錄"],
  ["06", "智慧廢物管理", "由例行垃圾桶檢查，轉為按實際填充狀況安排收集。", "填充水平 · 路線 · 報告"],
  ["07", "無線智慧照明", "以適合改造的無線控制及整合，把照明動作連接到真實空間使用。", "佔用 · 控制 · 開放整合"],
  ["08", "樓宇 IoT 改造", "在保留仍然有效的既有系統下，加入一致的數據與營運層。", "LoRaWAN · 網關 · API"],
];

const solutionsAr = [
  ["01", "دورات المياه الذكية", "حالة التوافر وطلب الخدمة وظروف المرفق مباشرة لتجربة أفضل وتشغيل أكثر تركيزاً.", "التوافر · الخدمة · IAQ · التسرب"],
  ["02", "إشغال يحفظ الخصوصية", "فهم الوجود والاستخدام والحركة من دون كاميرات تقليدية في المساحات الحساسة.", "حراري · موجات مليمترية · تلامس"],
  ["03", "سلامة المساحات المهيأة", "كشف البقاء الطويل وانعدام الحركة وحالات السلامة المحددة للمشروع كي يستجيب الفريق أسرع.", "الخصوصية أولاً · تنبيه محلي · سير عمل"],
  ["04", "الهواء الداخلي وHVAC", "تحويل البيانات البيئية المباشرة إلى إدارة أوضح للراحة والتقارير وإجراء أنظمة المبنى.", "اتجاهات · حدود · BMS"],
  ["05", "تسرب المياه", "إظهار التسرب المحلي أو المناطقي مبكراً وتحديد موضع الاستجابة وحماية التشطيبات والمعدات.", "استشعار محلي · تنبيهات · سجل"],
  ["06", "النفايات الذكية", "الانتقال من الفحص الدوري إلى الجمع حسب حالة الامتلاء الفعلية.", "مستوى الامتلاء · المسار · التقارير"],
  ["07", "الإضاءة الذكية اللاسلكية", "ربط الإضاءة باستخدام المساحة الفعلي عبر تحكم لاسلكي مناسب للتحديث وتكامل مفتوح.", "الإشغال · التحكم · التكامل المفتوح"],
  ["08", "تحديث IoT للمبنى", "إضافة طبقة بيانات وتشغيل متماسكة من دون التخلص من الأنظمة التي ما زالت تعمل.", "LoRaWAN · البوابات · API"],
];

const solutionsEs = [
  ["01", "Baños inteligentes", "Disponibilidad, demanda de servicio y condiciones de las instalaciones en tiempo real para mejorar la experiencia y enfocar la operación.", "Disponibilidad · Servicio · IAQ · Fugas"],
  ["02", "Ocupación con privacidad", "Comprenda presencia, uso y circulación sin instalar cámaras convencionales en espacios sensibles.", "Térmico · mmWave · Contactos"],
  ["03", "Seguridad en espacios accesibles", "Detecte estancias prolongadas, falta de movimiento y condiciones de seguridad definidas para que el equipo adecuado responda antes.", "Privacidad · Alerta local · Flujo"],
  ["04", "Aire interior y HVAC", "Convierta datos ambientales en tiempo real en una gestión más clara del confort, informes y acciones informadas del edificio.", "Tendencias · Umbrales · BMS"],
  ["05", "Fugas de agua", "Detecte pronto fugas locales o por zonas, identifique dónde actuar y proteja acabados y equipos.", "Detección local · Alertas · Historial"],
  ["06", "Residuos inteligentes", "Pase de revisar contenedores de forma rutinaria a recogerlos según su nivel real de llenado.", "Nivel de llenado · Rutas · Informes"],
  ["07", "Iluminación inteligente inalámbrica", "Vincule la iluminación al uso real del espacio con controles inalámbricos e integración aptos para reformas.", "Ocupación · Control · Integración abierta"],
  ["08", "Modernización IoT del edificio", "Añada una capa coherente de datos y operaciones sin desechar los sistemas que aún funcionan.", "LoRaWAN · Gateways · API"],
];

const pageCopy = {
  en: { eyebrow:"FOR OWNERS & PROPERTY TEAMS", title:"Better operation is the smartest feature.", intro:"Start with an operational problem the team can see, measure and improve. Blutech brings sensing, connectivity and software together around that outcome.", explore:"Explore solutions", decisions:[["OWNER","Protect value"],["PROPERTY TEAM","Act faster"],["OCCUPANT","Feel the difference"],["CONSULTANT","Specify clearly"]], library:"OUTCOME LIBRARY", libraryTitle:<>One building.<br />Eight useful moves.</>, libraryText:"Each solution is assembled from current products, Blutech software and the interfaces appropriate to the property.", path:"A PRACTICAL PATH", pathTitle:"Prove value before scaling.", steps:[["Frame the outcome","Agree the operational question, present baseline and success measure."],["Pilot in context","Validate signal quality, workflow fit and integration in a live area."],["Measure the change","Compare response, utilisation, service or risk indicators against baseline."],["Scale with a standard","Document the repeatable design for the property or portfolio."]], solutions:solutionsEn },
  tc: { eyebrow:"為業主與物業團隊而設", title:"更好的營運，才是最聰明的功能。", intro:"由團隊能夠看見、量度及改善的營運問題開始。Blutech 圍繞成果整合感測、連接與軟件。", explore:"查看解決方案", decisions:[["業主","保護價值"],["物業團隊","更快行動"],["使用者","感受改善"],["顧問","清楚指定"]], library:"成果方案庫", libraryTitle:<>一棟建築。<br />八個實用方向。</>, libraryText:"每個方案都由現行產品、Blutech 軟件及適合物業的介面組成。", path:"務實路徑", pathTitle:"先證明價值，再擴大規模。", steps:[["界定成果","確認營運問題、目前基準及成功指標。"],["在現場試行","於實際營運區域驗證訊號質素、流程配合及整合。"],["量度改變","把回應、使用率、服務或風險指標與基準比較。"],["以標準擴展","記錄可在物業或組合重複使用的設計。"]], solutions:solutionsTc },
  ar: { eyebrow:"للمالكين وفرق العقار", title:"التشغيل الأفضل هو أذكى ميزة.", intro:"ابدأ بمشكلة تشغيلية يستطيع الفريق رؤيتها وقياسها وتحسينها. تجمع Blutech الاستشعار والاتصال والبرمجيات حول هذه النتيجة.", explore:"استكشف الحلول", decisions:[["المالك","حماية القيمة"],["فريق العقار","العمل أسرع"],["المستخدم","الشعور بالفرق"],["الاستشاري","تحديد واضح"]], library:"مكتبة النتائج", libraryTitle:<>مبنى واحد.<br />ثماني خطوات مفيدة.</>, libraryText:"يتكون كل حل من المنتجات الحالية وبرمجيات Blutech والواجهات المناسبة للعقار.", path:"مسار عملي", pathTitle:"أثبت القيمة قبل التوسع.", steps:[["حدد النتيجة","اتفق على السؤال التشغيلي وخط الأساس ومقياس النجاح."],["جرّب في السياق","تحقق من جودة الإشارة وملاءمة سير العمل والتكامل في منطقة عاملة."],["قس التغيير","قارن الاستجابة والاستخدام والخدمة أو مؤشرات المخاطر بخط الأساس."],["توسع بمعيار","وثق التصميم القابل للتكرار للعقار أو المحفظة."]], solutions:solutionsAr },
  es: { eyebrow:"PARA PROPIETARIOS Y EQUIPOS DE GESTIÓN", title:"Una mejor operación es la función más inteligente.", intro:"Empiece con un problema operativo que el equipo pueda ver, medir y mejorar. Blutech reúne detección, conectividad y software en torno a ese resultado.", explore:"Explorar soluciones", decisions:[["PROPIETARIO","Proteger el valor"],["EQUIPO DE GESTIÓN","Actuar antes"],["OCUPANTE","Notar la mejora"],["CONSULTOR","Especificar con claridad"]], library:"BIBLIOTECA DE RESULTADOS", libraryTitle:<>Un edificio.<br />Ocho mejoras útiles.</>, libraryText:"Cada solución reúne productos actuales, software Blutech y las interfaces adecuadas para el inmueble.", path:"UNA RUTA PRÁCTICA", pathTitle:"Demuestre el valor antes de escalar.", steps:[["Definir el resultado","Acordar la pregunta operativa, la referencia actual y la medida de éxito."],["Probar en contexto","Validar la calidad de la señal, el flujo y la integración en una zona activa."],["Medir el cambio","Comparar respuesta, uso, servicio o indicadores de riesgo con la referencia."],["Escalar con un estándar","Documentar un diseño repetible para el inmueble o la cartera."]], solutions:solutionsEs },
};

export default async function SolutionsPage({ params }: { params?: Promise<{ locale?: string }> } = {}) {
  const locale=(await params)?.locale; const base=locale==="zh-hant"?pageCopy.tc:locale==="zh-hans"?toSimplified(pageCopy.tc):locale==="ar"?pageCopy.ar:locale==="es"?pageCopy.es:pageCopy.en;
  return <main className="internal-page">
    <SiteHeader active="solutions" />
    <section className="page-hero solutions-hero"><div className="page-hero-copy"><p className="eyebrow light">{base.eyebrow}</p><h1>{base.title}</h1><p>{base.intro}</p><a className="button button-light" href="#solutions">{base.explore} <Arrow /></a></div></section>
    <section className="decision-band">{base.decisions.map(([role,value])=><div key={role}><span>{role}</span><b>{value}</b></div>)}</section>
    <section id="solutions" className="solution-list section-pad"><div className="catalogue-heading"><div><p className="eyebrow">{base.library}</p><h2>{base.libraryTitle}</h2></div><p>{base.libraryText}</p></div><div className="solution-grid">{base.solutions.map(([number,title,text,tags]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><b>{tags}</b></article>)}</div></section>
    <section className="pilot-path dark-section section-pad"><div><p className="eyebrow light">{base.path}</p><h2>{base.pathTitle}</h2></div><ol>{base.steps.map(([title,text],index)=><li key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
    <PageCta /><SiteFooter />
  </main>;
}
