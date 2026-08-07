---
published: 20260806
title: "EviGraph：证据引导的自主研究智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/EviGraph- Evidence-Guided Autonomous Research Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/EviGraph- Evidence-Guided Autonomous Research Agents]]"
source_sha256: 01a0a4e0c7c38f387a3aeede79bce86a907861f6c7ef57663555e5a707770f4e
original_url: "https://arxiv.org/abs/2608.04738"
processed: 2026-08-06
language: zh-CN

---

# EviGraph：证据引导的自主研究智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhenjiang Ren, Ruiji Li, Xujing Zhang, Ziliang Pang, Shuo Ren, Jiajun Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04738)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/EviGraph- Evidence-Guided Autonomous Research Agents|查看原始文件]]

## 摘要

- 自主研究智能体可生成假设、执行实验和起草手稿，但其输出常包含无支持声明以及研究问题、实验、结果和结论之间的不一致；本文认为此问题部分源于架构：现有系统将研究组织为顺序流水线，但不显式维护或验证跨阶段的演变声明-证据结构。
- 本文引入 EviGraph，一个将研究过程表示为包含 Problem、Gap、Hypothesis、Experiment、Finding 和 Claim 节点的类型化证据图的自主研究框架：图作为智能体的操作状态而非事后记录。
- EviGraph 检查证据链的缺失依赖、语义错位和结果-声明不一致，定位最早弱节点并重新生成受影响的下游子图；图检查点防止不成功修复破坏先前验证证据；ARC-Bench-ML 和 NanoResearch-20 实验显示 EviGraph 在整体研究性能上优于端到端研究智能体基线，Claim Support Rate 比最强基线提高 40.19%，实验数据一致性达 87.73%。

## 正文

自主研究智能体可生成假设、执行实验和起草手稿，然而其输出常包含无支持声明以及研究问题、实验、结果和结论之间的不一致。我们认为此问题部分源于架构：现有系统将研究组织为顺序流水线，但不显式维护或验证跨阶段的演变声明-证据结构。在本文中，我们引入 EviGraph，一个将研究过程表示为包含 Problem、Gap、Hypothesis、Experiment、Finding 和 Claim 节点的类型化证据图的自主研究框架。该图作为智能体的操作状态而非事后记录。EviGraph 检查证据链的缺失依赖、语义错位和结果-声明不一致，定位最早弱节点，并重新生成其受影响的 downstream 子图。图检查点防止不成功修复破坏先前验证的证据。仅在每个保留声明都锚定在验证证据链后才生成手稿。在 ARC-Bench-ML 和 NanoResearch-20 上的实验表明，EviGraph 在整体研究性能上优于所比较的端到端研究智能体基线，将 Claim Support Rate 比最强基线提高 40.19%，并实现 87.73% 的实验数据一致性。这些结果证明显式证据状态维护对可靠自主研究的价值。

## 关键词

#自主研究 #证据图 #研究智能体 #声明验证 #arXiv