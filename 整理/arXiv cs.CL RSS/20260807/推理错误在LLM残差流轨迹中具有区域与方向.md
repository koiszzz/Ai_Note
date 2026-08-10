---
published: 2026-08-07
title: "推理错误在 LLM 残差流轨迹中具有区域与方向"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Reasoning Errors Have a Region and a Direction in the Residual-Stream Trajectory of LLMs.md"
source_note: "[[信息源/arXiv cs.CL RSS/Reasoning Errors Have a Region and a Direction in the Residual-Stream Trajectory of LLMs]]"
source_sha256: d9dda71dc5134b3abdace8a500bcc1fd0a2ea922684ded5f7d0a600aec12230f
original_url: "https://arxiv.org/abs/2608.05660"
processed: 2026-08-07
language: zh-CN
---

# 推理错误在 LLM 残差流轨迹中具有区域与方向

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Hamed Damirchi, Ignacio Meza De la Jara, Damith Ranasinghe, Yuhang Liu, Javen Shi
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05660)

## 摘要

- 语言模型日益用于需要可验证推理的任务，可靠区分健全与有缺陷推理成为重要实际问题；近期轨迹基方法在层间残差流位移中寻找信号，捕捉表征变化同时衰减部分稳定的 token 特定信息。
- 位移省略更新源自的状态，而恢复完整状态有重引入易捷径信息之险；识别该权衡并提出三流检测器：结合运动与两个受限位置视图——基于向量量化的粗区域读取器与对归一化多层状态的细方向读取器。
- 该设计恢复足够状态上下文解释运动，而不回到完整状态探测；训练未见推理基准上选择准确率较仅位移 SOTA 提升最多 12%、较单层探测基线提升 21%。
- 虽只在推理基准训练，它也在事实补全与事实验证上超越所比较的每个检测器，将信号置于正确性而非某类推理上；消融显示运动、区域与方向提供互补信号。

## 正文

随着语言模型日益用于需要可验证推理的任务，可靠区分健全推理与有缺陷推理已成为重要的实际问题。近期基于轨迹的方法在层间残差流位移中寻找该信号，位移捕捉表征如何变化，同时衰减一些稳定的 token 特定信息。然而，位移省略了更新源自的状态，而恢复完整状态则冒着重新引入易受捷径影响信息的风险。研究识别该权衡并提出一个三流检测器：将运动与位置的两个受限视图结合——一个基于向量量化的粗区域读取器，与一个在归一化多层状态上的细方向读取器。该设计恢复足够的状态上下文来解释运动，而无需回到完整状态探测。在训练期间未见过的推理基准上，该方法的选择准确率比仅位移的最先进方法提高最多 12%、比单层探测基线提高 21%。虽然只在推理基准上训练，它也能阅读事实补全与事实验证，领先于所比较的每个检测器，这使信号位于正确性上而非某一类推理上。消融进一步显示运动、区域与方向提供互补信号。这些结果表明，推理有效性更适合从状态条件化运动中读取，而非单独从静态状态或去上下文轨迹读取。

## 关键词

推理验证、残差流、LLM 可解释性、轨迹分析、正确性检测
