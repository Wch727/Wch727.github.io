---
title: "Video Transcriber：从一次英语作业开始"
published: 2026-10-06T10:00:00+08:00
description: "想快速把视频里的音频转成文字，后来加入了字幕提取和画面 OCR。"
category: "开发工具"
tags: ["Whisper","Python"]
lang: zh_CN
---

最初做 Video Transcriber，是为了完成英语作业：**把视频中的音频快速转成文字**，方便阅读和整理。

## 从声音到文字

工具使用 Whisper 进行语音转录，并支持 TXT、SRT、VTT 等输出形式。纯文本适合阅读和整理，带时间轴的字幕方便对照视频。

后来，工具又加入了视频内嵌字幕提取和画面 OCR，为不同来源的视频提供更多提取文字的方式。

[查看 Video Transcriber](https://github.com/Wch727/video-transcriber)
