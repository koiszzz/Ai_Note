---
published: 2026-08-07
title: "音频到乐谱转录：预训练特征、数据增强与新 SheetSage-A2S 数据集"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Audio-to-Score Transcription using Pre-trained Features, Data Augmentation, and the New SheetSage-A2.md"
source_note: "[[信息源/arXiv cs.AI RSS/Audio-to-Score Transcription using Pre-trained Features, Data Augmentation, and the New SheetSage-A2]]"
source_sha256: c4cfcd1cf6cc1dc0ecde8a23e2e44373895d2d35425c4f99df51427d11f2d789
original_url: "https://arxiv.org/abs/2608.06165"
processed: 2026-08-07
language: zh-CN
---

# 音频到乐谱转录：预训练特征、数据增强与新 SheetSage-A2S 数据集

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Eoin Cummins, Zhongyi Huang, Alexandre D'Hooge, Zhuoro Mo, Yaolong Ju
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06165)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Audio-to-Score Transcription using Pre-trained Features, Data Augmentation, and the New SheetSage-A2S Dataset|查看原始文件]]

## 摘要

- 现有音频到乐谱（A2S）系统主要聚焦古典音乐，流行音乐应用仍未被充分探索。
- 论文首先发布新 SheetSage-A2S 数据集：61 小时音频与 9,468 个片段的 **kern 乐谱编码，源自 6,066 首独特歌曲，是首个促进流行音乐 A2S 研究的数据集。
- 通过数据增强与 MuQ（音乐音频的预训练特征提取模型）改进现有 A2S 方法，提升泛化能力并提取有意义的音频特征。
- 结果：所提 A2S 模型在古典音乐 Quartets 集合上达到 4.98% 符号错误率（SER），显著优于现有最优的 15.3% SER；在流行音乐 SheetSage-A2S 数据集上达到 20.92% SER，为未来研究提供强基准。数据集、模型与代码已公开。

## 正文

现有音频到乐谱（audio-to-score，A2S）系统主要聚焦古典音乐，流行音乐的应用仍未得到充分探索。本文首先发布新的 SheetSage-A2S 数据集：包括 61 小时音频与 9,468 个片段的 \texttt{**kern} 乐谱编码，源自 6,066 首独特歌曲，是首个促进流行音乐 A2S 研究的数据集。此外，我们通过使用数据增强与 MuQ（一个针对音乐音频的预训练特征提取模型）改进现有 A2S 方法，以增强泛化能力并提取有意义的音频特征。结果表明，所提出的 A2S 模型在古典音乐 Quartets 集合上达到 4.98% 的符号错误率（symbol error rate，SER），显著优于现有最优方法的 15.3% SER。此外，我们的模型在流行音乐 SheetSage-A2S 数据集上达到 20.92% 的 SER，为未来研究提供强基准。数据集、模型与代码已在 https://github.com/Multimodal-Music-Research-Lab/SheetSage2Kern_model 公开。

## 关键词

#音频转乐谱 #音乐信息检索 #数据集 #预训练特征
