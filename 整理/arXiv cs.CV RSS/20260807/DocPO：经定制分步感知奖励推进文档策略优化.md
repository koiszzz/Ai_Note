---
published: 2026-08-07
title: "DocPO：经定制分步感知奖励推进文档策略优化"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DocPO- Advancing Document Policy Optimization via Tailored Step-Aware Rewards.md"
source_note: "[[信息源/arXiv cs.CV RSS/DocPO- Advancing Document Policy Optimization via Tailored Step-Aware Rewards]]"
source_sha256: e6b90632236f525eb357c5b9c7d58875bebb37282c9cd98b41f6f1466ffab5b6
original_url: "https://arxiv.org/abs/2608.00536"
processed: 2026-08-07
language: zh-CN
---

# DocPO：经定制分步感知奖励推进文档策略优化

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yunhao Wang, Binghong Wu, Zhenyu Huang, Jiacheng Shi, Shuo Huang, Tinghao Yu, Feng Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.00536)

## 摘要

- 文档解析的强化学习（RL）常依赖基于编辑距离（如树编辑距离）的参考奖励，但在高准确率机制下难优化：此类奖励判别力弱，近正确输出得分非常相似，为困难情形提供有限学习信号。
- 提出分步感知退火（SAA）：即插即用奖励锐化机制，训练期间渐进增加奖励曲率，放大高分样本间的细微质量差异，同时保留早期学习稳定性。
- 基于 SAA 引入 DocPO：带元素特定、基于参考的奖励的文档策略优化框架，由编辑距离信号锚定：文本用归一化字符串编辑距离（NED）、表格用树编辑距离相似度（TEDS）、公式用混合 Rubric+编辑奖励。
- OmniDocBench 与 DocElemHard 实验显示 SAA 一致改进 GRPO 风格 RL 跨文档元素（相对非退火奖励），无需额外人工监督构建奖励。

## 正文

文档解析的强化学习（RL）常依赖基于编辑距离（如树编辑距离）的参考奖励，然而在高准确率机制下仍难优化：此类奖励变得弱判别——接近正确的输出获得非常相似的分数，为困难情形提供有限学习信号。研究提出分步感知退火（Step-Aware Annealing, SAA），一个即插即用奖励锐化机制：训练期间渐进增加奖励曲率，放大高分样本间的细微质量差异，同时保留早期学习的稳定性。基于 SAA，研究引入 DocPO，一个文档策略优化框架，带元素特定、基于参考的奖励，由编辑距离信号锚定：文本用归一化字符串编辑距离（NED）、表格用树编辑距离相似度（TEDS）、公式用混合 Rubric+编辑奖励。OmniDocBench 与 DocElemHard 上的实验表明，SAA 一致改进 GRPO 风格 RL 跨文档元素的性能（相对非退火奖励），且无需为奖励构建额外人工监督。

## 关键词

文档解析、策略优化、奖励锐化、编辑距离、GRPO
