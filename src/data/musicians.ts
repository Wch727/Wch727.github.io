import sources from '../../public/assets/musicians/sources.json';

const profiles: Record<string, {subtitle:string; paragraphs:string[]; works:string[]; link:string}> = {
  milet: {subtitle:'milet', paragraphs:['日本创作歌手，2019 年以 inside you EP 正式出道。她的作品同时使用日语与英语，既有偏抒情的旋律，也有带摇滚与电子色彩的编曲。','她辨识度很高的人声常处在低沉与明亮之间，歌曲里的空间感与情绪起伏也很突出。电视剧、动画主题曲和自己的专辑，是了解她作品的不同入口。'], works:['inside you','us','5am'], link:'https://www.milet.jp/'},
  aimer: {subtitle:'Aimer', paragraphs:['日本歌手，作品横跨抒情歌曲、摇滚和动画主题曲。她的声音带着沙哑与空气感，安静的段落和高强度的副歌之间形成了鲜明对比。','Brave Shine 与残響散歌分别连接到 Fate 和鬼灭之刃的动画作品。除了这些节奏强烈的主题曲，她的专辑中也有许多更缓慢、细腻的歌曲。'], works:['Brave Shine','残響散歌','朝が来る'], link:'https://www.sonymusic.co.jp/artist/aimer/profile/'},
  'stefanie-sun': {subtitle:'Stefanie Sun', paragraphs:['孙燕姿是来自新加坡的华语歌手，2000 年发行首张同名专辑。清亮而略带沙哑的人声，以及自然的叙事感，是她作品中容易辨认的特点。','她的歌曲既有贴近日常的情歌，也有关于成长、寻找与自我选择的表达。早期专辑到后来的作品，保留着直接的情绪，同时呈现出不同的编曲和声音变化。'], works:['天黑黑','遇见','我要的幸福'], link:'https://music.apple.com/us/playlist/%E5%AD%99%E7%87%95%E5%A7%BF%E4%BB%A3%E8%A1%A8%E4%BD%9C/pl.542bacdd2b87490183a2257e139cc22d?l=zh-Hans-CN'},
  'david-tao': {subtitle:'David Tao', paragraphs:['陶喆是华语创作歌手与制作人，1997 年发行首张同名专辑。他将 R&B、灵魂乐和其他音乐元素带入华语流行作品，对节奏、人声和和声的处理形成了鲜明的风格。','从爱，很简单到普通朋友，他的情歌常把直接的表达放进富有变化的旋律与律动里。歌曲的录音版本与现场演绎，也能呈现不同的人声细节。'], works:['爱，很简单','普通朋友','飞机场的10:30'], link:'https://music.apple.com/tw/playlist/%E9%99%B6%E5%96%86-%E6%83%85%E6%AD%8C%E7%B2%BE%E9%81%B8/pl.ba71ca517e5343c2978fb7d2cb4ed903'},
  'hikaru-utada': {subtitle:'宇多田ヒカル · Hikaru Utada', paragraphs:['宇多田光是创作歌手与音乐制作人，1999 年发行日语专辑 First Love。她的作品从 R&B 与流行音乐延伸到电子音乐，在旋律、节奏和人声编排之间不断变化。','她的歌曲既有简单直接的情感表达，也有更内省的声音与文字。First Love、游戏主题曲和后来的专辑，为不同阶段的创作提供了入口。'], works:['First Love','光','One Last Kiss'], link:'https://www.universal-music.co.jp/utada-hikaru/biography/'},
  'jay-chou': {subtitle:'Jay Chou', paragraphs:['周杰伦是华语创作歌手与音乐人，2000 年发行首张专辑 Jay。他的作品融合 R&B、嘻哈、流行音乐与中国风等元素，也常以鲜明的编曲构建歌曲的场景。','从校园、爱情和日常，到更具戏剧感的故事，旋律与节奏承担着不同的叙事角色。不同专辑也形成了各自的声音和视觉风格。'], works:['晴天','七里香','爱在西元前'], link:'https://www.jvrmusic.com.tw/artist/profile/1150822038412333056'},
  'fish-leong': {subtitle:'Fish Leong', paragraphs:['梁静茹是华语歌手，许多作品围绕爱情、陪伴与成长展开。她的歌声温柔而清楚，常通过朴素的旋律和细腻的情绪，讲述关系中的迟疑、勇气与告别。','勇气、宁夏、可惜不是你等歌曲呈现了不同的情感位置：有轻快的日常，也有安静的回望。专辑与现场演出则提供了更多不同的表达。'], works:['勇气','宁夏','可惜不是你'], link:'https://music.apple.com/cn/artist/%E6%A2%81%E9%9D%99%E8%8C%B9/531134701/top-songs'}
};

export const musicians = sources.map(artist => ({...artist, photo:`/assets/musicians/${artist.slug}.webp`, href:`/favorites/music/${artist.slug}/`, ...profiles[artist.slug]}));
