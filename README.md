# Wangles 的个人小站

基于 [Fuwari](https://github.com/saicaca/fuwari) / Astro，保留原模板导航、侧栏、文章列表、归档、搜索与主题切换。模板许可见 LICENSE。

线上地址：https://wch727.github.io/

## 本地开发

- Node.js 22，pnpm 9.14.4
- pnpm install --frozen-lockfile
- pnpm dev
- pnpm check
- pnpm build

## 内容

- src/config.ts：站点与个人信息
- src/content/posts/：项目介绍；发布日期是本站介绍的整理日期，不代表项目创建日期
- src/content/spec/about.md：关于我
- src/pages/favorites.astro：喜欢的作品
- src/pages/friends.astro：友链
- src/styles/personal.css：轻量字体与个人样式

推送 main 后由 GitHub Actions 构建 dist 并发布到 Pages，Pages 来源需设为 GitHub Actions。

中文字体使用本站字符子集。新增文字后运行 node tools/update-fonts.cjs，字体本地托管，许可证随文件保留。

横幅为原创生成插画，生成说明见 assets/after-rain-artwork.md。头像为此前生成的时透无一郎插画。无官方关联。
