---
published: 2026-08-06
title: 用于神经网络形式分析的Luna界传播器
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/The Luna Bound Propagator for Formal Analysis of Neural Networks.md
source_note: "[[信息源/arXiv cs.LG RSS/The Luna Bound Propagator for Formal Analysis of Neural Networks]]"
source_sha256: 630bd98a76a17f84b8c7186328fcd8a21cc65e0bc15362dbde56a3c05f42742c
original_url: https://arxiv.org/abs/2603.23878
processed: 2026-08-07
language: zh-CN
---

# 用于神经网络形式分析的Luna界传播器

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.23878)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/The Luna Bound Propagator for Formal Analysis of Neural Networks|查看原始文件]]

## 摘要

- alpha-CROWN 已成为实践上成功的神经网络验证抽象解释方法，但现有实现局限于 Python。
- Luna 是一个用 C++ 实现的基于抽象解释的界传播器，支持 IBP、DeepPoly/CROWN 与 alpha-CROWN 分析（通用计算图）。
- 在 VNN-COMP 2025 支持基准上，Luna 在界紧性和计算效率上均优于最先进的 alpha-CROWN 实现，并开源。

## 正文

参数化 CROWN 分析（即 alpha-CROWN）已成为神经网络验证中一种实践上成功的抽象解释方法。然而，alpha-CROWN 的现有实现仅限于 Python，这使它与现有 DNN 验证器和长期生产级系统的集成复杂化。我们引入 Luna，一个用 C++ 实现的基于抽象解释的界传播器。Luna 支持区间界传播（Interval Bound Propagation）、DeepPoly/CROWN 分析以及通用计算图上的 alpha-CROWN 分析。我们描述了 Luna 的架构，并表明在 VNN-COMP 2025 支持基准上，它在界紧性和计算效率方面均优于最先进的 alpha-CROWN 实现。Luna 公开可用，地址为 https://github.com/ai-ar-research/luna。

## 关键词

#Luna #神经网络验证 #抽象解释 #alpha-CROWN #界传播 #形式分析
