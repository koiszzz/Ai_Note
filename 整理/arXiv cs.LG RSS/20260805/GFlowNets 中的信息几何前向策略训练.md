---
published: 2026-08-05
title: "GFlowNets 中的信息几何前向策略训练"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Information-Geometric Forward Policy Training in GFlowNets.md"
source_note: "[[信息源/arXiv cs.LG RSS/Information-Geometric Forward Policy Training in GFlowNets.]]"
source_sha256: 405c07c8db2da304e4cd403c341f0a39a8e5b33e4e6ac5658f3b9674714f9723
original_url: "https://arxiv.org/abs/2608.03967"
processed: 2026-08-05
language: zh-CN
---

# GFlowNets 中的信息几何前向策略训练

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yordan Raykov、Rodrigo Veiga
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03967)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Information-Geometric Forward Policy Training in GFlowNets.|查看原始文件]]

## 摘要

- 生成流网络（GFlowNets）已成为对离散与混合离散—连续对象进行摊销推断的灵活框架，只需通过奖励指定一个未归一化目标密度。
- 通过诱导轨迹采样器的信息几何来形式化 GFlowNets 中的前向策略训练：把前向策略视为诱导轨迹采样器，其内在一阶几何由轨迹族的 Fisher-Rao 度量给出，相应的自然梯度在 Fisher 信息可计算或可准确近似时提供规范局部更新。
- 推导出轨迹 Fisher 的精确分解为每步条件二阶矩，阐明何时时间分数交互消失、何时在共享参数化下保持稠密耦合。
- 由此得到三种计算场景：可精确计算 Fisher 信息的场景、期望 Fisher 的蒙特卡洛估计足够的场景、以及可利用结构（目标局部性或因子化）得到 Fisher 期望准确近似的场景。
- 后一场景中，精确边缘化、分隔符方法与置信传播等图模型工具为自然梯度更新提供有原则的替代；该框架把目标结构转化为优化几何，为 GFlowNets 中结构感知的前向策略训练提供了可行路径。
- 通过比较黎曼与欧几里得优化下的收敛与探索行为的示例实证说明该框架。

## 正文

论文编号：arXiv:2608.03967v1（更新类型：cross）。以下为摘要全文翻译。

生成流网络（GFlowNets）已成为对离散及混合离散—连续对象进行摊销推断的灵活框架，只需通过奖励指定一个未归一化的目标密度。在这项工作中，我们通过诱导轨迹采样器的信息几何来形式化 GFlowNets 中的前向策略训练。把前向策略视为一个诱导轨迹采样器，我们证明其内在一阶几何由轨迹族的 Fisher-Rao 度量给出，且当相应的 Fisher 信息可计算或可准确近似时，相关的自然梯度提供规范的局部更新。我们推导出轨迹 Fisher 的精确分解为每步条件二阶矩，这阐明了何时时间分数交互消失、何时在共享参数化下仍存在稠密耦合。这引向三种计算场景：可处理的精确 Fisher 信息设置、期望 Fisher 的蒙特卡洛估计足够的设置，以及目标局部性或因子化能为 Fisher 期望提供准确近似的结构可利用设置。在后一种情况下，精确边缘化、分隔符方法和置信传播等图模型工具为自然梯度更新提供有原则的替代。由此产生的框架把目标结构转化为优化几何，并为 GFlowNets 中结构感知的前向策略训练提供一条可处理的路径。我们通过比较黎曼与欧几里得优化下收敛与探索行为的示例，实证说明了该框架。

## 关键词

#GFlowNets #信息几何 #Fisher-Rao度量 #自然梯度 #生成流网络
