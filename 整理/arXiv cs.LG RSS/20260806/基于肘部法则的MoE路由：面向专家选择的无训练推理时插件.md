---
published: 2026-08-06
title: 基于肘部法则的MoE路由：面向专家选择的无训练推理时插件
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Elbow-Based MoE Routing- A Training-Free Inference Time Plugin for Expert Selection.md
source_note: "[[信息源/arXiv cs.LG RSS/Elbow-Based MoE Routing- A Training-Free Inference Time Plugin for Expert Selection]]"
source_sha256: e27fc32815821ba3dea93f396a500c6f8d39e4a0e45146aee9e392dbbd6af2c6
original_url: https://arxiv.org/abs/2608.04401
processed: 2026-08-07
language: zh-CN
---

# 基于肘部法则的MoE路由：面向专家选择的无训练推理时插件

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04401)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Elbow-Based MoE Routing- A Training-Free Inference Time Plugin for Expert Selection|查看原始文件]]

## 摘要

- 提出肘部路由（elbow-based routing）：逐 token 动态调整激活专家数量的无训练推理时修改
- 通过检查排序后的路由概率分布并识别肘部点，区分高、低概率专家
- 理论上与经验上均证明保持专家负载平衡，平均延迟降低 5.3% 且准确率不变

## 正文

混合专家（Mixture-of-Experts, MoE）模型通过每个 token 仅激活一部分专家，在保持较低推理计算量的同时实现模型扩展。然而，传统路由依赖固定的 top-k 选择，无论实际有多少专家与当前输入相关，模型都要花费相同的计算量。

我们引入了肘部路由（elbow-based routing），一种无训练的推理时修改方法，可逐 token 动态调整激活的专家数量。我们的方法检查排序后的路由概率分布，并识别出一个肘部点（elbow point），用于分离高概率与低概率的专家。我们发现大多数路由分布都呈现出适合该策略的清晰拐点，并从理论上和经验上证明了肘部路由能够保持专家负载平衡。

在最先进的 MoE 模型上的实验表明，该方法在六个基准上保持准确率的同时，实现了平均 5.3% 的延迟降低。

## 关键词

#混合专家 #MoE #路由 #推理优化 #延迟降低
