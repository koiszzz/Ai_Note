---
published: 20260806
title: "AudioDER：用于大型音频-语言模型训练后的去重增强推理数据集"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AudioDER- A Deduplication-Enhanced Reasoning Dataset for Post-Training Large Audio-Language Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/AudioDER- A Deduplication-Enhanced Reasoning Dataset for Post-Training Large Audio-Language Models]]"
source_sha256: 38a26c2a009e2651eefd254d881254073e18382003b654b6a6d5088f361435e3
original_url: "https://arxiv.org/abs/2606.14591"
processed: 2026-08-06
language: zh-CN

---

# AudioDER：用于大型音频-语言模型训练后的去重增强推理数据集

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hui Geng, Yi Su, Zijian Gao, Tianjiao Wan, Qisheng Xu, Jiaxin Chen, Hengzhu Liu, Kele Xu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.14591)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AudioDER- A Deduplication-Enhanced Reasoning Dataset for Post-Training Large Audio-Language Models|查看原始文件]]

## 摘要

- 预训练大型音频-语言模型（LALM）的近期进展展示了在语音、声音和音乐上的强大能力；为适应下游任务而不从头预训练，训练后成为广泛采用的范式，但训练后有效性关键取决于训练语料质量。
- 本文观察现有训练后语料（常通过聚合公共音频数据集构建）遭受大量声学冗余，因为许多数据集源自重叠媒体平台；提出三阶段数据构建流水线：声学冗余过滤、将保留样本转换为带思维链生成的统一多项选择问答格式、最后应用质量验证和过滤。
- 用此流水线构建 AudioRE，约 28.6 万实例的训练后数据集；在其上监督微调一致改进 Qwen2-Audio-7B-Instruct 跨多种音频理解和推理基准的性能，优于在未过滤原始语料（实例多得多）上训练的模型。

## 正文

预训练大型音频-语言模型（LALM）的近期进展展示了在语音、声音和音乐上的强大能力。为在不从头预训练成本下使这些模型适应下游任务，训练后（post-training）已成为广泛采用的范式。然而，训练后有效性关键取决于训练语料的质量。我们观察到现有训练后语料——通常通过聚合公共音频数据集构建——遭受大量声学冗余，因为许多数据集源自重叠的媒体平台。此类冗余导致反复暴露于相似声学模式，造成尽管数据量增加但性能收益递减。为解决此问题，我们提出三阶段数据构建流水线：执行声学冗余过滤，将保留样本转换为带思维链生成的统一多项选择问答格式，最后应用质量验证和过滤。使用此流水线，我们构建 AudioRE，一个约 28.6 万实例的训练后数据集，涵盖声音、语音和音乐。在 AudioRE 上监督微调一致改进 Qwen2-Audio-7B-Instruct 跨多种音频理解和推理基准的性能，优于在实例多得多但未过滤的原始语料上训练的模型。这些结果验证了我们的冗余感知数据构建流水线和所得 AudioRE 数据集的有效性，并进一步强调在音频-语言训练后中最小化声学冗余的重要性。为促进未来研究，我们将发布 AudioRE 和微调的 Qwen2-AudioRE 检查点。

## 关键词

#音频语言模型 #训练后 #去重 #推理数据集 #arXiv