---
published: 2026-08-06
title: 预训练Transformer感知模型的对抗鲁棒溯因融合
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Adversarially Robust Abductive Fusion of Pre-trained Transformer-based Perception Models.md
source_note: "[[信息源/arXiv cs.LG RSS/Adversarially Robust Abductive Fusion of Pre-trained Transformer-based Perception Models]]"
source_sha256: 35c254546b2a64420cd1a76a98dd58f238359346f58e90da3ccd6853317c3f11
original_url: https://arxiv.org/abs/2608.04190
processed: 2026-08-07
language: zh-CN
---

# 预训练Transformer感知模型的对抗鲁棒溯因融合

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04190)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Adversarially Robust Abductive Fusion of Pre-trained Transformer-based Perception Models|查看原始文件]]

## 摘要

- 证明无需任何领域知识即可学习元认知错误检测层：利用各模型标签向量池（LVP）的向量空间几何。
- 将多探测器融合建模为一致性溯因问题，测试时用精确整数规划（IP）与多项式启发式求解。
- 在 15 个天气偏移测试集、6 个 ViT 探测器基准上，90% 标签翻转攻击下平均 F1 为 0.42，相对 MV-Plurality 提升 22%。

## 正文

在新型环境中部署预训练感知模型会因分布偏移而使准确率下降，而单纯组装这些模型也无法恢复性能：多数投票等组合器以召回换精度，且对协调性失败很脆弱。先前的元认知方法学习标记模型错误的逻辑规则，但依赖手工编写的领域知识线索（如物体尺寸先验、分割掩码），这些线索无法迁移到真正新颖的场景。

我们证明这一元认知层可以通过利用向量空间几何，在没有任何领域知识的情况下被学习：由每个模型自身训练嵌入构建的逐模型标签向量池（Label Vector Pools，LVP），可从检测结果相对于训练确定的原型（prototype）的几何关系中得到错误检测规则，在测试集上达到与领域知识规则相差 0.002 F1 的同等水平。由于该方法仍是神经符号的（neuro-symbolic），这些几何规则共享单一逻辑框架，并且在可用时仍可被领域知识补充。

我们将多个不完美 ViT 检测器的融合表述为一个基于一致性的溯因问题（consistency-based abduction problem），在测试时由一个精确整数规划（IP）和一个多项式时间启发式求解。在包含 15 个天气偏移测试集和六个 ViT 检测器的航拍影像基准上，我们的无领域知识层在干净数据上与最强多数投票变体持平（F1 相差 0.005 内），并且与每个多数投票基线不同，它在协调性标签翻转攻击下保持性能：在 90% 翻转率下平均 F1 为 0.42，而 MV-Plurality 为 0.35（相对提升 22%），且一旦翻转率超过 0.4，它在每个测试集上都取得最高 F1。

## 关键词

#对抗鲁棒性 #感知融合 #溯因推理 #ViT #元认知
