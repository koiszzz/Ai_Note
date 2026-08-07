---
published: 2026-08-06
title: CogniFold：通过认知折叠实现始终在线的主动记忆
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/CogniFold- Always-On Proactive Memory via Cognitive Folding.md
source_note: "[[信息源/arXiv cs.CL RSS/CogniFold- Always-On Proactive Memory via Cognitive Folding]]"
source_sha256: 7a1059f7b2e4bb82cb666924c2bbb10d7d7ae9adfe21b8768d9ed252270c79fe
original_url: https://arxiv.org/abs/2605.13438
processed: 2026-08-07
language: zh-CN
---

# CogniFold：通过认知折叠实现始终在线的主动记忆

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.13438)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/CogniFold- Always-On Proactive Memory via Cognitive Folding|查看原始文件]]

## 摘要

- 提出 CogniFold，一种受大脑启发的"始终在线"代理记忆，持续将碎片化事件流折叠成自涌现的认知结构
- 将互补学习系统（CLS）理论从两层（海马体、新皮层）扩展为三层，加入模拟前额叶皮层的前额叶意图层
- 通过图拓扑自组织实现：结构在流下主动组装、语义相似时合并、过时衰减、关联回忆重连，概念簇密度越过阈值时浮现意图
- CogEval-Bench 显示其记忆结构匹配认知预期，并在八个下游基准（LoCoMo、LongMemEval 等）上表现稳健

## 正文

现有代理记忆仍主要是反应性和基于检索的，缺乏自主将经验组织成持久认知结构的能力。为迈向真正自主的代理，我们引入 CogniFold，一种受大脑启发的"始终在线"代理记忆，专为下一代主动式助手设计。CogniFold 持续将碎片化的事件流折叠成自涌现的认知结构，从传入事件和累积知识中自举出越来越高级的认知。

我们通过将互补学习系统（CLS）理论从两层（海马体、新皮层）扩展为三层，加入一个前额叶意图层来夯实这一基础。通过模拟前额叶皮层作为意图控制和决策的所在，CogniFold 通过图拓扑自组织实现这一目标：认知结构在流下主动组装，语义相似时合并，过时时衰减，通过关联回忆重新链接，并在概念簇密度越过阈值时浮现意图。

我们使用 CogEval-Bench 评估结构形成，证明 CogniFold 独特地产生与认知预期和概念涌现相匹配的记忆结构。此外，在八个下游基准上——两个探测长期对话记忆（LoCoMo、LongMemEval），六个覆盖其他认知领域——我们验证了 CogniFold 同时能在传统记忆任务上表现稳健。我们的代码可在 https://github.com/OpenNorve/CogniFold 获取。

## 关键词

#代理记忆 #主动记忆 #认知结构 #互补学习系统 #CogniFold #arXiv
