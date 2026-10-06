import type { SiteConfig, NavBarConfig, ProfileConfig, LicenseConfig, ExpressiveCodeConfig } from './types/config';
export const siteConfig: SiteConfig = {
 title: 'Wangles', subtitle: '晴空、代码与一些喜欢的事', lang: 'zh_CN',
 themeColor: {hue: 185, fixed: true},
 banner: {enable: true, src: '/assets/after-rain.webp', position: 'center', credit: {enable: false, text: ''}},
 toc: {enable: true, depth: 2}, favicon: [{src: '/favicon.svg'}]
};
export const navBarConfig: NavBarConfig = {links: [
 {name: '首页', url: '/'}, {name: '归档', url: '/archive/'},
 {name: '喜欢', url: '/favorites/'}, {name: '关于', url: '/about/'}, {name: '友链', url: '/friends/'}
]};
export const profileConfig: ProfileConfig = {
 avatar: '/assets/muichiro-hero.png', name: 'Wangles',
 bio: '中国人民大学 · 高瓴人工智能学院',
 links: [{name: 'GitHub', icon: 'fa6-brands:github', url: 'https://github.com/Wch727'}]
};
export const licenseConfig: LicenseConfig = {enable: false, name: '', url: ''};
export const expressiveCodeConfig: ExpressiveCodeConfig = {theme: 'github-dark'};
