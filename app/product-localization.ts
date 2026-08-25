import type { Product, ProductFact } from "./product-catalogue";
import { toSimplified } from "./project-localization";

const categoryLabels = {
  "Display & Interface": { tc: "顯示與資訊介面", ar: "العرض والواجهات" },
  "Occupancy & Spatial": { tc: "佔用與空間感測", ar: "الإشغال والاستشعار المكاني" },
  "Smart Lighting": { tc: "智慧照明", ar: "الإضاءة الذكية" },
  "Facility Operations": { tc: "設施營運", ar: "تشغيل المرافق" },
  Environmental: { tc: "環境監測", ar: "المراقبة البيئية" },
  "Water Leakage": { tc: "漏水監測", ar: "مراقبة تسرب المياه" },
  Waste: { tc: "廢物管理", ar: "إدارة النفايات" },
  Gateway: { tc: "物聯網網關", ar: "بوابات إنترنت الأشياء" },
  "Smart Washroom": { tc: "智慧洗手間", ar: "دورات المياه الذكية" },
} as const;

const tcPurpose: Record<string, string> = {
  "bt102-smart-info-station": "把即時樓宇與物聯網數據帶到公共空間的壁掛式建築資訊介面。",
  "bt101-smart-signage": "在使用位置清晰呈現即時設施資訊與項目內容的精簡連接顯示器。",
  "bt103-tv-box": "把合適的客戶顯示器轉化為可管理樓宇資訊終端的 Android 多媒體裝置。",
  "bt104-smart-panel": "用於本地狀態、資訊及設施互動的精簡觸控介面。",
  "bt107-smart-display": "用於即時設施狀態及樓宇資訊的 43 吋管理顯示器。",
  "bt338-heatmap-fusion": "融合熱能與 60 GHz 毫米波，在不產生可識別影像下提供更豐富的活動判斷。",
  "bt337-heatmap-pro": "以 16×12 熱能陣列提供保障私隱的佔用與空間資訊。",
  "bt303-heatmap-8x8": "以成熟的 8×8 熱能網格提供私隱友善佔用訊號。",
  "bt321-pir-motion-sensor": "可直接觸發指定 Bluetooth 照明群組的 PIR 動作感測器。",
  "blutech-smart-lighting-control": "把佔用、日光與時間表結合樓宇可視性的邊緣優先照明控制系統。",
  "bt311-service-button": "用於協助、清潔流程及自訂樓宇事件的可配置 LoRaWAN 按鈕。",
  "bt315-dcr": "把門鎖或乾接點狀態轉化為連接設施訊號的無線接收器。",
  "bt316-dcc": "在現場執行已配置接點或設備動作的本地控制器。",
  "bt317-alarm-buzzer": "用於安全與營運流程的本地聲光警報裝置。",
  "bt306-iaq5": "監測溫度、濕度及 PM2.5 的室內空氣質素感測器。",
  "bt336-smoking-detection": "為營運團隊提供吸煙事件訊號的專用感測器。",
  "bt333-zone-water-leakage": "監測指定區域水分並把漏水事件傳送至營運流程的感測器。",
  "bt339-bludrop": "用於細小或重點位置的精簡漏水感測裝置。",
  "bt353-smart-bin-sensor": "把垃圾桶填充狀態轉化為清潔及收集資訊的感測器。",
  "bt802-lorawan-gateway": "把樓宇內 LoRaWAN 設備連接至 Blutech Core 的室內網關。",
  "bt803-lorawan-gateway-ip68": "為戶外或較嚴苛位置而設的 IP68 LoRaWAN 網關。",
  "bt2035-vacancy-indicator": "在使用位置清晰顯示廁格可用狀態的指示器。",
  "bt3022-door-contact-triangle": "以三角形外殼安裝的門狀態感測器，適合廁格及精簡位置。",
  "bt3023-door-lock-sensor": "把門鎖狀態轉化為可靠佔用或可用訊號的感測器。",
};

