---
published: 20260806
title: "OPD-V：带模态平衡的视觉策略内自蒸馏"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/OPD-V- Visual On-Policy Self-Distillation with Modality Balance.md"
source_note: "[[信息源/arXiv cs.AI RSS/OPD-V- Visual On-Policy Self-Distillation with Modality Balance]]"
source_sha256: 90c223d40266feae8eed36a08f7b4c0b87f04381106f147c73519f1717bc2762
original_url: "https://arxiv.org/abs/2608.05131"
processed: 2026-08-06
language: zh-CN

---

# OPD-V：带模态平衡的视觉策略内自蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Aniri, Jinhe Bi, Peng Liao, Zengjie Jin, Volker Tresp, Fei Shen, Yunpu Ma, Tat-Seng Chua
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05131)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/OPD-V- Visual On-Policy Self-Distillation with Modality Balance|查看原始文件]]

## 摘要

- 策略内自蒸馏（OPSD）已成为改进多模态大语言模型（MLLM）视觉推理的标准训练后方法；现有方法从多样输入源绘制特权信息引导自蒸馏，但这些设计忽视模态不平衡——MLLM 推理固有的挑战。
- 当文本信息支配生成时，模型无法完全集成其多模态输入，精心设计的特权信息仍利用不足，限制 OPSD 有效性；为检验此局限，构建带放大图像的积极教师和带掩蔽图像的消极教师，显示不同模态不平衡程度，其推理正确性和 token logits 变化揭示模态平衡本身可作为特权信息。
- 引入 OPD-V，一个通过积极教师和消极教师实例化此类信息的视觉 OPSD 范式：积极模态平衡 logits 边际定义选择用于自蒸馏的策略内 token 的模态平衡信任区域；6 个基准、4 个 MLLM 骨干和 5 种训练后方法实验显示 OPD-V 一致改进推理性能同时降低训练成本。

## 正文

策略内自蒸馏（On-Policy Self-Distillation，OPSD）已成为改进多模态大语言模型（MLLM）视觉推理的标准训练后方法。现有方法从多样输入源绘制特权信息引导自蒸馏。然而，这些设计忽视模态不平衡（Modality Imbalance）——MLLM 推理固有的挑战。当文本信息支配生成时，模型无法完全集成其多模态输入。因此，精心设计的特权信息仍利用不足，限制 OPSD 的有效性。为检验此局限，我们构建带放大图像的积极教师（Positive Teacher）和带掩蔽图像的消极教师（Negative Teacher），它们显示不同模态不平衡程度。其推理正确性和 token logits 的变化揭示，模态平衡本身可作为特权信息。受此发现激励，我们引入 OPD-V，一个通过积极教师和消极教师实例化此类信息的视觉 OPSD 范式。积极模态平衡 logits 边际（Positive Modality-Balance Logits Margins）定义模态平衡信任区域（Modality-Balance Trust Region），选择用于自蒸馏的策略内 token。6 个基准、4 个 MLLM 骨干和 5 种训练后方法实验表明，OPD-V 一致改进推理性能，同时降低训练成本。

## 关键词

#策略内自蒸馏 #模态平衡 #多模态LLM #视觉推理 #arXiv