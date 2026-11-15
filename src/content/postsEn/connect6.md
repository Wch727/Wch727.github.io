---
title: "connect6"
published: 2026-10-22T20:53:38+08:00
description: "A Connect6 engine built for a competition, with self-play training and MCTS. It won first prize in its track."
category: "Game AI"
tags: ["Reinforcement Learning"]
lang: en
---

I worked on this Connect6 engine for the first Beijing “AI+” Innovation Competition for university students in December 2025. Our entry placed third and received first prize in the Connect6 track. I later organized the code for training, evaluation, web play, and replaying games.

## From board rules to a learned policy

Connect6 uses a 19×19 board. Black places one stone to open the game; thereafter each side places two stones per turn. Six or more in a row wins. A move has to account for how the two stones work together and what the opponent can threaten next.

An AlphaZero-style policy and value network estimates moves and positions. Monte Carlo tree search compares candidates, and self-play produces training data. The repository also has entry points for generating data, supervised pretraining, and shorter experiments.

## Training and evaluation

Training supports replay, checkpointing, and resuming on CPU or CUDA. A small run with fewer games and simulations is a good way to check the pipeline first.

In evaluation, two sets of weights can play with alternating colors. The results include individual game records, wins, draws, losses, and score rates. Rule-based assistance can be enabled or disabled for both sides. Record the search budget and who goes first when comparing runs.

## Play and replay

The project web UI runs a heuristic opponent without weights or loads a model trained by the project. A separate KataGomo interface uses an external engine for move suggestions and SGF or JSON game review. Its engine and weights are downloaded separately.

[Code and setup](https://github.com/Wch727/connect6) · [Competition report](https://ai.ruc.edu.cn/xwgg/xyxw/20260313001.html)
