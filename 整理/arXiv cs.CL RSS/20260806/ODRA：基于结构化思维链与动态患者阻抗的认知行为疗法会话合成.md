---
published: 2026-08-06
title: ODRA：基于结构化思维链与动态患者阻抗的认知行为疗法会话合成
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/ODRA- Synthesizing Cognitive Behavioral Therapy Sessions with Structured Chain-Of-Thought and Dynami.md
source_note: "[[信息源/arXiv cs.CL RSS/ODRA- Synthesizing Cognitive Behavioral Therapy Sessions with Structured Chain-Of-Thought and Dynami]]"
source_sha256: 3de37a1083fa8701dccff6acac5a9aa275e0228efe5f0c0240d2accfd13b8ff6
original_url: https://arxiv.org/abs/2608.04524
processed: 2026-08-07
language: zh-CN
---

# ODRA：基于结构化思维链与动态患者阻抗的认知行为疗法会话合成

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04524)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/ODRA- Synthesizing Cognitive Behavioral Therapy Sessions with Structured Chain-Of-Thought and Dynami|查看原始文件]]

## 摘要

- ODRA 通过根植于 CBT 指南的思维链（CoT）策略合成治疗对话，并整合阻抗编排器解决患者谄媚问题
- 自动与专家评估显示 ODRA 在治疗技能、CBT 一致性、患者行为保真度上显著优于现有方法
- 在数据集上微调的模型对合作型和阻抗型患者均表现更优，显式阻抗建模可转化为下游临床鲁棒性

## 正文

认知行为疗法（CBT）会话的合成生成面临两个相互竞争的要求：既要遵守严格的治疗结构，又要模拟真实患者抗拒、不可预测的行为。现有的基于脚本的方法无法捕捉动态的治疗交互，而多智能体方法则难以遵循 CBT 的序列化结构；两者都受到谄媚（sycophancy）问题的影响，产生过度顺从的患者，歪曲了真实的临床场景。

在这项工作中，我们提出了 ODRA，一种新的框架，通过根植于基础 CBT 指南（Beck, 2020）的思维链（Chain-of-Thought，CoT）策略来合成治疗对话。ODRA 进一步整合了一个阻抗编排器来解决患者谄媚问题，它采用引导技术来引发与其阻抗水平一致的行为。

自动评估和专家评估表明，ODRA 在治疗技能、CBT 一致性以及患者行为保真度方面显著优于现有方法，持证心理学家在 13 项临床指标中的 12 项上更偏好 ODRA 生成的会话。此外，在我们的数据集上微调的模型在应对合作型和阻抗型患者时均表现出更优的治疗表现，验证了在合成训练数据中显式建模阻抗可直接转化为下游临床鲁棒性。

## 关键词

#ODRA #认知行为疗法 #思维链 #对话合成 #患者阻抗
