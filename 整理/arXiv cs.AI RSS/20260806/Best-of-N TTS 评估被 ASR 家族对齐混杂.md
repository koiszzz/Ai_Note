---
published: 20260806
title: "Best-of-N TTS 评估被 ASR 家族对齐混杂"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment.md"
source_note: "[[信息源/arXiv cs.AI RSS/Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment]]"
source_sha256: 4e32823f2789a54fbacd08dccadad1da3af5b53e4203b0679a687c7b8c3704bc
original_url: "https://arxiv.org/abs/2607.08256"
processed: 2026-08-06
language: zh-CN

---

# Best-of-N TTS 评估被 ASR 家族对齐混杂

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Taehyung Yu, Seongjae Kang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.08256)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment|查看原始文件]]

## 摘要

- Best-of-N（BoN）推理通过用自动语音识别（ASR）验证器在多个候选中选择，改进零样本文本转语音的内容一致性；本文识别一个评估混杂：验证器的表面质量强烈依赖于用于评估的 ASR 家族。
- 在 LibriSpeech-PC 和 F5-TTS 上，验证器排名跨 Whisper、wav2vec 2.0 和 HuBERT 评估器显著变化，而同家族验证器-评估器对比跨家族对恢复多得多的 oracle 余量，尽管表示高度相似；此模式提示身份或谱系级耦合而非一般表示相似性。
- 提出两种跨家族排名集成：排名平均和合取最大排名，两者改善独立评估器的平均词错误率而不降低自动相似性或质量指标，最佳集成在 N=10 时实现相对 F5-TTS 12% 的 WER 降低。

## 正文

Best-of-N（BoN）推理通过用自动语音识别（ASR）验证器在多个候选中选择，改进零样本文本转语音的内容一致性。我们识别一个评估混杂：验证器的表面质量强烈依赖于用于评估的 ASR 家族。在 LibriSpeech-PC 和 F5-TTS 上，验证器排名跨 Whisper、wav2vec 2.0 和 HuBERT 评估器显著变化，而同家族验证器-评估器对比跨家族对恢复多得多的 oracle 余量，尽管表示高度相似。此模式提示身份或谱系级耦合，而非一般表示相似性。为减轻此偏差，我们提出两种跨家族排名集成：排名平均和合取最大排名。两者都改善独立评估器的平均词错误率（WER），而不降低自动相似性或质量指标，最佳集成在 N=10 时实现相对 F5-TTS 12% 的 WER 降低。这些发现激励跨评估器三角测量作为报告 BoN TTS 性能的更可靠默认。

## 关键词

#文本转语音 #评估 #ASR #Best-of-N #arXiv