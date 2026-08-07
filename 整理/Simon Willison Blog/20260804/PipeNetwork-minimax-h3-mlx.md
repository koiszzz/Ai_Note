---
published: 2026-08-04
title: PipeNetwork-minimax-h3-mlx
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/PipeNetwork-minimax-h3-mlx.md
source_note: "[[信息源/Simon Willison Blog/PipeNetwork-minimax-h3-mlx]]"
source_sha256: c3b19ec8fbf96faa77f413b0094e592b4c9cd3f625c2158a102e6f6f969d9be1
original_url: https://simonwillison.net/2026/Aug/4/minimax-h3-mlx/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# PipeNetwork-minimax-h3-mlx

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-04
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/4/minimax-h3-mlx/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/PipeNetwork-minimax-h3-mlx|查看原始文件]]

## 摘要

- MiniMax 两天前发布了 MiniMax-H3，将其描述为"通用、全模态的生成系统"：可以接收文本、图像、音频和视频输入，并利用它们生成最长 15 秒、包含音频的视频片段。
- PipeNetwork/minimax-h3-mlx 是一个 Python 包，把该模型移植到 MLX，以便在 Apple Silicon 上运行。
- 作者在 M5 Max MacBook Pro 上跑通了模型：先下载模型文件（约 115 GB），再运行生成脚本；用提示词"一只彩虹色的臭鼬在超市里跃过一根布满青苔的原木"生成视频耗时不到 45 分钟。
- 视频效果令人印象深刻，但音频是"奇怪的、类似语音的乱码"，因为作者没有提供任何音频方向指导；官方提示词编写指南（实验前作者并未阅读）里有大量相关信息。

## 正文

MiniMax 两天前发布了 MiniMax-H3——他们将其描述为"一个通用、全模态的生成系统"，实际上这意味着它可以接收文本、图像、音频和视频，并利用这些输入生成最长 15 秒、包含音频的视频片段。

这个 Python 包将其移植到 MLX，以便在 Apple Silicon 上运行。

我在我的 M5 Max MacBook Pro 上运行了它。我克隆了仓库，并按如下方式运行模型：

```bash
# First download the models

uvx --from huggingface_hub hf download MiniMaxAI/MiniMax-H3 \
--include 'FL2VA/*' --exclude 'FL2VA/transformer/*'

uvx --from huggingface_hub hf download pipenetwork/MiniMax-H3-MLX-8bit

# Now run the prompt

uv run --with mlx-vlm \
--with-requirements requirements.txt python scripts/generate.py \
"a rainbow colored skunk leaps over a mossy log in a supermarket" \
-o skunk.mp4 \
-c ~/.cache/huggingface/hub/models--MiniMaxAI--MiniMax-H3/snapshots/fa9c8ab1eaa21c8ae25e7e40b83b2e6002f340af/FL2VA \
-t ~/.cache/huggingface/hub/models--pipenetwork--MiniMax-H3-MLX-8bit/snapshots/3ac52081470b0488921c3ec3ba84a39097bf2361
```

以下是我为这个提示词得到的视频：

> `a rainbow colored skunk leaps over a mossy log in a supermarket`

（原博文中内嵌了一段视频，海报预览图为一只彩虹色的臭鼬。）

它下载了约 115 GB 的模型文件，视频生成耗时不到 45 分钟。

视频令人印象深刻，但音频是奇怪的、类似语音的乱码，因为我没有就音频应该是什么样的提供任何提示词指导。提示词编写指南（我在这次实验之前没有读过）里有大量关于如何让它正常工作的信息。

## 关键词

#MiniMax #MLX #文本生成视频 #AppleSilicon #AI
