---
published: 20260806
title: "GeoReward：缓解跨市场偏好预测中视觉-语言模型的上下文变量高估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GeoReward- Mitigating Contextual Variable Overestimation in Vision-Language Models for Cross-Market .md"
source_note: "[[信息源/arXiv cs.AI RSS/GeoReward- Mitigating Contextual Variable Overestimation in Vision-Language Models for Cross-Market ]]"
source_sha256: a5c0ae22fb7aedf90e6795dc183a3f04d55497bf1e5d28a016087429daf9c49a
original_url: "https://arxiv.org/abs/2608.04504"
processed: 2026-08-06
language: zh-CN

---

# GeoReward：缓解跨市场偏好预测中视觉-语言模型的上下文变量高估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shuo Liu, Huixiang Cai, Weiru Zhang, Xiaoyi Zeng
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04504)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GeoReward- Mitigating Contextual Variable Overestimation in Vision-Language Models for Cross-Market |查看原始文件]]

## 摘要

- 视觉-语言模型在许多多模态任务中表现出色，但易受微妙而影响深远的失败模式影响：倾向于高估主导视觉-文本线索，同时低估稀疏但决策关键的上下文变量；此问题（称为上下文变量高估 CVE）在预测跨多样地理市场的广告图像偏好等真实应用（如图）中尤为明显。
- 为应对 CVE，先收集真实广告创意及其跨多国点击表现的新的多模态数据集，再引入 GeoReward，一个预测跨多样地理市场广告图像偏好的奖励模型，集成三种专门机制：市场感知检索增强、上下文引导视觉调制、选择性敏感性损失。
- 演示 GeoReward 如何引导 VLM 的 RL 微调，为文生图模型生成背景设计，产生市场感知广告创意；实验验证框架缓解 CVE 并优于现有基线。

## 正文

视觉-语言模型在许多多模态任务中表现出色，但易受微妙而影响深远的失败模式影响：倾向于高估主导视觉-文本线索，同时低估稀疏但决策关键的上下文变量。此问题（我们称为上下文变量高估，Contextual Variable Overestimation，CVE）在预测跨多样地理市场的广告图像偏好等真实世界应用中尤为明显。例如，当 VLM 被要求在两幅为不同国家定制的产品图像间选择时，它常默认一致输出，忽视地面真值区域差异。此坍缩发生是因为普遍的高容量信号（如产品属性和密集图像块）压倒了编码市场特定上下文的少数关键 token。为应对 CVE，我们首先收集真实广告创意及其跨多个国家点击表现的新多模态数据集。然后引入 GeoReward，一个预测跨多样地理市场广告图像偏好的奖励模型。GeoReward 集成三种专门机制：（1）市场感知检索增强，（2）上下文引导视觉调制，（3）选择性敏感性损失。此外，我们演示 GeoReward 如何引导 VLM 的 RL 微调，为文生图模型生成背景设计，产生市场感知广告创意。实验验证我们的框架缓解 CVE 并优于现有基线。本工作不仅诊断 VLM 对主导感知特征的系统性偏差，还为稀疏上下文变量支配决策的应用提供针对性解决方案。

## 关键词

#视觉语言模型 #广告偏好 #市场感知 #奖励模型 #arXiv