---
title: "claude-code-statusline"
published: 2026-09-12T21:52:50+08:00
description: "集中查看模型、Token、上下文使用与会话费用。"
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

价格库没有覆盖的模型，会回退到 Claude Code 返回的费用字段。价格与汇率都可能变化，因此状态栏的金额是编码时的参考信息，实际账单仍以服务提供方记录为准。

## 安装

将 status-line.py 和 model_prices.json 放入 Claude Code 配置目录，在 settings.json 的 statusLine 中设置命令入口。仓库提供配置示例。

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

## 维护价格库

模型单价保存在 model_prices.json，修改后状态栏会读取新的配置。也可以通过脚本查看当前收录的价格。

```bash
python ~/.claude/status-line.py --prices
```

模型和会话字段按是否存在决定显示内容，避免缺少某项信息时把整条状态栏弄坏。项目使用 Python 实现，仓库采用 MIT 许可。

[查看仓库与安装说明](https://github.com/Wch727/claude-code-statusline)
