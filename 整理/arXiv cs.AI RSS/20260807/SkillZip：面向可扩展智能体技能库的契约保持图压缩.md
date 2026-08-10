---
published: 2026-08-07
title: "SkillZip：面向可扩展智能体技能库的契约保持图压缩"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SkillZip- Contract-Preserving Graph Compression for Scalable Agent Skill Libraries.md"
source_note: "[[信息源/arXiv cs.AI RSS/SkillZip- Contract-Preserving Graph Compression for Scalable Agent Skill Libraries]]"
source_sha256: 3a9a561da8d7ac5d4304b265857568737250b9225af9ed300db9fa8bdef05ef2
original_url: "https://arxiv.org/abs/2608.05604"
processed: 2026-08-07
language: zh-CN
---

# SkillZip：面向可扩展智能体技能库的契约保持图压缩

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xingyu Tan, Xiaoyang Wang, Qing Liu, Xiwei Xu, Xin Yuan, Liming Zhu, Wenjie Zhang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05604)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SkillZip- Contract-Preserving Graph Compression for Scalable Agent Skill Libraries|查看原始文件]]

## 摘要

- 大语言模型（LLM）日益作为智能体运行，其程序知识存储在可复用技能包中并在推理时加载；随着技能库增长，核心挑战是在有限上下文预算下暴露最小充分可执行上下文。
- 现有系统难以在全技能级以下复用例程、压缩时保持程序契约、保持压缩例程可执行与可扩展，以及技能演化时更新压缩库；这些挑战揭示单元失配：技能作为包检索、作为文本压缩、检索后才转换为执行图，而可靠复用需要契约承载程序单元。
- 提出 SkillZip：执行感知程序抽象框架，对章节级图执行契约保持压缩——将反复出现的契约有效模板重写为可逆移植宏，同时保持边界签名、依赖闭包、验证器可达性与源级扩展；推理时水合紧凑、依赖闭合上下文，仅需要时扩展宏；ReZip 用执行证据集成新技能并修订风险宏。
- 技术与具身智能体基准综合实验表明 SkillZip 一致优于最强基线最多 12.2 点，同时实现 3.46 倍压缩比，依赖保持 99.2%、验证器可达性 98.7%；扩展分析确认跨 200 到 10 万技能库稳健检索。

## 正文

大语言模型（LLMs）日益作为智能体运行，其程序知识存储在可复用的技能包中并在推理时加载。随着技能库增长，一个核心挑战是在有限上下文预算下暴露最小的充分可执行上下文。现有系统难以在全技能级以下复用例程，在压缩期间保持程序契约，保持压缩例程可执行与可扩展，并在技能演化时更新压缩库。这些挑战揭示一个单元失配：技能作为包检索、作为文本压缩、检索后才转换为执行图，而可靠的复用需要一个契约承载（contract-bearing）的程序单元。我们提出 SkillZip，一个执行感知的程序抽象框架，对章节级图执行契约保持压缩。SkillZip 将反复出现的契约有效模板重写为可逆移植宏（reversible ported macros），同时保持边界签名、依赖闭包、验证器可达性与源级扩展。推理时，它水合一个紧凑、依赖闭合的上下文，并仅在需要时扩展宏。ReZip 进一步用执行证据集成新技能并修订风险宏。技术与具身智能体基准上的综合实验表明，SkillZip 一致优于最强基线最多 12.2 点，同时实现 3.46 倍压缩比、99.2% 依赖保持与 98.7% 验证器可达性。扩展分析进一步确认跨 200 到 10 万技能库的稳健检索。

## 关键词

#技能库 #契约保持 #图压缩 #智能体
