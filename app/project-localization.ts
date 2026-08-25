import type { Project } from "./project-catalogue";

type ProjectTranslation = Pick<Project, "name" | "sector" | "location" | "summary" | "challenge" | "delivery" | "outcome" | "benefits" | "flow" | "facts">;

const tc: Record<string, ProjectTranslation> = {
  "three-garden-road": {
    name: "花園道三號", sector: "甲級商廈", location: "中環",
    summary: "超過 1,000 部連接設備支援智慧洗手間、漏水監測、室內空氣質素、按佔用情況協調 HVAC，以及 ESG 報告整合。",
    challenge: "在持續營運的甲級商廈建立一個可靠的營運層，同時保持感測設備低調、保障敏感空間私隱，並把有用數據接入既有物業流程。",
    delivery: ["覆蓋物業的私隱友善智慧洗手間感測", "室內空氣質素與漏水監測", "把佔用數據接入已運行的 HVAC 工作流程", "Halo 與 Core 可視性及 ESG 報告整合"],
    outcome: "大型連接設備網絡讓物業團隊更清楚掌握即時狀況，協調佔用與 HVAC 營運，並為持續 ESG 報告提供可用數據。",
    benefits: [{ title: "統一營運視圖", body: "把智慧洗手間、空氣質素及漏水資訊整合成授權物業團隊可使用的連接視圖。" }, { title: "按佔用情況協調 HVAC", body: "即時佔用訊號直接用於 HVAC 營運流程，而不是停留在儀表板。" }, { title: "可供報告的樓宇數據", body: "具追溯營運背景的連接記錄支援物業 ESG 報告整合。" }],
    flow: ["佔用、IAQ 與漏水訊號", "LoRaWAN 樓宇網絡", "Core 與 HVAC 整合", "Halo 與 ESG 報告"],
    facts: [{ label: "連接設備", value: "1,000+" }, { label: "HVAC 協調", value: "已運行" }, { label: "ESG 報告", value: "已整合" }],
  },
  "hong-kong-international-airport": {
    name: "香港國際機場", sector: "航空", location: "香港",
    summary: "為高人流公共基建提供機場範圍的智慧洗手間及無障礙洗手間安全感測、平面圖視圖、警報、儀表板與報告。",
    challenge: "在高人流、重視私隱的公共設施中提供可靠佔用與安全訊號，並讓營運團隊清楚掌握分散於多個空間的狀況。",
    delivery: ["無攝影機的熱能與毫米波感測", "廁格狀態、逗留過久與無動作事件流程", "按平面圖呈現狀態與營運警報", "透過項目網關收集 LoRaWAN 數據"],
    outcome: "私隱友善的設施層把現場事件轉化為清晰狀態、警報與營運跟進。",
    benefits: [{ title: "更早掌握安全事件", body: "逗留過久或無動作事件可更早顯示，協助團隊安排無障礙設施檢查。" }, { title: "適合敏感空間的私隱設計", body: "低解像熱能與毫米波感測提供有用活動訊號，不產生傳統攝影機影像。" }, { title: "統一營運視圖", body: "平面圖、狀態與警報把分散設施帶入清晰工作流程。" }],
    flow: ["私隱友善感測", "本地事件判斷", "LoRaWAN 連接", "營運視圖與回應"],
    facts: [{ label: "傳統攝影機", value: "0" }, { label: "安全事件類型", value: "2" }, { label: "營運視圖", value: "即時" }],
  },
  metroplaza: {
    name: "新都會廣場", sector: "商業及零售", location: "葵芳",
    summary: "超過 300 部連接設備支援智慧洗手間營運，並以佔用、溫度及濕度數據協調通風與 HVAC。",
    challenge: "連接大型分散式洗手間設備網絡，讓日常營運可使用佔用、溫度與濕度數據協調通風及 HVAC 流程。",
    delivery: ["物業內超過 300 部連接設備", "180 個廁格的連接佔用狀態", "溫度及濕度監測", "透過 Halo 與 Core 以佔用及環境數據協調通風與 HVAC"],
    outcome: "大型商場部署把分散的設施狀況整合成清晰營運視圖，並成為通風協調的實用輸入。",
    benefits: [{ title: "大型設備網絡可視性", body: "物業團隊可統一查看設備狀況，不再依賴逐層獨立檢查。" }, { title: "按需求協調", body: "佔用、溫度及濕度成為通風與 HVAC 流程的可用輸入。" }, { title: "一條軟件路徑", body: "Halo 呈現日常營運資訊，Core 管理設備與整合層。" }],
    flow: ["佔用與環境數據", "LoRaWAN 設備網絡", "Blutech Core", "Halo 與 HVAC 協調"],
    facts: [{ label: "連接設備", value: "300+" }, { label: "連接廁格", value: "180" }, { label: "軟件層", value: "Halo + Core" }],
  },
  "hong-kong-west-kowloon-station": {
    name: "香港西九龍站", sector: "交通", location: "西九龍",
    summary: "面向乘客及營運團隊的完整智慧洗手間系統，連接用品水平、漏水、佔用、照明及室內空氣質素資訊。",
    challenge: "在大型交通環境中同時向乘客提供清晰即時設施資訊，並把多種智慧洗手間訊號帶入可靠營運流程。",
    delivery: ["BT107 Smart Display 乘客資訊", "廁紙及梘液水平監測", "漏水與 Heatmap 感測", "透過 Halo 與 Core 連接照明及室內空氣質素資訊"],
    outcome: "乘客獲得更清晰設施資訊，營運團隊則可統一掌握用品、安全、環境與洗手間狀態。",
    benefits: [{ title: "清晰乘客資訊", body: "BT107 在乘客作出選擇的位置呈現即時設施狀況。" }, { title: "更早安排服務", body: "用品水平、漏水及佔用事件協助團隊按需要補充和跟進。" }, { title: "統一連接流程", body: "Halo 與 Core 分別協調營運視圖及技術設備網絡。" }],
    flow: ["設施與用品訊號", "Blutech Core", "Halo 營運", "BT107 乘客顯示"],
    facts: [{ label: "主要顯示器", value: "BT107" }, { label: "營運層", value: "Halo + Core" }, { label: "系統視圖", value: "乘客 + 營運" }],
  },
  "olympian-city": {
    name: "奧海城", sector: "商業及零售", location: "西九龍",
    summary: "覆蓋三期的連接樓宇項目，監測漏水、噪音、煙霧、吸煙、佔用與環境狀況，並整合 BMS 及 HVAC。",
    challenge: "跨奧海城一、二、三期協調多種 IoT 監測，同時清楚區分獨立營運煙霧監測與法定火警系統。",
    delivery: ["漏水、噪音、溫度及濕度監測", "Heatmap 佔用與吸煙偵測", "獨立 IoT 煙霧監測，與法定火警系統分開", "三期 BMS 整合與 HVAC 優化"],
    outcome: "多感測營運層讓授權團隊統一掌握三期狀況，同時明確維持獨立 IoT 煙霧監測的正確角色。",
    benefits: [{ title: "三期統一視圖", body: "奧海城一、二、三期納入一致的連接樓宇視圖。" }, { title: "多感測背景", body: "水、噪音、煙霧、吸煙、佔用與環境訊號可一起分析。" }, { title: "清晰合規界線", body: "獨立 IoT 煙霧監測與法定火警系統分開描述及運作。" }],
    flow: ["多感測監測", "LoRaWAN 樓宇網絡", "Core 與 BMS 整合", "Halo 與 HVAC 營運"],
    facts: [{ label: "物業期數", value: "1、2、3" }, { label: "BMS 整合", value: "已運行" }, { label: "煙霧監測", value: "獨立 IoT" }],
  },
  "ifc-mall": {
    name: "國際金融中心商場", sector: "商業", location: "中環",
    summary: "把智慧設施資訊及洗手間科技整合到主要零售與辦公目的地。",
    challenge: "讓訪客容易理解即時設施資訊，同時為物業團隊提供連接的佔用與服務狀況視圖。",
    delivery: ["呈現即時設施數據的建築資訊介面", "保障私隱的佔用感測", "連接廁格可用狀態及洗手間資訊", "協調公眾與營運用途的資訊層級"],
    outcome: "較從容的公眾體驗，由介面背後的連接營運層支援。",
    benefits: [{ title: "減少訪客疑問", body: "即時可用狀態協助訪客在使用點更快作出選擇。" }, { title: "更佳服務可視性", body: "佔用與設施狀態讓物業團隊更及時掌握需求。" }, { title: "融入建築的科技", body: "資訊層級及介面與室內設計協調。" }],
    flow: ["設施與佔用數據", "Blutech Core", "已配置介面", "訪客與物業團隊"],
    facts: [{ label: "資訊狀態", value: "即時" }, { label: "公眾及營運視圖", value: "2" }, { label: "介面方式", value: "已整合" }],
  },
  "immigration-department-queue-monitoring": {
    name: "入境事務處總部", sector: "政府", location: "將軍澳",
    summary: "為分散的公共服務機器提供連接輪候監測及 Smart Display 資訊。",
    challenge: "把多部公共服務機器的即時使用狀況轉化為清晰輪候與可用資訊，同時保持介面與流程簡單。",
    delivery: ["輪候及服務機器使用監測", "Smart Display 公眾資訊", "透過 Blutech Core 連接狀態", "供授權服務團隊使用的營運視圖"],
    outcome: "訪客更容易理解即時可用及輪候資訊，授權團隊亦更易管理。",
    benefits: [{ title: "清晰輪候資訊", body: "訪客可掌握目前可用狀況並作更合適選擇。" }, { title: "減少人手檢查", body: "連接狀態為營運團隊提供一致視圖。" }, { title: "在需要的位置提供資訊", body: "Smart Display 把即時設施資訊帶到公眾環境。" }],
    flow: ["服務機器活動", "Blutech Core", "輪候狀態", "Smart Display 與營運"],
    facts: [{ label: "服務機器網絡", value: "已連接" }, { label: "輪候視圖", value: "即時" }, { label: "資訊層", value: "Smart Display" }],
  },
  "hospital-patient-safety": {
    name: "醫院病人安全", sector: "醫療", location: "香港",
    summary: "已在瑪嘉烈醫院及瑪麗醫院等醫療環境部署的無攝影機無障礙洗手間跌倒與事故偵測。",
    challenge: "在高度私密空間支援對時間敏感的安全流程，同時避免使用傳統攝影機或可識別影像。",
    delivery: ["無障礙洗手間的無攝影機跌倒及事故偵測", "現場本地警報", "護士通知與營運儀表板", "以 LoRaWAN 與 Bluetooth 支援連接及本地流程"],
    outcome: "有用安全事件可傳達至負責的醫院團隊，感測方式亦適合建築內最重視私隱的空間。",
    benefits: [{ title: "更早識別潛在風險", body: "逗留過久、無動作及項目定義的跌倒或事故狀況可觸發既定流程。" }, { title: "維持尊嚴與私隱", body: "感測架構在無障礙洗手間不使用傳統攝影機影像。" }, { title: "本地與連接回應", body: "Bluetooth 支援即時本地動作，LoRaWAN 則把事件帶入通知、儀表板與營運記錄。" }],
    flow: ["無攝影機感測", "Bluetooth 本地回應", "LoRaWAN 事件", "護士通知與儀表板"],
    facts: [{ label: "已列名醫院", value: "PMH + QMH" }, { label: "傳統攝影機", value: "0" }, { label: "警報路徑", value: "本地 + 護士" }],
  },
  "emsd-headquarters": {
    name: "機電工程署總部", sector: "政府", location: "九龍灣",
    summary: "由 B1 至 6/F 的全棟智慧洗手間部署，連接 230 個廁格並提供佔用視圖及政府網絡整合。",
    challenge: "跨多個樓層建立一致設施視圖，同時協調設備覆蓋、系統整合及持續營運樓宇的限制。",
    delivery: ["B1 至 6/F 共 230 個廁格的智慧洗手間感測", "全棟室內 LoRaWAN 網關覆蓋", "佔用狀態與營運資訊", "Government-Wide IoT Network 整合經驗"],
    outcome: "建立全棟連接設施層，提供協調的無線覆蓋及一致營運視圖。",
    benefits: [{ title: "全棟可視性", body: "B1 至 6/F 的一致視圖取代逐層獨立資訊及人手檢查。" }, { title: "協調無線覆蓋", body: "室內網關與分散設備規劃成一個 LoRaWAN 樓宇網絡。" }, { title: "可供整合的交付", body: "政府網絡整合經驗有助協調設備數據、安全要求與營運用途。" }],
    flow: ["230 個連接廁格", "室內 LoRaWAN 覆蓋", "GWIN 整合", "全棟營運"],
    facts: [{ label: "連接廁格", value: "230" }, { label: "樓層覆蓋", value: "B1–6/F" }, { label: "整合", value: "GWIN" }],
  },
};

