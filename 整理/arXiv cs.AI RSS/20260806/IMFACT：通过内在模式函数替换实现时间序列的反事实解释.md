---
published: 20260806
title: "IMFACT：通过内在模式函数替换实现时间序列的反事实解释"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/IMFACT- Counterfactual Explanations for Time Series via Intrinsic Mode Function Substitution.md"
source_note: "[[信息源/arXiv cs.AI RSS/IMFACT- Counterfactual Explanations for Time Series via Intrinsic Mode Function Substitution]]"
source_sha256: 16b486cb41bbdd0315d99be1c973877132a55fd5c91e714ef619d81255b6a926
original_url: "https://arxiv.org/abs/2608.04777"
processed: 2026-08-06
language: zh-CN

---

# IMFACT：通过内在模式函数替换实现时间序列的反事实解释

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Udo Schlegel, Julian Rakuschek, Thomas Seidl, Andreas Holzinger, Tobias Schreck, Javier Del Ser
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04777)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/IMFACT- Counterfactual Explanations for Time Series via Intrinsic Mode Function Substitution|查看原始文件]]

## 摘要

- 振动等振荡信号在特定频带携带类别判别信息；在原始特征空间扰动它们进行反事实分析易破坏其时间结构并产生物理上不可信的结果。
- 本文引入 IMFACT（基于 IMF 的反事实），一个模型无关框架，在经验模式分解（EMD）的分解空间为时间序列分类器生成貌似合理的反事实解释：输入信号被分割为内在模式函数（IMF），选定 IMF 渐进替换为最近异类邻居（NUN）的，直至分类器翻转到目标类。
- 评估六种 IMF 选择策略和一种多 NUN 循环扩展于两个 UCR 基准（FaultDetectionA、FruitFlies）：带三个 NUN 的基于方差策略在可靠性和合理性指标上优于两个突出基线技术，而跨三个 NUN 循环在两个数据集产生最佳接近度。

## 正文

振动等振荡信号在特定频带携带类别判别信息；在原始特征空间扰动它们进行反事实分析容易破坏其时间结构，并产生物理上不可信的结果。在本工作中，我们引入 IMFACT（IMF-based counterfACTuals，基于 IMF 的反事实），一个模型无关框架，在经验模式分解（Empirical Mode Decomposition）的分解空间为时间序列分类器生成貌似合理的反事实解释。输入信号被分割为内在模式函数（IMF），选定 IMF 渐进替换为最近异类邻居（Nearest Unlike Neighbour，NUN）的，直至分类器翻转到目标类。我们在两个 UCR 基准（FaultDetectionA、FruitFlies）上评估六种 IMF 选择策略和一种多 NUN 循环扩展。带三个 NUN 的基于方差策略在可靠性和合理性指标上优于两个突出基线技术，而跨三个 NUN 循环在两个数据集上产生最佳接近度。

## 关键词

#反事实解释 #时间序列 #经验模式分解 #可解释性 #arXiv