---
published: 2026-08-06
title: PSI3D：基于逐切片潜扩散先验的即插即用三维随机推断
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/PSI3D- Plug-and-Play 3D Stochastic Inference with Slice-wise Latent Diffusion Prior.md
source_note: "[[信息源/arXiv cs.LG RSS/PSI3D- Plug-and-Play 3D Stochastic Inference with Slice-wise Latent Diffusion Prior]]"
source_sha256: b7e00b621f0c2e8003c99ca80c5d2da5eb409d3db6fecb73874ac1cee18f5483
original_url: https://arxiv.org/abs/2512.18367
processed: 2026-08-07
language: zh-CN
---

# PSI3D：基于逐切片潜扩散先验的即插即用三维随机推断

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.18367)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/PSI3D- Plug-and-Play 3D Stochastic Inference with Slice-wise Latent Diffusion Prior|查看原始文件]]

## 摘要

- 提出 PSI3D 算法，用带潜扩散先验的即插即用方法处理大规模（`1024×1024×128`）三维体数据的随机推断。
- 通过 MCMC 逐切片从二维潜扩散模型采样重建，并在拼接轴上随机加入全变差正则以增强切片间一致性。
- 在光学相干断层扫描（OCT）超分辨率上显著优于传统与基于学习的基线，提供稳健可信的重建。

## 正文

扩散模型是贝叶斯逆问题中表达力极强的图像先验。然而，由于高昂的训练和推理成本，大多数扩散模型无法处理大规模高维数据。在本工作中，我们引入一种带潜扩散先验的三维随机推断即插即用算法（PSI3D），以处理大规模（`1024×1024×128`）体数据。

具体而言，我们构造一种马尔可夫链蒙特卡洛（MCMC）方法，通过从二维潜扩散模型中采样来重建每个二维（2D）切片。为增强切片间一致性，我们还在拼接轴上随机加入全变差（TV）正则化。我们在光学相干断层扫描（OCT）超分辨率上评估性能。与传统和基于学习的基线相比，我们的方法显著改善大规模科学成像的重建质量，同时提供稳健可信的重建。

## 关键词

#扩散模型 #贝叶斯逆问题 #三维重建 #潜扩散先验 #MCMC
