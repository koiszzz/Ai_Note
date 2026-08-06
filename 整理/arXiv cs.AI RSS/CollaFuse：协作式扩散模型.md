---
title: "CollaFuse：协作式扩散模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CollaFuse- Collaborative Diffusion Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/CollaFuse- Collaborative Diffusion Models]]"
source_sha256: 88c3385089c7f36cbbe2a2b667f29beb73655d3cd2703fd9daeb88a8b89792c7
original_url: "https://arxiv.org/abs/2406.14429"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CollaFuse：协作式扩散模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Simeon Allmendinger、Domenique Zipperling、Lukas Struppek 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2406.14429)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CollaFuse- Collaborative Diffusion Models|查看原始文件]]

## 摘要

- 提出 CollaFuse：受分割学习（split learning）启发的分布式协作扩散模型方法。
- 客户端保留数据与计算成本低的流程，将计算成本高的流程外包给共享的高效服务器资源，从而在图像合成过程中减轻客户端计算负担。
- 在 CelebA、CIFAR-10 与 Animals-with-Attributes2 数据集上，该方法在增强性能的同时减少信息泄露（降低共享原始数据的必要性）。
- 对边缘计算方案设计等应用领域具有显著潜力，推进分布式机器学习中协作扩散模型的发展。

## 正文

论文编号：arXiv:2406.14429v4（更新类型：replace-cross）。以下为摘要全文翻译。

在生成式人工智能的图景中，基于扩散的模型已成为生成合成图像的有前景方法。然而，扩散模型的应用带来诸多挑战，特别是数据可用性、计算需求和隐私方面。应对这些缺陷的传统方法（如联邦学习）通常会给单个客户端带来显著的计算负担，尤其是资源受限的客户端。为应对这些挑战，我们引入 CollaFuse，一种受分割学习启发的分布式协作扩散模型新方法。我们的方法促进扩散模型的协作训练，同时减轻客户端在图像合成过程中的计算负担。这种计算负担的减轻是通过在本地保留数据与计算成本低的流程、将计算成本高的流程外包给共享且更高效的服务器资源来实现的。通过在常见数据集 CelebA、CIFAR-10 和 Animals-with-Attributes2 上的实验，我们的方法在减少信息泄露的同时增强了性能，因为它降低了共享原始数据的必要性。这些能力在包括边缘计算方案设计在内的各种应用领域具有显著潜力。因此，我们的工作通过推动协作扩散模型的演进，推进了分布式机器学习。

## 关键词

#扩散模型 #分布式学习 #分割学习 #联邦学习
