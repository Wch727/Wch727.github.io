---
title: "claude-code-net-tools"
published: 2026-07-31T22:10:54+08:00
description: "An MCP toolkit for Claude Code. It searches the web, reads pages and PDFs, and uses a browser when it needs one."
category: "Developer Tools"
tags: ["Claude Code"]
lang: en
---

I started this when Claude Code’s built-in Web Search did not work with the third-party API I was using. I wanted to look things up while coding without switching tools.

| Tool | What it does |
| --- | --- |
| `web_search` | Finds web pages, papers, code, and other sources |
| `read_url` | Reads HTML, plain text, JSON, feeds, and PDFs |
| `browser_interact` | Uses Playwright for dynamic pages, screenshots, and browser actions |

## Reading long documents

The first read creates a snapshot in the MCP process. It returns a section of text with a `document_id` and `next_offset` so the client can continue without downloading the same file again. Restarting the process clears the snapshot. Plain PDF extraction works well for prose; tables, formulas, and multi-column layouts may still need the original page.

## Setup

Basic search and reading use Node.js 20 or newer and curl. PDF and browser features have optional dependencies. The repository has installation scripts for Windows, macOS, and Linux.

```powershell
git clone https://github.com/Wch727/claude-code-net-tools.git
cd claude-code-net-tools
.\scripts\install-claude-code.ps1 -Scope user
claude mcp get net-tools
```

Restart Claude Code and open a new session after registering the server. The tool can use free search sources and optional providers configured through environment variables. Site availability and network access still determine what it can retrieve.

[Repository and configuration](https://github.com/Wch727/claude-code-net-tools)
