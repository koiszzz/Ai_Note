---
published: 2026-08-06
title: Best-of-N文本转语音评估受ASR家族对齐干扰
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment.md
source_note: "[[信息源/arXiv cs.LG RSS/Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment]]"
source_sha256: f8d92ef0ce468693b709bf083791bc0d48dbfe6da2c738b9f3ad7177bcfaeadb
original_url: https://arxiv.org/abs/2607.08256
processed: 2026-08-07
language: zh-CN
---

# Best-of-N文本转语音评估受ASR家族对齐干扰

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.08256)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment|查看原始文件]]

## 摘要

- 识别出 BoN 文本转语音评估中的混杂因素：验证器的表观质量强烈依赖用于评估的 ASR 家族，同家族配对比跨家族配对恢复多得多的 oracle 上限。
- 该模式表明存在身份或谱系层面的耦合，而非一般的表示相似性。
- 提出两种跨家族排名集成（排名平均与合取最大排名），在不降低相似性/质量指标下改善平均 WER，最佳集成在 $N=10$ 时相对 F5-TTS 实现 12% 相对 WER 降低。

## 正文

Best-of-$N$（BoN）推理通过使用自动语音识别（ASR）验证器从多个候选中进行选择，提高了零样本文本转语音（zero-shot text-to-speech）的内容一致性。

我们识别出一个评估混杂因素（evaluation confound）：验证器的表观质量在很大程度上取决于用于评估的 ASR 家族。在 LibriSpeech-PC 上配合 F5-TTS，验证器排名在 Whisper、wav2vec 2.0 和 HuBERT 评估器之间差异很大，而同家族的验证器-评估器配对比跨家族配对恢复了多得多的 oracle 上限（oracle headroom），尽管它们的表示高度相似。这种模式表明存在身份或谱系层面的耦合（identity- or lineage-level coupling），而非一般的表示相似性。

为减轻这种偏差，我们提出两种跨家族排名集成（cross-family rank ensembles）：排名平均（rank averaging）和合取最大排名（conjunctive max-rank）。两者都在不降低自动相似性或质量指标的情况下改善了跨独立评估器的平均词错误率（WER），且最佳集成在 $N=10$ 时相对 F5-TTS 实现了 $12\%$ 的相对 WER 降低。这些发现促使跨评估器三角验证（cross-evaluator triangulation）成为报告 BoN TTS 性能的更可靠默认做法。

## 关键词

#文本转语音 #Best-of-N #ASR #评估偏差 #语音合成
