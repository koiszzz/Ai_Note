---
published: 20260806
title: "HyPASE：大型音频-语言模型语音情感微调的参数高效双曲几何框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HyPASE- Hyperbolic Geometry for Parameter-Efficient Speech Emotion Fine-Tuning Framework for Large A.md"
source_note: "[[信息源/arXiv cs.AI RSS/HyPASE- Hyperbolic Geometry for Parameter-Efficient Speech Emotion Fine-Tuning Framework for Large A]]"
source_sha256: da942d180a3b4cd24fca7fee5d9ad07ed1971e2ef56eddda06744d53a73a4ee1
original_url: "https://arxiv.org/abs/2608.04351"
processed: 2026-08-06
language: zh-CN

---

# HyPASE：大型音频-语言模型语音情感微调的参数高效双曲几何框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Tian Jin, Ruikang Zhang, Zefeng Zhao, Ding Luo, Jin Zeng
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04351)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HyPASE- Hyperbolic Geometry for Parameter-Efficient Speech Emotion Fine-Tuning Framework for Large A|查看原始文件]]

## 摘要

- 大型音频-语言模型（LALM）在一般语音理解上表现出色，但将其适应语音情感识别（SER）等细粒度任务仍是显著瓶颈；当前参数高效微调（PEFT）方法通常在平坦欧氏空间运作，此几何无法捕捉从低层韵律到高层语义的情感线索多粒度性质。
- 本文提出 HyPASE，一个用于基于 LALM 的 SER 的双曲 PEFT 框架：利用庞加莱球模型，用双曲半径作为表示粒度的显式代理；框架包含两个核心组件：双曲几何适配器（HGA）用于层自适应权重调制，情感感知多容量跨模态聚合器（EMCA）将多尺度特征压缩为紧凑音频前缀。
- 标准基准实证结果显示 HyPASE 在 MELD 所有指标上优于欧氏 PEFT 基线，IEMOCAP 上达显著未加权准确率增益（尤其类别不平衡情感识别），并在受限参数预算内实现稳健零样本跨数据集泛化。

## 正文

大型音频-语言模型（LALM）在一般语音理解上表现出色；然而，将它们适应语音情感识别（SER）等细粒度任务仍是显著瓶颈。当前参数高效微调（PEFT）方法通常在平坦欧氏空间运作，而此几何无法捕捉从低层韵律到高层语义的情感线索多粒度性质。为解决此问题，我们提出 HyPASE，一个用于基于 LALM 的 SER 的双曲 PEFT 框架。HyPASE 利用庞加莱球（Poincaré ball）模型，用双曲半径作为表示粒度的显式代理。框架包含两个核心组件：用于层自适应权重调制的双曲几何适配器（Hyperbolic Geometric Adapter，HGA），以及将多尺度特征压缩为紧凑音频前缀的情感感知多容量跨模态聚合器（Emotion-aware Multi-capacity Cross-modal Aggregator，EMCA）。标准基准上的实证结果表明，HyPASE 在 MELD 所有指标上优于欧氏 PEFT 基线，并在 IEMOCAP 上实现显著的未加权准确率（UA）增益，尤其在类别不平衡情感识别中，伴随的轻微加权准确率（WA）权衡反映双曲空间对少数类表示的几何优先；此外，HyPASE 在受限参数预算内实现稳健的零样本跨数据集泛化。通过将适应过程锚定在双曲几何中，HyPASE 为 LALM 微调提供高效路径。

## 关键词

#语音情感识别 #双曲几何 #参数高效微调 #音频语言模型 #arXiv