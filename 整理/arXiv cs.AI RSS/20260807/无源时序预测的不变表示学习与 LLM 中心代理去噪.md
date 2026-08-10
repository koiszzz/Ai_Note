---
published: 2026-08-07
title: "无源时序预测的不变表示学习与 LLM 中心代理去噪"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Invariant Representation Learning for Source-Free Time Series Forecasting with LLM-Centric Proxy Den.md"
source_note: "[[信息源/arXiv cs.AI RSS/Invariant Representation Learning for Source-Free Time Series Forecasting with LLM-Centric Proxy Den]]"
source_sha256: e96013f31e24bbbc2e7d168e49a4c98a0247e136abf7aef2c143015adbc9389d
original_url: "https://arxiv.org/abs/2510.05589"
processed: 2026-08-07
language: zh-CN
---

# 无源时序预测的不变表示学习与 LLM 中心代理去噪

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Kangjia Yan, Chenxi Liu, Hao Miao, Xinle Wu, Yan Zhao, Chenjuan Guo, Bin Yang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2510.05589)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Invariant Representation Learning for Source-Free Time Series Forecasting with LLM-Centric Proxy Den|查看原始文件]]

## 摘要

- 有效时序预测支撑各种真实应用，受益于移动设备的普及；但由于高数据采集成本与数据法规，跨域时序数据量可能差异巨大。
- 为从稀疏数据中最大化创造价值，研究聚焦无源时序预测新问题：在无法访问源数据的情况下，将来自充足源时序的预训练模型适配到稀疏目标时序，支持数据保护。
- 提出 TimeID：无源时序预测框架，受 LLM 强大泛化能力启发采用大语言模型（LLM）中心代理去噪——包含三个关键组件：①双分支不变解纠缠特征学习，通过季节-趋势分解强制表示与梯度级不变性；②轻量、免参数代理去噪，动态校准 LLM 的系统性偏差；③知识蒸馏，双向对齐去噪预测与原始目标预测。
- 真实数据集上的大量实验表明，TimeID 优于最先进基线，平均 MSE 与 MAE 分别改善 10.7% 与 9.3%；代码见 https://github.com/decisionintelligence/TimeID。

## 正文

有效的时序预测支撑各种真实世界应用，受益于移动设备的普及。然而，由于高数据采集成本与数据法规，跨域时序数据量可能差异显著。为从稀疏数据中最大化创造价值，本研究聚焦一个无源时序预测（source-free time series forecasting）的新问题：在无法访问源数据的情况下，将来自充足源时序的预训练模型适配到稀疏目标时序，从而支持数据保护。为实现这一点，我们提出 TimeID，一个新颖的无源时序预测框架，采用大语言模型（LLM）中心的代理去噪（proxy denoising），其灵感来自 LLM 强大的泛化能力。具体而言，TimeID 包含三个关键组件：（1）双分支不变解纠缠特征学习（dual-branch invariant disentangled feature learning），通过季节-趋势分解强制表示与梯度级不变性；（2）轻量、免参数的代理去噪（proxy denoising），动态校准 LLM 的系统性偏差；（3）知识蒸馏（knowledge distillation），双向对齐去噪预测与原始目标预测。在真实数据集上的大量实验表明，TimeID 优于最先进基线，平均改善 MSE 与 MAE 分别为 10.7% 与 9.3%。代码见 https://github.com/decisionintelligence/TimeID。

## 关键词

#时序预测 #无源域适应 #LLM #不变表示