const arPurpose: Record<string, string> = {
  "bt102-smart-info-station": "واجهة معلومات معمارية مثبتة على الحائط تعرض بيانات المبنى وإنترنت الأشياء في المساحة العامة.",
  "bt101-smart-signage": "شاشة متصلة مدمجة تقدم معلومات المرافق والمحتوى عند نقطة الاستخدام.",
  "bt103-tv-box": "جهاز Android متعدد الوسائط يحول شاشة مناسبة إلى نقطة معلومات مُدارة للمبنى.",
  "bt104-smart-panel": "واجهة لمس مدمجة للحالة المحلية والمعلومات والتفاعل مع المرافق.",
  "bt107-smart-display": "شاشة مُدارة قياس 43 بوصة لحالة المرافق ومعلومات المبنى.",
  "bt338-heatmap-fusion": "دمج حراري وموجات مليمترية 60 GHz لفهم النشاط من دون صور قابلة للتعريف.",
  "bt337-heatmap-pro": "مصفوفة حرارية 16×12 لرؤية الإشغال والمساحة مع الحفاظ على الخصوصية.",
  "bt303-heatmap-8x8": "شبكة حرارية 8×8 مثبتة لتوليد إشارات إشغال تحترم الخصوصية.",
  "bt321-pir-motion-sensor": "مستشعر حركة PIR يشغل مجموعة إضاءة Bluetooth محددة مباشرة.",
  "blutech-smart-lighting-control": "تحكم إضاءة يبدأ من الحافة ويجمع الإشغال وضوء النهار والجداول مع رؤية على مستوى المبنى.",
  "bt311-service-button": "زر LoRaWAN قابل للتهيئة لطلبات المساعدة والتنظيف وأحداث المبنى.",
  "bt315-dcr": "مستقبل لاسلكي يحول حالة القفل أو التلامس الجاف إلى إشارة مرافق متصلة.",
  "bt316-dcc": "وحدة تحكم محلية تنفذ إجراء تلامس أو جهاز مهيأ في الموقع.",
  "bt317-alarm-buzzer": "إنذار صوتي وضوئي محلي لسير عمل السلامة والتشغيل.",
  "bt306-iaq5": "مستشعر جودة هواء داخلي لدرجة الحرارة والرطوبة وPM2.5.",
  "bt336-smoking-detection": "مستشعر مخصص يوفر حدث تدخين لفرق التشغيل.",
  "bt333-zone-water-leakage": "مستشعر يراقب الرطوبة في منطقة محددة ويرسل حدث التسرب إلى سير العمل.",
  "bt339-bludrop": "جهاز مدمج لكشف تسرب المياه في النقاط الصغيرة أو الحرجة.",
  "bt353-smart-bin-sensor": "مستشعر يحول امتلاء الحاوية إلى معلومات للتنظيف والجمع.",
  "bt802-lorawan-gateway": "بوابة داخلية تربط أجهزة LoRaWAN في المبنى بـBlutech Core.",
  "bt803-lorawan-gateway-ip68": "بوابة LoRaWAN بدرجة IP68 للمواقع الخارجية أو الأكثر صعوبة.",
  "bt2035-vacancy-indicator": "مؤشر واضح لحالة توافر المقصورة عند نقطة الاستخدام.",
  "bt3022-door-contact-triangle": "مستشعر حالة باب بهيكل مثلث للمقصورات والمواقع المدمجة.",
  "bt3023-door-lock-sensor": "مستشعر يحول حالة قفل الباب إلى إشارة إشغال أو توافر موثوقة.",
};

