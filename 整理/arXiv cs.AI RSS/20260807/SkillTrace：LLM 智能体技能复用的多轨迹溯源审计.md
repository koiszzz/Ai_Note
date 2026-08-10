---
published: 2026-08-07
title: "SkillTrace：LLM 智能体技能复用的多轨迹溯源审计"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SkillTrace- Multi-Trace Provenance Auditing for LLM-Agent Skill Reuse.md"
source_note: "[[信息源/arXiv cs.AI RSS/SkillTrace- Multi-Trace Provenance Auditing for LLM-Agent Skill Reuse]]"
source_sha256: 52877a2be2cbc02b001fe9da09fd6470ef10bc96bad8f7ec2354a023ceb11161
original_url: "https://arxiv.org/abs/2608.05204"
processed: 2026-08-07
language: zh-CN
---

# SkillTrace：LLM 智能体技能复用的多轨迹溯源审计

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jialuo Chen, Minghe Wang, Lingqi Jiang, Jianan Ma, Xinhao Deng, Xiaohu Du, Ruixiao Lin, Yunhao Feng, Linkang Du, Jingyi Wang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05204)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SkillTrace- Multi-Trace Provenance Auditing for LLM-Agent Skill Reuse|查看原始文件]]

## 摘要

- LLM 智能体生态系统正围绕可复用技能快速成长：元数据、自然语言指令、代码、工具、参考与运营工作流的混合模态包；技能成为市场工件后，审计其复用不再与普通代码克隆检测相同。
- 现有检测器针对单模态源代码或整包相似性，但技能复用证据分散在作者文本、实现片段与运营结构；因此它们会漏掉只保留技能一部分的复用。
- 呈现 SKILLTRACE：面向 LLM 智能体技能复用的多轨迹溯源审计框架——提取三条溯源轨迹：表达、实现与运营；将运营轨迹表示为捕获激活、过程与资源流结构的技能运营图（SOG）；LLM 仅在摄取时辅助运营轨迹提取一次；审计时 SKILLTRACE 确定性比较缓存轨迹，对照同功能严格负例校准每条轨迹，并报告哪条轨迹支持复用决策。
- SKILLTRACE-BENCH 上（100 个市场锚点 820 个变换复用正例与 751 个负对照），SKILLTRACE 实现 AUROC 0.938 与 F1 0.898；36,446 技能野生审计进一步表明轨迹归因证据浮出仓库级基线之外的可操作复用审查队列。

## 正文

LLM 智能体生态系统正围绕可复用技能快速成长：元数据、自然语言指令、代码、工具、参考与运营工作流的混合模态包。随着技能成为市场工件，审计它们的复用不再与普通代码克隆检测相同。现有检测器针对单模态源代码或整包相似性，然而技能复用证据分散在作者文本、实现片段与运营结构中。因此，它们会漏掉只保留技能一部分的复用。我们呈现 SKILLTRACE，一个面向 LLM 智能体技能复用的多轨迹溯源（provenance）审计框架。SKILLTRACE 提取三条溯源轨迹：表达（Expression）、实现（Implementation）与运营（Operational）。它将运营轨迹表示为技能运营图（Skill Operational Graph，SOG），捕获激活、过程与资源流结构。LLM 仅在摄取时辅助运营轨迹提取一次；审计时 SKILLTRACE 确定性比较缓存的轨迹，对照同功能严格负例校准每条轨迹，并报告哪条轨迹支持复用决策。在 SKILLTRACE-BENCH 上，含 100 个市场锚点上的 820 个变换复用正例与 751 个负对照，SKILLTRACE 实现 AUROC 0.938 与 F1 0.898。一个 36,446 技能的野生审计进一步表明，轨迹归因的证据浮出了仓库级基线之外的可操作复用审查队列。

## 关键词

#技能复用 #溯源审计 #LLM智能体 #知识产权
