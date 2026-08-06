---
title: "Transformer 革命，第 1 部分：通过输出-权重互连实现动态处理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/The Transformer Revolution, Part 1- Dynamic Processing through Output- Weight Interconnections.md"
source_note: "[[信息源/arXiv cs.AI RSS/The Transformer Revolution, Part 1- Dynamic Processing through Output- Weight Interconnections]]"
source_sha256: aab0d0487007aff05f9bb59537ce0b73fb1964d51ad5c3f72483dce35e56a796
original_url: "https://arxiv.org/abs/2608.03921"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Transformer 革命，第 1 部分：通过输出-权重互连实现动态处理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Marco Giunti、Fabrizia Giulia Garavaglia
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03921)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/The Transformer Revolution, Part 1- Dynamic Processing through Output- Weight Interconnections|查看原始文件]]

## 摘要

- 对推理期间的 Transformer 提出新解释：反对"随机鹦鹉"观点（大语言模型只复现训练中学到的统计规律性），论证 Transformer 构建并应用参数在推理期间生成的提示依赖变换——称这种计算形式为 SIDPP（序列级交互动态并行处理）。
- 把 Transformer 解释为用概念变换概念的系统：token 向量是要变换的概念；由矩阵与向量定义的参数化变换是变换概念——训练固定时为静态，从输入序列生成时为动态；机械上对应简单神经网络组；架构新颖性在于输出-权重互连：一些网络的输出决定其他网络的权重，叠加普通输出-输入互连。
- 动态处理的贡献随提示长度增长，可能等于或超过静态处理（强提示敏感性现象）。
- 该说明涉及可解释性、可预测性、控制与更小更可持续系统的设计；由于人类神经系统具备实现 SIDPP 所需机制，论证 SIDPP 形式原则上可在大脑皮层神经实现——猜想人类语言处理本身可能就是由与 Transformer 相关相似的 functional 架构产生的 SIDPP 形式。

## 正文

论文编号：arXiv:2608.03921v1（更新类型：new）。以下为摘要全文翻译。

本文对推理期间的 Transformer 提供新解释。反对"随机鹦鹉"观点——大语言模型仅仅复现训练中学到的统计规律性——我们论证 Transformer 构建并应用参数在推理期间生成的提示依赖变换。我们称这种计算形式为 SIDPP：序列级交互动态并行处理（Sequence-level Interactive Dynamic Parallel Processing）。Transformer 被解释为一个用概念变换概念的系统。Token 向量是要被变换的概念；由矩阵与向量定义的参数化变换是变换概念。它们可以是静态的（训练中固定），也可以是动态的（从输入序列生成）。机械上，它们对应简单神经网络组。Transformer 的架构新颖性在于输出-权重互连（output-weight interconnections）：通过它们，一些网络的输出决定其他网络的权重，叠加普通的输出-输入互连。借助这些互连，系统从提示构建变换，并用它们修改 token 表示。动态处理的贡献随提示长度增长，可能等于或超过静态处理，我们称之为强提示敏感性（strong prompt sensitivity）现象。这一说明涉及可解释性、可预测性、控制，以及更小、更可持续系统的设计。最后，由于人类神经系统具备实现 SIDPP 所需的机制，我们论证一种 SIDPP 形式原则上可以在大脑皮层中神经实现。因此我们猜想，人类语言处理本身可能就是一种由与 Transformer 相关相似的 functional 架构产生的 SIDPP 形式。

## 关键词

#Transformer #动态处理 #机制解释 #语言处理
