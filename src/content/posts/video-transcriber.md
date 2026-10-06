---
title: "video-transcriber"
published: 2026-05-18T15:11:32+08:00
description: "想快速把视频里的音频转成文字，后来加入了字幕提取和画面 OCR。"
category: "开发工具"
tags: ["语音转录", "字幕", "Whisper"]
lang: zh_CN
---

最初做这个工具，是为了英语作业：想把视频里的音频快速转成文字，方便阅读和整理。后来逐渐加入字幕轨提取、画面 OCR、批量队列和字幕导出，仓库中的工具名称是 Video Text Extractor。

## 三种不同的文字来源

视频里的文字可能来自语音、字幕轨，也可能直接画在画面上，所以工具提供了不同的提取路径。

| 模式 | 处理的内容 |
| --- | --- |
| Local Whisper | 在本地把语音转成文字 |
| OpenAI API | 通过远程 API 转录音频 |
| Embedded Subtitles | 提取视频文件中实际存在的字幕轨 |
| Visual OCR | 识别画面里的字幕、幻灯片或其他文字 |
| Auto | 优先尝试字幕轨，再回退到语音转录 |

有字幕轨的视频可以直接提取；只有画面字幕时需要 OCR；只有语音时则使用 Whisper。默认路径是本地 Whisper，模型下载后可以复用，不需要 API Key。

## 桌面操作

桌面版使用 PySide6，支持拖拽文件、任务队列、日志和输出预览，也能恢复历史记录。语言可以自动检测，或明确指定英语、中文等；输出支持 TXT、SRT、VTT 和 JSON。

做英语视频转英文稿时，选择 English 与 Transcribe 即可。Transcribe 保留原语言，Translate to English 用于把非英语语音翻译成英文，两者用途不同。

```powershell
python -m pip install -r requirements.txt
python video_text_gui.py
```

Windows 也可以通过仓库里的 start_video_text_gui.bat 启动。

## 命令行与字幕工作流

核心能力可以从命令行调用。例如，将英语视频转为文本：

```powershell
python video_text_extractor.py video.mp4 --mode whisper --whisper-model base --language en -o transcript.txt
```

需要时间轴时可以输出 SRT 或 VTT，也支持把 SRT 字幕烧录到视频。OCR 另外提供 Node.js 入口，可以识别整帧，或者只截取底部字幕区域。

## 运行条件

语音模式使用 Whisper，视频处理会用到 ffmpeg；字幕轨检测推荐安装 ffprobe，Python OCR 则需要 Tesseract 与对应语言包。不同模式有不同依赖，可以先用 dry-run 检查环境。

转录效果受音质、语言与模型大小影响；OCR 则受画面清晰度和文字位置影响。输出保存在本地目录，视频、缓存和历史文件默认不提交到 Git。

[查看仓库与各模式用法](https://github.com/Wch727/video-transcriber)
