---
published: 2026-08-06
title: 教会多模态大语言模型说不：基于拒答校准GRPO的广义指代表达理解
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/Teaching MLLMs to Say No- Generalized Referring Expression Comprehension via Refusal Calibrated GRPO.md
source_note: "[[信息源/arXiv cs.AI RSS/Teaching MLLMs to Say No- Generalized Referring Expression Comprehension via Refusal Calibrated GRPO]]"
source_sha256: 9193e456341e8c6aebcaf4fd4cf7016dc792955bcb34bbd6e378a88545154f02
original_url: https://arxiv.org/abs/2608.04698
processed: 2026-08-07
language: zh-CN
---

# 教会多模态大语言模型说不：基于拒答校准GRPO的广义指代表达理解

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04698)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Teaching MLLMs to Say No- Generalized Referring Expression Comprehension via Refusal Calibrated GRPO|查看原始文件]]

## 摘要

- 针对广义指代表达理解（GREC）任务：目标存在时定位物体，不存在时拒绝输出
- 提出拒答校准的组相对策略优化（RC-GRPO），在强化拒答能力的同时保持定位性能
- 通过强制负样本上的 "None" 输出以进行有效优势估计，并对正样本施加过拒答惩罚，实现准确性与可靠性的平衡
- 两阶段推理强化进一步巩固因果理解与可解释性；在三个 GREC 基准上取得优越的定位精度与强拒答能力

## 正文

我们着手解决广义指代表达理解（GREC）这一具有挑战性且尚未充分探索的任务。该任务要求模型在文本描述所指对象存在时（正样本）定位该对象，而在对象不存在时（负样本）拒绝输出。尽管多模态大语言模型（MLLM）在定位已有对象方面表现出色，但由于训练中缺乏负样本，它们往往无法拒绝不存在的对象，从而产生幻觉化的边界框。

现有的后训练方法，如监督微调（SFT）和强化学习（RL），能够增强拒答行为，但通常会降低正样本上的定位精度，削弱模型的核心能力。为解决这一问题，我们提出了拒答校准的组相对策略优化（RC-GRPO），一种经过校准的强化学习策略，在增强 MLLM 拒答能力的同时保持定位性能。该方法在 rollout 中对负样本强制执行 "None" 输出，以获得有效的优势估计，并对正样本施加惩罚以防止过度拒答，从而在准确性与可靠性之间实现平衡的权衡。第二阶段的推理强化进一步巩固了因果理解与可解释性。

在三个 GREC 基准上的实验表明，RC-GRPO 在保持强大拒答能力的同时取得了优越的定位精度。

## 关键词

#arXiv #多模态大语言模型 #强化学习 #指代表达理解 #GRPO
