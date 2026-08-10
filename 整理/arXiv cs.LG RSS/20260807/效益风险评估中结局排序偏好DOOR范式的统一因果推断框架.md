---
published: 2026-08-07
title: "效益-风险评估中结局排序偏好（DOOR）范式的统一因果推断框架"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/A Unified Causal Inference Framework for the Desirability of Outcome Ranking Paradigm in Benefit-Ris.md"
source_note: "[[信息源/arXiv cs.LG RSS/A Unified Causal Inference Framework for the Desirability of Outcome Ranking Paradigm in Benefit-Ris]]"
source_sha256: 3801dcd467652296248bc0fb6680a24b2032a524f59a3b9c34ff8a7e0a527b03
original_url: "https://arxiv.org/abs/2608.05244"
processed: 2026-08-07
language: zh-CN
---

# 效益-风险评估中结局排序偏好（DOOR）范式的统一因果推断框架

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yuan Feng, Shiyu Shu, Yixin Fang, Ionut Bebu, Toshimitsu Hamasaki, Scott Evans, Guoqing Diao
> - **发布时间**：2026-08-07
> - **分类**：stat.ML
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05244)

## 摘要

- 提出统一的协变量校正因果推断框架，用于估计随机对照试验与观察性研究中的 DOOR 概率。
- 将 DOOR 概率表示为两种治疗策略下边际有序结局分布的双线性泛函，经序贯风险集风险估计条件有序分布，并推导其高效影响函数（EIF）。
- 点估计模拟比较 G-计算、归一化 IPW、AIPW 与 TMLE，TMLE-SL 表现最强、AIPW-SL 次之。
- 交叉拟合下 CVTMLE-SL 在 DOOR 偏差、分布恢复、标准误精度与置信区间覆盖率上整体最优。

## 正文

研究开发了一个统一的协变量校正因果推断框架，用于估计随机对照试验与观察性研究效益-风险评估中的结局排序偏好（DOOR）概率。该框架将 DOOR 概率表示为两种治疗策略下边际有序结局分布的双线性泛函，通过序贯风险集风险估计条件有序分布，并推导出 DOOR 概率的高效影响函数（EIF）。点估计模拟比较了 G-计算、归一化逆概率加权（IPW）、增强 IPW（AIPW）与目标最大似然估计（TMLE），其中干扰函数用广义线性模型或 Super Learner（SL）估计。TMLE-SL 的点估计性能最强且最一致，AIPW-SL 居第二。随后，在重叠度、治疗效应异质性与治疗分配各异的设定下，对 AIPW-SL 与 TMLE-SL 在有/无交叉拟合情况下评估基于 EIF 的推断。CVTMLE-SL 在 DOOR 尺度偏差、底层有序分布恢复、标准误精度与置信区间覆盖率方面整体表现最强。研究用抗菌耐药性领导小组的多重耐药菌网络数据对方法进行了演示。

## 关键词

因果推断、DOOR、效益-风险评估、TMLE、临床统计
