---
published: 2026-08-07
title: "Compliance2LoRA：通过超网络生成 LoRA 适配器在任意策略子集上的个性化按需安全对齐"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Compliance2LoRA- Personalizable On-Demand Safety Alignment on Arbitrary Policy Subsets via Hypernetw.md"
source_note: "[[信息源/arXiv cs.LG RSS/Compliance2LoRA- Personalizable On-Demand Safety Alignment on Arbitrary Policy Subsets via Hypernetw]]"
source_sha256: 78a3bd0174c3f7ba074480439e1859e70e1a66ed56602cfdf6350e9a4f6ea3cb
original_url: "https://arxiv.org/abs/2607.27594"
processed: 2026-08-07
language: zh-CN
---

# Compliance2LoRA：通过超网络生成 LoRA 适配器在任意策略子集上的个性化按需安全对齐

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Pankayaraj Pathmanathan, Furong Huang
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2607.27594)

## 摘要

- 大型推理模型（LRM）个性化需求带来不同策略子集合规要求；为每个策略子集单独训练 LRM 产生严重组合开销。
- 提出统一的自适应超网络框架：安全策略作为可定制输入馈入 LoRA 适配器生成器，学习为下游 LRM 产出合规 LoRA 权重。
- 将这些权重加入 LRM 可生成符合指定策略子集的响应。
- 演示训练此类超网络可在单一 LRM 上实现按需策略调整，且不牺牲推理任务性能，跨不同规模推理模型与不同评估数据集。

## 正文

大型推理模型（LRM）中的训练后对齐显著改善了其对多样化安全合规设定的适应性。然而，随着 LRM 面向下游用户个性化成为核心，不同用户特定 LRM 必须遵守不同安全策略子集，对策略合规水平的需求不断增长。为每个策略子集单独训练 LRM 会引入严重的组合开销；上下文学习方法虽克服组合开销，却带来长上下文生成相关的额外计算挑战。为解决该挑战，研究提出一个统一的自适应超网络多策略合规框架。在框架中，安全策略作为可定制输入馈入 LoRA 适配器生成器，后者学习为下游 LRM 产出策略合规的 LoRA 权重；这些权重加入 LRM 后，可生成符合指定策略子集的响应。研究表明，训练此类超网络能在单一 LRM 上实现按需策略调整，且不牺牲不同规模推理模型与不同评估数据集上的任务性能。这凸显自适应超网络对齐在 LRM 中的有效性与实用性。

## 关键词

安全对齐、LoRA、超网络、策略合规、个性化
