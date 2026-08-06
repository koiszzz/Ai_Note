---
published: 2026-08-05
title: "x 预测即所需：经端点可解码性实现免训练加速生成"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/x-Prediction Is All You Need-Training-Free Accelerated Generation via Endpoint Decodability.md"
source_note: "[[信息源/arXiv cs.AI RSS/x-Prediction Is All You Need-Training-Free Accelerated Generation via Endpoint Decodability]]"
source_sha256: 764ec5f471cfe5c198e960a4290ae62fdb7825e0101b911184e7e99616ae36a6
original_url: "https://arxiv.org/abs/2607.06114"
processed: 2026-08-05
language: zh-CN
---

# x 预测即所需：经端点可解码性实现免训练加速生成

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xin Peng、Ang Gao
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.06114)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/x-Prediction Is All You Need-Training-Free Accelerated Generation via Endpoint Decodability|查看原始文件]]

## 摘要

- 基于 x 预测研究不同路径：采样期间标准仿射概率路径已暴露 x₀ 信息——中间状态与其路径速度决定干净样本的原则性估计；把该性质形式化为端点可解码性，并表明解码器是通常 ℓ₂ 目标下的最小 MSE 估计器 E[x₀|x_t]。
- 由此产生截断跳跃采样（TJS）：在早退时间 t* 停止 ODE 并返回解码的 x₀——无需重训练、蒸馏或架构变化。
- 扩散与流匹配模型生成高质量样本，但 ODE 采样器常需数十到数百次神经函数评估（NFE）；这对已发布检查点仍是实际挑战，因为许多加速器需经重训练、蒸馏或轨迹重设计的额外设计选择与训练成本。
- SDXL、SD3.5M、Z-Image-Turbo 与三个类别条件基准上，TJS 以近匹配质量减少 20–70% NFE；分析还说明端点预测为何无需拉直轨迹即可工作，提供无轨迹重设计的推理加速。

## 正文

论文编号：arXiv:2607.06114v4（更新类型：replace-cross）。以下为摘要全文翻译。

扩散与流匹配模型生成高质量样本，但它们的 ODE 采样器往往需要数十到数百次神经函数评估（NFE）。这对已发布的检查点仍是一个实际挑战，因为许多加速器通过重训练、蒸馏或轨迹重设计需要额外的设计选择与训练成本。我们研究一条基于 x 预测的不同路线。在采样期间，标准仿射概率路径已经暴露 x₀ 信息：一个中间状态与其路径速度决定干净样本的原则性估计。我们把这个性质形式化为端点可解码性（endpoint decodability），并表明解码器是通常 ℓ₂ 目标下的最小 MSE 估计器 E[x₀|x_t]。这产生截断跳跃采样（Truncated Jump Sampling，TJS）：在早退时间 t* 停止 ODE，并返回解码的 x₀。TJS 无需重训练、蒸馏或架构变化。在 SDXL、SD3.5M、Z-Image-Turbo 与三个类别条件基准上，TJS 以近匹配的质量减少 20–70% 的 NFE。该分析还说明端点预测为何可以在不拉直轨迹的情况下工作，提供无需轨迹重设计的推理加速。

## 关键词

#扩散模型 #流匹配 #推理加速 #免训练
