---
published: 2026-08-05
title: "PersonaTrail：通过浏览轨迹评估个性化网络智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PersonaTrail- Benchmarking Personalized Web Agents through Browsing Trails.md"
source_note: "[[信息源/arXiv cs.AI RSS/PersonaTrail- Benchmarking Personalized Web Agents through Browsing Trails]]"
source_sha256: c297aea32787f00df3ec054829fa9dfc6c4d1584b166ed99ffb2bdaca53ab68c
original_url: "https://arxiv.org/abs/2607.20482"
processed: 2026-08-05
language: zh-CN
---

# PersonaTrail：通过浏览轨迹评估个性化网络智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Seungbin Yang、Chaewoon Ki、Dohyun Lee 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.20482)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PersonaTrail- Benchmarking Personalized Web Agents through Browsing Trails|查看原始文件]]

## 摘要

- 引入 PersonaTrail，在受管开放网络环境中运行的个性化网络智能体基准：利用真实浏览轨迹作为用户历史，评估智能体推断用户偏好与从过去浏览会话回忆信息的能力。
- 提出偏好感知上下文记忆（PACMem）：把原始浏览历史分解为两类结构化记忆——总结单个会话的事实记忆与蒸馏重复行为模式的偏好记忆；推理时智能体从这些记忆中检索最相关条目引导个性化导航。
- 实践中的用户常提供规定不足的指令，要求智能体从其原始浏览历史推断缺失上下文；现有基准要么把任务限制为完全显式提示，要么把网络交互历史抽象为简化形式。
- 大量实验显示 PACMem 在两个任务上一致优于现有基于记忆的基线。

## 正文

论文编号：arXiv:2607.20482v2（更新类型：replace）。以下为摘要全文翻译。

大语言模型的近期进展使网络智能体能够自主执行复杂任务。在实践中，用户经常提供规定不足的指令，要求智能体从其原始浏览历史推断缺失的上下文。现有基准未能捕获这种个性化形式，因为它们要么把任务限制为完全显式的提示，要么把网络交互历史抽象为简化形式。为弥合这一差距，我们引入 PersonaTrail，一个在受管开放网络环境中运行的个性化网络智能体基准。通过利用真实的浏览轨迹作为用户历史，PersonaTrail 评估智能体推断用户偏好与从过去浏览会话回忆信息的能力。我们进一步提出偏好感知上下文记忆（PACMem），一个把原始浏览历史分解为两类结构化记忆的框架：总结单个会话的事实记忆，与蒸馏重复行为模式的偏好记忆。推理时，智能体从这些记忆中检索最相关的条目，以引导个性化导航。大量实验表明，PACMem 在两个任务上一致优于现有基于记忆的基线。

## 关键词

#网络智能体 #个性化 #浏览历史 #记忆
