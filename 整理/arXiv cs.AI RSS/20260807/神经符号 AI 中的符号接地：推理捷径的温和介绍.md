---
published: 2026-08-07
title: "神经符号 AI 中的符号接地：推理捷径的温和介绍"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Symbol Grounding in Neuro-Symbolic AI- A Gentle Introduction to Reasoning Shortcuts.md"
source_note: "[[信息源/arXiv cs.AI RSS/Symbol Grounding in Neuro-Symbolic AI- A Gentle Introduction to Reasoning Shortcuts]]"
source_sha256: d80c40b41de6c46471c2837eeab97096ff2330e1a6c83c30a8077d4e2594f422
original_url: "https://arxiv.org/abs/2510.14538"
processed: 2026-08-07
language: zh-CN
---

# 神经符号 AI 中的符号接地：推理捷径的温和介绍

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Emanuele Marconato, Samuele Bortolotti, Emile van Krieken, Paolo Morettin, Elena Umili, Antonio Vergari, Efthymia Tsamoura, Andrea Passerini, Stefano Teso
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2510.14538)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Symbol Grounding in Neuro-Symbolic AI- A Gentle Introduction to Reasoning Shortcuts|查看原始文件]]

## 摘要

- 神经符号（NeSy）AI 旨在开发预测符合先验知识编码（如安全或结构约束）的深度神经网络，是可靠与可信 AI 最有前景的途径之一。
- NeSy AI 核心思想是结合神经与符号步骤：神经网络通常负责将低层输入映射到高层符号概念，符号推理推断与提取概念与先验知识兼容的预测；尽管有前景，近期证明当概念不直接受监督时，NeSy 模型可受推理捷径（RSs）影响——它们可错误接地概念却实现高标签准确率。
- RS 可损害模型解释的可解释性、分布外场景性能与可靠性，同时在无概念监督（通常不可用）时难以检测与预防；RS 文献分散，使研究者与从业者难以理解与处理该挑战。
- 综述以直观术语讨论 RS 的原因与后果，评述该现象的现有理论刻画，详述处理 RS 的方法（缓解与意识策略）并映射其益处与局限；以可消化的形式重述高级材料，为处理 RS 提供统一视角以降低入门门槛，希望贡献于可靠 NeSy 与可信 AI 模型的发展。

## 正文

神经符号（Neuro-symbolic，NeSy）AI 旨在开发预测符合先验知识编码（例如安全或结构约束）的深度神经网络。因此，它代表可靠与可信 AI 最有前景的途径之一。NeSy AI 的核心思想是结合神经与符号步骤：神经网络通常负责将低层输入映射到高层符号概念，而符号推理推断与提取的概念及先验知识兼容的预测。尽管有前景，近期显示——只要概念不直接受监督——NeSy 模型可能受推理捷径（Reasoning Shortcuts，RSs）影响。也就是说，它们可以通过错误接地概念实现高标签准确率。RS 会损害模型解释的可解释性、分布外场景的性能，因而损害可靠性。同时，除非概念监督可用（通常不是这种情况），RS 难以检测与预防。然而，关于 RS 的文献是分散的，使研究人员与从业者难以理解并处理这一挑战性问题。本综述通过提供对 RS 的温和介绍、以直观术语讨论其原因与后果来解决这一问题。它还评述并阐明该现象的现有理论刻画。最后，它详述处理 RS 的方法，包括缓解与意识策略，并映射其益处与局限。通过以可消化的形式重述高级材料，本综述旨在提供处理 RS 的统一视角，以降低入门门槛。最终，我们希望本综述有助于可靠 NeSy 与可信 AI 模型的发展。

## 关键词

#神经符号AI #推理捷径 #符号接地 #可解释性
