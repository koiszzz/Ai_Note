---
published: 2026-08-06
title: 预训练 Transformer 感知模型的对抗鲁棒溯因融合
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Adversarially Robust Abductive Fusion of Pre-trained Transformer-based Perception Models.md
source_note: "[[信息源/arXiv cs.CV RSS/Adversarially Robust Abductive Fusion of Pre-trained Transformer-based Perception Models|查看原始文件]]"
source_sha256: fa97272348630993521c82de702db08cbc3d6958d79aba3f3f2d5290539fb3f4
original_url: https://arxiv.org/abs/2608.04190
processed: 2026-08-07
language: zh-CN
---

# 预训练 Transformer 感知模型的对抗鲁棒溯因融合

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04190)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Adversarially Robust Abductive Fusion of Pre-trained Transformer-based Perception Models|查看原始文件]]

## 摘要

- 在新环境中部署预训练感知模型在分布偏移下精度下降，单纯集成无法恢复：多数投票等组合器以召回换取精度且对协同失败脆弱
- 先验元认知方法学习标记模型错误的逻辑规则，但依赖手工领域知识线索，无法迁移到全新场景
- 证明可利用向量空间几何免领域知识学习该元认知层：从各模型训练嵌入构建标签向量池（LVP），基于检测几何相对训练原型生成错误检测规则，测试集 F1 与领域知识规则差距仅 0.002
- 将多 ViT 检测器融合表述为一致性溯因问题，测试时用精确整数规划（IP）与多项式启发式求解；在 90% 翻转率下平均 F1 0.42 对 MV-Plurality 的 0.35（相对提升 22%）

## 正文

在全新环境中部署预训练感知模型会因分布偏移而精度下降，而单纯集成并不能恢复精度：多数投票之类的组合器以召回换取精度，并且对协同失败（coordinated failures）很脆弱。先前的元认知方法学习逻辑规则来标记模型的错误，但依赖手工编写的领域知识线索（如物体尺寸先验、分割掩码），这些线索无法迁移到真正新奇的场景。

我们证明，这一元认知层可以在不依赖任何领域知识的情况下，利用向量空间几何来学习：由各模型自身训练嵌入构建的每模型标签向量池（Label Vector Pools，LVP），能够依据检测相对训练确定原型（training-determined prototypes）的几何关系生成错误检测规则，在测试集上达到与领域知识规则相差 $0.002$ F1 以内的性能。由于该方法仍是神经符号的，这些几何规则共享同一逻辑框架，且在可用时仍可辅以领域知识。

我们把多个不完美的基于 ViT 的检测器的融合表述为基于一致性的溯因问题（consistency-based abduction），在测试时通过精确整数规划（IP）和多项式时间启发式求解。在一个包含 15 个天气偏移测试集和 6 个 ViT 检测器的航拍影像基准上，我们免领域知识的层在干净数据上追平了最强的多数投票变体（F1 相差 $0.005$ 以内），并且与每个多数投票基线都不同，它在协同标签翻转攻击下保持了性能：在 90% 翻转率时平均 F1 为 0.42，而 MV-Plurality 为 0.35（相对提升 22%）；一旦翻转率超过 0.4，它在**每一个**测试集上都取得最高的 F1。

## 关键词

#感知融合 #对抗鲁棒性 #元认知 #溯因推理 #ViT
