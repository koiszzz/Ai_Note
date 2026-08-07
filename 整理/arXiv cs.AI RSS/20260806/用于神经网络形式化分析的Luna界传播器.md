---
published: 2026-08-06
title: 用于神经网络形式化分析的Luna界传播器
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/The Luna Bound Propagator for Formal Analysis of Neural Networks.md
source_note: "[[信息源/arXiv cs.AI RSS/The Luna Bound Propagator for Formal Analysis of Neural Networks]]"
source_sha256: bd2acb470dda8d8d4257608ba1640ca967db840f833fc25d4157c9576be8ebcd
original_url: https://arxiv.org/abs/2603.23878
processed: 2026-08-07
language: zh-CN
---

# 用于神经网络形式化分析的Luna界传播器

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.23878)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/The Luna Bound Propagator for Formal Analysis of Neural Networks|查看原始文件]]

## 摘要

- 提出 Luna，一个用 C++ 实现的基于抽象解释的界传播器，支持在通用计算图上进行区间界传播（IBP）、DeepPoly/CROWN 分析与 alpha-CROWN 分析
- 现有 alpha-CROWN 实现仅限于 Python，难以集成到现有 DNN 验证器与长期生产级系统
- 在 VNN-COMP 2025 的受支持基准上，Luna 在界紧致性与计算效率两方面均优于最先进的 alpha-CROWN 实现
- 代码公开：https://github.com/ai-ar-research/luna

## 正文

参数化 CROWN 分析，即 alpha-CROWN，已成为神经网络验证中一种在实践中成功的抽象解释方法。然而，现有的 alpha-CROWN 实现仅限于 Python，这使得其难以集成到现有的 DNN 验证器以及长期生产级系统之中。

我们提出了 Luna，一种用 C++ 实现的基于抽象解释的新型界传播器。Luna 支持在通用计算图上进行区间界传播（IBP）、DeepPoly/CROWN 分析以及 alpha-CROWN 分析。我们描述了 Luna 的架构，并表明在 VNN-COMP 2025 的受支持基准上，它在界紧致性和计算效率两方面都优于最先进的 alpha-CROWN 实现。Luna 已在 https://github.com/ai-ar-research/luna 公开提供。

## 关键词

#arXiv #神经网络验证 #抽象解释 #CROWN #形式化验证
