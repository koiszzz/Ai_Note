---
published: 2026-08-07
title: "神经符号 AI 中的符号锚定：推理捷径温和入门"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Symbol Grounding in Neuro-Symbolic AI- A Gentle Introduction to Reasoning Shortcuts.md"
source_note: "[[信息源/arXiv cs.LG RSS/Symbol Grounding in Neuro-Symbolic AI- A Gentle Introduction to Reasoning Shortcuts]]"
source_sha256: 15215185a885aecf5e86f6c2e4a8ae7da8fc401f79d7689efb163c5f6024856f
original_url: "https://arxiv.org/abs/2510.14538"
processed: 2026-08-07
language: zh-CN
---

# 神经符号 AI 中的符号锚定：推理捷径温和入门

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Emanuele Marconato, Samuele Bortolotti, Emile van Krieken, Paolo Morettin, Elena Umili, Antonio Vergari, Efthymia Tsamoura, Andrea Passerini, Stefano Teso
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2510.14538)

## 摘要

- 神经符号（NeSy）AI 旨在开发预测符合先验知识（如安全或结构约束）编码的深度神经网络，代表可靠可信 AI 最有前景的途径之一。
- 核心思想结合神经与符号步骤：神经网络通常负责将低层输入映射到高层符号概念，符号推理则推断与提取概念及先验知识一致的预测。
- 最近证明：概念未直接监督时，NeSy 模型可受推理捷径（RSs）影响——可通过错误锚定概念实现高标签准确率；RS 损害模型解释的可解释性、分布外性能与可靠性；且无概念监督时难以检测与预防。
- RS 文献分散；该综述以直觉术语讨论 RS 成因与后果、回顾现象现有理论刻画、详述处理 RS 的方法（缓解与意识策略）并映射其收益与局限；旨在以可消化形式重组高级材料，提供 RS 的统一视角以降低解决门槛。

## 正文

神经符号（neuro-symbolic, NeSy）AI 旨在开发预测符合先验知识（例如安全或结构约束）编码的深度神经网络。因此，它代表实现可靠与可信 AI 最有前景的途径之一。NeSy AI 的核心思想是结合神经与符号步骤：神经网络通常负责将低层输入映射到高层符号概念，而符号推理推断与提取概念及先验知识一致的预测。尽管有前景，最近证明——当概念未直接监督时——NeSy 模型可能受推理捷径（Reasoning Shortcuts, RSs）影响。也就是说，它们可以通过错误地锚定概念实现高标签准确率。RS 会损害模型解释的可解释性、分布外场景的性能，因而损害可靠性。同时，除非概念监督可用（通常并非如此），RS 难以检测与预防。然而，关于 RS 的文献分散，使研究人员与实践者难以理解并解决这一挑战性问题。该综述通过提供 RS 的温和入门、以直觉术语讨论其成因与后果来解决该问题；它还回顾并阐明该现象的现有理论刻画；最后详述处理 RS 的方法（包括缓解与意识策略），并映射其收益与局限。通过以可消化的形式重组高级材料，该综述旨在提供 RS 的统一视角，降低解决它们的入门门槛。最终希望该综述有助于开发可靠的 NeSy 与可信的 AI 模型。

## 关键词

神经符号 AI、推理捷径、符号锚定、可解释性、先验知识
