---
published: 2026-08-06
title: SAFECAST：通过对比集训练与校准实现VLA策略的鲁棒失败检测
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/SAFECAST- Robust Failure Detection for VLA Policies with Contrast-Set Training and Calibration.md
source_note: "[[信息源/arXiv cs.CV RSS/SAFECAST- Robust Failure Detection for VLA Policies with Contrast-Set Training and Calibration]]"
source_sha256: 2c6b2e0a860a1ad80b89ce48e71b1c5761e770acbfde68fc40aa1bcdeac14606
original_url: https://arxiv.org/abs/2608.04246
processed: 2026-08-07
language: zh-CN
---

# SAFECAST：通过对比集训练与校准实现VLA策略的鲁棒失败检测

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04246)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/SAFECAST- Robust Failure Detection for VLA Policies with Contrast-Set Training and Calibration|查看原始文件]]

## 摘要

- 视觉-语言-动作（VLA）策略在部署期分布偏移（杂乱、干扰物、光照变化、新物体、初始状态改变、指令改述）下常失败；隐藏状态风险探针结合函数化共形预测可检测 rollout 失败，但可靠性取决于校准数据与部署条件匹配。
- 提出 SAFECAST，利用对比集扰动改进隐藏状态探针训练与校准，应对部署期偏移。
- 在真实世界 DROID 和 LIBERO 模拟实验的多个 VLM 骨干上，相较 SOTA 基线统计显著提升失败检测 ROC-AUC；视觉和语言对比集扰动并用收益最大，且对比集扰动下模拟到真实校准优于仅用真实 rollout 数据。

## 正文

视觉-语言-动作策略常常在部署期分布偏移下失败，例如杂乱环境、干扰物、光照变化、新颖物体、改变的初始状态和改述的指令。基于隐藏状态的风险探针与函数化共形预测相结合可以检测 rollout 失败，但其可靠性取决于校准数据与部署条件的匹配程度。

我们引入 SAFECAST，利用对比集扰动改进隐藏状态探针的训练与校准，以应对部署期偏移。SAFECAST 在真实世界 DROID 和 LIBERO 模拟实验的多个 VLM 骨干上，相较 SOTA 基线统计显著地提升了失败检测 ROC-AUC 分数。

我们进一步发现，当同时使用视觉和语言对比集扰动增强数据时，SAFECAST 收益最大；并且使用对比集扰动时，模拟到真实的校准能产生比仅使用真实 rollout 数据更好的探针。

## 关键词

#VLA策略 #失败检测 #共形预测 #对比集 #机器人
