---
published: 2026-08-07
title: "啄木鸟蒸馏：弱模型诊断强模型的推理 bug"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Woodpecker Distillation- Weak Models Diagnose Reasoning Bugs in Strong Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/Woodpecker Distillation- Weak Models Diagnose Reasoning Bugs in Strong Models]]"
source_sha256: 56b011dea61e792ebba2a59e81bd140245613b7cc1cc1a0f1aa639a333a6478b
original_url: "https://arxiv.org/abs/2608.05168"
processed: 2026-08-07
language: zh-CN
---

# 啄木鸟蒸馏：弱模型诊断强模型的推理 bug

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dayu Wang, Jiaye Yang, Weikang Li, Jiahui Liang, Yang Li, Deguo Xia, Jizhou Huang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05168)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Woodpecker Distillation- Weak Models Diagnose Reasoning Bugs in Strong Models|查看原始文件]]

## 摘要

- 大语言模型尽管具备解决能力，常在某些推理任务上失败；论证许多此类失败源于中间步骤的局部推理 bug，而非整体无能——展示这些 bug 常可修复：在相同强模型推理前缀后插入由弱探针模型生成的短补丁，可重定向轨迹走向正确解。
- 但直接对弱补丁或修复轨迹微调不能可靠内化该纠正效应，提示有用信号不在干预文本本身，而在其如何重塑模型未来推理分布。
- 提出啄木鸟蒸馏：弱到强训练框架，从对比局部干预学习——对比相同前缀处成功与不成功弱模型补丁，从其诱导的未来 token 预测构建纠正教师分布，并将该信号蒸馏进强模型。
- 数学推理基准实验表明啄木鸟蒸馏一致改进强模型性能，优于直接模仿基线。

## 正文

大语言模型常常在推理任务上失败，尽管具备解决它们的能力。我们认为，许多此类失败源于中间步骤中的局部推理 bug，而非整体无能。我们展示，这些 bug 常常是可修复的：在相同的强模型推理前缀之后插入一个由弱探针模型生成的短补丁，可以将轨迹重定向到正确的解。然而，这种纠正效应不能通过直接对弱补丁或修复轨迹微调而可靠内化，表明有用的信号不在于干预文本本身，而在于它如何重塑模型未来的推理分布。因此我们提出啄木鸟蒸馏（Woodpecker Distillation），一个弱到强训练框架，从对比性的局部干预中学习。我们的方法对比相同前缀处成功与不成功的弱模型补丁，从它们诱导的未来 token 预测中构建一个纠正教师分布，并将这一信号蒸馏进强模型。在数学推理基准上的实验表明，啄木鸟蒸馏一致改进强模型的性能，并优于直接模仿基线。

## 关键词

#弱到强 #推理修复 #蒸馏 #局部干预
