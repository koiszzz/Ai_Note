---
published: 2026-08-07
title: "Kastor：PDE 仿真生成式模拟的高效微调策略"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Kastor- An efficient fine-tuning strategy for generative emulation of PDE simulations.md"
source_note: "[[信息源/arXiv cs.LG RSS/Kastor- An efficient fine-tuning strategy for generative emulation of PDE simulations]]"
source_sha256: 843e5266a87e09e27ac85e8939753c51c85844c8b3e06697b01d8d60cce515ea
original_url: "https://arxiv.org/abs/2608.06107"
processed: 2026-08-07
language: zh-CN
---

# Kastor：PDE 仿真生成式模拟的高效微调策略

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Guillaume Couairon, Alexis Jacq, Yu-Han Wu, Renu Singh, Yana Hasson, Quentin Berthet, Romuald Elie
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06107)

## 摘要

- 机器学习有望用快速可微替代模型替换昂贵传统 PDE 求解器加速物理仿真，但标准自回归 ML 模拟器常受长时程误差累积并难以捕捉复杂物理系统的随机性。
- 提出 Kastor：将确定性物理基础模型适配为高效准确生成式替代模型的综合方法论。引入两阶段推理方案：大步长因果自回归模型与非因果时间超分辨网络结合，显著减少误差累积同时最小化计算成本。
- 提出均值预测正则化（MPR）：新训练目标约束生成模型在零噪声条件下预测确定性分布均值，大幅改善功能生成网络（FGN）与扩散模拟器的性能与稳定性。
- 空间梯度匹配提升仿真的精度与物理保真度（按功率谱密度测量）；The Well 基准上预测精度平均降低 42.9%（相对 Walrus 微调方法），8/10 数据集 VRMSE 优于 Walrus。

## 正文

机器学习为加速物理仿真提供有前景的途径：用快速、可微的替代模型替换计算昂贵的传统偏微分方程（PDE）求解器。然而，标准自回归 ML 模拟器常遭受长时程误差累积，并难以捕捉复杂物理系统的随机性。本文提出 Kastor，一个将确定性物理基础模型适配为高效且准确的生成式替代模型的综合方法论。首先，研究引入两阶段推理方案：结合大步长因果自回归模型与非因果时间超分辨网络，显著减少误差累积同时最小化计算成本。其次，研究提出均值预测正则化（Mean prediction regularization, MPR），一种新颖训练目标：约束生成模型在零噪声条件下预测确定性分布的均值。该正则化大幅改善功能生成网络（FGN）与基于扩散的模拟器的性能与稳定性。最后，研究证明纳入空间梯度匹配可提升仿真的精度与物理保真度（按功率谱密度测量）。在 The Well 基准的多样仿真数据集上的广泛评估表明，这些组件使模型在预测精度、谱一致性与计算效率上超越竞争方法。模型相对基于 Walrus 微调方法的参考实现平均降低 42.9% 的预测误差，并在 10 个数据集的 8 个上于方差归一化 RMSE（VRMSE）上优于 Walrus。

## 关键词

PDE 模拟、生成式模拟、扩散模型、微调、物理基础模型
