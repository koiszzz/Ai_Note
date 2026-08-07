---
published: 2026-08-06
title: 视觉思维链用连续视觉令牌让VLM看得更清想得更好
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Chain-of-Visual-Thought- Teaching VLMs to See and Think Better with Continuous Visual Tokens.md
source_note: "[[信息源/arXiv cs.LG RSS/Chain-of-Visual-Thought- Teaching VLMs to See and Think Better with Continuous Visual Tokens]]"
source_sha256: bf2ae28377ff4abb84d69c09c0cf70f04b6bd8a71f9a9362964ab5ab52bb30c3
original_url: https://arxiv.org/abs/2511.19418
processed: 2026-08-07
language: zh-CN
---

# 视觉思维链用连续视觉令牌让VLM看得更清想得更好

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.19418)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Chain-of-Visual-Thought- Teaching VLMs to See and Think Better with Continuous Visual Tokens|查看原始文件]]

## 摘要

- 提出视觉思维链（COVT）：VLM 在约 20 个令牌的预算内，从轻量级视觉专家提炼知识，通过连续视觉令牌推理。
- 训练时自回归预测视觉令牌以重建深度、分割、边缘、DINO 特征等密集监督信号，推理时直接在令牌空间推理并可选解码。
- 在 CV-Bench、MMVP、RealWorldQA 等十余个基准上，集成到 Qwen2.5-VL 和 LLaVA 等 VLM 中持续提升性能 3% 到 16%。

## 正文

视觉语言模型（VLM）擅长在语言空间中推理，但在需要密集视觉感知的感知理解上表现挣扎，例如空间推理和几何感知。这一局限源于当前 VLM 缺少跨空间维度捕获密集视觉信息的机制。我们引入了视觉思维链（Chain-of-Visual-Thought，COVT），一个使 VLM 不仅用词推理、还能通过连续视觉令牌——编码丰富感知线索的紧凑潜在表示——进行推理的框架。在约 20 个令牌的小预算内，COVT 从轻量级视觉专家中提炼知识，捕获 2D 外观、3D 几何、空间布局和边缘结构等互补属性。在训练期间，带有 COVT 的 VLM 自回归地预测这些视觉令牌以重建密集监督信号（如深度、分割、边缘和 DINO 特征）。在推理时，模型直接在连续视觉令牌空间中推理，在保留效率的同时可选地解码密集预测以增强可解释性。在包括 CV-Bench、MMVP、RealWorldQA、MMStar、WorldMedQA 和 HRBench 在内的十余个多样化感知基准上的评估表明，将 COVT 集成到 Qwen2.5-VL 和 LLaVA 等强大 VLM 中，持续将性能提升 3% 到 16%，并表明紧凑的连续视觉思维能带来更精确、更扎实且更可解释的多模态智能。

## 关键词

#视觉语言模型 #视觉思维链 #连续视觉令牌 #COVT #感知理解
