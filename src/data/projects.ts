import projectTgr from "../assets/bluta-project-3-Garden-Road-1.webp";
import projectAirport from "../assets/bluta-project-Hongkong-airport-1.webp";
import projectIfc from "../assets/bluta-project-IFC-mall-1.webp";
import projectImmd from "../assets/bluta-project-Immigration-department-1.webp";
import projectEmsd from "../assets/bluta-project-EMSD-1.webp";
import projectMetro from "../assets/bluta-project-metroplaza-1.webp";
import projectOlympian from "../assets/bluta-project-Olympian-city-1.webp";
import projectPmh from "../assets/bluta-project-Princess-Margaret-Hospital-1.webp";

export type ProjectKpi = { value: string; label: string };
export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  outcome: string;
  image: string;
  kpis: ProjectKpi[];
  delivered: string[];
  benefits: { title: string; body: string }[];
  software?: string[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "three-garden-road",
    title: "Three Garden Road",
    category: "Grade A office",
    location: "Central, Hong Kong",
    summary: "A live, estate-scale connected-building deployment linking more than 1,000 devices to operations, HVAC and ESG reporting.",
    outcome: "Occupancy data now supports live HVAC coordination while washroom, leakage and environmental signals give the property team one clearer operational view.",
    image: projectTgr.src,
    kpis: [
      { value: "1,000+", label: "connected devices" },
      { value: "Live", label: "occupancy-led HVAC coordination" },
      { value: "ESG", label: "reporting integration" },
    ],
    delivered: ["Smart washroom sensing", "Occupancy-led HVAC coordination", "Water-leakage monitoring", "Indoor-air-quality sensing", "Connected building sensors", "ESG reporting data"],
    benefits: [
      { title: "Useful beyond one room", body: "A shared data layer lets the owner manage distributed devices and operating signals across the property." },
      { title: "HVAC follows actual use", body: "Occupancy is used as the primary live input for the operating HVAC sequence." },
      { title: "Evidence for reporting", body: "Connected operational data can be carried into the client’s ESG reporting workflow." },
    ],
    software: ["Blutech Halo", "Blutech Core"],
    note: "Smart Lighting has been proposed for the property but is not represented here as delivered work.",
  },
  {
    slug: "hong-kong-international-airport",
    title: "Hong Kong International Airport",
    category: "Aviation",
    location: "Hong Kong",
    summary: "Airport-wide passenger-safety monitoring for accessible washrooms using the Blutech HeatMap Series.",
    outcome: "Operations teams receive privacy-preserving safety events with floorplan context, dashboards, alerts and reporting across a high-traffic public environment.",
    image: projectAirport.src,
    kpis: [
      { value: "Airport-wide", label: "deployment scope" },
      { value: "74", label: "monitored spaces" },
      { value: "4", label: "operator workflows" },
    ],
    delivered: ["HeatMap Series sensing", "Accessible-washroom safety monitoring", "Floorplan view", "Operational dashboards", "Alert workflow", "Reporting"],
    benefits: [
      { title: "Passenger safety with privacy", body: "Thermal sensing supports safety monitoring without conventional identifiable video in sensitive spaces." },
      { title: "Location is immediately clear", body: "Floorplan context helps operators understand where an event occurred before dispatching a response." },
      { title: "A complete operating workflow", body: "Alerts, dashboards and reports turn field events into information the airport team can use." },
    ],
    software: ["Blutech Halo", "Blutech Core"],
  },
  {
    slug: "emsd-headquarters",
    title: "EMSD Headquarters",
    category: "Government",
    location: "Kowloon Bay, Hong Kong",
    summary: "Smart-washroom occupancy monitoring across B1 to 6/F, connected to the Government-Wide IoT Network.",
    outcome: "A building-wide occupancy view gives the facility team dependable utilisation data through the government’s GWIN cloud environment.",
    image: projectEmsd.src,
    kpis: [
      { value: "230", label: "cubicles monitored" },
      { value: "B1–6/F", label: "coverage" },
      { value: "GWIN", label: "government cloud integration" },
    ],
    delivered: ["Cubicle occupancy monitoring", "LoRaWAN connectivity", "B1–6/F deployment", "GWIN cloud integration"],
    benefits: [
      { title: "Whole-building visibility", body: "The team can understand washroom use across multiple floors instead of relying on isolated manual checks." },
      { title: "Government-cloud ready", body: "The deployment connects to GWIN within the agreed government technology environment." },
      { title: "Purposefully narrow scope", body: "The case is presented accurately as an occupancy deployment, without adding unconfirmed functions." },
    ],
  },
  {
    slug: "metroplaza",
    title: "Metroplaza",
    category: "Retail & commercial",
    location: "Kwai Fong, Hong Kong",
    summary: "A connected smart-washroom and ventilation deployment combining 300+ devices, public information and occupancy-aware control.",
    outcome: "Occupancy and environmental data support fan, ventilation and HVAC workflows while live information is presented through Blutech displays.",
    image: projectMetro.src,
    kpis: [
      { value: "300+", label: "connected devices" },
      { value: "180", label: "cubicles" },
      { value: "Halo + Core", label: "software layers" },
    ],
    delivered: ["Smart washroom", "Fan and ventilation control", "Occupancy and temperature/humidity inputs for HVAC", "Smart Info Station", "Smart Signage", "Blutech Halo and Core"],
    benefits: [
      { title: "Information for visitors", body: "Smart Info Station and Smart Signage make live facility information visible at the point of use." },
      { title: "Control follows demand", body: "Occupancy and temperature/humidity provide practical inputs for ventilation and HVAC operation." },
      { title: "One system to operate", body: "Halo supports daily use while Core manages the devices, gateways and technical integration underneath." },
    ],
    software: ["Blutech Halo", "Blutech Core"],
  },
  {
    slug: "hospital-patient-safety",
    title: "Hospital Patient Safety",
    category: "Healthcare",
    location: "Hong Kong hospital network",
    summary: "Privacy-preserving fall and incident detection in accessible toilets, with local alarm, nurse notification and dashboard workflows.",
    outcome: "LoRaWAN and Bluetooth work together so a safety event can create an immediate local response and remain visible to authorised teams.",
    image: projectPmh.src,
    kpis: [
      { value: "7", label: "named hospital sites" },
      { value: "Local", label: "alarm response" },
      { value: "Connected", label: "nurse and dashboard notification" },
    ],
    delivered: ["Fall and incident detection", "Accessible-toilet safety", "Local audible/visual alarm", "Nurse notification", "Dashboard monitoring", "LoRaWAN plus Bluetooth"],
    benefits: [
      { title: "Safety without conventional cameras", body: "Privacy-preserving sensing is suited to accessible toilets and other sensitive spaces." },
      { title: "Immediate response on site", body: "Bluetooth and local control can activate the nearby alarm without waiting for a cloud round trip." },
      { title: "Visible to the care team", body: "LoRaWAN carries the event into authorised notification and dashboard workflows." },
    ],
    software: ["Blutech Halo", "Blutech Core"],
  },
  {
    slug: "immigration-department-tko",
    title: "Immigration Department — Tseung Kwan O",
    category: "Government service",
    location: "Tseung Kwan O, Hong Kong",
    summary: "Live queue monitoring for passport and identity-card service machines, presented through Smart Display.",
    outcome: "Visitors can understand current queue conditions before choosing where to wait, while staff gain a clearer view of demand across the service area.",
    image: projectImmd.src,
    kpis: [
      { value: "Live", label: "queue status" },
      { value: "Smart Display", label: "public information" },
      { value: "TKO", label: "service location" },
    ],
    delivered: ["Service-machine queue sensing", "Live queue status", "BT107 Smart Display", "Public-facing information workflow"],
    benefits: [
      { title: "A clearer visitor journey", body: "Live status helps visitors decide where to queue rather than discovering congestion only after arrival." },
      { title: "Information at the right place", body: "Smart Display carries current service information into the physical waiting environment." },
      { title: "Operational visibility", body: "The same status signals can support staff understanding of demand across the service floor." },
    ],
  },
  {
    slug: "hong-kong-west-kowloon-station",
    title: "Hong Kong West Kowloon Station",
    category: "Rail transport",
    location: "West Kowloon, Hong Kong",
    summary: "A multi-function smart-washroom deployment connecting supplies, safety, occupancy, lighting, IAQ and public information.",
    outcome: "Passengers see clearer facility information while the operating team can monitor consumables, water events, space use and environmental conditions through Halo and Core.",
    image: projectAirport.src,
    kpis: [
      { value: "7", label: "connected operating functions" },
      { value: "BT107", label: "Smart Display" },
      { value: "Halo + Core", label: "software layers" },
    ],
    delivered: ["Toilet-paper monitoring", "Soap-level monitoring", "Water-leakage detection", "HeatMap occupancy sensing", "Lighting integration", "Indoor-air-quality monitoring", "BT107 Smart Display"],
    benefits: [
      { title: "Fewer blind checks", body: "Supply and facility status can be reviewed from live data instead of relying only on fixed inspection rounds." },
      { title: "Better passenger information", body: "BT107 presents current facility information in a format designed for shared public areas." },
      { title: "One operating picture", body: "Halo and Core bring different devices and workflows into a coordinated system." },
    ],
    software: ["Blutech Halo", "Blutech Core"],
  },
  {
    slug: "olympian-city",
    title: "Olympian City 1, 2 & 3",
    category: "Retail portfolio",
    location: "West Kowloon, Hong Kong",
    summary: "Portfolio-wide environmental and risk monitoring across all three Olympian City phases, with BMS-connected HVAC optimisation.",
    outcome: "Leakage, noise, smoke, smoking, occupancy and environmental signals give the property team earlier visibility and support HVAC optimisation through the BMS.",
    image: projectOlympian.src,
    kpis: [
      { value: "3 phases", label: "portfolio coverage" },
      { value: "BMS", label: "HVAC integration" },
      { value: "Multi-risk", label: "environmental monitoring" },
    ],
    delivered: ["Water-leakage monitoring", "Noise sensing", "Independent IoT smoke monitoring", "Smoking detection", "HeatMap sensing", "Temperature/humidity sensing", "BMS integration for HVAC optimisation"],
    benefits: [
      { title: "A portfolio view of risk", body: "Multiple environmental and facility signals can be managed consistently across Olympian City 1, 2 and 3." },
      { title: "Earlier operational awareness", body: "Connected events help teams identify abnormal conditions before a routine inspection would." },
      { title: "Environmental data informs HVAC", body: "Temperature and humidity signals are connected to the BMS to support HVAC optimisation." },
    ],
    note: "The IoT smoke monitoring described here is separate from the statutory fire-alarm system.",
  },
  {
    slug: "ifc-mall",
    title: "IFC Mall",
    category: "Retail & office",
    location: "Central, Hong Kong",
    summary: "Smart facility information and washroom technology integrated into a major retail and office destination.",
    outcome: "Connected sensing and public information help make facility availability clearer for visitors and more visible to the operating team.",
    image: projectIfc.src,
    kpis: [
      { value: "Live", label: "facility information" },
      { value: "Integrated", label: "washroom technology" },
      { value: "Public-facing", label: "information experience" },
    ],
    delivered: ["Smart washroom technology", "Facility-status information", "Connected display experience"],
    benefits: [
      { title: "Clearer availability", body: "Visitors can see useful facility information before entering the space." },
      { title: "Designed for a premium destination", body: "The information layer is intended to sit calmly within a high-quality retail environment." },
      { title: "Connected operations", body: "The same field signals can support the property team’s day-to-day visibility." },
    ],
  },
];

