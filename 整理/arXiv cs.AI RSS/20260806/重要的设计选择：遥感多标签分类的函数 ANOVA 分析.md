---
published: 20260806
title: "重要的设计选择：遥感多标签分类的函数 ANOVA 分析"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Design Choices That Matter- A Functional ANOVA Analysis for Remote Sensing Multi-Label Classificatio.md"
source_note: "[[信息源/arXiv cs.AI RSS/Design Choices That Matter- A Functional ANOVA Analysis for Remote Sensing Multi-Label Classificatio]]"
source_sha256: 3d2bc5abdbc664b0862e846d10618137e3f51ca196b0055e1b6f3e15cc06573c
original_url: "https://arxiv.org/abs/2608.04702"
processed: 2026-08-06
language: zh-CN

---

# 重要的设计选择：遥感多标签分类的函数 ANOVA 分析

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Maryam Gholami Shiri, Eva Tuba, Sa\v{s}o D\v{z}eroski, Tome Eftimov, Ana Nikolikj
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04702)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Design Choices That Matter- A Functional ANOVA Analysis for Remote Sensing Multi-Label Classificatio|查看原始文件]]

## 摘要

- 遥感图像（RSI）多标签分类（MLC）深度学习（DL）模型的基准测试通常产生不泛化到评估数据集之外的排名；本文通过函数方差分析（fANOVA）超越排名，系统量化个体设计选择及其交互对性能变异的贡献。
- 进行两个经验分析，分别覆盖 48 和 20 个 DL 模型，涵盖网络架构、微调策略、学习策略和初始化等设计选择；在七个 MLC RSI 数据集上应用 fANOVA，构建捕捉设计选择敏感性画像的数据集元表示。
- 这些元表示的层次聚类揭示数据集按其设计决策响应方式自然分组，模式与尺度、空间分辨率和标签空间复杂度等内在数据集属性强关联；大规模数据集上微调策略和架构是主导因素，数据有限时初始化变得决定性。

## 正文

遥感图像（RSI）多标签分类（MLC）深度学习（DL）模型的基准测试通常产生不泛化到评估数据集之外的排名。在本工作中，我们通过函数方差分析（fANOVA）超越排名，系统量化个体设计选择及其交互对性能变异的贡献。我们进行两个经验分析，分别覆盖 48 和 20 个 DL 模型，涵盖网络架构、微调策略、学习策略和初始化等设计选择。通过在七个 MLC RSI 数据集上应用 fANOVA，我们构建捕捉设计选择敏感性画像的数据集元表示。这些元表示的层次聚类揭示，数据集按其设计决策响应方式自然分组，模式与尺度、空间分辨率和标签空间复杂度等内在数据集属性强关联。我们的发现表明，大规模数据集上微调策略和架构是主导因素，而数据有限时初始化变得决定性。对于中间状态，架构与学习策略的交互支配性能。

## 关键词

#遥感 #多标签分类 #函数ANOVA #设计选择 #arXiv