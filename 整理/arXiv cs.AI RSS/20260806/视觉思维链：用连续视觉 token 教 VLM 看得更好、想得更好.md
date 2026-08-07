---
published: 20260806
title: "视觉思维链：用连续视觉 token 教 VLM 看得更好、想得更好"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Chain-of-Visual-Thought- Teaching VLMs to See and Think Better with Continuous Visual Tokens.md"
source_note: "[[信息源/arXiv cs.AI RSS/Chain-of-Visual-Thought- Teaching VLMs to See and Think Better with Continuous Visual Tokens]]"
source_sha256: 66083996319284ecfe6aaea018c722344965f7a5e95da6400d4af399ac8966e2
original_url: "https://arxiv.org/abs/2511.19418"
processed: 2026-08-06
language: zh-CN

---

# 视觉思维链：用连续视觉 token 教 VLM 看得更好、想得更好

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yiming Qin, Bomin Wei, Jiaxin Ge, Konstantinos Kallidromitis, Stephanie Fu, Trevor Darrell, XuDong Wang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.19418)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Chain-of-Visual-Thought- Teaching VLMs to See and Think Better with Continuous Visual Tokens|查看原始文件]]

## 摘要

- 视觉-语言模型（VLM）擅长在语言空间推理，但在需要密集视觉感知的感知理解（如空间推理和几何意识）上挣扎；此局限源于当前 VLM 捕捉跨空间维度密集视觉信息的机制有限。
- 本文引入视觉思维链（COVT），使 VLM 不仅用文字还用连续视觉 token（编码丰富感知线索的紧凑潜在表示）推理：在约 20 token 的小预算内，COVT 从轻量视觉专家蒸馏知识，捕捉 2D 外观、3D 几何、空间布局和边缘结构等互补属性。
- 训练时 VLM 自回归预测这些视觉 token 重建密集监督信号，推理时直接在连续视觉 token 空间推理；跨 CV-Bench、MMVP、RealWorldQA 等十多个多样感知基准，将 COVT 集成到 Qwen2.5-VL 和 LLaVA 等强 VLM 持续改进性能 3%-16%。

## 正文

视觉-语言模型（VLM）擅长在语言空间推理，但在需要密集视觉感知的感知理解（如空间推理和几何意识）上挣扎。此局限源于当前 VLM 捕捉跨空间维度密集视觉信息的机制有限。我们引入视觉思维链（Chain-of-Visual-Thought，COVT），一个使 VLM 不仅用文字还用连续视觉 token 推理的框架——连续视觉 token 是编码丰富感知线索的紧凑潜在表示。在约 20 token 的小预算内，COVT 从轻量视觉专家蒸馏知识，捕捉 2D 外观、3D 几何、空间布局和边缘结构等互补属性。训练期间，带 COVT 的 VLM 自回归预测这些视觉 token 以重建密集监督信号（如深度、分割、边缘和 DINO 特征）。推理时，模型直接在连续视觉 token 空间推理，保持效率同时可选解码密集预测用于可解释性。在包括 CV-Bench、MMVP、RealWorldQA、MMStar、WorldMedQA 和 HRBench 的十多个多样感知基准上评估，将 COVT 集成到 Qwen2.5-VL 和 LLaVA 等强 VLM 中持续改进性能 3%-16%，并证明紧凑连续视觉思维实现更精确、接地和可解释的多模态智能。

## 关键词

#视觉语言模型 #连续视觉token #感知推理 #视觉思维 #arXiv