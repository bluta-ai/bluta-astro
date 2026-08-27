"use client";

import Link from "next/link";
import { localePath, useSiteLanguage } from "./components/LanguageContext";
import { SiteHeader } from "./components/SiteChrome";

const copy = {
  en: {
    nav: ["Solutions", "Software", "Projects", "Products"],
    contact: "Contact Us",
    eyebrow: "PHYSICAL AI FOR BUILDINGS",
    title: <>Intelligence,<br /><em>built into the building.</em></>,
    intro:
      "Blutech combines accurate sensing, edge intelligence, connected hardware and building software—turning live conditions into safer spaces, leaner operations and better-performing assets.",
    explore: "Explore Blutech",
    work: "See selected work",
    trusted: "Proven in complex, live building environments",
    stats: [
      ["Since 2019", "building intelligence developed in Hong Kong"],
      ["100+", "real-world deployments"],
      ["200,000+", "connected devices on Blutech Core"],
      ["Awarded", "Multiple international and Hong Kong awards · iF 2024 · HKICT · APICTA"],
    ],
    valueKicker: "A better building is an outcome—not a gadget.",
    valueTitle: <>Make every square metre<br />work harder.</>,
    valueIntro:
      "Designed for owners, property teams and project teams, Blutech closes the gap between design intent and day-to-day performance.",
    values: [
      ["01", "Protect asset value", "Find waste, faults and under-used space before they become expensive. Give management one dependable view across a property or portfolio."],
      ["02", "Run leaner operations", "Automate routine checks, alerts, reporting and work orders. Let teams focus on decisions that need human judgement."],
      ["03", "Elevate the occupant experience", "Respond to real occupancy, comfort and safety conditions—without cameras in sensitive spaces."],
      ["04", "Keep design freedom", "Discreet sensors, open protocols and flexible deployment models integrate into new projects and existing buildings."],
    ],
    bridgeKicker: "From drawing board to daily operation",
    bridgeTitle: "For owners. For operators.",
    ownerTitle: "For owners",
    ownerText: "Turn live building performance into clearer asset decisions. Track operating cost, risk, comfort and portfolio outcomes through one dependable intelligence layer.",
    ownerList: ["Lower OPEX", "Asset protection", "Verified ESG data", "Portfolio visibility"],
    architectTitle: "For operators",
    architectText: "See what needs attention now and move directly from signal to action. Live status, alarms, workflows, device health and reports stay clear in daily operation.",
    architectList: ["Live status", "Faster response", "Workflows and alerts", "Device health"],
    systemKicker: "ONE SYSTEM · FIELD TO SOFTWARE",
    systemTitle: "Sense. Understand. Act.",
    systemIntro: "Blutech turns fragmented building data into a continuous operating loop—from what the space is experiencing to the action your team or systems should take next.",
    layers: [
      ["01", "Space", "People, air, water, energy and equipment conditions"],
      ["02", "Signal", "Privacy-first sensors plus existing BMS and IoT systems"],
      ["03", "Intelligence", "Edge AI, historical context, rules and verified reasoning"],
      ["04", "Action", "Control, alerts, work orders, reporting and optimisation"],
    ],
    dashboardLabel: "BLUTECH HALO · OPERATIONS",
    dashboardTitle: "Halo makes the building clear.",
    dashboardText: "Live status, floorplans, visualisation, alarms, history, reports and authorised controls stay clear enough for daily users on desktop or mobile.",
    platformLabel: "BLUTECH CORE · INFRASTRUCTURE",
    platformTitle: "Core keeps the complexity under control.",
    platformText: "Provisioning, gateways, device health, data mapping, rules, payloads and integrations stay in the technical layer—separate from day-to-day building operations.",
    deployment: "Cloud · Private cloud · On-premise",
    projectsKicker: "SELECTED WORK",
    projectsTitle: "Proven where performance matters.",
    projectsIntro: "Live deployments across Grade-A offices, aviation, public services, healthcare and retail show how the same intelligence layer adapts to very different briefs.",
    projects: [
      ["Three Garden Road", "GRADE-A OFFICE · CENTRAL", "More than 1,000 connected devices support smart washrooms, water-leakage monitoring, indoor-air-quality visibility, occupancy-led HVAC coordination and ESG reporting.", ["1,000+ connected devices", "HVAC coordination live", "ESG reporting integration"]],
      ["Hong Kong International Airport", "AVIATION · HONG KONG", "Airport-wide passenger-safety monitoring combines Heatmap sensing, floorplan visibility, alerts and reporting without conventional cameras in sensitive spaces.", ["Airport-wide coverage", "Floorplan visibility", "Alerts and reporting"]],
      ["EMSD Headquarters", "GOVERNMENT · KOWLOON BAY", "A whole-building smart-washroom deployment connects 230 cubicles from B1 to 6/F with occupancy visibility and GWIN integration.", ["230 connected cubicles", "B1–6/F coverage", "GWIN integration"]],
    ],
    productsKicker: "BLUTECH HARDWARE",
    productsTitle: "Signals you can trust.",
    productsIntro: "Purpose-built sensors and interfaces capture what conventional systems miss—beautifully, discreetly and without collecting unnecessary personal data.",
    products: [
      ["HeatMap Pro", "BT337 · ACCURATE THERMAL SENSING", "A 16×12 thermal-array sensor for accurate occupancy and spatial insight without conventional camera imagery.", "Thermal array · Occupancy · Building workflows"],
      ["Indoor Air Quality Sensor", "BT306 · ENVIRONMENTAL", "Connected indoor-air-quality sensing for temperature, humidity and PM2.5, with project-specific parameters available.", "Environmental data · Trends · BMS interaction"],
      ["Smart Info Station", "BT102 · DISPLAY & INTERFACE", "A large-format Android information station that aggregates building and IoT data across floors and facilities.", "Android · Building data · Blutech Halo"],
      ["Smart Signage", "BT101 · DISPLAY & INTERFACE", "Compact connected signage for presenting live facility information and project content at the point of use.", "Bluetooth or Android · Building data"],
    ],
    integrationKicker: "OPEN BY DEFAULT",
    integrationTitle: "Keep what works. Connect what matters.",
    integrationText: "Blutech works across legacy and modern systems, so a smart-building upgrade does not require a rip-and-replace programme.",
    privacyTitle: "Privacy is architecture.",
    privacyText: "Thermal grids, mmWave and edge AI create useful human-activity signals without facial images or personal identifiers. Sensitive spaces stay both intelligent and private.",
    contactKicker: "START WITH ONE MEANINGFUL OUTCOME",
    contactTitle: "Make your next building perform as beautifully as it looks.",
    contactText: "Share your property type, systems and priorities. We will propose a practical pilot scope, integration path and measurement plan.",
    email: "Email our project team",
    footerLine: "Building AI and IoT for safer, leaner and better-performing properties.",
  },
  tc: {
    nav: ["方案", "軟件", "項目", "產品"],
    contact: "聯絡我們",
    eyebrow: "建築物理人工智能",
    title: <>讓智慧，<br /><em>成為建築的一部分。</em></>,
    intro: "Blutech 結合精準感測、邊緣智慧、聯網硬件與樓宇軟件，把現場狀況轉化為更安全的空間、更精簡的營運，以及表現更佳的資產。",
    explore: "了解 Blutech",
    work: "查看精選項目",
    trusted: "在複雜、持續運作的樓宇環境中經過驗證",
    stats: [["始於 2019", "在香港研發建築智能"], ["100+", "個真實項目部署"], ["200,000+", "部設備連接至 Blutech Core"], ["屢獲殊榮", "多項國際及香港獎項 · iF 2024 · HKICT · APICTA"]],
    valueKicker: "好建築看的是成果，而不是堆砌設備。",
    valueTitle: <>讓每一平方米<br />發揮更大價值。</>,
    valueIntro: "Blutech 為業主、物業管理及項目團隊而設，拉近設計願景與日常營運表現之間的距離。",
    values: [
      ["01", "守護資產價值", "在浪費、故障及空間閒置變得昂貴之前及早發現，讓管理層以一個可靠視圖掌握單一物業或整個資產組合。"],
      ["02", "精簡日常營運", "自動化例行巡查、警報、報告及工作單，讓團隊專注處理真正需要人為判斷的決策。"],
      ["03", "提升使用者體驗", "因應實際人流、舒適度及安全狀況即時回應；在敏感空間亦毋須使用攝影機。"],
      ["04", "保留設計自由", "低調感測器、開放協議及彈性部署方式，可融入新建項目與既有樓宇。"],
    ],
    bridgeKicker: "從設計圖到每日營運",
    bridgeTitle: "為業主而設，為營運團隊而設。",
    ownerTitle: "為業主而設",
    ownerText: "把即時樓宇表現轉化為清晰的資產決策，以一個可靠智慧層掌握營運成本、風險、舒適度及資產組合成果。",
    ownerList: ["降低營運成本", "保護資產", "可驗證 ESG 數據", "資產組合視野"],
    architectTitle: "為營運團隊而設",
    architectText: "即時掌握需要處理的事項，由訊號直接進入行動；日常營運中的狀態、警報、流程、設備健康及報告保持清晰。",
    architectList: ["即時狀態", "更快回應", "流程與警報", "設備健康"],
    systemKicker: "一個系統 · 從現場到軟件",
    systemTitle: "感知、理解、行動。",
    systemIntro: "Blutech 把分散的樓宇數據變成持續的營運閉環——從空間正在經歷甚麼，到團隊或系統下一步應採取的行動。",
    layers: [
      ["01", "空間", "人流、空氣、水、能源及設備狀況"],
      ["02", "訊號", "私隱優先感測器，以及既有 BMS 與 IoT 系統"],
      ["03", "智慧", "邊緣 AI、歷史脈絡、規則及可驗證推理"],
      ["04", "行動", "控制、警報、工作單、報告及優化"],
    ],
    dashboardLabel: "BLUTECH HALO · 日常營運",
    dashboardTitle: "Halo 讓樓宇狀況一目了然。",
    dashboardText: "視覺化、報告、警報和工作單保持清晰直接；桌面或手機上，每個角色只看到真正重要的資訊。",
    platformLabel: "BLUTECH CORE · IOT 平台",
    platformTitle: "Core 把複雜技術留在背後。",
    platformText: "設備、網關、數據映射、規則與整合集中於 Blutech Core，與日常操作分開，同時靈活支援不同規模和行業的項目。",
    deployment: "雲端 · 私有雲 · 本地部署",
    projectsKicker: "精選項目",
    projectsTitle: "在關鍵環境中驗證實力。",
    projectsIntro: "從甲級商廈、機場、公共服務、醫院到商場，同一智慧層能因應截然不同的項目要求。",
    projects: [
      ["花園道三號", "甲級商廈 · 中環", "超過 1,000 部連接設備支援智慧洗手間、漏水監測、室內空氣質素、按佔用情況協調 HVAC，以及 ESG 報告整合。", ["1,000+ 連接設備", "HVAC 協調已運行", "ESG 報告整合"]],
      ["香港國際機場", "航空 · 香港", "機場範圍的乘客安全監察結合 Heatmap 感測、平面圖可視性、警報及報告，並避免在敏感空間使用傳統攝影機。", ["機場範圍部署", "平面圖可視性", "警報與報告"]],
      ["機電工程署總部", "政府 · 九龍灣", "由地庫一層至六樓連接 230 個廁格，提供佔用狀態、智慧洗手間營運視圖及 GWIN 整合。", ["230 個連接廁格", "B1–6/F 覆蓋", "GWIN 整合"]],
    ],
    productsKicker: "BLUTECH 硬件",
    productsTitle: "值得信賴的訊號。",
    productsIntro: "專為樓宇而設的感測器與資訊介面，低調而美觀地捕捉傳統系統忽略的狀況，同時避免收集不必要的個人資料。",
    products: [
      ["HeatMap Pro", "BT337 · 精準熱能感測", "以 16×12 熱能陣列提供精準人流與空間洞察，毋須使用傳統攝影機影像。", "熱能陣列 · 佔用 · 樓宇流程"],
      ["室內空氣質素感測器", "BT306 · 環境感測", "監測溫度、濕度及 PM2.5，並可按項目需要定制其他空氣參數。", "環境數據 · 趨勢 · BMS 聯動"],
      ["Smart Info Station", "BT102 · 顯示與資訊介面", "大型 Android 資訊站，整合跨樓層與設施的樓宇及 IoT 數據。", "Android · 樓宇數據 · Blutech Halo"],
      ["Smart Signage", "BT101 · 顯示與資訊介面", "在使用地點清晰呈現即時設施資訊及項目內容的精巧聯網標牌。", "藍牙或 Android · 樓宇數據"],
    ],
    integrationKicker: "開放是基本設計",
    integrationTitle: "保留有效系統，連接關鍵資訊。",
    integrationText: "Blutech 橫跨傳統與現代樓宇系統，智慧升級毋須全面拆換設備。",
    privacyTitle: "私隱就是系統架構。",
    privacyText: "熱能網格、毫米波及邊緣 AI 在沒有臉部影像或個人識別資料下產生人體活動訊號，讓敏感空間兼備智慧與私隱。",
    contactKicker: "由一個有意義的成果開始",
    contactTitle: "讓下一座建築的表現，與設計同樣出色。",
    contactText: "告訴我們物業類型、既有系統和優先目標，我們會提出實際的試點範圍、整合路徑及成效量度方案。",
    email: "電郵聯絡項目團隊",
    footerLine: "以建築 AI 與 IoT 建構更安全、精簡、高效的物業。",
  },
  sc: {
    nav: ["方案", "软件", "项目", "产品"],
    contact: "联系我们",
    eyebrow: "建筑物理人工智能",
    title: <>让智慧，<br /><em>成为建筑的一部分。</em></>,
    intro: "Blutech 结合精准感知、边缘智能、联网硬件与楼宇软件，把现场状况转化为更安全的空间、更精简的运营，以及表现更佳的资产。",
    explore: "了解 Blutech",
    work: "查看精选项目",
    trusted: "在复杂、持续运行的楼宇环境中经过验证",
    stats: [["始于 2019", "在香港研发建筑智能"], ["100+", "个真实项目部署"], ["200,000+", "部设备连接至 Blutech Core"], ["屡获殊荣", "多项国际及香港奖项 · iF 2024 · HKICT · APICTA"]],
    valueKicker: "好建筑看的是成果，而不是堆砌设备。",
    valueTitle: <>让每一平方米<br />发挥更大价值。</>,
    valueIntro: "Blutech 为业主、物业管理及项目团队而设，拉近设计愿景与日常运营表现之间的距离。",
    values: [
      ["01", "守护资产价值", "在浪费、故障及空间闲置变得昂贵之前及早发现，让管理层以一个可靠视图掌握单一物业或整个资产组合。"],
      ["02", "精简日常运营", "自动化例行巡查、警报、报告及工单，让团队专注处理真正需要人为判断的决策。"],
      ["03", "提升使用者体验", "根据实际人流、舒适度及安全状况即时响应；在敏感空间也无需使用摄像头。"],
      ["04", "保留设计自由", "低调传感器、开放协议及灵活部署方式，可融入新建项目与既有楼宇。"],
    ],
    bridgeKicker: "从设计图到每日运营",
    bridgeTitle: "为业主而设，为运营团队而设。",
    ownerTitle: "为业主而设",
    ownerText: "把实时楼宇表现转化为清晰的资产决策，以一个可靠智能层掌握运营成本、风险、舒适度及资产组合成果。",
    ownerList: ["降低运营成本", "保护资产", "可验证 ESG 数据", "资产组合视野"],
    architectTitle: "为运营团队而设",
    architectText: "即时掌握需要处理的事项，由信号直接进入行动；日常运营中的状态、警报、流程、设备健康及报告保持清晰。",
    architectList: ["实时状态", "更快响应", "流程与警报", "设备健康"],
    systemKicker: "一个系统 · 从现场到软件",
    systemTitle: "感知、理解、行动。",
    systemIntro: "Blutech 把分散的楼宇数据变成持续的运营闭环——从空间正在经历什么，到团队或系统下一步应采取的行动。",
    layers: [
      ["01", "空间", "人流、空气、水、能源及设备状况"],
      ["02", "信号", "隐私优先传感器，以及既有 BMS 与 IoT 系统"],
      ["03", "智能", "边缘 AI、历史脉络、规则及可验证推理"],
      ["04", "行动", "控制、警报、工单、报告及优化"],
    ],
    dashboardLabel: "BLUTECH HALO · 日常运营",
    dashboardTitle: "Halo 让楼宇状况一目了然。",
    dashboardText: "可视化、报告、警报和工单保持清晰直接；桌面或手机上，每个角色只看到真正重要的信息。",
    platformLabel: "BLUTECH CORE · IOT 平台",
    platformTitle: "Core 把复杂技术留在背后。",
    platformText: "设备、网关、数据映射、规则与整合集中于 Blutech Core，与日常操作分开，同时灵活支持不同规模和行业的项目。",
    deployment: "云端 · 私有云 · 本地部署",
    projectsKicker: "精选项目",
    projectsTitle: "在关键环境中验证实力。",
    projectsIntro: "从甲级写字楼、机场、公共服务、医院到商场，同一智能层能适应截然不同的项目要求。",
    projects: [
      ["花园道三号", "甲级写字楼 · 中环", "超过 1,000 部连接设备支持智慧洗手间、漏水监测、室内空气质量、按占用情况协调 HVAC，以及 ESG 报告集成。", ["1,000+ 连接设备", "HVAC 协调已运行", "ESG 报告集成"]],
      ["香港国际机场", "航空 · 香港", "机场范围的乘客安全监测结合 Heatmap 感知、平面图可视性、警报及报告，并避免在敏感空间使用传统摄像头。", ["机场范围部署", "平面图可视性", "警报与报告"]],
      ["机电工程署总部", "政府 · 九龙湾", "从地库一层至六楼连接 230 个厕格，提供占用状态、智慧洗手间运营视图及 GWIN 集成。", ["230 个连接厕格", "B1–6/F 覆盖", "GWIN 集成"]],
    ],
    productsKicker: "BLUTECH 硬件",
    productsTitle: "值得信赖的信号。",
    productsIntro: "专为楼宇而设的传感器与信息界面，低调而美观地捕捉传统系统忽略的状况，同时避免收集不必要的个人资料。",
    products: [
      ["HeatMap Pro", "BT337 · 精准热能感知", "以 16×12 热能阵列提供精准人流与空间洞察，无需使用传统摄像头影像。", "热能阵列 · 占用 · 楼宇流程"],
      ["室内空气质量传感器", "BT306 · 环境传感", "监测温度、湿度及 PM2.5，并可按项目需要定制其他空气参数。", "环境数据 · 趋势 · BMS 联动"],
      ["Smart Info Station", "BT102 · 显示与信息界面", "大型 Android 信息站，整合跨楼层与设施的楼宇及 IoT 数据。", "Android · 楼宇数据 · Blutech Halo"],
      ["Smart Signage", "BT101 · 显示与信息界面", "在使用地点清晰呈现实时设施信息及项目内容的精巧联网标牌。", "蓝牙或 Android · 楼宇数据"],
    ],
    integrationKicker: "开放是基本设计",
    integrationTitle: "保留有效系统，连接关键信息。",
    integrationText: "Blutech 横跨传统与现代楼宇系统，智慧升级无需全面拆换设备。",
    privacyTitle: "隐私就是系统架构。",
    privacyText: "热能网格、毫米波及边缘 AI 在没有脸部影像或个人识别资料的情况下产生人体活动信号，让敏感空间兼备智慧与隐私。",
    contactKicker: "从一个有意义的成果开始",
    contactTitle: "让下一座建筑的表现，与设计同样出色。",
    contactText: "告诉我们物业类型、既有系统和优先目标，我们会提出实际的试点范围、整合路径及成效测量方案。",
    email: "邮件联系项目团队",
    footerLine: "以建筑 AI 与 IoT 构建更安全、精简、高效的物业。",
  },
  ar: {
    nav: ["الحلول", "البرمجيات", "المشاريع", "المنتجات"],
    contact: "تواصل معنا",
    eyebrow: "ذكاء مادي للمباني",
    title: <>ذكاء،<br /><em>مدمج في المبنى.</em></>,
    intro: "تجمع Blutech الاستشعار الدقيق وذكاء الحافة والأجهزة المتصلة وبرمجيات المباني لتحويل الظروف الحية إلى مساحات أكثر أماناً وعمليات أكثر كفاءة وأصول أفضل أداءً.",
    explore: "اكتشف Blutech",
    work: "شاهد المشاريع المختارة",
    trusted: "أداء مثبت في بيئات مبانٍ حية ومعقدة",
    stats: [["منذ 2019", "تطوير ذكاء المباني في هونغ كونغ"], ["100+", "مشروعاً منفذاً في الواقع"], ["200,000+", "جهاز متصل بمنصة Blutech Core"], ["حائز جوائز", "عدة جوائز دولية ومن هونغ كونغ · iF 2024 · HKICT · APICTA"]],
    valueKicker: "المبنى الأفضل نتيجة، وليس مجموعة أجهزة.",
    valueTitle: <>اجعل كل متر مربع<br />يعمل بكفاءة أكبر.</>,
    valueIntro: "صممت Blutech للمالكين وفرق إدارة العقارات وفرق المشاريع، لسد الفجوة بين نية التصميم والأداء اليومي.",
    values: [
      ["01", "حماية قيمة الأصل", "اكتشف الهدر والأعطال والمساحات غير المستغلة قبل أن تصبح مكلفة، مع رؤية موثوقة للعقار أو المحفظة."],
      ["02", "تشغيل أكثر كفاءة", "أتمت الفحوص والتنبيهات والتقارير وأوامر العمل، ودع الفريق يركز على القرارات التي تحتاج إلى خبرة بشرية."],
      ["03", "تجربة أفضل للمستخدم", "استجب للإشغال والراحة والسلامة الفعلية من دون كاميرات في المساحات الحساسة."],
      ["04", "حرية التصميم", "تندمج المستشعرات الهادئة والبروتوكولات المفتوحة وخيارات النشر المرنة في المشاريع الجديدة والمباني القائمة."],
    ],
    bridgeKicker: "من لوحة التصميم إلى التشغيل اليومي",
    bridgeTitle: "للمالكين. وللمشغلين.",
    ownerTitle: "للمالكين",
    ownerText: "حوّل أداء المبنى الحي إلى قرارات أوضح حول الأصل، مع متابعة التكلفة والمخاطر والراحة ونتائج المحفظة.",
    ownerList: ["خفض التكلفة التشغيلية", "حماية الأصل", "بيانات ESG قابلة للتحقق", "رؤية المحفظة"],
    architectTitle: "للمشغلين",
    architectText: "اعرف ما يحتاج إلى اهتمام الآن وانتقل من الإشارة إلى الإجراء. تبقى الحالات والتنبيهات وسير العمل وصحة الأجهزة والتقارير واضحة.",
    architectList: ["حالة حية", "استجابة أسرع", "سير عمل وتنبيهات", "صحة الأجهزة"],
    systemKicker: "نظام واحد · من الموقع إلى البرمجيات",
    systemTitle: "استشعر. افهم. تصرف.",
    systemIntro: "تحول Blutech بيانات المبنى المتفرقة إلى حلقة تشغيل مستمرة، من حالة المساحة إلى الإجراء التالي للفريق أو النظام.",
    layers: [["01", "المساحة", "الأشخاص والهواء والمياه والطاقة والمعدات"], ["02", "الإشارة", "مستشعرات تراعي الخصوصية وأنظمة BMS وIoT القائمة"], ["03", "الذكاء", "ذكاء الحافة والسياق التاريخي والقواعد"], ["04", "الإجراء", "التحكم والتنبيهات وأوامر العمل والتقارير والتحسين"]],
    dashboardLabel: "BLUTECH HALO · التشغيل",
    dashboardTitle: "Halo يجعل حالة المبنى واضحة.",
    dashboardText: "تبقى الحالات الحية والمخططات والتنبيهات والسجل والتقارير وأدوات التحكم واضحة للمستخدم اليومي على الحاسوب أو الهاتف.",
    platformLabel: "BLUTECH CORE · البنية التحتية",
    platformTitle: "Core يبقي التعقيد تحت السيطرة.",
    platformText: "تبقى إدارة الأجهزة والبوابات وصحة المعدات وربط البيانات والقواعد والتكاملات في الطبقة التقنية، منفصلة عن التشغيل اليومي.",
    deployment: "سحابة · سحابة خاصة · داخل الموقع",
    projectsKicker: "مشاريع مختارة",
    projectsTitle: "أداء مثبت حيث تكون النتائج مهمة.",
    projectsIntro: "توضح مشاريع المكاتب الراقية والطيران والخدمات العامة والرعاية الصحية والتجزئة كيف تتكيف طبقة الذكاء نفسها مع متطلبات مختلفة.",
    projects: [
      ["Three Garden Road", "مكتب من الدرجة A · سنترال", "أكثر من 1,000 جهاز متصل يدعم الحمامات الذكية ومراقبة تسرب المياه وجودة الهواء والتنسيق مع HVAC حسب الإشغال وتقارير ESG.", ["1,000+ جهاز متصل", "تنسيق HVAC مباشر", "تكامل تقارير ESG"]],
      ["مطار هونغ كونغ الدولي", "طيران · هونغ كونغ", "مراقبة سلامة الركاب على نطاق المطار تجمع استشعار Heatmap ورؤية المخططات والتنبيهات والتقارير من دون كاميرات تقليدية في المساحات الحساسة.", ["تغطية على نطاق المطار", "رؤية المخططات", "تنبيهات وتقارير"]],
      ["مقر EMSD", "حكومي · كولون باي", "ربط 230 مقصورة من B1 إلى 6/F لتوفير رؤية الإشغال وتشغيل الحمامات الذكية والتكامل مع GWIN.", ["230 مقصورة متصلة", "تغطية B1–6/F", "تكامل GWIN"]],
    ],
    productsKicker: "أجهزة BLUTECH",
    productsTitle: "إشارات يمكنك الوثوق بها.",
    productsIntro: "مستشعرات وواجهات مصممة للمباني تلتقط ما تفوته الأنظمة التقليدية بهدوء وأناقة ومن دون جمع بيانات شخصية غير ضرورية.",
    products: [
      ["HeatMap Pro", "BT337 · استشعار حراري دقيق", "مصفوفة حرارية 16×12 لفهم دقيق للإشغال والمساحة من دون صور كاميرات تقليدية.", "مصفوفة حرارية · إشغال · سير عمل"],
      ["مستشعر جودة الهواء الداخلي", "BT306 · بيئي", "استشعار متصل لدرجة الحرارة والرطوبة وPM2.5 مع خيارات إضافية حسب المشروع.", "بيانات بيئية · اتجاهات · تكامل BMS"],
      ["Smart Info Station", "BT102 · شاشة وواجهة", "محطة معلومات Android كبيرة تجمع بيانات المبنى وIoT عبر الطوابق والمرافق.", "Android · بيانات المبنى · Blutech Halo"],
      ["Smart Signage", "BT101 · شاشة وواجهة", "لافتات متصلة ومدمجة تعرض معلومات المرافق الحية عند نقطة الاستخدام.", "Bluetooth أو Android · بيانات المبنى"],
    ],
    integrationKicker: "الانفتاح هو الأساس",
    integrationTitle: "احتفظ بما يعمل. صِل ما يهم.",
    integrationText: "تعمل Blutech عبر الأنظمة القديمة والحديثة، فلا يتطلب تحديث المبنى الذكي استبدال كل شيء.",
    privacyTitle: "الخصوصية جزء من المعمار.",
    privacyText: "تولد الشبكات الحرارية والموجات المليمترية وذكاء الحافة إشارات مفيدة عن النشاط من دون صور وجوه أو معرفات شخصية.",
    contactKicker: "ابدأ بنتيجة واحدة ذات معنى",
    contactTitle: "اجعل أداء المبنى التالي بجمال تصميمه.",
    contactText: "شاركنا نوع العقار والأنظمة والأولويات، وسنقترح تجربة عملية ومسار تكامل وخطة قياس.",
    email: "راسل فريق المشاريع",
    footerLine: "ذكاء اصطناعي وإنترنت أشياء للمباني الأكثر أماناً وكفاءة وأداءً.",
  },
};

