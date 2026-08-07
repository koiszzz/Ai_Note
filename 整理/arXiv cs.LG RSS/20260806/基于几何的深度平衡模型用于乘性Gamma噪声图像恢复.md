---
published: 2026-08-06
title: 基于几何的深度平衡模型用于乘性Gamma噪声图像恢复
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/A geometry-based deep equilibrium model for image restoration under multiplicative Gamma noise.md
source_note: "[[信息源/arXiv cs.LG RSS/A geometry-based deep equilibrium model for image restoration under multiplicative Gamma noise]]"
source_sha256: 4537d07d6b962b0a0161385e1910b80481eee01832ce2ce99a4bbf8658ebc0d2
original_url: https://arxiv.org/abs/2608.04944
processed: 2026-08-07
language: zh-CN
---

# 基于几何的深度平衡模型用于乘性Gamma噪声图像恢复

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04944)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/A geometry-based deep equilibrium model for image restoration under multiplicative Gamma noise|查看原始文件]]

## 摘要

- 针对乘性 Gamma 噪声与模糊联合退化的图像恢复，提出学习显式、可解释正则子的深度框架。
- 正则子由表面积与平均曲率等几何先验参数化；开发适配 Gamma 噪声保真项的镜像下降算法。
- 借助 Kurdyka-Lojasiewicz 性质证明迭代的全局收敛；在参数量显著更少的情况下达到与最先进隐式正则 DEQ 模型相当的性能。

## 正文

我们提出一个深度学习框架，用于恢复同时受乘性 Gamma 噪声与模糊退化的图像。与依赖隐式神经正则化的传统深度平衡（deep equilibrium，DEQ）模型不同，所提方法学习一个由与表面积和平均曲率相关的几何先验参数化的显式、可解释正则子。

为最小化相应的变分模型，我们针对常用的 Gamma 噪声保真项开发了一种镜像下降（mirror descent）算法。借助定义在 $o$-minimal 结构上函数的 Kurdyka-Lojasiewicz 性质，我们建立了所生成迭代序列到临界点的全局收敛性。

在灰度与彩色图像恢复上的实验结果表明，所提方法始终优于具有代表性的基于模型的方法，同时达到与基于隐式正则化的最先进 DEQ 模型相当的性能，而所需可训练参数显著更少。

## 关键词

#深度平衡模型 #Gamma噪声 #图像恢复 #镜像下降 #几何正则化
