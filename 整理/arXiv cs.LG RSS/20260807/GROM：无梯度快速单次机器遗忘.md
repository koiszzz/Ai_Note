---
published: 2026-08-07
title: "GROM：无梯度快速单次机器遗忘"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GROM- Gradient-Free Rapid One-Shot Machine Unlearning.md"
source_note: "[[信息源/arXiv cs.LG RSS/GROM- Gradient-Free Rapid One-Shot Machine Unlearning]]"
source_sha256: 50147f92c160ac7c246a7a53f82cd2a5859f7fb234f89eed49789c4526d13924
original_url: "https://arxiv.org/abs/2608.05783"
processed: 2026-08-07
language: zh-CN
---

# GROM：无梯度快速单次机器遗忘

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Paweł Batorski, Przemysław Spurek, Paul Swoboda
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05783)

## 摘要

- 机器遗忘对安全移除 LLM 中的特定敏感知识至关重要；现有 SOTA 主要依赖迭代的训练时微调遗忘，即使使用 LoRA 等参数高效降维，梯度优化仍计算昂贵且缺乏显式解析形式化，且可能只是隐藏而非移除目标知识——量化被遗忘模型即可恢复大量本应抹除的内容。
- 提出单次遗忘方法：放弃迭代优化，采用直接、精确的解析解；将遗忘过程框定为岭正则最小二乘问题，为目标权重矩阵导出闭式加性更新。
- 更新强制所选层抑制不想要的内容，同时严格保留保留数据上的行为；仅由无梯度前向传递计算，无反向传播、无需迭代收敛，GROM 数秒内应用权重编辑，比传统微调快几个数量级。
- 广泛评估显示 GROM 在 TOFU-5%、TOFU-10%、MUSE-Books、MUSE-News 与 WMDP 上取得 SOTA 遗忘-效用权衡；因从权重中移除而非掩蔽目标内容，也能抵御恢复梯度基线本应遗忘内容的大量内容的低比特量化攻击。

## 正文

机器遗忘已成为安全地从大语言模型（LLM）中移除特定敏感知识的关键能力。当前最先进方法主要依赖通过微调进行的迭代式训练时遗忘。然而，即使利用 LoRA 等参数高效降维技术，基于梯度的优化仍计算昂贵且缺乏显式解析形式化。它还可能使目标知识只是被隐藏而非移除，以至于仅量化被遗忘的模型就能恢复大量本应抹除的内容。为解决这些问题，研究提出一种新颖的单次遗忘方法，放弃迭代优化，采用直接、精确的解析解。研究将遗忘过程框定为岭正则最小二乘优化问题，为目标权重矩阵导出闭式加性更新。该更新强制所选层抑制不想要的内容，同时严格保留其在保留数据上的行为。更新完全由无梯度前向传递计算，无反向传播、无需迭代至收敛，GROM 数秒内应用权重编辑，比传统微调快几个数量级。广泛评估表明 GROM 在 TOFU-5%、TOFU-10%、MUSE-Books、MUSE-News 与 WMDP 上取得最先进的遗忘-效用权衡，显著降低计算开销且不牺牲整体模型性能。由于该更新从权重中移除目标内容而非掩蔽它，GROM 还能抵御恢复梯度基线似乎遗忘的大量内容的低比特量化攻击。代码公开于 https://github.com/Batorskq/GROM。

## 关键词

机器遗忘、LLM、闭式解、岭回归、隐私
