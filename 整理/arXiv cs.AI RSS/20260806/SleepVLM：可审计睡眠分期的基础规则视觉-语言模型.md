---
published: 20260806
title: "SleepVLM：可审计睡眠分期的基础规则视觉-语言模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SleepVLM- A Rule-Grounded Vision-Language Model for Auditable Sleep Staging.md"
source_note: "[[信息源/arXiv cs.AI RSS/SleepVLM- A Rule-Grounded Vision-Language Model for Auditable Sleep Staging]]"
source_sha256: 78b25d3bd226e8577991eb17f5035803a5b20b704b882696b5231bf25bb1e7d6
original_url: "https://arxiv.org/abs/2603.26738"
processed: 2026-08-06
language: zh-CN

---

# SleepVLM：可审计睡眠分期的基础规则视觉-语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Guifeng Deng, Pan Wang, Mengfan Niu, Jiquan Wang, Shuying Rao, Junyi Xie, Xi'ang Chen, Sha Zhao, Gang Pan, Wanjun Guo, Tao Li, Haiteng Jiang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.26738)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SleepVLM- A Rule-Grounded Vision-Language Model for Auditable Sleep Staging|查看原始文件]]

## 摘要

- 睡眠分期对睡眠评估和疾病诊断至关重要；近年自动睡眠分期系统达到接近人类专家的准确率，但其预测黑盒性质阻碍临床采用；现有可解释性方法提供部分行为洞察，但输出仍需专家重新解释，且不提供审计个体预测的直接基础。
- 本文提出可审计睡眠分期任务，呈现 SleepVLM，一个将睡眠分期表述为对渲染多导睡眠图（PSG）波形图像的视觉推理的视觉-语言模型：对每个时期，SleepVLM 输出分期以及适用美国睡眠医学学会（AASM）规则和可审计理由。
- 用两阶段框架训练：波形感知预训练后接细粒度和粗粒度标注混合的基础规则监督微调；四个数据集实验显示 SleepVLM 平均优于最先进方法；构建并发布 MASS-EX，带 AASM 规则标注和专家撰写理由的基础规则睡眠分期专家标注数据集。

## 正文

睡眠分期对睡眠评估和疾病诊断至关重要。近年自动睡眠分期系统达到接近人类专家的准确率，但其预测的黑盒性质阻碍临床采用。现有可解释性方法提供部分模型行为洞察，但其输出仍需要专家重新解释，且不提供审计个体预测的直接基础。为改进可信度，我们提出可审计睡眠分期（auditable sleep staging）任务。为解决此任务，我们呈现 SleepVLM，一个将睡眠分期表述为对渲染多导睡眠图（PSG）波形图像的视觉推理的视觉-语言模型。对每个时期，SleepVLM 输出分期以及适用的美国睡眠医学学会（AASM）规则和可审计理由。模型用两阶段框架训练：波形感知预训练（Waveform-Perceptual Pre-training）后接细粒度和粗粒度标注混合的基础规则监督微调（Rule-Grounded Supervised Fine-tuning）。四个数据集实验表明，SleepVLM 平均优于最先进方法。自动 AASM 特征审计显示理由中对分期定义证据的广泛覆盖，独立专家验证其推理质量。为促进进一步研究，我们构建并发布 MASS-EX，一个带 AASM 规则标注和专家撰写理由的基础规则睡眠分期专家标注数据集。

## 关键词

#睡眠分期 #视觉语言模型 #可审计性 #多导睡眠图 #arXiv