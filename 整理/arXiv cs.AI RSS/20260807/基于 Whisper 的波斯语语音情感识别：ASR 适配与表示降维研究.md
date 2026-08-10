---
published: 2026-08-07
title: "基于 Whisper 的波斯语语音情感识别：ASR 适配与表示降维研究"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Study of ASR Adaptation and Representation Dimensionality Reduction in Persian Speech Emotion Reco.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Study of ASR Adaptation and Representation Dimensionality Reduction in Persian Speech Emotion Reco]]"
source_sha256: 3c9dfc0e5c8de451cf03a05444ee4d8132788acc0c40cc89208cc53fa83676e8
original_url: "https://arxiv.org/abs/2608.05165"
processed: 2026-08-07
language: zh-CN
---

# 基于 Whisper 的波斯语语音情感识别：ASR 适配与表示降维研究

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ali Shendabadi, Parnia Izadirad, Mostafa Salehi
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05165)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Study of ASR Adaptation and Representation Dimensionality Reduction in Persian Speech Emotion Reco|查看原始文件]]

## 摘要

- 低资源语言的语音情感识别（SER）因标注数据有限仍是难题，本文研究 Whisper 在波斯语 SER 中的应用，重点关注表示降维与语言特定模型适配。
- 提出 SER 框架：用 PCA 对 Whisper 编码器提取的帧级嵌入降维，省去可学习的投影层、大幅减少可训练参数；降维表示经基于注意力的池化聚合后由轻量分类头分类。
- 进一步考察在波斯语 ASR 任务上微调 Whisper 是否能提升下游 SER 性能。
- 在 ShEMO 数据集上按说话人无关协议实验：PCA 降维稳定提升情感识别性能，同时降低训练延迟与内存占用；ASR 微调对 SER 增益有限。

## 正文

低资源语言的语音情感识别（Speech Emotion Recognition，SER）由于标注数据有限仍然是一个难题。在这项工作中，我们研究 Whisper 在波斯语 SER 中的应用，特别关注表示降维与语言特定模型适配。我们提出一个 SER 框架：从 Whisper 编码器提取的帧级嵌入使用 PCA 降维，从而无需可学习的投影层，并大幅减少可训练参数的数量。降维后的表示通过基于注意力的池化机制聚合，并由轻量分类头进行分类。此外，我们还考察在波斯语自动语音识别（ASR）任务上微调 Whisper 是否能改善下游 SER 性能。在 ShEMO 数据集上按说话人无关评估协议进行的实验表明，基于 PCA 的降维在降低训练延迟与内存占用的同时，稳定地提升了情感识别性能。ASR 微调对 SER 仅带来有限增益，说明在所评估的条件下，语言适配向情感相关表示的迁移有限。这些发现为低资源语言中高效利用大型预训练语音模型进行情感识别提供了实用洞见。

## 关键词

#语音情感识别 #Whisper #低资源语言 #降维
