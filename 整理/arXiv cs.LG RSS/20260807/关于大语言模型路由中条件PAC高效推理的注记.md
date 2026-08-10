---
published: 2026-08-07
title: "关于大语言模型路由中条件 PAC 高效推理的注记"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/A note on conditional PAC-efficient reasoning in large language model routing.md"
source_note: "[[信息源/arXiv cs.LG RSS/A note on conditional PAC-efficient reasoning in large language model routing]]"
source_sha256: 3f1e94a801cabfbec5d44481e3fb69b0b23a84aba18c6531f2d1c90c2a330164
original_url: "https://arxiv.org/abs/2512.03057"
processed: 2026-08-07
language: zh-CN
---

# 关于大语言模型路由中条件 PAC 高效推理的注记

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Hao Zeng, Bingyi Jing
> - **发布时间**：2026-08-07
> - **分类**：stat.ML
> - **原文**：[打开链接](https://arxiv.org/abs/2512.03057)

## 摘要

- 研究模型路由的无分布风险控制问题，并形式化概率近似正确（PAC）保证下的逐点条件效率。
- 证明逐点条件保证会迫使一个几乎不可能的路由器：在快速模型超过目标损失的几乎所有输入上，必须以不小于 1 减指定误差水平的概率路由给专家模型。
- 提出基于预设条件集族的受限条件形式化与显式路由器，实现有限样本条件有效性。
- 核心洞见：条件化的粒度决定了无分布可靠性能否与计算节省共存——逐点控制过强，而结构化集合式控制可行。

## 正文

本文研究面向模型路由的无分布风险控制问题，动机来自大语言模型推理。研究在概率近似正确（PAC）保证下形式化了逐点条件效率，并证明其会迫使一个几乎不可能的路由器：在快速模型超过目标损失的几乎所有输入处，算法必须以至少 1 减去指定误差水平的概率路由至专家模型。因此，研究引入基于预设条件集族的受限条件形式化，并给出一个显式路由器。该路由器实现有限样本条件有效性，并在分离条件与间隔条件下达到近乎最优的专家使用率。核心洞见是：条件化的水平决定了无分布可靠性能否与计算节省共存——逐点控制过强，而结构化集合式控制仍然可行。

## 关键词

模型路由、PAC 学习、风险控制、无分布保证、LLM 推理
