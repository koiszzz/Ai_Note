---
published: 2026-08-07
title: "无源时间序列预测的不变表征学习与 LLM 中心代理去噪"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Invariant Representation Learning for Source-Free Time Series Forecasting with LLM-Centric Proxy Den.md"
source_note: "[[信息源/arXiv cs.LG RSS/Invariant Representation Learning for Source-Free Time Series Forecasting with LLM-Centric Proxy Den]]"
source_sha256: 65ca53f34cf326d19f51cdeced51eeeeac51e407ebc1002c5675c00bf56c933b
original_url: "https://arxiv.org/abs/2510.05589"
processed: 2026-08-07
language: zh-CN
---

# 无源时间序列预测的不变表征学习与 LLM 中心代理去噪

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Kangjia Yan, Chenxi Liu, Hao Miao, Xinle Wu, Yan Zhao, Chenjuan Guo, Bin Yang
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2510.05589)

## 摘要

- 时间序列数据量跨领域差异大（采集成本高、数据法规）；聚焦无源时间序列预测新问题：将预训练模型从充足源序列适配到稀疏目标序列，无需访问源数据。
- 提出 TimeID 框架，带 LLM 中心代理去噪（受 LLM 强大泛化能力启发）：(1) 双分支不变解纠缠特征学习，经季节-趋势分解强制表征与梯度级不变性；(2) 轻量无参数代理去噪，动态校准 LLM 系统偏差；(3) 知识蒸馏，双向对齐去噪预测与原始目标预测。
- 真实数据集上优于最先进基线，MSE 与 MAE 平均提升 10.7% 与 9.3%。
- 代码公开。

## 正文

有效的时间序列预测支持各种真实应用，受益于移动设备的普及。然而，由于数据采集成本高与数据法规，跨领域的时间序列数据量可能差异显著。为从稀疏数据创造最大价值，本研究聚焦无源时间序列预测（source-free time series forecasting）的新问题：在无法访问源数据的情况下，将预训练模型从充足的源时间序列适配到稀疏的目标时间序列，实现数据保护。为此，研究提出 TimeID，一个带大语言模型（LLM）中心代理去噪的无源时间序列预测框架，灵感来自 LLM 的强大泛化能力。具体地，TimeID 由三个关键组件构成：(1) 双分支不变解纠缠特征学习，通过季节-趋势分解强制表征级与梯度级不变性；(2) 轻量、无参数的代理去噪，动态校准 LLM 的系统偏差；(3) 知识蒸馏，双向对齐去噪预测与原始目标预测。真实世界数据集上的大量实验表明，TimeID 优于最先进基线，平均改善 MSE 与 MAE 各 10.7% 与 9.3%。代码见 https://github.com/decisionintelligence/TimeID。

## 关键词

时间序列预测、无源域适应、LLM、不变表征、知识蒸馏
