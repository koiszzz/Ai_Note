---
published: 2026-08-07
title: "SkillMemo：面向组合具身操作的专家引导技能记忆框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SkillMemo- Expert-guided Skill Memory Framework for Compositional Embodied Manipulation.md"
source_note: "[[信息源/arXiv cs.AI RSS/SkillMemo- Expert-guided Skill Memory Framework for Compositional Embodied Manipulation]]"
source_sha256: a345f11614aebe590bc18be661da0f99b19bd60fc2a23c7d3b59d8448b42ea43
original_url: "https://arxiv.org/abs/2608.05970"
processed: 2026-08-07
language: zh-CN
---

# SkillMemo：面向组合具身操作的专家引导技能记忆框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Changyuan Wang, Chubin Zhang, Zhenyu Wu, Runhao Li, Angyuan Ma, Ke Chao, Yinan Liang, Xiuwei Xu, Ziwei Wang, Yansong Tang, Jiwen Lu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05970)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SkillMemo- Expert-guided Skill Memory Framework for Compositional Embodied Manipulation|查看原始文件]]

## 摘要

- 具身视觉运动模型（包括扩散策略（DP）与视觉-语言-动作（VLA）模型）在机器人操作基准上展示有前景性能；但其潜力根本受大规模具身轨迹数据集稀缺约束，导致分布外（OOD）场景组合泛化不足、捕获可复用技能结构能力有限。
- 提出基于技能记忆（SkillMemo）框架：隐式将长时程演示分解为潜在原子技能，并将技能级特征集成到动态情景记忆库以解决组合任务。
- 首先引入基于专家引导轨迹分割模块（构建于专家混合（MoE）架构）：隐式将轨迹划分为由学习门控系数表示的不同技能原语；设计技能级情景记忆架构，将紧凑技能表示存储为可检索键值对；推理时记忆库检索最相关技能原语，与模型当前门控分布融合，提供稳健上下文先验精炼动作预测。
- 仿真基准与真实世界操作任务大量实验表明，SkillMemo 一致增强 DP 与 VLA 骨干，实现最先进性能并超越 π₀.₅，对未见任务配置展示强组合泛化。

## 正文

具身视觉运动模型（包括扩散策略（Diffusion Policy，DP）与视觉-语言-动作（Vision-Language-Action，VLA）模型）在机器人操作基准上展示有前景的性能。然而，其潜力从根本上受大规模具身轨迹数据集稀缺的约束，导致分布外（OOD）场景中组合泛化不足，且捕获可复用技能结构的能力有限。为解决这一局限，我们提出基于技能记忆（Skill-Based Memory，SkillMemo）框架，隐式将长时程演示分解为潜在原子技能，并将技能级特征集成到一个动态情景记忆库中，用于解决组合任务。具体而言，我们首先引入一个构建于专家混合（Mixture-of-Experts，MoE）架构的专家引导轨迹分割模块，隐式将轨迹划分为由学习门控系数表示的不同技能原语。我们进一步设计一个技能级情景记忆架构，将紧凑技能表示存储为可检索的键值对。推理期间，记忆库检索最相关的技能原语，随后与模型当前的门控分布融合，提供稳健的上下文先验以精炼动作预测。在仿真基准与真实世界操作任务上的大量实验表明，SkillMemo 一致增强 DP 与 VLA 骨干，实现最先进性能并超越 π₀.₅，同时展示对未见任务配置的强组合泛化。

## 关键词

#具身操作 #技能记忆 #组合泛化 #VLA
