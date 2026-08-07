---
published: 2026-08-06
title: ODRA：利用结构化思维链与动态患者阻抗合成认知行为疗法会谈
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/ODRA- Synthesizing Cognitive Behavioral Therapy Sessions with Structured Chain-Of-Thought and Dynami.md
source_note: "[[信息源/arXiv cs.LG RSS/ODRA- Synthesizing Cognitive Behavioral Therapy Sessions with Structured Chain-Of-Thought and Dynami]]"
source_sha256: fccd16c7f03b0968573c191cf2643a2883760e22917b2552945e7e78e249b4eb
original_url: https://arxiv.org/abs/2608.04524
processed: 2026-08-07
language: zh-CN
---

# ODRA：利用结构化思维链与动态患者阻抗合成认知行为疗法会谈

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04524)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ODRA- Synthesizing Cognitive Behavioral Therapy Sessions with Structured Chain-Of-Thought and Dynami|查看原始文件]]

## 摘要

- 认知行为疗法（CBT）会谈合成面临严格治疗结构与患者阻抗性、不可预测行为的双重需求
- ODRA 框架：扎根于基础 CBT 指南（Beck, 2020）的思维链（CoT）策略合成治疗对话，并加入阻抗编排器缓解患者谄媚
- 自动化与专家评估显示 ODRA 在治疗技能、CBT 对齐、患者行为保真度上显著优于现有方法，持证心理学家在 13 项临床指标中的 12 项偏好 ODRA 会谈
- 在数据集上微调的模型对合作型与阻抗型患者均表现更优，验证显式阻抗建模直接转化为下游临床鲁棒性

## 正文

认知行为疗法（CBT）会谈的合成生成面临两个相互竞争的需求：遵循严格的治疗结构，同时建模真实患者的阻抗性、不可预测行为。现有基于脚本的方法无法捕捉动态的治疗交互，而多智能体方法难以遵循 CBT 的序列结构；两者都遭受谄媚（sycophancy）问题，产生过度顺从的患者，歪曲真实临床场景。在本工作中，我们引入 ODRA，一个新颖的框架，通过扎根于基础 CBT 指南（Beck, 2020）的思维链（Chain-of-Thought, CoT）策略合成治疗对话。ODRA 进一步整合了阻抗编排器（resistance orchestrator）以解决患者谄媚问题，它采用引导技术来激发与其阻抗水平一致的行为。自动化和专家评估表明，ODRA 在治疗技能、CBT 对齐和患者行为保真度上显著优于现有方法，持证心理学家在 13 项临床指标中的 12 项上偏好 ODRA 会谈。此外，在我们的数据集上微调的模型对合作型和阻抗型患者都表现出更优的治疗性能，验证了合成训练数据中显式阻抗建模直接转化为下游临床鲁棒性。

## 关键词

#认知行为疗法 #对话合成 #思维链 #大语言模型 #精神健康
