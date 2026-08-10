---
published: 2026-08-07
title: "SafeDivertor：经时频先验利用从宏观等离子体状态信号忠实重建偏滤器热通量"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/SafeDivertor- Faithful Divertor Heat Flux Reconstruction from Macroscopic Plasma State Signals via T.md"
source_note: "[[信息源/arXiv cs.CV RSS/SafeDivertor- Faithful Divertor Heat Flux Reconstruction from Macroscopic Plasma State Signals via T]]"
source_sha256: 5e6c4431bd4bdd36132d381046c6c954d22eee33d56391791c20f7eb9c79ca5a
original_url: "https://arxiv.org/abs/2608.05669"
processed: 2026-08-07
language: zh-CN
---

# SafeDivertor：经时频先验利用从宏观等离子体状态信号忠实重建偏滤器热通量

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Hao Si, Zehua Chen, Qingquan Yang, Xiao Wang, Dengdi Sun, Wanli Lyu, Gaoting Chen, Guosheng Xu, Hang Su, Jin Tang, Jun Zhu
> - **发布时间**：2026-08-07
> - **分类**：physics.plasm-ph
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05669)

## 摘要

- 偏滤器热通量分析对理解等离子体-壁相互作用与保护磁约束聚变装置等离子体面向组件必不可少，而常规基于红外的反演通常在放电后执行，需要设备特定材料属性、偏滤器几何与边界条件的热传导建模。
- 不加速该常规红外反演范式，引入新的在线导向基于信号重建范式：直接放电期间从多源宏观等离子体状态信号重建时间分辨径向热通量剖面。
- 构建 DivMPS2HF：多源放电数据集，提供基于信号偏滤器热通量重建的数据基础与基准；提出 SafeDivertor：任务驱动框架，应对基于信号热通量重建关键挑战；采用物理先验感知初始化提供目标通道径向分布引导、输入扰动减少对特定异构信号过度依赖、谱感知重建优化利用时频先验保留瞬态动力学、渐进训练稳定互补目标优化。
- DivMPS2HF 实验显示 SafeDivertor 在全部五个指标上取得评估时序基线最佳总体性能，为基于信号偏滤器热通量重建建立新性能基准；源码将发布。

## 正文

偏滤器（divertor）热通量分析对理解等离子体-壁相互作用并保护磁约束聚变装置中的等离子体面向组件必不可少，而常规基于红外的反演通常在放电后执行，并需要带设备特定材料属性、偏滤器几何与边界条件的热传导建模。研究不加速该常规红外反演范式，而是引入一个新的在线导向、基于信号的重建范式：直接在放电期间，从多源宏观等离子体状态信号重建时间分辨的径向热通量剖面。为实现对该任务的系统研究，研究构建 DivMPS2HF，一个多源放电数据集，为基于信号的偏滤器热通量重建提供数据基础与基准。研究进一步提出 SafeDivertor，一个任务驱动框架，旨在应对基于信号热通量重建的关键挑战。它采用物理先验感知初始化（physical prior-aware initialization）为目标通道提供径向分布引导，输入扰动（input perturbation）减少对特定异构信号的过度依赖，谱感知重建优化（spectral-aware reconstruction optimization）利用时频先验并保留瞬态动力学，以及渐进训练（progressive training）稳定这些互补目标的优化。DivMPS2HF 上的实验表明，SafeDivertor 在评估的时序基线中于全部五个指标上取得最佳总体性能，为基于信号的偏滤器热通量重建建立了新的性能基准。源码将发布于 https://github.com/Event-AHU/OpenFusion。

## 关键词

偏滤器、热通量、聚变、信号重建、时频先验
