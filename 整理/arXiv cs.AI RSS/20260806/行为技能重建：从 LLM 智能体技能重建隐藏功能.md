---
published: 20260806
title: "行为技能重建：从 LLM 智能体技能重建隐藏功能"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Behavioral Skill Reconstruction- Reconstructing Hidden Functionality from LLM Agent Skills.md"
source_note: "[[信息源/arXiv cs.AI RSS/Behavioral Skill Reconstruction- Reconstructing Hidden Functionality from LLM Agent Skills]]"
source_sha256: 40bb95e10164a22e207adcef87795aed684d174f60cb7ae062c9d5690e24ceca
original_url: "https://arxiv.org/abs/2608.04192"
processed: 2026-08-06
language: zh-CN

---

# 行为技能重建：从 LLM 智能体技能重建隐藏功能

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Peichun Hua, Haoxuan Xu, Mengyuan Li
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04192)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Behavioral Skill Reconstruction- Reconstructing Hidden Functionality from LLM Agent Skills|查看原始文件]]

## 摘要

- 闭源智能体技能可能编码专有指令、脚本、常量和数据；提供商可作为服务提供能力而隐藏底层包。先前工作聚焦直接披露这些工件的提示注入攻击，现有防御相应旨在防止此类泄露，但防止文件披露并不能防止用户恢复这些文件实现的功能。
- 本文研究行为技能重建（BSR），攻击者使用有效任务请求和观察到的响应构建隐藏技能的功能克隆；引入 SkillClone，一个黑盒攻击，通过从公开广告形成接口假设、发出结构化良性探针、合成可执行副本，并通过对受害技能的差异验证迭代修复来克隆目标技能。
- 跨覆盖规则、表格、程序和算法的 30 个技能，SkillClone 在几个目标的保留输入上实现精确或部分恢复；结果表明仅文件保密不能确保功能保密，防御必须限制普通使用的累积信息泄露。

## 正文

闭源智能体技能可能编码专有指令、脚本、常量和数据。提供商可作为服务提供能力，同时隐藏底层包。先前工作聚焦直接披露这些工件的提示注入攻击，现有防御相应旨在防止此类泄露。然而，防止文件披露并不能防止用户恢复这些文件实现的功能。这提出一个基本问题：用户能否在文件保持隐藏的同时，通过普通使用重建技能的功能？我们研究行为技能重建（BSR），其中攻击者使用有效任务请求和观察到的响应构建隐藏技能的功能克隆。我们引入 SkillClone，一个黑盒攻击，通过从其公开广告形成接口假设、发出结构化良性探针、合成可执行副本，并通过对受害技能的差异验证迭代修复来克隆目标技能。跨覆盖规则、表格、程序和算法的 30 个技能，SkillClone 在几个目标的保留输入上实现精确或部分恢复。迭代重新查询弥合单轮重建遗漏的差距。由于 SkillClone 仅使用合法交互，聚焦披露的防御提供有限覆盖，且较不详细的技能描述提供有限保护。这些结果表明，仅文件保密不能确保功能保密。防御还必须限制普通使用的累积信息泄露。

## 关键词

#智能体技能 #黑盒攻击 #功能重建 #安全 #arXiv