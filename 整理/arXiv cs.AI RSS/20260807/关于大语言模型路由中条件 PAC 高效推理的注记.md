---
published: 2026-08-07
title: "关于大语言模型路由中条件 PAC 高效推理的注记"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A note on conditional PAC-efficient reasoning in large language model routing.md"
source_note: "[[信息源/arXiv cs.AI RSS/A note on conditional PAC-efficient reasoning in large language model routing]]"
source_sha256: d898de36176fb53159ff3d8a50f930fc42239bac4d9674768361d0845ea2ea12
original_url: "https://arxiv.org/abs/2512.03057"
processed: 2026-08-07
language: zh-CN
---

# 关于大语言模型路由中条件 PAC 高效推理的注记

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hao Zeng, Bingyi Jing
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.03057)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A note on conditional PAC-efficient reasoning in large language model routing|查看原始文件]]

## 摘要

- 论文研究模型路由中的无分布风险控制问题，动机来自大语言模型推理。
- 在"大概正确"（PAC）保证下形式化逐点条件效率，并证明该要求迫使路由器几乎不可能实现：在快速模型超过目标损失的几乎所有输入上，算法必须以至少"1 减去指定误差水平"的概率路由给专家。
- 为此提出基于预设条件集族的有条件表述与显式路由器：该路由器实现有限样本条件有效性，并在分离条件与边距条件下接近最优专家使用率。
- 核心洞见：条件化的层级决定了无分布可靠性能否与计算节省共存——逐点控制在统计上过强，而结构化集合层面的控制仍然可行。

## 正文

我们研究模型路由中的无分布风险控制，动机来自大语言模型推理。我们在"大概正确"（probably approximately correct，PAC）保证下形式化逐点条件效率，并证明该要求迫使路由器几乎不可能实现：在快速模型超过目标损失的几乎所有输入上，算法必须以至少"1 减去指定误差水平"的概率路由给专家。因此，我们引入一种基于预设条件集族的有条件表述，并给出一个显式路由器。所提出的路由器实现有限样本条件有效性，并在分离条件与边距条件下接近最优专家使用率。主要洞见在于：条件化的层级决定了无分布可靠性能否与计算节省共存——逐点控制过于严格，而结构化集合层面的控制仍然可行。

## 关键词

#模型路由 #PAC学习 #风险控制 #LLM推理
