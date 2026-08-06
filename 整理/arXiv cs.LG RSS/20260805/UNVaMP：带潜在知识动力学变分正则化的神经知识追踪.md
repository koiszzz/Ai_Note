---
published: 2026-08-05
title: "UNVaMP：带潜在知识动力学变分正则化的神经知识追踪"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/UNVaMP- Neural Knowledge Tracing with Variational Regularization of Latent Knowledge Dynamics.md"
source_note: "[[信息源/arXiv cs.LG RSS/UNVaMP- Neural Knowledge Tracing with Variational Regularization of Latent Knowledge Dynamics.]]"
source_sha256: 5e5423d62a94250fc2e419b9fab61d9e361221cdd7cffd643637124ee4bc0848
original_url: "https://arxiv.org/abs/2608.03811"
processed: 2026-08-05
language: zh-CN
---

# UNVaMP：带潜在知识动力学变分正则化的神经知识追踪

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Carson J. Cook、Ahmed J. Zerouali、Anthony Schmidt、Reginald Ziedzor、Paul Lin、Luke G. Eglington
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03811)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/UNVaMP- Neural Knowledge Tracing with Variational Regularization of Latent Knowledge Dynamics.|查看原始文件]]

## 摘要

- 引入统一神经变分能力测量（UNVaMP）架构，一个知识追踪方法：整合观测的学生—项目交互与内部记忆，产生学生知识的演化潜在表示；这些表示支持对未来响应的准确预测，同时显式控制估计学习轨迹的光滑性。
- UNVaMP 可配置为纯神经模型或混合模型（经潜在空间上的可解释测量函数预测响应）。
- 纯神经配置（UNVaMP-MLP）在四个数据集的三个上取得比较模型中最强预测性能；混合配置（UNVaMP-MIRT，用 1PL MIRT 测量函数）仅略逊于 UNVaMP-MLP，表明可解释性的预测代价是适度的。
- 除预测准确率外 UNVaMP 提供：估计学生潜在变量时控制波动性的原则机制、学生知识状态估计上的不确定性量化、以及支持异构学生—项目交互特征的灵活输入规范。
- 混合 UNVaMP-MIRT 配置产生可解释的时点学生知识状态估计；实验数据集表明辅助输入诱导 UNVaMP-MIRT 预测行为的结构化变化，与对响应正确性之外底层结构的敏感性一致。
- 仿真研究表明 UNVaMP 在受控测量条件下产生行为良好的知识状态估计；总体表明 UNVaMP 既对真实教育系统有用，又能从学生—项目交互中恢复底层结构。

## 正文

论文编号：arXiv:2608.03811v1（更新类型：new）。以下为摘要全文翻译。

我们引入统一神经变分能力测量（Unified Neural Variational Measurement of Proficiency，UNVaMP）架构，一个知识追踪方法，把观测的学生—项目交互与内部记忆整合，以产生学生知识的演化潜在表示。这些表示支持对未来响应的准确预测，同时允许显式控制估计学习轨迹的光滑性。UNVaMP 可以配置为纯神经模型，或经潜在空间上可解释测量函数预测响应的混合模型。我们表明，纯神经配置（UNVaMP-MLP）在四个数据集的三个上取得比较模型中最强的预测性能。同时，混合配置（UNVaMP-MIRT，使用 1PL MIRT 测量函数）只略微落后于 UNVaMP-MLP，表明可解释性的预测代价是适度的。超越预测准确率，UNVaMP 提供以下能力：估计学生潜在变量时控制波动性的原则机制、学生知识状态估计的不确定性量化，以及支持异构学生—项目交互特征的灵活输入规范。此外，混合 UNVaMP-MIRT 配置生成可解释的时点学生知识状态估计。使用一个实验数据集，我们表明辅助输入诱导 UNVaMP-MIRT 预测行为的结构化变化，与对响应正确性之外底层结构的敏感性一致。此外，通过一项仿真研究，我们表明 UNVaMP 在受控测量条件下产生行为良好的知识状态估计。总的来说，这些结果表明 UNVaMP 既对真实世界教育系统有用，也能从学生—项目交互中恢复底层结构。

## 关键词

#知识追踪 #变分方法 #教育数据挖掘 #IRT #学生建模
