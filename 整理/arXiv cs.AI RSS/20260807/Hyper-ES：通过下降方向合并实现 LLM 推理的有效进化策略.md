---
published: 2026-08-07
title: "Hyper-ES：通过下降方向合并实现 LLM 推理的有效进化策略"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Hyper-ES- Effective Evolution Strategies for LLM Reasoning via Descent Direction Merging.md"
source_note: "[[信息源/arXiv cs.AI RSS/Hyper-ES- Effective Evolution Strategies for LLM Reasoning via Descent Direction Merging]]"
source_sha256: cabf6b7b4a3eb5f33cbd78f5802556ac222933aa993379e4a473d10e86e11893
original_url: "https://arxiv.org/abs/2608.05541"
processed: 2026-08-07
language: zh-CN
---

# Hyper-ES：通过下降方向合并实现 LLM 推理的有效进化策略

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yu Gu, Zhi Zheng, Yunpeng Ba, Xialiang Tong, Mingxuan Yuan, Zhenkun Wang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05541)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Hyper-ES- Effective Evolution Strategies for LLM Reasoning via Descent Direction Merging|查看原始文件]]

## 摘要

- 进化策略（ES）是资源受限大语言模型（LLM）推理中基于梯度微调的有前景替代；但直接对十亿参数 LLM 应用 ES 非常低效——在这种高维参数空间中，大多数随机扰动几乎与有用更新方向正交，导致优化不稳定。
- 提出 Hyper-ES：基于子空间的 ES 框架，避免 ES 在全参数搜索中的弱点，同时利用其在低维优化中的优势——不要求 ES 从 LLM 参数空间的随机扰动中发现有用方向，而是先执行少量廉价的基于梯度微调运行获得下降方向；尽管每个方向单独可能只提供有限改进，其张成形成捕获有用推理更新的紧凑适应子空间。
- Hyper-ES 随后在该子空间内应用 CMA-ES 优化逐层 DARE-TIES 合并系数，使 ES 搜索有意义的下降方向组合而非任意全模型扰动。
- 在三个 Qwen2.5-Instruct 与 DeepSeek-R1-Distill 骨干、六个数学推理数据集上评估：Hyper-ES 一致优于 GRPO-LoRA 1%，同时需要少 10% 的占用空间的梯度更新；代码见 https://github.com/kuangrepi/Hyper-ES。

## 正文

进化策略（Evolution Strategy，ES）是资源受限大语言模型（LLM）推理中基于梯度微调的有前景替代。然而，直接对十亿参数 LLM 应用 ES 非常低效。在这种高维参数空间中，大多数随机扰动几乎与有用的更新方向正交，导致优化不稳定。我们提出 Hyper-ES，一个基于子空间的 ES 框架，避免 ES 在全参数搜索中的弱点，同时利用其在低维优化中的优势。不要求 ES 从 LLM 参数空间的随机扰动中发现有用方向，Hyper-ES 首先执行少量廉价的基于梯度微调运行以获得下降方向。尽管每个方向单独可能只提供有限改进，它们的张成形成一个紧凑的适应子空间，捕获有用的推理更新。Hyper-ES 随后在该子空间内应用 CMA-ES 优化逐层 DARE-TIES 合并系数，允许 ES 搜索有意义的下降方向组合，而非任意全模型扰动。我们在三个 Qwen2.5-Instruct 与 DeepSeek-R1-Distill 骨干、六个数学推理数据集上评估 Hyper-ES。结果显示，Hyper-ES 一致优于 GRPO-LoRA 1%，同时需要少 10% 的占用空间的梯度更新。代码见 https://github.com/kuangrepi/Hyper-ES。

## 关键词

#进化策略 #LLM推理 #CMA-ES #参数合并
