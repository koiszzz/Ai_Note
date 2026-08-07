---
published: 2026-08-06
title: CIFAR-10上的经典联合能量模型预测-校正与SGLD采样器的失败模式及实践不可区分性
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Canonical Joint Energy-Based Model on CIFAR-10- failure modes and practical indistinguishability of .md
source_note: "[[信息源/arXiv cs.LG RSS/Canonical Joint Energy-Based Model on CIFAR-10- failure modes and practical indistinguishability of ]]"
source_sha256: 7dbb35742871448a1e2e6952ad878f4f3919913021cd2e9f629da70734450d4d
original_url: https://arxiv.org/abs/2608.05025
processed: 2026-08-07
language: zh-CN
---

# CIFAR-10上的经典联合能量模型预测-校正与SGLD采样器的失败模式及实践不可区分性

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05025)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Canonical Joint Energy-Based Model on CIFAR-10- failure modes and practical indistinguishability of |查看原始文件]]

## 摘要

- 在无归一化层的 WideResNet-28-10 上以两次独立运行复现经典 JEM，达到 92.88% 测试准确率与 44.46 buffer-FID。
- 记录两种失败模式：经经典异常缓冲机制导致的灾难性后期训练发散，以及与运行相关的 SVHN OOD 判别动态。
- 三种协议下均未观察到 PC 相对 SGLD 的方法级优势，其不可区分性在理论上可预期（PC 预测步骤在固定噪声下构造上退化）。

## 正文

联合能量模型（JEM）在单一网络中统一了分类与生成，并支持分布外（OOD）检测。经典 JEM 训练依赖随机梯度 Langevin 动力学（SGLD）；一个在理论上受驱动的替代方案——预测-校正（PC）采样器——此前尚未在经典模型上接受系统性的复现检验。我们在没有归一化层的 WideResNet-28-10 上、以两次独立运行复现了经典 JEM，并检验 PC 在无退火噪声调度下是否保留其理论优势，涵盖三种协议：在约 130 个训练轮次中全程用 PC 取代 SGLD；冷启动生成（FID）；以及精炼式多 OOD 检测（AUROC）。复现达到 92.88% 的测试准确率和 44.46 的 buffer-FID（经典结果分别为 92.9% 和 38.40）。我们记录了两种失败模式：经由经典异常缓冲机制导致的灾难性后期训练发散（两次 SGLD 运行以及具有相同特征的两次 PC 运行均出现），以及与运行相关的 SVHN OOD 判别动态。在任意协议上均未观察到 PC 相对 SGLD 的方法级优势：在推理时，十个检查点-OOD 组合的绝对 AUROC 差异始终低于 0.007，FID 差异低于 0.5；在训练协议上，逐种子、逐图像的分层自助法给出宏观平均 AUROC 差异的 95% 置信区间，其中包含零，而每种方法两次运行的种子级等价性检验无法确立正式等价。数据既与等价性一致，也与一个小的方向性效应一致。这种实践上的不可区分性在理论上是可以预期的：在固定噪声下，PC 的预测步骤在构造上退化，因此其保证无法迁移到经典 JEM。

## 关键词

#联合能量模型 #JEM #SGLD #预测-校正采样 #CIFAR-10 #OOD检测
