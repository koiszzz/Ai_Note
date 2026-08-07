---
published: 2026-08-06
title: ContextMaster：通过固定预算稀疏上下文路由进行交互式多镜头视频创作
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/ContextMaster- Interactive Multi-Shot Video Creation via Fixed-Budget Sparse Context Routing.md
source_note: "[[信息源/arXiv cs.CV RSS/ContextMaster- Interactive Multi-Shot Video Creation via Fixed-Budget Sparse Context Routing]]"
source_sha256: 86160406d78e762616a7efad243e10a266c469665407414483f30ddada528be0
original_url: https://arxiv.org/abs/2608.04956
processed: 2026-08-07
language: zh-CN
---

# ContextMaster：通过固定预算稀疏上下文路由进行交互式多镜头视频创作

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04956)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/ContextMaster- Interactive Multi-Shot Video Creation via Fixed-Budget Sparse Context Routing|查看原始文件]]

## 摘要

- 将交互式多镜头视频创作（IMVC）形式化，提出统一模型 ContextMaster，采用角色感知的上下文表示，支持文生视频、参考条件生成和编辑
- 结合可复用的干净上下文状态与固定预算稀疏上下文路由，并使用 ConstraintSink 保持任务约束可见
- 提出两阶段特权上下文蒸馏框架：通过一致性蒸馏从稠密教师迁移完整上下文行为，再用分布匹配精化部署 rollout
- 在三个原始任务上优于专门基线，用户研究验证了灵活组合的工作流，单 GPU 上达到 16 FPS

## 正文

近期视频模型越来越支持在单一模型内进行生成、参考条件生成和编辑，但通常将其暴露为针对固定输入的独立操作。实际创作过程跨越多个镜头展开，需要同一个模型能够从文本生成、遵循参考或编辑源素材，同时保持共享的历史记录。我们将这一场景形式化为交互式多镜头视频创作（interactive multi-shot video creation，IMVC），并引入 ContextMaster，一个为这些操作提供角色感知上下文表示的统一模型。交互式模型必须能够访问不断扩展的历史记录，同时不能让每个去噪步骤的上下文读取成本随之增长。ContextMaster 将可复用的干净上下文状态与固定预算稀疏上下文路由相结合，并使用 ConstraintSink 使任务约束保持可见。为应对稀疏上下文访问和少步去噪推理的双重挑战，我们提出两阶段特权上下文蒸馏框架：首先通过一致性蒸馏从稠密教师模型迁移完整上下文行为，然后通过分布匹配精化部署 rollout。在三个原始任务上的实验表明，与专门的基线相比，该方法在任务完成度和跨镜头一致性方面均有提升。用户研究进一步验证了灵活组合的工作流，而模型在单块 GPU 上达到 16 FPS。

## 关键词

#视频生成 #多镜头创作 #稀疏注意力 #上下文路由 #蒸馏
