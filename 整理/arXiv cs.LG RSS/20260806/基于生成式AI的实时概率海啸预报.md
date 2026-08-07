---
published: 2026-08-06
title: 基于生成式AI的实时概率海啸预报
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Real-time probabilistic tsunami forecasting via generative AI.md
source_note: "[[信息源/arXiv cs.LG RSS/Real-time probabilistic tsunami forecasting via generative AI]]"
source_sha256: 4222e5bce0851429c31c1defa010c0dc2abf1be378adbe525250e17c58b2a9e5
original_url: https://arxiv.org/abs/2608.04327
processed: 2026-08-07
language: zh-CN
---

# 基于生成式AI的实时概率海啸预报

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04327)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Real-time probabilistic tsunami forecasting via generative AI|查看原始文件]]

## 摘要

- 基于条件扩散模型构建概率集成模型，将准确性与校准相协调，实现岸上海啸淹没的概率预报。
- 以 2011 年东北地方太平洋近海地震数据验证，模型忠实追踪震后随时间递减的不确定性，并准确预测淹没深度与范围。
- 展示生成式 AI 可将海啸预报从确定性转向概率性，为下一代预警奠定基础。

## 正文

明确的岸上海啸淹没预报可以提升公众风险意识，但在高度不确定条件下（例如由巨型逆冲地震产生的近场海啸）确定性预测的淹没边界可能错误地暗示边界之外是安全的。因此，当前警报主要针对沿海海啸波高，而非岸上淹没。尽管机器学习可以实现即时淹没预测，但它们仍是确定性的，缺乏不确定性量化。

在此，我们开发一个基于条件扩散模型（一种生成式 AI）的概率集成模型，将准确性与校准相协调。利用 2011 年东北地方太平洋近海地震（Tohoku-oki）数据验证后，我们的模型忠实追踪震后随时间递减的不确定性，同时准确预测淹没深度与范围。我们的框架表明，生成式 AI 可以将海啸预报从确定性转向概率性，为下一代预警提供基础。

## 关键词

#海啸预报 #生成式AI #条件扩散模型 #不确定性量化 #概率预报
