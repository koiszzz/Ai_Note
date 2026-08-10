---
published: 2026-08-07
title: "SkillHEX：通过假设驱动自主探索与利用改进智能体技能"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SkillHEX- Improving Agent Skills via Hypothesis-Driven Autonomous Exploration and Exploitation.md"
source_note: "[[信息源/arXiv cs.AI RSS/SkillHEX- Improving Agent Skills via Hypothesis-Driven Autonomous Exploration and Exploitation]]"
source_sha256: 811cd7b51c0f5d4bea9e65a7d7cb7532af83507b133c9d82fee948eae12808fd
original_url: "https://arxiv.org/abs/2608.05628"
processed: 2026-08-07
language: zh-CN
---

# SkillHEX：通过假设驱动自主探索与利用改进智能体技能

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuru Feng, Yaoqi Chen, Beidi Zhao, Qianxi Zhang, Xinjiang Wang, Jianan Lu, Zhirui Wang, Shusen Xu, Zengzhong Li, Qi Chen
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05628)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SkillHEX- Improving Agent Skills via Hypothesis-Driven Autonomous Exploration and Exploitation|查看原始文件]]

## 摘要

- 尽管智能体技能为 LLM 配备可复用程序知识，人工维护饱受高成本、不可扩展与失配之苦；真实部署因此要求测试时自主、按需技能进化，受有限交互预算与缺乏训练或验证集约束。
- 该设置引入严重稀疏奖励挑战，结果混合多个潜在失败原因；此类歧义下，贪婪精炼单一在位技能的现有方法特别易受利用陷阱影响，使早期误诊沿无成效轨迹耗尽有限试验。
- 引入 SkillHEX：耦合假设驱动自验证与证据引导树搜索的闭环框架——将可证伪失败假设转化为可执行测试，产生作为密集奖励的诊断证据而无需额外环境尝试；证据引导对持久技能修订分支的搜索，动态平衡受支持编辑的利用与合理替代的探索。
- 在 SkillsBench 87 个任务上评估，SkillHEX 优于现有自进化方法，在五次迭代预算下用 GPT-5.3-Codex 与 Claude Opus 4.7 分别实现 55.9% 与 57.9% 平均通过率。

## 正文

虽然智能体技能为 LLM 配备可复用的程序知识，人工维护饱受高成本、不可扩展与失配之苦。真实世界的部署因此要求在测试时自主、按需技能进化，受有限交互预算与缺乏训练或验证集的约束。这一设置引入一个严重的稀疏奖励挑战，其中结果混合多个潜在失败原因。在此类歧义下，贪婪精炼单一在位（incumbent）技能的现有方法特别容易陷入利用陷阱（exploitation trap），让早期误诊沿无成效的轨迹耗尽有限的试验。为解决此问题，我们引入 SkillHEX，一个耦合假设驱动自验证（hypothesis-driven self-verification）与证据引导树搜索（evidence-guided tree search）的闭环框架。SkillHEX 将可证伪的失败假设转化为可执行测试，产生作为密集奖励的诊断证据，无需额外环境尝试。该证据引导对持久技能修订分支的搜索，动态平衡受支持编辑的利用与合理替代的探索。在 SkillsBench 的 87 个任务上评估，SkillHEX 优于现有自进化方法，在五次迭代预算下使用 GPT-5.3-Codex 与 Claude Opus 4.7 分别实现 55.9% 与 57.9% 的平均通过率。

## 关键词

#技能进化 #假设驱动 #树搜索 #稀疏奖励
