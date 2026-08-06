---
published: 2026-08-05
title: "PRISMA：用物理信息谱注意力改进基于扩散的 PDE 求解器的准确率-延迟前沿"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PRISMA- Improving the Accuracy-Latency Frontier of Diffusion-based PDE Solvers Using Physics-Informe.md"
source_note: "[[信息源/arXiv cs.AI RSS/PRISMA- Improving the Accuracy-Latency Frontier of Diffusion-based PDE Solvers Using Physics-Informe]]"
source_sha256: 7bc53c1bda4244a8e070758b20611b29534a04c676f6b0a0eeddb06e4431ed8b
original_url: "https://arxiv.org/abs/2512.01370"
processed: 2026-08-05
language: zh-CN
---

# PRISMA：用物理信息谱注意力改进基于扩散的 PDE 求解器的准确率-延迟前沿

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Medha Sawhney、Abhilash Neog、Mridul Khurana 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.01370)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PRISMA- Improving the Accuracy-Latency Frontier of Diffusion-based PDE Solvers Using Physics-Informe|查看原始文件]]

## 摘要

- 提出 PRISMA（带注意力的 PDE 残差信息谱调制），条件扩散神经算子：通过谱域的注意力启发调制机制把 PDE 残差直接嵌入模型架构，实现无梯度下降推理。
- 与把 PDE 损失仅作为外部优化目标的先前方法不同，PRISMA 把 PDE 残差整合为架构的组成部分，天然快速、稳健、准确且无需敏感超参数调优。
- 基于扩散的 PDE 求解器常被缓慢的基于梯度的测试时优化例程（用 PDE 残差做损失引导）瓶颈化，还遭受优化不稳定性，且无法在带噪 PDE 残差下动态适配推理方案。
- 五个基准 PDE 上（尤其带噪观测下），PRISMA 在显著更低推理成本下取得竞争准确率，使用少 10–100 倍的去噪步，推理快 15–250 倍。

## 正文

论文编号：arXiv:2512.01370v2（更新类型：replace-cross）。以下为摘要全文翻译。

基于扩散的偏微分方程（PDE）求解器常被缓慢的基于梯度的测试时优化例程瓶颈化，这些例程使用 PDE 残差进行损失引导。它们还遭受优化不稳定性，并且在带噪 PDE 残差存在时无法动态适配其推理方案。为克服这些局限，我们引入 PRISMA（PDE Residual Informed Spectral Modulation with Attention，带注意力的 PDE 残差信息谱调制），一个条件扩散神经算子：通过谱域的注意力启发调制机制把 PDE 残差直接嵌入模型架构，实现无梯度下降的推理。与把 PDE 损失仅作为外部优化目标的先前方法不同，PRISMA 把 PDE 残差整合为架构的组成部分，使它天然快速、稳健、准确且无需敏感的超参数调优。我们表明，在五个基准 PDE 上（尤其带噪观测下），PRISMA 以显著更低的推理成本取得竞争准确率，使用少 10–100 倍的去噪步骤，实现快 15–250 倍的推理。

## 关键词

#偏微分方程 #扩散模型 #物理信息 #神经算子
