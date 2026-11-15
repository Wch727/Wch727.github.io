---
title: "sonata-reproduction"
published: 2026-08-09T16:02:35+08:00
description: "An attempt to reproduce Sonata on Qwen3-8B, using hidden states to estimate when to enable thinking mode."
category: "Paper Reproduction"
tags: ["LLMs"]
lang: en
---

I tried reproducing Sonata on Qwen3-8B. The question I wanted to understand was whether a signal available before generation could help choose between direct answering and thinking mode.

## How I built the target

The reproduction protocol samples 32 direct answers per calibration problem. It checks the answers and uses the fraction that are correct as a target for a small adapter.

$$
s(x)=\frac{1}{32}\sum_{i=1}^{32}\mathbf{1}\{\hat y_i = y\}.
$$

A two-layer MLP takes a hidden state and predicts the score. At inference, the adapter makes one prediction without repeating the 32 samples. In this setup, a predicted score above 0.3 routes to direct answering; lower scores route to thinking mode. The cutoff is a setting of the reproduction.

## From calibration to evaluation

The code records calibration samples and hidden states, supports resuming interrupted collection, trains the adapter, and compares the generation modes. The evaluation tracks both thinking tokens and total generated tokens.

The implementation records its assumptions about normalization, data splits, and checkpoint choice. I have yet to record a complete final comparison. The local LiveCodeBench runner was used for diagnosis, and the source repository is currently private.
