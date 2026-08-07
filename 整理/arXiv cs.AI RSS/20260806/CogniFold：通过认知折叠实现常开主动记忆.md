---
published: 20260806
title: "CogniFold：通过认知折叠实现常开主动记忆"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CogniFold- Always-On Proactive Memory via Cognitive Folding.md"
source_note: "[[信息源/arXiv cs.AI RSS/CogniFold- Always-On Proactive Memory via Cognitive Folding]]"
source_sha256: f00608e5d948250b547a27e93dc45e25a277a53d395c1956f904d3b7e66a6905
original_url: "https://arxiv.org/abs/2605.13438"
processed: 2026-08-06
language: zh-CN

---

# CogniFold：通过认知折叠实现常开主动记忆

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Suli Wang, Yiqun Duan, Yu Deng, Rundong Zhao, Dai Shi, Minghua Deng, Chen Chen, Yiqi Wang, Xinliang Zhou
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.13438)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CogniFold- Always-On Proactive Memory via Cognitive Folding|查看原始文件]]

## 摘要

- 现有智能体记忆仍以反应式和检索式为主，缺乏自主将经验组织为持久认知结构的能力；本文引入 CogniFold，一个受大脑启发的「常开」智能体记忆，专为下一代主动助手设计。
- CogniFold 持续将碎片化事件流折叠为自我涌现的认知结构，从进入事件和积累知识自举渐进更高层认知；将互补学习系统（CLS）理论从两层（海马、新皮层）扩展到三层，添加前额叶意图层。
- 通过图拓扑自组织实现：认知结构在流下主动组装、语义相似时合并、过时时衰减、通过联想回忆重新链接，概念簇密度超阈值时浮现意图；在 CogEval-Bench 上展示独特产生匹配认知期望和概念涌现的记忆结构。

## 正文

现有智能体记忆仍以反应式和检索式为主，缺乏自主将经验组织为持久认知结构的能力。为迈向真正自主的智能体，我们引入 CogniFold，一个受大脑启发的「常开」（always-on）智能体记忆，专为下一代主动助手设计。CogniFold 持续将碎片化事件流折叠为自我涌现的认知结构，从进入事件和积累知识自举渐进更高层认知。我们通过将互补学习系统（CLS）理论从两层（海马、新皮层）扩展到三层（添加前额叶意图层）来为此提供基础。模拟前额叶皮层作为意图控制和决策位点，CogniFold 通过图拓扑自组织实现：认知结构在流下主动组装，语义相似时合并，过时时衰减，通过联想回忆重新链接，概念簇密度超阈值时浮现意图。我们使用 CogEval-Bench 评估结构形成，展示 CogniFold 独特地产生匹配认知期望和概念涌现的记忆结构。此外，跨八个下游基准——两个探测长期对话记忆（LoCoMo、LongMemEval）和六个跨越其他认知域——我们验证 CogniFold 在常规记忆任务上同时稳健表现。我们的代码可在此获取：https://github.com/OpenNorve/CogniFold。

## 关键词

#智能体记忆 #主动记忆 #认知结构 #互补学习系统 #arXiv