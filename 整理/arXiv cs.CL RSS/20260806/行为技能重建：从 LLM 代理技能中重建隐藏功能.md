---
published: 2026-08-06
title: 行为技能重建：从 LLM 代理技能中重建隐藏功能
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Behavioral Skill Reconstruction- Reconstructing Hidden Functionality from LLM Agent Skills.md
source_note: "[[信息源/arXiv cs.CL RSS/Behavioral Skill Reconstruction- Reconstructing Hidden Functionality from LLM Agent Skills]]"
source_sha256: 1fa066fefb3dc26866d4b541c9bab75a12e695f8c5e8a9484d50acb2d4a3596f
original_url: https://arxiv.org/abs/2608.04192
processed: 2026-08-07
language: zh-CN
---

# 行为技能重建：从 LLM 代理技能中重建隐藏功能

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04192)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Behavioral Skill Reconstruction- Reconstructing Hidden Functionality from LLM Agent Skills|查看原始文件]]

## 摘要

- 提出行为技能重建（BSR）：攻击者仅通过合法任务请求与观察到的响应，构建隐藏技能的功能克隆
- 引入 SkillClone 黑盒攻击：从公开宣传形成接口假设、发出结构化良性探测、合成可执行副本，并通过差分验证迭代修复
- 在覆盖规则、表格、程序和算法的 30 项技能上，SkillClone 对多个目标的保留输入实现了精确或部分恢复
- 结论：文件保密本身不保证功能保密，防御必须同时限制正常使用带来的累积信息泄漏

## 正文

闭源代理技能可能编码专有的指令、脚本、常量和数据。提供商可以在隐藏底层软件包的同时，将能力作为服务提供。先前的工作侧重于通过提示注入攻击直接披露这些工件，现有防御也相应地旨在阻止此类泄漏。然而，防止文件披露并不能阻止用户恢复这些文件所实现的功能。这引出了一个根本性问题：在文件保持隐藏的情况下，用户能否通过正常使用重建技能的功能？

我们研究行为技能重建（BSR），即攻击者使用有效的任务请求和观察到的响应，构建隐藏技能的功能克隆。我们引入 SkillClone，一种黑盒攻击，它通过以下方式克隆目标技能：从技能的公开宣传中形成接口假设，发出结构化的良性探测，合成一个可执行副本，并通过针对受害技能的差分验证对其进行迭代修复。在涵盖规则、表格、程序和算法的 30 项技能上，SkillClone 对多个目标的保留输入实现了精确或部分恢复。迭代重查询填补了单轮重建遗漏的空白。

由于 SkillClone 仅使用合法交互，以披露为导向的防御覆盖范围有限，而细节较少的技能描述所提供的保护也有限。这些结果表明，文件保密本身并不能保证功能保密。防御还必须限制正常使用过程中累积的信息泄漏。

## 关键词

#LLM安全 #代理技能 #黑盒攻击 #行为重建 #arXiv
