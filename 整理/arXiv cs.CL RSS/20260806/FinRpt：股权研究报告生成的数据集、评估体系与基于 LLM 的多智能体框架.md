---
published: 2026-08-06
title: FinRpt：股权研究报告生成的数据集、评估体系与基于 LLM 的多智能体框架
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/FinRpt- Dataset, Evaluation System and LLM-based Multi-agent Framework for Equity Research Report Ge.md
source_note: "[[信息源/arXiv cs.CL RSS/FinRpt- Dataset, Evaluation System and LLM-based Multi-agent Framework for Equity Research Report Ge]]"
source_sha256: b415d3b49a7be2dd87c615172b3df7c30840ce1a5cbc9b81fccd1f94d6f99517
original_url: https://arxiv.org/abs/2511.07322
processed: 2026-08-07
language: zh-CN
---

# FinRpt：股权研究报告生成的数据集、评估体系与基于 LLM 的多智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.07322)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/FinRpt- Dataset, Evaluation System and LLM-based Multi-agent Framework for Equity Research Report Ge|查看原始文件]]

## 摘要

- 首次正式定义股权研究报告（ERR）生成任务，并发布开源的 FinRpt 评估基准以解决数据稀缺与评估指标缺失问题。
- 数据集构建流水线整合 7 类金融数据并自动产出高质量 ERR 数据集；评估体系包含 11 项指标。
- 提出面向该任务的多智能体框架 FinRpt-Gen，基于监督微调与强化学习训练 LLM 智能体，实验结果验证了数据质量、指标有效性与框架的强性能。

## 正文

本文编号：arXiv:2511.07322v3（公告类型：replace），以下为摘要全文翻译。

虽然 LLM 在股票预测和问答等金融任务上取得了巨大成功，但它们在完全自动化股权研究报告生成方面的应用仍是未开垦的领域。在本文中，我们首次定义了股权研究报告（Equity Research Report, ERR）生成任务。为解决数据稀缺和评估指标缺失的问题，我们提出了一个用于 ERR 生成的开源评估基准——FinRpt。我们构建了一个数据集构建流水线（Dataset Construction Pipeline），整合 7 类金融数据类型并自动生成高质量的 ERR 数据集，可用于模型训练和评估。我们还引入了一个包含 11 项指标的全面评估体系来评估生成的 ERR。此外，我们提出了一个专门针对该任务的多智能体框架，名为 FinRpt-Gen，并使用监督微调（Supervised Fine-Tuning）和强化学习（Reinforcement Learning）在提出的数据集上训练了若干基于 LLM 的智能体。实验结果表明了基准 FinRpt 的数据质量和指标有效性，以及 FinRpt-Gen 的强大性能，展示了它们在推动 ERR 生成领域创新方面的潜力。所有代码和数据集均已公开。

## 关键词

#FinRpt #股权研究报告 #多智能体 #LLM #金融NLP
