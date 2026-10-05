# Wangles 的个人网站

线上地址：https://wch727.github.io/

明亮、现代的个人主页，以雾青、薄荷绿与深色文字搭配时透无一郎主题插画。内容包含六个真实项目、Agent Memory / Agent Harness / Benchmark 研究兴趣、人大高瓴学习背景、ICPC / CCPC 训练与个人喜好。

## 文件

- `index.html`：主页内容、项目预览、算法库详情窗口。
- `style.css`：视觉系统和手机、平板、桌面布局。
- `site.js`：项目分类与原生对话框交互。
- `assets/muichiro-hero.png`：使用内置 imagegen 生成的首屏插画。
- `assets/hero-artwork.md`：插画生成提示词与来源记录。

静态网页，无需安装运行依赖。GitHub Pages 从 main 根目录发布。

## 内容约定

算法库是 Wangles 与 Codex 共创的项目。Net Tools 源于第三方 API 下的 Web Search 支持问题；Video Transcriber 起初用于英语作业音频转录。保持这些真实背景，不杜撰项目成绩、论文或奖项。

## 验证

已用 Playwright 检查桌面 1440px、手机 390px 的页面截图与图片加载，检查分类筛选、详情窗口与 Esc 关闭。发布时保留现有仓库历史，使用普通提交推送。

## 字体
中文采用自托管 Noto Sans SC，英文采用 Manrope，均保留 OFL 许可证。新增中文内容后，运行 node tools/update-fonts.cjs 更新字形子集。详见 assets/fonts/README.md。
