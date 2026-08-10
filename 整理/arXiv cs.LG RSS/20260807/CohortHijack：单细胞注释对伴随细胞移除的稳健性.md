---
published: 2026-08-07
title: "CohortHijack：单细胞注释对伴随细胞移除的稳健性"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CohortHijack- Robustness of Single Cell Annotation to Companion Cell Removal.md"
source_note: "[[信息源/arXiv cs.LG RSS/CohortHijack- Robustness of Single Cell Annotation to Companion Cell Removal]]"
source_sha256: a1129d5f8ec4a2e399c3384519ebb8413753944fa3d069f1642f1d27eae533a9
original_url: "https://arxiv.org/abs/2608.05900"
processed: 2026-08-07
language: zh-CN
---

# CohortHijack：单细胞注释对伴随细胞移除的稳健性

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Arash Vashagh, Yasmin Vashagh
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05900)

## 摘要

- 研究能否在不改变目标细胞的情况下操纵基于邻近细胞或簇级投票的精化注释：引入 CohortHijack 稳健性审计，移除查询队列中的选定非目标细胞，同时保留目标表达谱、基础预测与训练模型。
- 在 PBMC3K 与 Paul15 上用逻辑回归与校准线性 SVM 评估随机与结构化移除法以及贪心、多起始与束搜索；Paul15 上结构化移除一致强于随机移除。
- 多起始搜索改变了 24.33% 线性 SVM 目标与 19.67% 逻辑回归目标，仅移除队列小部分并保持平均附带变化低于 0.4%。
- 消融确认禁用邻域精化后效应消失；CellTypist 多数投票的独立预测不变但精化标签在小量伴随细胞移除后改变。

## 正文

许多单细胞注释工具利用邻近细胞或簇级投票精化初始细胞标签。本文研究这种精化能否在不改变目标细胞的情况下被操纵。研究引入 CohortHijack，一个稳健性审计：从查询队列中移除选定的非目标细胞，同时保留目标表达谱、基础预测与训练模型。研究在 PBMC3K 与 Paul15 上，使用逻辑回归与校准线性 SVM 分类器评估随机与结构化移除方法以及贪心、多起始与束搜索。Paul15 上结构化移除一致强于随机移除。多起始搜索在仅移除队列一小部分并保持平均附带变化低于 0.4% 的情况下，改变了 24.33% 的线性 SVM 目标与 19.67% 的逻辑回归目标。消融确认禁用邻域精化后效应消失。研究还评估了 CellTypist 多数投票：其独立预测在所有评估中保持不变，但精化标签在小量伴随细胞移除后改变。这些发现将查询队列组成识别为单细胞注释中保持目标不变的攻击面。

## 关键词

单细胞注释、稳健性、攻击面、邻域精化、免疫细胞
