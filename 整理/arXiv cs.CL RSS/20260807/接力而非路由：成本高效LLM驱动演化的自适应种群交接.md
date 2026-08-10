---
published: 2026-08-07
title: "接力而非路由：成本高效 LLM 驱动演化的自适应种群交接"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Relay, Don't Route- Adaptive Population Handoff for Cost-Efficient LLM-Driven Evolution.md"
source_note: "[[信息源/arXiv cs.CL RSS/Relay, Don't Route- Adaptive Population Handoff for Cost-Efficient LLM-Driven Evolution]]"
source_sha256: 0cd7d582ecb14e63edd4a449ed45afe73f147341d73112a1daa49031170663bc
original_url: "https://arxiv.org/abs/2608.05651"
processed: 2026-08-07
language: zh-CN
---

# 接力而非路由：成本高效 LLM 驱动演化的自适应种群交接

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Sichun Luo, Yi Huang, Guanzhi Deng, Haibo Wang, Haochen Luo, Lei Li, Zefa Hu, Junlan Feng, Qi Liu
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05651)

## 摘要

- LLM 驱动演化在程序搜索与算法发现显示前景，但长演化运行全程依赖强模型成本高；自然替代是在固定推理预算下组合廉价与强模型。
- 现有方法通常在单个查询或突变步层面分配模型，忽视演化搜索有状态：每个生成候选改变后续突变产生的种群。
- 实证分析 LLM 驱动演化轨迹：搜索进展强烈前置、早期轨迹性能信息丰富但嘈杂、廉价模型以更低成本恢复强模型早期进展的大部分。
- 提出训练免费框架：将预算分配从单个调用转向经自适应种群交接的演化种群；廉价模型在 bandit 调度器分配的短块中探索多条轨迹；Relay Gain（为交接构建的紧凑质量多样候选库边际改进）作为调度器奖励决定何时交接；策展候选初始化共享强模型种群精化；四个基准三个预算下 12 设定 11 个最高平均分，超越竞争基线；有状态搜索中预算分配应围绕种群而非单个调用组织。

## 正文

大语言模型（LLM）驱动的演化在程序搜索与算法发现方面显示出前景，但在漫长的演化运行中全程依赖强模型成本高昂。一个自然的替代方案是在固定推理预算下组合廉价与强模型。然而，现有方法通常在单个查询或突变步骤的层面分配模型，忽视了演化搜索是有状态的（stateful）：每个生成的候选都会改变后续突变所由产生的种群。研究实证分析 LLM 驱动的演化轨迹，发现搜索进展强烈地前置加载（front-loaded），早期轨迹的性能信息丰富但有噪声，且廉价模型以较低成本恢复了强模型所取得早期进展的大部分。受这些发现驱动，研究提出一个训练免费框架：将预算分配从单个调用转向演化中的种群，通过自适应的种群交接（population handoff）。一个廉价模型在由 bandit 调度器分配的短块中探索多条轨迹。Relay Gain——定义为为交接构建的紧凑、质量多样候选库的边际改进——作为调度器奖励，决定何时交接。策展的候选初始化一个共享的强模型种群进行精化。在四个基准与三个预算下，该方法在 12 个设定中的 11 个取得最高平均分，超越竞争基线。结果表明，在有状态搜索中，预算分配应该围绕种群而非单个调用组织。

## 关键词

LLM 驱动演化、种群交接、成本效率、程序搜索、bandit
