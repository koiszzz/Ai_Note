---
published: 2026-08-05
title: "HyperFL：软件故障定位的查询自适应表示学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HyperFL- Query-Adaptive Representation Learning for Software Fault Localization.md"
source_note: "[[信息源/arXiv cs.AI RSS/HyperFL- Query-Adaptive Representation Learning for Software Fault Localization]]"
source_sha256: c2295ea5a3f6662d9d60fb325913844f52012d8066614b4bfae069d00a81f827
original_url: "https://arxiv.org/abs/2608.02967"
processed: 2026-08-05
language: zh-CN
---

# HyperFL：软件故障定位的查询自适应表示学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shuai Shao、Yiming Zeng、Yu Zhao 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02967)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HyperFL- Query-Adaptive Representation Learning for Software Fault Localization|查看原始文件]]

## 摘要

- 提出 HyperFL，软件故障定位的查询自适应表示学习框架：用轻量超网络为查询编码器生成查询特定的 LoRA 参数，实现动态查询适配，同时保持代码编码器固定可复用。
- 在真实问题定位基准上，HyperFL 在多个嵌入骨干上一致提升检索性能：函数级 MRR@10 相对提升最高 13.3%，Hit@1 相对提升 16.7%，优于最先进方法 SweRank。
- 进一步分析显示 HyperFL 对不同问题特征学习不同适配模式，凸显查询自适应表示对软件问题定位的有效性。

## 正文

论文编号：arXiv:2608.02967v1（更新类型：cross）。以下为摘要全文翻译。

软件故障定位识别导致所报告问题的代码位置，是自动化调试与程序修复的基础步骤。近期的基于检索的方法把故障定位表述为稠密检索任务：在问题报告与源代码之间学习共享嵌入空间。然而，这些方法用固定查询表示编码所有问题报告，尽管真实世界问题报告在长度、结构与调试信息上差异很大。为克服这一局限，我们提出 HyperFL，一个软件故障定位的查询自适应表示学习框架。HyperFL 用轻量超网络为查询编码器生成查询特定的 LoRA 参数，实现动态查询适配，同时保持代码编码器固定且可复用。在真实问题定位基准上的实验表明，HyperFL 在多个嵌入骨干上一致提升检索性能，在函数级 MRR@10 上相对提升最高 13.3%、Hit@1 相对提升 16.7%，优于最先进方法 SweRank。进一步分析表明，HyperFL 对不同的问题特征学习不同的适配模式，凸显了查询自适应表示对软件问题定位的有效性。

## 关键词

#故障定位 #检索增强 #超网络 #LoRA
