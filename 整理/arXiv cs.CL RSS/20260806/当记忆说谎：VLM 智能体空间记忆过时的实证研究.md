---
published: 2026-08-06
title: 当记忆说谎：VLM 智能体空间记忆过时的实证研究
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/When Memory Lies- An Empirical Study of Spatial Memory Staleness in VLM Agents.md
source_note: "[[信息源/arXiv cs.CL RSS/When Memory Lies- An Empirical Study of Spatial Memory Staleness in VLM Agents|查看原始文件]]"
source_sha256: 82fa0613800decc6afffcb957b290246d62b68cb7906ff72001c35e98ff970b3
original_url: https://arxiv.org/abs/2608.04574
processed: 2026-08-07
language: zh-CN
---

# 当记忆说谎：VLM 智能体空间记忆过时的实证研究

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04574)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/When Memory Lies- An Empirical Study of Spatial Memory Staleness in VLM Agents|查看原始文件]]

## 摘要

- 记忆增强的 VLM 智能体依赖持久空间知识行动，但环境变化会使知识悄然过时；研究智能体在自信记忆与矛盾观察冲突时的表现
- 使用动态 FrozenLake 测试台，在三个闭源与三个开放权重 VLM 上配对过时检测任务与下游导航任务（文本与图像输入）
- 三大发现：文本可解性不代表视觉锚定（视觉 F1 从 0.887 到 0.067）；信任原始记忆的智能体死亡次数超过无记忆智能体的两倍；审计有帮助但未能弥合差距
- 空间记忆过时应视为安全失败模式，可靠的视觉锚定与冲突下的行动选择是核心开放挑战

## 正文

记忆增强的 VLM 智能体依赖持久化的空间知识采取行动，然而随着环境变化，这些知识会悄然过时。我们追问：当智能体必须在自信的记忆声明与矛盾的观察之间做出调和时会发生什么，以及当前模型能否在冲突演变为与安全相关的错误之前发现它。

我们使用动态 FrozenLake 测试台，将过时检测任务与下游导航任务配对，覆盖三个闭源模型和三个开放权重 VLM，同时采用文本和图像两种输入（1,800 次检测运行，以及四个 LLM 导航器在共享 50 种子规模下共 12,000 个文本模式导航回合）。得到三个发现。

第一，文本可解性并不意味视觉锚定能力：能够可靠地从文本中标记过时条目的模型，在完全相同的网格上视觉 F1 却从 0.887 跨度到 0.067，其中最弱的模型仍不断做出流畅、自信却无视图像的决策。第二，不加审计地消费过时记忆是安全负担：在我们主要的 GPT-4o 设置中，信任原始记忆的智能体死亡次数是完全没有记忆的同类智能体的两倍以上。第三，审计有帮助但无法弥合差距：透明的读取时过滤器在文本模式下消除了大部分安全成本，但在当前网格尺寸下，即使是 oracle 过时标签也未带来进一步的显著增益；而当视觉审计不可靠时，过滤没有产生一致的收益。

综合这些结果，我们把空间记忆过时界定为一种安全失败模式，并将可靠的视觉锚定以及记忆—观察冲突下的行动选择，定位为记忆增强智能体的核心开放挑战。

## 关键词

#VLM #智能体 #空间记忆 #安全 #导航
