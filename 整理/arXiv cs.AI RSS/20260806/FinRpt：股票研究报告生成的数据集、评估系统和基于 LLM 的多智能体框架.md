---
published: 20260806
title: "FinRpt：股票研究报告生成的数据集、评估系统和基于 LLM 的多智能体框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FinRpt- Dataset, Evaluation System and LLM-based Multi-agent Framework for Equity Research Report Ge.md"
source_note: "[[信息源/arXiv cs.AI RSS/FinRpt- Dataset, Evaluation System and LLM-based Multi-agent Framework for Equity Research Report Ge]]"
source_sha256: 9e5703cb7b14fa56e5b38319ed0e80cc5556d5173ddfece360c8da2c71b3fff0
original_url: "https://arxiv.org/abs/2511.07322"
processed: 2026-08-06
language: zh-CN

---

# FinRpt：股票研究报告生成的数据集、评估系统和基于 LLM 的多智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Song Jin, Shuqi Li, Shukun Zhang, Rui Yan
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.07322)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FinRpt- Dataset, Evaluation System and LLM-based Multi-agent Framework for Equity Research Report Ge|查看原始文件]]

## 摘要

- 虽然 LLM 在股票预测和问答等金融任务上取得巨大成功，其在完全自动化股票研究报告（ERR）生成中的应用仍是未知领域；本文首次表述 ERR 生成任务。
- 为解决数据稀缺和评估指标缺失，呈现 ERR 生成的开放评估基准 FinRpt：构建集成 7 种金融数据类型并自动产生高质量 ERR 数据集的数据集构建流水线，可用于模型训练和评估；引入含 11 个指标的综合评估系统。
- 提出专为处理此任务定制的多智能体框架 FinRpt-Gen，用监督微调和强化学习在所提数据集上训练多个基于 LLM 的智能体；实验结果表明 FinRpt 基准的数据质量和指标有效性以及 FinRpt-Gen 的强劲性能。

## 正文

虽然 LLM 在股票预测和问答等金融任务上取得巨大成功，其在完全自动化股票研究报告（ERR）生成中的应用仍是未知领域。在本文中，我们首次表述股票研究报告（ERR）生成任务。为解决数据稀缺和评估指标缺失，我们呈现 ERR 生成的开放评估基准 FinRpt。我们构建一个集成 7 种金融数据类型并自动产生高质量 ERR 数据集的数据集构建流水线，可用于模型训练和评估。我们还引入一个包含 11 个指标的综合评估系统，评估生成的 ERR。此外，我们提出一个专为处理此任务定制的多智能体框架，名为 FinRpt-Gen，并使用监督微调和强化学习在所提数据集上训练多个基于 LLM 的智能体。实验结果表明 FinRpt 基准的数据质量和指标有效性，以及 FinRpt-Gen 的强劲性能，展示其在推动 ERR 生成领域创新方面的潜力。所有代码和数据集公开可用。

## 关键词

#股票研究报告 #生成 #多智能体 #金融LLM #arXiv