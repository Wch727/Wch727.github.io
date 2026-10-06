export type FavoriteSong = {title:string; excerpt:string; language:'ja'|'zh'; source:string};

// One brief, verified excerpt per song; fuller lyrics remain on the source sites.
export const favoriteSongs: Record<string, FavoriteSong[]> = {
  milet: [
    {title:'inside you',excerpt:'今だけ　そばにいて',language:'ja',source:'https://www.uta-net.com/song/264460/'},
    {title:'us',excerpt:'世界は変わるかな',language:'ja',source:'https://lyrhub.com/en/track/Milet/us'},
    {title:'Drown',excerpt:'抱きしめてあげるよ',language:'ja',source:'https://www.uta-net.com/song/276914/'},
    {title:'Tell me',excerpt:'まだここにいたい',language:'ja',source:'https://www.uta-net.com/song/281920/'},
    {title:'Prover',excerpt:'手離さないように',language:'ja',source:'https://www.uta-net.com/song/281921/'}
  ],
  aimer: [
    {title:'ポラリス',excerpt:'ポラリスになりたい',language:'ja',source:'https://www.uta-net.com/song/155539/'},
    {title:'Re:far',excerpt:'あなたの忘れ方',language:'ja',source:'https://www.uta-net.com/song/191016/'},
    {title:'Ref:rain',excerpt:'まだ　消えなくて',language:'ja',source:'https://www.uta-net.com/song/244628/'},
    {title:'カタオモイ',excerpt:'夢が叶ったの',language:'ja',source:'https://www.uta-net.com/song/215314/'},
    {title:'Eclipse',excerpt:'また会えるから',language:'ja',source:'https://www.uta-net.com/song/372474/'}
  ],
  'stefanie-sun': [
    {title:'遇见',excerpt:'最美丽的意外',language:'zh',source:'https://www.shazam.com/zh-tw/song/541857030/%E9%81%87%E8%A7%81'},
    {title:'雨天',excerpt:'谁能体谅我的雨天',language:'zh',source:'https://www.youtube.com/watch?v=7oNbAvC2aw0'},
    {title:'半句再见',excerpt:'尘封的纪念',language:'zh',source:'https://www.shazam.com/zh-tw/song/1363418962/%E5%8D%8A%E5%8F%A5%E5%86%8D%E8%A7%81'},
    {title:'我不难过',excerpt:'这会是我最后的宽容',language:'zh',source:'https://www.shazam.com/zh-tw/song/255921025/%E6%88%91%E4%B8%8D%E9%9B%A3%E9%81%8E'},
    {title:'开始懂了',excerpt:'但明天是自己的',language:'zh',source:'https://www.shazam.com/zh-tw/song/298837675/%E5%BC%80%E5%A7%8B%E6%87%82%E4%BA%86'},
    {title:'天黑黑',excerpt:'天黑黑　欲落雨',language:'zh',source:'https://www.shazam.com/zh-tw/song/299031326/%E5%A4%A9%E9%BB%91%E9%BB%91'},
    {title:'逆光',excerpt:'有一束光',language:'zh',source:'https://www.shazam.com/zh-tw/song/905226302/%E9%80%86%E5%85%89'},
    {title:'我怀念的',excerpt:'我怀念的是无话不说',language:'zh',source:'https://www.kugou.com/song-36/63xh8a.html'}
  ]
};
