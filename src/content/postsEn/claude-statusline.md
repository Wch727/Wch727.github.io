---
title: "claude-code-statusline"
published: 2026-09-12T21:52:50+08:00
description: "A terminal status line for Claude Code. It shows context and token use, estimates costs, and lets me check usage by request."
category: "Developer Tools"
tags: ["Claude Code"]
lang: en
---

I wrote this status line so I could see what Claude Code was using without leaving the terminal. It shows the model, context progress, input and output tokens, cache activity, and estimated cost. When Claude Code provides them, it can also show session and Git details.

## Price estimates

Costs are calculated from token counts and a local price catalog. The catalog supports USD and CNY pricing, time-of-day tiers, and manually locked entries. Models with no known price still show their token counts. Background updates pull selected reference prices from models.dev without making terminal rendering wait for the network. A failed sync leaves the previous snapshot in place.

## Per-request history

A local SQLite ledger stores deduplicated usage records and the unit price used for each estimate. When prices change, the ledger keeps the price attached to existing requests. The local report can filter by date, model, and billing tier and can export CSV. It stores usage metadata without prompts, responses, or credentials. When the session log does not identify the provider reliably, the report labels the log as the source.

```bash
python ~/.claude/status-line.py --sync-prices
python ~/.claude/status-line.py --usage-import --days 1
python ~/.claude/status-line.py --usage-web
```

Installation involves copying the Python scripts, report template, and pricing configuration into Claude Code’s config directory and setting the `statusLine` command. Use the repository instructions for the file list, Windows commands, and configuration. Some of the pricing and ledger code was adapted from CC Switch under the MIT license.

[Repository and installation guide](https://github.com/Wch727/claude-code-statusline)