const utilityCopy = {
  en: { liveLabel:"BLUTECH CORE · LIVE ESTATE", liveTitle:"Connected building operations", connected:"Connected devices", hvac:"System integrations", esg:"Data services", live:"Active", included:"Ready", confirmed:"Portfolio-level capability", scroll:"Scroll", exploreSoftware:"Explore Halo & Core", allProjects:"View all projects", catalogue:"View full catalogue", integration:"Integration architecture", privacyLabel:"Privacy-first by design", noCamera:"No camera", noFace:"No face", edgeAI:"Edge AI", liveUi:"LIVE", alertsUi:"ALERTS", reportsUi:"REPORTS", portfolio:"Portfolio overview", building:"Building", actions:"Actions", reporting:"Reporting", assigned:"Assigned", ready:"Ready" },
  tc: { liveLabel:"BLUTECH CORE · 設備網絡", liveTitle:"已連接樓宇營運", connected:"連接設備", hvac:"系統整合", esg:"數據服務", live:"運行中", included:"就緒", confirmed:"資產組合級能力", scroll:"向下瀏覽", exploreSoftware:"了解 Halo 與 Core", allProjects:"查看所有項目", catalogue:"查看完整產品目錄", integration:"了解整合架構", privacyLabel:"私隱優先設計", noCamera:"無攝影機", noFace:"無人臉影像", edgeAI:"邊緣 AI", liveUi:"即時", alertsUi:"警報", reportsUi:"報告", portfolio:"物業組合總覽", building:"樓宇", actions:"事項", reporting:"報告", assigned:"已指派", ready:"就緒" },
  sc: { liveLabel:"BLUTECH CORE · 设备网络", liveTitle:"已连接楼宇运营", connected:"连接设备", hvac:"系统集成", esg:"数据服务", live:"运行中", included:"就绪", confirmed:"资产组合级能力", scroll:"向下浏览", exploreSoftware:"了解 Halo 与 Core", allProjects:"查看所有项目", catalogue:"查看完整产品目录", integration:"了解集成架构", privacyLabel:"隐私优先设计", noCamera:"无摄像头", noFace:"无人脸影像", edgeAI:"边缘 AI", liveUi:"实时", alertsUi:"警报", reportsUi:"报告", portfolio:"物业组合总览", building:"楼宇", actions:"事项", reporting:"报告", assigned:"已指派", ready:"就绪" },
  ar: { liveLabel:"BLUTECH CORE · شبكة الأجهزة", liveTitle:"تشغيل مبانٍ متصلة", connected:"الأجهزة المتصلة", hvac:"تكامل الأنظمة", esg:"خدمات البيانات", live:"نشط", included:"جاهز", confirmed:"قدرة على مستوى المحفظة", scroll:"تمرير", exploreSoftware:"اكتشف Halo وCore", allProjects:"عرض جميع المشاريع", catalogue:"عرض كتالوج المنتجات", integration:"معمارية التكامل", privacyLabel:"الخصوصية أولاً في التصميم", noCamera:"بلا كاميرا", noFace:"بلا صور وجوه", edgeAI:"ذكاء الحافة", liveUi:"مباشر", alertsUi:"تنبيهات", reportsUi:"تقارير", portfolio:"نظرة على المحفظة", building:"المبنى", actions:"الإجراءات", reporting:"التقارير", assigned:"مسند", ready:"جاهز" },
};

