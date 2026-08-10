---
published: 2026-08-07
title: "BioAgent Bench：面向生物信息学的 AI 智能体评估套件"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/BioAgent Bench- An AI Agent Evaluation Suite for Bioinformatics.md"
source_note: "[[信息源/arXiv cs.AI RSS/BioAgent Bench- An AI Agent Evaluation Suite for Bioinformatics]]"
source_sha256: 331847d6563202c82f9fc5e8f765f9a92d16e75d8262604962ebe4bb107a23df
original_url: "https://arxiv.org/abs/2601.21800"
processed: 2026-08-07
language: zh-CN
---

# BioAgent Bench：面向生物信息学的 AI 智能体评估套件

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dionizije Fa, Marko Culjak, Bruno Pandza, Mateo Cupic
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.21800)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/BioAgent Bench- An AI Agent Evaluation Suite for Bioinformatics|查看原始文件]]

## 摘要

- 引入 BioAgent Bench：用于衡量 AI 智能体在常见生物信息学任务中性能与稳健性的评估套件，由人工策划的端到端任务（如 RNA-seq、变异检测、宏基因组学）配套任务特定提示与具体输出工件以支持自动评估。
- 在多个智能体 harness 上评估前沿闭源与开源权重模型，并使用基于 LLM 的评分器对流水线进度与结果有效性评分。
- 发现基于前沿 LLM 的智能体无需精心定制的脚手架即可完成多步生物信息学流水线，常能可靠产出请求的最终工件；但稳健性测试揭示受控扰动（损坏输入、诱饵文件、提示膨胀）下的失败模式，表明正确的高层流水线构建不保证可靠的步骤级推理。
- 通过发布代码与配套资源，主要目标是加速开发经济高效且可靠的本地智能体，使其能处理常涉及敏感患者数据或未发表知识产权的复杂生物信息学工作流。

## 正文

我们引入 BioAgent Bench，一个旨在衡量 AI 智能体在常见生物信息学任务中性能与稳健性的评估套件。该套件由人工策划的端到端任务（例如 RNA-seq、变异检测、宏基因组学）组成，配套任务特定提示与具体输出工件以支持自动评估。我们在多个智能体 harness 上评估前沿闭源与开源权重模型，并使用基于 LLM 的评分器对流水线进度与结果有效性评分。我们发现基于前沿 LLM 的智能体无需精心定制的脚手架即可完成多步生物信息学流水线，且常常能可靠地产出请求的最终工件。然而，稳健性测试揭示了受控扰动（损坏输入、诱饵文件与提示膨胀）下的失败模式，表明正确的高层流水线构建并不能保证可靠的步骤级推理。通过发布构成我们套件的代码与配套资源，我们的主要目标是加速开发经济高效且可靠的本地智能体，使其能够处理通常涉及敏感患者数据或未发表知识产权的复杂生物信息学工作流。

## 关键词

#生物信息学 #AI智能体 #评估套件 #稳健性
