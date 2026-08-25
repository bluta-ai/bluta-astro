import infoStation from "../assets/bluta-info-station.webp";
import iaq from "../assets/bluta-iaq-sensor.webp";
import heatmapPro from "../assets/bluta-heatmap-pro.webp";
import heatmapFusion from "../assets/bluta-heatmap-fusion-sensor.webp";
import ioBox from "../assets/bluta-io-box.webp";

export const productImages: Record<string,string> = {
  BT101: "/products/bt101-smart-signage.webp",
  BT102: infoStation.src,
  BT103: "/products/bt103-tv-box.webp",
  BT107: "/products/bt107-smart-display-application.webp",
  BT303: "/products/bt303-heatmap.jpg",
  BT306: iaq.src,
  BT311: "/products/bt311-service-button.jpg",
  BT315: "/products/bt315-signal-receiver.webp",
  BT316: ioBox.src,
  BT317: "/products/bt317-alarm-buzzer.jpg",
  BT321: "/products/bt321-pir-motion-sensor-visual.webp",
  BT333: "/products/bt333-zone-water-leakage-visual.webp",
  BT336: "/products/bt336-smoking-detection.webp",
  BT337: heatmapPro.src,
  BT338: heatmapFusion.src,
  BT339: "/products/bt339-bludrop.webp",
  BT353: "/products/bt353-smart-bin-diagram.webp",
  BT2035: "/products/bt2035-vacancy-indicator.webp",
  BT3022: "/products/bt3022-triangle-door-contact.webp",
  BT3023: "/products/bt3023-door-lock-sensor.webp",
  BT802: "/products/bt802-lorawan-gateway-v3.webp",
  BT803: "/products/bt803-outdoor-gateway-v2.webp",
  SYSTEM: "/products/blutech-smart-lighting-control-v2.webp",
};

export function getProductImage(model:string, fallback?:string) {
  return productImages[model] || fallback || "";
}
