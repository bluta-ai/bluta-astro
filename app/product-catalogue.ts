export type ProductFeature = { title: string; body: string };
export type ProductFact = { label: string; value: string };

export type Product = {
  slug: string;
  model: string;
  name: string;
  category: string;
  summary: string;
  outcome: string;
  description: string;
  image?: string;
  gallery?: string[];
  imageFit?: "cover" | "contain";
  imageNote?: string;
  evidence?: string;
  deployment?: string;
  installation?: string;
  protocols?: string[];
  features: ProductFeature[];
  applications: string[];
  flow: string[];
  facts?: ProductFact[];
  award?: string;
  featured?: boolean;
};

export const categories = [
  "Display & Interface",
  "Occupancy & Spatial",
  "Smart Lighting",
  "Facility Operations",
  "Environmental",
  "Water Leakage",
  "Waste",
  "Gateway",
  "Smart Washroom",
] as const;

export const products: Product[] = [
  {
    slug: "bt102-smart-info-station", model: "BT102", name: "Smart Info Station", category: "Display & Interface",
    summary: "A wall-mounted information interface that brings live building and IoT data into the physical space.",
    outcome: "Give visitors and operators one clear, architectural view of live facility information.",
    description: "BT102 combines a reflective architectural finish, Android intelligence and a configurable user interface. It can unite washroom occupancy, nursery availability, indoor-air quality, queues and external information in one calm, project-specific experience.",
    image: "/images/info-station.webp", award: "iF Design Award", evidence: "Deployed at IFC Mall, HKAPA, Metroplaza and KTR350",
    deployment: "Wall-mounted in high-visibility public and shared spaces, with content and data sources configured for each building.",
    installation: "Wall-mounted; final power, network, fixing and interface details are coordinated with the project design.",
    protocols: ["Android", "Configurable UI / CMS", "Building & IoT data"],
    features: [
      { title: "One information layer", body: "Combine occupancy, IAQ, queue, facility and external data instead of adding separate screens." },
      { title: "Project-specific interface", body: "Configure the information hierarchy and visual language around the property, audience and operations brief." },
      { title: "Architectural presence", body: "A reflective, wall-mounted object designed to read as part of the interior rather than conventional equipment." },
    ],
    applications: ["Smart washroom information", "Visitor and tenant communication", "Facility-status dashboards", "Public-area wayfinding and live data"],
    flow: ["Building data", "Blutech platform", "Configured BT102 interface", "Visitor or operator"], featured: true,
  },
  {
    slug: "bt101-smart-signage", model: "BT101", name: "Smart Signage", category: "Display & Interface",
    summary: "Compact connected signage for presenting live facility information and project content at the point of use.",
    outcome: "Bring operational information closer to the point of use without adding visual clutter.",
    description: "BT101 is available for responsive local display through Bluetooth and as an Android-connected version for internet-based content. The connected configuration can bring together IAQ readings and other building data in a focused, compact format.",
    image: "/products/bt101-smart-signage.webp", gallery: ["/products/bt101-smart-signage-interior.webp"], award: "iF Design Award", evidence: "Recent HKUST purchase",
    deployment: "Designed for reception points, facility entrances and other locations where a compact information surface is more appropriate than large-format signage.",
    installation: "Placement, power, network and enclosure details are confirmed for the selected Bluetooth or Android configuration.",
    protocols: ["Bluetooth option", "Android option", "Building data"],
    features: [
      { title: "Local or connected", body: "Choose responsive Bluetooth presentation or an Android version connected to internet and building data." },
      { title: "Live facility context", body: "Present IAQ, status information and project content in a legible format close to the user." },
      { title: "Compact deployment", body: "Add a useful digital touchpoint where a full information station would be visually excessive." },
    ],
    applications: ["IAQ display", "Room or facility status", "Reception information", "Local service messaging"],
    flow: ["Local or cloud data", "Bluetooth / Android", "BT101 display", "Occupant"], featured: true,
  },
  {
    slug: "bt103-tv-box", model: "BT103", name: "Blutech TV Box", category: "Display & Interface",
    summary: "An Android multimedia box that turns compatible customer displays into managed building-information endpoints.",
    outcome: "Reuse suitable displays while adding centrally managed content and live data.",
    description: "BT103 connects to an existing television or display by HDMI and adds Blutech-managed information and multimedia functions. Wi-Fi or Ethernet provides the network connection, creating a display experience similar in purpose to BT102 without replacing a suitable screen.",
    image: "/products/bt103-tv-box.webp", imageFit: "contain", evidence: "In use at Sha Tin Racecourse and Kai Tak 2B1 / 1E1",
    deployment: "Installed behind or close to a compatible display, with the visual interface configured for the project.",
    installation: "Requires a compatible HDMI display plus agreed Wi-Fi or Ethernet connectivity and power.",
    protocols: ["Android", "HDMI", "Wi-Fi", "Ethernet"],
    features: [
      { title: "Use the screen already specified", body: "Add managed content to a suitable customer display instead of introducing another proprietary panel." },
      { title: "Connected content", body: "Combine multimedia, building data and facility information through an Android-based endpoint." },
      { title: "Flexible network path", body: "Connect through Wi-Fi or Ethernet according to the room and project infrastructure." },
    ],
    applications: ["Public information displays", "Smart washroom dashboards", "Facility and event information", "Retrofit digital signage"],
    flow: ["CMS and building data", "Wi-Fi / Ethernet", "BT103 via HDMI", "Customer display"],
  },
  {
    slug: "bt104-smart-panel", model: "BT104", name: "Smart Panel", category: "Display & Interface",
    summary: "A compact touchpoint for local status, information and facility interaction.", outcome: "Place the right information where occupants and teams need it.",
    description: "BT104 is a current Blutech display product for projects that need a smaller, more local interface. Its final screen content, interfaces and mounting arrangement are configured to the project brief rather than treated as a generic consumer tablet.",
    evidence: "Deployed at Tuen Mun Plaza", deployment: "Suitable for local facility touchpoints where a clear status or information panel supports the user journey.",
    installation: "Display size, interfaces, mounting and content workflow are confirmed in the current product submittal.",
    protocols: ["Project CMS", "Facility data", "Configured interface"],
    features: [
      { title: "Information at the decision point", body: "Place relevant live status where an occupant or operator needs to act." },
      { title: "Configured around the property", body: "Content structure and interaction are tailored to the site and operational workflow." },
      { title: "Compact architectural touchpoint", body: "Use a smaller display format where large signage would interrupt the interior." },
    ],
    applications: ["Local status display", "Facility touchpoint", "Tenant or visitor information", "Project-specific interaction"],
    flow: ["Facility or content data", "Configured workflow", "BT104 panel", "Local user"],
  },
  {
    slug: "bt107-smart-display", model: "BT107", name: "Smart Display", category: "Display & Interface",
    summary: "A managed 43-inch display for live facility status and building information.", outcome: "Create a legible, consistent information layer across shared spaces.",
    description: "BT107 packages the display endpoint as a complete 43-inch managed display. It is intended for projects that want a known screen format for facility content, with the final interface and connection schedule confirmed for the installation.",
    evidence: "43-inch product in use at MMRC", deployment: "Suitable for shared areas, facility entrances and operational information points that need a larger viewing distance.",
    installation: "Wall support, power, network, content management and final interfaces are coordinated with the project team.",
    protocols: ["43-inch display", "Managed content", "Building information"],
    features: [
      { title: "Known display format", body: "A complete 43-inch endpoint for projects that prefer a packaged screen solution." },
      { title: "Managed information", body: "Keep facility status and project content consistent across shared environments." },
      { title: "Readable at distance", body: "Support public-area communication where a compact panel would be too small." },
    ],
    applications: ["Facility status display", "Public-area information", "Smart washroom overview", "Operations communication"],
    flow: ["Managed content", "Project connection", "BT107 display", "Shared audience"],
  },
  {
    slug: "bt338-heatmap-fusion", model: "BT338", name: "HeatMap Fusion", category: "Occupancy & Spatial",
    summary: "Thermal and 60 GHz mmWave sensor fusion for richer activity understanding without conventional identifiable video.",
    outcome: "Support occupancy, long-stay and safety workflows in spaces where privacy matters.",
    description: "BT338 combines a 16×12 thermal array with 60 GHz mmWave and local AI processing. It can detect presence, movement, temperature change, falls or accidents, no-motion and unusual long-stay conditions without producing camera images or personal identifiers.",
    image: "/images/heatmap-fusion.webp", evidence: "Deployed at Queen Mary Hospital, Hong Kong International Airport, Three Garden Road and Immigration Department Headquarters",
    deployment: "Designed for privacy-sensitive cubicles, accessible toilets and operational areas where occupancy and safety events need richer context.",
    installation: "Preferred ceiling height is 2.8 m or below. Coverage and algorithm settings are validated against the exact room geometry.",
    protocols: ["LoRaWAN 1.0.3 Class C", "Wi-Fi AP setup", "Bluetooth Long Range on BT338XL"],
    features: [
      { title: "Two sensing modes, one decision", body: "Fuse thermal patterns and mmWave movement to build a more robust local interpretation." },
      { title: "Privacy by sensing method", body: "No conventional camera image or personal identifier is created for the workflow." },
      { title: "Safety-aware events", body: "Support fall, accident, no-motion, long-stay and unusual-activity logic alongside occupancy." },
    ],
    applications: ["Accessible toilet safety", "Cubicle occupancy", "Long-stay or no-motion alerting", "Privacy-sensitive space analytics"],
    flow: ["Thermal + mmWave", "Edge AI interpretation", "LoRaWAN event", "Platform or local response"],
    facts: [
      { label: "Thermal array", value: "16 × 12" }, { label: "Radar", value: "60 GHz mmWave" }, { label: "Preferred ceiling", value: "≤ 2.8 m" },
      { label: "Indicative detection area", value: "2.2 × 3.5 m at 2.5 m; 2.7 × 3.7 m at 2.7 m; 3.2 × 3.9 m at 3.0 m" },
    ], featured: true,
  },
  {
    slug: "bt337-heatmap-pro", model: "BT337", name: "HeatMap Pro", category: "Occupancy & Spatial",
    summary: "Privacy-preserving 16×12 thermal sensing for occupancy and spatial insight.", outcome: "Understand how space is used without capturing facial imagery.",
    description: "BT337 uses a low-resolution thermal array to interpret occupancy and behaviour without a conventional camera. It gives property teams useful real-time signals while helping architects and consultants address privacy-sensitive locations.",
    image: "/images/heatmap-pro.webp", award: "iF Design Award", evidence: "Deployment experience at Three Garden Road, IFC Mall, Metroplaza, Princess Margaret Hospital, Immigration Department Headquarters and EMSD Headquarters",
    deployment: "Used for occupancy, traffic steering, energy optimisation, accessible-toilet events and other non-camera facility workflows.",
    installation: "Coverage, ceiling position and event thresholds are coordinated with the room geometry and intended workflow.",
    protocols: ["16×12 thermal array", "Privacy-safe events", "Platform integration"],
    features: [
      { title: "Useful, not identifiable", body: "Interpret low-resolution thermal patterns without capturing facial detail or conventional video." },
      { title: "Live occupancy signal", body: "Provide operators and public-facing systems with a current view of space use." },
      { title: "Operational intelligence", body: "Connect occupancy to lighting, traffic guidance, alerts or availability displays." },
    ],
    applications: ["Occupancy analytics", "Energy optimisation", "Traffic steering", "Accessible-toilet event detection"],
    flow: ["Thermal pattern", "Local interpretation", "Occupancy event", "Dashboard, display or automation"],
    facts: [{ label: "Thermal array", value: "16 × 12" }, { label: "Image output", value: "No conventional camera image" }],
  },
  {
    slug: "bt303-heatmap-8x8", model: "BT303", name: "HeatMap 8×8", category: "Occupancy & Spatial",
    summary: "A proven 8×8 thermal-grid sensor for privacy-safe occupancy signals.", outcome: "Add dependable occupancy awareness to retrofit and smart-washroom projects.",
    description: "BT303 was Blutech's first heatmap product. Its 8×8 thermal grid can indicate occupancy, approximate count, dwell, long-stay and no-motion with minimal privacy concern. It provides a lower-cost, lower-resolution option where BT337 or BT338 is not required.",
    image: "/products/bt303-heatmap-8x8.webp", gallery: ["/products/bt303-heatmap-8x8-interior.webp"], evidence: "Used per cubicle at Three Garden Road, hospitals and accessible airport toilets",
    deployment: "A practical retrofit sensor for individual cubicles and compact areas with ceilings no higher than 3 m.", installation: "Ceiling-mounted at up to 3 m. Wi-Fi supports live local 8×8 adjustment during setup.",
    protocols: ["LoRa", "Wi-Fi setup", "Bluetooth local interaction"],
    features: [
      { title: "Low-resolution thermal sensing", body: "Detect presence and approximate activity without the imagery associated with a camera." },
      { title: "Local commissioning", body: "Use Wi-Fi to view the 8×8 field and adjust the installation in real time." },
      { title: "Direct local response", body: "Bluetooth can interact with nearby devices, such as triggering an indicator for a long-stay event." },
    ],
    applications: ["Cubicle occupancy", "Long-stay detection", "Accessible toilet monitoring", "Retrofit people counting"],
    flow: ["8×8 thermal grid", "Local event logic", "LoRa upload", "Cloud or Bluetooth response"],
    facts: [{ label: "Thermal array", value: "8 × 8" }, { label: "Ceiling height", value: "≤ 3 m" }], featured: true,
  },
  {
    slug: "bt321-pir-motion-sensor", model: "BT321", name: "PIR Motion Sensor", category: "Occupancy & Spatial",
    summary: "A PIR motion input that can trigger assigned Bluetooth lighting groups directly.", outcome: "Respond to movement immediately while keeping building-wide control and scheduling available.",
    description: "BT321 supports fast local lighting response without waiting for a gateway or cloud round trip. The PIR can broadcast directly to its assigned Bluetooth lighting group, while the gateway manages status, settings and schedules through the wider platform.",
    image: "/products/bt321-pir-motion-sensor-visual.webp", evidence: "Designed for project-specific lift-lobby, corridor and shared-area lighting workflows",
    deployment: "Designed for retrofit lighting and practical motion-triggered workflows in circulation and shared spaces.", installation: "Sensor position and group assignment are validated against movement paths, lighting zones and the agreed control sequence.",
    protocols: ["PIR", "Bluetooth direct control", "Gateway-managed settings"],
    features: [
      { title: "Immediate local trigger", body: "Broadcast directly to the assigned Bluetooth lighting group without a gateway in the critical response path." },
      { title: "Layered control", body: "Let the gateway manage device status and schedules while local logic continues to respond." },
      { title: "Practical energy sequence", body: "Support occupied, standby and long-vacancy lighting states according to the project brief." },
    ],
    applications: ["Corridor lighting", "Lift-lobby lighting", "Retrofit motion control", "Local occupancy events"],
    flow: ["PIR movement", "Bluetooth broadcast", "Assigned lighting group", "Gateway status and schedule"],
  },
  {
    slug: "blutech-smart-lighting-control", model: "SYSTEM", name: "Smart Lighting Control", category: "Smart Lighting",
    summary: "Edge-first lighting control that combines occupancy, daylight and schedules with building-wide visibility.",
    outcome: "Reduce lighting energy while keeping every local response immediate, resilient and comfortable.",
    description: "Blutech Smart Lighting combines PIR and lux sensing, Bluetooth direct device control, configurable dimming and LoRaWAN reporting. Local edge logic handles the instant response even when the internet is unavailable; gateways carry status, settings and energy information through 4G or IP networks to Blutech Core.",
    image: "/products/blutech-smart-lighting-control-v2.webp", imageFit: "cover", imageNote: "Application visual showing discreet, occupancy-responsive lighting in a premium lift-lobby environment.",
    evidence: "Configured to the approved lighting-control scope and sequence for each project",
    deployment: "Designed for corridors, lift lobbies, shared areas and retrofit lighting zones where fast response and central oversight are both required.",
    installation: "Sensor positions, lighting groups, occupied and standby levels, daylight targets and time schedules are commissioned around the actual use of each zone.",
    protocols: ["Bluetooth edge control", "LoRaWAN data & settings", "4G / IP backhaul", "0–10 V dimming where specified"],
    features: [
      { title: "Immediate at the edge", body: "PIR and lux events can control the assigned Bluetooth lighting group directly without waiting for a cloud round trip." },
      { title: "Managed as one estate", body: "LoRaWAN carries status and settings through the gateway, giving Blutech Core a clear view across floors and properties." },
      { title: "Commissioned for comfort", body: "Tune occupied, standby, daylight and schedule logic by zone instead of applying one blunt sequence everywhere." },
    ],
    applications: ["Corridors and lift lobbies", "Shared and back-of-house areas", "Daylight-responsive zones", "Retrofit energy optimisation"],
    flow: ["PIR / lux / schedule", "Bluetooth edge logic", "Lighting group & dimming", "LoRaWAN + 4G / IP to Core"],
    facts: [
      { label: "Local response", value: "Bluetooth edge control without a cloud round trip" },
      { label: "Central connection", value: "LoRaWAN through 4G or IP gateway to Blutech Core" },
      { label: "Typical sequence", value: "Occupied, standby, long-vacancy and scheduled states configured per project" },
    ],
    featured: true,
  },
  {
    slug: "bt311-service-button", model: "BT311", name: "Service Button", category: "Facility Operations",
    summary: "A configurable LoRaWAN button for assistance requests, cleaning workflows and custom building events.", outcome: "One button. Any workflow.",
    description: "BT311 is a programmable physical input: pressing it triggers the preset logic, notification or workflow defined for the project. The button does not limit the response—the platform and customer process determine what happens next.",
    evidence: "Purchased by HKAPA", deployment: "Install at the point of need for building users, cleaning and operations staff or authorised personnel.",
    installation: "Location, label, message routing and downstream workflow are configured for the agreed use case.", protocols: ["LoRaWAN", "Configurable event", "Platform workflow"],
    features: [
      { title: "A physical action anyone understands", body: "Create a clear, deliberate input where an app or complex interface would slow the user down." },
      { title: "Workflow, not just a bell", body: "Route the press to the right notification, record, escalation or building action." },
      { title: "Configure by location", body: "Give the same hardware a different operational meaning according to where it is installed." },
    ],
    applications: ["Assistance request", "Cleaning check-in", "Service call", "Authorised custom event"],
    flow: ["Button press", "LoRaWAN event", "Preset platform logic", "Notification or action"],
  },
  {
    slug: "bt315-dcr", model: "BT315", name: "Signal Receiver", category: "Facility Operations",
    summary: "A field-input receiver that brings equipment, contact and third-party signals into Blutech workflows.", outcome: "Connect existing site conditions to dependable local and cloud-based responses.",
    description: "BT315 accepts dry or wet contacts, RS485 and signals from third-party equipment or PIR devices. It can upload events through LoRa and support real-time local Bluetooth interaction, allowing useful logic to continue even when the internet is unavailable.",
    image: "/products/bt315-signal-receiver.webp", imageFit: "contain", imageNote: "Product configuration and cable entries vary by project; confirm against the current submittal.",
    evidence: "Used at KT240 and Kai Tak 1E1 / 2B1", deployment: "Typically concealed above a ceiling or near the field equipment, and often paired with BT316 Signal Controller.",
    installation: "Input type, cable termination, enclosure, local logic and paired devices are confirmed during design coordination.", protocols: ["Dry / wet contact", "RS485", "LoRa", "Bluetooth"],
    features: [
      { title: "Receive existing signals", body: "Accept common contact, RS485 and equipment inputs instead of replacing useful field devices." },
      { title: "Local offline interaction", body: "Use Bluetooth for real-time device-to-device logic when an internet connection is not available." },
      { title: "Remote configuration path", body: "Use LoRaWAN downlink to adjust agreed logic without redesigning the field interface." },
    ],
    applications: ["Automatic-door status", "Door-lock events", "Pump status", "PIR-to-lighting input"],
    flow: ["Contact / RS485 / third party", "BT315 input logic", "LoRa or Bluetooth", "Cloud or local device"],
  },
  {
    slug: "bt316-dcc", model: "BT316", name: "Signal Controller", category: "Facility Operations",
    summary: "A configurable edge-control module for switching low-voltage devices from cloud, LoRaWAN or Bluetooth events.", outcome: "Keep essential field responses working locally while connecting them to the wider building workflow.",
    description: "BT316 receives commands from the cloud, LoRaWAN downlink, Bluetooth and other Bluetooth-enabled Blutech products. It provides 0–24 V or relay outputs for lights, sensors, alarms and other low-voltage equipment, with built-in timer and configurable AND/OR logic.",
    evidence: "Used in project-specific local control and alarm workflows", deployment: "Typically concealed above ceilings or close to the controlled device, either paired with BT315 or connected to another Blutech sensor.",
    installation: "Output type, load, enclosure, timer and AND/OR logic are confirmed for the exact field circuit before installation.", protocols: ["0–24 V / relay output", "LoRaWAN downlink", "Bluetooth", "Offline logic"],
    features: [
      { title: "Control at the edge", body: "Switch the agreed low-voltage output locally without depending on continuous internet access." },
      { title: "Multiple command paths", body: "Respond to cloud, LoRaWAN, Bluetooth or a nearby Blutech product according to the project sequence." },
      { title: "Configurable logic", body: "Combine timer and AND/OR conditions to make a simple field workflow dependable." },
    ],
    applications: ["Lighting control", "Alarm or buzzer output", "Low-voltage equipment response", "Security-room acknowledgement workflow"],
    flow: ["Cloud / LoRaWAN / Bluetooth", "Timer + AND/OR logic", "BT316 output", "Light, alarm or device"],
  },
  {
    slug: "bt317-alarm-buzzer", model: "BT317", name: "Blutech Alarm Buzzer", category: "Facility Operations",
    summary: "A prominent local alarm output for time-sensitive facility and safety events.", outcome: "Make important conditions immediately visible and audible at the point of response.",
    description: "BT317 is the highly visible local output in a configured event workflow. It is commonly paired with BT316 Signal Controller so an agreed sensor or platform event can create a clear on-site response for staff.",
    evidence: "Used in hospital deployments", deployment: "Positioned where the responsible team can see and hear the event, including hospital and service environments.",
    installation: "Sound, light, wiring and acknowledgement behaviour are confirmed for the project and controlled through the agreed interface module.", protocols: ["BT316 pairing", "Audible alert", "Visible local output"],
    features: [
      { title: "Hard to overlook", body: "A prominent red local unit makes a time-sensitive event clear to the responding team." },
      { title: "Event-driven output", body: "Pair with BT316 so a verified field or platform event activates the agreed response." },
      { title: "Project-defined behaviour", body: "Coordinate activation and acknowledgement with the operational procedure, not just the hardware." },
    ],
    applications: ["Hospital assistance alert", "Accessible-toilet event", "Security-room alarm", "Local plant or facility warning"],
    flow: ["Verified event", "BT316 control logic", "BT317 buzzer / indicator", "Staff response"],
  },
  {
    slug: "bt306-iaq5", model: "BT306", name: "Indoor Air Quality Sensor", category: "Environmental",
    summary: "Connected indoor-air-quality sensing for temperature, humidity and PM2.5, with project-specific parameters available.", outcome: "Track comfort and air-quality trends, support reporting and inform building-system interaction.",
    description: "BT306 provides temperature, humidity and PM2.5 as the core indoor-air-quality configuration, with other parameters available by request. Data can be sent through LoRa to the cloud and presented on BT101 or BT102, or used to inform HVAC workflows.",
    image: "/images/iaq.webp", award: "iF Design Award", evidence: "Current black diamond enclosure is the active product appearance", deployment: "Suitable for rooms and shared spaces where owners need a persistent view of environmental conditions.",
    installation: "Mainly 12 V DC. Location and optional sensing parameters are confirmed around airflow, visibility and the monitoring objective.", protocols: ["LoRa", "Temperature / humidity", "PM2.5", "Display and HVAC workflows"],
    features: [
      { title: "Core IAQ signals", body: "Monitor temperature, humidity and PM2.5, with additional parameters available for project-specific needs." },
      { title: "Visible to occupants", body: "Send data to BT101 or BT102 so environmental quality can be communicated clearly." },
      { title: "Useful to operations", body: "Track trends in the cloud and support an agreed interaction with HVAC or building systems." },
    ],
    applications: ["Tenant comfort monitoring", "Public IAQ display", "Environmental reporting", "HVAC-informed workflow"],
    flow: ["Environmental sensing", "LoRa data", "Cloud analysis", "BT101 / BT102 / HVAC workflow"],
    facts: [{ label: "Core parameters", value: "Temperature, humidity and PM2.5" }, { label: "Typical power", value: "12 V DC" }], featured: true,
  },
  {
    slug: "bt336-smoking-detection", model: "BT336", name: "Smoking Detection Sensor", category: "Environmental",
    summary: "A dedicated environmental sensor for smoking-detection workflows in managed spaces.", outcome: "Help property teams respond to smoking events with a targeted operational signal.",
    description: "BT336 is a proven, volume-deployed sensor for projects that need a dedicated smoking-detection workflow. Exact sensing parameters, connectivity and response logic are confirmed against the current product submittal and the conditions of the space.",
    image: "/products/bt336-smoking-detection.webp", imageFit: "contain", imageNote: "Illustrative product visual; confirm the exact ordered enclosure in the current submittal.", evidence: "Proven high-volume commercial product",
    deployment: "Placed in managed spaces where smoking events need to be surfaced to the property or security team.", installation: "Location, sensing criteria, network path and downstream response are validated for the project environment.",
    protocols: ["Project-configured sensing", "Operational event", "Platform response"],
    features: [
      { title: "Purpose-built workflow", body: "Treat smoking as a specific facility event with a defined owner and response path." },
      { title: "Operational visibility", body: "Bring the event into the property team's agreed notification or dashboard process." },
      { title: "Site-specific validation", body: "Confirm location and detection criteria around the actual air movement and operating conditions." },
    ],
    applications: ["Managed washrooms", "Back-of-house areas", "Restricted indoor locations", "Property and security response"],
    flow: ["Environmental event", "BT336 detection", "Configured connection", "Property-team response"],
  },
  {
    slug: "bt333-zone-water-leakage", model: "BT333", name: "Zone Detection Water Leakage", category: "Water Leakage",
    summary: "Cable-based flooding detection for plant rooms, service areas and vulnerable building zones.", outcome: "Surface water events earlier and direct the response team to the affected zone.",
    description: "BT333 uses a sensing cable or hose to detect flooding across an agreed zone rather than at only one point. It is intended for developed project workflows where the zone identity helps the property team act before water spreads further.",
    image: "/products/bt333-zone-water-leakage-visual.webp", imageNote: "Application visual; cable routing and controller configuration follow the approved design.",
    deployment: "Route the sensing cable around vulnerable plant, riser, service or equipment areas and assign the monitored zone in the platform.", installation: "Cable length, route, zone naming, controller and alarm workflow are confirmed from the coordinated services layout.",
    protocols: ["Sensing cable", "Zone event", "Platform alarm"],
    features: [
      { title: "Watch the whole vulnerable zone", body: "Extend detection along the cable route instead of relying on a single point sensor." },
      { title: "Actionable location", body: "Associate the event with an identified area so the response team knows where to investigate." },
      { title: "Retrofit-friendly routing", body: "Coordinate the sensing route around existing equipment and service constraints." },
    ],
    applications: ["Plant rooms", "Riser and service areas", "Critical equipment perimeter", "Flood-prone building zones"],
    flow: ["Water contacts sensing cable", "Zone event", "Platform alert", "Directed maintenance response"],
  },
  {
    slug: "bt339-bludrop", model: "BT339", name: "BluDrop", category: "Water Leakage",
    summary: "A compact wireless water-leakage sensor designed for discreet local deployment.", outcome: "Protect finishes, equipment and operations by catching local leakage early.",
    description: "BluDrop is Blutech's compact wireless local-leak sensor for locations that need point detection without extensive signal cabling. The device can sit close to the vulnerable source and bring the event into a wider monitoring and response workflow.",
    image: "/products/bt339-bludrop.webp", deployment: "Placed near local leakage risks such as equipment, plumbing connections, cabinets and finished areas.",
    installation: "Sensor position, cable head, wireless coverage and alarm routing are confirmed against the exact risk location.", protocols: ["Wireless event", "Local leak sensing", "Platform alert"],
    features: [
      { title: "Close to the risk", body: "Put the sensing point where a local leak is most likely to appear." },
      { title: "Minimal signal cabling", body: "Use wireless reporting to simplify retrofit in finished and operational environments." },
      { title: "Connected response", body: "Turn a small local event into a visible alert for the property team." },
    ],
    applications: ["Pantries and cabinets", "Plant and equipment areas", "Finished interior protection", "Local plumbing risks"],
    flow: ["Water at sensing point", "BluDrop event", "Wireless connection", "Property-team alert"], featured: true,
  },
  {
    slug: "bt353-smart-bin-sensor", model: "BT353", name: "Smart Bin Sensor", category: "Waste",
    summary: "A battery-powered distance sensor for demand-led bin collection.", outcome: "Reduce unnecessary checks and schedule collection around actual need.",
    description: "BT353 uses laser time-of-flight distance sensing and preset minimum and maximum levels to classify bin fill. Straight and angled versions support lid or side-edge mounting, while LoRaWAN connects the result to the Smart Washroom Gateway and operations workflow.",
    image: "/products/bt353-smart-bin-diagram.webp", gallery: ["/products/bt353-smart-bin-visual.webp", "/products/bt353-smart-bin-interior.webp"], imageFit: "contain",
    evidence: "Approximately 170 units in an Urban Renewal Authority project", deployment: "Configured to the internal geometry of each bin, with straight or angled mounting selected for a clear sensing path.",
    installation: "Mount to the lid or side edge. The sensing openings remain exposed, so the location must reflect the product's limited dust and water protection.", protocols: ["Laser ToF", "LoRaWAN", "Battery powered", "Smart Washroom Gateway"],
    features: [
      { title: "Measure actual need", body: "Use distance sensing to classify fill instead of relying on fixed inspection rounds." },
      { title: "Two mounting geometries", body: "Choose straight or angled sensing to suit the bin lid and internal shape." },
      { title: "Proven at volume", body: "Designed around stable battery operation and strong wireless communication for multi-bin deployment." },
    ],
    applications: ["Washroom bins", "Public-area waste collection", "Demand-led cleaning", "Multi-site operational reporting"],
    flow: ["ToF fill distance", "Preset level classification", "LoRaWAN", "Collection workflow"],
  },
  {
    slug: "bt802-lorawan-gateway", model: "BT802", name: "Indoor LoRaWAN Gateway", category: "Gateway",
    summary: "An indoor 8-channel gateway for connecting distributed LoRaWAN devices to the Blutech IoT Platform.", outcome: "Create reliable wireless coverage for building-wide retrofit deployments.",
    description: "BT802 is the indoor gateway in Blutech's normal indoor/outdoor pair. It supports Ethernet, Wi-Fi and an optional cellular backhaul configuration, connecting AS923 LoRaWAN field devices to Blutech Core or the agreed project platform.",
    image: "/products/bt802-lorawan-gateway-v3.webp", imageFit: "contain", imageNote: "Illustrative finished enclosure; confirm ports, antenna and exact housing against the current ordered configuration.", evidence: "Whole-building deployment experience at EMSD Headquarters; 42 gateways proposed for an FEHD project",
    deployment: "Wall-mounted indoors to create overlapping coverage for sensors and control devices across the property.", installation: "Gateway count and location are confirmed through floor plans, construction conditions and RF validation.",
    protocols: ["LoRaWAN AS923", "Ethernet / PoE", "2.4 GHz Wi-Fi", "Optional cellular"],
    features: [
      { title: "Multiple backhaul choices", body: "Use Ethernet, Wi-Fi or the BT802C cellular configuration around the available building network." },
      { title: "Built for distributed devices", body: "Connect up to 64 sensors per gateway in the specified configuration." },
      { title: "Secure platform path", body: "Support TCP/IP and MQTT over TLS for the agreed Blutech platform connection." },
    ],
    applications: ["Smart washroom network", "Indoor building IoT", "Retrofit sensor estates", "Multi-floor data collection"],
    flow: ["LoRaWAN sensors", "BT802 indoor gateway", "IP backhaul", "Blutech Core"],
    facts: [
      { label: "LoRaWAN", value: "AS923, 8 channels, up to 64 sensors" }, { label: "Backhaul", value: "10/100 Ethernet with PoE, 2.4 GHz Wi-Fi; cellular on BT802C" },
      { label: "Enclosure", value: "166 × 127 × 36 mm plastic, IP30, wall mount" }, { label: "Power", value: "12 V DC" }, { label: "Open-space range", value: "Up to 500 m under stated conditions" },
    ], featured: true,
  },
  {
    slug: "bt803-lorawan-gateway-ip68", model: "BT803", name: "Outdoor LoRaWAN Gateway", category: "Gateway",
    summary: "An IP68 outdoor gateway for demanding site and infrastructure conditions.", outcome: "Extend dependable LoRaWAN coverage into exposed or operationally demanding locations.",
    description: "BT803 is the outdoor counterpart to BT802. It provides an 8-channel AS923 LoRaWAN connection with Ethernet, Wi-Fi or 4G backhaul options in an IP68 enclosure suited to exposed installations.",
    image: "/products/bt803-outdoor-gateway-v2.webp", imageFit: "contain", imageNote: "Illustrative product visual; confirm antenna, gland and mounting details against the current ordered configuration.", evidence: "Airport deployment experience",
    deployment: "Used where the gateway must be placed outdoors or in a demanding operational environment to reach the field devices.", installation: "Mounting, antenna position, power, earthing, cable protection and backhaul are coordinated for the exposed location.",
    protocols: ["LoRaWAN AS923", "8 channels", "Ethernet / Wi-Fi / 4G", "IP68"],
    features: [
      { title: "Outdoor protection", body: "An IP68 enclosure supports locations that are unsuitable for the indoor BT802." },
      { title: "Flexible backhaul", body: "Coordinate Ethernet, Wi-Fi or 4G with the site's available network path." },
      { title: "One gateway family", body: "Use BT802 indoors and BT803 outdoors within a consistent LoRaWAN architecture." },
    ],
    applications: ["Airports and transport sites", "Outdoor facilities", "Exposed plant areas", "Campus and estate coverage"],
    flow: ["Outdoor LoRaWAN devices", "BT803 gateway", "Ethernet / Wi-Fi / 4G", "Blutech platform"],
  },
  {
    slug: "bt2035-vacancy-indicator", model: "BT2035", name: "Vacancy Indicator Lamp", category: "Smart Washroom",
    summary: "A slim, architectural indicator for connected washroom cubicles and availability zones.", outcome: "Make availability immediately legible and reduce unnecessary circulation.",
    description: "One BT2035 indicates one cubicle or area. Bluetooth allows a nearby door or occupancy sensor to trigger it directly, while LoRa can change or upload status without signal wiring. RGB and white-light configurations support the project's visual language.",
    image: "/products/bt2035-vacancy-indicator.webp", gallery: ["/products/bt2035-vacancy-indicator-studio.webp", "/products/bt2035-vacancy-indicator-interior.webp"], evidence: "Used at Sha Tin Racecourse, Metroplaza and other malls",
    deployment: "Install outside cubicle doors, at entrances, on ceilings or walls so availability is visible before the user commits to a route.", installation: "The modular body allows LED strip and control-unit maintenance; the 12 V connector is housed inside the product.",
    protocols: ["Bluetooth direct control", "LoRa status", "RGB or 4000 K white"],
    features: [
      { title: "One clear status per space", body: "Give each cubicle or defined area an immediate, dedicated availability signal." },
      { title: "Wireless event path", body: "Let a nearby Bluetooth sensor trigger the lamp directly while LoRa handles wider status exchange." },
      { title: "Made for the interior", body: "A slim multi-layer form and doubled LED strips reduce dark spots and visual bulk." },
    ],
    applications: ["Cubicle vacancy", "Accessible toilet status", "Entrance availability overview", "Ceiling or wall guidance"],
    flow: ["Door or occupancy sensor", "Bluetooth direct event", "BT2035 light state", "LoRa status upload"],
    facts: [{ label: "Dimensions", value: "200 × 30 × 25 mm (L × W × H)" }, { label: "Light options", value: "RGB combinations or 4000 K white on/off" }, { label: "Connection", value: "Bluetooth control and LoRa status" }],
    featured: true,
  },
  {
    slug: "bt3022-door-contact-triangle", model: "BT3022", name: "Door Contact Sensor — Triangle", category: "Smart Washroom",
    summary: "A compact triangular door-contact sensor for cubicle status and facility workflows.", outcome: "Provide a simple, privacy-safe occupancy input at the cubicle door.",
    description: "BT3022 translates the opening or closing relationship at the door into a status event for the smart-washroom workflow. Its triangular form is intended for coordinated placement at the door and frame without sensing the occupant directly.",
    image: "/products/bt3022-triangle-door-contact.webp", gallery: ["/products/bt3022-door-contact-interior.webp"], deployment: "Used at individual cubicle doors where the contact state can represent availability or support another facility workflow.",
    installation: "Door geometry, alignment, fixing, power and connection details are confirmed from the current product submittal.", protocols: ["Door contact", "Privacy-safe status", "Smart washroom workflow"],
    features: [
      { title: "Senses the door, not the person", body: "Provide a simple state input without capturing images or behavioural detail." },
      { title: "Triangular form", body: "Coordinate the device with the available door and frame geometry." },
      { title: "Part of a wider experience", body: "Use the status to drive an indicator, information display or operations view." },
    ],
    applications: ["Cubicle availability", "Door-state monitoring", "Vacancy indicator input", "Smart washroom analytics"],
    flow: ["Door state", "BT3022 contact event", "Indicator or gateway", "Live availability"],
  },
  {
    slug: "bt3023-door-lock-sensor", model: "BT3023", name: "Door Lock Sensor — Rectangle", category: "Smart Washroom",
    summary: "A rectangular lock-state sensor for connected cubicle availability.", outcome: "Translate the physical lock state into reliable live occupancy information.",
    description: "BT3023 uses the physical lock condition as a privacy-safe input to the smart-washroom system. The rectangular product format offers an alternative to BT3022 where the cubicle hardware and installation geometry call for a different arrangement.",
    image: "/products/bt3023-door-lock-sensor.webp", deployment: "Installed at individual cubicle locks and coordinated with the indicator or information system that will consume the status.",
    installation: "Lock geometry, alignment, mounting, power and connection details are confirmed from the current product submittal.", protocols: ["Lock-state input", "Privacy-safe status", "Smart washroom workflow"],
    features: [
      { title: "Lock state as occupancy signal", body: "Use a deliberate physical lock action rather than monitoring the person in the cubicle." },
      { title: "Rectangular installation option", body: "Select the product form that best suits the coordinated cubicle hardware." },
      { title: "Live availability", body: "Connect the state to an indicator, entrance display or facility dashboard." },
    ],
    applications: ["Cubicle lock status", "Vacancy indicator input", "Entrance availability display", "Smart washroom operations"],
    flow: ["Physical lock state", "BT3023 event", "Indicator or gateway", "Live availability"],
  },
];

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);
