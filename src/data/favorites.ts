import sources from '../../public/assets/posters/sources.json';
const originals: Record<string,string> = {'your-name':'君の名は','weathering':'天気の子','five-centimeters':'秒速5センチメートル','garden':'言の葉の庭','fireflies':'蛍火の杜へ','spy-family':'SPY×FAMILY','sao':'ソードアート・オンライン','nailoong':''};
const descriptions: Record<string,string> = {
 'your-name':'东京的少年泷与小镇里的少女三叶，在梦中交换了身体，开始通过留言认识彼此。城市与故乡、彗星与记忆交织成一场寻找；那些无法轻易说清的熟悉感，贯穿了整个故事。',
 'weathering':'离家来到东京的帆高，遇见了能让天空放晴的阳菜。在持续降雨的城市里，两人依靠这份能力寻找生活的出路。故事把天气的变化与少年的选择放在一起，晴空背后也藏着代价。',
 'five-centimeters':'由《樱花抄》《宇航员》和《秒速五厘米》三个篇章组成，记录少年少女从相近到渐远的岁月。车站、雪夜、书信与铁道承载着距离；它讲的不只是一次告别，也是一段感情如何留在时间里。',
 'garden':'想成为鞋匠的孝雄在雨天来到庭园，遇见了独自坐在亭中的雪野。一次次避雨的相逢，让两人在各自的困境里得到陪伴。浓密的绿意、雨声与细小的日常动作，构成了这部短片的气息。',
 'fireflies':'小女孩萤在森林里迷路，被戴着狐狸面具的少年阿银带回。此后每个夏天，她都会回来与他相见；但阿银不能被人类碰触。森林与夏日的宁静，衬着这段亲近却始终存在距离的关系。',
 'spy-family':'间谍黄昏为完成任务组建家庭，却不知道妻子约尔是杀手，女儿阿尼亚能够读心。各自藏着秘密的三个人，在任务、学校与家庭日常中慢慢靠近，行动戏与喜剧也因此交错在一起。',
 'sao':'桐人进入完全沉浸式游戏后，发现玩家无法退出，游戏中的死亡也会危及现实生命。他与亚丝娜等人在艾恩葛朗特攻略楼层、寻找生存方式，故事围绕虚拟世界里的冒险、选择和羁绊展开。',
 'nailoong':'来自外星的奶龙和小七一起生活，用自己的方式面对日常难题，也不断制造新的小状况。圆滚滚的形象、吃东西的热情和乐观的性格，让这些短小的故事带着轻松、热闹的气氛。'
};
export const favorites = sources.map(work => ({...work, title:work.slug==='your-name'?'你的名字':work.title, cover: `/assets/posters/${work.slug}.webp`, href:`/favorites/works/${work.slug}/`, originalTitle:originals[work.slug] || '',description:descriptions[work.slug] || ''}));
