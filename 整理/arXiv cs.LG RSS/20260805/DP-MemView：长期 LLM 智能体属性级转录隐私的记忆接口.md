---
published: 2026-08-05
title: "DP-MemView：长期 LLM 智能体属性级转录隐私的记忆接口"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DP-MemView- A Memory Interface for Attribute-Level Transcript Privacy in Long-Term LLM Agents.md"
source_note: "[[信息源/arXiv cs.LG RSS/DP-MemView- A Memory Interface for Attribute-Level Transcript Privacy in Long-Term LLM Agents]]"
source_sha256: 5895d29afec2317f37ccc202ff3ce63e76101124caefbb53593d9e5a605c567d
original_url: "https://arxiv.org/abs/2608.03130"
processed: 2026-08-05
language: zh-CN
---

# DP-MemView：长期 LLM 智能体属性级转录隐私的记忆接口

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jong Wook Kim、Byoungjae Min、Kennedy Edemacu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03130)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DP-MemView- A Memory Interface for Attribute-Level Transcript Privacy in Long-Term LLM Agents|查看原始文件]]

## 摘要

- 形式化威胁为自适应转录隐私，提出 DP-MemView，差分隐私接口：私密选择公开响应条件化视图，并把视图（而非原始记忆）暴露给响应 LLM——每次私密选择对记忆组与读取集相交的每个受保护属性收费；逐属性账本阻止任何超限选择并返回固定通用视图。
- 长期记忆使 LLM 智能体持久个性化，但重复记忆条件化响应可累积揭示受保护属性，即使从未显式陈述。
- 显式接口契约下证明整个自适应转录的纯 B_a-DP；扩展结果到跨多个受保护组不同的存储，并界定观察转录可改变对手先验几率多少。
- 三种响应 LLM 上评估在线与预分配模式（受控相邻存储基准与公开语料迁移轨道）：两种模式保持转录可区分性接近偶然，同时保留目标所需个性化与整体响应质量；进一步诊断显示移除关键保障导致输出支撑错配、缺失账本收费、泄露侧信道或增长的长视界泄漏。

## 正文

论文编号：arXiv:2608.03130v1（更新类型：cross）。以下为摘要全文翻译。

长期记忆使 LLM 智能体能够持久个性化，但重复的、记忆条件化的响应可以累积揭示受保护的属性，即使这些属性从未被显式陈述。我们把这个威胁形式化为自适应转录隐私（adaptive transcript privacy），并引入 DP-MemView，一个差分隐私接口：私密选择公开的、响应条件化的视图，并把那些视图——而非原始记忆——暴露给响应 LLM。每次私密选择都会对记忆组与读取集相交的每个受保护属性收费。逐属性账本阻止任何超过其上限的选择，并改为返回一个固定的通用视图。在一个显式接口契约下，我们证明整个自适应转录的纯 B_a-DP。我们还将结果扩展到跨多个受保护组不同的存储，并界定观察转录可以改变对手先验几率多少。我们在一个受控相邻存储基准与一个公开语料迁移轨道上、用三个响应 LLM 评估在线与预分配两种模式。两种模式都保持转录可区分性接近偶然，同时保留目标所需的个性化与整体响应质量。进一步的诊断表明，移除关键保障会导致输出支撑错配、缺失账本收费、泄露侧信道或增长的长视界泄漏。

## 关键词

#差分隐私 #长期记忆 #LLM智能体 #转录隐私
