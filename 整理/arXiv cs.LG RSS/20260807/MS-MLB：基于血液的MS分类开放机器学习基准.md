---
published: 2026-08-07
title: "MS-MLB：基于血液的 MS 分类开放机器学习基准"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MS-MLB- An Open Machine Learning Benchmark for Blood-Based MS Classification.md"
source_note: "[[信息源/arXiv cs.LG RSS/MS-MLB- An Open Machine Learning Benchmark for Blood-Based MS Classification]]"
source_sha256: 7685dc931e65dadf030d33ade27a7efaa83a1c5a27d5864ae6f548dc1daba882
original_url: "https://arxiv.org/abs/2608.05196"
processed: 2026-08-07
language: zh-CN
---

# MS-MLB：基于血液的 MS 分类开放机器学习基准

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Adam Simson, Ankush Dutta, Quang Bui
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05196)

## 摘要

- 多发性硬化（MS）经临床评估、磁共振成像、适当时实验室证据与排除更佳解释诊断；血液 RNA 表达数据可能含疾病相关免疫信号，但血液 RNA 分类器不能替代临床诊断。
- 提出 MS-MLB：从全血 RNA 表达数据进行机器学习 MS 研究分类的可复现开放基准；用公开 GSE17048 队列，转为 MS 对健康对照任务，在共享、防泄漏流水线下评估多个算法（研究者无需重新配置即可重跑）。
- 评估含嵌套交叉验证、未触碰分层保留集、bootstrap 置信区间、ROC 与精确率-召回率分析、校准测量与探索性 MS 研究分数。
- 最终基准摘要中梯度提升按保留集 MS 研究分数排名第一：93.83 分、AUC-ROC 0.989、敏感度 0.950、特异度 0.778、F1 0.927、Brier 分数 0.050；据研究所知，MS-MLB 是首个专注于 GSE17048 全血 RNA 表达数据 MS 对健康对照分类、且框架内置外部模型提交路径的开放基准；分数仅供研究比较，未经临床验证。

## 正文

多发性硬化（MS）经临床评估、磁共振成像、适当时的实验室证据以及排除更佳解释来诊断。血液 RNA 表达数据可能含有疾病相关的免疫信号，但血液 RNA 分类器不能被当作临床诊断的替代。本文呈现 MS-MLB（多发性硬化机器学习基准），一个从全血 RNA 表达数据进行机器学习 MS 研究分类的可复现开放基准。MS-MLB 使用公开的 GSE17048 队列，将其转换为 MS 对健康对照任务，并在共享、防泄漏的流水线下评估多个算法，研究者无需重新配置评估即可重跑。评估包括嵌套交叉验证、未触碰的分层保留集、bootstrap 置信区间、ROC 与精确率-召回率分析、校准测量与探索性 MS 研究分数。在最终基准摘要中，梯度提升按保留集上的 MS 研究分数排名第一，MS 研究分数 93.83、AUC-ROC 0.989、敏感度 0.950、特异度 0.778、F1 分数 0.927、Brier 分数 0.050。先前研究已将机器学习应用于 MS 血液转录组数据，包括 PBMC 分期分类与全血诊断特征建模。此处的贡献不同且更窄。据研究所知，MS-MLB 是首个专注于从 GSE17048 全血 RNA 表达数据进行 MS 对健康对照分类、并在框架内构建文档化外部模型提交路径的开放基准。该分数仅供研究比较，未经临床验证。基准见 https://github.com/duckyquang/MS-MLB。

## 关键词

多发性硬化、血液转录组、机器学习基准、分类、GSE17048
