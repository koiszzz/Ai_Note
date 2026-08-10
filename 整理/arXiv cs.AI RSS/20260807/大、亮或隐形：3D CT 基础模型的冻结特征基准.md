---
published: 2026-08-07
title: "大、亮或隐形：3D CT 基础模型的冻结特征基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Big, Bright, or Invisible- A Frozen-Feature Benchmark of 3D CT Foundation Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/Big, Bright, or Invisible- A Frozen-Feature Benchmark of 3D CT Foundation Models]]"
source_sha256: c166c1fd9953139dd940f908dc4ed5cc83df3437d438065660260e71a338c1d8
original_url: "https://arxiv.org/abs/2608.05960"
processed: 2026-08-07
language: zh-CN
---

# 大、亮或隐形：3D CT 基础模型的冻结特征基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Maulik Chevli, Johannes Brandt, Rickmer Braren, Daniel Rueckert, Philip M\"uller
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05960)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Big, Bright, or Invisible- A Frozen-Feature Benchmark of 3D CT Foundation Models|查看原始文件]]

## 摘要

- 常规 CT 解读本质全面，捕获整个扫描体积的偶然发现；3D CT 基础模型可通过提供解剖与病理的可泛化表示辅助该过程。
- 论文在三个胸部 CT 队列（含未见内部临床数据集）上使用 k 近邻、零样本提示与线性探测基准测试十个冻结 CT 编码器的诊断广度。
- 发现没有普遍最优：排名随评估环境显著波动；结合细粒度图像 tokenization 与视觉-语言对齐的模型总体最佳，但轻量监督编码器仍极具竞争力，证明显式标签可有效替代规模。
- 关键的是，性能的首要决定因素不是模型架构而是物理瓶颈：发现的可见性随其与周围组织的对比度与空间范围缩放；通过受控的器官内比较实证表明广泛或高对比异常（如装置与积液）被可靠恢复，小而低对比的局灶病变在所有编码器上仍是持续挑战，归因于全局池化嵌入的固有局限，准确表示小而低对比结构需要区域或病灶级预训练。

## 正文

常规 CT 解读本质上是全面的，捕获整个扫描体积的偶然发现。3D CT 基础模型可通过提供解剖与病理的可泛化表示来辅助这一过程。为评估其诊断广度，我们在三个胸部 CT 扫描队列（包括一个未见过的内部临床数据集）上基准测试十个冻结 CT 编码器，使用 k 近邻、零样本提示与线性探测。我们发现不存在普遍最优，排名随评估环境显著波动。尽管结合细粒度图像 tokenization 与视觉-语言对齐的模型通常表现最佳，一个轻量监督编码器仍极具竞争力，证明显式标签可以有效地替代规模。关键在于，我们观察到性能的首要决定因素不是模型架构，而是物理瓶颈：发现的可见性随其与周围组织的对比度及其空间范围缩放。通过受控的器官内比较，我们实证证明广泛或高对比的异常（如装置与积液）被可靠恢复。相反，小而低对比的局灶病变在所有被评估编码器上仍是持续挑战。我们将此归因于全局池化嵌入的固有局限，表明准确表示小而低对比的结构将需要区域或病灶级预训练。

## 关键词

#CT基础模型 #医学影像 #冻结特征 #基准测试