const ar: Record<string, ProjectTranslation> = Object.fromEntries(Object.entries(tc).map(([slug, item]) => [slug, {
  ...item,
  name: ({
    "three-garden-road": "Three Garden Road",
    "hong-kong-international-airport": "مطار هونغ كونغ الدولي",
    metroplaza: "Metroplaza",
    "hong-kong-west-kowloon-station": "محطة هونغ كونغ ويست كولون",
    "olympian-city": "Olympian City",
    "ifc-mall": "IFC Mall",
    "immigration-department-queue-monitoring": "المقر الرئيسي لإدارة الهجرة",
    "hospital-patient-safety": "سلامة المرضى في المستشفيات",
    "emsd-headquarters": "مقر EMSD",
  } as Record<string, string>)[slug],
  sector: ({
    "three-garden-road": "مكاتب من الدرجة A", "hong-kong-international-airport": "طيران", metroplaza: "تجاري وتجزيئة", "hong-kong-west-kowloon-station": "نقل", "olympian-city": "تجاري وتجزيئة", "ifc-mall": "تجاري", "immigration-department-queue-monitoring": "حكومي", "hospital-patient-safety": "رعاية صحية", "emsd-headquarters": "حكومي",
  } as Record<string, string>)[slug],
  location: ({ "three-garden-road": "سنترال", "hong-kong-international-airport": "هونغ كونغ", metroplaza: "كواي فونغ", "hong-kong-west-kowloon-station": "ويست كولون", "olympian-city": "ويست كولون", "ifc-mall": "سنترال", "immigration-department-queue-monitoring": "تسيونغ كوان أو", "hospital-patient-safety": "هونغ كونغ", "emsd-headquarters": "كولون باي" } as Record<string, string>)[slug],
  summary: ({
    "three-garden-road": "أكثر من 1,000 جهاز متصل يدعم دورات المياه الذكية ومراقبة التسرب وجودة الهواء وتنسيق HVAC حسب الإشغال وتكامل تقارير ESG.",
    "hong-kong-international-airport": "مراقبة سلامة الركاب على نطاق المطار عبر الاستشعار غير المعتمد على الكاميرات والمخططات والتنبيهات ولوحات المعلومات والتقارير.",
    metroplaza: "أكثر من 300 جهاز متصل و180 مقصورة، مع تنسيق التهوية وHVAC بناءً على الإشغال ودرجة الحرارة والرطوبة.",
    "hong-kong-west-kowloon-station": "نظام متكامل لدورات المياه يخدم الركاب والمشغلين ويربط المستلزمات والتسرب والإشغال والإضاءة وجودة الهواء.",
    "olympian-city": "مشروع عبر المراحل 1 و2 و3 يراقب المياه والضوضاء والدخان والتدخين والإشغال والبيئة مع تكامل BMS وHVAC.",
    "ifc-mall": "معلومات مرافق ذكية وتقنيات دورات مياه مدمجة في وجهة رئيسية للتجزئة والمكاتب.",
    "immigration-department-queue-monitoring": "مراقبة متصلة للانتظار ومعلومات Smart Display لبيئة موزعة من أجهزة الخدمة العامة.",
    "hospital-patient-safety": "كشف السقوط والحوادث بلا كاميرات في دورات المياه المهيأة، مطبق في بيئات مستشفيات منها PMH وQMH.",
    "emsd-headquarters": "نشر شامل لدورات المياه الذكية يربط 230 مقصورة من B1 إلى 6/F مع رؤية الإشغال وتكامل الشبكة الحكومية.",
  } as Record<string, string>)[slug],
  challenge: ({
    "three-garden-road": "إنشاء طبقة تشغيل موثوقة في عقار تجاري عامل مع استشعار هادئ وحماية الخصوصية وربط البيانات بسير العمل القائم.",
    "hong-kong-international-airport": "توفير إشارات إشغال وسلامة موثوقة في مرافق عامة عالية الحركة مع الحفاظ على الخصوصية ورؤية تشغيلية واضحة.",
    metroplaza: "ربط شبكة كبيرة من مرافق دورات المياه واستخدام الإشغال ودرجة الحرارة والرطوبة في تنسيق التهوية وHVAC.",
    "hong-kong-west-kowloon-station": "تقديم معلومات مرافق واضحة للركاب وجمع إشارات متعددة في سير عمل موثوق للمشغلين.",
    "olympian-city": "تنسيق أنظمة IoT متعددة عبر المراحل الثلاث مع فصل مراقبة الدخان المستقلة بوضوح عن نظام إنذار الحريق النظامي.",
    "ifc-mall": "تبسيط معلومات المرافق للزوار مع توفير رؤية متصلة للإشغال والخدمة لفريق العقار.",
    "immigration-department-queue-monitoring": "تحويل استخدام أجهزة الخدمة العامة إلى معلومات انتظار وتوافر واضحة دون تعقيد الواجهة أو التشغيل.",
    "hospital-patient-safety": "دعم استجابة سلامة حساسة للوقت في مساحة شديدة الخصوصية من دون كاميرات أو صور قابلة للتعريف.",
    "emsd-headquarters": "إنشاء رؤية مرافق متسقة عبر طوابق متعددة مع تنسيق التغطية والتكامل وقيود المبنى العامل.",
  } as Record<string, string>)[slug],
  delivery: ({
    "three-garden-road": ["استشعار يحفظ الخصوصية لدورات المياه", "مراقبة جودة الهواء وتسرب المياه", "ربط الإشغال بسير عمل HVAC الفعلي", "رؤية Halo وCore وتكامل تقارير ESG"],
    "hong-kong-international-airport": ["استشعار حراري وموجات مليمترية بلا كاميرات", "حالات المقصورات وأحداث البقاء الطويل أو انعدام الحركة", "رؤية عبر المخطط وتنبيهات تشغيلية", "جمع بيانات LoRaWAN عبر بوابات المشروع"],
    metroplaza: ["أكثر من 300 جهاز متصل", "إشغال متصل لـ180 مقصورة", "مراقبة الحرارة والرطوبة", "تنسيق التهوية وHVAC عبر Halo وCore"],
    "hong-kong-west-kowloon-station": ["BT107 Smart Display لمعلومات الركاب", "مراقبة ورق الحمام والصابون", "كشف التسرب وHeatmap", "الإضاءة وجودة الهواء عبر Halo وCore"],
    "olympian-city": ["مراقبة التسرب والضوضاء والحرارة والرطوبة", "Heatmap وكشف التدخين", "مراقبة دخان IoT مستقلة عن نظام إنذار الحريق النظامي", "تكامل BMS وتحسين HVAC عبر المراحل الثلاث"],
    "ifc-mall": ["واجهات معمارية لبيانات المرافق", "استشعار إشغال يحفظ الخصوصية", "توافر المقصورات وحالة المرافق", "تسلسل معلومات للجمهور والتشغيل"],
    "immigration-department-queue-monitoring": ["مراقبة الانتظار واستخدام أجهزة الخدمة", "Smart Display للمعلومات العامة", "حالة متصلة عبر Blutech Core", "رؤية تشغيلية للفرق المصرح لها"],
    "hospital-patient-safety": ["كشف السقوط والحوادث بلا كاميرات", "إنذار محلي", "إخطار التمريض ولوحة تشغيل", "معمارية LoRaWAN وBluetooth"],
    "emsd-headquarters": ["استشعار 230 مقصورة من B1 إلى 6/F", "تغطية بوابات LoRaWAN داخلية", "حالة الإشغال والمعلومات التشغيلية", "خبرة تكامل GWIN"],
  } as Record<string, string[]>)[slug],
  outcome: ({
    "three-garden-road": "تمنح الشبكة الكبيرة فريق العقار رؤية أوضح وتنسق الإشغال مع HVAC وتوفر بيانات قابلة للاستخدام في تقارير ESG.",
    "hong-kong-international-airport": "تحول طبقة مرافق تحترم الخصوصية الأحداث الميدانية إلى حالة وتنبيهات ومتابعة تشغيلية واضحة.",
    metroplaza: "يجمع النشر التجاري الكبير ظروف المرافق في رؤية واحدة ويجعلها مدخلات مفيدة لتنسيق التهوية.",
    "hong-kong-west-kowloon-station": "يحصل الركاب على معلومات أوضح ويحصل المشغلون على رؤية واحدة للمستلزمات والسلامة والبيئة.",
    "olympian-city": "تقدم طبقة متعددة المستشعرات رؤية موحدة للمراحل الثلاث مع إبقاء دور مراقبة الدخان المستقلة واضحاً.",
    "ifc-mall": "تجربة عامة أكثر هدوءاً تدعمها طبقة تشغيل متصلة خلف الواجهة.",
    "immigration-department-queue-monitoring": "تصبح معلومات التوافر والانتظار أسهل للزوار وللفرق المصرح لها.",
    "hospital-patient-safety": "تصل أحداث السلامة المفيدة إلى فريق المستشفى مع طريقة استشعار مناسبة لمساحة شديدة الخصوصية.",
    "emsd-headquarters": "طبقة مرافق متصلة على مستوى المبنى مع تغطية لاسلكية منسقة ورؤية تشغيلية متسقة.",
  } as Record<string, string>)[slug],
  benefits: item.benefits.map((_, index) => ({
    title: ["رؤية تشغيلية أوضح", "استجابة وتنسيق أفضل", "تكامل عملي"][index],
    body: ["تجمع الإشارات المتصلة في رؤية واضحة للفرق المصرح لها.", "تحول الأحداث الميدانية إلى استجابة أكثر تركيزاً وسرعة.", "يربط النظام الأجهزة والبرمجيات وسير العمل القائم بأدوار واضحة."][index],
  })),
  flow: ["إشارات الموقع", "شبكة LoRaWAN", "Blutech Core", "Halo والتشغيل"],
  facts: item.facts.map((fact) => ({ ...fact, value: ({ "已運行": "مباشر", "已整合": "متكامل", "即時": "مباشر", "乘客 + 營運": "الركاب + التشغيل", "1、2、3": "1 و2 و3", "獨立 IoT": "IoT مستقل", "已連接": "متصل", "本地 + 護士": "محلي + التمريض" } as Record<string, string>)[fact.value] || fact.value, label: ({
    "連接設備": "الأجهزة المتصلة", "HVAC 協調": "تنسيق HVAC", "ESG 報告": "تقارير ESG", "傳統攝影機": "الكاميرات التقليدية", "安全事件類型": "أنواع أحداث السلامة", "營運視圖": "الرؤية التشغيلية", "連接廁格": "المقصورات المتصلة", "樓層覆蓋": "تغطية المبنى", "整合": "التكامل", "軟件層": "طبقات البرمجيات", "主要顯示器": "الشاشة الرئيسية", "營運層": "طبقات التشغيل", "系統視圖": "رؤية النظام", "物業期數": "مراحل العقار", "BMS 整合": "تكامل BMS", "煙霧監測": "مراقبة الدخان", "資訊狀態": "حالة المعلومات", "公眾及營運視圖": "رؤية الجمهور والتشغيل", "介面方式": "نهج الواجهة", "服務機器網絡": "شبكة أجهزة الخدمة", "輪候視圖": "رؤية الانتظار", "資訊層": "طبقة المعلومات", "已列名醫院": "المستشفيات المذكورة", "警報路徑": "مسار التنبيه",
  } as Record<string, string>)[fact.label] || fact.label })),
}])) as Record<string, ProjectTranslation>;

