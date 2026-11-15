---
title: "铁程（computer_apply）"
published: 2026-11-13
description: "收藏的开源火车出行规划项目。用对话提出出行需求，从本地时刻表找候选，再联网核实余票。"
category: "开源项目笔记"
tags: ["出行规划", "工具调用", "SQLite"]
lang: zh_CN
---

铁程是 [yxy0708zzc 的开源项目](https://github.com/yxy0708zzc/computer_apply)。这里记录的是我 fork 下来看到的实现，代码与上游一致。

它把火车规划拆成两步。用户先用自己的话说出行日期、起终点和时间偏好，Agent 再调用工具，从本地列车库找直达和换乘候选。候选方案出来后，再联网核对 12306 的余票和票价。因此，时刻表上有这趟车，并不代表该日期就有票，页面会区分已经核实和还没核实的结果。

需求还没想清楚时，可以在对话里继续改日期和偏好。已经知道自己要什么时，可以直接用手动查票页筛选。后端用 FastAPI 提供接口，车站、车次和票价数据存放在 SQLite。对话模式需要配自己的 OpenAI 兼容接口。

[原项目](https://github.com/yxy0708zzc/computer_apply) · [我的 fork](https://github.com/Wch727/computer_apply)
