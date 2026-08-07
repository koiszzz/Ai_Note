---
published: 2026-08-06
title: COSMO：基于共识驱动的偏移调制实现无源域适应
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/COSMO- Consensus-Driven Shift Modulation for Source-Free Domain Adaptation.md
source_note: "[[信息源/arXiv cs.CV RSS/COSMO- Consensus-Driven Shift Modulation for Source-Free Domain Adaptation]]"
source_sha256: 0ea2bd925d2a6a25a0bc569abd7c3ec5e41818a64b362e94cf4954016dd63072
original_url: https://arxiv.org/abs/2608.04604
processed: 2026-08-07
language: zh-CN
---

# COSMO：基于共识驱动的偏移调制实现无源域适应

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04604)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/COSMO- Consensus-Driven Shift Modulation for Source-Free Domain Adaptation|查看原始文件]]

## 摘要

- 将 VLM 引导的无源域适应（SFDA）形式化为逐样本可靠性分配问题，提出共识驱动偏移调制（COSMO）
- 用锚定共享共识下的协同适应替代专家到专家的引导：先形成偏向更集中预测的样本特定初始共识，适应过程中基于共识不确定性和训练进度调节共识相对初始锚点的移动幅度
- 在四个基准上与匹配的 VLM 骨干下达到最先进性能，更好平衡保留有效源证据与吸收互补的 VLM 证据

## 正文

无源域适应（source-free domain adaptation，SFDA）在隐私或存储约束下，不使用源数据即将源训练的模型适应无标签目标域，是一种实用的设置。然而，在较大的域偏移下，其自生成的监督可能强化源偏差。预训练视觉-语言模型（vision-language models，VLM）提供互补的语义知识，但源模型和 VLM 的相对可靠性因目标样本而异。现有跨模型引导没有显式考虑这种差异，可能在某些样本上覆盖掉有效的源证据，我们将这种失败称为源证据遗忘（source-derived evidence forgetting）。我们将 VLM 引导的 SFDA 形式化为逐样本可靠性分配问题，并提出共识驱动偏移调制（Consensus-Driven Shift Modulation，COSMO）。COSMO 用锚定共享共识下的协同适应替代专家到专家的引导。它首先形成一个偏向更集中预测的样本特定初始共识。在适应过程中，COSMO 重新聚合两个分支不断演化的证据，并根据共识不确定性和训练进度调节所得共识相对初始锚点的移动幅度。这使得共享监督既保持锚定又具有适应性。在四个基准上，COSMO 在与 VLM 骨干匹配的条件下取得了最先进的性能。进一步分析表明，它更好地平衡了保留有效源证据与吸收互补 VLM 证据之间的关系。

## 关键词

#无源域适应 #视觉语言模型 #共识 #知识蒸馏 #目标域适应
