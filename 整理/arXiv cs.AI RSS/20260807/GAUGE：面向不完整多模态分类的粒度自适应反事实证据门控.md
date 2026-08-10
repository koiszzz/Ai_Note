---
published: 2026-08-07
title: "GAUGE：面向不完整多模态分类的粒度自适应反事实证据门控"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GAUGE- Granularity-Adaptive Counterfactual Gating of Evidence for Incomplete Multimodal Classificati.md"
source_note: "[[信息源/arXiv cs.AI RSS/GAUGE- Granularity-Adaptive Counterfactual Gating of Evidence for Incomplete Multimodal Classificati]]"
source_sha256: 81a53816ef8f623401ae24692ab779529a730119feafe10176ea192ae0d11d25
original_url: "https://arxiv.org/abs/2608.05608"
processed: 2026-08-07
language: zh-CN
---

# GAUGE：面向不完整多模态分类的粒度自适应反事实证据门控

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yunping Shi, En Yu, Kairui Guo, Jie Lu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05608)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GAUGE- Granularity-Adaptive Counterfactual Gating of Evidence for Incomplete Multimodal Classificati|查看原始文件]]

## 摘要

- 多模态分类通常假设所有模态可用，但真实输入常不完整；插补与动态融合可缓解不完整性，但现有方法在粗糙的模态层面操作，无法在同一恢复模态内保留可靠组件同时抑制误导组件，损害预测可靠性。
- 提出 GAUGE：面向不完整多模态分类的轻量反事实门控框架——先用冻结插补器插补缺失模态，将观测与恢复输入统一编码为细粒度证据单元；不显式干预每个单元，而是通过预测感知的泰勒证据分数（单次前向-后向通过获得）对用参考表示替换每个单元的反事实效应打分。
- 分数映射为连续门，转换为加性注意力对数偏置，实现单元级证据调制而不改变骨干架构。
- 六个基准上的实验表明，GAUGE 在多样不完整输入设置下优于强基线；泰勒余项理论分析刻画一阶近似相对精确反事实效应的误差，确立 GAUGE 作为模态不完整下细粒度证据控制的有原则、可扩展框架。

## 正文

多模态分类通常假设所有模态可用，但真实世界的输入往往不完整。插补（imputation）与动态融合可以缓解这种不完整性，但现有方法在粗糙的模态层面操作，因此无法在同一恢复模态内保留可靠组件同时抑制误导组件，损害预测可靠性。为解决该问题，我们提出 GAUGE，一个面向不完整多模态分类的轻量反事实门控框架。GAUGE 首先用冻结插补器插补缺失模态，并将观测与恢复输入统一编码为细粒度证据单元。GAUGE 不显式干预每个单元，而是通过预测感知的泰勒证据分数（prediction-aware Taylor evidence scores）对用参考表示替换每个单元的反事实效应打分，所有这些都在单次前向-后向通过中获得。这些分数被映射为连续门，再转换为加性注意力对数偏置，实现单元级证据调制而不改变骨干架构。跨六个基准的实验表明，GAUGE 在多样不完整输入设置下优于强基线。此外，泰勒余项理论分析刻画了一阶近似相对精确反事实效应的误差，确立 GAUGE 作为模态不完整下细粒度证据控制的有原则且可扩展框架。

## 关键词

#多模态分类 #不完整模态 #反事实门控 #泰勒近似
