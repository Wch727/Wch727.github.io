import sources from '../../public/assets/posters/sources.json';
export const favorites = sources.map((work, index) => ({...work, cover: `/assets/posters/${work.slug}.webp`, group: index < 4 ? '新海诚作品' : index === 4 ? '动画电影' : '动画'}));
