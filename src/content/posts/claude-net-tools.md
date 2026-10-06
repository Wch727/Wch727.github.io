---
title: "claude-code-net-tools"
published: 2026-07-31T22:10:54+08:00
description: "起因是此前 Claude Code 使用第三方 API 时，无法使用 Web Search。"
category: "开发工具"
tags: ["Claude Code", "MCP", "联网搜索"]
lang: zh_CN
---

最初做这个项目，是因为此前通过第三方 API 使用 Claude Code 时，内置 Web Search 不受支持。我希望把搜索和网页读取接到本机工具上，让编码过程中查资料这件事能够继续进行。

后来，工具也覆盖了长网页、PDF、JavaScript 页面和浏览器交互。它作为本地 MCP 运行：Claude Code 负责提出查询、选择来源和综合信息，这套工具负责联网和返回内容。

## 三个主要入口

| 工具 | 用途 |
| --- | --- |
| web_search | 查找网页、论文、代码和其他来源，支持主查询与备选查询 |
| read_url | 提取 HTML、纯文本、JSON、RSS/Atom 和 PDF 的正文 |
| browser_interact | 用 Playwright 读取动态页面，完成截图、点击、输入和下载等操作 |

默认只暴露这三个入口。旧版工具名保留用于兼容，需要时可以切换完整工具列表。

## 长文档怎么读

长网页和 PDF 首次读取后会保存文档快照。每次返回一段正文，并提供 document_id 与 next_offset；继续读取时使用同一个快照，减少重复下载和重复文本提取，也避免一次把整篇长文塞进上下文。

快照保存在 MCP 进程内存中，重启后失效。PDF 通过 pdftotext 提取，适合阅读正文，但公式、表格和多栏排版仍需要结合原页面查看。对于依赖 JavaScript 的内容，则使用浏览器入口。

## 安装与使用

基础搜索和读取需要 Node.js 20 或更新版本与 curl。仓库提供 Windows、macOS 和 Linux 的安装脚本；基础功能不需要先运行 npm install，浏览器与 PDF 功能有各自的可选依赖。

```powershell
git clone https://github.com/Wch727/claude-code-net-tools.git
cd claude-code-net-tools
.\scripts\install-claude-code.ps1 -Scope user
claude mcp get net-tools
```

注册后重启 Claude Code 并新建会话。工具支持免费搜索源，也能接入可选的搜索 API；API Key 通过环境变量设置。

## 实现上的取舍

普通 HTTP 读取与真实浏览器分开处理：静态内容先直接下载，遇到动态页面或需要交互时再启动浏览器。一次性的浏览器动作结束后关闭会话，连续交互则使用命名 session。

搜索与读取仍受网络、网站验证和来源本身的可用性影响。项目保留 provider 配置、代理设置和调试文档，方便定位失败发生在搜索、下载还是正文提取阶段。

[查看仓库与完整配置](https://github.com/Wch727/claude-code-net-tools)
