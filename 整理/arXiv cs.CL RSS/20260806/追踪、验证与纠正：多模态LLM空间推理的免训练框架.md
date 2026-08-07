---
published: 2026-08-06
title: 追踪、验证与纠正：多模态 LLM 空间推理的免训练框架
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Trace, Verify, and Correct- A Training-Free Framework for Spatial Reasoning in Multimodal LLMs.md
source_note: "[[信息源/arXiv cs.CL RSS/Trace, Verify, and Correct- A Training-Free Framework for Spatial Reasoning in Multimodal LLMs]]"
source_sha256: 547aa662685de0152fcd06b3b38d28c28da810160e2117f0973e1953d9809a31
original_url: https://arxiv.org/abs/2608.04759
processed: 2026-08-07
language: zh-CN
---

# 追踪、验证与纠正：多模态 LLM 空间推理的免训练框架

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04759)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Trace, Verify, and Correct- A Training-Free Framework for Spatial Reasoning in Multimodal LLMs|查看原始文件]]

## 摘要

- 多模态大语言模型（MLLM）进展显著，但其空间推理可能产生与输入图像不一致的中间判断，使错误沿推理链传播并影响最终答案
- 现有方法主要通过训练或额外空间信息改进空间推理，未考虑推理过程本身是否忠于模型输入；研究显示不忠实的推理链会显著降低最终答案准确率
- 提出模块化、免训练的空间推理验证与纠正框架：构建空间证据图（SEG），将思维链推理中抽取的原子空间证据与视觉实体、空间关系、来源步骤和视觉证据相关联
- 空间证据可靠性评估（SERA）基于对象存在性、定位和几何测量评估视觉证据的可靠性；框架识别出与可靠视觉证据相矛盾的最早空间证据单元，并引导原 MLLM 修正后续推理与最终答案
- 在 15 个模型-数据集设置上平均准确率达 68.94%，平均优于对比基线 8.55 个百分点；代码将开源

## 正文

尽管多模态大语言模型（MLLM）取得了长足进步，其空间推理仍可能产生与输入图像不一致的中间判断，使错误沿推理链传播并影响最终答案。现有方法主要通过训练或额外的空间信息来改进空间推理，而没有考虑推理过程本身是否忠实于模型输入。我们的研究表明，不忠实的推理链会显著降低最终答案的准确率。为解决这一问题，我们提出了一个模块化且免训练的空间推理验证与纠正框架。该框架构建空间证据图（Spatial Evidence Graph, SEG），将思维链推理中抽取出的原子空间证据与视觉实体、空间关系、来源步骤和视觉证据相关联。空间证据可靠性评估（Spatial Evidence Reliability Assessment, SERA）基于对象存在性、定位和几何测量来评估视觉证据的可靠性。随后，框架识别出与可靠视觉证据相矛盾的最早空间证据单元，并引导原 MLLM 修正后续推理与最终答案。在 15 个模型-数据集设置上，我们的方法取得了 68.94% 的平均准确率，平均优于对比基线 8.55 个百分点。我们的代码将开源。

## 关键词

#空间推理 #多模态大语言模型 #思维链 #免训练 #证据图 #视觉验证 #arXiv
