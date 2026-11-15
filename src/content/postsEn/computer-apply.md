---
title: "TripAI (computer_apply)"
published: 2026-11-13
description: "Notes on a train-planning agent I forked. It finds routes in a local timetable, then checks fares and seat availability online."
category: "Open-source Notes"
tags: ["Agents"]
lang: en
---

TripAI is an open-source project by [yxy0708zzc](https://github.com/yxy0708zzc/computer_apply). I forked it to read through the implementation. My fork matches the upstream project.

Users can describe where they are going, when they want to travel, and what they prefer. The agent searches a local timetable for direct and connecting trains, then checks 12306 for availability and fares. The interface distinguishes routes that have been checked from timetable results that still need verification.

You can change dates and preferences in the chat or use the manual filters when you already know what you want. The backend is built with FastAPI and uses SQLite for stations, services, and fare data. The chat requires an OpenAI-compatible endpoint.

[Upstream project](https://github.com/yxy0708zzc/computer_apply) · [My fork](https://github.com/Wch727/computer_apply)
