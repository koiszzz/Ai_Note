---
title: "PRISMA：用物理信息谱注意力改进基于扩散的 PDE 求解器的准确率—延迟前沿"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/PRISMA- Improving the Accuracy-Latency Frontier of Diffusion-based PDE Solvers Using Physics-Informe.md"
source_note: "[[信息源/arXiv cs.LG RSS/PRISMA- Improving the Accuracy-Latency Frontier of Diffusion-based PDE Solvers Using Physics-Informe.]]"
source_sha256: c861f5e20976f6549987d33ae0f2ad05988f920021328404fa2e4716338cabad
original_url: "https://arxiv.org/abs/2512.01370"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# PRISMA：用物理信息谱注意力改进基于扩散的 PDE 求解器的准确率—延迟前沿

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Medha Sawhney、Abhilash Neog、Mridul Khurana、Anuj Karpatne
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.01370)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/PRISMA- Improving the Accuracy-Latency Frontier of Diffusion-based PDE Solvers Using Physics-Informe.|查看原始文件]]

## 摘要

- 基于扩散的偏微分方程（PDE）求解器常被缓慢的基于梯度的测试时优化例程（用 PDE 残差做损失引导）拖累；此外它们遭受优化不稳定性，无法在含噪 PDE 残差下动态调整推理方案。
- 引入 PRISMA（PDE 残差信息谱调制注意力），一个条件扩散神经算子：通过谱域中注意力启发的调制机制把 PDE 残差直接嵌入模型架构，实现无梯度下降推理。
- 与先前仅把 PDE 损失作为外部优化目标的方法不同，PRISMA 把 PDE 残差作为整体架构特征整合，本质上快速、鲁棒、准确且无需敏感超参调优。
- 在五个基准 PDE 上（尤其含噪观测下）表明 PRISMA 以大幅更低的推理成本取得竞争准确率，去噪步数少 10–100 倍，推理快 15–250 倍。

## 正文

论文编号：arXiv:2512.01370v2（更新类型：replace）。以下为摘要全文翻译。

基于扩散的偏微分方程（PDE）求解器常常受制于使用 PDE 残差进行损失引导的缓慢基于梯度测试时优化例程。它们还遭受优化不稳定，并且无法在存在含噪 PDE 残差时动态调整其推理方案。为应对这些局限，我们引入 PRISMA（PDE Residual Informed Spectral Modulation with Attention，PDE 残差信息谱调制注意力），一个条件扩散神经算子，通过谱域中注意力启发的调制机制把 PDE 残差直接嵌入模型架构，实现无梯度下降的推理。与先前把 PDE 损失仅作为外部优化目标的方法不同，PRISMA 把 PDE 残差整合为整体架构特征，使其本质上快速、鲁棒、准确，且无需敏感的超参数调优。我们表明，在五个基准 PDE 上，尤其含噪观测下，PRISMA 以大幅更低的推理成本取得竞争的准确率，同时去噪步数少 10 倍到 100 倍，导致推理快 15 倍到 250 倍。

## 关键词

#扩散模型 #神经算子 #PDE求解 #谱注意力 #物理信息
