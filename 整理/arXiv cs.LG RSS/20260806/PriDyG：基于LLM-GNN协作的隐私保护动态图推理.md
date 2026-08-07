---
published: 2026-08-06
title: PriDyG：基于LLM-GNN协作的隐私保护动态图推理
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/PriDyG- Privacy-preserving Dynamic Graph Inference with LLM-GNN Collaboration.md
source_note: "[[信息源/arXiv cs.LG RSS/PriDyG- Privacy-preserving Dynamic Graph Inference with LLM-GNN Collaboration]]"
source_sha256: f3c2bfb52c7a4c2e3f08b136cd5b7cbaa68098a8fec4863e659d7dfee921e07d
original_url: https://arxiv.org/abs/2608.04255
processed: 2026-08-07
language: zh-CN
---

# PriDyG：基于LLM-GNN协作的隐私保护动态图推理

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04255)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/PriDyG- Privacy-preserving Dynamic Graph Inference with LLM-GNN Collaboration|查看原始文件]]

## 摘要

- 形式化定义边级差分隐私动态图推理（EDG）问题，并针对动态图中隐私损失随更新累积的问题提出 PriDyG 框架。
- PriDyG 通过增量式私有多跳聚合与并行组合，使总隐私成本等于单次静态发布，与更新次数无关。
- 实验表明，在相同隐私预算下 PriDyG 一致优于几何衰减基线，且将累积隐私成本降低多达三个数量级。

## 正文

对关系数据进行图推理可能暴露敏感边信息，在动态图中这一风险更加严重：反复的模型更新导致隐私损失累积。我们形式化定义了边级差分隐私动态图推理（Edge-level Differentially Private Dynamic Graph Inference, EDG），并提出 PriDyG——一个将基于 GNN 的结构学习与基于 LLM 的语义推理相结合的私有推理框架。PriDyG 引入了增量式私有多跳聚合，缓冲新到达的边，并对每条边恰好处理一次。通过并行组合，总隐私成本等于单次静态发布的隐私成本，与模型更新的次数或时间表无关。与几何衰减的预算分配相比，增量聚合避免了噪声的指数增长，同时保留了精确的一跳信号和至少一半的二跳信息传递。PriDyG 进一步用仅从节点文本推导的 LLM 预测来补充私有化的 GNN 输出，不产生额外的边级隐私成本。

在四个节点分类和链接预测基准上的实验表明，在相同的隐私预算下，PriDyG 一致优于几何衰减基线，且与朴素逐次更新重训练的效用相当，同时将累积隐私成本降低多达三个数量级。

## 关键词

#差分隐私 #动态图 #图神经网络 #大语言模型 #隐私保护
