---
published: 20260806
title: "MOON3.0：电商产品理解的推理感知多模态表示学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MOON3.0- Reasoning-aware Multimodal Representation Learning for E-commerce Product Understanding.md"
source_note: "[[信息源/arXiv cs.AI RSS/MOON3.0- Reasoning-aware Multimodal Representation Learning for E-commerce Product Understanding]]"
source_sha256: 1951b368e384bc38cf9e23b076651dd70b85efedf15f0d3b6aa86f90b26b18e0
original_url: "https://arxiv.org/abs/2604.00513"
processed: 2026-08-06
language: zh-CN

---

# MOON3.0：电商产品理解的推理感知多模态表示学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Junxian Wu, Chenghan Fu, Zhanheng Nie, Daoze Zhang, Bowen Wan, Wanxian Guan, Chuan Yu, Jian Xu, Bo Zheng
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.00513)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MOON3.0- Reasoning-aware Multimodal Representation Learning for E-commerce Product Understanding|查看原始文件]]

## 摘要

- 随着电商快速增长，探索通用表示而非任务特定表示日益受关注；近期多模态大语言模型（MLLM）在产品理解中推动显著进展，但通常用作特征提取器，将产品信息隐式编码为全局嵌入，限制捕捉细粒度属性的能力。
- 本文论证利用 MLLM 推理能力显式建模细粒度产品属性具显著潜力，但面临关键挑战：长上下文推理倾向稀释模型对原始输入显著信息的注意力；监督微调（SFT）主要鼓励僵硬模仿；细粒度细节在前向传播中渐进衰减。
- 提出 MOON3.0，首个推理感知基于 MLLM 的产品表示学习模型：多头模态融合模块自适应集成原始信号；联合对比和强化学习框架自主探索更有效推理策略；细粒度残差增强模块在网络中渐进保留局部细节；发布大规模多模态电商基准 MBE3.0，实验显示跨各种下游任务最先进零样本性能。

## 正文

随着电商快速增长，探索通用表示而非任务特定表示日益受关注。虽然近期多模态大语言模型（MLLM）在产品理解中推动显著进展，它们通常用作特征提取器，将产品信息隐式编码为全局嵌入，从而限制捕捉细粒度属性的能力。因此，我们论证利用 MLLM 推理能力显式建模细粒度产品属性具显著潜力。然而，实现此目标因几个关键挑战仍非平凡：（i）长上下文推理倾向稀释模型对原始输入显著信息的注意力；（ii）监督微调（SFT）主要鼓励僵硬模仿，限制有效推理策略探索；（iii）细粒度细节在前向传播中渐进衰减。为解决这些问题，我们提出 MOON3.0，首个推理感知基于 MLLM 的产品表示学习模型。我们的方法（1）采用多头模态融合模块自适应集成原始信号；（2）融入联合对比和强化学习框架自主探索更有效推理策略；（3）引入细粒度残差增强模块在网络中渐进保留局部细节。此外，我们发布大规模多模态电商基准 MBE3.0。实验上，我们的模型在我们的基准和公开数据集的各种下游任务上展示最先进零样本性能。

## 关键词

#电商 #多模态表示 #推理感知 #产品理解 #arXiv