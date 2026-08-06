---
published: 2026-08-05
title: "GraphCliff：用短-长程门控建模细微分子差异引起的关键活性变化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GraphCliff- Short-Long Range Gating for Modeling Critical Activity Changes Caused by Subtle Molecula.md"
source_note: "[[信息源/arXiv cs.AI RSS/GraphCliff- Short-Long Range Gating for Modeling Critical Activity Changes Caused by Subtle Molecula]]"
source_sha256: d6f619ac803310b960e02d75c9e27179e67c57ca91b397350fe03599c580af93
original_url: "https://arxiv.org/abs/2511.03170"
processed: 2026-08-05
language: zh-CN
---

# GraphCliff：用短-长程门控建模细微分子差异引起的关键活性变化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hajung Kim、Jueon Park、Junseok Choe 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.03170)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GraphCliff- Short-Long Range Gating for Modeling Critical Activity Changes Caused by Subtle Molecula|查看原始文件]]

## 摘要

- 分析显示常规图神经网络的嵌入距离无法反映活性差异，把结构相似但功能迥异的分子坍缩成几乎无法区分的表示。
- 提出 GraphCliff：通过局部条件门控机制在节点层面整合短程与长程信息，恢复对这类局部变化的敏感性，同时保持全局分子上下文。
- 实验显示 GraphCliff 在非悬崖与悬崖化合物上都一致提升性能；逐层嵌入分析把这些增益归因于相对强基线图模型对结构相似分子的更锐利区分。

## 正文

论文编号：arXiv:2511.03170v3（更新类型：replace-cross）。以下为摘要全文翻译。

定量构效关系假设分子结构与生物活性之间存在平滑映射。然而，活性悬崖（activity cliff）——结构相似但效力差异大的化合物对——打破这种连续性。近期的活性悬崖基准显示，带扩展连通性指纹的机器学习模型优于图神经网络。我们的分析表明，常规图神经网络的嵌入距离无法反映活性差异，把结构相似但功能迥异的分子坍缩为几乎无法区分的表示。为在保持全局分子上下文的同时恢复对这类局部变化的敏感性，我们提出 GraphCliff：通过局部条件门控机制在节点层面整合短程与长程信息。实验结果表明，GraphCliff 在非悬崖与悬崖化合物上都一致提升性能；逐层嵌入分析把这些增益归因于相对强基线图模型对结构相似分子的更锐利区分。

## 关键词

#活性悬崖 #图神经网络 #分子表征 #QSAR
