---
published: 2026-08-06
title: SSTQ：通过子采样随机TurboQuant实现隐私保护的向量量化
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SSTQ-Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant.md
source_note: "[[信息源/arXiv cs.LG RSS/SSTQ-Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant]]"
source_sha256: fe1a002dff92170ad0f59181b9994bbe00665fe8890d4fcc82be494633e42c71
original_url: https://arxiv.org/abs/2608.05127
processed: 2026-08-07
language: zh-CN
---

# SSTQ：通过子采样随机TurboQuant实现隐私保护的向量量化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05127)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SSTQ-Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant|查看原始文件]]

## 摘要

- 提出 Subsampled Stochastic TurboQuant（SSTQ），结合超完备等范数紧框架、坐标子采样与隐私感知一维量化。
- 含平坦随机响应与度量感知拉普拉斯两个变体，每客户端仅用 `⌈log2 N⌉ + b` 比特即实现最优均方误差缩放。
- 推导隐私感知码本目标，将依赖码本的 MSE 缩放从 O(4^b) 降至 O(2^b)；在 CIFAR-10 与 Fashion-MNIST 联邦学习任务上验证了效用与通信效率。

## 正文

在分布式优化中同时实现本地差分隐私并保持低通信成本仍具挑战。现有的向量量化方法（如 vqSGD）使用高维几何构造，但会招致与维度相关的不利方差。本文提出 Subsampled Stochastic TurboQuant（SSTQ），一个结合超完备等范数紧框架、坐标子采样与隐私感知一维量化的框架。SSTQ 包含两个变体：平坦随机响应版本与度量感知拉普拉斯版本，后者更适合码本位宽较高的场景。我们证明 SSTQ 在每客户端仅使用 `⌈log2 N⌉ + b` 比特（其中 N = Θ(d) 为框架大小）的情况下实现最优均方误差缩放。我们还推导了一个替代的隐私感知码本目标，将依赖码本的 MSE 缩放从 O(4^b) 降至 O(2^b)。最后，我们在 CIFAR-10 与 Fashion-MNIST 上的联邦学习任务中对照既有基线对 SSTQ 进行实证评估，展示出良好的效用与通信效率。

## 关键词

#差分隐私 #向量量化 #联邦学习 #通信效率 #紧框架
