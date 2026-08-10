---
published: 2026-08-07
title: "承诺前锁证据：冻结接口退化 LLM 评审者评估"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Evidence Lock Before Commitment- A Frozen Interface Degrades LLM-as-Judge Evaluation.md"
source_note: "[[信息源/arXiv cs.CL RSS/Evidence Lock Before Commitment- A Frozen Interface Degrades LLM-as-Judge Evaluation]]"
source_sha256: 7cd51659307541abc9cd3a653429660fbcfe09173a17511cb0f0d8181d308907
original_url: "https://arxiv.org/abs/2608.05353"
processed: 2026-08-07
language: zh-CN
---

# 承诺前锁证据：冻结接口退化 LLM 评审者评估

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Divyansh Singh
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05353)

## 摘要

- LLM 评审者常被要求在选择候选答案前提取标准与证据；该工作流假设中间记录保留后期裁决所需信息。
- 对推理能力模型，可见字段顺序不揭示内部决策顺序，因此测试可观测替代：一次调用持久化证据并使其成为下一次的排他输入。
- 24,000 次判定（HelpSteer3、FeedbackQA、CoVal）上比较标准成对评审、结构化单次调用评审、两次调用证据锁定与三次调用逐点锁定（Claude Sonnet 4.5 与 GPT-5）。
- 证据锁定相对结构化单次调用评审将与发布人类偏好的一致降低 4–6 个百分点，答案顺序不一致增 8–10 点；逐点锁定也有害，结构化证据引出保持接近标准评审；结果对两个评审者与全部三个数据集成立；持久证据支持可审计性，但决策时不应替代源答案。

## 正文

LLM 评审者常常被要求在选择候选答案之前提取标准与证据。这种工作流假设中间记录保留了后期裁决所需的信息。对于具备推理能力的模型，可见的字段顺序并不揭示内部的决策顺序，因此研究测试一个可观测的替代方案：在一次调用中持久化证据，并使其成为下一次调用的排他输入。在 HelpSteer3、FeedbackQA 与 CoVal 上的 24,000 次判定中，研究比较标准成对评审、结构化单次调用评审、两次调用证据锁定与三次调用逐点锁定，使用 Claude Sonnet 4.5 与 GPT-5。证据锁定相对结构化单次调用评审，将与发布的人类偏好的一致性降低 4 到 6 个百分点，并将答案顺序不一致增加 8 到 10 点。逐点锁定同样有害，而结构化的证据引出保持接近标准评审。该结果对两个评审者与所有三个数据集都成立。持久化的证据可以支持可审计性，但它不应该在决策时替代源答案。

## 关键词

LLM 评审、证据、评估、审计、接口
