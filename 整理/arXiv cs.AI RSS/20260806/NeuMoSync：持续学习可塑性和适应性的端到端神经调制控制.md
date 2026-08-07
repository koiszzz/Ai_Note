---
published: 20260806
title: "NeuMoSync：持续学习可塑性和适应性的端到端神经调制控制"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/NeuMoSync- End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/NeuMoSync- End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning]]"
source_sha256: 66e3fe2d12d4d89553bc5e95e2231d2d1503d036c76268b2e070e0b990cc3eff
original_url: "https://arxiv.org/abs/2608.04358"
processed: 2026-08-06
language: zh-CN

---

# NeuMoSync：持续学习可塑性和适应性的端到端神经调制控制

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Seyed Roozbeh Razavi Rohani, Khashayar Khajavi, Wesley Chung, Mandana Samiei, Mo Chen
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04358)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/NeuMoSync- End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning|查看原始文件]]

## 摘要

- 持续学习（CL）要求模型顺序学习任务，但深度神经网络常遭受可塑性损失和知识迁移差，阻碍长期适应性；受大脑全局神经调制机制高层启发，本文引入神经调制与同步（NeuMoSync），一个将动态、神经元特定调制集成到深度神经网络的新架构。
- NeuMoSync 用每个神经元可学习特征向量扩展标准神经网络架构，跟踪网络范围历史上下文，并用在更高抽象级别运行的模块：此模块综合神经元特定信号，条件于当前输入和网络演变状态，自适应调节激活动力学和突触可塑性。
- 在多样 CL 基准（记忆化、概念漂移、类增量学习和域增量学习）评估，NeuMoSync 在保持可塑性上显示强性能，相对现有方法在前向和后向适应均改进；消融验证每个组件必要性，学习调制信号分析揭示跨任务可解释协调模式。

## 正文

持续学习（CL）要求模型顺序学习任务，然而深度神经网络常遭受可塑性损失和知识迁移差，可能阻碍长期适应性。受大脑全局神经调制机制高层启发，我们引入神经调制与同步（Neuromodulation and Synchronization，NeuMoSync），一个将动态、神经元特定调制集成到深度神经网络以增强适应性和可塑性的新架构。NeuMoSync 用每个神经元的可学习特征向量（跟踪网络范围历史上下文）和在更高抽象级别运行的模块扩展标准神经网络架构。此模块综合神经元特定信号，条件于当前输入和网络演变状态，自适应调节激活动力学和突触可塑性。在多样 CL 基准评估，包括记忆化（Random Label CIFAR-10 和 Random Label MNIST）、概念漂移（Shuffle CIFAR-10 和 Shuffle Mini-ImageNet）、类增量学习（Class Split ImageNet 和 Class Split CIFAR-100）和域增量学习（Permuted MNIST），NeuMoSync 在保持可塑性上显示强性能，相对现有方法在前向和后向适应均实现改进。消融研究验证每个组件的必要性，而学习调制信号分析揭示跨任务可解释协调模式。我们的工作强调将全局协调机制集成到深度学习系统中以推进稳健、自适应持续学习的潜力。代码公开可用：https://github.com/RoozbehRazavi/NeuMoSync。

## 关键词

#持续学习 #神经调制 #可塑性 #适应性 #arXiv