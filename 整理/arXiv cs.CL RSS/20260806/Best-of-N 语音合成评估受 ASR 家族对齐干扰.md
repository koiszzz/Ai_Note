---
published: 2026-08-06
title: Best-of-N 语音合成评估受 ASR 家族对齐干扰
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment.md
source_note: "[[信息源/arXiv cs.CL RSS/Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment]]"
source_sha256: e6f8db7f822e42bc61eb72ad54dfdf66b8315e2e2a548b23c221402e6a384dcd
original_url: https://arxiv.org/abs/2607.08256
processed: 2026-08-07
language: zh-CN
---

# Best-of-N 语音合成评估受 ASR 家族对齐干扰

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.08256)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment|查看原始文件]]

## 摘要

- 识别出 Best-of-N（BoN）零样本文转语评估中的混淆因素：验证器的表观质量在很大程度上取决于评估所用的 ASR 家族
- 同家族验证器-评估器配对比跨家族配对恢复更多 oracle 上限，提示这是同一性或谱系层面的耦合而非一般表示相似性
- 提出排名平均与合取最大排名两种跨家族排名集成，均改善平均词错误率，最佳集成在 N=10 时相对 F5-TTS 实现 12% 的相对 WER 降低
- 建议将跨评估器三角验证作为报告 BoN TTS 性能的更可靠默认做法

## 正文

Best-of-N（BoN）推理通过使用自动语音识别（ASR）验证器在多个候选中进行选择，从而改善零样本文转语的内容一致性。我们发现了一个评估混淆因素：验证器的表观质量在很大程度上取决于评估所用的 ASR 家族。在 F5-TTS 的 LibriSpeech-PC 上，验证器排名在 Whisper、wav2vec 2.0 和 HuBERT 评估器之间差异显著，而同家族的验证器-评估器配对比跨家族配对恢复了多得多的 oracle 上限，尽管它们的表示高度相似。这种模式表明存在同一性或谱系层面的耦合，而非一般的表示相似性。

为缓解这一偏差，我们提出两种跨家族排名集成：排名平均和合取最大排名。两者都能在不损害自动相似性或质量指标的情况下，改善跨独立评估器的平均词错误率，最佳集成在 N=10 时相对于 F5-TTS 实现了 12% 的相对 WER 降低。这些发现促使跨评估器三角验证成为报告 BoN TTS 性能的更可靠默认做法。

## 关键词

#语音合成 #TTS #ASR #Best-of-N #评估方法 #arXiv