const simplifiedCharacters: Record<string, string> = {
  園:"园",號:"号",級:"级",廈:"厦",環:"环",過:"过",連:"连",設:"设",備:"备",援:"援",監:"监",測:"测",內:"内",氣:"气",質:"质",佔:"占",協:"协",調:"调",報:"报",統:"统",營:"营",運:"运",層:"层",時:"时",覺:"觉",護:"护",隱:"隐",據:"据",網:"网",絡:"络",團:"团",隊:"队",動:"动",訊:"讯",樓:"楼",築:"筑",為:"为",個:"个",實:"实",際:"际",視:"视",與:"与",場:"场",國:"国",機:"机",熱:"热",廁:"厕",態:"态",顯:"显",類:"类",廣:"广",濕:"湿",軟:"软",將:"将",務:"务",處:"处",輪:"轮",候:"候",醫:"医",療:"疗",瑪:"玛",麗:"丽",傳:"传",識:"识",攝:"摄",影:"影",警:"警",徑:"径",電:"电",總:"总",棟:"栋",線:"线",蓋:"盖",經:"经",驗:"验",獨:"独",煙:"烟",霧:"雾",優:"优",開:"开",應:"应",資:"资",現:"现",況:"况",離:"离",減:"减",從:"从",選:"选",擇:"择",讓:"让",較:"较",間:"间",業:"业",續:"续",錄:"录",無:"无",狀:"状",並:"并",獲:"获",則:"则",偵:"侦",體:"体",聲:"声",數:"数",點:"点",適:"适",項:"项",產:"产",檔:"档",啟:"启",權:"权",導:"导",細:"细",維:"维",圖:"图",簡:"简",標:"标",準:"准",確:"确",認:"认",發:"发",佈:"布",輸:"输",寫:"写",讀:"读",雲:"云",遠:"远",檢:"检",擴:"扩",觸:"触",門:"门",節:"节",約:"约",驟:"骤",顧:"顾",戶:"户",貫:"贯",徹:"彻",眾:"众",萬:"万",頁:"页",種:"种",關:"关",聯:"联",區:"区",別:"别",屬:"属",極:"极",帶:"带",華:"华",這:"这",麼:"么",甚:"什",聰:"聪",夠:"够",見:"见",問:"问",圍:"围",繞:"绕",決:"决",庫:"库",價:"价",組:"组",來:"来",順:"顺",暢:"畅",員:"员",礙:"碍",義:"义",轉:"转",趨:"趋",檻:"槛",專:"专",廣:"广",達:"达",還:"还",僅:"仅",參:"参",議:"议",較:"较",線:"线",據:"据",終:"终",訊:"讯",區:"区",辦:"办",責:"责",負:"负",階:"阶",劃:"划",劃:"划",試:"试",詢:"询",儲:"储",儀:"仪",補:"补",劑:"剂",佈:"布",構:"构",飾:"饰",屬:"属",劃:"划",擁:"拥",態:"态",寫:"写",審:"审",計:"计",歷:"历",遙:"遥",距:"距",電:"电",池:"池",瀏覽:"浏览",
};

export function toSimplified<T>(value: T): T {
  if (typeof value === "string") return [...value].map((character) => simplifiedCharacters[character] || character).join("").replaceAll("营运", "运营") as T;
  if (Array.isArray(value)) return value.map((item) => toSimplified(item)) as T;
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, toSimplified(item)])) as T;
  return value;
}

export function localizeProject(project: Project, locale?: string): Project {
  if (locale === "zh-hant") return { ...project, ...tc[project.slug] };
  if (locale === "zh-hans") return { ...project, ...toSimplified(tc[project.slug]) };
  if (locale === "ar") return { ...project, ...ar[project.slug] };
  return project;
}
