---
published: 2026-08-07
title: "从工作二元表示进行固定观测线性 MCFG 的正数据学习"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Positive-Data Learning of Fixed-Observation Linear MCFGs from Working Binary Presentations.md"
source_note: "[[信息源/arXiv cs.LG RSS/Positive-Data Learning of Fixed-Observation Linear MCFGs from Working Binary Presentations]]"
source_sha256: 674a59bcdaec4e49a5350bb550082fb522056dd5f7ce309e64a8a50f11cd3529
original_url: "https://arxiv.org/abs/2605.11644"
processed: 2026-08-07
language: zh-CN
---

# 从工作二元表示进行固定观测线性 MCFG 的正数据学习

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Takayuki Kuriyama
> - **发布时间**：2026-08-07
> - **分类**：cs.FL
> - **原文**：[打开链接](https://arxiv.org/abs/2605.11644)

## 摘要

- 研究允许有界扇出缩减工作二元线性非删除多重上下文无关文法（MCFG）表示的语言的正数据学习；学习者被提供固定显式有限幺半群同态 h:Σ*→M，用作组合有限状态观测。
- 通过命名句子-上下文分布定义 ((f,h))-元组可替换性；对每个固定扇出界 f 与态射 h，规范集合驱动学习者从有限表示相对特征样本精确重建每个目标；原始假说用等扇出单元规则，多项式单元消除产生等价的无单元工作 MCFG；从有限样本 K 出发，最终假说可在 |K|₊^{O(f)} 时间内构造（含输出大小）。
- 固定一个有限观测态射 h 所得类称固定观测纤维；语言 L₃={aⁿbⁿcⁿ|n≥1} 属于此类纤维但未通过 Yoshinaka 的原始二维可替换性条件；一般二元表示允许对固定集合驱动学习者均匀的负样本障碍，而自然单脊子类有多项式负样本并含三块与跨串示例。
- 有界大小观测编译为一个乘积态射，而所有有限观测的无界并集不可由正数据识别；无穷成员核准则将复制语言排除在每个固定纤维之外。

## 正文

研究允许有界扇出的缩减工作二元线性非删除多重上下文无关文法（multiple context-free grammar, MCFG）表示的语言的正数据学习。学习者被提供一个固定的显式有限幺半群同态 h:Σ*→M，用作组合的有限状态观测。研究通过命名句子-上下文分布定义 ((f,h))-元组可替换性。对每个固定扇出界 f 与态射 h，一个规范集合驱动学习者从有限表示相对特征样本精确重建每个目标。其原始假说使用等扇出单元规则；多项式单元消除产生等价的无单元工作 MCFG。从有限样本 K 出发，最终假说可在时间 |K|₊^{O(f)} 内构造，包括输出大小。有限观测是实质性的：固定一个有限观测态射 h 所得类称为固定观测纤维（fixed-observation fiber），该类的每个目标都向学习者提供同一态射。语言 L₃={aⁿbⁿcⁿ|n≥1} 属于此类纤维，但未通过 Yoshinaka 的原始二维可替换性条件。一般二元表示允许对固定集合驱动学习者一致的负样本障碍，而一个自然单脊子类具有多项式特征样本，并包含三块与跨串示例。最后，有界大小观测编译成一个乘积态射，而所有有限观测的无界并集不可由正数据识别；一个无穷成员核准则将复制语言排除在每一个固定纤维之外。

## 关键词

文法推断、正数据、MCFG、形式语言、可替换性
