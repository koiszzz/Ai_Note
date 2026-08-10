---
published: 2026-08-07
title: "SafeDivertor：通过时频先验利用从宏观等离子体状态信号忠实重建偏滤器热通量"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SafeDivertor- Faithful Divertor Heat Flux Reconstruction from Macroscopic Plasma State Signals via T.md"
source_note: "[[信息源/arXiv cs.AI RSS/SafeDivertor- Faithful Divertor Heat Flux Reconstruction from Macroscopic Plasma State Signals via T]]"
source_sha256: 0b368b5bf528c132fb5e33a8b1bc46bbabe2e7b0595cf47c6ba7fc7da32992f5
original_url: "https://arxiv.org/abs/2608.05669"
processed: 2026-08-07
language: zh-CN
---

# SafeDivertor：通过时频先验利用从宏观等离子体状态信号忠实重建偏滤器热通量

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hao Si, Zehua Chen, Qingquan Yang, Xiao Wang, Dengdi Sun, Wanli Lyu, Gaoting Chen, Guosheng Xu, Hang Su, Jin Tang, Jun Zhu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05669)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SafeDivertor- Faithful Divertor Heat Flux Reconstruction from Macroscopic Plasma State Signals via Time-Freq|查看原始文件]]

## 摘要

- 偏滤器热通量分析对理解磁约束聚变装置中等离子体-壁相互作用与保护面向等离子体部件至关重要，而传统基于红外的反演通常在放电后进行，需要设备特定材料属性、偏滤器几何与边界条件的热传导建模。
- 论文不加速该传统红外反演范式，引入新的面向在线的基于信号重建范式：直接从放电期间可用的多源宏观等离子体状态信号重建时间分辨径向热通量分布。
- 构建 DivMPS2HF 多源放电数据集，提供基于信号偏滤器热通量重建的数据基础与基准；提出 SafeDivertor 任务驱动框架：物理先验感知初始化提供目标通道径向分布引导，输入扰动减少对特定异构信号的过度依赖，频谱感知重建优化利用时频先验并保留瞬态动态，渐进训练稳定这些互补目标的优化。
- DivMPS2HF 实验表明 SafeDivertor 在所有五个指标上取得评估时序基线中最佳总体性能，为基于信号的偏滤器热通量重建建立新性能基准。

## 正文

偏滤器热通量分析对理解磁约束聚变装置中等离子体-壁相互作用与保护面向等离子体部件至关重要，而传统基于红外的反演通常在放电后进行，需要带设备特定材料属性、偏滤器几何与边界条件的热传导建模。我们不加速这一传统红外反演范式，而是引入一个新的面向在线的基于信号重建范式：直接从放电期间可用的多源宏观等离子体状态信号重建时间分辨的径向热通量分布。为系统研究该任务，我们构建 DivMPS2HF，一个多源放电数据集，为基于信号的偏滤器热通量重建提供数据基础与基准。我们进一步提出 SafeDivertor，一个任务驱动框架，应对基于信号热通量重建的关键挑战。它采用物理先验感知初始化为目标通道提供径向分布引导，输入扰动以减少对特定异构信号的过度依赖，频谱感知重建优化以利用时频先验并保留瞬态动态，以及渐进训练以稳定这些互补目标的优化。在 DivMPS2HF 上的实验表明，SafeDivertor 在所有五个指标上取得被评估时序基线中的最佳总体性能，为基于信号的偏滤器热通量重建建立新的性能基准。源代码将在 https://github.com/Event-AHU/OpenFusion 发布。

## 关键词

#聚变 #偏滤器热通量 #时频先验 #重建
