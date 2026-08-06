---
title: "VLAFlow：通过协同训练与未来潜对齐实现视觉-语言-动作模型的统一训练框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/VLAFlow- A Unified Training Framework for Vision-Language-Action Models via Co-training and Future L.md"
source_note: "[[信息源/arXiv cs.AI RSS/VLAFlow- A Unified Training Framework for Vision-Language-Action Models via Co-training and Future L]]"
source_sha256: 959c4b689bf602cde6e1bb9c49fa9a7504b2f5c8794dc9740e636606702f6ccd
original_url: "https://arxiv.org/abs/2607.01586"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# VLAFlow：通过协同训练与未来潜对齐实现视觉-语言-动作模型的统一训练框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Guoyang Xia、Fengfa Li、Hongjin Ji 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.01586)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/VLAFlow- A Unified Training Framework for Vision-Language-Action Models via Co-training and Future L|查看原始文件]]

## 摘要

- 提出 VLAFlow（视觉-语言-动作流），统一流匹配框架，用于 VLA 训练目标的受控比较：使用异构机器人语料 OXEMix（约 5,000 小时，来自 DROID、OpenX-Embodiment、OpenX-Augmented 与 RoboCOIN），在相同 pi0 风格架构、共享 VLM 骨干、动作专家与 14 维动作空间下评估四种范式：纯动作建模（MindPI）、语言监督协同训练（MindLPI）、未来潜对齐（MindWPI）及其组合（MindLWPI）。
- 视觉-语言-动作模型（VLA）近期推进机器人操作，但不同机器人数据预训练范式的影响难以比较，因为现有模型常在架构、数据、动作空间与评估协议上不同。
- LIBERO、LIBERO-Plus 与 SimplerEnv 实验显示：纯动作预训练对异构数据敏感；语言监督帮助保持视觉-语言泛化；未来潜对齐改善状态转换与动作结果建模；组合两者，MindLWPI 跨基准取得最稳定整体迁移性能。
- 结果提示元动作空间观点：语言与未来潜表示提供互补的中间约束，使异构动作监督更平滑、更可迁移。

## 正文

论文编号：arXiv:2607.01586v2（更新类型：replace-cross）。以下为摘要全文翻译。

视觉-语言-动作模型（VLA）近期推进了机器人操作，然而不同机器人数据预训练范式的影响难以比较，因为现有模型在架构、数据、动作空间与评估协议上往往不同。我们提出 VLAFlow（Vision-Language-Action Flow），一个统一流匹配框架，用于 VLA 训练目标的受控比较。使用异构机器人语料 OXEMix（约 5,000 小时数据，来自 DROID、OpenX-Embodiment、OpenX-Augmented 与 RoboCOIN），我们在相同的 pi0 风格架构、共享 VLM 骨干、动作专家与 14 维动作空间下评估四种范式：纯动作建模（MindPI）、语言监督协同训练（MindLPI）、未来潜对齐（MindWPI）以及它们的组合（MindLWPI）。在 LIBERO、LIBERO-Plus 与 SimplerEnv 上的实验表明，纯动作预训练对异构数据敏感。相比之下，语言监督帮助保持视觉-语言泛化，而未来潜对齐改善状态转换与动作结果建模。通过组合两种信号，MindLWPI 跨基准取得最稳定的整体迁移性能。这些结果提示一个元动作空间观点：语言与未来潜表示提供互补的中间约束，使异构动作监督更平滑、更可迁移。

## 关键词

#VLA模型 #预训练范式 #流匹配 #机器人操作
