---
published: 2026-08-07
title: "RP-OPSD：推理枢纽引导的在策略自蒸馏用于多语言推理迁移"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/RP-OPSD- Reasoning-Pivot-Guided On-Policy Self-Distillation for Multilingual Reasoning Transfer.md"
source_note: "[[信息源/arXiv cs.CL RSS/RP-OPSD- Reasoning-Pivot-Guided On-Policy Self-Distillation for Multilingual Reasoning Transfer]]"
source_sha256: 264e877aadc3e4778af323d4e903b39ecb174dbaf7f3192ab55d0a2e71572fc1
original_url: "https://arxiv.org/abs/2608.06347"
processed: 2026-08-07
language: zh-CN
---

# RP-OPSD：推理枢纽引导的在策略自蒸馏用于多语言推理迁移

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Xinye Wang, Junxiao Liu, Shujian Huang
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06347)

## 摘要

- 多语言推理迁移对将 LLM 推理能力扩展到高资源语言之外至关重要；在策略自蒸馏（OPSD）及其变体成为有前景范式，在学生生成 rollout 上提供稠密 token 级监督，但其目标未显式优先跨语言迁移最关键的推理信号。
- 刻画目标语言推理由表面文本生成与推理枢纽（推进或重定向推理过程、塑造后续推断的决策）组成；聚焦在这些枢纽周围集中特权蒸馏。
- 提出 RP-OPSD（推理枢纽引导在策略自蒸馏）：用匹配教师视图（带与不带英文参考解）的分布位移作为操作代理，引导特权蒸馏与参考锚定。
- 17 种语言多难度数学推理基准实验显示方法优于强多语言推理基线与 OPSD 变体；分析揭示 RP-OPSD 将特权蒸馏集中在推理控制与问题条件状态更新 token，对主要支撑表面实现的 token 降权；代码公开。

## 正文

多语言推理迁移对将大语言模型（LLMs）的推理能力扩展到高资源语言之外至关重要。在策略自蒸馏（on-policy self-distillation, OPSD）及其变体已成为一个有前景的范式，在学生生成的 rollout 上提供稠密的 token 级监督，然而它们的目标并未显式优先考虑对跨语言迁移最关键的推理信号。研究刻画目标语言推理由表面文本的生成与推理枢纽（reasoning pivots）——推进或重定向推理过程并塑造后续推断的决策——共同组成。这促使将特权蒸馏集中在这些枢纽周围。研究因此提出 RP-OPSD（Reasoning-Pivot-guided On-Policy Self-Distillation），使用匹配教师视图（带与不带英文参考解）之间的分布位移作为操作代理，来引导特权蒸馏与参考锚定。覆盖 17 种语言与多个难度级别的数学推理基准实验表明，该方法优于强多语言推理基线与 OPSD 变体。进一步分析揭示，RP-OPSD 将特权蒸馏集中在推理控制与问题条件状态更新的 token 上，同时降低对主要支撑表面实现的 token 的权重。代码见 https://github.com/NJUNLP/RP-OPSD。

## 关键词

多语言推理、自蒸馏、推理枢纽、在策略、迁移
