import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const catalogue = fs.readFileSync(path.join(root,'src','data','site.ts'),'utf8');
const mediaFile = fs.readFileSync(path.join(root,'src','data','productMedia.ts'),'utf8');
const strict = process.env.RELEASE_STRICT === '1';
const productStart = catalogue.indexOf('export const products');
const productEnd = catalogue.indexOf('export const comparisonGroups');
if (productStart < 0 || productEnd < 0) throw new Error('Could not locate product catalogue.');

const mapBlock = mediaFile.match(/productImages[^=]*=\s*\{([\s\S]*?)\n\};/)?.[1] || '';
const imageMap = new Map();
for (const match of mapBlock.matchAll(/([A-Z0-9]+):\s*("[^"]+"|[A-Za-z0-9_.]+)/g)) imageMap.set(match[1],match[2].replaceAll('"',''));

const block = catalogue.slice(productStart,productEnd);
const modelMatches = [...block.matchAll(/model:\s*"([^"]+)"/g)];
const products = modelMatches.map((match,index)=>{
  const chunk = block.slice(match.index,index+1<modelMatches.length?modelMatches[index+1].index:block.length);
  const model = match[1];
  const name = chunk.match(/name:\s*"([^"]+)"/)?.[1] || model;
  const direct = chunk.match(/image:\s*("[^"]+"|[A-Za-z0-9_.]+)/)?.[1]?.replaceAll('"','');
  const media = chunk.match(/media:\s*\[\{src:\s*"([^"]+)"/)?.[1];
  const image = direct || imageMap.get(model) || media || null;
  return {model,name,image};
});

const missing = products.filter((p)=>!p.image);
const publicMissing = products.filter((p)=>p.image?.startsWith('/') && !fs.existsSync(path.join(root,'public',p.image)));
const groups = new Map();
for (const p of products){if(!p.image)continue;const list=groups.get(p.image)||[];list.push(p.model);groups.set(p.image,list)}
const duplicates=[...groups.entries()].filter(([,models])=>models.length>1);
const suspicious=products.filter((p)=>p.image && /placeholder|demo|sample/i.test(p.image));

console.log('\nBlutech Product Image Audit');
console.log(`Published products: ${products.length}`);
console.log(`Image assigned: ${products.length-missing.length}/${products.length}`);
if(missing.length){console.log('\nMISSING PRODUCT IMAGE:');missing.forEach((p)=>console.log(`- ${p.model} ${p.name}`))}
if(publicMissing.length){console.log('\nMISSING PUBLIC ASSET:');publicMissing.forEach((p)=>console.log(`- ${p.model}: ${p.image}`))}
if(duplicates.length){console.log('\nDUPLICATE IMAGE REFERENCES:');duplicates.forEach(([image,models])=>console.log(`- ${image}: ${models.join(', ')}`))}
if(suspicious.length){console.log('\nSUSPICIOUS IMAGE REFERENCES:');suspicious.forEach((p)=>console.log(`- ${p.model}: ${p.image}`))}
const blockers=missing.length+publicMissing.length+duplicates.length+suspicious.length;
if(!blockers){console.log('\nPASS — every published product has a unique, available, non-placeholder image reference.');process.exit(0)}
console.log(`\n${strict?'FAIL':'REVIEW'} — ${blockers} product-image issue group(s) remain.`);
if(strict)process.exit(1);
