---
title: "kaggriculture-agent"
published: 2026-09-25T15:46:26+08:00
description: "An agent for Kaggriculture’s two-player farming game. I started with rules and match evaluation, then tried behavior cloning."
category: "Game AI"
tags: ["Agents"]
lang: en
---

Kaggriculture is a two-player farm management game. A policy chooses what to plant, how to use water and labor, and when to trade. I used it to try rule-based play, match evaluation, and learning from game trajectories.

## Start with a baseline

I first needed a policy that could finish games and an evaluation setup that could compare two policies under the same conditions. The repository includes rule-based policies and tools to run matches, inspect actions, and record results.

## Try learning from play

I tried behavior cloning from existing trajectories and kept it separate from experiments that learn through interaction. The same evaluation setup can compare a learned policy against the rule-based baseline. Replays help identify what went wrong when a score on its own says little about the decisions.

## Records and results

I kept descriptions of the runs and submissions in the repository. Training runs, local match results, and official Kaggle standings are distinct records. The source repository is private.
