---
published: 2026-08-06
title: "基于策略梯度的 GFlowNet 训练"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GFlowNet Training by Policy Gradients.md"
source_note: "[[信息源/arXiv cs.LG RSS/GFlowNet Training by Policy Gradients|查看原始文件]]"
source_sha256: 4d65ba8222a10736a71484e83f45f54bdbe858244b637e4b8fbffaef082a3d00
original_url: https://arxiv.org/abs/2408.05885
processed: 2026-08-07
language: zh-CN
---

# 基于策略梯度的 GFlowNet 训练

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2408.05885)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/GFlowNet Training by Policy Gradients|查看原始文件]]

## 摘要

- 生成流网络（GFlowNet）已被证明能有效生成具有期望属性的组合对象；本文提出一种新的 GFlowNet 训练框架，采用与策略相关的奖励，将保持 GFlowNet 流平衡与传统强化学习（RL）中优化期望累积奖励联系起来。
- 该框架能够推导出新的基于策略的 GFlowNet 训练方法，与现有类似基于价值 RL 的方法形成对比；作者还针对 GFlowNet 训练中反向策略设计影响效率的已知问题，开发了联合求解前向策略训练与反向策略设计的耦合训练策略。
- 提供了性能分析及所提出基于策略的 GFlowNet 训练的理论保证；在模拟与真实数据集上的实验验证了基于策略的方法为稳健的梯度估计提供了先进的 RL 视角，从而提升了 GFlowNet 的性能。

## 正文

生成流网络（GFlowNet）已被证明能有效生成具有期望属性的组合对象。我们在此提出一种新的 GFlowNet 训练框架，其采用与策略相关的奖励，将保持 GFlowNet 的流平衡与传统强化学习（RL）中优化期望累积奖励联系起来。这使我们能够推导出新的基于策略的 GFlowNet 训练方法，与现有类似基于价值 RL 的方法形成对比。众所周知，GFlowNet 训练中反向策略的设计会影响效率。我们进一步开发了一种耦合训练策略，联合求解 GFlowNet 前向策略训练与反向策略设计。我们提供了性能分析，并给出了所提出的基于策略的 GFlowNet 训练的理论保证。在模拟数据集和真实世界数据集上的实验验证了：我们的基于策略的方法为稳健的梯度估计提供了先进的 RL 视角，从而改善了 GFlowNet 的性能。

## 关键词

#GFlowNet #策略梯度 #强化学习 #生成模型
