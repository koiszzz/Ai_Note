---
published: 2026-08-06
title: TRCoRSurg：手术视频三元组识别的时序-关系协同推理
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/TRCoRSurg- Temporal-Relational Co-Reasoning for Surgical Video Triplet Recognition.md
source_note: "[[信息源/arXiv cs.CV RSS/TRCoRSurg- Temporal-Relational Co-Reasoning for Surgical Video Triplet Recognition]]"
source_sha256: ceba338214434010fddba18aedd65114e5bbc0b6975ca5a3273693ed4b985735
original_url: https://arxiv.org/abs/2608.04606
processed: 2026-08-07
language: zh-CN
---

# TRCoRSurg：手术视频三元组识别的时序-关系协同推理

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04606)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/TRCoRSurg- Temporal-Relational Co-Reasoning for Surgical Video Triplet Recognition|查看原始文件]]

## 摘要

- 提出统一框架，集成空间、关系与时序线索进行稳健的手术三元组识别：先经多尺度编码器提取类别特定空间先验，再由 MS-CAMRE 标签相关建模模块细化。
- 引入双向时序-关系融合注意力（BTRFA）协调时序与关系表示，实现连贯的时序推理。
- 提出新评估指标三元组一致性错误率（TCER）；在 CholecT45 与 ProstaTD 上 AP_IVT 分别提升 5.1% 和 7.8%，TCER 相对降低超过 36% 和 25%。

## 正文

理解复杂的手术场景需要识别多个相互依赖的实体（如器械、动作和靶组织），并在时间上保持它们的关系一致性。现有手术三元组识别方法难以在统一框架中联合建模帧内标签依赖与帧间时序语义。为解决这些局限，我们提出了一个集成空间、关系与时序线索的统一框架，用于稳健的手术三元组识别。具体而言，首先通过多尺度编码器提取类别特定的空间先验。这些先验随后由带多尺度类激活图引导关系提取的标签相关建模模块（MS-CAMRE）细化，使模型能够捕捉三元组组件间的静态共现模式与动态上下文依赖。此外，双向时序-关系融合注意力（BTRFA）模块协调时序与关系表示，以实现连贯的时序推理。我们还引入了一个新的评估指标——三元组一致性错误率（TCER），定量衡量模型在跨三元组保持因果与语义一致性的能力。在 CholecT45 和 ProstaTD 数据集上的大量实验表明，我们的方法达到最先进性能，AP_IVT 分别提升 5.1 个百分点和 7.8 个百分点。此外，根据 TCER，我们的方法在两个数据集上分别实现了超过 36% 和 25% 的相对降低，证明了我们的框架在时序-关系协同推理中的有效性。

## 关键词

#手术视频 #三元组识别 #时序推理 #关系建模 #注意力机制
