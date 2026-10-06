const fs = require('node:fs');
const path = require('node:path');
const {execFile} = require('node:child_process');
const {promisify} = require('node:util');
const sharp = require('sharp');
const run = promisify(execFile);
const root = path.resolve(__dirname,'..');
const posters = [
 ['your-name','你的名字。','https://uc.udn.com.tw/photo/2024/09/18/0/30547336.jpg','https://reading.udn.com/read/story/124408/8235608'],
 ['weathering','天气之子','https://x0.ifengimg.com/cmpp/fck/2019_40/91da4b2f49e8fe8_w5906_h8268.jpg','https://sd.ifeng.com/a/20190930/7748770_0.shtml'],
 ['five-centimeters','秒速五厘米','https://ogre.natalie.mu/media/ex/film/146686/flyer_1.jpg?imwidth=640','https://natalie.mu/eiga/film/146686'],
 ['garden','言叶之庭','https://c-ssl.duitang.com/uploads/item/201509/12/20150912214000_S3BcN.jpeg','https://www.duitang.com/blog/?id=447826421'],
 ['fireflies','萤火之森','https://img.cinematoday.jp/a/T0010319/_size_640x/_v_1315302756/T0010319p.jpg','https://www.cinematoday.jp/movie/T0010319'],
 ['spy-family','间谍过家家','https://a.storyblok.com/f/178900/2000x2826/fd5ea39a6d/90e10f96b42726109573edebd0bdba921635543733_main.jpg','https://www.crunchyroll.com/fr/news/latest/2021/10/31/lanime-spy-x-family-sortira-en-2022'],
 ['sao','刀剑神域','https://image.tmdb.org/t/p/original/xMybvQFv4XOwqRTgkmvIrclPhD4.jpg','https://watch.plex.tv/show/sword-art-online/season/1'],
 ['nailoong','奶龙','https://pic6.iqiyipic.com/image/20240625/ca/4a/a_100514634_m_601_m8_579_772.jpg','https://www.iqiyi.com/']
];
const out=path.join(root,'public/assets/posters');fs.mkdirSync(out,{recursive:true});
const temp=path.join(root,'output/poster-sources');fs.mkdirSync(temp,{recursive:true});
(async()=>{
 const results=await Promise.allSettled(posters.map(async([slug,title,url,source])=>{
  const raw=path.join(temp,slug+'.img');
  await run('curl.exe',['--fail','--silent','--show-error','--location','--max-time','30','--retry','1',url,'-o',raw]);
  const meta=await sharp(raw).metadata();
  await sharp(raw).resize({width:600,withoutEnlargement:true}).webp({quality:85}).toFile(path.join(out,slug+'.webp'));
  console.log(JSON.stringify({slug,title,width:meta.width,height:meta.height,source}));
 }));
 results.forEach((r,i)=>{if(r.status==='rejected')console.error(posters[i][0],r.reason.message)});
 fs.writeFileSync(path.join(out,'sources.json'),JSON.stringify(posters.map(([slug,title,image,source])=>({slug,title,image,source})),null,2));
 if(results.some(r=>r.status==='rejected'))process.exitCode=1;
})();
