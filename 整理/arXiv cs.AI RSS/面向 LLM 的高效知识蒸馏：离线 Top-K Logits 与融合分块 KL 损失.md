---
title: "面向 LLM 的高效知识蒸馏：离线 Top-K Logits 与融合分块 KL 损失"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Efficient Knowledge Distillation for LLMs- Offline Top-K Logits and a Fused Chunked KL Loss.md"
source_note: "[[信息源/arXiv cs.AI RSS/Efficient Knowledge Distillation for LLMs- Offline Top-K Logits and a Fused Chunked KL Loss]]"
source_sha256: a03a46780ad7f40c4724a7fee173c4798900f825f8fa8fe9a993ac601b5dca83
original_url: "https://arxiv.org/abs/2608.03796"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 面向 LLM 的高效知识蒸馏：离线 Top-K Logits 与融合分块 KL 损失

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Bakbergen Ryskulov 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03796)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Efficient Knowledge Distillation for LLMs- Offline Top-K Logits and a Fused Chunked KL Loss|查看原始文件]]

## 摘要

- 离线知识蒸馏（缓存教师 Top-K logits 一次，学生对照缓存训练）在几乎相同的训练损失下匹配在线蒸馏，同时把教师移出内存，每次迭代快约 29%，单张 H200 GPU 吞吐量最高提升 41%。
- 引入融合分块 KL 损失：从不物化全词表大小的 logit 张量，使峰值内存与序列长度线性相关，消除限制上下文长度的内存尖峰，单卡可训练 4 倍上下文（32,768 token）。
- 单独的输出头玩具基准隔离损失内核，确认从 4K 到 256K token 的内存与迭代率缩放。
- 附有损失设计与序列打包的消融；分块损失实现：https://github.com/CompactifAI/Full-Chunked-KL-Loss

## 正文

论文编号：arXiv:2608.03796v1（更新类型：cross）。以下为摘要全文翻译。

小语言模型往往是在严格延迟、成本与本地部署约束下的唯一选择，但它们很少从零训练：压缩模型通常通过知识蒸馏（KD）恢复。这个恢复步骤在很大程度上决定最终质量，然而成本高昂。我们提出一份关于如何让蒸馏训练更高效的实践者研究，围绕两项系统贡献组织。第一，我们表明离线 KD（缓存教师的前 K 个 logits 一次，学生对照缓存训练）在几乎相同的训练损失下匹配在线蒸馏，同时把教师移出内存，每次迭代快约 29%，在单张 H200 GPU 上吞吐量最高提升 41%。第二，我们引入融合的分块 KL 损失（fused, chunked KL loss），从不物化全词表大小的 logit 张量，使峰值内存与序列长度线性相关。这消除了原本限制上下文长度的内存尖峰，使我们能在单张 GPU 上以 4 倍上下文（32,768 token）训练。一个单独的输出头玩具基准隔离损失内核，并确认其从 4K 到 256K token 的内存与迭代率缩放。综合起来，这些使大规模修复与数百次消融变得可负担。我们还报告了损失设计与序列打包方面的支持性消融。我们发布分块损失实现：https://github.com/CompactifAI/Full-Chunked-KL-Loss

## 关键词

#知识蒸馏 #LLM #KL损失 #内存效率
