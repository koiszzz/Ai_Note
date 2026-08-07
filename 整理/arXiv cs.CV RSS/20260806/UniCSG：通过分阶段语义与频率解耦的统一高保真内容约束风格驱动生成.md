---
published: 2026-08-06
title: UniCSG：通过分阶段语义与频率解耦的统一高保真内容约束风格驱动生成
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/UniCSG- Unified High-Fidelity Content-Constrained Style-Driven Generation via Staged Semantic and Fr.md
source_note: "[[信息源/arXiv cs.CV RSS/UniCSG- Unified High-Fidelity Content-Constrained Style-Driven Generation via Staged Semantic and Fr]]"
source_sha256: 2b3529f3297fc3cf219273ab5a0484ac3e165ec04175ebee9848953f0aa87d16
original_url: https://arxiv.org/abs/2604.17850
processed: 2026-08-07
language: zh-CN
---

# UniCSG：通过分阶段语义与频率解耦的统一高保真内容约束风格驱动生成

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.17850)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/UniCSG- Unified High-Fidelity Content-Constrained Style-Driven Generation via Staged Semantic and Fr|查看原始文件]]

## 摘要

- 提出 UniCSG，一个统一框架，在文本引导和参考引导两种设置下进行内容约束、风格驱动的生成。
- 采用分阶段训练：潜在空间语义解耦阶段（低频预处理 + 条件破坏）与潜在空间频率感知细节重建阶段（多尺度频率监督）。
- 引入像素空间奖励学习，使潜在目标与解码后的感知质量对齐。
- 实验表明在内容保真度、风格对齐和鲁棒性方面均有提升。

## 正文

风格迁移必须在匹配目标风格的同时保持内容语义。基于 DiT 的扩散模型往往面临内容与风格纠缠的问题，导致参考内容泄漏和不稳定的生成。我们提出 UniCSG，一个统一框架，用于在文本引导和参考引导两种设置下进行内容约束、风格驱动的生成。UniCSG 采用分阶段训练：（i）潜在空间语义解耦阶段，将低频预处理与条件破坏相结合，以促进内容与风格的分离；（ii）潜在空间频率感知细节重建阶段，通过多尺度频率监督精炼细节。我们进一步引入像素空间奖励学习，使潜在目标与解码后的感知质量对齐。实验表明，在两种设置下，UniCSG 在内容保真度、风格对齐和鲁棒性方面均有提升。

## 关键词

#风格迁移 #扩散模型 #内容约束生成 #频率解耦
