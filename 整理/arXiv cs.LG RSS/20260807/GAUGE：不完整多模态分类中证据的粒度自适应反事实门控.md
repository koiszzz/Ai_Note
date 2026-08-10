---
published: 2026-08-07
title: "GAUGE：不完整多模态分类中证据的粒度自适应反事实门控"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GAUGE- Granularity-Adaptive Counterfactual Gating of Evidence for Incomplete Multimodal Classificati.md"
source_note: "[[信息源/arXiv cs.LG RSS/GAUGE- Granularity-Adaptive Counterfactual Gating of Evidence for Incomplete Multimodal Classificati]]"
source_sha256: f3d87db75a8d505e48b54898dca377dadf4dd6f37a811c4fb8b58b80dd0ab5af
original_url: "https://arxiv.org/abs/2608.05608"
processed: 2026-08-07
language: zh-CN
---

# GAUGE：不完整多模态分类中证据的粒度自适应反事实门控

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yunping Shi, En Yu, Kairui Guo, Jie Lu
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05608)

## 摘要

- 多模态分类通常假设所有模态可用，但真实输入常不完整；插补与动态融合可缓解，但现有方法在粗粒度模态级运行，无法在同一个恢复的模态内保留可靠成分同时抑制误导成分。
- 提出 GAUGE：不完整多模态分类的轻量反事实门控框架：冻结插补器插补缺失模态，观测与恢复输入统一编码为细粒度证据单元。
- 通过预测感知泰勒证据分数，在单次前向-后向传递中对每个单元用参考表征替换的反事实效应评分，映射为连续门并转化为加性注意力对数偏置，进行单元级证据调制而不改变骨干架构。
- 六个基准上优于强基线；泰勒余项理论分析刻画一阶近似相对精确反事实效应的误差。

## 正文

多模态分类通常假设所有模态都可用，但真实世界的输入往往不完整。插补与动态融合可以缓解这种不完整性，但现有方法在粗粒度的模态级别操作，因此无法在同一个恢复的模态内保留可靠成分同时抑制误导成分，损害预测可靠性。为解决该问题，研究提出 GAUGE，一个面向不完整多模态分类的轻量反事实门控框架。GAUGE 首先用冻结插补器插补缺失模态，并将观测与恢复输入统一编码为细粒度证据单元。不是显式干预每个单元，GAUGE 通过预测感知泰勒证据分数，对每个单元用参考表征替换的反事实效应进行评分，全部在单次前向-后向传递中获得。这些分数映射为连续门，并转化为加性注意力对数偏置，进行单元级证据调制而不改变骨干架构。六个基准上的实验表明，GAUGE 在多样不完整输入设定下优于强基线。此外，泰勒余项理论分析刻画一阶近似相对精确反事实效应的误差，确立 GAUGE 是模态不完整下细粒度证据控制的原则性与可扩展框架。

## 关键词

多模态、不完整数据、反事实、门控、分类
