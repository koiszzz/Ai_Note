---
published: 2026-08-07
title: "LILAC：幂等神经语音编解码器"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LILAC- An Idempotent Neural Speech Codec.md"
source_note: "[[信息源/arXiv cs.LG RSS/LILAC- An Idempotent Neural Speech Codec]]"
source_sha256: 9c40435e891d292726978e3a90d060ddd9a4f09abeb2d3736b26e3c5113eb56a
original_url: "https://arxiv.org/abs/2608.05727"
processed: 2026-08-07
language: zh-CN
---

# LILAC：幂等神经语音编解码器

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：June Young Yi, Dongwook Lee, Jiheum Yeom, Sungroh Yoon
> - **发布时间**：2026-08-07
> - **分类**：cs.SD
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05727)

## 摘要

- 神经音频编解码器广泛用于语音生成与编辑，但现有编解码器不幂等：论文十二个基线系统中每个测试配置平均在单次解码-重编码过程中改写至少 15% 的 token；对管道中可能出现解码输出重编码的神经音频编解码器 token 接口构成问题。
- 提出 LILAC：全卷积 24 kHz 语音编解码器，9.375 Hz、0.75 kbit/s，构造上编解码器幂等；对任何有效 token 流解码音频的重编码返回相同流。
- 在保持竞争力的同时实现幂等性：LibriSpeech 与 LibriTTS-R 测试集 UTMOS 4.14 与 4.24，与 SOTA 亚 1 kbit/s 神经音频编解码器相当。

## 正文

神经音频编解码器广泛采用于语音生成与编辑。然而，现有神经音频编解码器并不幂等：在论文的十二个基线系统中，每个测试配置平均在单次解码-重编码过程中改写至少 15% 的 token。这对在可能发生解码输出重编码的管道中将神经音频编解码器用作 token 接口构成问题。研究提出 LILAC，一个全卷积 24 kHz 语音编解码器，9.375 Hz、0.75 kbit/s，构造上编解码器幂等：对任何有效 token 流的解码音频进行重编码，返回相同流。LILAC 在保持竞争性质量的同时实现幂等性：在 LibriSpeech 与 LibriTTS-R 测试集上 UTMOS 达 4.14 与 4.24，与最先进亚 1 kbit/s 神经音频编解码器相当。

## 关键词

神经编解码器、语音、幂等、低比特率、token 接口
