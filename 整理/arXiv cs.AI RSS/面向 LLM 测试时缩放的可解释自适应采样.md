---
title: "面向 LLM 测试时缩放的可解释自适应采样"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Interpretable Adaptive Sampling for LLM Test-Time Scaling.md"
source_note: "[[信息源/arXiv cs.AI RSS/Interpretable Adaptive Sampling for LLM Test-Time Scaling]]"
source_sha256: 62bc1c9c0b8c8f2e1d65aff05e072bc3d4eeac760b4ac0297554bb3f69046980
original_url: "https://arxiv.org/abs/2608.03961"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 面向 LLM 测试时缩放的可解释自适应采样

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mobina Kashaniyan、Ali Jannesari
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03961)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Interpretable Adaptive Sampling for LLM Test-Time Scaling|查看原始文件]]

## 摘要

- 提出带轻量模糊控制器的自适应测试时缩放：把可解释信号（估计提示复杂度与模型置信度）映射到逐查询采样预算——更简单或更自信的提示分配更少样本，更难或更不确定的提示分配更多样本，使推理期计算可检查而非固定或黑箱。
- 在公平对齐协议下评估（匹配解码设置与受控答案选择），对比 best-of-N、计算感知缩放与基于自置信的基线，覆盖问答与数学推理任务。
- 跨模型与数据集，自适应模糊控制优于多个标准基线，在减少平均样本数的同时接近选择器匹配的全预算控制。

## 正文

论文编号：arXiv:2608.03961v1（更新类型：new）。以下为摘要全文翻译。

测试时缩放通过生成并聚合多个候选答案来改善 LLM 推理，然而许多流水线使用固定的逐查询预算，在简单与困难提示上花费相同的计算量。这些固定预算也难以检查，因为它们不解释给定提示为何获得特定数量的样本。我们提出带轻量模糊控制器的自适应测试时缩放：把可解释信号（包括估计的提示复杂度与模型置信度）映射到逐查询采样预算。控制器为更简单或更自信的提示分配更少样本，为更难或更不确定的提示分配更多样本，使推理期计算可检查，而非固定或黑箱。我们在公平对齐协议下评估（匹配解码设置与受控答案选择），并在问答与数学推理任务上对比 best-of-N、计算感知缩放与基于自置信的基线。跨模型与数据集，自适应模糊控制优于多个标准基线，在减少平均样本数的同时保持接近选择器匹配的全预算控制。这些发现表明，可解释的自适应采样是提高大语言模型测试时推理效率的实用方向。

## 关键词

#测试时缩放 #自适应采样 #LLM推理 #模糊控制
