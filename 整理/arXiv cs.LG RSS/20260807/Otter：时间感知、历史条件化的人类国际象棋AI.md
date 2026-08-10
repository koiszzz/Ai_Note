---
published: 2026-08-07
title: "Otter：时间感知、历史条件化的人类国际象棋 AI"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Otter- A Time-Aware, History-Conditioned Human Chess AI.md"
source_note: "[[信息源/arXiv cs.LG RSS/Otter- A Time-Aware, History-Conditioned Human Chess AI]]"
source_sha256: dea648a8f8e65d71fe6c7e38811ec33ac568baf18320dc321b97bb661660bac3
original_url: "https://arxiv.org/abs/2608.05206"
processed: 2026-08-07
language: zh-CN
---

# Otter：时间感知、历史条件化的人类国际象棋 AI

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Tarun Kumar S
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05206)

## 摘要

- Otter 是 15.3M 参数的人类国际象棋 AI，通过将对局建模为时间感知的序列过程（而非孤立处理每个局面）预测人类走子选择。
- 组合两个条件信号：(1) 走子历史编码器，将预测条件化于最近 20 步，捕捉开局偏好、位置漂移与局内行为倾向；(2) 时间控制模块，基于时钟压力调制预测。
- 在单张 T4 GPU 上 30 天，用 1.17 亿局 Lichess 快棋的 61 亿局面训练。
- 达 55.23% top-1 与 90.95% top-5 走子预测准确率，超越先前 SOTA 人类国际象棋模型 Maia 2（参数与训练数据少得多）；11 个 Elo 档位（<1100 至 ≥2000）中精度在 1900–1999 档达峰 57.38%。

## 正文

Otter 是一个 15.3M 参数的人类国际象棋 AI，通过将对局建模为时间感知、序列过程（而非孤立处理每个局面）预测人类走子选择。它组合两个条件信号：(1) 走子历史编码器，将预测条件化于最近 20 步，捕捉开局偏好、位置漂移与局内行为倾向；(2) 时间控制模块，基于时钟压力调制预测。Otter 在单张 T4 GPU 上 30 天，用来自 1.17 亿局 Lichess 快棋的 61 亿局面训练。Otter 达到 55.23% 的 top-1 与 90.95% 的 top-5 走子预测准确率，以少得多的参数与训练数据超越先前最先进的人类国际象棋模型 Maia 2。跨 11 个 Elo 档位（<1100 至 ≥2000），精度在 1900–1999 档位达到峰值 57.38%。这些结果表明，将国际象棋建模为时间感知的序列活动，比仅位置方法产生更接近人类的走子预测，且模型更小。代码、训练模型与完整训练日志已公开。

## 关键词

国际象棋、人类建模、走子预测、时间感知、历史条件化
