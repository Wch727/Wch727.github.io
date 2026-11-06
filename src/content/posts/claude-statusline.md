---
title: "claude-code-statusline"
published: 2026-09-12T21:52:50+08:00
description: "查看模型与上下文用量，同步参考价格，并按请求记录和查询费用。"
category: "开发工具"
tags: ["Claude Code", "终端", "Python"]
lang: zh_CN
---

这是给 Claude Code 使用的自定义终端状态栏。它将当前模型、Token 使用、上下文进度、费用和会话信息集中到终端底部，方便在编码过程中查看。

## 显示哪些信息

状态栏显示模型与供应商、推理强度、输入输出 Token，以及缓存读取和写入量。上下文使用情况用进度条表示，接近容量上限时会变色提示。

会话部分包括消息数、工作目录、Git 分支、运行时长、时钟和输出速率。Claude Code 提供相关字段时，还会显示 worktree、PR、子代理和使用限额等信息。手动设置的会话名也可以显示。

## 费用怎么计算

费用主要根据本地价格库与 Token 使用量估算。价格库区分美元与人民币计费；美元模型可以同时显示人民币换算，多模型会话按模型列出输入、输出与缓存费用。

未配置价格的模型保留 Token 用量并标记为未计价，总额只统计已知部分。仅在没有会话记录时，才使用 Claude Code 提供的费用字段。这里的金额是根据价格库计算的参考费用，实际账单以服务提供方记录为准。

## 安装

将 status-line.py、statusline_store.py、ccswitch_compat.py、usage_report.html 和 model_prices.json 放入 Claude Code 配置目录，同时保留仓库要求的 CC Switch 许可文件，再配置 statusLine 命令入口。完整文件清单以仓库安装说明为准。

```json
{
  "statusLine": {
    "type": "command",
    "command": "PYTHONIOENCODING=utf-8 python ~/.claude/status-line.py",
    "refreshInterval": 1
  }
}
```

Windows 使用时，需要将命令中的路径和 Python 调用方式改成自己的环境。

## 后台同步参考价格

新版支持从 models.dev 同步选定模型的公共参考价格。默认每六小时在后台检查一次，终端渲染不等待网络；同步失败时继续使用上一次可用快照。

本地价格库仍保留人民币计费、峰谷时段、历史价格版本和手动锁定项。远端只有单一美元报价时，不会直接覆盖这些规则。

```bash
python ~/.claude/status-line.py --sync-prices
python ~/.claude/status-line.py --price-status
```

## 逐请求用量账本

状态栏将去重后的 Claude Code 请求写入本地 SQLite，保存模型、Token、时间依据、计费档位和单价快照。已计价请求保留当时的价格，后续价格同步不改写旧费用；流式更新则按保存的单价修正用量。

账本记录用量元数据，不保存提示词、回复正文或凭据。会话日志无法可靠识别接入服务商时，页面明确显示来源为“会话日志”。

```bash
python ~/.claude/status-line.py --usage-import --days 1
python ~/.claude/status-line.py --usage-web
python ~/.claude/status-line.py --usage-report --output usage-report.html
```

本地报表可以按时间、模型和计费档位筛选，展开查看计价依据，刷新账本并导出 CSV。请求开始时间和延迟有一部分来自日志推算；导入旧记录时也不虚构历史单价。

同步与账本的部分逻辑参考并改编自 CC Switch 的 MIT 实现，仓库保留了上游版本、改编对应关系与许可说明。

## 维护价格库

模型单价保存在 model_prices.json，修改后状态栏会读取新的配置。也可以通过脚本查看当前收录的价格。

```bash
python ~/.claude/status-line.py --prices
```

模型和会话字段按是否存在决定显示内容，避免缺少某项信息时把整条状态栏弄坏。项目使用 Python 实现，仓库采用 MIT 许可。

[查看仓库与安装说明](https://github.com/Wch727/claude-code-statusline)
