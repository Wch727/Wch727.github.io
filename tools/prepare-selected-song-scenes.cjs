const fs=require('node:fs');const path=require('node:path');const sharp=require('sharp');const root=path.resolve(__dirname,'..');const picks=[
  {
    "artist": "milet",
    "slug": "milet-inside-you",
    "title": "inside you",
    "note": "夜窗、远处的城市灯光与房间里的一点温度。"
  },
  {
    "artist": "milet",
    "slug": "milet-drown",
    "title": "Drown",
    "note": "深色的海浪与穿过云层的光，把沉重和力量放在一起。"
  },
  {
    "artist": "aimer",
    "slug": "aimer-polaris",
    "title": "ポラリス",
    "note": "看不清终点的夜海里，仍有一颗能够辨认方向的星。"
  },
  {
    "artist": "aimer",
    "slug": "aimer-kataomoi",
    "title": "カタオモイ",
    "note": "阳光、吉他与两张椅子，留下日常陪伴的形状。"
  },
  {
    "artist": "stefanie-sun",
    "slug": "sun-niguang",
    "title": "逆光",
    "note": "草地上的光很亮，前方的轮廓却仍值得走近。"
  },
  {
    "artist": "stefanie-sun",
    "slug": "sun-tian-hei-hei",
    "title": "天黑黑",
    "note": "雨前的庭院与厨房里的灯光，让黄昏有了归处。"
  }
];(async()=>{const out=path.join(root,'public/assets/song-scenes');fs.mkdirSync(out,{recursive:true});const scenes={};for(const item of picks){const input=path.join(root,'output/song-scene-candidates',item.slug+'.png');if(!fs.existsSync(input))throw new Error(item.slug);await sharp(input).resize({width:1200,withoutEnlargement:true}).webp({quality:86}).toFile(path.join(out,item.slug+'.webp'));(scenes[item.artist] ||= []).push({title:item.title,image:'/assets/song-scenes/'+item.slug+'.webp',note:item.note});}fs.writeFileSync(path.join(root,'src/data/song-scenes.ts'),'// Selected original artwork; notes describe the images and are not lyrics.\nexport const songScenes: Record<string,{title:string;image:string;note:string}[]> = '+JSON.stringify(scenes,null,2)+';\n');console.log('Prepared six selected scenes; other candidates remain private.');})();
