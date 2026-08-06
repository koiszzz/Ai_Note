---
title: "Maglev：滑动循环记忆"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Maglev- Sliding Recurrent Memory.md"
source_note: "[[信息源/arXiv cs.LG RSS/Maglev- Sliding Recurrent Memory.]]"
source_sha256: 70978552ecb310d58d4309798106f4a88f4949c03f1ee42e3bbd4b689f76af1a
original_url: "https://arxiv.org/abs/2608.02870"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Maglev：滑动循环记忆

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Bo Liu、Qiang Liu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02870)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Maglev- Sliding Recurrent Memory.|查看原始文件]]

## 摘要

- 引入 Maglev，一个带固定大小记忆的循环 Transformer 架构，泛化滑动窗口注意力，同时训练期间保持可并行化。
- Maglev 由两个耦合模型组成：预填充器 Q 利用全注意力（实践中 Q 使用交错的全注意力与滑动窗口注意力，效果更强；基本要求是 Q 比 P 更有表现力且能访问完整历史）产生记忆目标 m'_t；解码器 P 只使用滑动窗口注意力与循环 K/V 注入产生用于下一 token 预测的解码器记忆 m_t。
- 用记忆一致性损失训练 Maglev，使 m_t 与 m'_t 对齐，允许推理时只用 P。
- 实证上，Maglev 在验证损失与下游预训练基准上优于滑动窗口与潜在循环 Transformer 基线；此外，P 与 Q 之间共享参数在保留大部分收益的同时减少参数内存。

## 正文

论文编号：arXiv:2608.02870v1（更新类型：new）。以下为摘要全文翻译。

我们引入 Maglev，一个带固定大小记忆的循环 Transformer 架构，它泛化滑动窗口注意力，同时保持训练期间可并行化。Maglev 由两个耦合模型组成：预填充器 Q 利用全注意力（在实践中，Q 使用交错的全注意力与滑动窗口注意力，因为这带来更强的性能；基本要求是 Q 比 P 更有表现力且能访问完整历史）产生记忆目标 m'_t；解码器 P 只使用滑动窗口注意力与循环 K/V 注入，为下一 token 预测产生解码器记忆 m_t。我们用记忆一致性损失训练 Maglev，该损失使 m_t 与 m'_t 对齐，使推理可以只用 P。实证上，Maglev 在验证损失与下游预训练基准上优于滑动窗口与潜在循环 Transformer 基线。此外，在 P 与 Q 之间共享参数可以在保留大部分收益的同时减少参数内存。

## 关键词

#循环Transformer #滑动窗口注意力 #固定大小记忆 #长上下文 #并行训练
