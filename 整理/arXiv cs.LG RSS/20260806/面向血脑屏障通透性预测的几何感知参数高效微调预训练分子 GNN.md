---
published: 2026-08-06
title: "面向血脑屏障通透性预测的几何感知参数高效微调预训练分子 GNN"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Geometry-Informed Parameter-Efficient Fine-Tuning of Pre-trained Molecular GNNs for Blood-Brain Barr.md"
source_note: "[[信息源/arXiv cs.LG RSS/Geometry-Informed Parameter-Efficient Fine-Tuning of Pre-trained Molecular GNNs for Blood-Brain Barr|查看原始文件]]"
source_sha256: bae1b77fd41163c497f8487b0dd03fb5263fce74de879fb9dac57e2682aaf06c
original_url: https://arxiv.org/abs/2608.04257
processed: 2026-08-07
language: zh-CN
---

# 面向血脑屏障通透性预测的几何感知参数高效微调预训练分子 GNN

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04257)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Geometry-Informed Parameter-Efficient Fine-Tuning of Pre-trained Molecular GNNs for Blood-Brain Barr|查看原始文件]]

## 摘要

- 血脑屏障通透性（BBBP）预测是中枢神经系统药物发现中的关键筛选任务，但由于数据集有限、类别不平衡且对分子结构敏感，该任务仍具挑战性。
- 图神经网络（GNN）已成为分子表示学习的强大方法，预训练分子 GNN 为下游任务提供可迁移知识；但全量微调通常参数效率低下且易过拟合，现有 PEFT 方法主要适配节点特征或二维共价图，难以捕获三维几何与二阶相互作用。
- 本文提出 BBBP-GeoPEFT，一个面向预训练分子 GNN 的几何感知 PEFT 框架：从分子构象构造多个截断距离下的距离图和对应的线图，以捕获空间原子与二阶边相互作用；轻量辅助几何图编码器生成截断特定的表示，通过节点级截断注意力与门控残差连接融入每个预训练层。
- 该设计在保留预训练知识的同时，以很小的可训练参数预算纳入与通透性相关的几何信息；在整理后的 BBBP 数据集上，BBBP-GeoPEFT 与全量微调和代表性 PEFT 基线表现相当，在随机与骨架划分下大多数实验中取得相当或更优的 ROC-AUC 与准确率，且仅更新 10.1% 的模型参数。

## 正文

血脑屏障通透性（BBBP）预测是中枢神经系统药物发现中的关键筛选任务，候选分子必须被评估是否能穿过血脑屏障，或是否应被阻止穿过血脑屏障。然而，由于数据集有限、类别不平衡以及对分子结构敏感，该任务仍然充满挑战。深度学习的近期进展确立了图神经网络（GNN）作为分子表示学习的强大方法，而预训练的分子 GNN 为下游任务提供了可迁移的知识。然而，全量微调往往参数效率低下且容易过拟合，而现有的参数高效微调（PEFT）方法主要适配节点特征或二维共价图，限制了他们捕获三维几何和二阶相互作用的能力。为克服这些局限，我们提出了 BBBP-GeoPEFT，一个面向预训练分子 GNN 的几何感知 PEFT 框架。BBBP-GeoPEFT 从分子构象构造多个截断距离下的距离图及其对应的线图，以捕获空间原子相互作用和二阶边相互作用。轻量辅助几何图编码器生成截断特定的表示，并通过节点级截断注意力和门控残差连接将其纳入每个预训练层。这种设计在保留预训练知识的同时，以很小的可训练参数预算纳入与通透性相关的几何信息。在整理后的 BBBP 数据集上的实验表明，BBBP-GeoPEFT 与全量微调和代表性 PEFT 基线相比取得了具有竞争力的性能。在随机划分和骨架（scaffold）划分下，BBBP-GeoPEFT 在大多数实验中取得相当或更优的 ROC-AUC 和准确率，同时仅更新 10.1% 的模型参数。

## 关键词

#药物发现 #图神经网络 #参数高效微调 #分子表示学习
