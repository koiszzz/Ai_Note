---
published: 20260806
title: "预训练 Transformer 感知模型的对抗鲁棒溯因融合"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Adversarially Robust Abductive Fusion of Pre-trained Transformer-based Perception Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/Adversarially Robust Abductive Fusion of Pre-trained Transformer-based Perception Models]]"
source_sha256: 608364bf894bcd50fdbd702444df13e87cfb5580a2e71e85a9a281caee75ba7d
original_url: "https://arxiv.org/abs/2608.04190"
processed: 2026-08-06
language: zh-CN

---

# 预训练 Transformer 感知模型的对抗鲁棒溯因融合

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mario Leiva, Yue Ma, Qinru Qiu, Gerardo Simari, Paulo Shakarian
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04190)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Adversarially Robust Abductive Fusion of Pre-trained Transformer-based Perception Models|查看原始文件]]

## 摘要

- 在新环境中部署预训练感知模型会因分布漂移降低准确率，仅组装它们无法恢复：多数投票等组合器以精度换取召回率，且对协调失败脆弱。
- 本文证明元认知层可在无需任何领域知识的情况下学习，利用向量空间几何：从每个模型自身训练嵌入构建的每模型标签向量池（LVP），产生基于检测相对训练确定原型几何的错误检测规则，测试集 F1 与领域知识规则差距在 0.002 以内。
- 将多个不完美 ViT 检测器的融合框定为一致性溯因问题，测试时用精确整数规划（IP）和多项式时间启发式求解；在 15 个天气偏移测试集的航空影像基准上，无领域知识层在干净数据上匹配最强多数投票变体，且在协调标签翻转攻击下保持性能。

## 正文

在新环境中部署预训练感知模型会因分布漂移降低准确率，仅组装它们无法恢复：多数投票等组合器以召回率换取精度，且对协调失败脆弱。先前的元认知方法学习标记模型错误的逻辑规则，但依赖手工撰写的领域知识线索（物体大小先验、分割掩码），无法迁移到真正新颖的场景。我们证明这种元认知层可以在无需任何领域知识的情况下学习，通过利用向量空间几何：从每个模型自身训练嵌入构建的每模型标签向量池（LVP），从检测相对训练确定原型的几何产生错误检测规则，在测试集上与领域知识规则达到 0.002 以内的 F1 差距。由于该方法保持神经符号性质，这些几何规则共享单一逻辑框架，有领域知识时仍可补充。我们将多个不完美基于 ViT 的检测器的融合框定为一致性溯因问题，测试时用精确整数规划（IP）和多项式时间启发式求解。在包含 15 个天气偏移测试集和六个 ViT 检测器的航空影像基准上，我们的无领域知识层在干净数据上匹配最强多数投票变体（0.005 F1 以内），且与每个多数投票基线不同，在协调标签翻转攻击下保持性能：在 90% 翻转率下平均 0.42 F1，对比 MV-Plurality 的 0.35（22% 相对增益），且翻转率超过 0.4 后在每个测试集上达到最高 F1。

## 关键词

#感知融合 #溯因推理 #对抗鲁棒性 #元认知 #arXiv