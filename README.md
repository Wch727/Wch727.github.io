# Wangles.github.io

Wangles 的个人网站，存放项目介绍、知识笔记、随笔和片单。

访问地址：[wch727.github.io](https://wch727.github.io/)。网站基于 [Fuwari](https://github.com/saicaca/fuwari)，使用 Astro、Svelte 和 Tailwind CSS，部署在 GitHub Pages。

## 本地运行

需要 Node.js 22 和 pnpm 9.14.4。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

默认开发地址是 `http://localhost:4321/`。检查和构建：

```bash
pnpm check
pnpm build
pnpm preview
```

构建结果在 `dist/`，`pnpm build` 同时生成站内搜索索引。

## 修改内容

| 内容 | 位置 |
| --- | --- |
| 站点名称、导航、头像和个人信息 | `src/config.ts` |
| 项目、知识笔记和随笔正文 | `src/content/posts/` |
| 关于我 | `src/content/spec/about.md` |
| 知识笔记与随笔列表 | `src/pages/learning.astro`、`src/pages/essays.astro` |
| 喜欢的作品与独立介绍页 | `src/data/favorites.ts`、`src/data/work-details.ts`、`src/pages/favorites/works/` |
| 歌手、喜欢的歌曲与独立介绍页 | `src/data/musicians.ts`、`src/data/favorite-songs.ts`、`src/pages/favorites/music/` |
| 喜欢页总览 | `src/pages/favorites.astro` |
| 友链 | `src/pages/friends.astro` |
| 随笔分段背景 | `src/components/EssayScenes.astro`、`src/styles/essay-scenes.css` |
| 奶龙跟随组件 | `src/components/NailoongCompanion.astro` |
| 字体、海报和网页图片 | `public/assets/` |

文章使用 Markdown，标题、日期、分类等信息在文件开头的 frontmatter 中设置。项目文章的日期采用整理时查询到的仓库最新提交时间，写入后保持固定，不随之后的提交或文案修改更新。页面日期统一按北京时间显示。

只确定月份的文章设置 `datePrecision: month`，页面按 `2025.5` 的形式显示；月首日期仅用于内部排序。

中文字体按本站使用的字符分批生成并本地托管。新增中文内容后运行：

```bash
node tools/update-fonts.cjs
```

该脚本需要网络连接和 curl，会更新 `public/assets/fonts/` 与 `src/styles/generated-fonts.css`。

## 发布

确认本地内容后，提交并推送到 `main`。`.github/workflows/deploy.yml` 会检查代码、构建网站，并发布 `dist/` 到 GitHub Pages。仓库的 Pages 来源应设为 GitHub Actions。

## 素材与许可

Fuwari 模板的许可证见 `LICENSE`。字体许可证在 `public/assets/fonts/`。作品海报来源记录在 `public/assets/posters/sources.json`；奶龙角色图来自第七印象官网，来源见 `assets/nailoong-source.md`。网站背景插画的生成记录保存在 `assets/` 中。
