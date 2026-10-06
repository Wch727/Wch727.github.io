'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'public', 'assets', 'fonts');
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const sourceFiles = fs.readdirSync(path.join(root,'src'), {recursive:true}).filter(f=>/\.(astro|md|ts|svelte)$/.test(f));
const sourceText = sourceFiles.map(f=>fs.readFileSync(path.join(root,'src',f),'utf8')).join('');
const glyphs = [...new Set([...sourceText].filter(c=>c.codePointAt(0)>127).concat([...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,!? /·→']))].sort().join('');
const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
function download(url, target) {
  execFileSync(curl, ['--fail', '--silent', '--show-error', '--location', '--retry', '2', '--max-time', '60', '-A', userAgent, url, '-o', target], {stdio:'inherit'});
}
fs.mkdirSync(out,{recursive:true});
const families = [
  {name:'Noto Sans SC',file:'noto-sans-sc-site.woff2',directory:'notosanssc',text:glyphs},
  {name:'Noto Serif SC',file:'noto-serif-sc-site.woff2',directory:'notoserifsc',text:glyphs},
  {name:'Manrope',file:'manrope-latin.woff2',directory:'manrope'}
];
let generatedCSS = '/* Local font subsets generated from site source text. */\n';
for (const family of families) {
  if (family.text) {
    const characters = [...family.text];
    for (let offset = 0; offset < characters.length; offset += 200) {
      const chunk = characters.slice(offset, offset + 200).join('');
      const chunkIndex = offset / 200;
      const stem = family.directory + '-' + chunkIndex;
      const chunkParams = new URLSearchParams({family: family.name + ':wght@300..700', display:'swap', text:chunk});
      const chunkCssPath = path.join(out, stem + '.source.css');
      download('https://fonts.googleapis.com/css2?' + chunkParams, chunkCssPath);
      const chunkCSS = fs.readFileSync(chunkCssPath, 'utf8');
      const matches = [...chunkCSS.matchAll(/src:\s*url\((https:\/\/[^)]+)\)\s*format\('woff2'\)/g)];
      if (matches.length !== 1) throw new Error('Expected one font subset for ' + stem);
      const filename = stem + '.woff2';
      download(matches[0][1], path.join(out,filename));
      const range = [...chunk].map(c=>'U+' + c.codePointAt(0).toString(16)).join(',');
      generatedCSS += `@font-face{font-family:'${family.name}';font-style:normal;font-weight:300 700;font-display:swap;src:url('/assets/fonts/${filename}') format('woff2');unicode-range:${range}}\n`;
    }
    const licensePath = path.join(out,family.directory+'-OFL.txt');
    if (!fs.existsSync(licensePath) || fs.statSync(licensePath).size < 1000) download('https://raw.githubusercontent.com/google/fonts/main/ofl/'+family.directory+'/OFL.txt',licensePath);
    console.log(family.name+': '+Math.ceil(characters.length/200)+' local subsets');
    continue;
  }
  const params = new URLSearchParams({family:family.name+':wght@300..700',display:'swap'});
  if(family.text) params.set('text',family.text);
  const cssFile=path.join(out, family.directory+'.source.css');
  download('https://fonts.googleapis.com/css2?'+params,cssFile);
  const css=fs.readFileSync(cssFile,'utf8');
  const matchingCss=family.text ? css : css.split('/* latin */').at(-1);
  const match=matchingCss.match(/src:\s*url\((https:\/\/[^)]+)\)\s*format\('woff2'\)/);
  if(!match)throw new Error('No WOFF2 found for '+family.name);
  download(match[1],path.join(out,family.file));
  const font=fs.readFileSync(path.join(out,family.file));
  if(font.toString('ascii',0,4)!=='wOF2')throw new Error('Invalid font payload for '+family.name);
  const licensePath = path.join(out,family.directory+'-OFL.txt');
  if (!fs.existsSync(licensePath) || fs.statSync(licensePath).size < 1000) download('https://raw.githubusercontent.com/google/fonts/main/ofl/'+family.directory+'/OFL.txt',licensePath);
  console.log(family.name+': '+font.length+' bytes');
}
fs.writeFileSync(path.join(out,'site-glyphs.txt'),glyphs);
fs.writeFileSync(path.join(root,'src/styles/generated-fonts.css'), generatedCSS);
console.log('Self-hosted fonts downloaded; retain the OFL license files when distributing.');
