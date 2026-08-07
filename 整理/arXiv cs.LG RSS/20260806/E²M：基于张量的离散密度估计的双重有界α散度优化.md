---
published: 2026-08-06
title: E²M：基于张量的离散密度估计的双重有界α散度优化
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/E$^2$M- Double Bounded $-alpha$-Divergence Optimization for Tensor-based Discrete Density Estimation.md
source_note: "[[信息源/arXiv cs.LG RSS/E$^2$M- Double Bounded $-alpha$-Divergence Optimization for Tensor-based Discrete Density Estimation]]"
source_sha256: 8d4b03125c8835f5b40c925272614e5161a8d8497f0686c497d4245ebb151300
original_url: https://arxiv.org/abs/2405.18220
processed: 2026-08-07
language: zh-CN
---

# E²M：基于张量的离散密度估计的双重有界α散度优化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2405.18220)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/E$^2$M- Double Bounded $-alpha$-Divergence Optimization for Tensor-based Discrete Density Estimation|查看原始文件]]

## 摘要

- 提出 E²M 算法，推广期望最大化（EM）算法以处理 α 散度目标中的 α 次幂项
- 先松弛为基于 KL 散度的代理目标，再在 M 步应用张量多体近似实现所有参数的闭式更新
- 支持 CP、Tucker、张量链等低秩结构及其混合，性能优于现有张量方法

## 正文

基于张量的离散密度估计需要灵活的建模和恰当的散度准则才能实现有效学习；然而，传统使用 α 散度（$\alpha$-divergence）的方法因目标函数中的 α 次幂项而面临解析上的挑战，这阻碍了闭式更新规则的推导。我们提出了期望最大化（EM）算法的一种推广，称为 E²M 算法。它通过两步绕过了这一难题：首先将优化松弛为基于 Kullback-Leibler（KL）散度的代理目标的最小化（该目标可通过标准 EM 算法求解），随后在 M 步中应用张量多体近似（tensor many-body approximation），从而实现对全部参数的同步闭式更新。

我们的方法不仅能为各种低秩结构（包括 CP、Tucker 和张量链（Tensor Train）格式）提供灵活建模，还能处理它们的混合形式，从而可以利用不同低秩结构各自的优势。我们在合成数据和真实数据集上评估了所提方法的有效性，结果表明：其收敛速度与基于梯度的流程相当、对异常值具有鲁棒性，并且在密度估计性能上优于现有主流的基于张量的方法。

## 关键词

#密度估计 #张量分解 #EM算法 #α散度 #低秩模型
