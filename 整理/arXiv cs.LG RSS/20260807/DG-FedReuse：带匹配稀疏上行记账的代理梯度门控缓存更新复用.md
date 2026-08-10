---
published: 2026-08-07
title: "DG-FedReuse：带匹配稀疏上行记账的代理梯度门控缓存更新复用"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DG-FedReuse- Proxy-Gradient-Gated Cached-Update Reuse with Matched Sparse Uplink Accounting.md"
source_note: "[[信息源/arXiv cs.LG RSS/DG-FedReuse- Proxy-Gradient-Gated Cached-Update Reuse with Matched Sparse Uplink Accounting]]"
source_sha256: 01c64039ae3e2ce7d5f3ba46eabbd7d06cecf4fe257c3fe9eaf7f4fbf04d1bc1
original_url: "https://arxiv.org/abs/2608.05358"
processed: 2026-08-07
language: zh-CN
---

# DG-FedReuse：带匹配稀疏上行记账的代理梯度门控缓存更新复用

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Rahil Aftab, Vineet Kumar Rakesh, Soumya Mazumdar, Tapas Samanta
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05358)

## 摘要

- 研究 DG-FedReuse：模拟器级机制，当随机头梯度差异代理低于轮次相关阈值时，允许选定客户端贡献年龄衰减的缓存更新；硬缓存年龄上限与最小新鲜客户端配额约束复用。
- 六个图像分类数据集、50 个虚拟客户端、Dirichlet 标签异构（α=0.5）、三种子；90 轮预算下实现 83.36–85.42% 的建模更新数据字段上行节省（匹配 Top-K FedAvg 为 76.88%），种子对齐精度差异 −5.29 至 −0.14 个百分点。
- 对称稠密模型下行敏感性将主要节省降至 41.68–42.71%，相对 Top-K FedAvg 增量增益降至 3.24–4.27 个百分点，说明通信结论依赖记账边界。
- 研究刻画所实现模拟器中的复用规则，不确立无偏泛化、端到端带宽缩减、运行时或能耗节省、更快收敛或优于现有陈旧更新与惰性聚合方法。

## 正文

联邦学习反复承担局部优化与模型更新传输。研究考察 DG-FedReuse，一个模拟器级机制：当随机头梯度差异代理保持在轮次相关阈值以下时，允许选定客户端贡献年龄衰减的缓存更新。硬缓存年龄上限与最小新鲜客户端配额约束复用，而新鲜更新使用自适应逐张量 Top-K 数值字段表示。实验覆盖六个图像分类数据集、50 个虚拟客户端、Dirichlet 标签异构（α=0.5）与三种子。在常见的 90 轮预算下，DG-FedReuse 实现 83.36–85.42% 的建模更新数据字段上行节省，匹配 Top-K FedAvg 为 76.88%；种子对齐的精度差异范围为 −5.29 至 −0.14 个百分点。测试控制检查点下观测到的最佳测试精度仅作为探索性档案证据保留，相对匹配 FedAvg 为 −2.38 至 +0.45 个百分点。对称稠密模型下行敏感性将主要节省降至 41.68–42.71%，相对 Top-K FedAvg 的增量增益降至 3.24–4.27 个百分点，证明通信结论对记账边界的依赖性。研究在实现的模拟器中刻画所提复用规则；不确立无偏泛化、端到端带宽缩减、运行时或能耗节省、更快收敛或优于现有陈旧更新与惰性聚合方法。

## 关键词

联邦学习、缓存复用、通信压缩、Top-K、稀疏上行
