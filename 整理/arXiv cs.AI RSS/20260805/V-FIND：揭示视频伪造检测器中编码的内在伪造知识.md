---
published: 2026-08-05
title: "V-FIND：揭示视频伪造检测器中编码的内在伪造知识"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/V-FIND- Revealing the Intrinsic Forgery Knowledge Encoded in Video Forgery Detectors.md"
source_note: "[[信息源/arXiv cs.AI RSS/V-FIND- Revealing the Intrinsic Forgery Knowledge Encoded in Video Forgery Detectors]]"
source_sha256: e2ed8df749fe2796e45455e518156754ade856a616ab4ead3d21f102a49f59bc
original_url: "https://arxiv.org/abs/2608.03008"
processed: 2026-08-05
language: zh-CN
---

# V-FIND：揭示视频伪造检测器中编码的内在伪造知识

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shichao Kan、Chengpeng Hong、Jingtong Dou 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03008)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/V-FIND- Revealing the Intrinsic Forgery Knowledge Encoded in Video Forgery Detectors|查看原始文件]]

## 摘要

- 提出视频伪造内在神经元发现（V-FIND）框架：先定位真实与伪造视频间差异显著的关键层，再识别一致携带伪造判别信号的潜锚神经元，组织为紧凑取证子空间；原始骨干冻结、仅训练轻量线性分类器时，该子空间仍跨多个外部生成视频基准带来强检测性能。
- 生成视频日益逼真，可靠视频伪造检测日益重要；现有研究通常把视频伪造检测器作为黑箱优化与使用，内部潜伪造判别知识基本未探索。
- 发现伪造判别知识不统一分布于整个表示空间，而集中于功能特化的稀疏神经元集——不问是否可经资源密集的全模型重训稳定改善检测性能，而问能否通过揭示与激活检测器内稀疏取证知识实现视频伪造检测。
- 神经元干预实验为发现神经元的功能特化提供直接证据——视频伪造检测器包含稀疏、可提取、可复用的伪造判别知识，为理解与利用其内在取证能力提供新视角。

## 正文

论文编号：arXiv:2608.03008v1（更新类型：cross）。以下为摘要全文翻译。

随着生成视频日益逼真，可靠的视频伪造检测日益重要。现有研究通常把视频伪造检测器作为黑箱优化与使用，而其内部的潜伪造判别知识在很大程度上未被探索。我们不继续依赖资源密集的全模型重训来稳步改善检测性能，而是询问：视频伪造检测是否也可以通过揭示与激活检测器内的稀疏取证知识来实现？我们发现，伪造判别知识并非统一分布于整个表示空间，而是集中在功能特化的稀疏神经元集。基于这一洞察，我们提出视频伪造内在神经元发现（V-FIND）框架。V-FIND 首先定位真实与伪造视频之间表现出显著差异的关键层，然后识别一致携带伪造判别信号的潜锚神经元，并把它们组织成紧凑的取证子空间。在原始骨干冻结、仅训练轻量线性分类器的情况下，该子空间仍跨多个外部生成视频基准带来强检测性能。进一步的神经元干预实验为所发现神经元的功能特化提供直接证据。总体而言，这些结果表明视频伪造检测器包含稀疏、可提取且可复用的伪造判别知识，为理解与利用其内在取证能力提供新视角。

## 关键词

#视频伪造检测 #稀疏神经元 #可解释性 #取证
