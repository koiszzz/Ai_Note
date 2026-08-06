---
published: 2026-08-05
title: "用 CNN-BiLSTM 模型进行可穿戴传感器的久坐行为分类"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Sedentary Behavior Classification for Wearable Sensors with a CNN-BiLSTM Model.md"
source_note: "[[信息源/arXiv cs.LG RSS/Sedentary Behavior Classification for Wearable Sensors with a CNN-BiLSTM Model.]]"
source_sha256: f3f9a183a21932eadfa2b030cb74bb47fa0f1438ef35901ccdc9aba073463987
original_url: "https://arxiv.org/abs/2608.02946"
processed: 2026-08-05
language: zh-CN
---

# 用 CNN-BiLSTM 模型进行可穿戴传感器的久坐行为分类

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yuliang Chen、Weiwei Shi、Jingjing Zou、Rong Zablocki、Animesh Kumar、Jordan A. Carlson、Sheri J. Hartman、Mikael Anne Greenwood-Hickman、Paul R. Hibbing、Marta Jankowska、Jay Yang、Arun Kumar、Loki Natarajan
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02946)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Sedentary Behavior Classification for Wearable Sensors with a CNN-BiLSTM Model.|查看原始文件]]

## 摘要

- 准确检测久坐行为对研究长时间静坐相关的健康风险很重要，但基于姿态的分类在可穿戴传感器（尤其腕部）上仍有挑战。
- 研究在髋部佩戴加速度计数据上训练的深度学习模型能否迁移到腕部加速度计数据，用于坐姿与非坐姿分类。
- 使用 CHAP，一个最初为髋部加速度计开发的 CNN-BiLSTM 模型，评估其在腕部数据上的零样本性能，以及通过不同量腕部标注数据的微调适应。
- 实验在 iWatch 数据集上进行，ground-truth 姿态标签来自可穿戴相机。
- 髋部训练模型无需重训练即可在髋部数据上表现良好，但由于传感器放置变化，腕部数据准确率下降；微调 CHAP 相对从头训练的 Transformer 模型提供一致优势。
- 结果表明基于髋部的预训练为腕部部署提供有用起点，同时强调需要腕部特定适应以处理更高信号变异性。

## 正文

论文编号：arXiv:2608.02946v1（更新类型：new）。以下为摘要全文翻译。

准确检测久坐行为对研究与长时间静坐相关的健康风险很重要，但基于姿态的分类在可穿戴传感器上仍具挑战性，尤其在腕部。我们研究在髋部佩戴加速度计数据上训练的深度学习模型能否迁移到腕部加速度计数据，用于坐姿与非坐姿分类。我们使用 CHAP，一个最初为髋部加速度计开发的 CNN-BiLSTM 模型，评估其在腕部数据上的零样本性能，以及通过不同量腕部标注数据进行微调的适应。实验在 iWatch 数据集上进行，ground-truth 姿态标签源自可穿戴相机。髋部训练的模型无需重训练即可在髋部数据上表现强劲，但由于传感器放置的转移，在腕部数据上准确率下降。微调 CHAP 相对从头训练的 Transformer 模型提供一致的优势。这些发现表明，基于髋部的预训练为腕部部署提供了有用的起点，同时强调需要腕部特定的适应以处理更高的信号变异性。

## 关键词

#久坐行为 #可穿戴传感器 #CNN-BiLSTM #迁移学习 #加速度计