const categoryApplications: Record<string, { tc: string[]; ar: string[] }> = {
  "Display & Interface": { tc: ["公共設施資訊", "訪客與租戶溝通", "即時樓宇狀態", "營運資訊顯示"], ar: ["معلومات المرافق العامة", "تواصل الزوار والمستأجرين", "حالة المبنى المباشرة", "عرض معلومات التشغيل"] },
  "Occupancy & Spatial": { tc: ["佔用分析", "人流與空間使用", "私隱敏感空間", "照明或 HVAC 輸入"], ar: ["تحليل الإشغال", "الحركة واستخدام المساحة", "المساحات الحساسة للخصوصية", "مدخلات الإضاءة أو HVAC"] },
  "Smart Lighting": { tc: ["走廊及升降機大堂", "共用空間", "日光回應區域", "改造項目"], ar: ["الممرات وردهات المصاعد", "المساحات المشتركة", "المناطق المستجيبة لضوء النهار", "مشاريع التحديث"] },
  "Facility Operations": { tc: ["服務及協助流程", "本地警報", "門及設備狀態", "授權營運控制"], ar: ["سير عمل الخدمة والمساعدة", "التنبيه المحلي", "حالة الأبواب والأجهزة", "التحكم التشغيلي المصرح"] },
  Environmental: { tc: ["室內空氣質素", "舒適度監測", "通風協調", "ESG 數據"], ar: ["جودة الهواء الداخلي", "مراقبة الراحة", "تنسيق التهوية", "بيانات ESG"] },
  "Water Leakage": { tc: ["機房及設備區", "洗手間及茶水間", "重點漏水位置", "維修警報"], ar: ["غرف المعدات", "دورات المياه والمطابخ", "نقاط التسرب الحرجة", "تنبيهات الصيانة"] },
  Waste: { tc: ["垃圾桶填充狀態", "按需要收集", "清潔流程", "設施報告"], ar: ["حالة امتلاء الحاوية", "الجمع حسب الحاجة", "سير عمل التنظيف", "تقارير المرافق"] },
  Gateway: { tc: ["LoRaWAN 樓宇網絡", "室內或戶外連接", "設備管理", "Core 上行連接"], ar: ["شبكة LoRaWAN للمبنى", "اتصال داخلي أو خارجي", "إدارة الأجهزة", "الربط مع Core"] },
  "Smart Washroom": { tc: ["廁格可用狀態", "智慧洗手間", "乘客及訪客資訊", "營運狀態"], ar: ["توافر المقصورات", "دورات المياه الذكية", "معلومات الركاب والزوار", "الحالة التشغيلية"] },
};

const factLabels: Record<string, { tc: string; ar: string }> = {
  "Backhaul": { tc: "上行連接", ar: "الربط الخلفي" }, "Ceiling height": { tc: "天花高度", ar: "ارتفاع السقف" }, "Central connection": { tc: "中央連接", ar: "الاتصال المركزي" }, Connection: { tc: "連接", ar: "الاتصال" }, "Core parameters": { tc: "Core 參數", ar: "معلمات Core" }, Dimensions: { tc: "尺寸", ar: "الأبعاد" }, Enclosure: { tc: "外殼", ar: "الهيكل" }, "Image output": { tc: "影像輸出", ar: "مخرجات الصورة" }, "Indicative detection area": { tc: "參考偵測範圍", ar: "منطقة الكشف الإرشادية" }, "Light options": { tc: "燈光選項", ar: "خيارات الإضاءة" }, LoRaWAN: { tc: "LoRaWAN", ar: "LoRaWAN" }, "Local response": { tc: "本地回應", ar: "الاستجابة المحلية" }, "Open-space range": { tc: "開放空間範圍", ar: "مدى المساحة المفتوحة" }, Power: { tc: "電源", ar: "الطاقة" }, "Preferred ceiling": { tc: "建議天花高度", ar: "ارتفاع السقف المفضل" }, Radar: { tc: "雷達", ar: "الرادار" }, "Thermal array": { tc: "熱能陣列", ar: "المصفوفة الحرارية" }, "Typical power": { tc: "一般功率", ar: "الطاقة النموذجية" }, "Typical sequence": { tc: "一般控制次序", ar: "التسلسل النموذجي" },
};

