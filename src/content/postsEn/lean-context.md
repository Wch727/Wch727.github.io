---
title: "lean-context"
published: 2026-11-12
description: "An unfinished OpenClaw plugin that trimmed tool output and carried forward task progress in long sessions. It is now archived."
category: "Developer Tools"
tags: ["Agents"]
lang: en
---

A few long shell logs or file reads can take up a lot of context during an OpenClaw session. I started lean-context to see how much of that text I could remove while still leaving the agent enough information to pick up the task.

## What the prototype did

It trimmed long tool results before writing them to the transcript. The original text could be archived for later retrieval. Older messages were folded into fixed fields, such as the goal, work already done, open tasks, changed files, and blockers. The next turn combined those fields with recent messages and any useful archived excerpts.

The plugin recorded token estimates before and after trimming and compaction. Those estimates helped show where the context was going. They could differ from the provider’s billing figures.

## Why I stopped

Short tasks rarely reached the compression threshold, and the plugin needed maintenance whenever OpenClaw changed its session interfaces. I ported it to OpenClaw 2026.11.3 in November 2026 and archived the unfinished prototype.

I tried comparing runs with and without it on PinchBench. The original logs were lost during a development environment reinstall, so I can no longer verify the numbers.

[Source](https://github.com/Wch727/lean-context) · [Project retrospective](https://github.com/Wch727/lean-context/blob/main/POSTMORTEM.md)
