---
title: "LLM 回测中的时间泄露：测量、验证与调整分数"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Temporal Leakage in LLM Backtesting- Measurement, Validation, and Adjusted Scores.md"
source_note: "[[信息源/arXiv cs.LG RSS/Temporal Leakage in LLM Backtesting- Measurement, Validation, and Adjusted Scores.]]"
source_sha256: b48282d6a9d717ff4c3b10235cadb3d87aeeb0d321b5bb906d0edb157c095211
original_url: "https://arxiv.org/abs/2608.02985"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LLM 回测中的时间泄露：测量、验证与调整分数

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Zeyu Zhang、Bradly C. Stadie
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02985)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Temporal Leakage in LLM Backtesting- Measurement, Validation, and Adjusted Scores.|查看原始文件]]

## 摘要

- LLM 回测污染的标准检查很简单：比较训练截止前后的分数；表明该检查无信息量：四个旗舰模型在它们不可能记忆的问题上未通过——每个得分问题都在其截止后解决。
- 原因是结构性的：模型对接近截止的时间知道得更多是合理的，因此近因性模仿泄露，且证明没有被动回测能把它与真实技能分开。
- 测量（而非仅仅检测）需要来自回测之外的信息：已知截止识别边界处的泄露；匹配干净对照全局识别它并产生泄露调整分数。
- 还推导泄露藏在何处：它集中在让大众惊讶且在训练中覆盖良好的结果上，部分记忆化被不成比例地奖励。
- 通过在孪生模型中植入泄露验证估计器对 ground truth 的准确性：恢复注入剂量，在干净问题上返回零。
- 部署到前沿模型：检测一个截止局部特征，并在审计的功率下限清除五个表观优势纯属近因性的模型。
- 结论：回测不必丢弃，需要一个可辩护的参考。

## 正文

论文编号：arXiv:2608.02985v1（更新类型：new）。以下为摘要全文翻译。

LLM 回测中污染的标准检查很简单：比较训练截止前后的分数。我们表明这一检查没有信息量。四个旗舰模型在它们不可能记忆的问题上未通过该检查：每个得分问题都在其截止之后解决。原因是结构性的。模型对接近其截止时间的事物知道得更多是合理的，所以近因性模仿泄露，我们证明没有被动回测能把这两者与真实技能分开。测量（而不仅仅是检测）需要来自回测之外的信息。我们以两种形式提供它。一个已知的截止在边界处识别泄露；一个匹配的干净对照在全局识别它并产生一个泄露调整的分数。我们还推导出泄露藏在何处：它集中在让大众惊讶且训练中覆盖良好的结果上，且部分记忆化被不成比例地奖励。我们通过在孪生模型中植入泄露来对照 ground truth 验证估计器，它们在其中恢复注入的剂量并在干净问题上返回零。部署到前沿模型上，它们检测到一个截止局部化的特征，并在审计的功率下限处清除五个表观优势纯粹是近因性的模型。回测不需要被丢弃；它们需要一个可辩护的参考。

## 关键词

#LLM回测 #数据污染 #时间泄露 #训练截止 #评估
