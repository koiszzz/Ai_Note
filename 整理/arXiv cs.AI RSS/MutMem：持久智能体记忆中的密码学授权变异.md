---
title: "MutMem：持久智能体记忆中的密码学授权变异"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MutMem- Cryptographically Authorized Mutation in Persistent Agent Memory.md"
source_note: "[[信息源/arXiv cs.AI RSS/MutMem- Cryptographically Authorized Mutation in Persistent Agent Memory]]"
source_sha256: 327608ddf8469578e9a7b9f57fdb4f6f38d6ccc9e17161c3c2c52563e14269c5
original_url: "https://arxiv.org/abs/2608.02843"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# MutMem：持久智能体记忆中的密码学授权变异

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Walid Saidi
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02843)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MutMem- Cryptographically Authorized Mutation in Persistent Agent Memory|查看原始文件]]

## 摘要

- 提出 MutMem，HOM-AIMOS 持久智能体记忆引擎中的授权变异协议：保留记忆内容，记录带签名的正负结果证据（无基于年龄的过期），把每次非平凡权重变化提交为管家授权转换；每个转换绑定终端来源节点、签名者纪元、量化新旧权重、无分叉前驱与两个域分离的 SHA-256 承诺；Ed25519 验证在数据库写入器与便携验证器中运行。
- 疑似投毒内容保留带签名、可修订的标签，召回时用作信任证据。
- HOM-AIMOS 在 LLM 评判下正确回答 LongMemEval 459/500 问（91.8%）；LoCoMo 上 74.12% 评判准确率，独立上游兼容协议下 58.20 token F1；原生套件通过所有声明的授权、拓扑、篡改、签名者纪元与变异后召回用例，中位签名转换延迟 4.865 毫秒。
- 声明的 N=100 PoisonedRAG 适配中，被攻击的 top-5 披露无注入毒物（0/100；95% Wilson 上界 3.70%），98 个干净阴性目标的诱导目标答案攻击成功率 1/98（1.02%）；预注册四臂消融把检索降低归因于签名存储标签。

## 正文

论文编号：arXiv:2608.02843v1（更新类型：cross）。以下为摘要全文翻译。

持久智能体记忆必须随着后来结果改变早期证据而适配，然而可变的检索权重造成归因问题：审查者必须区分授权适配与数据库篡改。我们提出 MutMem，HOM-AIMOS（一个持久智能体记忆引擎）中的授权变异协议。MutMem 保留记忆内容，记录带签名的正负结果证据（无基于年龄的过期），并把每次非平凡权重变化提交为管家授权（housekeeper-authorized）转换。每个转换绑定一个终端来源节点、签名者纪元、量化后的新旧权重、无分叉前驱与两个域分离的 SHA-256 承诺。Ed25519 验证在数据库写入器与一个便携验证器中运行。被分类为疑似投毒的内容被保留，并带召回用作信任证据的签名、可修订标签。我们评估效用、变异完整性与投毒适配。HOM-AIMOS 在 LLM 评判下正确回答 LongMemEval 的 459/500 问（91.8%）。在 LoCoMo 上，它取得 74.12% 的评判准确率，并在一个独立的上游兼容协议下取得 58.20 的 token F1。一个原生套件通过所有声明的授权、拓扑、篡改、签名者纪元与变异后召回用例；中位签名转换延迟为 4.865 毫秒。在一个声明的 N=100 PoisonedRAG 适配中，被攻击的 top-5 披露中未出现注入毒物（0/100；95% Wilson 上界 3.70%），而 98 个干净阴性目标中的诱导目标答案攻击成功率为 1/98（1.02%）。一个预注册的四臂消融把检索降低归因于签名存储的标签：当认识论策略被绕过时，检索器为 94/100 目标选择毒物，而标签恢复后为 0/100。MutMem 提供完整性、授权、可追溯性与历史连续性的证据；它不确立内容真理性。

## 关键词

#持久记忆 #密码学 #智能体安全 #篡改检测
