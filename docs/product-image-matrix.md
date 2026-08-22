# Blutech Public Product Image Matrix

This is a release-control document, not marketing copy. A product is **not image-ready** merely because something visually similar is available.

Rules:
- one correct current-product image for every public SKU is mandatory;
- prefer real uploaded photography; clean background/lighting without changing product geometry;
- installation photography is additional evidence, not a replacement for a product shot;
- do not reuse another model's photo unless the physical product is genuinely identical and the distinction is documented;
- generated label text is never treated as specification evidence;
- final publication rights/permissions must be confirmed.

| Model | Public product | Current website state | Customer-level action before release |
|---|---|---|---|
| BT101 | Smart Signage | Missing image in catalogue data | Real Smart Signage installation/product photography located in source material; select and import a clean representative image. |
| BT102 | Smart Info Station | Image assigned | Re-check that `bluta-info-station.webp` is the current BT102/BT102 public form, not a project-only BT102N revision. |
| BT103 | Blutech TV Box | Missing | Locate/import an actual current TV Box product image; do not substitute a television screen photo. |
| BT107 | Smart TV Display | Missing | Locate/import a real complete-display photo that clearly distinguishes it from BT103 bring-your-own-display use. |
| BT303 | HeatMap 8×8 | Missing | Locate/import the actual 8×8 model; do not reuse BT337 Pro or BT338 Fusion. |
| BT306 | IAQ5 Indoor Air Quality Sensor | Image assigned | Verify current asset matches the final black diamond/square IAQ5 with blue perimeter light and no obsolete protruding white cylinder. |
| BT311 | Service Button | Missing | Match final website image to the real current service-button hardware before import. |
| BT315 | Signal Receiver | Generic/reused `ioBox` image | Replace with actual current BT315 black enclosure; BT315 is smaller and should not show BT316/BT317 button/buzzer hardware. |
| BT316 | Signal Controller | Generic/reused `ioBox` image | Replace with actual current BT316 black controller photo; do not reuse BT315. |
| BT317 | Alarm Buzzer | Missing | Locate/import actual buzzer + illuminated acknowledge/silence control hardware. |
| BT321 | PIR Motion Sensor | Missing | Real/source PIR image located; import a faithful clean product shot and retain an installation view as secondary media. |
| BT333 | Zone Detection Water Leakage Sensor | Missing | Source image located; prepare a clean image without unverified IP/battery labels. Show the sensing cable clearly. |
| BT336 | Smoking Detection Sensor | Missing | Real/source round detector image located; import a faithful current product shot. |
| BT337 | HeatMap Pro | Image assigned | Verify the image has the pronounced geometric/pyramidal recess around the central sensor. |
| BT338 | HeatMap Fusion | Image assigned | Verify the flatter face and small black square near the top; do not swap with BT337. |
| BT339 | BluDrop Water Leakage Sensor | Missing | Real `Bludrop Water Leakage Sensor.jpg` source located; use exact glossy white teardrop geometry. |
| BT353 | Smart Bin Sensor | Missing | Correct later-generation off-white rectangular box + black rim clip source located; explicitly reject the earlier black-cylinder concept. |
| BT2035 | Vacancy Indicator Light | Missing | Real long white indicator + installed illuminated image located; import clear product shot first. |
| BT3022 | Triangle Door Contact Sensor | Missing | Real triangular hardware source located; use real geometry and avoid the earlier rejected generated rendition. |
| BT3023 | Door Lock Sensor — Rectangle | Missing | Real black rounded-square near-lock hardware source located; import product + installation views. |
| BT802 | Indoor LoRaWAN Gateway | Missing | Locate/import actual current indoor gateway product image. |
| BT803 | Outdoor LoRaWAN Gateway | Missing | Locate/import actual current outdoor gateway product image; do not imply an IP rating from appearance. |

## Current automated result

The catalogue currently contains **22 public SKUs**. Only **6 product records have an image field assigned**, and BT315 / BT316 currently reuse the same generic `ioBox` asset. This is therefore **not release-ready**.

The strict release command must remain blocked until this matrix is complete:

```bash
npm run release:check
```
