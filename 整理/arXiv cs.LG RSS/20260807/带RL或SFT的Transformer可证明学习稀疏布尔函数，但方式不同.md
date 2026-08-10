---
published: 2026-08-07
title: "带 RL 或 SFT 的 Transformer 可证明学习稀疏布尔函数，但方式不同"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Transformers with RL or SFT Provably Learn Sparse Boolean Functions, But Differently.md"
source_note: "[[信息源/arXiv cs.LG RSS/Transformers with RL or SFT Provably Learn Sparse Boolean Functions, But Differently]]"
source_sha256: 6eec3f1a279d18310e1afe8f6fda2f93c38b9c155717f8b02c2b2334646cf131
original_url: "https://arxiv.org/abs/2511.17852"
processed: 2026-08-07
language: zh-CN
---

# 带 RL 或 SFT 的 Transformer 可证明学习稀疏布尔函数，但方式不同

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Bochen Lyu, Yiyang Jia, Xiaohao Cai, Zhanxing Zhu
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2511.17852)

## 摘要

- Transformer 可通过微调获得思维链（CoT）能力解决推理任务；强化学习（RL）与监督微调（SFT）是两条主要途径。
- 检查带可验证过程奖励的 RL 与 SFT 学习 k 稀疏布尔函数（单层 transformer，经类似 CoT 的中间推理步骤）；考虑可递归分解为固定 2 稀疏布尔函数的布尔函数。
- 统一分析带可验证过程奖励的 RL 微调与 SFT 的学习动力学，识别 transformer 可证明学习这些函数的充分条件；验证条件对三个例子（k-PARITY、k-AND、k-OR）成立。
- 揭示 RL 与 SFT 依监督方式展现不同学习行为：RL 同时学习整个 CoT 链，无教师强制的 SFT 逐步学习 CoT；比较 RL 与 SFT 应考虑中间监督。

## 正文

Transformer 可以通过微调获得思维链（Chain-of-Thought, CoT）能力来解决推理任务。强化学习（RL）与监督微调（SFT）是实现该目标的两条主要途径。本文检查带可验证过程奖励的 RL 与 SFT 学习 k 稀疏布尔函数（单层 transformer，经类似 CoT 的中间推理步骤）的情形。特别地，研究考虑可递归分解为固定 2 稀疏布尔函数的布尔函数。首先以统一方式分析带可验证过程奖励的 RL 微调与 SFT 的学习动力学，从而识别 transformer 可证明学习这些函数的充分条件。随后验证这些条件对三个例子成立，包括 k-PARITY、k-AND 与 k-OR，证明它们经 RL 与 SFT 均可学习。值得注意的是，研究揭示 RL 与 SFT 依监督方式展现不同学习行为：RL 同时学习整个 CoT 链，而无教师强制的 SFT 则逐步学习 CoT。总体而言，发现为 RL 与 SFT 的机制以及它们在触发 transformer CoT 能力上的差异提供洞见，并表明 RL 与 SFT 的比较应考虑中间监督。

## 关键词

Transformer、强化学习、监督微调、思维链、布尔函数
