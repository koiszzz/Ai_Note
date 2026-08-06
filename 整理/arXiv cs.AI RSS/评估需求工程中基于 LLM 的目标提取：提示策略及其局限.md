---
title: "评估需求工程中基于 LLM 的目标提取：提示策略及其局限"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Evaluating LLM-Based Goal Extraction in Requirements Engineering- Prompting Strategies and Their Lim.md"
source_note: "[[信息源/arXiv cs.AI RSS/Evaluating LLM-Based Goal Extraction in Requirements Engineering- Prompting Strategies and Their Lim]]"
source_sha256: e6b70aab99d1eaf5d40f326f90cd9df76997b9199f161d6cbd88c5970c2290cf
original_url: "https://arxiv.org/abs/2604.22207"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 评估需求工程中基于 LLM 的目标提取：提示策略及其局限

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Anna Arnaudo、Riccardo Coppola、Maurizio Morisio 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.22207)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Evaluating LLM-Based Goal Extraction in Requirements Engineering- Prompting Strategies and Their Lim|查看原始文件]]

## 摘要

- 提出自动化目标导向需求工程（GORE）流程的方法：通过三个阶段（角色识别、高层与低层目标提取）从软件文档提取功能目标，用带工程化提示的 LLM 链实现。
- 实验不同上下文学习变体并测量输入数据与上下文示例之间的相似性以研究其影响；生成-批评机制实现为两个 LLM 参与的反馈循环。
- 流水线在低层目标识别（最后阶段）取得 61% 准确率，表明该方法最适合作为加速人工提取的工具而非完全替代。
- 零样本反馈循环优于独立少样本；消融显示无反馈循环性能略降；反馈机制与少样本结合无优势，主要性能上限可能是施加于“批评者”LLM 的提示策略；未来将集成 RAG 与 CoT 提示。

## 正文

论文编号：arXiv:2604.22207v2（更新类型：replace-cross）。以下为摘要全文翻译。

由于许多需求工程（RE）工件具有文本性、重复性，大语言模型（LLM）已被证明有助于自动化其生成与处理。在本文中，我们讨论一种自动化目标导向需求工程（GORE）流程的可能方法：通过三个阶段——角色识别、高层与低层目标提取——从软件文档提取功能目标。为实现这些功能，我们提出一个由工程化提示驱动的 LLM 链。我们实验了上下文学习的不同变体，并测量输入数据与上下文示例之间的相似性，以更好地研究其影响。另一个关键要素是生成-批评机制，实现为两个 LLM 参与的反馈循环。虽然流水线在低层目标识别（最后阶段）取得 61% 的准确率，但结果表明该方法最适合作为加速人工提取的工具，而非完全替代。零样本反馈循环优于独立少样本；消融研究表明，没有反馈循环性能会略有下降。然而，我们报告称反馈机制与少样本的组合不带来任何优势，这可能表明主要性能上限在于施加于“批评者”LLM 的提示策略。除改进示例的数量与质量外，未来研究将集成检索增强生成（RAG）与思维链（CoT）提示以提高准确率。

## 关键词

#需求工程 #目标提取 #LLM #提示工程