const factValues: Record<string, { tc: string; ar: string }> = {
  "No conventional camera image": { tc: "不產生傳統攝影機影像", ar: "لا تُنتج صورة كاميرا تقليدية" },
  "2.2 × 3.5 m at 2.5 m; 2.7 × 3.7 m at 2.7 m; 3.2 × 3.9 m at 3.0 m": { tc: "天花高度 2.5 m：2.2 × 3.5 m；2.7 m：2.7 × 3.7 m；3.0 m：3.2 × 3.9 m", ar: "2.2 × 3.5 م عند 2.5 م؛ 2.7 × 3.7 م عند 2.7 م؛ 3.2 × 3.9 م عند 3.0 م" },
  "Bluetooth edge control without a cloud round trip": { tc: "Bluetooth 邊緣控制，毋須等待雲端往返", ar: "تحكم Bluetooth على الحافة من دون انتظار اتصال سحابي" },
  "LoRaWAN through 4G or IP gateway to Blutech Core": { tc: "LoRaWAN 經 4G 或 IP 網關連接 Blutech Core", ar: "LoRaWAN عبر بوابة 4G أو IP إلى Blutech Core" },
  "Occupied, standby, long-vacancy and scheduled states configured per project": { tc: "按項目設定有人、待機、長時間空置及時間表狀態", ar: "حالات الإشغال والاستعداد والشغور الطويل والجدولة تُضبط حسب المشروع" },
  "Temperature, humidity and PM2.5": { tc: "溫度、濕度及 PM2.5", ar: "درجة الحرارة والرطوبة وPM2.5" },
  "AS923, 8 channels, up to 64 sensors": { tc: "AS923、8 個頻道、最多 64 個感測器", ar: "AS923، ثماني قنوات، حتى 64 مستشعراً" },
  "10/100 Ethernet with PoE, 2.4 GHz Wi-Fi; cellular on BT802C": { tc: "10/100 Ethernet（PoE）、2.4 GHz Wi-Fi；BT802C 支援流動網絡", ar: "Ethernet 10/100 مع PoE وWi-Fi بتردد 2.4 GHz؛ اتصال خلوي في BT802C" },
  "166 × 127 × 36 mm plastic, IP30, wall mount": { tc: "166 × 127 × 36 mm 塑膠外殼、IP30、壁掛安裝", ar: "هيكل بلاستيكي 166 × 127 × 36 مم، IP30، تثبيت جداري" },
  "Up to 500 m under stated conditions": { tc: "在指定條件下最遠 500 m", ar: "حتى 500 م ضمن الظروف المحددة" },
  "RGB combinations or 4000 K white on/off": { tc: "RGB 組合或 4000 K 白光開／關", ar: "تركيبات RGB أو ضوء أبيض 4000 K تشغيل/إيقاف" },
  "Bluetooth control and LoRa status": { tc: "Bluetooth 控制及 LoRa 狀態回傳", ar: "تحكم Bluetooth وحالة عبر LoRa" },
};

export function localizeCategory(category: string, locale?: string) {
  if (locale === "zh-hant") return categoryLabels[category as keyof typeof categoryLabels]?.tc || category;
  if (locale === "zh-hans") return toSimplified(categoryLabels[category as keyof typeof categoryLabels]?.tc || category);
  if (locale === "ar") return categoryLabels[category as keyof typeof categoryLabels]?.ar || category;
  return category;
}

function localizeFacts(facts: ProductFact[] | undefined, locale?: string) {
  if (!facts || !locale) return facts;
  return facts.map((fact) => ({
    label: locale === "ar" ? factLabels[fact.label]?.ar || fact.label : locale === "zh-hans" ? toSimplified(factLabels[fact.label]?.tc || fact.label) : factLabels[fact.label]?.tc || fact.label,
    value: locale === "ar" ? factValues[fact.value]?.ar || fact.value : locale === "zh-hans" ? toSimplified(factValues[fact.value]?.tc || fact.value) : factValues[fact.value]?.tc || fact.value,
  }));
}

