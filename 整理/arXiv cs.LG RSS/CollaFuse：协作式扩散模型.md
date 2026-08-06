---
title: "CollaFuse：协作式扩散模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CollaFuse- Collaborative Diffusion Models.md"
source_note: "[[信息源/arXiv cs.LG RSS/CollaFuse- Collaborative Diffusion Models]]"
source_sha256: 10cdf10468bb78fc99e39a45e48930153720fa64fbfb80a99e8e0eb2f0efae93
original_url: "https://arxiv.org/abs/2406.14429"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CollaFuse：协作式扩散模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Simeon Allmendinger、Domenique Zipperling、Lukas Struppek 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2406.14429)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/CollaFuse- Collaborative Diffusion Models|查看原始文件]]

## 摘要

- 提出 CollaFuse：受分割学习启发的分布式协作扩散模型新方法——促进扩散模型协作训练，同时减轻客户端在图像合成期间的计算负担；通过本地保留数据与计算成本低流程、把计算成本高流程外包给共享更高效服务器资源实现。
- 生成式 AI 图景中基于扩散的模型已成为合成图像的有前景方法；但扩散模型应用带来诸多挑战，尤其数据可用性、计算需求与隐私；应对这些缺陷的传统方法（如联邦学习）常给单个客户端（尤其资源受限者）施加显著计算负担。
- CelebA、CIFAR-10 与 Animals-with-Attributes2 常见数据集实验显示：方法在减少信息泄露（降低共享原始数据必要性）的同时增强性能。
- 这些能力在边缘计算方案设计等应用领域有显著潜力——推进分布式机器学习，贡献协作扩散模型演进。

## 正文

论文编号：arXiv:2406.14429v4（更新类型：replace）。以下为摘要全文翻译。

在生成式人工智能的图景中，基于扩散的模型已成为生成合成图像的有前景方法。然而，扩散模型的应用带来诸多挑战，尤其是数据可用性、计算需求与隐私方面。应对这些缺陷的传统方法（如联邦学习）往往给单个客户端（尤其是资源受限的客户端）施加显著的计算负担。为应对这些挑战，我们引入 CollaFuse，一种受分割学习（split learning）启发的分布式协作扩散模型新方法。我们的方法促进扩散模型的协作训练，同时减轻客户端在图像合成期间的计算负担。这种计算负担的减轻是通过把数据与计算成本低的流程保留在本地、把计算成本高的流程外包给共享且更高效的服务器资源实现的。在常见数据集 CelebA、CIFAR-10 与 Animals-with-Attributes2 上的实验表明，我们的方法在减少信息泄露的同时增强性能：它降低了共享原始数据的必要性。这些能力在包括边缘计算方案设计在内的各种应用领域具有显著潜力。因此，我们的工作通过推动协作扩散模型的演进，为分布式机器学习做出贡献。

## 关键词

#扩散模型 #分布式学习 #分割学习 #隐私
