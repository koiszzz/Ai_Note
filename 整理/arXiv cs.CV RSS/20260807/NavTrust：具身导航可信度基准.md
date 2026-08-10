---
published: 2026-08-07
title: "NavTrust：具身导航可信度基准"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/NavTrust- Benchmarking Trustworthiness for Embodied Navigation.md"
source_note: "[[信息源/arXiv cs.CV RSS/NavTrust- Benchmarking Trustworthiness for Embodied Navigation]]"
source_sha256: 47586fc2215116b376e1c7af5d7d49a42fc80a16a04ecd26b47f3cd26686cec0
original_url: "https://arxiv.org/abs/2603.19229"
processed: 2026-08-07
language: zh-CN
---

# NavTrust：具身导航可信度基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Huaide Jiang, Yash Chaudhary, Yuping Wang, Zehao Wang, Raghav Sharma, Manan Mehta, Yang Zhou, Lichao Sun, Zhiwen Fan, Zhengzhong Tu, Jiachen Li
> - **发布时间**：2026-08-07
> - **分类**：cs.RO
> - **原文**：[打开链接](https://arxiv.org/abs/2603.19229)

## 摘要

- 具身导航两大类别：视觉语言导航（VLN，按自然语言指令导航）与对象目标导航（OGN，导航到指定目标对象）；现有工作主要在名义条件下评估模型性能，忽视真实世界可能出现的损坏。
- 提出 NavTrust：统一基准，系统性地在现实场景损坏输入模态（RGB、深度与指令）并评估其对导航性能的影响。
- 据研究所知，NavTrust 是首个在统一框架中让具身导航智能体暴露于多样 RGB-深度损坏与指令变化的基准。
- 七个最先进方法的评估显示现实损坏下性能大幅退化，凸显关键稳健性差距；系统评估四种缓解策略；基座模型 Uni-NaVid 与 ETPNav 部署于真实移动机器人观察到稳健性提升。

## 正文

具身导航有两大类别：视觉语言导航（Vision-Language Navigation, VLN），智能体通过遵循自然语言指令导航；对象目标导航（Object-Goal Navigation, OGN），智能体导航到指定目标对象。然而，现有工作主要在名义条件下评估模型性能，忽视真实世界环境中出现的潜在损坏。为弥补该差距，研究提出 NavTrust，一个统一基准：在现实场景中系统性损坏输入模态（包括 RGB、深度与指令），并评估其对导航性能的影响。据研究所知，NavTrust 是首个在统一框架中让具身导航智能体暴露于多样 RGB-深度损坏与指令变化的基准。对七个最先进方法的广泛评估揭示现实损坏下显著的性能退化，凸显关键稳健性差距，并为更可信的具身导航系统提供路线图。此外，研究系统评估四种增强对 RGB-深度与指令损坏稳健性的不同缓解策略。基座模型包括 Uni-NaVid 与 ETPNav，研究将其部署在真实移动机器人上并观察到对损坏的稳健性提升。项目网站：https://navtrust.github.io/。

## 关键词

具身导航、视觉语言导航、鲁棒性、损坏、基准
