---
published: 2026-08-07
title: "调用还是不调用：评估与优化 LLM 工具调用的框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/To Call or Not to Call- A Framework to Assess and Optimize LLM Tool Calling.md"
source_note: "[[信息源/arXiv cs.AI RSS/To Call or Not to Call- A Framework to Assess and Optimize LLM Tool Calling]]"
source_sha256: 5df46187b9af0269382543d12723492dae858e321fdfe23836333d4e64aac04e
original_url: "https://arxiv.org/abs/2605.00737"
processed: 2026-08-07
language: zh-CN
---

# 调用还是不调用：评估与优化 LLM 工具调用的框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Qinyuan Wu, Soumi Das, Mahsa Amani, Arijit Nag, Seungeon Lee, Krishna P. Gummadi, Abhilasha Ravichander, Muhammad Bilal Zafar
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.00737)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/To Call or Not to Call- A Framework to Assess and Optimize LLM Tool Calling|查看原始文件]]

## 摘要

- 智能体 AI 架构用外部工具增强 LLM，解锁强能力但可能产生大量成本；且工具使用不总是有益：冗余或低效用调用甚至可损害任务性能——有效工具使用因此取决于核心 LLM 决策：执行任务时是否调用工具。
- 引入受决策理论启发的原则框架，沿三个关键因素理解工具使用决策：必要性、效用与可负担性——分析结合两个互补镜头：推断最优工具调用真实需求与效用的规范视角，与从观察行为推断模型自感需求与效用的描述视角。
- 评估六个开源模型与一个专有 OpenAI 模型，跨原生与定制 harness、两个工具与六个任务：模型感知需求与效用相对真实值错位，尤其预算约束下——该错位产生昂贵过度使用与性能降级调用。
- 从模型隐藏状态训练轻量需求潜在估计器（LNE）改进工具决策：LNE 通常比模型自报告更准确预测真实需求，并跨模型规模与工具类型改进预算化工具分配；代码与数据集公开。

## 正文

智能体 AI 架构用外部工具增强 LLM，解锁强大能力但可能产生大量成本。此外，工具使用并不总是有益的：冗余或低效用的调用甚至可能损害任务性能。因此，有效的工具使用取决于一个核心 LLM 决策：执行任务时是否调用工具。我们引入一个受决策理论启发的原则框架，沿三个关键因素理解工具使用决策：必要性（necessity）、效用（utility）与可负担性（affordability）。我们的分析结合两个互补镜头：一个规范视角（normative perspective），推断最优工具调用的真实需求与效用；一个描述视角（descriptive perspective），从模型观察行为推断其自感需求与效用。我们评估六个开源模型与一个专有 OpenAI 模型，跨原生与定制 harness、两个工具与六个任务。模型的感知需求与效用相对其真实值错位，尤其在预算约束下。这种错位产生昂贵的过度使用与性能降级的调用。为改进工具决策，我们从模型隐藏状态训练轻量的需求潜在估计器（latent estimators of need，LNEs）。LNEs 通常比模型自报告更准确地预测真实需求，并改进跨模型规模与工具类型的预算化工具分配。代码与数据集见 https://github.com/QinyuanWu0710/ToCall_or_NotToCall。

## 关键词

#工具调用 #LLM智能体 #决策理论 #成本优化
