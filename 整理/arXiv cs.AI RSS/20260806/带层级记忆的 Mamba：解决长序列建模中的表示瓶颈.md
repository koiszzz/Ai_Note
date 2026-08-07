---
published: 20260806
title: "带层级记忆的 Mamba：解决长序列建模中的表示瓶颈"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Mamba with Hierarchical Memory- Solving Representation Bottleneck in Long Sequence Modeling.md"
source_note: "[[信息源/arXiv cs.AI RSS/Mamba with Hierarchical Memory- Solving Representation Bottleneck in Long Sequence Modeling]]"
source_sha256: 7149ef94a50ae6d8bb741eb8e7770acbc30a6dcdf2e280c2e62d7fc164c336f5
original_url: "https://arxiv.org/abs/2608.02347"
processed: 2026-08-06
language: zh-CN

---

# 带层级记忆的 Mamba：解决长序列建模中的表示瓶颈

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Qinwen Wang, Jieping Luo, Aoxiang Qin, Ruoyu Zhao, Jianxiong Tang, Wei Zhang, Zhichao Lu, Luziwei Leng
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02347)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Mamba with Hierarchical Memory- Solving Representation Bottleneck in Long Sequence Modeling|查看原始文件]]

## 摘要

- 递归线性注意力模型（RLA）如 Mamba 提供 Transformer 的高效线性时间序列建模替代方案，但其固定容量递归状态限制长序列建模；受层级人类记忆启发，本文提出层级记忆 Mamba（HMM）解决此局限。
- 基于预训练 Mamba 骨干，HMM 集成轻量工作记忆，从骨干隐藏状态嵌入的快速感觉记忆提取慢速段落级语义（PLS），再将 PLS 压缩为持久长期记忆用于任务相关检索。
- 语义信息的层级处理克服 RLA 的表示瓶颈，并通过参数学习赋予 HMM 跨任务泛化（其他长上下文增强 Mamba 变体未观察到的）；Passkey Retrieval 和 LongBench-E 评估显示，HMM 相对强 Mamba 模型改进检索成功率 34.3-37.1%、推理准确率 1.6-14.2%，仅增加 2% 额外参数和最小训练开销。

## 正文

递归线性注意力模型（RLA）如 Mamba 提供 Transformer 的高效线性时间序列建模替代方案，然而其固定容量递归状态限制长序列建模。受层级人类记忆启发，我们提出层级记忆 Mamba（Hierarchical Memory Mamba，HMM）解决此局限。基于预训练 Mamba 骨干，HMM 集成轻量工作记忆，从骨干隐藏状态嵌入的快速感觉记忆提取慢速段落级语义（paragraph-level semantics，PLS）。PLS 随后压缩为持久长期记忆，用于任务相关检索。语义信息的层级处理克服 RLA 的表示瓶颈，并通过参数学习赋予 HMM 跨任务泛化，这是其他长上下文增强 Mamba 变体未观察到的。Passkey Retrieval 和 LongBench-E 任务评估表明，HMM 相对强 Mamba 模型改进检索成功率 34.3-37.1%、推理准确率 1.6-14.2%，仅增加 2% 额外参数且训练开销最小。

## 关键词

#Mamba #层级记忆 #长序列 #状态空间模型 #arXiv