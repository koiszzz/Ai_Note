---
published: 2018-12-14
title: "AI 训练如何扩展"
source: "OpenAI News"
original_file: "信息源/OpenAI News/How AI training scales.md"
source_note: "[[信息源/OpenAI News/How AI training scales]]"
source_sha256: 79f58c25ac628fa31c95a738649bf46c37e9312416836af1fbdf1bd73df82cda
original_url: "https://openai.com/index/how-ai-training-scales"
processed: 2026-08-06
language: zh-CN

---

# AI 训练如何扩展

> [!info] 来源信息
> - 数据源：OpenAI News
> - 作者：原始来源未提供
> - 发布时间：2018-12-14
> - 原文链接：[打开原文](https://openai.com/index/how-ai-training-scales)
> - Vault 原文件：[[信息源/OpenAI News/How AI training scales|查看原始文件]]

## 摘要

- 我们发现梯度噪声尺度这一简单的统计指标，可以预测神经网络训练在广泛任务上的可并行性。
- 复杂任务通常梯度噪声更大，因此未来更大的批处理规模可能变得有用，移除 AI 系统进一步增长的一个潜在限制。
- 更广泛地说，这些结果表明神经网络训练不必被视为神秘的艺术，而是可以严谨化、系统化。

## 正文

我们发现，梯度噪声尺度（gradient noise scale）这一简单的统计指标，可以预测神经网络训练在广泛任务上的可并行性。由于复杂任务往往有更嘈杂的梯度，未来越来越大的批处理规模可能会变得有用，从而消除 AI 系统进一步增长的一个潜在限制。更广泛地说，这些结果表明神经网络训练不必被视为一门神秘的艺术，而是可以被严谨化和系统化。

## 关键词

#OpenAI #训练扩展 #梯度噪声 #深度学习