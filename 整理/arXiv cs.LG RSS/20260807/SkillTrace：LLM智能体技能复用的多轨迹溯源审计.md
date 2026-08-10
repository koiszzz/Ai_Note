---
published: 2026-08-07
title: "SkillTrace：LLM 智能体技能复用的多轨迹溯源审计"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SkillTrace- Multi-Trace Provenance Auditing for LLM-Agent Skill Reuse.md"
source_note: "[[信息源/arXiv cs.LG RSS/SkillTrace- Multi-Trace Provenance Auditing for LLM-Agent Skill Reuse]]"
source_sha256: 2487c027ba9576e1953c4f832794ea2cfcfd6c458ba7a19a81f6fcf518ae155e
original_url: "https://arxiv.org/abs/2608.05204"
processed: 2026-08-07
language: zh-CN
---

# SkillTrace：LLM 智能体技能复用的多轨迹溯源审计

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Jialuo Chen, Minghe Wang, Lingqi Jiang, Jianan Ma, Xinhao Deng, Xiaohu Du, Ruixiao Lin, Yunhao Feng, Linkang Du, Jingyi Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05204)

## 摘要

- LLM 智能体生态系统围绕可复用技能快速增长：元数据、自然语言指令、代码、工具、参考文献与运营工作流的混合模态包；技能成为市场产物后，审计其复用不再是普通代码克隆检测问题。
- 现有检测器针对单模态源代码或整包相似性，但技能复用证据分布在与作者文本、实现片段与运营结构上，可能漏掉只保留技能一部分的复用。
- 提出 SKILLTRACE：LLM 智能体技能复用的多轨迹溯源审计框架；提取三个溯源轨迹：表达（Expression）、实现（Implementation）与运营（Operational）；运营轨迹表示为技能运营图（SOG），捕捉激活、过程与资源流结构。
- LLM 仅在摄取时协助运营轨迹提取一次；审计时 SKILLTRACE 确定性比较缓存轨迹，对每个轨迹对照同功能严格阴性校准，并报告哪条轨迹支持复用决策；SKILLTRACE-BENCH 上（100 个市场锚点的 820 个变换复用正例与 751 个阴性对照）实现 AUROC 0.938、F1 0.898；36446 技能野外审计显示轨迹归因证据浮现超越仓库级基线的可操作复用审查队列。

## 正文

LLM 智能体生态系统围绕可复用技能快速增长：元数据、自然语言指令、代码、工具、参考文献与运营工作流的混合模态包。随着技能成为市场产物，审计其复用不再与普通代码克隆检测相同。现有检测器针对单模态源代码或整包相似性，然而技能复用证据分布在作者文本、实现片段与运营结构中。因此，它们可能漏掉仅保留技能一部分的复用。研究提出 SKILLTRACE，一个用于 LLM 智能体技能复用的多轨迹溯源审计框架。SKILLTRACE 提取三个溯源轨迹：表达（Expression）、实现（Implementation）与运营（Operational）。它将运营轨迹表示为技能运营图（Skill Operational Graph, SOG），捕捉激活、过程与资源流结构。LLM 仅协助运营轨迹提取——在摄取时一次；审计时，SKILLTRACE 确定性比较缓存的轨迹，对每个轨迹对照同功能严格阴性校准，并报告哪条轨迹支持复用决策。在 SKILLTRACE-BENCH 上，有 100 个市场锚点的 820 个变换复用正例与 751 个阴性对照，SKILLTRACE 实现 AUROC 0.938 与 F1 0.898。36,446 个技能的野外审计进一步显示，轨迹归因证据浮现出超越仓库级基线的可操作复用审查队列。

## 关键词

技能复用、溯源审计、LLM 智能体、运营图、克隆检测
