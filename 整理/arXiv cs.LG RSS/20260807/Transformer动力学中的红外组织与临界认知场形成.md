---
published: 2026-08-07
title: "Transformer 动力学中的红外组织与临界认知场形成"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Infrared Organization and Critical Cognitive Field Formation in Transformer Dynamics.md"
source_note: "[[信息源/arXiv cs.LG RSS/Infrared Organization and Critical Cognitive Field Formation in Transformer Dynamics]]"
source_sha256: d09194a8914665abbfafa11948a6ebc031c2cea6fc268879d24dde6302d3d472
original_url: "https://arxiv.org/abs/2607.10923"
processed: 2026-08-07
language: zh-CN
---

# Transformer 动力学中的红外组织与临界认知场形成

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Byung Gyu Chae
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2607.10923)

## 摘要

- 大语言模型展现显著涌现行为，但控制其集体动力学的物理机制仍不为人知；认知场论预测学习通过慢弛豫模式的红外累积重组集体弛豫谱，增强记忆自能、长记忆动力学与集体敏感性。
- 用公开 Pythia 语言模型从层雅可比矩阵提取弛豫谱（贯穿训练、提示集成、网络深度与模型规模），定量测量认知场论的集体可观测量。
- 揭示弛豫谱的显著红外重组：慢弛豫模式向红外渐进累积，产生近似平坦的时间尺度态密度 ρ(λ)~λ^β、β≃−0.1，相应记忆核呈现普适标度 K(t)~1/t；记忆自能在早期训练达到瞬态最大后弛豫到亚稳近临界机制。
- 红外组织在训练、提示集成、网络深度与模型规模上可复现，确立红外慢模式组织为 Transformer 动力学下的普适集体原理，提供认知场论预测集体可观测量的首次定量实验实现。

## 正文

大语言模型展现显著的涌现行为，但控制其集体动力学的物理机制仍不为人知。认知场论（Cognitive Field Theory）预测学习通过慢弛豫模式的红外累积重组集体弛豫谱，从而增强记忆自能、长记忆动力学与集体敏感性。本文直接在 Transformer 动力学中检验该框架。使用公开可得的 Pythia 语言模型，研究从训练全程、提示集成、网络深度与模型规模的层雅可比矩阵提取弛豫谱，使认知场论的集体可观测量可被定量测量。测量揭示弛豫谱的显著红外重组：慢弛豫模式向红外渐进累积，产生近似平坦的时间尺度态密度 ρ(λ)~λ^β、β≃−0.1，相应记忆核呈现普适标度 K(t)~1/t。集体可观测量进一步揭示临界形成过程：记忆自能在早期训练达到瞬态最大值，随后弛豫到亚稳近临界机制。提示分辨与 token 子空间测量显示，不同局部雅可比在粗粒化下收敛到相同归一化红外 TDOS，与红外不动点组织一致。红外组织在训练、提示集成、网络深度与 Transformer 模型规模上的可复现性，确立了红外慢模式组织作为 Transformer 动力学底层普适集体原理，并提供认知场论预测集体可观测量的首次定量实验实现。

## 关键词

Transformer、认知场论、红外重组、临界性、集体动力学
