---
published: 2026-08-07
title: "KVAE：多模态生成模型的 Tokenizer 家族"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/KVAE- Family of Tokenizers for Multimodal Generative Models.md"
source_note: "[[信息源/arXiv cs.LG RSS/KVAE- Family of Tokenizers for Multimodal Generative Models]]"
source_sha256: 38ed176c861f433c223b4a9ae7f1fe3923be3be1c114df997a1980536076a9cd
original_url: "https://arxiv.org/abs/2608.05798"
processed: 2026-08-07
language: zh-CN
---

# KVAE：多模态生成模型的 Tokenizer 家族

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Andrey Shutkin, Denis Parkhomenko, Ivan Kirillov, Kirill Chernyshev, Kirill Malakhov, Ilia Vasiliev, Ilia Trushkin, Valeriya Kobenko, David Chikovani, Alexander Ivanov, Azat Saginbaev, Egor Silvestrov, Ivan Mikheev, Konstantin Zakharov
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05798)

## 摘要

- 潜在扩散建模（LDM）利用 tokenizer 将输入信号映射到压缩表征；tokenizer 是生成过程本身的一部分，影响学习速度、合成样本质量并为后续应用奠基。
- 报告一系列面向后续文本条件生成的 KVAE tokenizer：KVAE-Audio（连续全频带 48 kHz、50 Hz 潜 64 通道）；KVAE-3D（两个 4x16x16 与 4x8x8 压缩的因果视频 tokenizer）；KVAE-2D（图像模型，8 倍压缩、32 通道）。
- 重建（PSNR、LPIPS、PESQ 等）与生成结果在客观（Frechet 距离、CLIP 分数、CLAP 分数等）与主观（并排评估）指标上匹配或超越前沿开源 tokenizer（Wan-2.2、HunyuanVideo-1.5、FLUX.2、MovieGen、StableAudio 与 MMAudio 的 VAE）。
- 分享训练细节、模型选择方法与设计选择消融；代码公开。

## 正文

潜在扩散建模（LDM）是突出的范式，利用 tokenizer 将输入信号映射到压缩表征。这种依赖使 tokenizer 成为生成过程本身的组成部分，因为它影响学习速度、合成样本的质量，并为后续应用奠定基础。本报告呈现一系列面向音频、图像与视频、全部设计用于后续文本条件生成的 KVAE tokenizer：KVAE-Audio，连续全频带 48 kHz tokenizer，50 Hz 潜、64 通道；KVAE-3D，两个 4x16x16 与 4x8x8 压缩的因果视频 tokenizer；KVAE-2D，图像模型，8 倍压缩、32 通道。研究证明重建（PSNR、LPIPS、PESQ 等）与生成结果在客观指标（Frechet 距离、CLIP 分数、CLAP 分数等）与主观指标（并排评估）上匹配或超越前沿开源 tokenizer，如 Wan-2.2、HunyuanVideo-1.5、FLUX.2、MovieGen、StableAudio 与 MMAudio 的 VAE。考虑到开发难度，研究向社区分享训练细节、模型选择方法与设计选择消融。代码公开于 https://github.com/kandinskylab/kvae 与 https://github.com/kandinskylab/kvae-audio。

## 关键词

Tokenizer、潜在扩散、多模态、VAE、视频生成