export const deploymentSites = {
  "Commercial offices": ["Three Garden Road", "ICC Office", "OGCIO Office", "Efficiency Office", "Towngas Office Tower", "HSBC Office Building", "Central Plaza", "Exchange Tower", "China Resources Building", "Skyline Tower", "Jardine House", "Chater House", "Exchange Square", "York House", "Lee Garden One", "Tsim Sha Tsui Centre", "Pacific Center", "KT240", "KT350"],
  "Retail & mixed-use": ["Metroplaza", "MOKO", "V City", "V Walk", "apm", "East Point City", "Landmark North", "Chelsea Heights", "Tai Po Mega Mall", "IFC Mall", "Nan Fung Plaza", "East Town Building", "CityWalk", "Olympian City 1, 2 & 3", "Shatin Galleria", "China Hong Kong City", "Domain", "TMT Plaza Phase 1", "TMT Plaza Phase 2", "The Staunton", "Commune Modern", "Waterside Plaza", "Grand Regentville", "Silver Sea Place", "Regentville Shopping Mall", "Corinthia by the Sea"],
  "Healthcare": ["Princess Margaret Hospital", "Queen Mary Hospital", "North Lantau Hospital", "MacLehose Medical Rehabilitation Centre", "TWGHs Fung Yiu King Hospital", "The Duchess of Kent Children’s Hospital at Sandy Bay", "Union Hospital"],
  "Government, education & public": ["EMSD Headquarters", "Immigration Department — Tseung Kwan O", "sky100 Hong Kong Observation Deck", "HKUST", "Hong Kong Academy for Performing Arts"],
  "Transport & venues": ["Hong Kong International Airport", "Hong Kong West Kowloon Station", "HKJC Sha Tin Racecourse"],
  "Hospitality & residential": ["Gold Coast Yacht & Country Club", "Gold Coast Residences Club House", "Gold Coast Plaza", "Gold Coast Hotel", "Royal Pacific Hotel"],
};
