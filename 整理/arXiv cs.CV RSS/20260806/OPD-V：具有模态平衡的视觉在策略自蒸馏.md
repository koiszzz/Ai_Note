---
published: 2026-08-06
title: OPD-V：具有模态平衡的视觉在策略自蒸馏
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/OPD-V- Visual On-Policy Self-Distillation with Modality Balance.md
source_note: "[[信息源/arXiv cs.CV RSS/OPD-V- Visual On-Policy Self-Distillation with Modality Balance]]"
source_sha256: bf6a2820c6a9750129dfa2c88bc570e3f676c7bc54a89d337ce8840798c88602
original_url: https://arxiv.org/abs/2608.05131
processed: 2026-08-07
language: zh-CN
---

# OPD-V：具有模态平衡的视觉在策略自蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05131)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/OPD-V- Visual On-Policy Self-Distillation with Modality Balance|查看原始文件]]

## 摘要

- 揭示模态不平衡会限制多模态大语言模型在策略自蒸馏（OPSD）的效果，并证明模态平衡本身可作为特权信息。
- 通过正教师（放大图像）与负教师（掩码图像）的推理正确性和令牌对数概率差异验证了这一发现。
- 提出 OPD-V：以模态平衡对数概率裕度定义信任区域来选择自蒸馏令牌，在 6 个基准、4 个 MLLM 主干上持续提升推理性能并降低训练成本。

## 正文

在策略自蒸馏（OPSD）已成为提升多模态大语言模型（MLLM）视觉推理能力的标准后训练方法。现有方法从多样的输入来源提取特权信息来引导自蒸馏。然而这些设计忽略了模态不平衡（Modality Imbalance）——一个 MLLM 推理中固有的挑战。当文本信息主导生成时，模型无法充分整合其多模态输入。因此，精心设计的特权信息仍未被充分利用，限制了 OPSD 的有效性。为考察这一局限，我们构建了带放大图像的正教师（Positive Teacher）和带掩码图像的负教师（Negative Teacher），二者表现出不同程度的模态不平衡。它们在推理正确性和令牌对数概率上的变化表明，模态平衡本身可以作为特权信息。基于这一发现，我们提出 OPD-V，一种通过正教师和负教师来实例化此类信息的视觉 OPSD 范式。正的模态平衡对数概率裕度定义了模态平衡信任区域，用于选择进行自蒸馏的在策略令牌。在 6 个基准、4 个 MLLM 主干和 5 种后训练方法上的实验表明，OPD-V 在降低训练成本的同时持续提升推理性能。

## 关键词

#多模态大语言模型 #自蒸馏 #模态平衡 #视觉推理 #后训练
