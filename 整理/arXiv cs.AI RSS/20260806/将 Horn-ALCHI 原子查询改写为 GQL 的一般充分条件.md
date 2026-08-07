---
published: 20260806
title: "将 Horn-ALCHI 原子查询改写为 GQL 的一般充分条件"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A General Sufficient Condition for Rewriting Horn-ALCHI Atomic Queries into GQL.md"
source_note: "[[信息源/arXiv cs.AI RSS/A General Sufficient Condition for Rewriting Horn-ALCHI Atomic Queries into GQL]]"
source_sha256: c3191516c4356c2368e89d8adece6ac93431bae9984613814adbb2d458e70400
original_url: "https://arxiv.org/abs/2608.04945"
processed: 2026-08-06
language: zh-CN

---

# 将 Horn-ALCHI 原子查询改写为 GQL 的一般充分条件

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：David Carral, Calixte Gruson, Quentin Mani\`ere
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04945)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A General Sufficient Condition for Rewriting Horn-ALCHI Atomic Queries into GQL|查看原始文件]]

## 摘要

- ISO 标准 GQL 的出现引入了一种以受控递归扩展一阶逻辑的强大查询语言，引发其应用于本体中介查询（OMQ）评估的问题。
- 本文聚焦于 Horn-ALCHI（一种通常不可一阶改写的表达性描述逻辑）本体上的原子查询 OMQ，引入 DL 自动机这一新形式化，通过事实集上的运行捕获此类 OMQ 的语义。
- 识别出一大类可改写为联合合取双向正则路径查询（UC2RPQs，GQL 的核心片段）的 DL 自动机，产生一大类 GQL 可改写的 Horn-ALCHI OMQ。

## 正文

ISO 标准 GQL 的出现引入了一种强大的查询语言，以受控递归扩展一阶逻辑，这引发了对它应用于本体中介查询（OMQ）评估的适用性的疑问。我们聚焦于由 Horn-ALCHI（一种表达性描述逻辑，通常不可一阶改写）表达的本体上的原子查询组成的 OMQ。为解决此问题，我们引入 DL 自动机，一种新颖的形式化，通过事实集上的运行捕获此类 OMQ 的语义。然后我们识别出一大类可以改写为联合合取双向正则路径查询（UC2RPQs）——GQL 的核心片段——的 DL 自动机。我们的自动机类别依赖于其状态的分层，排除已知会提高复杂性的特定形式的循环依赖。这产生了一大类可 GQL 改写的 Horn-ALCHI OMQ。

## 关键词

#GQL #本体查询 #描述逻辑 #改写 #arXiv