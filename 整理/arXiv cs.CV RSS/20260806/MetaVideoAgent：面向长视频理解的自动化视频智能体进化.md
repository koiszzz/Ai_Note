---
published: 2026-08-06
title: MetaVideoAgent：面向长视频理解的自动化视频智能体进化
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MetaVideoAgent- Automated Video-Agent Evolution for Long-Form Video Understanding.md
source_note: "[[信息源/arXiv cs.CV RSS/MetaVideoAgent- Automated Video-Agent Evolution for Long-Form Video Understanding]]"
source_sha256: 6ac922a5c253b00368e8c6d2bcd82f2dd0919753245fa5d9d6c337e3a297157e
original_url: https://arxiv.org/abs/2608.04587
processed: 2026-08-07
language: zh-CN
---

# MetaVideoAgent：面向长视频理解的自动化视频智能体进化

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04587)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MetaVideoAgent- Automated Video-Agent Evolution for Long-Form Video Understanding|查看原始文件]]

## 摘要

- 提出 MetaVideoAgent：自动为目标视频分布进化视频智能体，通过稀疏采样帧刻画信息密度与证据需求，将局部失败压缩为可独立执行的最小验证任务，并借助基于证据的金路径将失败归因到负责任模块。
- 引入 VA-EvoBench（八个视频分布，独立进化与留出划分）；每个分布仅四次进化迭代即可改进所有初始智能体，宏平均准确率从 38.44% 提升到 51.47%。
- 进化后智能体超越先前最强固定设计视频智能体 6.39 个百分点，且每个问题使用最少的 token 与视频帧；平均进化成本为每分布 354 万 token。

## 正文

长视频理解要求定位稀疏的、与问题相关的证据，这些证据藏于长多模态视频中。真实世界的视频分布因模态特定的信息密度、内容结构和证据模式而异，导致固定的视频智能体设计要么产生冗余处理，要么在失配时失败。将自动化智能体进化从文本扩展到视频具有挑战性，因为完整的长时间视频执行使候选验证代价高昂，失败会在耦合的证据处理阶段间传播，而复杂的预处理、感知工具和定位策略使代码级更新难以可靠实现。

我们提出 MetaVideoAgent——一个为目标分布自动进化视频智能体的框架。它从稀疏采样的帧和相关查询中刻画信息密度与证据需求以指导初始设计，然后将局部化失败压缩为可独立执行的最小验证任务。它构建基于证据的金路径（Gold Paths），审计学生轨迹，跨样本聚合反复出现的失败，并将其归因到负责任的模块。模块化智能体表示将每次更新约束在主要责任模块及其必要依赖上。

我们还引入 VA-EvoBench，覆盖八个视频分布，并带有独立的进化与留出划分。每个分布仅四次进化迭代，MetaVideoAgent 便改进了每个初始智能体，将宏平均准确率从 38.44% 提升到 51.47%，每个分布的平均进化成本为 354 万 token。进化后的智能体以 6.39 个百分点优势超越先前最强的固定设计视频智能体，同时在被比较的视频智能体中每个问题使用最少的 token 和视频帧。我们将发布全部代码和数据以支持可复现研究。

## 关键词

#长视频理解 #智能体进化 #视频智能体 #自动优化
