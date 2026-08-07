---
published: 2026-08-06
title: DASyR-LLM：基于大语言模型的领域感知符号回归用于动力学模型发现
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/DASyR-LLM- Domain-Aware Symbolic Regression with LLMs for Kinetic Model Discovery.md
source_note: "[[信息源/arXiv cs.LG RSS/DASyR-LLM- Domain-Aware Symbolic Regression with LLMs for Kinetic Model Discovery]]"
source_sha256: bc2ef41338e6ff22a06fba379ef6333e536384dfb9e1af8ec7d4ce8a55736375
original_url: https://arxiv.org/abs/2608.05120
processed: 2026-08-07
language: zh-CN
---

# DASyR-LLM：基于大语言模型的领域感知符号回归用于动力学模型发现

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05120)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DASyR-LLM- Domain-Aware Symbolic Regression with LLMs for Kinetic Model Discovery|查看原始文件]]

## 摘要

- 提出 LLM 引导的符号回归框架，在迭代式 SR 算法中嵌入 LLM 模块用于自动化动力学模型发现
- LLM 每轮承担双重角色：定性物理化学评述与候选速率表达式提议
- 相比最先进 SR 框架，识别真实模型的迭代次数减少 41.7%–79.3%，过半运行中 LLM 直接提出正确结构
- 独立验证集预测性能相当（所有案例 `R^2 > 0.98`），缩小规模 LLM 仍基本保留发现效率

## 正文

动力学模型发现是化学工程中的核心挑战，因为准确的速率表达式对于理解和控制化学与生物过程至关重要。符号回归（SR）已成为识别可解释动力学模型的一种强大的数据驱动方法，但它通常在没有领域知识的情况下运行，经常探索物理化学上不可行的模型。大语言模型（LLM）为向该搜索中注入领域专业知识提供了一条有前景的途径。

在此，我们提出一种 LLM 引导的 SR 框架，在迭代式 SR 算法中嵌入一个 LLM 模块，用于自动化动力学模型发现。LLM 在每次迭代中扮演两个角色：（1）对最佳 SR 候选进行定性的物理化学评述；（2）在 SR 生成模型与内嵌化学知识的引导下提出新的候选速率表达式。

我们的框架在四个复杂度递增的 in silico 案例研究中进行了评估，涵盖多相催化与生物过程系统。结果表明，与最先进的 SR 框架相比，LLM 引导的框架将识别真实模型的迭代次数减少了 41.7%–79.3%，且在超过一半的引导运行中 LLM 直接提出了正确的模型结构。在实际场景中，每次迭代通常需要一次新的湿实验，这转化为实验工作量的大幅减少。

两种方法在独立验证集上的预测性能相当，所有案例研究中 `R^2 > 0.98`。消融研究表明，SR 组件与 LLM 规模都对此性能有贡献，其中缩小规模的 LLM 在很大程度上保留了发现效率。这些发现表明，LLM 可以有效地将领域知识注入科学模型发现，为完全自动化的领域感知动力学建模流水线铺平道路。

## 关键词

#符号回归 #大语言模型 #动力学模型发现 #化学工程 #科学发现
