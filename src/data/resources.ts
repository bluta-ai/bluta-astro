export const resources = [
  {
    slug:"fall-detection-without-cameras",
    type:"Guide",
    title:"Fall Detection Without Cameras: What Building Teams Should Evaluate",
    description:"A practical guide to privacy-preserving fall, motionless and long-stay sensing in toilets, hospitals and other sensitive spaces.",
    sections:[
      {heading:"Start with the response workflow",body:"A fall-detection project is not only a sensor choice. Define who receives the alert, how quickly the event must be confirmed, what location detail is required, how acknowledgement works and what happens when communications fail."},
      {heading:"Choose sensing around privacy and geometry",body:"Thermal arrays, radar and sensor fusion can provide non-camera alternatives, but coverage depends on mounting height, partitions, doors, obstructions and the behaviour that must be detected. A site survey and controlled testing are essential."},
      {heading:"Separate local and cloud functions",body:"Time-sensitive local alarms or controls should not depend unnecessarily on Internet round trips. Cloud or on-premises software is more useful for central monitoring, history, user roles, reporting and integration."},
      {heading:"Test the whole alarm chain",body:"Commissioning should test the sensor event, gateway/network path, software alarm, location mapping, notification, acknowledgement and recovery—not just whether a sensor changes state."}
    ]
  },
  {
    slug:"lorawan-building-monitoring-retrofit",
    type:"Technical note",
    title:"LoRaWAN for Building Monitoring: Where It Fits in a Retrofit",
    description:"How LoRaWAN, Bluetooth, 4G, Wi-Fi, RS485 and contacts can work together instead of competing for one architecture.",
    sections:[
      {heading:"LoRaWAN is a transport choice, not the whole solution",body:"It is useful for long-range, low-power building telemetry, but local control, commissioning and third-party equipment interfaces may need Bluetooth, wired contacts, RS485, Ethernet, Wi-Fi or 4G."},
      {heading:"Use local wireless for immediate interaction",body:"Bluetooth can link nearby sensors and controllers for fast local actions without adding signal cabling. LoRaWAN can separately carry status and configuration data to the central platform."},
      {heading:"Plan gateway coverage, not just gateway quantity",body:"Concrete cores, plant rooms, risers, fire doors and floor layout affect RF performance. Final gateway positions and quantities should follow survey and test results rather than a generic devices-per-gateway rule."},
      {heading:"Keep integration open",body:"The building owner should know how data reaches the BMS or other system. Document payloads, APIs, MQTT topics, ownership boundaries and recovery behaviour during detailed design."}
    ]
  },
  {
    slug:"smart-washroom-system-design",
    type:"Buyer guide",
    title:"Smart Washroom System Design: Beyond Vacancy Lights",
    description:"A smart washroom can combine occupancy, safety, IAQ, cleaning, waste monitoring, signage and building-system integration.",
    sections:[
      {heading:"Define each user",body:"Visitors need clear availability information. Cleaning teams need actionable service data. FM teams need health, alerts and history. Security or clinical staff may need a different safety workflow. One interface should not be assumed to serve every role."},
      {heading:"Do not infer occupancy from one signal unless it is enough",body:"Door lock status is useful for vacancy indication, but safety or presence use cases may need independent human-presence sensing. The sensing method should match the decision being made."},
      {heading:"Design the information layer",body:"Local indicator lights, entrance signage, large information stations and operator dashboards can each show different levels of detail. The project should define which information is local, public-facing and operational."},
      {heading:"Make maintenance visible",body:"Device heartbeat, battery where applicable, last communication, alarms and configuration records are essential for a system expected to operate for years after installation."}
    ]
  },
  {
    slug:"water-leakage-point-vs-cable",
    type:"Application note",
    title:"Point vs Cable Water Leakage Detection",
    description:"When to use a compact point detector and when a sensing cable is more appropriate in a building.",
    sections:[
      {heading:"Point detection",body:"A compact point detector is useful where the likely leak location is known or where visible installation quality matters. It can sit near a valve, equipment item or local low point."},
      {heading:"Cable-based detection",body:"A sensing cable is useful when water could appear anywhere along a broader perimeter or equipment zone. The cable provides distributed detection along its length, although exact positional localisation should not be assumed unless the specific product supports it."},
      {heading:"Installation is part of detection quality",body:"Cable routing, contact with the protected surface, drainage direction, cleaning practices and likely water path matter. For point sensors, placement at the actual low point is more important than simply being near the equipment."},
      {heading:"Connect alarms into operations",body:"A leakage event should include location, device health and a clear response path in the building platform rather than becoming another standalone local alarm."}
    ]
  }
];
