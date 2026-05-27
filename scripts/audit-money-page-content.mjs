import fs from 'node:fs';
import path from 'node:path';

const PRIORITY_PAGES = [
['san-diego','commercial-mailbox-installation'],['san-diego','cbu-installation'],['san-diego','4c-wall-mounted-mailboxes'],['san-diego','mailbox-replacement-retrofits'],['chula-vista','commercial-mailbox-installation'],['chula-vista','cbu-installation'],['oceanside','commercial-mailbox-installation'],['oceanside','4c-wall-mounted-mailboxes'],['carlsbad','commercial-mailbox-installation'],['carlsbad','mailbox-replacement-retrofits'],['escondido','cbu-installation'],['san-marcos','commercial-mailbox-installation'],['vista','mailbox-replacement-retrofits'],['poway','commercial-mailbox-installation']
].map(([citySlug,serviceSlug])=>({citySlug,serviceSlug,href:`/service-areas/${citySlug}/${serviceSlug}/`}));
const requiredFields=['localUseCases','commonTriggers','scopeDetails','projectSignals','serviceSpecificFaqs'];
const contentDir='src/data/city-service-content';
const byService=new Map();
for(const f of fs.readdirSync(contentDir).filter(f=>f.endsWith('.json'))){const d=JSON.parse(fs.readFileSync(path.join(contentDir,f),'utf8'));byService.set(d.serviceSlug,d);}
const missingEnhanced=[],missingFaq=[],missingMeta=[];
const intros={};
for(const p of PRIORITY_PAGES){const city=byService.get(p.serviceSlug)?.cities?.[p.citySlug]; if(!city){missingEnhanced.push(`${p.href} missing city block`);continue;} const miss=requiredFields.filter(k=>!(Array.isArray(city[k])&&city[k].length)); if(miss.length) missingEnhanced.push(`${p.href}: ${miss.join(',')}`); if(!(city.faqs?.length||city.serviceSpecificFaqs?.length)) missingFaq.push(p.href); if(!city.intro?.trim()) missingMeta.push(p.href); intros[p.href]=city.intro?.trim();}
const dup={}; Object.entries(intros).forEach(([h,i])=>{if(!i)return; dup[i]=(dup[i]||[]).concat(h)}); const dups=Object.values(dup).filter(a=>a.length>1);
const projects=fs.readFileSync('src/pages/projects.astro','utf8');
const missingInlinks=PRIORITY_PAGES.filter(p=>!projects.includes(p.href)).map(p=>p.href);
console.log('Money page quality audit');
console.log('Priority pages checked:',PRIORITY_PAGES.length);
console.log('Missing enhanced fields:',missingEnhanced.length); missingEnhanced.forEach(x=>console.log(' -',x));
console.log('Missing FAQ coverage:',missingFaq.length); missingFaq.forEach(x=>console.log(' -',x));
console.log('Missing intro/meta source:',missingMeta.length);
console.log('Duplicate intros:',dups.length);
console.log('Missing projects internal-link references:',missingInlinks.length); missingInlinks.forEach(x=>console.log(' -',x));
