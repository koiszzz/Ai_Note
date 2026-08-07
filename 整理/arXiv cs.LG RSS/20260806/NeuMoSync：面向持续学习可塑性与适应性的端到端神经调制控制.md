---
published: 2026-08-06
title: NeuMoSync：面向持续学习可塑性与适应性的端到端神经调制控制
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/NeuMoSync- End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning.md
source_note: "[[信息源/arXiv cs.LG RSS/NeuMoSync- End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning|查看原始文件]]"
source_sha256: 14a105955e82b9ae71a134584104dc4b7d5c5ef88d908b1103a599f3739b886b
original_url: https://arxiv.org/abs/2608.04358
processed: 2026-08-07
language: zh-CN
---

# NeuMoSync：面向持续学习可塑性与适应性的端到端神经调制控制

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04358)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/NeuMoSync- End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning|查看原始文件]]

## 摘要

- 持续学习要求模型按序学习任务，但深度神经网络常遭受可塑性损失与知识迁移不足，阻碍长期适应性
- 受大脑全局神经调制机制的高层启发，提出 NeuMoSync（神经调制与同步）架构，为每个神经元整合可学习的特征向量与更高抽象层模块，自适应调控激活动态与突触可塑性
- 在记忆化、概念漂移、类增量与域增量等多样化 CL 基准上保持可塑性并提升前向与后向适应，消融研究验证各组件必要性，代码已公开

## 正文

持续学习（CL）要求模型按顺序学习任务，然而深度神经网络常常遭受可塑性损失和知识迁移不足，这可能阻碍其长期适应性。借鉴大脑全局神经调制机制的高层启发，我们提出神经调制与同步（NeuMoSync），一种新颖的架构，它将动态的、神经元特定的调制整合进深度神经网络，以增强其适应性和可塑性。NeuMoSync 用可学习的特征向量扩展标准神经网络架构，每个神经元都有一个特征向量来跟踪网络范围的历史上下文，并有一个运行在更高抽象层级的模块。该模块综合神经元特定的信号——同时以当前输入和网络不断演化的状态为条件——来自适应地调控激活动态和突触可塑性。在多样化的 CL 基准上的评估，包括记忆化（随机标签 CIFAR-10 和随机标签 MNIST）、概念漂移（Shuffle CIFAR-10 和 Shuffle Mini-ImageNet）、类增量学习（Class Split ImageNet 和 Class Split CIFAR-100）以及域增量学习（Permuted MNIST），NeuMoSync 在保持可塑性方面表现出色，并且与现有方法相比在前向和后向适应方面都取得了改进。消融研究验证了每个组件的必要性，而对学习到的调制信号的分析揭示了跨任务的可解释协调模式。我们的工作强调了将全局协调机制整合进深度学习系统以推动鲁棒、自适应持续学习的潜力。代码已在 https://github.com/RoozbehRazavi/NeuMoSync 公开提供。

## 关键词

#持续学习 #神经调制 #可塑性 #增量学习 #突触可塑性
