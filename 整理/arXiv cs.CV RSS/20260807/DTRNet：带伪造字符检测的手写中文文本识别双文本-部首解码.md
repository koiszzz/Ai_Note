---
published: 2026-08-07
title: "DTRNet：带伪造字符检测的手写中文文本识别双文本-部首解码"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DTRNet- Dual Text-Radical Decoding for Handwritten Chinese Text Recognition with Faked Character Det.md"
source_note: "[[信息源/arXiv cs.CV RSS/DTRNet- Dual Text-Radical Decoding for Handwritten Chinese Text Recognition with Faked Character Det]]"
source_sha256: d8140141eba1f4235b29a3501de3c4cc7858095da807d4d8910b2eca72f74eec
original_url: "https://arxiv.org/abs/2608.05848"
processed: 2026-08-07
language: zh-CN
---

# DTRNet：带伪造字符检测的手写中文文本识别双文本-部首解码

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Runrui Li, Lin Zhu, Hua Huang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05848)

## 摘要

- K-12 教育场景中，手写中文文本识别不仅应转录学生书写，还应检测伪造字符；现有识别模型通常限于预定义正常字符集，无法显式识别伪造字符。
- 现有检测方法有互补局限：字符级方法提供可解释结构证据但效率低，行级方法高效但重度依赖置信分数，易漏检且缺乏显式结构证据；关键挑战是保留独立于上下文推断的字符结构证据，同时保持行级效率。
- 提出 DTRNet：行级伪造字符检测的双文本-部首解码框架；解耦上下文感知文本识别与逐字符结构验证：文本分支执行行级转录，部首分支预测合法表意描述序列（IDS）用于基于词典的伪造字符判断。
- 引入 IDS 引导置信度调整（IGCA）推理期间用结构证据精化文本预测；结果显示 DTRNet 有效检测伪造字符，同时保持强识别性能并提供可解释部首级证据；代码、检查点与处理数据集公开。

## 正文

在 K-12 教育场景中，手写中文文本识别不仅应转录学生书写，还应检测伪造（faked）字符。然而，现有识别模型通常限于预定义的正常字符集，因此无法显式识别伪造字符。现有检测方法展现互补的局限：字符级方法提供可解释的结构证据但效率低，而行级方法高效但重度依赖置信分数，易漏检且缺乏显式结构证据。因此，关键挑战是在保持行级效率的同时，保留独立于上下文推断的字符结构证据。为此，研究提出 DTRNet，一个行级伪造字符检测的双文本-部首（Text-Radical）解码框架。DTRNet 将上下文感知文本识别与逐字符结构验证解耦：文本分支执行行级转录，部首分支为基于词典的伪造字符判断预测合法的表意描述序列（Ideographic Description Sequences, IDS）。研究还引入 IDS 引导置信度调整（IDS-Guided Confidence Adjustment, IGCA），在推理期间用结构证据精化文本预测。实验结果表明，DTRNet 有效检测伪造字符，同时保持强识别性能，并提供可解释的部首级证据。代码、检查点与处理后的数据集公开于 https://github.com/BNU-ERC-ITEA/DTRNet。

## 关键词

手写中文识别、伪造字符检测、部首、IDS、教育
