---
published: 2026-08-07
title: "模拟器接地的工业因果推理 LLM：工具使用、结构化注入与污水处理厂可移植检索"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Simulator-Grounded Large Language Models for Industrial Causal Reasoning- Tool-Use, Structured Injec.md"
source_note: "[[信息源/arXiv cs.AI RSS/Simulator-Grounded Large Language Models for Industrial Causal Reasoning- Tool-Use, Structured Injec]]"
source_sha256: 615ec3ef658858b95b0904cc67ce1b52dffd54bdd0fcb1e887d3d2bd932cfe40
original_url: "https://arxiv.org/abs/2608.05151"
processed: 2026-08-07
language: zh-CN
---

# 模拟器接地的工业因果推理 LLM：工具使用、结构化注入与污水处理厂可移植检索

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Gary Simethy, Daniel Ortiz Arroyo, Petar Durdevic
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05151)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Simulator-Grounded Large Language Models for Industrial Causal Reasoning- Tool-Use, Structured Inj|查看原始文件]]

## 摘要

- 污水处理操作员在提出"为什么 N2O 上升？"或"若削减曝气 20% 会怎样？"等因果问题时，需要答案接地于其工厂变量如何交互与效应传播速度，而非通用预训练文本。
- 比较将冻结 Qwen2.5-32B-Instruct 模型接地于架构可解释污水处理模拟器（CCSS-IX）的三种具体方式：实时模拟器 oracle（方法 1）、结构化参数注入（方法 2）与解耦回忆-推理（DRR）检索器（方法 3）。
- 198 问因果基准上三者达 99.5%、79% 与 75.8%，形成最强检索增强基线（48%）之上的部署阶梯；DRR 检索器 1.1 亿参数，每厂训练约 17 秒；跨厂迁移到生物学不同工厂后仍达 88%，而方法 2 的静态表无法迁移。
- 60 问反事实基准上仅方法 3 处理干预后会发生什么的查询：相对方法 2 +16.3 个百分点（配对 95% CI [+7.1, +26.4] 个百分点），时标与运行工况类别 100%。
- AI2 推理挑战（ARC）配 OpenBookQA 事实语料上，相同选择性检索机制达 79%，对比无约束 Llama-3.1-8B 76% 与全注入 74%，域外 +3 个百分点复现，反对结果专属污水处理；提供工业因果问答中实时工具使用、静态参数注入与学习数值参数检索的首次单模拟器比较。

## 正文

污水处理操作员在问"为什么 N2O 上升？"或"如果我把曝气削减 20% 会怎样？"等因果问题时，需要答案接地于其工厂变量如何交互以及效应传播多快，而非通用预训练文本。我们比较将冻结的 Qwen2.5-32B-Instruct 模型接地于一个架构可解释的污水处理模拟器（CCSS-IX）的三种具体方式：实时模拟器 oracle（方法 1）、结构化参数注入（方法 2）与解耦回忆-推理（Decoupled Recall-Reasoning，DRR）检索器（方法 3）。在一个 198 问因果基准上，三者分别达到 99.5%、79% 与 75.8%，在最强检索增强基线（48%）之上形成一个部署阶梯。DRR 检索器有 1.1 亿参数，每个工厂约 17 秒训练；跨厂迁移到一个生物学上不同的工厂后仍达到 88%，而方法 2 的静态表无法迁移。在一个 60 问反事实基准上，只有方法 3 处理关于干预后会发生什么的查询：相对方法 2 提升 +16.3 个百分点，配对 95% CI [+7.1, +26.4] 个百分点，时标与运行工况类别 100%。在 AI2 推理挑战（ARC）配 OpenBookQA 事实语料上，相同的选择性检索机制达到 79%，对比无约束 Llama-3.1-8B 的 76% 与全注入的 74%，一个 +3 个百分点的域外复现，反对结果专属污水处理。我们提供工业因果问答中实时工具使用、静态参数注入与学习数值参数检索的首次单模拟器比较。

## 关键词

#因果推理 #模拟器接地 #污水处理 #检索
