---
title: "Claude Code Net Tools：补上联网搜索"
published: 2026-10-06T11:00:00+08:00
description: "起因是此前 Claude Code 使用第三方 API 时，无法使用 Web Search。"
category: "开发工具"
tags: ["MCP","Claude Code"]
lang: zh_CN
---

这个项目来自使用 Claude Code 时遇到的实际问题：**此前通过第三方 API 使用 Claude Code 时，Web Search 不受支持**。

因此，我做了一套本地联网工具，通过 MCP 给 Claude Code 提供搜索、读取网页和浏览器交互能力。

## 三种联网能力

- **web_search**：搜索信息，发现可用来源。
- **read_url**：读取网页正文，把页面内容带入工作流程。
- **browser_interact**：处理需要浏览器交互的页面。

项目围绕当时的使用需求展开，具体安装方式与支持范围以仓库 README 为准。

[查看 Claude Code Net Tools](https://github.com/Wch727/claude-code-net-tools)
