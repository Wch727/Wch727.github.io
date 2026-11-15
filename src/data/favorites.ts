import sources from '../../public/assets/posters/sources.json';
const originals: Record<string,string> = {'your-name':'君の名は','weathering':'天気の子','five-centimeters':'秒速5センチメートル','garden':'言の葉の庭','fireflies':'蛍火の杜へ','spy-family':'SPY×FAMILY','sao':'ソードアート・オンライン','nailoong':''};
const descriptions: Record<string,string> = {
 'your-name':"宫水三叶与立花泷跨越三年交换身体。泷发现三叶已死于彗星灾难，设法回到过去帮助小镇避难。两人渐渐忘记彼此，却在多年后于东京再次相遇。",
 'weathering':"离家出走的帆高在多雨的东京遇见能让天空放晴的阳菜。阳菜因能力逐渐消失，帆高选择救回她；此后东京长期被雨水淹没，三年后两人再度相见。",
 'five-centimeters':"贵树与明里童年相伴，分开后在雪夜重逢，却最终失去联系。高中时花苗喜欢着始终望向远方的贵树；成年后的贵树在铁路道口疑似与明里擦肩，随后独自向前走。",
 'garden':"立志制鞋的高中生孝雄在雨天的庭园结识雪野，后来才知道她是自己学校遭受流言伤害的教师。孝雄告白后两人痛哭，雪野辞职返乡，留下书信和未完成的约定。",
 'fireflies':"六岁的萤在森林里遇见不能碰触人类的阿银，此后每年夏天都来找他。多年后，阿银在妖怪祭典误碰人类孩子，身体消失；两人终于拥抱，也就此告别。",
 'spy-family':"间谍黄昏为接近目标组建了假家庭，收养会读心的阿尼亚，与杀手约尔结婚。阿尼亚努力在学校接近目标之子，全家又接连卷入恐袭、任务和护卫事件，仍不断维持着彼此的秘密。",
 'sao':"桐人在无法退出的死亡游戏 SAO 结识亚丝娜，发现希兹克利夫就是开发者茅场晶彦，并在第75层击败他，提前结束游戏。醒来后亚丝娜仍被困在另一款游戏中，桐人再次进入虚拟世界救她。",
 'nailoong':"外星幼龙奶龙意外来到地球，与少年小七成为好朋友。他们在一集集搞笑短篇里吃东西、结交朋友、试验发明，常常把小问题闹成一场热闹的冒险。"
};
export const favorites = sources.map(work => ({...work, title:work.slug==='your-name'?'你的名字':work.title, cover: `/assets/posters/${work.slug}.webp`, href:`/favorites/works/${work.slug}/`, originalTitle:originals[work.slug] || '',description:descriptions[work.slug] || ''}));
