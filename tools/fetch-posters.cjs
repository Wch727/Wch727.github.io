const fs = require('node:fs');
const path = require('node:path');
const {execFile} = require('node:child_process');
const {promisify} = require('node:util');
const sharp = require('sharp');
const run = promisify(execFile);
const root = path.resolve(__dirname,'..');
const posters = [
 ['your-name','你的名字','https://cdn.posteritati.com/posters/000/000/050/671/your-name-md-web.jpg','https://posteritati.com/poster/42755/your-name-original-2016-japanese-movie-program'],
 ['weathering','天气之子','https://docs.ficomic.com/IMAGES_29/weathering-with-you-poster.jpg','https://www.manga-barcelona.com/es/XXV-2019/proyecciones-2019.cfm/id/32327/el-tiempo-contigo-weathering-with-.htm'],
 ['five-centimeters','秒速五厘米','https://ogre.natalie.mu/media/ex/film/146686/flyer_1.jpg?imwidth=640','https://natalie.mu/eiga/film/146686'],
 ['garden','言叶之庭','https://c-ssl.duitang.com/uploads/item/201509/12/20150912214000_S3BcN.jpeg','https://www.duitang.com/blog/?id=447826421'],
 ['fireflies','萤火之森','https://img.cinematoday.jp/a/T0010319/_size_640x/_v_1315302756/T0010319p.jpg','https://www.cinematoday.jp/movie/T0010319'],
 ['spy-family','间谍过家家','https://a.storyblok.com/f/178900/2000x2826/fd5ea39a6d/90e10f96b42726109573edebd0bdba921635543733_main.jpg','https://www.crunchyroll.com/fr/news/latest/2021/10/31/lanime-spy-x-family-sortira-en-2022'],
 ['sao','刀剑神域','https://cimg.kgl-systems.io/camion/files/dengeki/31593/a1a6e42389a88048b2d6e9a0fee347bbd.jpg?x=1280','https://dengekionline.com/article/202502/31593'],
 ['nailoong','奶龙','https://pic6.iqiyipic.com/image/20240625/ca/4a/a_100514634_m_601_m8_579_772.jpg','https://www.iqiyi.com/']
];
const out=path.join(root,'public/assets/posters');fs.mkdirSync(out,{recursive:true});
const temp=path.join(root,'output/poster-sources');fs.mkdirSync(temp,{recursive:true});
(async()=>{
 const requested = process.argv.slice(2);
 const selected = requested.length ? posters.filter(([slug])=>requested.includes(slug)) : posters;
 const results=await Promise.allSettled(selected.map(async([slug,title,url,source])=>{
  const raw=path.join(temp,slug+'.img');
  await run('curl.exe',['--fail','--silent','--show-error','--location','--max-time','30','--retry','1',url,'-o',raw]);
  const meta=await sharp(raw).metadata();
  await sharp(raw).resize({width:600,withoutEnlargement:true}).webp({quality:85}).toFile(path.join(out,slug+'.webp'));
  console.log(JSON.stringify({slug,title,width:meta.width,height:meta.height,source}));
 }));
 results.forEach((r,i)=>{if(r.status==='rejected')console.error(selected[i][0],r.reason.message)});
 fs.writeFileSync(path.join(out,'sources.json'),JSON.stringify(posters.map(([slug,title,image,source])=>({slug,title,image,source})),null,2));
 if(results.some(r=>r.status==='rejected'))process.exitCode=1;
})();
