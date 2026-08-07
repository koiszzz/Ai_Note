---
published: 2026-08-06
title: 视觉思维链：用连续视觉令牌教会VLM更好地看与思考
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Chain-of-Visual-Thought- Teaching VLMs to See and Think Better with Continuous Visual Tokens.md
source_note: "[[信息源/arXiv cs.CV RSS/Chain-of-Visual-Thought- Teaching VLMs to See and Think Better with Continuous Visual Tokens|查看原始文件]]"
source_sha256: 63bd56fb0197ae403eab7f962e46f2b26537f800abd282a1fc165ac50c9aa171
original_url: https://arxiv.org/abs/2511.19418
processed: 2026-08-07
language: zh-CN
---

# 视觉思维链：用连续视觉令牌教会VLM更好地看与思考

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.19418)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Chain-of-Visual-Thought- Teaching VLMs to See and Think Better with Continuous Visual Tokens|查看原始文件]]

## 摘要

- 视觉语言模型（VLM）在语言空间推理上表现出色，但在需要密集视觉感知的理解（如空间推理与几何意识）上吃力，原因在于当前 VLM 缺少跨空间维度捕捉密集视觉信息的机制。
- 引入 Chain-of-Visual-Thought（COVT），使 VLM 不仅能以文字推理，还能通过连续视觉令牌——编码丰富感知线索的紧凑潜在表示——进行推理；在约 20 个令牌的小预算内，COVT 从轻量视觉专家蒸馏知识，捕捉 2D 外观、3D 几何、空间布局和边缘结构等互补属性。
- 训练时 VLM 自回归预测这些视觉令牌以重建密集监督信号（如深度、分割、边缘和 DINO 特征）；推理时直接在连续视觉令牌空间推理，保持效率并可选解码密集预测实现可解释性；在 CV-Bench、MMVP、RealWorldQA、MMStar、WorldMedQA、HRBench 等十余个多样化感知基准上，将 COVT 集成到 Qwen2.5-VL 与 LLaVA 等强 VLM 中持续带来 3% 至 16% 的性能提升。

## 正文

视觉语言模型（Vision-Language Models, VLMs）在语言空间中的推理表现出色，但在需要密集视觉感知的理解方面（例如空间推理和几何意识）却存在困难。这一局限源于当前 VLM 缺乏跨空间维度捕捉密集视觉信息的机制。本文引入 Chain-of-Visual-Thought（COVT），一个使 VLM 不仅能以文字推理，还能通过连续视觉令牌——编码丰富感知线索的紧凑潜在表示——进行推理的框架。在约 20 个令牌的小预算内，COVT 从轻量级视觉专家中蒸馏知识，捕捉 2D 外观、3D 几何、空间布局和边缘结构等互补属性。训练期间，带有 COVT 的 VLM 自回归地预测这些视觉令牌，以重建密集的监督信号（例如深度、分割、边缘和 DINO 特征）。推理时，模型直接在连续视觉令牌空间中推理，保持效率，同时可选地解码密集预测以实现可解释性。在包括 CV-Bench、MMVP、RealWorldQA、MMStar、WorldMedQA 和 HRBench 在内的十余个多样化感知基准上的评估表明，将 COVT 集成到 Qwen2.5-VL 和 LLaVA 等强 VLM 中，持续提升 3% 至 16% 的性能，并证明了紧凑的连续视觉思维能够实现更精确、更有依据、更可解释的多模态智能。

## 关键词

#视觉语言模型 #连续视觉令牌 #感知推理 #知识蒸馏 #空间推理 #多模态智能
