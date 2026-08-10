---
published: 2026-08-07
title: "Otter：时间感知、历史条件的人类国际象棋 AI"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Otter- A Time-Aware, History-Conditioned Human Chess AI.md"
source_note: "[[信息源/arXiv cs.AI RSS/Otter- A Time-Aware, History-Conditioned Human Chess AI]]"
source_sha256: 7a4a1d4b23092330588c22b0c0b41e1c3349bb6b0b55651409ebc7afb1fb92b4
original_url: "https://arxiv.org/abs/2608.05206"
processed: 2026-08-07
language: zh-CN
---

# Otter：时间感知、历史条件的人类国际象棋 AI

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Tarun Kumar S
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05206)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Otter- A Time-Aware, History-Conditioned Human Chess AI|查看原始文件]]

## 摘要

- Otter 是 15.3M 参数的人类国际象棋 AI，通过将下棋建模为时间感知、顺序过程而非孤立处理每个局面来预测人类走子选择；结合两种条件信号：①走子历史编码器（条件化最后 20 步，捕获开局偏好、位置漂移与局内行为倾向）与②时间控制模块（根据时钟压力调制预测）。
- 在单张 T4 GPU 上 30 天，用 1.17 亿 Lichess 快棋对局中的 61 亿局面训练。
- Otter 实现 55.23% top-1 与 90.95% top-5 走子预测准确率，以更少参数与训练数据超越先前最优人类国际象棋模型 Maia 2；跨 11 个 Elo 分段（<1100 到 >=2000），准确率在 1900-1999 分段达峰 57.38%。
- 结果表明将国际象棋建模为时间感知顺序活动比仅位置方法产生更人类准确的走子预测，且模型更小；代码、训练模型与完整训练日志公开。

## 正文

Otter 是一个 15.3M 参数的人类国际象棋 AI，通过将下棋建模为时间感知、顺序过程而非孤立处理每个局面来预测人类走子选择。它结合两种条件信号：（1）一个走子历史编码器，将预测条件化于最后 20 步，捕获开局偏好、位置漂移与局内行为倾向；（2）一个时间控制模块，根据时钟压力调制预测。Otter 在单张 T4 GPU 上 30 天，使用来自 1.17 亿 Lichess 快棋对局的 61 亿局面训练。Otter 实现 55.23% 的 top-1 与 90.95% 的 top-5 走子预测准确率，以远更少的参数与训练数据超越先前最优的人类国际象棋模型 Maia 2。跨 11 个 Elo 分段（<1100 到 >=2000），准确率在 1900-1999 分段达到峰值 57.38%。这些结果表明，将国际象棋建模为时间感知、顺序活动比仅位置方法产生更人类准确的走子预测，且使用更小模型。代码、训练模型与完整训练日志已公开发布。

## 关键词

#国际象棋AI #人类建模 #时间感知 #走子预测