function BrandMark() {
  const { language } = useSiteLanguage();
  return (
    <Link className="brand" href={localePath("/", language)} aria-label="Blutech home">
      <img src="/products/blutech-logo-on-dark.svg" alt="Blutech" />
    </Link>
  );
}

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

const projectImages = [
  "/images/project-3gr.webp",
  "/images/project-airport.webp",
  "/images/project-emsd.webp",
  "/images/project-immigration.webp",
  "/images/project-pmh.webp",
  "/images/project-emsd.webp",
];

const productImages = [
  "/images/heatmap-pro.webp",
  "/images/iaq.webp",
  "/images/info-station.webp",
  "/products/bt101-smart-signage.webp",
];

const productSlugs = [
  "bt337-heatmap-pro",
  "bt306-iaq5",
  "bt102-smart-info-station",
  "bt101-smart-signage",
];

const projectSlugs = ["three-garden-road", "hong-kong-international-airport", "emsd-headquarters"];

export default function Home() {
  const { language: lang } = useSiteLanguage();
  const t = copy[lang];
  const u = utilityCopy[lang];

  return (
    <main id="top" className={lang === "tc" || lang === "sc" ? "cjk" : lang === "ar" ? "rtl" : ""}>
      <SiteHeader />

      <section className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <Link className="button button-light" href={localePath("/software", lang)}>{t.explore}<Arrow /></Link>
            <Link className="text-link light-link" href={localePath("/projects", lang)}>{t.work}<Arrow /></Link>
          </div>
        </div>
        <div className="live-card" aria-label="Blutech Halo live building status example">
          <div className="live-top"><span>{u.liveLabel}</span><i /></div>
          <strong>{u.liveTitle}</strong>
          <div className="signal-row"><span>{u.connected}</span><b>200,000+</b></div>
          <div className="signal-row"><span>{u.hvac}</span><b>{u.live}</b></div>
          <div className="signal-row"><span>{u.esg}</span><b>{u.included}</b></div>
          <small>{u.confirmed}</small>
        </div>
        <a href="#value" className="scroll-cue" aria-label="Scroll to value section"><span />{u.scroll}</a>
      </section>

      <section className="proof home-proof" aria-label="Company facts">
        <p>{t.trusted}</p>
        <div className="proof-logos"><span>HKIA</span><span>MTR</span><span>EMSD</span><span>IFC</span><span>HSBC</span><span>HKJC</span></div>
        <div className="proof-evidence">
          <div className="stats">
            {t.stats.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section id="value" className="value home-value section-pad">
        <div className="section-intro">
          <p className="eyebrow">{t.valueKicker}</p>
          <h2>{t.valueTitle}</h2>
          <p>{t.valueIntro}</p>
        </div>
        <div className="value-list">
          {t.values.slice(0, 3).map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="platform" className="audiences home-audiences section-pad dark-section">
        <div className="section-intro light-copy">
          <p className="eyebrow light">{t.bridgeKicker}</p>
          <h2>{t.bridgeTitle}</h2>
        </div>
        <div className="audience-grid">
          <article>
            <div className="audience-visual owner-visual" aria-hidden="true">
              <div className="mini-nav"><i /><i /><i /></div>
              <div className="mini-chart"><span /><span /><span /><span /><span /><span /></div>
              <div className="mini-metrics"><b>{u.liveUi}</b><b>{u.alertsUi}</b><b>{u.reportsUi}</b></div>
            </div>
            <p className="audience-label">01 / OWN</p>
            <h3>{t.ownerTitle}</h3><p>{t.ownerText}</p>
            <ul>{t.ownerList.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <div className="audience-visual architect-visual" aria-hidden="true">
              <div className="building-line"><i /><i /><i /><i /></div>
              <div className="spec-label one">LoRaWAN</div><div className="spec-label two">BACnet</div><div className="spec-label three">API</div>
            </div>
            <p className="audience-label">02 / OPERATE</p>
            <h3>{t.architectTitle}</h3><p>{t.architectText}</p>
            <ul>{t.architectList.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="system home-system section-pad">
        <div className="system-heading">
          <div>
            <p className="eyebrow">{t.systemKicker}</p>
            <h2>{t.systemTitle}</h2>
          </div>
          <p>{t.systemIntro}</p>
        </div>
        <div className="product-duo">
          <article className="dashboard-panel">
            <div className="panel-copy">
              <span>{t.dashboardLabel}</span>
              <h3>{t.dashboardTitle}</h3>
              <p>{t.dashboardText}</p>
            </div>
            <div className="dashboard-ui" aria-hidden="true">
              <div className="dash-sidebar"><b>HALO</b><i /><i /><i /><i /></div>
              <div className="dash-main">
                <div className="dash-head"><span>{u.portfolio}</span><i /></div>
                <div className="dash-kpis"><b><small>{u.building}</small>{u.live}</b><b><small>{u.actions}</small>{u.assigned}</b><b><small>{u.reporting}</small>{u.ready}</b></div>
                <div className="dash-graph"><i /><svg viewBox="0 0 420 110"><path d="M0 88 C45 81 55 52 95 58 S151 89 190 58 S247 31 284 49 S349 80 420 18" /></svg></div>
              </div>
            </div>
          </article>
          <article className="platform-panel">
            <div className="platform-art" aria-hidden="true">
              <div className="platform-core">CORE<i /></div>
              {["BMS", "HVAC", "IAQ", "METER", "ACCESS", "IoT"].map((item, index) => <span key={item} className={"orbit orbit-" + index}>{item}</span>)}
            </div>
            <div className="panel-copy">
              <span>{t.platformLabel}</span>
              <h3>{t.platformTitle}</h3>
              <p>{t.platformText}</p>
              <small>{t.deployment}</small>
            </div>
          </article>
        </div>
        <a className="text-link system-link" href={localePath("/software", lang)}>{u.exploreSoftware} <Arrow /></a>
      </section>

      <section id="projects" className="projects section-pad">
        <div className="section-intro">
          <p className="eyebrow">{t.projectsKicker}</p>
          <h2>{t.projectsTitle}</h2>
          <p>{t.projectsIntro}</p>
        </div>
        <div className="project-grid home-project-grid">
          {t.projects.slice(0, 3).map(([name, type, description, tags], index) => (
            <Link key={name as string} href={localePath(`/projects/${projectSlugs[index]}`, lang)} className="project-card">
              <div className="project-image">
                <img src={projectImages[index]} alt={name + " project"} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-copy">
                <p>{type as string}</p>
                <h3>{name as string}</h3>
                <div className="project-detail">
                  <p>{description as string}</p>
                  <ul>{(tags as string[]).map(tag => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link className="text-link section-link" href={localePath("/projects", lang)}>{u.allProjects} <Arrow /></Link>
      </section>

      <section id="products" className="products dark-section">
        <div className="section-pad product-heading">
          <div className="section-intro light-copy">
            <p className="eyebrow light">{t.productsKicker}</p>
            <h2>{t.productsTitle}</h2>
            <p>{t.productsIntro}</p>
          </div>
          <Link className="text-link light-link catalogue-link" href={localePath("/products", lang)}>{u.catalogue} <Arrow /></Link>
        </div>
        <div className="home-product-grid">
          {t.products.map(([name, label, description, specs], index) => (
            <a key={name} href={localePath(`/products/${productSlugs[index]}`, lang)} className="home-product-card">
              <div className="home-product-media">
                <img src={productImages[index]} alt={name + " by Blutech"} />
              </div>
              <div className="home-product-copy">
                <p>{label}</p>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{specs}</span>
                <span className="award-mark if-mark" role="img" aria-label="iF Design Award">iF</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="trust-brief section-pad">
        <article>
          <p className="eyebrow">{t.integrationKicker}</p>
          <h2>{t.integrationTitle}</h2>
          <p>{t.integrationText}</p>
          <a className="text-link" href={localePath("/technology", lang)}>{u.integration} <Arrow /></a>
        </article>
        <article className="privacy-brief">
          <span>{u.privacyLabel}</span>
          <h2>{t.privacyTitle}</h2>
          <p>{t.privacyText}</p>
          <div className="privacy-proof"><b>{u.noCamera}</b><b>{u.noFace}</b><b>{u.edgeAI}</b></div>
        </article>
      </section>

      <section id="contact" className="contact section-pad">
        <p className="eyebrow">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <div className="contact-bottom">
          <p>{t.contactText}</p>
          <a className="button contact-button" href="mailto:enquiry@blutech.io?subject=Blutech%20Project%20Enquiry">{t.email}<Arrow /></a>
        </div>
      </section>

      <footer>
        <div><BrandMark /><p>{t.footerLine}</p></div>
        <div className="footer-links">
          <Link href={localePath("/software", lang)}>Blutech Halo & Core</Link>
          <Link href={localePath("/projects", lang)}>{t.nav[2]}</Link>
          <a href="mailto:enquiry@blutech.io">enquiry@blutech.io</a>
          <a href="tel:+85221807157">2180 7157</a>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Blutech IoT Limited</span>
          <span>Hong Kong · China · Qatar</span>
        </div>
      </footer>
    </main>
  );
}
