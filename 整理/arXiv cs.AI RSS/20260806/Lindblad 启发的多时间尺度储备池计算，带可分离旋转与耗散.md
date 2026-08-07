---
published: 20260806
title: "Lindblad 启发的多时间尺度储备池计算，带可分离旋转与耗散"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Lindblad-Inspired Multi-Timescale Reservoir Computing with Separable Rotation and Dissipation.md"
source_note: "[[信息源/arXiv cs.AI RSS/Lindblad-Inspired Multi-Timescale Reservoir Computing with Separable Rotation and Dissipation]]"
source_sha256: ee767f3a598c38b1fc229558536e6cba267b8e3cf6423fceffa6d8c9288630fa
original_url: "https://arxiv.org/abs/2608.04028"
processed: 2026-08-06
language: zh-CN

---

# Lindblad 启发的多时间尺度储备池计算，带可分离旋转与耗散

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jyotiranjan Beuria, Amit Shukla
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04028)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Lindblad-Inspired Multi-Timescale Reservoir Computing with Separable Rotation and Dissipation|查看原始文件]]

## 摘要

- 回声状态网络通过固定循环动力学并仅训练线性读出实现高效时间学习，但传统储备池通常在单一随机循环矩阵中容纳信号混合、记忆保留和稳定性；现有结构化设计改进拓扑、范数保持、泄漏或深度，但一般不在直接全局稳定性保证下提供可逆混合与不可逆遗忘的独立模态控制。
- 本文引入经典 Lindblad 启发的多时间尺度储备池，桥接开放系统动力学原理与结构化状态空间建模：循环算子由精确离散化阻尼旋转模式组装，旋转和衰减成为支配相位混合和记忆损失的独立设计变量。
- 正交模式混合保持正态性，衰减谱直接确定回声状态稳定性裕度，无需事后谱半径重缩放；跨十个对齐种子对标准、泄漏、深度、正交、循环和下一代储备池及紧凑训练门控循环单元评估，在线性记忆、非线性递归、混沌预测、延迟逻辑和真实传感器校准上实现最佳固定储备池性能。

## 正文

回声状态网络通过固定循环动力学并仅训练线性读出实现高效时间学习。然而，传统储备池通常在单一随机循环矩阵中容纳信号混合、记忆保留和稳定性。现有结构化设计改进拓扑、范数保持、泄漏或深度，但一般不在直接全局稳定性保证下提供可逆混合与不可逆遗忘的独立模态控制。我们引入经典 Lindblad 启发的多时间尺度储备池，桥接开放系统动力学原理与结构化状态空间建模。循环算子由精确离散化阻尼旋转模式组装，因此旋转和衰减成为支配相位混合和记忆损失的独立设计变量。正交模式混合保持正态性，而衰减谱直接确定回声状态稳定性裕度，无需事后谱半径重缩放。我们在十个对齐种子上对标准、泄漏、深度、正交、循环和下一代储备池，以及紧凑训练门控循环单元评估该方法，覆盖线性记忆、非线性递归、混沌预测、延迟逻辑和真实传感器校准。跨基准套件，所提储备池在有界 NARMA-20 上实现最佳固定储备池性能，Lorenz-63 上最低平均误差，匹配最强线性记忆结果，并在广泛基准上保持普遍竞争力。消融研究表明，旋转增加状态多样性，而耗散提供受控遗忘并改进预测条件性。所得框架提供可解释循环架构，其中混合、记忆和稳定性是显式、独立可调的设计变量。

## 关键词

#储备池计算 #回声状态网络 #Lindblad #多时间尺度 #arXiv