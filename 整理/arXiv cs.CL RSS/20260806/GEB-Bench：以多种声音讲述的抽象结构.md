---
published: 2026-08-06
title: GEB-Bench：以多种声音讲述的抽象结构
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/GEB-Bench- Abstract Structures Told in Many Voices.md
source_note: "[[信息源/arXiv cs.CL RSS/GEB-Bench- Abstract Structures Told in Many Voices]]"
source_sha256: da43f3fb29fd22d0a883669e8d327cc196cd749671aeb7681f2e904014e0ea85
original_url: https://arxiv.org/abs/2608.04111
processed: 2026-08-07
language: zh-CN
---

# GEB-Bench：以多种声音讲述的抽象结构

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04111)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/GEB-Bench- Abstract Structures Told in Many Voices|查看原始文件]]

## 摘要

- 引入 GEB-Bench 基准，以抽象结构母题为基本单位（自指、怪圈、莫比乌斯扭转），每个母题以自然场景、民间故事、数学定理和程序化骨架多种"声音"讲述，表面参数被声明为无关变量且从不计分。
- 评估十二个开源与闭源模型后发现抽象失败是有规律的：模型在单一声音内识别结构远强于跨声音迁移，且这种"识别-映射差距"只在前沿梯队中出现足以缩小的能力。
- 错误与设计的形式几何高度对齐，不同厂商的前沿模型收敛于相同错误答案；表面复杂度对所有读取结构的模型征税，算力只买来余量而非免疫。

## 正文

本文编号：arXiv:2608.04111v1（公告类型：cross），以下为摘要全文翻译。

模型能否看着一个河流三角洲和一道闪电，看出它们共享某种结构？我们引入 GEB-Bench，一个以抽象结构母题（motif）为基本单位的基准——自指、怪圈（strange loop）、莫比乌斯扭转——其精神源自《哥德尔、艾舍尔、巴赫》（Godel, Escher, Bach）。每个母题以多种"声音"讲述：一个构图即该结构的自然场景、一个通过机械可检验的形式装置在讲述中演出该结构的民间故事、一个数学定理，以及一个程序化骨架；表面参数被声明为无关变量且从不计分。母题、声音以及它们之间的结构变化构成一个小型跨模态范畴，GEB-Bench 的任务正是其上的提问。在评估十二个开源与闭源模型后，我们发现抽象失败是有规律的。核心发现是识别与跨声音映射之间的差距：模型在一个声音内识别结构的能力远强于将结构跨声音迁移的能力；每个模型都付出这一代价，而足以缩小差距的映射能力只出现在前沿梯队中。两个模式支持这一结论：错误与设计的形式几何的对齐程度高于与实测感知几何的对齐程度，且来自不同厂商的前沿模型收敛于相同的错误答案；表面复杂度会向每个读取结构的模型征税，算力购买的是余量而非免疫。GEB-Bench 完全可生成，并随流水线一同发布。

## 关键词

#GEB-Bench #抽象结构 #跨模态 #多声音 #模型评估
