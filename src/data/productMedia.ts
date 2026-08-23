import infoStation from "../assets/bluta-info-station.webp";
import iaq from "../assets/bluta-iaq-sensor.webp";
import heatmapPro from "../assets/bluta-heatmap-pro.webp";
import heatmapFusion from "../assets/bluta-heatmap-fusion-sensor.webp";
import ioBox from "../assets/bluta-io-box.webp";

export const productImages: Record<string,string> = {
  BT102: infoStation.src,
  BT303: "/products/bt303-heatmap-8x8.webp",
  BT306: iaq.src,
  BT311: "/products/bt311-service-button.jpg",
  BT315: ioBox.src,
  BT316: ioBox.src,
  BT317: "/products/bt317-alarm-buzzer.jpg",
  BT321: "/products/bt321-pir-motion-sensor.webp",
  BT333: "/products/bt333-water-leakage.jpg",
  BT336: "/products/bt336-smoking-detection.jpg",
  BT337: heatmapPro.src,
  BT338: heatmapFusion.src,
  BT339: "/products/bt339-bludrop.webp",
  BT353: "/products/bt353-smart-bin.jpg",
  BT2035: "/products/bt2035-vacancy-indicator.webp",
  BT3022: "/products/bt3022-triangle-door-contact.webp",
  BT3023: "/products/bt3023-door-lock-sensor.webp",
};

export function getProductImage(model:string, fallback?:string) {
  return productImages[model] || fallback || "";
}
