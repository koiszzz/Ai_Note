---
published: 2026-08-07
title: "从体育到安全：MLLM 主动风险推断的基准测试"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/From Sports to Safety- Benchmarking Proactive Risk Inference in MLLMs.md"
source_note: "[[信息源/arXiv cs.CL RSS/From Sports to Safety- Benchmarking Proactive Risk Inference in MLLMs]]"
source_sha256: f90075fd23cd639fc130055d106f7df8d5a6ffbacaf0271c821c858052d6453a
original_url: "https://arxiv.org/abs/2608.05560"
processed: 2026-08-07
language: zh-CN
---

# 从体育到安全：MLLM 主动风险推断的基准测试

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Jiawei Qiu, Yichen Xu, Jianzhe Ma, Mingyang Yu, Wenbin Zhu, Yang Han, Pinzheng Lv, Wenxuan Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05560)

## 摘要

- 及时预判物理危险对现实安全必不可少，但现有 MLLM 评估聚焦有害内容或一般风险，主动物理危险预测未充分探索；体育提供合适测试台：事故原因跨多样伤害维度，事故前时空线索利用与更广安全领域（自动驾驶、跌倒检测）共享的推理能力。
- 引入 SPRINT（体育主动风险推断测试台）：2888 个真实体育视频（2440 事故、448 安全对照）的基准，覆盖 14 项运动与 3 种环境设定；事故视频有早期危险线索、事故时机与层级原因的细粒度标注；安全视频经人工验证无事故，用于诊断提示诱导误报。
- 多样提示与时间窗口下评估 SOTA MLLM 揭示危险敏感性与理解间的尖锐差距：最佳模型信号危险超 95%，识别原因却低于 50%。
- 诊断实验显示显式危险查询即使无危险视频也触发严重误报；当前 MLLM 只表现表面主动安全，缺乏稳定、原因锚定的早期预警；数据与代码将开源。

## 正文

及时预判物理危险对现实世界安全必不可少，然而现有 MLLM 评估聚焦有害内容或一般风险，使主动物理危险预测未获充分探索。体育提供了一个合适的测试台：事故原因跨越多样伤害维度，事故前的时空线索利用与更广安全领域（如自动驾驶与跌倒检测）共享的推理能力。研究引入 SPRINT（Sports Proactive Risk INference Testbed），一个包含 2,888 个真实世界体育视频（2,440 个事故、448 个安全对照）的基准，覆盖 14 项运动与 3 种环境设定。事故视频具有早期危险线索、事故时机与层级原因的细粒度标注；安全视频经人工验证无事故，并用于诊断提示诱导的误报。在多样提示与时间窗口下评估最先进 MLLM，揭示危险敏感性与理解之间的尖锐差距：最佳模型在信号危险方面超过 95%，却在识别其原因方面低于 50%。诊断实验进一步表明，显式危险查询即使在无危险视频上也触发严重误报。这些发现表明，当前 MLLM 仅表现出表面的主动安全，缺乏稳定、原因锚定的早期预警，并强调动态物理环境中可靠主动安全的必要性。数据与代码将在接收后开源。

## 关键词

主动风险推断、MLLM 评估、体育安全、危险预测、基准
