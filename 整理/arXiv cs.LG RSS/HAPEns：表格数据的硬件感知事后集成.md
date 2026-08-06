---
title: "HAPEns：表格数据的硬件感知事后集成"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/HAPEns- Hardware-Aware Post-Hoc Ensembling for Tabular Data.md"
source_note: "[[信息源/arXiv cs.LG RSS/HAPEns- Hardware-Aware Post-Hoc Ensembling for Tabular Data.]]"
source_sha256: ececb9d74290128a41518c48200e55d9a6560134dcc9e6a4b49dbfd739fa52fa
original_url: "https://arxiv.org/abs/2603.10582"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# HAPEns：表格数据的硬件感知事后集成

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jannis Maier、Lennart Purucker
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.10582)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/HAPEns- Hardware-Aware Post-Hoc Ensembling for Tabular Data.|查看原始文件]]

## 摘要

- 集成（Ensembling）常用于表格数据机器学习以提升预测性能与鲁棒性，但更大的集成往往带来更高的硬件需求。
- 提出 HAPEns，一个显式在准确率与硬件效率之间取得平衡的事后集成方法；受多目标优化与质量多样性优化启发，HAPEns 沿预测性能与资源使用的帕累托前沿构建多样化集成集合。
- 现有硬件感知事后集成基线不可用，凸显了本方法的创新性。
- 83 个表格分类数据集上的实验显示：HAPEns 显著优于基线，在集成性能与部署成本之间找到更优权衡；消融研究还揭示内存使用是特别有效的目标指标。
- 进一步表明：即使贪心集成算法在此任务上也能通过静态多目标加权获得显著改进。

## 正文

论文编号：arXiv:2603.10582v2（更新类型：replace）。以下为摘要全文翻译。

集成在表格数据机器学习中常用于提升预测性能与鲁棒性，但更大的集成通常会导致硬件需求增加。我们引入 HAPEns，一种显式在准确率与硬件效率之间取得平衡的事后集成方法。受多目标优化与质量多样性优化启发，HAPEns 沿预测性能与资源使用的帕累托前沿构建一个多样化的集成集合。现有的硬件感知事后集成基线并不存在，这凸显了我们方法的创新性。在 83 个表格分类数据集上的实验表明，HAPEns 显著优于基线，为集成性能与部署成本找到更优权衡。消融研究还揭示，内存使用是一个特别有效的目标指标。此外，我们表明，即使是一个贪心集成算法，也能在此任务上通过静态多目标加权获得显著改进。

## 关键词

#集成学习 #表格数据 #多目标优化 #帕累托前沿 #模型部署
