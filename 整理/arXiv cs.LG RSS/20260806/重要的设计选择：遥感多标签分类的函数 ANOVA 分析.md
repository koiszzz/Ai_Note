---
published: 2026-08-06
title: 重要的设计选择：遥感多标签分类的函数 ANOVA 分析
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Design Choices That Matter- A Functional ANOVA Analysis for Remote Sensing Multi-Label Classificatio.md
source_note: "[[信息源/arXiv cs.LG RSS/Design Choices That Matter- A Functional ANOVA Analysis for Remote Sensing Multi-Label Classificatio]]"
source_sha256: fa15732a49ac701518b84e01d6c696f0d8e3c9aa6b3e67fda7035616bb5da986
original_url: https://arxiv.org/abs/2608.04702
processed: 2026-08-07
language: zh-CN
---

# 重要的设计选择：遥感多标签分类的函数 ANOVA 分析

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04702)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Design Choices That Matter- A Functional ANOVA Analysis for Remote Sensing Multi-Label Classificatio|查看原始文件]]

## 摘要

- 用函数方差分析（fANOVA）量化设计选择及其交互对性能变异性的贡献
- 两项实证分析分别涵盖 48 个与 20 个 DL 模型
- 数据集元表征的层次聚类揭示数据按对设计决策的响应方式自然分组
- 大规模数据微调策略与架构主导；数据受限时初始化决定性；中等场景架构与学习策略交互主导

## 正文

对遥感图像（RSI）多标签分类（MLC）的深度学习（DL）模型进行基准测试，通常会得到无法泛化到所评估数据集之外的排名。在这项工作中，我们超越排名，采用函数方差分析（fANOVA）来系统量化各个设计选择及其相互作用对性能变异性的贡献。

我们进行了两项实证分析，分别涵盖 48 个和 20 个 DL 模型，涉及网络架构、微调策略、学习策略与初始化等设计选择。通过在七个 MLC RSI 数据集上应用 fANOVA，我们构建了捕捉设计选择敏感性画像的数据集元表征。

这些元表征的层次聚类表明，数据集根据其对设计决策的响应方式自然分组，这些模式与数据集的内在属性（如规模、空间分辨率与标签空间复杂度）密切相关。

我们的发现表明，对于大规模数据集，微调策略与架构是主导因素；而在数据受限的场景下，初始化变得具有决定性；对于中等场景，架构与学习策略之间的相互作用主导着性能。

## 关键词

#遥感图像 #多标签分类 #fANOVA #深度学习 #基准测试
