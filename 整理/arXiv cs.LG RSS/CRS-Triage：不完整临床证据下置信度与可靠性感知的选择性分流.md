---
title: "CRS-Triage：不完整临床证据下置信度与可靠性感知的选择性分流"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CRS-Triage- Confidence- and Reliability-Aware Selective Triage under Incomplete Clinical Evidence.md"
source_note: "[[信息源/arXiv cs.LG RSS/CRS-Triage- Confidence- and Reliability-Aware Selective Triage under Incomplete Clinical Evidence]]"
source_sha256: 3ddc97340273f542a303904f73ff0551dab3ddc9b8f27190b0fcddef777ba872
original_url: "https://arxiv.org/abs/2608.03862"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CRS-Triage：不完整临床证据下置信度与可靠性感知的选择性分流

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Guan Qiang、Yushen Chen、Tianlong Liu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03862)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/CRS-Triage- Confidence- and Reliability-Aware Selective Triage under Incomplete Clinical Evidence|查看原始文件]]

## 摘要

- 提出置信度与可靠性感知的选择性分流（CRS-Triage）：带置信分数预测患者敏锐度级别——比较置信分数与预定义阈值，选择性决定模型应做决策还是延后病例；分别评估结构化数据与临床文本可靠性，再联合考虑两模态一致性估计每个预测置信度。
- 急诊分流要求短时间内可靠决策；但可用电子健康记录（EHR）数据（结构化数据与临床文本）常不完整、不可靠且不一致，使基于机器学习的分流预测更具挑战性（现有 ML 模型通常依赖完整可靠 EHR 数据准确预测患者敏锐度）。
- 为降低漏掉高敏锐度患者（欠分流）风险，通过惩罚欠分流错误偏好给患者稍高敏锐度（过度分流）。
- MIMIC-IV-ED 实验显示 CRS-Triage 取得强预测性能；提供更好风险-覆盖权衡，在可用 EHR 数据不完整、退化或跨模态不一致时保持可靠。

## 正文

论文编号：arXiv:2608.03862v1（更新类型：new）。以下为摘要全文翻译。

急诊分流要求在短时间内做出可靠决策。然而，可用的电子健康记录（EHR）数据（包括结构化数据与临床文本）往往不完整、不可靠且不一致。这使得基于机器学习（ML）的分流预测更具挑战性，因为现有 ML 模型通常依赖完整且可靠的 EHR 数据来准确预测患者的敏锐度级别。为解决这一问题，我们提出置信度与可靠性感知的选择性分流（confidence- and reliability-aware selective triage，CRS-Triage）：带置信分数预测患者的敏锐度级别。通过把置信分数与预定义阈值比较，CRS-Triage 可以选择性决定模型应做决策还是延后病例。具体而言，CRS-Triage 分别评估结构化数据与临床文本的可靠性，然后联合考虑两个模态之间的一致性来估计每个预测的置信度。此外，为降低漏掉高敏锐度患者（即欠分流）的风险，CRS-Triage 通过惩罚欠分流错误，偏好给患者分配稍高的敏锐度级别（即过度分流）。在 MIMIC-IV-ED 数据集上的实验表明，CRS-Triage 取得强的预测性能。它还提供更好的风险-覆盖权衡，并在可用 EHR 数据不完整、退化或跨模态不一致时保持可靠。

## 关键词

#急诊分流 #选择性预测 #置信度 #不完整数据
