---
published: 2026-08-07
title: "XEWorld：动作条件化世界模型能泛化到未见机器人具身吗？"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/XEWorld- Can Action-Conditioned World Models Generalize to Unseen Robot Embodiments-.md"
source_note: "[[信息源/arXiv cs.CV RSS/XEWorld- Can Action-Conditioned World Models Generalize to Unseen Robot Embodiments-]]"
source_sha256: ff8c0d4e69685b7573fc940f00d1c91aa808ab8b312c99d794df94bbdde2a183
original_url: "https://arxiv.org/abs/2608.05799"
processed: 2026-08-07
language: zh-CN
---

# XEWorld：动作条件化世界模型能泛化到未见机器人具身吗？

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yixiang Chen, Jiabing Yang, Yuan Xu, Qisen Ma, Keji He, Peiyan Li, Kai Wang, Ziheng He, Xiangnan Wu, Jing Liu, Nianfeng Liu, Yan Huang, Liang Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.RO
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05799)

## 摘要

- 动作条件化世界模型是机器人操作有前景的学习模拟器，但仅在训练机器人上评估无法揭示它们捕捉物理动力学还是仅记忆视觉模式。
- 为回答模型能否忠实渲染从未见过的机器人，引入 XEWorld：受控跨具身测试台，在物理相同场景中评估保留机器人以隔离具身。
- 系统分析揭示共享架构瓶颈：当前模型主要充当 2D 视觉模式匹配器，泛化由视觉相似性而非物理运动学相似性支配；受此局限，它们难以将抽象数值关节动作转为连贯视觉轨迹，且无法从静态初始观测预测动态视觉变化。
- 成功零样本渲染未见具身严格要求深度锚定线索：像素空间动作与显式时空对齐；即使经少样本适配绕过零样本障碍，强制外观恢复触发已见具身的灾难性遗忘；这些失败暴露无法将学习物理动力学应用于新视觉外观，实现真正跨具身泛化需要解耦视觉外观与底层物理动力学的架构创新。

## 正文

动作条件化的世界模型是机器人操作有前景的学习模拟器，然而仅在训练机器人上评估它们，无法揭示它们是否捕捉物理动力学，还是仅仅记忆视觉模式。为回答一个模型能否忠实渲染它从未见过的机器人，研究引入 XEWorld，一个受控的跨具身（cross-embodiment）测试台：通过评估物理相同场景中的保留机器人来隔离具身。系统分析揭示了一个共享的架构瓶颈：当前模型主要充当 2D 视觉模式匹配器，其泛化由视觉相似性而非物理运动学相似性支配。受该局限驱动，它们难以将抽象数值关节动作转化为连贯的视觉轨迹，并且无法从静态初始观测预测动态视觉变化。因此，成功零样本渲染一个未见具身严格需要深度锚定的线索：具体为像素空间动作与显式时空对齐。即使通过少样本适配绕过零样本障碍，强制的外观恢复也会触发已见具身的灾难性遗忘。综合而言，这些失败暴露了将学习到的物理动力学应用于新视觉外观的关键无能，凸显实现真正的跨具身泛化需要解耦视觉外观与底层物理动力学的架构创新。

## 关键词

世界模型、跨具身、机器人、泛化、视觉模式匹配
