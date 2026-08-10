---
published: 2026-08-07
title: "SkillZip：可扩展智能体技能库的契约保持图压缩"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/SkillZip- Contract-Preserving Graph Compression for Scalable Agent Skill Libraries.md"
source_note: "[[信息源/arXiv cs.CL RSS/SkillZip- Contract-Preserving Graph Compression for Scalable Agent Skill Libraries]]"
source_sha256: b49c4c7ca006f6c4743e9c16d1b415fbd91e5081381fec10b026624e003834ee
original_url: "https://arxiv.org/abs/2608.05604"
processed: 2026-08-07
language: zh-CN
---

# SkillZip：可扩展智能体技能库的契约保持图压缩

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Xingyu Tan, Xiaoyang Wang, Qing Liu, Xiwei Xu, Xin Yuan, Liming Zhu, Wenjie Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05604)

## 摘要

- LLM 日益作为智能体，程序性知识存储于可复用技能包并在推理时加载；技能库增长时核心挑战：在有限上下文预算下暴露最小充分可执行上下文。
- 现有系统难以在整技能级以下复用例程、压缩期间保留程序性契约、保持压缩例程可执行可扩展、随技能演化更新压缩库；挑战揭示单元错配：技能作为包检索、作为文本压缩、检索后才转执行图，而可靠复用需要契约承载程序性单元。
- 提出 SkillZip：执行感知程序性抽象框架，在节级图执行契约保持压缩；将反复出现的契约有效模式重写为可逆移植宏，保留边界签名、依赖闭包、验证器可达性与源级扩展。
- 推理时水合紧凑、依赖闭合上下文，仅需要时扩展宏；ReZip 用执行证据集成新技能并修订风险宏；技术与具身智能体基准综合实验：SkillZip 一致优于最强基线最多 12.2 点，实现 3.46 倍压缩比、99.2% 依赖保留与 98.7% 验证器可达性；扩展分析确认 200–100K 技能库稳健检索。

## 正文

大语言模型（LLMs）日益充当智能体，其程序性知识存储在可复用的技能包中，并在推理时加载。随着技能库的增长，一个核心挑战是在有限的上下文预算下暴露最小的充分可执行上下文。现有系统难以在整技能级别以下复用例程、在压缩期间保留程序性契约、保持压缩后的例程可执行且可扩展，以及在技能演化时更新压缩后的库。这些挑战揭示了一个单元错配：技能作为包被检索、作为文本被压缩，并在检索之后才被转换为执行图，而可靠的复用需要一个承载契约（contract-bearing）的程序性单元。研究提出 SkillZip，一个执行感知的程序性抽象框架：在节级（section-level）图上执行契约保持的压缩。SkillZip 将反复出现的契约有效模式重写为可逆的移植宏（ported macros），同时保留边界签名、依赖闭包、验证器可达性与源级扩展。在推理时，它水合一个紧凑、依赖闭合的上下文，并仅在需要时扩展宏。ReZip 进一步使用执行证据集成新技能并修订风险宏。在技术与具身智能体基准上的综合实验表明，SkillZip 一致优于最强基线最多 12.2 点，同时实现 3.46 倍压缩比，99.2% 的依赖保留与 98.7% 的验证器可达性。扩展分析进一步确认了在 200 到 100K 技能库上的稳健检索。

## 关键词

技能库、压缩、契约、图、智能体
