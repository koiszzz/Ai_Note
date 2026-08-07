---
published: 20260806
title: "指南即 oracle：眼科电话分诊智能体的零标注训练"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Guideline-as-Oracle- Zero-Annotation Training of an Ophthalmic Telephone Triage Agent.md"
source_note: "[[信息源/arXiv cs.AI RSS/Guideline-as-Oracle- Zero-Annotation Training of an Ophthalmic Telephone Triage Agent]]"
source_sha256: f60f664974724a7a3ce048661d67577456eceadf5559487a7201b962e2840c4d
original_url: "https://arxiv.org/abs/2608.04772"
processed: 2026-08-06
language: zh-CN

---

# 指南即 oracle：眼科电话分诊智能体的零标注训练

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Chenyu Wang, Yi Liu, Baoqing Li, Min Tu, Diping Song
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04772)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Guideline-as-Oracle- Zero-Annotation Training of an Ophthalmic Telephone Triage Agent|查看原始文件]]

## 摘要

- 为多轮医疗智能体扩展监督困难，因为专家对话标注昂贵且临床对话受隐私限制；本文引入指南即 oracle（GAO），将美国眼科学会指南编译为 70 行操作规则表，并将其作为 3,000 个训练对话的唯一实例级监督来源，保留人类标注用于评估。
- 将规则转换为对话本身是设计问题，编目八种构建策略（含引用行层级分配、单事实边界对、仅元数据修复和标签修复），刻画每种证据状态：标注机制、无效、混杂或仅作为包评估。
- 在此语料上微调 9B 骨干产生 GAO-Triage，与 201 例操作参考的一致性从 61.7% 提升到 74.1%（精确 McNemar p=0.0046），新兴案例召回从 9.5% 提升到 69.0%；测试的七个通用系统中无一在两个指标上支配 GAO-Triage，且推理时无需前沿模型。

## 正文

为多轮医疗智能体扩展监督困难，因为专家对话标注昂贵且临床对话受隐私限制。我们引入指南即 oracle（Guideline-as-Oracle，GAO），将美国眼科学会指南编译为 70 行操作规则表，并将其用作 3,000 个训练对话的唯一实例级监督来源，保留人类标注用于评估。由于将规则转换为对话本身就是设计问题，我们编目八种构建策略，包括引用行层级分配、单事实边界对、仅元数据修复和标签修复，并刻画每种策略的证据状态：标注机制、无效、混杂或仅作为包评估。在此语料上微调 9B 骨干产生 GAO-Triage，将与 201 例操作参考的一致性从 61.7% 提升到 74.1%（精确 McNemar p=0.0046），新兴案例召回从 9.5% 提升到 69.0%；收益在第二个种子和患者模拟器上持续。我们测试的七个通用系统中无一在两个指标上支配 GAO-Triage，且 GAO-Triage 推理时无需前沿模型。置换标签-对话分配将模型坍缩为常数例程预测器，表明信号来自指南推导的分配而非对话表面形式。标签修复与后期训练安全退化的消失重合。

## 关键词

#医疗智能体 #电话分诊 #零标注 #指南驱动 #arXiv