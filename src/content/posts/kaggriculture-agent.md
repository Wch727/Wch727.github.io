---
title: "kaggriculture-agent"
published: 2026-09-25T15:46:26+08:00
description: "围绕种植、用水、工人和市场交易搭建策略与评测工具，并尝试行为克隆。"
category: "博弈实验"
tags: ["Kaggle", "策略学习", "行为克隆"]
lang: zh_CN
---

这是围绕 Kaggle 的 Kaggriculture 比赛做的自主农场经营 Agent。比赛是 **720 回合的双人模拟**，相当于 30 天、每天 24 回合。目标是在赛季结束时，让银行金币多于对手。

农场里需要种植、浇水、收获、饲养动物、雇佣工人、购买土地和进行市场交易。一个动作会影响之后的资源与收益，也会和对手的市场行为产生联系。

## 先搭建策略与评测

项目先实现了可读的规则基线，再接入公开策略作为对照、模仿学习的数据来源和对手。状态编码、动作编码、合法动作检查与策略本体分别维护。

执行过程从 observation 出发，经状态编码与 policy 选动作，再经过合法动作层处理，最后返回 Kaggle 动作。评测、轨迹采集和命令行共用策略注册入口。

本地对局支持保存 replay，也有配对评测：相同 seed 下交换两个位置，减少位置差异对比较的影响。

```bash
python scripts/run_match.py --agent expert --opponent starter --steps 720 --seed 42
python scripts/evaluate.py --agent expert --opponent starter --seeds 100 --paired --seed 42
```

## 两条学习路线

**Macro BC v2** 尝试从轨迹中学习日级宏观规划，接入了数据构建、训练、rollout 和对局评估，目前尚未超过规则参照。

**Entity-v3 Worker BC** 使用实体与关系编码、工人动作选择策略和执行器。离线指标较好，但放进真实闭环后会退化成重复的 PICKUP / DROP，说明离线评估与持续决策之间仍有差距。

项目尝试过 hybrid fallback，在学习策略退化时回退到规则策略。它能保住基线表现，但学习模型目前没有带来正收益，因此神经网络路线暂时暂停。

## 轨迹与实验记录

轨迹记录 observation、action、reward、下一步 observation 和回合结束状态。采集、数据检查、训练、强对手循环赛与提交打包都有相应脚本。

对于后续实验，README 记录了先做规则策略作为教师的控制实验，再考虑 scheduled sampling 或 DAgger 的路线；PPO 和进一步自博弈仍属于后续设想。

## 实际提交与历史结果

仓库最后记录的实际提交使用公开策略 **soilrain**，打包时附带来源与许可说明。它和自研学习模型是不同的路线。

README 中的历史快照为 **2026 年 9 月 23 日**，记录 Elo 1752.9、排名 2096。这里保留这一实验时间点，不把它写成实时榜单成绩。

[查看仓库](https://github.com/Wch727/kaggriculture-agent) · [项目研发记录](https://github.com/Wch727/kaggriculture-agent/blob/main/docs/project-history.md)
