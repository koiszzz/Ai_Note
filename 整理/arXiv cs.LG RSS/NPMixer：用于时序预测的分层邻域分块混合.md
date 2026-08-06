---
title: "NPMixer：用于时序预测的分层邻域分块混合"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/NPMixer- Hierarchical Neighboring Patch Mixing for Time Series Forecasting.md"
source_note: "[[信息源/arXiv cs.LG RSS/NPMixer- Hierarchical Neighboring Patch Mixing for Time Series Forecasting.]]"
source_sha256: ca5108d6acd6e91c1889967442ea22edb0709f838b29914a55e16b23e7629079
original_url: "https://arxiv.org/abs/2605.07476"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# NPMixer：用于时序预测的分层邻域分块混合

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jung Min Choi、Vijaya Krishna Yalavarthi、Lars Schmidt-Thieme
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.07476)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/NPMixer- Hierarchical Neighboring Patch Mixing for Time Series Forecasting.|查看原始文件]]

## 摘要

- 多变量时序预测仍是挑战，因为需要同时处理局部时间动力学与跨多变量的全局依赖。
- 提出邻域分块混合器（NPMixer），一个分层架构，具有可学习平稳小波变换：自适应学习滤波器系数，以数据依赖方式把信号分解为趋势与细节成分。
- 框架引入邻域混合块（Neighboring Mixer Block）：在一系列作用于不重叠分块的分层 MLP 层中捕捉局部时间动力学。
- 混合块用 MLP 学习分块内部与分块之间的时间模式，扩展感受野以捕捉多尺度依赖。
- 对高频成分应用通道混合编码器（Channel-Mixing Encoder）学习通道相关性，同时保持底层全局趋势的稳定性。
- 七个基准数据集上的大量实验表明 NPMixer 持续优于最先进模型，在 28 个评估实验设置中的 20 个（71.4%）上取得更好的 MSE 性能。

## 正文

论文编号：arXiv:2605.07476v2（更新类型：replace）。以下为摘要全文翻译。

由于局部时间动力学与跨多个变量的全局依赖的复杂性，多变量时序预测仍然是一个挑战。在本文中，我们提出邻域分块混合器（Neighboring Patching Mixer，NPMixer），一个分层架构，具有可学习的平稳小波变换，自适应学习滤波器系数，以数据依赖的方式把信号分解为趋势与细节成分。我们的框架引入一个邻域混合块（Neighboring Mixer Block），通过一系列作用于不重叠分块的分层 MLP 层捕捉局部时间动力学。具体而言，混合块利用 MLP 学习分块内部与跨分块的时间模式，扩展感受野以捕捉多尺度依赖。一个通道混合编码器（Channel-Mixing Encoder）被应用于高频成分以学习通道相关性，同时保持底层全局趋势的稳定性。在七个基准数据集上的大量实验表明，NPMixer 持续优于最先进的模型，在 28 个评估实验设置中的 20 个（71.4%）上取得更好的 MSE 性能。

## 关键词

#时序预测 #小波变换 #分层架构 #MLP #多变量
