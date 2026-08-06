---
published: 2026-08-05
title: "DAIF：经近似消息传递的多模态监督学习数据驱动中间融合框架"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DAIF- A Data-Driven Intermediate Fusion Framework for Multimodal Supervised Learning via Approximate.md"
source_note: "[[信息源/arXiv cs.LG RSS/DAIF- A Data-Driven Intermediate Fusion Framework for Multimodal Supervised Learning via Approximate]]"
source_sha256: ecdb5b2bce37c14da7045541bbc79ccbedbdc02bf834a7a48f48a4386223324a
original_url: "https://arxiv.org/abs/2608.02769"
processed: 2026-08-05
language: zh-CN
---

# DAIF：经近似消息传递的多模态监督学习数据驱动中间融合框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Sagnik Nandy、Samriddha Lahiry、Pragya Sur 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02769)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DAIF- A Data-Driven Intermediate Fusion Framework for Multimodal Supervised Learning via Approximate|查看原始文件]]

## 摘要

- 提出 DAIF，数据自适应中间融合框架：结合随机矩阵理论与非参数依赖度量直接从数据学习融合结构——在贝叶斯多模态因子模型下运作（潜因子先验决定跨模态依赖）；方法基于估计模态间依赖聚类模态，再执行聚类式经验贝叶斯先验估计；估计先验用于在近似消息传递（AMP）框架内构造去噪器，产生跨相关模态借力的去噪低维特征，同时保留模态特定信号；所得嵌入用于下游监督预测。
- 多模态监督学习寻求利用多个异构数据源改善预测性能；核心挑战是确定跨模态融合粒度：过度整合放大噪声、整合不足无法利用跨模态依赖；现有方法依赖预指定融合架构（从早融合到晚融合），可能不适配模态间底层依赖结构。
- 通过变化依赖结构与信号机制的仿真评估框架，对照多个基准方法；演示两个多模态数据集（三模态 TEA-seq 数据集与 TCGA-BRCA 数据集）的实用效用——前者预测 T 细胞分化标记蛋白表达水平，后者用多模态信息分析患者生存预测。
- 两个预测问题中方法竞争或优于最先进技术，展示跨多样监督学习任务的通用性。

## 正文

论文编号：arXiv:2608.02769v1（更新类型：cross）。以下为摘要全文翻译。

多模态监督学习寻求利用多个异构数据源来改善预测性能。一个核心挑战是确定跨模态的融合粒度：过度整合可能放大噪声，而整合不足则无法利用跨模态依赖。现有方法依赖预指定的融合架构（从早期到晚期融合），这些架构可能无法适应模态之间的底层依赖结构。我们提出 DAIF，一个数据自适应的中间融合框架：结合随机矩阵理论与非参数依赖度量，直接从数据学习融合结构。我们在一个贝叶斯多模态因子模型下运作，其中潜因子上的先验决定跨模态依赖。我们的方法基于估计的模态间依赖对模态聚类，然后执行聚类式的经验贝叶斯先验估计。这些估计的先验用于在近似消息传递（AMP）框架内构造去噪器，产生去噪的低维特征：跨相关模态借力，同时保留模态特定信号。所得嵌入用于下游监督预测。我们在变化依赖结构与信号机制的仿真下评估该框架，对照多个基准方法，并演示其在两个多模态数据集上的实用效用：一个三模态 TEA-seq 数据集（Swanson 等，2021）与 TCGA-BRCA 数据集（Goldman 等，2020）。第一个例子预测 T 细胞分化标记蛋白的表达水平；第二个案例用多模态信息分析患者生存预测。我们的方法在两个预测问题中竞争或优于最先进技术，展示其跨多样监督学习任务的通用性。

## 关键词

#多模态学习 #中间融合 #近似消息传递 #经验贝叶斯
