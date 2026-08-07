---
published: 20260806
title: "持续多模态 LLM 遗忘的模型合并方法"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Model Merging Approach for Continual MLLM Unlearning.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Model Merging Approach for Continual MLLM Unlearning]]"
source_sha256: 8c549877e4698dbd671f99afe1221bca2e5e7b05c9e005433639b5e14f8b8e61
original_url: "https://arxiv.org/abs/2608.04548"
processed: 2026-08-06
language: zh-CN

---

# 持续多模态 LLM 遗忘的模型合并方法

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuhang Wang, Linlin Zhang, Haoxuan Ji, Xianmin Ye, Zhenxing Niu, Haichang Gao
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04548)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Model Merging Approach for Continual MLLM Unlearning|查看原始文件]]

## 摘要

- 多模态大语言模型（MLLM）遗忘方法被提出用于从训练良好的模型中移除私有、敏感或专有信息，但大多数现有方法是为一次性请求设计的，无法妥善处理持续场景。
- 本文引入持续遗忘合并（MCU），在每次收到新的遗忘请求时将多个一次性遗忘适配器动态合并为统一适配器；通过留一合并分析揭示这些适配器存在强跨任务依赖。
- MCU 将适配器投影到共享表示空间、保留主导方向、抑制过度集中的坐标并重构跨任务依赖，在 ICU-Bench 和 MLLMU-Bench 上取得优越的遗忘效果，同时保留已学知识和通用多模态效用。

## 正文

多模态大语言模型（MLLM）遗忘方法已被提出，用于从训练良好的模型中移除私有、敏感或专有信息。然而，大多数现有 MLLM 遗忘方法是为一次性请求设计的，无法充分处理持续场景，因为重复应用一次性操作会导致累积效用退化、遗忘反弹和保留漂移。我们引入持续遗忘合并（Merging for Continual Unlearning，MCU），一种在每次收到新遗忘请求时将多个一次性遗忘适配器动态合并为统一适配器的方法。通过留一合并分析，我们揭示这些遗忘适配器表现出强烈的跨任务依赖。这种依赖有两种相反的效果：它可以促进跨任务遗忘可迁移性，但也可能引入严重干扰，降低遗忘有效性并损害保留知识。为应对这一挑战，MCU 将适配器投影到共享表示空间，保留其主导方向，抑制过度集中的坐标，并重构跨任务依赖以减轻干扰同时增强可迁移性。在 ICU-Bench 和 MLLMU-Bench 上的实验表明，MCU 在保持保留知识和通用多模态效用的同时，实现了优越的遗忘效果。

## 关键词

#模型遗忘 #多模态LLM #模型合并 #持续学习 #arXiv