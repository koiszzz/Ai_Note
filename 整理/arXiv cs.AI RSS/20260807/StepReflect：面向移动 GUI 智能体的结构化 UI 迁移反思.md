---
published: 2026-08-07
title: "StepReflect：面向移动 GUI 智能体的结构化 UI 迁移反思"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/StepReflect- Structured UI Transition Reflection for Mobile GUI Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/StepReflect- Structured UI Transition Reflection for Mobile GUI Agents]]"
source_sha256: 787150fa86fbfed00bd34860add7cd806d46f8ed35c6365ea39c04298bc02472
original_url: "https://arxiv.org/abs/2608.05587"
processed: 2026-08-07
language: zh-CN
---

# StepReflect：面向移动 GUI 智能体的结构化 UI 迁移反思

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Linqiang Guo (Peter), Wei Liu (Peter), Li Gu (Peter), Yang Wang (Peter), Tse-Hsun (Peter), Chen
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05587)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/StepReflect- Structured UI Transition Reflection for Mobile GUI Agents|查看原始文件]]

## 摘要

- 自主移动 GUI 智能体需要准确动作反思以实现可靠长时程执行；现有方法在每个动作后进行开放式多模态推理，成本高昂且与 GUI 状态迁移的结构化性质不匹配。
- 提出 StepReflect：将逐步 GUI 反思表述为条件于显式迁移规格与配对视觉证据的监督结构化预测——通过监督微调、师生蒸馏与偏好与奖励精炼的组合分阶段流水线训练。
- 离线时，所得 8B 模型在 AndroidWorld 实现 82.16% 迁移级准确率，同一结构化输入下超过零样本 GPT-5.2 11.83 个百分点；在线时，跨 M3A、Agent-SAMA、MAI-UI-8B 与 Seed-2.0-Pro，StepReflect 在四种智能体配置中的三种取得更高任务成功，第四种保持在 GPT-5.2 反思智能体一个成功任务内。
- 还相对基于 GPT 的反思在全部四种配置中减少付费 API 费用；结果确立 StepReflect 作为长时程移动 GUI 智能体重复前沿模型反思的实用、可本地部署替代。

## 正文

自主移动 GUI 智能体需要准确的动作反思以实现可靠的长时程执行。现有方法依赖于每个动作后的开放式多模态推理，成本高昂且与 GUI 状态迁移的结构化性质不匹配。我们提出 StepReflect，将逐步 GUI 反思表述为条件于显式迁移规格与配对视觉证据的监督结构化预测。StepReflect 通过一个结合监督微调、师生蒸馏与偏好与奖励精炼的分阶段流水线训练。离线时，所得 8B 模型在 AndroidWorld 上实现 82.16% 的迁移级准确率，在相同结构化输入下超过零样本 GPT-5.2 11.83 个百分点。在线时，跨 M3A、Agent-SAMA、MAI-UI-8B 与 Seed-2.0-Pro，StepReflect 在四种智能体配置中的三种取得更高的任务成功，并在第四种中保持在 GPT-5.2 反思智能体的一个成功任务之内。它还在全部四种配置中相对基于 GPT 的反思减少了付费 API 费用。这些结果确立 StepReflect 作为长时程移动 GUI 智能体重复前沿模型反思的实用、可本地部署替代。

## 关键词

#移动GUI智能体 #结构化反思 #UI迁移 #本地部署
