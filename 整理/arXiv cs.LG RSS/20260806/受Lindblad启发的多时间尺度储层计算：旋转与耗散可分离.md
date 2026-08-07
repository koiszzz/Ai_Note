---
published: 2026-08-06
title: 受Lindblad启发的多时间尺度储层计算：旋转与耗散可分离
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Lindblad-Inspired Multi-Timescale Reservoir Computing with Separable Rotation and Dissipation.md
source_note: "[[信息源/arXiv cs.LG RSS/Lindblad-Inspired Multi-Timescale Reservoir Computing with Separable Rotation and Dissipation]]"
source_sha256: be3d045e72058513f6ea1f96061cdb498d8157b9ce975261951c1f8fe64c7890
original_url: https://arxiv.org/abs/2608.04028
processed: 2026-08-07
language: zh-CN
---

# 受Lindblad启发的多时间尺度储层计算：旋转与耗散可分离

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04028)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Lindblad-Inspired Multi-Timescale Reservoir Computing with Separable Rotation and Dissipation|查看原始文件]]

## 摘要

- 提出受 Lindblad 启发的经典多时间尺度储层：循环算子由精确离散化的阻尼旋转模态组装而成，使旋转与衰减成为独立设计变量，分别控制相位混合与记忆丢失
- 正交模态混合保持正规性，衰减谱直接决定回声状态稳定性裕度，无需事后缩放谱半径
- 在十个对齐种子下与标准、泄漏、深度、正交、循环及下一代储层及紧凑门控循环单元对比，在有界 NARMA-20 上取得最佳固定储层性能、Lorenz-63 上平均误差最低，消融表明旋转增加状态多样性、耗散提供受控遗忘

## 正文

回声状态网络通过固定循环动力学并仅训练线性读出层来实现高效的时间学习。然而，传统储层通常需要在一个单一的随机循环矩阵内同时容纳信号混合、记忆保持与稳定性。现有的结构化设计改善了拓扑、范数保持、泄漏或深度，但一般无法提供对可逆混合与不可逆遗忘的独立模态控制，同时缺少直接的全局稳定性保证。我们引入了一种受 Lindblad 启发的经典多时间尺度储层，将开放系统动力学原理与结构化状态空间建模相结合。循环算子由精确离散化的阻尼旋转模态组装而成，因此旋转与衰减成为控制相位混合与记忆丢失的独立设计变量。正交模态混合保持了正规性，而衰减谱直接决定回声状态的稳定性裕度，无需事后调整谱半径。我们在十个对齐种子下，将所提方法同标准、泄漏、深度、正交、循环和下一代储层，以及一个紧凑的训练后门控循环单元进行比较，评测覆盖线性记忆、非线性递归、混沌预测、延迟逻辑与真实传感器标定。在整个基准套件上，所提储层在有界 NARMA-20 上取得最佳固定储层性能，在 Lorenz-63 上取得最低平均误差，与最强的线性记忆结果持平，并在广泛的基准上保持整体竞争力。消融研究表明，旋转增加了状态多样性，而耗散提供受控遗忘并改善预测条件。由此得到的框架提供了一种可解释的循环架构，其中混合、记忆与稳定性是显式且可独立调节的设计变量。

## 关键词

#储层计算 #回声状态网络 #Lindblad #多时间尺度 #混沌预测
