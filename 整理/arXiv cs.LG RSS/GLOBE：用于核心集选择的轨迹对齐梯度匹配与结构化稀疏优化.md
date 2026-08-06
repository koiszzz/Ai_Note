---
title: "GLOBE：用于核心集选择的轨迹对齐梯度匹配与结构化稀疏优化"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GLOBE- Trajectory-Aligned Gradient Matching with Structured SparseOptimization for Coreset Selection.md"
source_note: "[[信息源/arXiv cs.LG RSS/GLOBE- Trajectory-Aligned Gradient Matching with Structured SparseOptimization for Coreset Selection.]]"
source_sha256: 5b22d41cb7d0b04034fad290ee0a2c9b51a60fa6d7de39bdf2cb2aecc07da04f
original_url: "https://arxiv.org/abs/2608.02690"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# GLOBE：用于核心集选择的轨迹对齐梯度匹配与结构化稀疏优化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Hetian Liu、Jin Cui、Mengcheng Shi、Yanbin Hu、Xinyue Long、Boran Zhao、Pengju Pen
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02690)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/GLOBE- Trajectory-Aligned Gradient Matching with Structured SparseOptimization for Coreset Selection.|查看原始文件]]

## 摘要

- 设备端深度神经网络训练受限于大规模数据集的计算与内存成本；核心集选择通过仅保留真实训练样本的紧凑子集提供实用解决方案。
- 现有基于梯度的方法通常依赖单次模型快照处计算的梯度，并采用贪心或追踪式选择过程，难以捕捉动态变化的优化过程、难以处理强相关样本。
- 提出 GLOBE（Gradient Local-Balanced Extraction，梯度局部平衡提取），一个轨迹对齐的核心集选择框架：把样本选择形式化为全局优化的稀疏加权问题。
- GLOBE 用跨多个训练检查点构建的梯度轨迹表示每个样本，从而捕捉其在优化各阶段的影响；引入多阶匹配目标，联合对齐梯度轨迹的一阶均值与投影无中心二阶矩。
- 组合 Group LASSO、弹性网正则化与非负预算约束，在组级与样本级诱导稀疏性，同时稳定相关轨迹的权重；类平衡 Top-K 选择在有限采样预算下保持充分的类别覆盖。
- 六个基准与五种评估架构上的实验表明，GLOBE 在下游测试准确率上持续优于现有核心集选择方法，尤其在低保留率下；结果凸显结合动态梯度信息、多阶分布匹配与结构化稀疏性对数据高效学习的有效性。

## 正文

论文编号：arXiv:2608.02690v1（更新类型：new）。以下为摘要全文翻译。

深度神经网络的设备端训练从根本上受制于大规模数据集的计算与内存成本。核心集选择通过仅保留真实训练样本的紧凑子集提供了一种实用解决方案。然而，现有基于梯度的方法通常依赖在单个模型快照处计算的梯度，并采用贪心或追踪式选择程序，这限制了它们捕捉动态变化优化过程与处理强相关样本的能力。我们提出 GLOBE（Gradient Local-Balanced Extraction，梯度局部平衡提取），一个轨迹对齐的核心集选择框架，把样本选择形式化为全局优化的稀疏加权问题。GLOBE 用跨多个训练检查点构建的梯度轨迹表示每个样本，从而捕捉其在优化各阶段的影响。为保留完整数据集的训练行为，我们引入多阶匹配目标，联合对齐梯度轨迹的一阶均值与投影无中心二阶矩。GLOBE 进一步结合 Group LASSO、弹性网正则化与非负预算约束，在组级与样本级诱导稀疏性，同时稳定相关轨迹的权重。最后，类平衡 Top-K 选择在有限采样预算下维持充分的类别覆盖。在六个基准与五种评估架构上的实验表明，GLOBE 在下游测试准确率上持续优于现有核心集选择方法，尤其在低保留率下。这些结果凸显了结合动态梯度信息、多阶分布匹配与结构化稀疏性对数据高效学习的有效性。

## 关键词

#核心集选择 #梯度匹配 #稀疏优化 #数据高效学习 #设备端训练
