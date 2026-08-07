---
published: 2026-08-06
title: 教会多模态大语言模型说"不"：基于拒答校准 GRPO 的泛化指代表达理解
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Teaching MLLMs to Say No- Generalized Referring Expression Comprehension via Refusal Calibrated GRPO.md
source_note: "[[信息源/arXiv cs.CV RSS/Teaching MLLMs to Say No- Generalized Referring Expression Comprehension via Refusal Calibrated GRPO]]"
source_sha256: 64452c50180014b35689407ab9319b3f7bc3c9ab8ffe226fc28c412d16bbee4d
original_url: https://arxiv.org/abs/2608.04698
processed: 2026-08-07
language: zh-CN
---

# 教会多模态大语言模型说"不"：基于拒答校准 GRPO 的泛化指代表达理解

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04698)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Teaching MLLMs to Say No- Generalized Referring Expression Comprehension via Refusal Calibrated GRPO|查看原始文件]]

## 摘要

- 提出 RC-GRPO（拒答校准的组相对策略优化），在强化拒答能力的同时保持定位性能，兼顾准确性与可靠性。
- 通过强制负样本 rollout 输出 "None" 获得有效优势估计，并对正样本过度拒答施加惩罚，实现平衡折中。
- 第二阶段推理强化进一步巩固因果理解与可解释性；在三个 GREC 基准上达到优越定位精度并保持强拒答能力。

## 正文

我们攻克了具有挑战性且尚未充分探索的泛化指代表达理解（GREC）任务，该任务要求模型在文本描述的对象存在时对其进行定位（正样本），并在对象不存在时拒绝输出（负样本）。尽管多模态大语言模型（MLLMs）擅长定位已存在的对象，但由于训练中缺少负样本，它们往往无法拒绝不存在的对象，从而产生幻觉边界框。现有的后训练方法（如监督微调（SFT）和强化学习（RL））增强了拒答行为，但通常会降低正样本上的定位精度，损害模型的核心能力。为解决这一问题，我们提出了拒答校准的组相对策略优化（RC-GRPO），一种校准后的 RL 策略，在保持定位性能的同时强化 MLLMs 的拒答能力。它在负样本的 rollout 中强制执行 "None" 输出以获得有效的优势估计，并对正样本上的过度拒答施加惩罚，从而在准确性与可靠性之间实现平衡折中。第二阶段的推理强化进一步巩固了因果理解与可解释性。在三个 GREC 基准上的实验表明，RC-GRPO 在保持强拒答能力的同时达到了优越的定位精度。

## 关键词

#指代表达理解 #多模态大语言模型 #GRPO #强化学习 #拒答校准
