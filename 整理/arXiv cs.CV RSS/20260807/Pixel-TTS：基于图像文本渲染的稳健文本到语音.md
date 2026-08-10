---
published: 2026-08-07
title: "Pixel-TTS：基于图像文本渲染的稳健文本到语音"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Pixel-TTS- Image based Text Rendering for Robust Text-to-Speech.md"
source_note: "[[信息源/arXiv cs.CV RSS/Pixel-TTS- Image based Text Rendering for Robust Text-to-Speech]]"
source_sha256: 7483276378df7280ca711cbccd75860358360582a2b927b2dfc141da2595e5a4
original_url: "https://arxiv.org/abs/2606.14750"
processed: 2026-08-07
language: zh-CN
---

# Pixel-TTS：基于图像文本渲染的稳健文本到语音

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Adarsh Arigala, Arjun Gangwar, S Umesh, Yova Kementchedjhieva
> - **发布时间**：2026-08-07
> - **分类**：eess.AS
> - **原文**：[打开链接](https://arxiv.org/abs/2606.14750)

## 摘要

- 基于像素文本建模的近期进展显示将文本表示为图像使模型能利用视觉线索进行语言理解；将文本锚定于其视觉形式使结构相似但 Unicode 编码不同的字符产生相似嵌入，惠及跨语言与零样本场景。
- 常规基于文本的方法独立处理每个字符，限制对未见字符的泛化，并要求跨语言适配时扩展嵌入。
- 提出 Pixel-TTS：视觉锚定语音合成的文本到语音框架；将文本渲染为图像并经 2D 卷积层投影生成嵌入；该设计消除微调期间嵌入矩阵扩展，同时改进对未见字符与正字法变体的稳健性。
- 大量实验显示 Pixel-TTS 实现与强基线竞争的性能、更快收敛与稳健零样本泛化。

## 正文

基于像素的文本建模近期进展表明，将文本表示为图像使模型能够利用视觉线索进行语言理解。将文本锚定于其视觉形式，允许结构相似但 Unicode 编码不同的字符产生相似的嵌入，惠及跨语言与零样本场景。常规的基于文本方法独立处理每个字符，限制了对未见字符的泛化，并要求在跨语言适配期间进行嵌入扩展。研究提出 Pixel-TTS，一个用于视觉锚定语音合成的文本到语音框架。它将文本渲染为图像，并经一个 2D 卷积层投影它们以生成嵌入。该设计消除了微调期间的嵌入矩阵扩展，同时改进了对未见字符与正字法变体的稳健性。大量实验表明，Pixel-TTS 实现了与强基线竞争的性能、更快的收敛与稳健的零样本泛化。

## 关键词

文本到语音、像素基文本、视觉锚定、零样本、嵌入
