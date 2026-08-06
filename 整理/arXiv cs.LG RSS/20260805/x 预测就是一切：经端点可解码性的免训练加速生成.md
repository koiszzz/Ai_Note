---
published: 2026-08-05
title: "x 预测就是一切：经端点可解码性的免训练加速生成"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/x-Prediction Is All You Need-Training-Free Accelerated Generation via Endpoint Decodability.md"
source_note: "[[信息源/arXiv cs.LG RSS/x-Prediction Is All You Need-Training-Free Accelerated Generation via Endpoint Decodability.]]"
source_sha256: 6197b22a124737649d573d392a287c58362cf69266ca98521a243ff00774e101
original_url: "https://arxiv.org/abs/2607.06114"
processed: 2026-08-05
language: zh-CN
---

# x 预测就是一切：经端点可解码性的免训练加速生成

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Xin Peng、Ang Gao
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.06114)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/x-Prediction Is All You Need-Training-Free Accelerated Generation via Endpoint Decodability.|查看原始文件]]

## 摘要

- 扩散与流匹配模型生成高质量样本，但它们的 ODE 采样器常需要数十到数百次神经函数评估（NFE）；这对已发布检查点仍是实际挑战，因为许多加速器需要重训练、蒸馏或轨迹重设计带来的额外设计选择与训练成本。
- 研究基于 x 预测的不同路线：采样期间标准仿射概率路径已暴露 x0 信息——中间状态与其路径速度确定干净样本的有原则估计。
- 把该性质形式化为端点可解码性，表明解码器是通常 ℓ2 目标下最小 MSE 估计器 E[x0|xt]。
- 由此得到截断跳跃采样（TJS）：在早退时间 t* 停止 ODE 并返回解码的 x0；TJS 不需要重训练、蒸馏或架构改变。
- 在 SDXL、SD3.5M、Z-Image-Turbo 与三个类别条件基准上，它以近乎匹配的质量减少 20–70% 的 NFE。
- 分析还说明为何端点预测无需拉直轨迹即可工作，提供无需轨迹重设计的推理加速。

## 正文

论文编号：arXiv:2607.06114v4（更新类型：replace）。以下为摘要全文翻译。

扩散与流匹配模型生成高质量样本，但它们的 ODE 采样器常常需要数十到数百次神经函数评估（NFE）。对已发布的检查点，这仍然是一个实际挑战，因为许多加速器需要重训练、蒸馏或轨迹重设计带来的额外设计选择与训练成本。我们研究一条基于 x 预测的不同路线。在采样期间，标准仿射概率路径已经暴露 x0 信息：一个中间状态与其路径速度确定干净样本的一个有原则的估计。我们把这个性质形式化为端点可解码性（endpoint decodability），并表明该解码器是通常 ℓ2 目标下的最小 MSE 估计器 E[x0|xt]。这产生截断跳跃采样（Truncated Jump Sampling，TJS）：在早退时间 t* 停止 ODE，并返回解码的 x0。TJS 不需要重训练、蒸馏或架构改变。在 SDXL、SD3.5M、Z-Image-Turbo 与三个类别条件基准上，它以近乎匹配的质量减少 20–70% 的 NFE。该分析还说明了为何端点预测可以在不拉直轨迹的情况下工作，提供无需轨迹重设计的推理加速。

## 关键词

#扩散模型 #流匹配 #加速采样 #端点预测 #免训练
