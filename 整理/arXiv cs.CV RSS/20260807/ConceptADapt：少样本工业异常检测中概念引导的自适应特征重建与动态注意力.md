---
published: 2026-08-07
title: "ConceptADapt：少样本工业异常检测中概念引导的自适应特征重建与动态注意力"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/ConceptADapt- Concept-guided Adaptive Feature Reconstruction with Dynamic Attention for Few-Shot Ind.md"
source_note: "[[信息源/arXiv cs.CV RSS/ConceptADapt- Concept-guided Adaptive Feature Reconstruction with Dynamic Attention for Few-Shot Ind]]"
source_sha256: d989ad240b3e76162f88264b0dda6f0ba6490b5e0017c6c060155fc187feedd3
original_url: "https://arxiv.org/abs/2608.05743"
processed: 2026-08-07
language: zh-CN
---

# ConceptADapt：少样本工业异常检测中概念引导的自适应特征重建与动态注意力

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yufei Li, Yicheng Ruan, Long Tian, Dongsheng Wang, Liang Bao
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05743)

## 摘要

- 少样本工业异常检测（FS-IAD）聚焦冷启动阶段检测与定位工业检测中的视觉缺陷，每类别仅少量正常训练样本可用；近期进展主要利用基础模型视觉特征并取得有前景性能。
- 尽管基础模型特征表征能力强，正常训练数据极端稀缺使模型泛化仍脆弱；提出 ConceptADapt：概念引导的自适应特征重建模型，带动态注意力。
- 模型从有限支持特征预学习固定正常概念集，利用它们挖掘与查询特征的关系，重校准统计以改进测试时异常检测；为缓解低数据机制下特别严重的特征捷径问题，开发与稀疏自编码器集成的动态注意力机制，训练期间学习稳健正常概念；推理期快速适应经在注意力模块中纳入 LoRA 保持轻量，仅引入最少更新参数。
- 三个广泛采用 FS-IAD 基准（MVTec-AD、VisA、MPDD）大量实验显示模型在检测与定位任务一致超越 SOTA，各 shot 设定下取得显著改进。

## 正文

少样本工业异常检测（few-shot industrial anomaly detection, FS-IAD）聚焦在冷启动阶段检测与定位工业检测中的视觉缺陷，此时每类别仅有限数量的正常训练样本可用。该领域的近期进展主要利用基础模型的视觉特征并取得有前景的性能。尽管基础模型特征具有强表征能力，正常训练数据的极端稀缺使模型泛化仍然脆弱。为解决该关键问题，研究提出 ConceptADapt，一个带动态注意力的概念引导自适应特征重建模型。具体地，模型从有限支持特征预学习一组固定正常概念，并利用它们挖掘与查询特征的关系，从而重校准其统计量以改进测试时异常检测。为缓解低数据机制下尤为严重的特征捷径（feature shortcut）问题，研究进一步开发与稀疏自编码器集成的动态注意力机制，在训练期间学习稳健的正常概念。此外，为在推理期间实现快速适应，模型通过在注意力模块中纳入 LoRA 保持轻量，仅引入最少的更新参数。三个广泛采用的 FS-IAD 基准（MVTec-AD、VisA 与 MPDD）上的大量实验表明，模型在检测与定位任务上一致超越最先进方法，并在各种 shot 设定下取得显著改进。

## 关键词

少样本异常检测、概念引导、特征重建、动态注意力、LoRA
