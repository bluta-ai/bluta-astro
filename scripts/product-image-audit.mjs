import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const file = fs.readFileSync(path.join(root,'src','data','site.ts'),'utf8');
const strict = process.env.RELEASE_STRICT === '1';

const productStart = file.indexOf('export const products');
const productEnd = file.indexOf('export const solutions');
if (productStart < 0 || productEnd < 0) {
  console.error('Could not locate product catalogue in src/data/site.ts');
  process.exit(1);
}

const block = file.slice(productStart, productEnd);
const modelMatches = [...block.matchAll(/model:\s*"([^"]+)"/g)];
const products = modelMatches.map((match, index) => {
  const start = match.index;
  const end = index + 1 < modelMatches.length ? modelMatches[index + 1].index : block.length;
  const chunk = block.slice(start, end);
  const image = chunk.match(/image:\s*([A-Za-z0-9_.]+)/)?.[1] || null;
  const name = chunk.match(/name:\s*"([^"]+)"/)?.[1] || match[1];
  return { model: match[1], name, image };
});

const missing = products.filter((p) => !p.image);
const imageGroups = new Map();
for (const product of products) {
  if (!product.image) continue;
  const list = imageGroups.get(product.image) || [];
  list.push(product.model);
  imageGroups.set(product.image, list);
}
const duplicates = [...imageGroups.entries()].filter(([,models]) => models.length > 1);
const suspicious = products.filter((p) => p.image && /placeholder|demo|sample|ioBox/i.test(p.image));

console.log('\nBlutech Product Image Audit');
console.log(`Published products: ${products.length}`);
console.log(`Image assigned: ${products.length - missing.length}/${products.length}`);

if (missing.length) {
  console.log('\nMISSING VERIFIED PRODUCT IMAGE:');
  missing.forEach((p) => console.log(`- ${p.model} ${p.name}`));
}
if (duplicates.length) {
  console.log('\nDUPLICATE IMAGE REFERENCES — verify these are truly the same physical product before release:');
  duplicates.forEach(([image,models]) => console.log(`- ${image}: ${models.join(', ')}`));
}
if (suspicious.length) {
  console.log('\nSUSPICIOUS / GENERIC IMAGE REFERENCES:');
  suspicious.forEach((p) => console.log(`- ${p.model}: ${p.image}`));
}

const blockers = missing.length + duplicates.length + suspicious.length;
if (blockers === 0) {
  console.log('\nPASS — every published product has a unique, non-placeholder image reference.');
  process.exit(0);
}

console.log(`\n${strict ? 'FAIL' : 'REVIEW'} — ${blockers} product-image release issue group(s) remain.`);
console.log('A product image must depict the correct current SKU. An AI-generated label, a generic enclosure, or another model\'s photograph does not count as verification.');
if (strict) process.exit(1);
