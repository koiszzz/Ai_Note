---
published: 2026-08-06
title: SleepVLM：面向可审计睡眠分期的规则锚定视觉-语言模型
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/SleepVLM- A Rule-Grounded Vision-Language Model for Auditable Sleep Staging.md
source_note: "[[信息源/arXiv cs.CV RSS/SleepVLM- A Rule-Grounded Vision-Language Model for Auditable Sleep Staging]]"
source_sha256: c59b4e34ea620570538ad674dca5e0f1df19e48465cbd98105a8c74b70e0627b
original_url: https://arxiv.org/abs/2603.26738
processed: 2026-08-07
language: zh-CN
---

# SleepVLM：面向可审计睡眠分期的规则锚定视觉-语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.26738)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/SleepVLM- A Rule-Grounded Vision-Language Model for Auditable Sleep Staging|查看原始文件]]

## 摘要

- 提出"可审计睡眠分期"任务，并给出解决方案 SleepVLM：将睡眠分期建模为对渲染的多导睡眠图（PSG）波形图像的视觉推理。
- 对每个时间段输出分期结果、适用的 AASM 规则和可审计推理依据；采用"波形感知预训练 + 规则锚定监督微调"两阶段训练。
- 在四个数据集上平均性能优于现有最优方法；发布 MASS-EX 专家标注数据集，含 AASM 规则标注与专家撰写的推理依据。

## 正文

睡眠分期对于睡眠评估和疾病诊断至关重要。近年来，自动睡眠分期系统已达到接近人类专家的准确率，但其预测的黑盒特性阻碍了临床采用。现有可解释性方法仅能部分揭示模型行为，其输出仍需要专家重新解读，无法为审计单个预测提供直接依据。为提高可信度，我们提出可审计睡眠分期任务。为求解该任务，我们提出 SleepVLM，一种视觉-语言模型，将睡眠分期建模为对渲染的多导睡眠图（PSG）波形图像的视觉推理。对每个时间段（epoch），SleepVLM 输出分期结果以及适用的美国睡眠医学学会（AASM）规则和可审计的推理依据。模型采用两阶段框架训练：先进行波形感知预训练（Waveform-Perceptual Pre-training），随后在细粒度与粗粒度标注的混合数据上进行规则锚定监督微调（Rule-Grounded Supervised Fine-tuning）。在四个数据集上的实验表明，SleepVLM 在平均性能上优于现有最优方法。自动化 AASM 特征审计显示，其推理依据对分期决定性证据的覆盖广泛，独立专家也验证了其推理质量。为促进进一步研究，我们构建并发布 MASS-EX，一个带有 AASM 规则标注和专家撰写推理依据的规则锚定睡眠分期专家标注数据集。

## 关键词

#睡眠分期 #视觉语言模型 #可解释AI #医疗AI #AASM
