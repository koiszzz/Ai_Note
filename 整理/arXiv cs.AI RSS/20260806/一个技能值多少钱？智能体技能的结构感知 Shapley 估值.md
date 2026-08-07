---
published: 2026-08-06
title: 一个技能值多少钱？智能体技能的结构感知 Shapley 估值
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/What Is a Skill Worth- Structure-Aware Shapley Valuation of Agent Skills.md
source_note: "[[信息源/arXiv cs.AI RSS/What Is a Skill Worth- Structure-Aware Shapley Valuation of Agent Skills]]"
source_sha256: fbe5a7bd84ce12c6ab436d39b056f6915a46c6d7360ee8d8be2f74af2018a361
original_url: https://arxiv.org/abs/2608.04562
processed: 2026-08-07
language: zh-CN
---

# 一个技能值多少钱？智能体技能的结构感知 Shapley 估值

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04562)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/What Is a Skill Worth- Structure-Aware Shapley Valuation of Agent Skills|查看原始文件]]

## 摘要

- 智能体技能日益通过自动化反馈回路进行优化，产生内部价值不明的长结构化产物；技能估值研究的是：在固定智能体与留出任务分布下，将功劳分配给固定技能的内部单元（如规则、示例、脚本和启发式）
- 技能估值不同于数据或提示片段估值，因为技能单元是结构化的：它们可能依赖其他单元、属于文档层级、触发智能体行为并消耗有限的提示上下文
- 提出 SkillSV，一种结构感知的 Shapley 式技能估值框架：将技能编译为单元、依赖与层级，只评估有效的反事实技能；采用配对删除与长度中性填充将内容价值与上下文成本分离，并用 rollout 预算化估计器应对有噪声的智能体评估
- 在四个智能体基准上评估了 SkillSV 的忠实度、可行动性与可解释性：它能恢复单元交互、保持聚合技能增益，并指导安全剪枝与压缩

## 正文

智能体技能正日益通过自动化反馈回路进行优化，产生其内部价值尚不明确的、冗长的结构化产物。我们研究技能估值（skill valuation）：在固定智能体和留出（held-out）任务分布下，将功劳分配给固定技能的内部单元，例如规则、示例、脚本和启发式方法。

技能估值不同于数据估值或提示片段估值，因为技能单元是结构化的：它们可能依赖其他单元、从属于某个文档层级、触发智能体行为，并且消耗有限的提示上下文。我们提出 SkillSV，一个结构感知的 Shapley 式技能估值框架。SkillSV 将技能编译为单元、依赖关系和层级结构，从而只评估有效的反事实技能。它使用配对删除（paired deletion）和长度中性填充（length-neutral padding）来分离内容价值与上下文成本，并通过 rollout 预算化的估计器对带噪声的智能体评估进行估计。

在四个智能体基准上，我们评估了 SkillSV 的忠实度、可行动性和可解释性：它能够恢复单元间的交互，保持聚合的技能增益，并指导安全的剪枝与压缩。

## 关键词

#智能体技能 #Shapley估值 #可解释性 #价值分配
