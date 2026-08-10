---
published: 2026-08-07
title: "模拟器锚定的工业因果推理 LLM：工具使用、结构化注入与工厂可移植检索用于废水处理决策支持"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Simulator-Grounded Large Language Models for Industrial Causal Reasoning- Tool-Use, Structured Injec.md"
source_note: "[[信息源/arXiv cs.CL RSS/Simulator-Grounded Large Language Models for Industrial Causal Reasoning- Tool-Use, Structured Injec]]"
source_sha256: 3b3f3380b324635487de25010b95e663d88a4dbedacfba3fe4853e995e01cd0e
original_url: "https://arxiv.org/abs/2608.05151"
processed: 2026-08-07
language: zh-CN
---

# 模拟器锚定的工业因果推理 LLM：工具使用、结构化注入与工厂可移植检索用于废水处理决策支持

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Gary Simethy, Daniel Ortiz Arroyo, Petar Durdevic
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05151)

## 摘要

- 废水运营商提出"为何 N2O 上升？"或"削减曝气 20% 会发生什么？"等因果问题，需基于工厂变量如何交互、效应传播多快回答，而非通用预训练文本。
- 比较三种具体方式将冻结 Qwen2.5-32B-Instruct 锚定于架构可解释废水模拟器（CCSS-IX）：实时模拟器 oracle（方法 1）、结构化参数注入（方法 2）与解耦召回-推理（DRR）检索器（方法 3）。
- 198 题因果基准上三者达 99.5%、79%、75.8%，构成高于最强检索增强基线（48%）的部署阶梯；DRR 检索器 110M 参数、每工厂约 17 秒训练；跨工厂迁移到生物不同工厂后仍达 88%，而方法 2 静态表不能迁移。
- 60 题反事实基准上仅方法 3 处理干预后问题：较方法 2 +16.3 个百分点（配对 95% CI [+7.1, +26.4]），时间尺度与运行机制类别 100%；AI2 推理挑战（ARC）配 OpenBookQA 事实语料上，同一选择性检索机制达 79%（无约束 Llama-3.1-8B 76%、全注入 74%），+3 个百分点域外复制反驳废水特定结果；提供工业因果问答首次单模拟器比较：实时工具使用、静态参数注入与学习数值参数检索。

## 正文

废水运营商需要的是锚定于其工厂变量如何交互以及效应传播多快的答案，而非通用预训练文本，当他们提出"为何 N2O 上升？"或"如果我削减 20% 曝气会发生什么？"等因果问题时。研究比较三种具体方式，将冻结的 Qwen2.5-32B-Instruct 模型锚定在一个架构可解释的废水模拟器（CCSS-IX）中：一个实时模拟器 oracle（方法 1）、结构化参数注入（方法 2）与一个解耦召回-推理（Decoupled Recall-Reasoning, DRR）检索器（方法 3）。在一个 198 题的因果基准上，三者分别达到 99.5%、79% 与 75.8%，构成了高于最强检索增强基线（48%）的部署阶梯。DRR 检索器有 1.1 亿参数，每个工厂约 17 秒即可训练；在跨工厂迁移到一个生物学上不同的工厂后，它仍达到 88%，而方法 2 的静态表无法迁移。在一个 60 题的反事实基准上，只有方法 3 处理关于干预后会发生什么的查询：相对方法 2 提高 16.3 个百分点（配对 95% CI [+7.1, +26.4] 个百分点），在时间尺度与运行机制类别上达到 100%。在 AI2 推理挑战（ARC）与一个 OpenBookQA 事实语料上，相同的选择性检索机制达到 79%，而无约束的 Llama-3.1-8B 为 76%、全注入为 74%，这是一个 +3 个百分点的域外复制，反驳了结果仅特定于废水处理的可能。研究提供了工业因果问答中实时工具使用、静态参数注入与学习数值参数检索的首次单模拟器比较。

## 关键词

因果推理、模拟器、LLM、检索、废水处理
