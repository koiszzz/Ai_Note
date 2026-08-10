---
published: 2026-08-07
title: "大、亮或隐形：3D CT 基础模型的冻结特征基准"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Big, Bright, or Invisible- A Frozen-Feature Benchmark of 3D CT Foundation Models.md"
source_note: "[[信息源/arXiv cs.CV RSS/Big, Bright, or Invisible- A Frozen-Feature Benchmark of 3D CT Foundation Models]]"
source_sha256: 788efed459b86483be08eae3af297e18efac28deed7979b22d0d178e82cc74d3
original_url: "https://arxiv.org/abs/2608.05960"
processed: 2026-08-07
language: zh-CN
---

# 大、亮或隐形：3D CT 基础模型的冻结特征基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Maulik Chevli, Johannes Brandt, Rickmer Braren, Daniel Rueckert, Philip Müller
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05960)

## 摘要

- 常规 CT 解读固有全面，捕捉整个扫描体积的偶发发现；3D CT 基础模型可通过提供解剖与病理的可泛化表征辅助该过程。
- 为评估诊断广度，在三个胸部 CT 扫描队列（含未见内部临床数据集）基准测试十个冻结 CT 编码器，用 k 最近邻、零样本提示与线性探测。
- 未发现普适 SOTA：排名随评估上下文显著波动；结合细粒度图像 token 化与视觉语言对齐的模型通常最佳，轻量监督编码器仍高度竞争，证明显式标签可有效替代规模。
- 关键发现：主要性能决定因素是物理瓶颈而非模型架构——发现的可检测性随其相对周围组织的对比度与空间范围扩展；受控器官内比较实证显示广泛或高对比异常（如设备与积液）可靠恢复；小而低对比的局灶性病变对所有评估编码器仍是持续挑战；归因于全局池化嵌入的固有局限，准确表示小低对比结构需要区域或病变级预训练。

## 正文

常规 CT 解读固有地全面，捕捉整个扫描体积中的偶发发现。3D CT 基础模型可通过提供解剖与病理的可泛化表征来辅助该过程。为评估其诊断广度，研究在三个胸部 CT 扫描队列（包括一个未见过的内部临床数据集）上基准测试十个冻结 CT 编码器，使用 k 最近邻、零样本提示与线性探测。研究未发现普适的最先进：排名随评估上下文显著波动。虽然结合细粒度图像 token 化与视觉语言对齐的模型通常表现最佳，一个轻量监督编码器仍高度竞争，证明显式标签可以有效地替代规模。关键的是，研究观察到主要性能决定因素不是模型架构，而是一个物理瓶颈：发现的可检测性随其相对周围组织的对比度及其空间范围扩展。通过受控的器官内比较，研究实证证明广泛或高对比度的异常（如设备与积液）被可靠恢复。相反，小而低对比度的局灶性病变对所有评估编码器仍是持续挑战。研究将其归因于全局池化嵌入的固有局限，表明准确表示小而低对比的结构需要区域级或病变级预训练。

## 关键词

CT 基础模型、冻结特征、基准、诊断广度、医学影像
