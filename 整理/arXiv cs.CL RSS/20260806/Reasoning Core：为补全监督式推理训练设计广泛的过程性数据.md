---
published: 2026-08-06
title: Reasoning Core：为补全监督式推理训练设计广泛的过程性数据
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Reasoning Core- Designing Broad Procedural Data for Completion-Supervised Reasoning Training.md
source_note: "[[信息源/arXiv cs.CL RSS/Reasoning Core- Designing Broad Procedural Data for Completion-Supervised Reasoning Training]]"
source_sha256: 94c020b99748dfc54ced828178b9ac2f19ca5657305ed585245f40eee284d599
original_url: https://arxiv.org/abs/2608.05148
processed: 2026-08-07
language: zh-CN
---

# Reasoning Core：为补全监督式推理训练设计广泛的过程性数据

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05148)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Reasoning Core- Designing Broad Procedural Data for Completion-Supervised Reasoning Training|查看原始文件]]

## 摘要

- Reasoning Core 包含 50 个过程性生成器，覆盖数学、逻辑、规划、状态追踪、形式语言、结构化数据、游戏、因果关系与代码，并配有语义评分器、难度控制与任务评估器
- 在主要 3B 对比中，于 DROP、LogiQA 和 ARC-Challenge 上取得最高平均分，超过无过程性数据基线与全部三个备选数据集
- 审计揭示生成、渲染、目标与计分间的细微不匹配，过程性生成本身并不保证正确性

## 正文

过程性生成器可以在规模上产生有用的可验证推理问题，但作为补全监督式微调数据受到的关注较少。我们提出了 Reasoning Core，一个包含 50 个生成器的集合，覆盖数学、逻辑、规划、状态追踪、形式语言、结构化数据、游戏、因果关系和代码，并配有语义评分器、难度控制和任务评估器。

在匹配的补全监督协议下，我们在四种基础模型设置和多种训练时长下，将 Reasoning Core 与 Procedural Warmup、Reasoning Gym 和 SynLogic 进行了比较。在主要的 3B 比较中，Reasoning Core 在 DROP、LogiQA 和 ARC-Challenge 上取得了最高平均分，超过了不使用过程性数据的基线以及全部三个备选过程性数据集。

任务级分析表明，仅语义有效性并不能保证训练效用，凸显了紧凑目标和校准难度作为重要的设计因素。我们进行了结合模型辅助审查、人工裁决和回归测试的审计。审计贯穿 Reasoning Core 开发并应用于其他数据集，揭示了生成、渲染、目标和计分之间的细微不匹配，提醒我们过程性生成本身并不能保证正确性。

该库、生成的数据集和审计材料均可公开获取。

## 关键词

#ReasoningCore #过程性数据 #推理训练 #合成数据 #数据审计
