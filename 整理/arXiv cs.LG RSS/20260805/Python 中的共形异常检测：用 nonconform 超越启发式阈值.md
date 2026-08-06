---
published: 2026-08-05
title: "Python 中的共形异常检测：用 nonconform 超越启发式阈值"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Conformal Anomaly Detection in Python- Moving Beyond Heuristic Thresholds with nonconform.md"
source_note: "[[信息源/arXiv cs.LG RSS/Conformal Anomaly Detection in Python- Moving Beyond Heuristic Thresholds with nonconform]]"
source_sha256: 44ae43cd565cf30ede0c9d1f24a3f4a923388f41c3a2515d843ac098bda6c5fa
original_url: "https://arxiv.org/abs/2605.13642"
processed: 2026-08-05
language: zh-CN
---

# Python 中的共形异常检测：用 nonconform 超越启发式阈值

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Oliver Hennhöfer、Maximilian Kirsch、Christine Preisach
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.13642)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Conformal Anomaly Detection in Python- Moving Beyond Heuristic Thresholds with nonconform|查看原始文件]]

## 摘要

- 呈现 nonconform，用于在现有机器学习工作流中应用共形异常检测的 Python 包，并以其为基础做实现接地的领域导论：包与 scikit-learn、PyOD 与自定义异常检测器集成，提供校准、p 值生成与错误发现率控制的统一接口；支持从简单分割共形校准到更数据高效与偏移感知扩展的多种共形化策略。
- 多数异常检测系统输出分数而非校准决策，使从业者启发式选阈值且无清晰统计解释；共形异常检测经把异常分数转化为校准 p 值（在数据可交换性统计假设下有效）解决该局限，且扩展该思想的文献日益增长。
- 经从基础概念到高级共形化策略的渐进（配代码示例），论文连接共形异常检测背后的统计思想与其在 nonconform 中的实际使用。
- 实证结果显示实现方法实现统计有原则的异常检测；包与阐述共同旨在使核心共形异常检测工作流在实验与生产导向设置中更可访问、可复现。

## 正文

论文编号：arXiv:2605.13642v3（更新类型：replace-cross）。以下为摘要全文翻译。

大多数异常检测系统输出分数而非校准的决策，让从业者以启发式方式选择阈值，且没有清晰的统计解释。共形异常检测通过把异常分数转化为校准的 p 值来解决这一局限，这些 p 值在数据可交换性的统计假设下有效，并且有日益增长的文献把这一思想扩展到该设置之外。我们呈现 nonconform，一个用于在现有机器学习工作流中应用共形异常检测的 Python 包，并把它作为实现接地的领域导论的基础。该包与 scikit-learn、PyOD 与自定义异常检测器集成，并为校准、p 值生成与错误发现率控制提供统一接口。它支持多种共形化策略：从简单的分割共形校准，到更数据高效与偏移感知的扩展。通过从基础概念到高级共形化策略的渐进（配代码示例），本文连接共形异常检测背后的统计思想与其在 nonconform 中的实际使用。实证结果表明，所实现的方法能够实现统计上有原则的异常检测。该包与阐述共同旨在使核心共形异常检测工作流在实验与生产导向的设置中更可访问且可复现。

## 关键词

#共形预测 #异常检测 #p值 #错误发现率
