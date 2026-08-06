---
published: 2026-08-05
title: "ScoreField：带基于分数生成先验的神经逆散射"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ScoreField- Neural Inverse Scattering with Score-Based Generative Priors.md"
source_note: "[[信息源/arXiv cs.LG RSS/ScoreField- Neural Inverse Scattering with Score-Based Generative Priors.]]"
source_sha256: 58b7109718dc1307149dc199505d3409e7b0ce1f387d1d751f4d596e9b1f67d7
original_url: "https://arxiv.org/abs/2608.02937"
processed: 2026-08-05
language: zh-CN
---

# ScoreField：带基于分数生成先验的神经逆散射

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Wenhan Guo、Yuan Gao、Yu Sun
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02937)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ScoreField- Neural Inverse Scattering with Score-Based Generative Priors.|查看原始文件]]

## 摘要

- 设计有效的电磁逆散射求解器需要忠实强制非线性全波物理，同时要对待求介电常数对比度有表达力的先验。
- 提出 ScoreField，一个神经逆散射框架：把耦合隐式神经表示（INR）与预训练的基于分数生成先验整合。
- ScoreField 用两个 INR 参数化介电常数对比度与诱导电流场，并在 Lippmann-Schwinger 方程下联合优化它们；除 INR 架构的隐式正则化外，分数模型在对比度上提供学得的先验梯度，经链式法则传播到对比度 INR。
- 该公式使 ScoreField 能有效处理强多重散射，其中非线性波相互作用要求精确建模耦合全波物理。
- 在模拟弱与强散射基准、经典 Austria 体模与实验 Fresnel 测量上评估：ScoreField 相对经典全波方法与深度学习基线显著改善重建保真度并抑制伪影，在真实 Fresnel 数据上相对最强竞争方法平均 PSNR 提升 1.8 dB。

## 正文

论文编号：arXiv:2608.02937v1（更新类型：cross）。以下为摘要全文翻译。

设计有效的电磁逆散射求解器需要忠实执行非线性的全波物理，同时对待求的介电常数对比度有一个表达力强的先验。我们提出 ScoreField，一个神经逆散射框架，把耦合隐式神经表示（INR）与预训练的基于分数的生成先验整合。ScoreField 使用两个 INR 参数化介电常数对比度与诱导电流场，并在 Lippmann-Schwinger 方程下联合优化它们。除 INR 架构提供的隐式正则化外，分数模型在对比度上提供一个学得的先验梯度，经链式法则传播到对比度 INR。这一公式使 ScoreField 能够有效处理强多重散射，其中非线性波相互作用要求对耦合全波物理的精确建模。我们在模拟的弱与强散射基准、经典 Austria 体模与实验 Fresnel 测量上评估 ScoreField。我们注意到，ScoreField 相对经典全波方法与深度学习基线显著改善重建保真度并抑制伪影，在真实 Fresnel 数据上相对最强竞争方法取得平均 1.8 dB 的 PSNR 提升。

## 关键词

#逆散射 #隐式神经表示 #分数生成模型 #电磁成像 #先验
