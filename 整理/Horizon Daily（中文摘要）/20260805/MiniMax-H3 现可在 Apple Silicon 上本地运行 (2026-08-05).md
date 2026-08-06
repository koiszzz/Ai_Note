---
published: 2026-08-05
title: "MiniMax-H3 现可在 Apple Silicon 上本地运行"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)]]"
source_fragment: "MiniMax-H3 现可在 Apple Silicon 上本地运行"
source_sha256: a95ca2b002031ca8b11b06a7711ba64db3ff679428fdd0f1ed0860fe3068c63d
original_url: "https://simonwillison.net/2026/Aug/4/minimax-h3-mlx/#atom-everything"
processed: 2026-08-05
language: zh-CN
---

# MiniMax-H3 现可在 Apple Silicon 上本地运行

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/4/minimax-h3-mlx/#atom-everything)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)|查看原始日报]]

## 摘要

- MiniMax 发布了通用全模态生成系统 MiniMax-H3，可接受文本、图像、音频和视频输入，并生成最长 15 秒、含音频的视频片段。Simon Willison 介绍了一个 Python 包，将模型移植到 MLX 以在 Apple Silicon 上本地运行，并在 M5 Max MacBook Pro 上完成了测试。实际运行需要先下载约 115 GB 的模型文件，生成一段视频耗时接近 45 分钟；由于未按提示词指南提供音频指导，生成的音频变成类似语音的怪声。该包的下载和……

## 正文

MiniMax 发布了通用全模态生成系统 MiniMax-H3，可接受文本、图像、音频和视频输入，并生成最长 15 秒、含音频的视频片段。Simon Willison 介绍了一个 Python 包，将模型移植到 MLX 以在 Apple Silicon 上本地运行，并在 M5 Max MacBook Pro 上完成了测试。实际运行需要先下载约 115 GB 的模型文件，生成一段视频耗时接近 45 分钟；由于未按提示词指南提供音频指导，生成的音频变成类似语音的怪声。该包的下载和运行命令均已公开，方便用户复现实验。

rss · Simon Willison · 8月4日 19:10

「背景」 MiniMax-H3 是一个“通用型全模态生成系统”，意味着同一个模型可以同时理解和生成文本、图像、音频和视频。MLX 是苹果面向 Apple Silicon 的机器学习框架，这个第三方包将 MiniMax-H3 转换并量化到 MLX 格式（8-bit），让 Mac 用户无需云端服务即可在本地运行。

「影响」 Apple Silicon 用户现在可以在本地尝试文本到视频生成，但需要准备约 115 GB 的磁盘空间并接受每段约 45 分钟的生成时间；若想获得合理的音频，还需要先阅读提示词指南。

标签: #multimodal AI, #MLX, #MiniMax-H3, #generative video, #Apple Silicon

## 关键词

#multimodal-AI #MLX #MiniMax-H3 #generative-video #Apple-Silicon #科技新闻
