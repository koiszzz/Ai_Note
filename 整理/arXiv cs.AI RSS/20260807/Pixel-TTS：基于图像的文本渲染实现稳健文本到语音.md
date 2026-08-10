---
published: 2026-08-07
title: "Pixel-TTS：基于图像的文本渲染实现稳健文本到语音"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Pixel-TTS- Image based Text Rendering for Robust Text-to-Speech.md"
source_note: "[[信息源/arXiv cs.AI RSS/Pixel-TTS- Image based Text Rendering for Robust Text-to-Speech]]"
source_sha256: dcbdd0210b251899be16783e480c092d45c5cb6c6fc5fdaf35832aaeba7680e0
original_url: "https://arxiv.org/abs/2606.14750"
processed: 2026-08-07
language: zh-CN
---

# Pixel-TTS：基于图像的文本渲染实现稳健文本到语音

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Adarsh Arigala, Arjun Gangwar, S Umesh, Yova Kementchedjhieva
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.14750)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Pixel-TTS- Image based Text Rendering for Robust Text-to-Speech|查看原始文件]]

## 摘要

- 基于像素文本建模的近期进展表明，将文本表示为图像使模型能利用视觉线索进行语言理解；将文本接地于其视觉形式使不同 Unicode 编码但结构相似的字符产生相似嵌入，惠及跨语言与零样本场景。
- 传统基于文本的方法独立处理每个字符，限制对未见字符的泛化，并在跨语言适配时要求嵌入扩展。
- 提出 Pixel-TTS：面向视觉接地语音合成的文本到语音框架——将文本渲染为图像，并通过二维卷积层投影生成嵌入；该设计消除微调期间嵌入矩阵扩展，同时提升对未见字符与正字法变体的稳健性。
- 大量实验表明 Pixel-TTS 实现与强基线竞争的性能、更快收敛与稳健零样本泛化。

## 正文

基于像素文本建模的近期进展表明，将文本表示为图像使模型能够利用视觉线索进行语言理解。将文本接地于其视觉形式允许不同 Unicode 编码但结构相似的字符产生相似嵌入，惠及跨语言与零样本场景。传统基于文本的方法独立处理每个字符，限制对未见字符的泛化，并在跨语言适配期间要求嵌入扩展。我们提出 Pixel-TTS，一个面向视觉接地语音合成的文本到语音框架。它将文本渲染为图像，并通过二维卷积层投影生成嵌入。该设计消除微调期间的嵌入矩阵扩展，同时提升对未见字符与正字法变体的稳健性。大量实验表明，Pixel-TTS 实现与强基线竞争的性能、更快的收敛与稳健的零样本泛化。

## 关键词

#文本到语音 #像素文本 #视觉接地 #零样本
