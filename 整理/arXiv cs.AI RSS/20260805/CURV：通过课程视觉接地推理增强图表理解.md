---
published: 2026-08-05
title: "CURV：通过课程视觉接地推理增强图表理解"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CURV- Enhancing Chart Understanding Through Curriculum Visual Grounded Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/CURV- Enhancing Chart Understanding Through Curriculum Visual Grounded Reasoning]]"
source_sha256: 2f548b6b07e2285fc5da2ee3d66acdf53ec65c0b8a2b26d62f4f5d7c9112d27c
original_url: "https://arxiv.org/abs/2608.02833"
processed: 2026-08-05
language: zh-CN
---

# CURV：通过课程视觉接地推理增强图表理解

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xuehang Guo 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02833)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CURV- Enhancing Chart Understanding Through Curriculum Visual Grounded Reasoning|查看原始文件]]

## 摘要

- 提出 CURV，课程学习框架：把图表问答（CQA）重构为多步视觉接地推理，每一步通过空间注意力集中协调逻辑推理与动态视觉接地，发展内在视觉推理能力。
- 引入 CCQA 三级课程数据集，支持跨多种图表类型与推理模式的可扩展合成生成。
- 课程系统性地从基础单操作推理推进到复杂的多图表组合任务。
- 实验显示 CURV 相比基线提升最高 20.50%，可泛化到真实世界基准（最高 12.30%）与域外多模态推理任务（最高 10.20%）；代码：https://xhguo7.github.io/CURV/

## 正文

论文编号：arXiv:2608.02833v1（更新类型：cross）。以下为摘要全文翻译。

图表问答（CQA）要求多模态大语言模型（MLLM）整合视觉理解与逻辑推理，但当前模型在准确的视觉接地与连贯的推理链上存在困难。虽然外在的思维链提示与视觉线索能显著提升性能，但当前 MLLM 缺乏内在的视觉接地推理能力，导致感知不准确、推理与视觉证据脱节。为克服这些局限，我们提出 CURV，一个课程学习框架：通过把 CQA 重构为多步视觉接地推理来发展内在视觉推理能力，其中每一步通过空间注意力集中协调逻辑推理与动态视觉接地。为辅助模型学习，我们进一步引入 CCQA，一个三级课程数据集，支持跨多种图表类型与推理模式的可扩展合成生成。我们的课程系统性地从基础单操作推理推进到复杂的多图表组合任务。实验表明，CURV 相比基线提升最高 20.50%，并可泛化到真实世界基准（最高 12.30%）与域外多模态推理任务（最高 10.20%），验证了将视觉推理与动态接地内化以增强图表理解能力的有效性。代码可在 https://xhguo7.github.io/CURV/ 获取。

## 关键词

#图表问答 #课程学习 #视觉接地 #多模态LLM
