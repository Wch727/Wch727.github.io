'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'assets', 'fonts');
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace(/<[^>]*>/g, ' ');
const js = fs.readFileSync(path.join(root, 'site.js'), 'utf8');
const glyphs = [...new Set([...html, ...js, ...'0123456789显示全部个项目关闭详情＋×→↗↓霞'])].sort().join('');
const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
function download(url, target) {
  execFileSync(curl, ['--fail', '--silent', '--show-error', '--location', '--retry', '2', '--max-time', '60', '-A', userAgent, url, '-o', target], {stdio:'inherit'});
}
fs.mkdirSync(out,{recursive:true});
const families = [
  {name:'Noto Sans SC',file:'noto-sans-sc-site.woff2',directory:'notosanssc',text:glyphs},
  {name:'Manrope',file:'manrope-latin.woff2',directory:'manrope'}
];
for (const family of families) {
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
  download('https://raw.githubusercontent.com/google/fonts/main/ofl/'+family.directory+'/OFL.txt',path.join(out,family.directory+'-OFL.txt'));
  console.log(family.name+': '+font.length+' bytes');
}
fs.writeFileSync(path.join(out,'site-glyphs.txt'),glyphs);
console.log('Self-hosted fonts downloaded; retain the OFL license files when distributing.');
