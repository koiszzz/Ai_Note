---
published: 2026-08-06
title: 泄漏审计基准测试显示跨被试听觉诱发 EEG 元音感知解码证据有限
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Leakage-Audited Benchmarking Reveals Limited Evidence for Cross-Subject Auditory-Evoked EEG Vowel Pe.md
source_note: "[[信息源/arXiv cs.CV RSS/Leakage-Audited Benchmarking Reveals Limited Evidence for Cross-Subject Auditory-Evoked EEG Vowel Pe]]"
source_sha256: 11ae754c4b88ea55bd859947af2540b035f5a61ea9ccccc78ec8d6ad528e1cf8
original_url: https://arxiv.org/abs/2605.00865
processed: 2026-08-07
language: zh-CN
---

# 泄漏审计基准测试显示跨被试听觉诱发 EEG 元音感知解码证据有限

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.00865)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Leakage-Audited Benchmarking Reveals Limited Evidence for Cross-Subject Auditory-Evoked EEG Vowel Pe|查看原始文件]]

## 摘要

- 在单一基准内同时控制试验身份、模型身份、预测来源和参与者级推断，测试听觉诱发 EEG 是否支持与受试者无关的五元音感知解码。
- 13 种实现经留一被试交叉验证：随机森林平衡准确率最高（21.474%，随机水平 20%），但所有实现均未能在 13 模型族的多重校正中存活。
- 参与者相关效应占平衡标准化质心和平方和的 72.24%（元音效应仅 2.04%）；在该数据集与协议范围内，可靠跨被试解码的证据有限。

## 正文

我们测试了在单一基准内同时控制试验身份、模型身份、预测来源和参与者级推断时，听觉诱发 EEG 是否支持与受试者无关的五元音感知解码。我们从 OpenNeuro ds006104 1.0.1 版重建了研究 2 的事件表，并分析了辅音-元音对任务。一对一标记-刺激配对产生 3,840 个独立试验；对照条件选择和伪迹剔除保留了来自 16 名参与者、61 个 EEG 通道的 1,094 个时段。

使用留一被试交叉验证评估了 13 种独特的实现，参与者指标由 33 个完整预测副本中的 36,102 个试验预测重建。随机森林数值最高，平衡准确率为 21.474%（95% 参与者自助法区间 19.526-23.482%；随机水平 20%），但其参与者级检验以及所有实现均未能在 13 模型族中经受校正。深度模型性能接近随机水平，且若干架构表现出显著的种子依赖变异和较低的试验标签一致性。

在一项独立的描述性传感器空间表征中，与参与者相关的效应占平衡标准化质心和平方和的 72.24%，而元音相关效应仅占 2.04%；对于全部 16 名参与者，被试间同元音距离均大于被试内跨元音距离。一项探索性 MDM 分析包含在 3-15 名参与者的训练队列上的 9,616 次真实重拟合，未显示单调的性能增益。

在该数据集和协议范围内，可靠的跨被试五元音解码的证据有限。该基准提供了从源数据行到保留时段、预测、参与者级指标、多重性调整推断和有界诊断分析的完整可复现链条。

## 关键词

#EEG #脑机接口 #解码基准 #数据泄漏审计
