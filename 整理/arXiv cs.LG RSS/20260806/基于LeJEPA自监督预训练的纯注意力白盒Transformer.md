---
published: 2026-08-06
title: 基于LeJEPA自监督预训练的纯注意力白盒Transformer
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Attention-Only White-Box Transformer via LeJEPA-Based Self-Supervised Pretraining.md
source_note: "[[信息源/arXiv cs.LG RSS/Attention-Only White-Box Transformer via LeJEPA-Based Self-Supervised Pretraining]]"
source_sha256: 93bb366ea3a1ad4e5f4a601638026000f2f56889582ec8380eb56013f646a625
original_url: https://arxiv.org/abs/2608.04213
processed: 2026-08-07
language: zh-CN
---

# 基于LeJEPA自监督预训练的纯注意力白盒Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04213)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Attention-Only White-Box Transformer via LeJEPA-Based Self-Supervised Pretraining|查看原始文件]]

## 摘要

- 从联合视角将 LeJEPA 自监督框架与白盒 Transformer 优化结合：用 LeJEPA 优化稀疏率缩减目标中的扩张项 $R(Z)$，其余项经 ADMM 推导为纯注意力 Transformer。
- 纯注意力白盒模型在 CIFAR-10 / CIFAR-100 上取得 88.88% / 63.54% 的准确率，与原始 CRATE 相当，参数量减少约 31%。
- 标准 ViT 中，知识蒸馏下用 ReLU 替换所有 MLP 块可移除约 66% 参数且保持竞争力，提示 MLP 模块可能存在冗余。

## 正文

现有关于白盒网络自监督学习的研究通常将通过优化算法推导白盒网络与自监督学习范式分开处理。在这项工作中，我们从联合视角重新审视这两个组成部分。

基于 LeJEPA 的自监督框架假设各向同性高斯（isotropic Gaussian）分布是下游任务的最优嵌入分布，这在概念上等价于指导白盒 Transformer 优化的稀疏率缩减（sparse rate reduction）目标中的扩张项 $R(Z)$。基于这一观察，我们使用 LeJEPA 自监督范式来优化 $R(Z)$，并通过交替方向乘子法（alternating direction method of multipliers, ADMM）推导出其余项 $R^{c}(Z\mid U_{[K]})+\lambda\lVert Z\rVert_{0}$，得到一个纯注意力的 Transformer，它省去了原始设计中的 ISTA 结构或 MLP 层。

实验结果表明，在 LeJEPA 自监督范式下，我们的纯注意力白盒 Transformer 在 Base 规模下于 CIFAR-10 上达到 $88.88\%$、于 CIFAR-100 上达到 $63.54\%$ 的分类准确率，而原始白盒 Transformer CRATE 在 CIFAR-10 和 CIFAR-100 上的分类准确率分别为 $89.18\%$ 和 $63.56\%$。我们的模型在取得有竞争力性能的同时，将参数量减少了约 $31\%$。

在白盒设置之外，我们进一步研究了标准 ViT，发现使用 ReLU 激活的知识蒸馏（knowledge distillation）下用 ReLU 替换所有 MLP 块会移除约 66\% 的参数，同时保持有竞争力的准确率，这促使我们进一步研究标准 ViT 架构中 MLP 模块的潜在冗余性。

## 关键词

#白盒Transformer #自监督学习 #LeJEPA #稀疏率缩减 #ViT
