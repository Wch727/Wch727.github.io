---
title: "loopvl-local-deploy"
published: 2026-10-15T16:02:24+08:00
description: "A local web interface for LoopVL with image questions, follow-ups, and on-demand unloading. I’ve tested it on CPU."
category: "Developer Tools"
tags: ["LLMs"]
lang: en
---

I put together local deployment scripts and a web UI for TierFlow’s LoopVL. It uses the upstream Python runtime and handles setup, model status, follow-up questions, and releasing the model when it is no longer needed.

## Load it when you need it

Opening the page checks the service state. It loads the weights after you click Start. You can release them manually or let an idle timeout do it. The model stays loaded between questions.

## Image and text chat

You can paste or upload an image, ask about it, and follow up in the same conversation. Text-only chat works too. You can choose the H or L mode and adjust the output budget. The service listens locally and processes images on the machine running it.

## What I tested

I tested image Q&A and follow-up conversations on my computer. The current UI uses CPU inference, so responses can take a while, especially with longer histories or outputs. I have yet to test installation on a clean machine.

[Code and setup](https://github.com/Wch727/loopvl-local-deploy) · [Upstream model](https://huggingface.co/TierFlow/LoopVL)
