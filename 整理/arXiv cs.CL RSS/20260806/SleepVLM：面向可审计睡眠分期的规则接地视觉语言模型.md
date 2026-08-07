---
published: 2026-08-06
title: SleepVLM：面向可审计睡眠分期的规则接地视觉语言模型
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/SleepVLM- A Rule-Grounded Vision-Language Model for Auditable Sleep Staging.md
source_note: "[[信息源/arXiv cs.CL RSS/SleepVLM- A Rule-Grounded Vision-Language Model for Auditable Sleep Staging]]"
source_sha256: ee59ebf0761c1b64aab8c29575f61a5fb757328c8220c33f91d95770dc9321f1
original_url: https://arxiv.org/abs/2603.26738
processed: 2026-08-07
language: zh-CN
---

# SleepVLM：面向可审计睡眠分期的规则接地视觉语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.26738)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/SleepVLM- A Rule-Grounded Vision-Language Model for Auditable Sleep Staging|查看原始文件]]

## 摘要

- 自动睡眠分期系统虽已接近人类专家水平，但其黑箱式的预测阻碍了临床采用；现有可解释性方法仍需专家二次解读，无法为单次预测的审计提供直接依据。
- 本文提出可审计睡眠分期任务及模型 SleepVLM：将睡眠分期建模为对渲染后的多导睡眠图（PSG）波形图像的视觉推理，为每个时期输出分期结果、适用的 AASM 规则及可审计的理由。
- 模型采用两阶段训练框架（波形感知预训练 + 规则接地监督微调）；在四个数据集上平均优于现有最优方法，自动 AASM 特征审计显示理由对分期证据覆盖广泛，并发布了专家标注数据集 MASS-EX。

## 正文

睡眠分期对于睡眠评估和疾病诊断至关重要。近年来，自动睡眠分期系统已达到接近人类专家的准确度，但其预测的黑箱特性阻碍了临床采用。现有可解释性方法只能提供对模型行为的局部洞察，其输出仍需要专家重新解读，无法为审计单次预测提供直接依据。为提升可信度，我们提出可审计睡眠分期任务。为求解该任务，我们提出 SleepVLM，一个将睡眠分期建模为对渲染后的多导睡眠图（PSG）波形图像进行视觉推理的视觉语言模型。对每个时期，SleepVLM 输出一个分期结果，连同适用的美国睡眠医学学会（AASM）规则和一段可审计的理由。模型采用两阶段框架训练：先进行波形感知预训练（Waveform-Perceptual Pre-training），再在细粒度与粗粒度标注的混合数据上进行规则接地监督微调（Rule-Grounded Supervised Fine-tuning）。在四个数据集上的实验表明，SleepVLM 平均优于现有最优方法。自动 AASM 特征审计显示，理由对分期决定性证据覆盖广泛，独立专家也验证了其推理质量。为促进进一步研究，我们构建并发布了 MASS-EX，一个带 AASM 规则标注和专家撰写理由的规则接地睡眠分期专家标注数据集。

## 关键词

#睡眠分期 #视觉语言模型 #可审计AI #PSG #AASM #医学AI #可解释性
