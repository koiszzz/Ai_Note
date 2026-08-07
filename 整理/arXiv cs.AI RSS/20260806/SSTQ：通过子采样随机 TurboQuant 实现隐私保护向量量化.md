---
published: 20260806
title: "SSTQ：通过子采样随机 TurboQuant 实现隐私保护向量量化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SSTQ-Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant.md"
source_note: "[[信息源/arXiv cs.AI RSS/SSTQ-Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant]]"
source_sha256: 63982b57d82c5dba67bd80e2fb22c8c9229cead5245360a6323dfb39390794ca
original_url: "https://arxiv.org/abs/2608.05127"
processed: 2026-08-06
language: zh-CN

---

# SSTQ：通过子采样随机 TurboQuant 实现隐私保护向量量化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Adel Javanmard, David P. Woodruff, Vahab Mirrokni
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05127)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SSTQ-Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant|查看原始文件]]

## 摘要

- 在分布式优化中实现本地差分隐私同时保持低通信成本仍具挑战性；vqSGD 等现有向量量化方法使用高维几何构造，但产生不利的维度依赖方差。
- 本文提出子采样随机 TurboQuant（SSTQ），一个组合过完全等范数紧框架、坐标子采样和隐私感知一维量化的框架；包含两个变体：平坦随机响应版本和度量感知拉普拉斯版本，后者更适合更高码本位宽状态。
- 显示 SSTQ 实现最优均方误差缩放，每客户端仅用 ⌈log₂N⌉+b 位（N=Θ(d) 为框架大小）；推导替代隐私感知码本目标，将码本依赖 MSE 缩放从 O(4ᵇ) 降至 O(2ᵇ)；CIFAR-10 和 Fashion-MNIST 联邦学习任务实证评估显示相对既有基线有利效用和通信效率。

## 正文

在分布式优化中实现本地差分隐私（local differential privacy）同时保持低通信成本仍具挑战性。vqSGD 等现有向量量化方法使用高维几何构造，但产生不利的维度依赖方差。在本工作中，我们提出子采样随机 TurboQuant（Subsampled Stochastic TurboQuant，SSTQ），一个组合过完全等范数紧框架（overcomplete equal-norm tight frames）、坐标子采样和隐私感知一维量化的框架。SSTQ 包含两个变体：平坦随机响应（Flat Randomized Response）版本和度量感知拉普拉斯（Metric-Aware Laplace）版本，后者更适合更高码本位宽状态。我们显示 SSTQ 实现最优均方误差（MSE）缩放，每客户端仅使用 ⌈log₂N⌉+b 位，其中 N=Θ(d) 为框架大小。我们还推导替代隐私感知码本目标，将码本依赖 MSE 缩放从 O(4ᵇ) 降至 O(2ᵇ)。最后，我们在 CIFAR-10 和 Fashion-MNIST 的联邦学习任务上对既有基线实证评估 SSTQ，展示有利的效用和通信效率。

## 关键词

#差分隐私 #向量量化 #联邦学习 #通信效率 #arXiv