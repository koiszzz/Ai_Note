---
published: 2026-08-06
title: GEB-Bench：以多重声音讲述的抽象结构
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/GEB-Bench- Abstract Structures Told in Many Voices.md
source_note: "[[信息源/arXiv cs.CV RSS/GEB-Bench- Abstract Structures Told in Many Voices]]"
source_sha256: b9ddafe5c12b5659f70ac84f58c87900889a2ef453d40a3048995f1c6057c61b
original_url: https://arxiv.org/abs/2608.04111
processed: 2026-08-07
language: zh-CN
---

# GEB-Bench：以多重声音讲述的抽象结构

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04111)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/GEB-Bench- Abstract Structures Told in Many Voices|查看原始文件]]

## 摘要

- 提出 GEB-Bench：以自指、怪圈、莫比乌斯扭转等抽象结构母题为单元、秉承《哥德尔、艾舍尔、巴赫》精神的基准，每个母题以自然场景、民间故事、数学定理和程序化骨架多种"声音"讲述，表面参数不计分
- 评估 12 个开源与专有模型，核心发现是识别与跨声音映射之间存在系统性差距：模型在单声音内识别结构远好于跨声音传递，每个模型都付出这一代价，仅前沿层级模型能缩小差距
- 错误与所设计形式几何的对齐强于与实测感知几何的对齐，不同厂商前沿模型收敛于相同错误；GEB-Bench 完全可生成并随流水线发布

## 正文

模型能否看一眼河流三角洲和一道闪电，就看出它们共享某种结构？我们提出 GEB-Bench，一个以抽象结构母题（abstract structural motif）为单元、秉承《哥德尔、艾舍尔、巴赫》精神的基准——如自指（self-reference）、怪圈（strange loop）、莫比乌斯扭转（Mobius twist）。每个母题以多种"声音"讲述：一个构图即该结构的自然场景、一个以可机械检查的形式装置在叙述中演绎它的民间故事、一个数学定理，以及一个程序化骨架；表面参数被声明为无关变量，且从不评分。母题、声音以及它们之间的结构变化共同构成一个小的跨模态范畴，而 GEB-Bench 的任务就是该范畴上的问题。我们评估了 12 个开源与专有模型，发现抽象失败是有规律的。核心发现是识别（recognition）与跨声音映射（cross-voice mapping）之间存在差距：模型在单一声音内识别结构的表现远好于将其跨声音传递；每个模型都要付出这一代价，而只有前沿层级的模型才出现足以缩小差距的映射能力。两个模式支持这一结论：错误与所设计的形式几何的对齐程度强于与实测感知几何的对齐程度，且来自不同厂商的前沿模型收敛于相同的错误答案；此外，表面复杂度使每个读取结构的模型付出代价，算力购买到的是余量而非免疫。GEB-Bench 完全可生成，并随其流水线一同发布。

## 关键词

#抽象推理 #跨模态 #基准测试 #GEB-Bench
