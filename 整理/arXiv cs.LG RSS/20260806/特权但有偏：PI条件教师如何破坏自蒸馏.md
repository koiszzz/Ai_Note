---
published: 2026-08-06
title: 特权但有偏：PI条件教师如何破坏自蒸馏
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Privileged, but Biased- How PI-Conditioned Teachers Break Self-Distillation.md
source_note: "[[信息源/arXiv cs.LG RSS/Privileged, but Biased- How PI-Conditioned Teachers Break Self-Distillation]]"
source_sha256: f73f2b05037d42902ed87eb213b1d58c014752f542742c5e593f59005d85dfb5
original_url: https://arxiv.org/abs/2608.04794
processed: 2026-08-07
language: zh-CN
---

# 特权但有偏：PI条件教师如何破坏自蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04794)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Privileged, but Biased- How PI-Conditioned Teachers Break Self-Distillation|查看原始文件]]

## 摘要

- 自蒸馏（SD）作为唯一目标、没有奖励项时，在困难任务上并不奏效：损失持续下降而验证准确率不升反降。
- 通过单一因果链解释失败根源：PI 偏差将教师目标拉向特定参考答案轨迹，使学生目标几乎对生成正确性视而不见，惩罚了推理所需的探索与犹豫。
- 结果产生更平坦、更不果断且推理能力无提升的学生，SD 优化的是与任务成功脱钩的信号。

## 正文

自蒸馏（Self-distillation, SD）已成为一种比带可验证奖励的强化学习更省算力的替代方案：以关于答案的特权信息（privileged information, PI，例如参考答案）为条件的自教师，向从未见过该信息的学生提供密集的逐词元监督。然而，已报道的提升几乎全部来自狭窄、低难度的设置，留下一个基本问题：作为唯一目标、没有奖励项时，SD 能教会任何东西吗？我们在简单设置中复现了 SDPO 报道的提升，然后将完全相同的设置应用于困难任务，发现它并不奏效。在问答、数学、编程、多轮智能体工具使用中，跨越推理模式、模型规模和 PI 形式，并在 SDPO 与 OPSD 两种配方下，逐词元损失稳步下降，而验证准确率却没有提升且通常还会退化。

我们通过从损失到其所产生模型的单一因果链来解释这一失败。这条链始于 PI 偏差：在见过某一个特定参考答案后，教师的逐词元目标被拉向那条轨迹，而非一般意义上的正确性，我们用 PI 偏差分数（PI Bias Score）量化了这一效应。由于处处训练去匹配这一目标，学生的目标几乎对一次生成是否正确变得视而不见，它分配损失的对象大多是低信息词元（如停用词、标点、不确定性标记），而非决定答案的那些词元；在正确的生成内部，探索性词元承担了最高的散度，因此它惩罚了推理所需的犹豫。结果是更平坦、更不果断的学生，推理能力并没有更好：作为唯一目标，SD 优化的是与任务成功脱钩的信号。

## 关键词

#自蒸馏 #特权信息 #推理 #强化学习 #大语言模型