export function localizeProduct(product: Product, locale?: string): Product {
  if (!locale || !["zh-hant", "zh-hans", "ar"].includes(locale)) return product;
  const sourceCategory = product.category;
  const isArabic = locale === "ar";
  const purpose = isArabic ? arPurpose[product.slug] : locale === "zh-hans" ? toSimplified(tcPurpose[product.slug]) : tcPurpose[product.slug];
  const applications = isArabic ? categoryApplications[sourceCategory]?.ar : locale === "zh-hans" ? toSimplified(categoryApplications[sourceCategory]?.tc || []) : categoryApplications[sourceCategory]?.tc;
  const content = isArabic ? {
    outcome: "يضيف هذا المنتج إشارة أو استجابة واضحة إلى نظام المبنى من دون تعقيد غير ضروري.",
    description: `${purpose} يُهيأ ضمن بنية Blutech وفق ظروف الموقع وسير العمل المطلوب، مع تأكيد الطراز والواجهات والتركيب في وثيقة المشروع المعتمدة.`,
    deployment: "يحدد موضع الجهاز واتصاله ودوره التشغيلي وفق الموقع الفعلي ونطاق المشروع المعتمد.",
    installation: "تؤكد الطاقة والشبكة والتثبيت والتهيئة والأداء النهائي مع فريق المشروع قبل التنفيذ.",
    features: [{ title: "إشارة مفيدة", body: purpose }, { title: "تشغيل متصل", body: "يمكن ربط الحالة والأحداث بـBlutech Core وعرضها في Halo أو استخدامها في الاستجابة المحلية حسب المشروع." }, { title: "تسليم محدد للموقع", body: "تؤكد الواجهات والإعدادات والتركيب مقابل الحالة الفعلية ووثيقة المنتج الحالية." }],
    flow: ["إشارة الموقع", "الجهاز أو منطق الحافة", "Blutech Core", "Halo أو الاستجابة"],
  } : {
    outcome: locale === "zh-hans" ? "为楼宇系统加入清晰信号或响应，避免不必要的复杂性。" : "為樓宇系統加入清晰訊號或回應，避免不必要的複雜性。",
    description: `${purpose}${locale === "zh-hans" ? "产品会按现场条件和所需流程配置到 Blutech 架构，最终型号、接口及安装方式以获批项目文件为准。" : "產品會按現場條件和所需流程配置到 Blutech 架構，最終型號、介面及安裝方式以獲批項目文件為準。"}`,
    deployment: locale === "zh-hans" ? "设备位置、连接方式及运营角色会按实际现场和获批项目范围确定。" : "設備位置、連接方式及營運角色會按實際現場和獲批項目範圍確定。",
    installation: locale === "zh-hans" ? "电源、网络、固定、配置及最终性能会在实施前与项目团队确认。" : "電源、網絡、固定、配置及最終性能會在實施前與項目團隊確認。",
    features: locale === "zh-hans" ? [{ title: "实用信号", body: purpose }, { title: "连接运营", body: "按项目需要，状态与事件可连接至 Blutech Core，并在 Halo 显示或用于本地响应。" }, { title: "按现场交付", body: "接口、设置及安装会按实际现场和现行产品文件确认。" }] : [{ title: "實用訊號", body: purpose }, { title: "連接營運", body: "按項目需要，狀態與事件可連接至 Blutech Core，並在 Halo 顯示或用於本地回應。" }, { title: "按現場交付", body: "介面、設定及安裝會按實際現場和現行產品文件確認。" }],
    flow: locale === "zh-hans" ? ["现场信号", "设备或边缘逻辑", "Blutech Core", "Halo 或响应"] : ["現場訊號", "設備或邊緣邏輯", "Blutech Core", "Halo 或回應"],
  };
  return {
    ...product,
    category: localizeCategory(sourceCategory, locale),
    summary: purpose,
    outcome: content.outcome,
    description: content.description,
    deployment: content.deployment,
    installation: content.installation,
    features: content.features,
    applications: applications || product.applications,
    flow: content.flow,
    facts: localizeFacts(product.facts, locale),
    imageNote: product.imageNote ? (isArabic ? "صورة تطبيقية توضح الاستخدام والطابع المعماري؛ يؤكد التسليم المعتمد الشكل والتركيب النهائيين." : locale === "zh-hans" ? "应用图片说明用途与建筑语言；最终外形及安装以获批提交文件为准。" : "應用圖片說明用途與建築語言；最終外形及安裝以獲批提交文件為準。") : undefined,
  };
}
