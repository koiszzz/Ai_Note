---
published: 20260806
title: "超越语义等价：LLM 不确定性量化的逻辑图"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Beyond Semantic Equivalence- Logical Graphs for LLM Uncertainty Quantification.md"
source_note: "[[信息源/arXiv cs.AI RSS/Beyond Semantic Equivalence- Logical Graphs for LLM Uncertainty Quantification]]"
source_sha256: 69a553dc304b1f5ae268ff0aacc06fc9fe1473bce829a0fbf1fbf8d709c1a444
original_url: "https://arxiv.org/abs/2607.16868"
processed: 2026-08-06
language: zh-CN

---

# 超越语义等价：LLM 不确定性量化的逻辑图

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yanni Dong, Minghua Liu, Meilin Zhu, Xiaowei Huang, Lijun Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.16868)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Beyond Semantic Equivalence- Logical Graphs for LLM Uncertainty Quantification|查看原始文件]]

## 摘要

- 大语言模型常产生自信表述但不可靠的输出，对安全敏感应用部署构成关键挑战；语义熵等现有不确定性指标在语义等价层面捕捉一致性，但大多忽略不同答案之间的逻辑关系。
- 本文提出逻辑图不确定性（LGU），显式建模答案之间的蕴含和不兼容：沿蕴含链将概率质量聚合到答案支持的最具体假设，测量所得分布的熵，并惩罚这些假设之间的相互不兼容。
- 跨多个问答基准和模型家族，LGU 在现有不确定性指标中平均排名第一，最大收益（对语义熵最高 +7.1% AUROC 和 +3.5% AUARC）出现在采样答案逻辑结构化的问题上。

## 正文

大语言模型常产生自信表述但不可靠的输出，对安全敏感应用的部署构成关键挑战。语义熵等现有不确定性指标在语义等价层面捕捉一致性，但大多忽略不同答案之间的逻辑关系。因此，它们倾向于高估不确定性，并在生成响应形式多样但逻辑兼容（例如仅粒度或具体性不同）的设置中错误标记幻觉。我们提出逻辑图不确定性（Logical Graph Uncertainty，LGU），一个显式建模答案之间蕴含和不兼容的框架。LGU 沿蕴含链将概率质量聚合到答案支持的最具体假设，测量所得分布的熵，并惩罚这些假设之间的相互不兼容。跨多个问答基准和模型家族，LGU 在现有不确定性度量中平均排名第一，其最大收益——对语义熵最高 +7.1% AUROC 和 +3.5% AUARC——出现在采样答案逻辑结构化的问题上。

## 关键词

#不确定性量化 #逻辑图 #LLM #校准 #arXiv