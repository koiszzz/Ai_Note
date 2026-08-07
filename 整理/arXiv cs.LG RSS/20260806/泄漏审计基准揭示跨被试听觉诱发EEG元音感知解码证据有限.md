---
published: 2026-08-06
title: 泄漏审计基准揭示跨被试听觉诱发EEG元音感知解码证据有限
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Leakage-Audited Benchmarking Reveals Limited Evidence for Cross-Subject Auditory-Evoked EEG Vowel Pe.md
source_note: "[[信息源/arXiv cs.LG RSS/Leakage-Audited Benchmarking Reveals Limited Evidence for Cross-Subject Auditory-Evoked EEG Vowel Pe]]"
source_sha256: a3bbbd3dfc175fe6289db21786745392f72ce134b0c7c124fe4c0ac61ea2c70b
original_url: https://arxiv.org/abs/2605.00865
processed: 2026-08-07
language: zh-CN
---

# 泄漏审计基准揭示跨被试听觉诱发EEG元音感知解码证据有限

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.00865)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Leakage-Audited Benchmarking Reveals Limited Evidence for Cross-Subject Auditory-Evoked EEG Vowel Pe|查看原始文件]]

## 摘要

- 在单一基准内同时控制试验身份、模型身份、预测来源与被试层面推断，检验与被试无关的五元音解码
- 随机森林数值最高（21.474% 平衡准确率），但任何实现均未在 13 模型家族校正后存活
- 被试相关效应占质心平方和 72.24%，元音相关效应仅 2.04%；该数据集与协议内跨被试解码证据有限

## 正文

我们检验了在单个基准中同时控制试验身份、模型身份、预测来源（prediction provenance）与被试层面推断时，听觉诱发 EEG 是否支持与被试无关的五元音感知解码。我们从 OpenNeuro ds006104 1.0.1 版重建了研究 2 的事件表，并分析了辅音-元音对任务。一对一标记-刺激配对得到 3,840 个独立试验；对照条件选择与伪迹剔除保留了来自 16 名被试、61 个 EEG 通道的 1,094 个 epoch。使用留一被试检验评估了 13 种独特实现，被试指标由 33 个完整预测副本中的 36,102 个试验预测重建。随机森林以 21.474% 的平衡准确率（95% 被试自举区间，19.526%-23.482%；随机水平 20%）数值上最高，但无论是其被试层面检验，还是任何实现，在跨 13 模型家族校正后均无法存活。深度模型的表现接近随机水平，且若干架构表现出显著的种子依赖变异与较低的试验标签一致性。在一个单独的描述性传感器空间表示中，与被试相关的效应占平衡标准化质心平方和的 72.24%，而元音相关效应仅占 2.04%；全部 16 名被试的被试间同元音距离均超过被试内跨元音距离。一项探索性 MDM 分析包含跨 3-15 名被试训练队列的 9,616 次真实重拟合，未显示单调的性能提升。在该数据集与协议内，可靠跨被试五元音解码的证据有限。该基准提供了从源行到保留 epoch、预测、被试层面指标、多重性校正推断以及有界诊断分析的完整可复现链条。

## 关键词

#EEG #元音解码 #基准测试 #数据泄漏 #跨被试泛化 #脑机接口
