---
published: 2026-08-06
title: RUTA：基于率-效用优化的原则性视觉令牌分配
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/RUTA- Principled Visual Token Allocation via Rate-Utility Optimization.md
source_note: "[[信息源/arXiv cs.CV RSS/RUTA- Principled Visual Token Allocation via Rate-Utility Optimization]]"
source_sha256: 9453dd558918a24f30ff9e03e0e9e306ec058eed7bad8192bf0f0739d41ebd9d
original_url: https://arxiv.org/abs/2608.04132
processed: 2026-08-07
language: zh-CN
---

# RUTA：基于率-效用优化的原则性视觉令牌分配

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04132)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/RUTA- Principled Visual Token Allocation via Rate-Utility Optimization|查看原始文件]]

## 摘要

- 提出 RUTA（率-效用令牌分配），一种原则性方法，在 LLM 之前进行视觉令牌缩减：联合学习保留哪些令牌以及为每个图像-查询对分配多少令牌。
- 训练时保留概率参数化独立 Bernoulli 门，其求和提供每对令牌数的可微训练期估计；保留令牌作为锚点，按语义亲和与空间邻近聚合未保留令牌的信息。
- 用带惩罚的率-效用目标优化，平衡下游任务损失与期望令牌用量；在 LLaVA-NeXT-7B 和 Qwen3-VL-8B 上分别只用 2.0% 和 4.2% 的视觉令牌，即保持 88.2% 和 94.4% 的任务性能。

## 正文

高分辨率图像和长视频为视觉语言模型提供多模态推理和细粒度感知的丰富上下文，但由此产生的长视觉令牌序列使大语言模型侧的计算和内存开销高昂。现有视觉令牌缩减器常以规定速率运行，而近期的跨输入令牌计数自适应方法使用方法特有的学习阈值或重要性预测器。

我们引入 RUTA，一种原则性的率-效用令牌分配方法，在 LLM 之前进行缩减：联合学习保留哪些令牌以及为每个图像-查询对分配多少令牌。RUTA 构建查询条件化的候选令牌，并为每个候选预测保留概率。训练时，这些概率参数化独立的 Bernoulli 门，而其求和提供每个配对的令牌数的可微训练期估计。保留的令牌作为锚点，根据语义亲和性和空间邻近性聚合来自未保留令牌的信息。RUTA 使用带惩罚的率-效用目标进行优化，平衡下游任务损失与期望令牌用量。

平均五个基准、相对每个骨干的满令牌基线衡量，RUTA 在 LLaVA-NeXT-7B 和 Qwen3-VL-8B 上分别仅使用 2.0% 和 4.2% 的视觉令牌，同时保持 88.2% 和 94.4% 的任务性能。

## 关键词

#视觉令牌缩减 #率效用优化 #多模态 #高效推理
