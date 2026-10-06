const sharp=require('sharp');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
(async()=>{
 for(const name of ['essay-garden','essay-meeting','essay-platform']) await sharp(path.join(root,'assets',name+'.png')).resize({width:1600,withoutEnlargement:true}).webp({quality:85}).toFile(path.join(root,'public/assets',name+'.webp'));
 await sharp(path.join(root,'assets/nailoong-official.png')).trim().resize({width:320,withoutEnlargement:true}).webp({quality:92}).toFile(path.join(root,'public/assets/nailoong-mascot.webp'));
 console.log('Prepared three essay scenes and the official mascot.');
})();
