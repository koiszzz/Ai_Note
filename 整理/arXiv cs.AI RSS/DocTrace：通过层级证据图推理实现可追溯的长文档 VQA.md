---
title: "DocTrace：通过层级证据图推理实现可追溯的长文档 VQA"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DocTrace- Towards Traceable Long Document VQA via Hierarchical Evidence Graph Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/DocTrace- Towards Traceable Long Document VQA via Hierarchical Evidence Graph Reasoning]]"
source_sha256: cddc687317ace05d64196e32bc1ea02e5be71163986db98aaa6f8b227387706e
original_url: "https://arxiv.org/abs/2608.03292"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# DocTrace：通过层级证据图推理实现可追溯的长文档 VQA

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Le Xiang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03292)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DocTrace- Towards Traceable Long Document VQA via Hierarchical Evidence Graph Reasoning|查看原始文件]]

## 摘要

- 把长文档视觉问答（LongDocVQA）建模为显式证据图推理问题：提出 DocTrace 层级框架，渐进执行证据定位、结构化文档解析与证据图推理，实现显式证据来源追溯。
- 两阶段训练：联合监督微调（SFT）先初始化证据定位与图推理能力，再以任务特定 GRPO 与专门奖励进一步优化。
- 在 MMLongBench-Doc、LongDocURL 与 SlideVQA 上持续优于开源基线与专有 MLLM；相比 Qwen3-VL-8B-Instruct 骨干，三个基准分别绝对提升 14.4、11.3 与 11.7 分。
- DocTrace 构建带显式节点级来源的可追溯证据图，实现长文档理解中透明、可验证的推理。

## 正文

论文编号：arXiv:2608.03292v1（更新类型：new）。以下为摘要全文翻译。

长文档视觉问答（LongDocVQA）要求多模态大语言模型（MLLM）定位、整合并推理分布在多页中的异构文档元素。现有方法（包括端到端 MLLM、检索增强生成（RAG）流水线和文档智能体）往往缺乏显式机制来表示和验证接地证据如何在推理中逐步组合，既限制答案准确度也限制可追溯性。在本文中，我们把 LongDocVQA 建模为显式证据图推理问题，而非隐式答案预测。为此，我们提出 DocTrace，一个层级框架，渐进执行证据定位、结构化文档解析与证据图推理，以实现显式证据来源追溯。为有效学习这些能力，我们开发两阶段训练框架：联合监督微调（SFT）首先初始化证据定位与图推理能力，随后是带专门奖励的任务特定组相对策略优化（GRPO），进一步优化这些能力。在 MMLongBench-Doc、LongDocURL 与 SlideVQA 上的大量实验表明，DocTrace 一致优于现有开源基线与专有 MLLM。与 Qwen3-VL-8B-Instruct 骨干相比，DocTrace 在三个基准上分别取得 14.4、11.3 与 11.7 分的绝对提升。除有竞争力的性能外，DocTrace 还构建带显式节点级来源的可追溯证据图，为长文档理解实现透明、可验证的推理。

## 关键词

#长文档VQA #证据图 #可追溯推理 #多模态
