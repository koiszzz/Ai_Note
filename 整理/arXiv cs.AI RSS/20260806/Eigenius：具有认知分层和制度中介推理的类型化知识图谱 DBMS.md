---
published: 20260806
title: "Eigenius：具有认知分层和制度中介推理的类型化知识图谱 DBMS"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Eigenius- A Typed Knowledge-Graph DBMS with Epistemic Stratification and Institution-Mediated Reason.md"
source_note: "[[信息源/arXiv cs.AI RSS/Eigenius- A Typed Knowledge-Graph DBMS with Epistemic Stratification and Institution-Mediated Reason]]"
source_sha256: 2c64d2d463d1df1f6ad95707baabc4e0ed48eca91fcbfab08de572b6eba30c43
original_url: "https://arxiv.org/abs/2608.04457"
processed: 2026-08-06
language: zh-CN

---

# Eigenius：具有认知分层和制度中介推理的类型化知识图谱 DBMS

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hans-Martin Will, Allen L. Brown Jr., Matthew Fuchs
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04457)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Eigenius- A Typed Knowledge-Graph DBMS with Epistemic Stratification and Institution-Mediated Reason|查看原始文件]]

## 摘要

- 随着「AI 科学家」通过模型上下文协议（MCP）驱动研究出现，依赖临时脚本的系统将失败；有状态、互联证据的巨大规模需要基于专用数据库架构的机器可遍历保证。
- Eigenius 是一个开源、类型化知识图谱 DBMS，基于单一前提：回答审计问题（「你知道什么，你的保证是什么？」）需要统一内核；通过紧密耦合类型系统、存储引擎和集成协议，将数据来源变为结构不变量。
- 内核基于三支柱：贯穿核心的依赖类型理论、作为强类型集成边界的制度，以及内容寻址不可变存储层；认知状态（声明/观察/推导/验证）作为严格提交时不变强制；端到端重算已发表 Nature 研究，所有 52 个派生结论从固定数据成立，浮现原研究四个机器检查差异。

## 正文

随着「AI 科学家」通过模型上下文协议（MCP）驱动研究出现，依赖临时脚本的系统将失败。有状态、互联证据的巨大规模需要基于专用数据库架构的机器可遍历保证。Eigenius 是一个开源、类型化知识图谱 DBMS，基于单一前提：回答审计问题（「你知道什么，你的保证是什么？」）需要统一内核。通过紧密耦合类型系统、存储引擎和集成协议，Eigenius 将数据来源（data provenance）变为结构不变量，而非跨子系统边界重构的属性。内核基于三支柱：贯穿核心的依赖类型理论、作为强类型集成边界的制度（institutions），以及内容寻址不可变存储层。在此基础之上，认知状态（声明/观察/推导/验证）作为严格提交时不变量强制执行。跨系统翻译（comorphisms）在提交时检查并直接物化为图中持久、一等资源。为消除 O(N²) 多存储瓶颈，共享链上中间表示（IR）将多系统翻译坍缩为同一性。关键的是，此架构统一科学认识论的两个领域：它依赖论证逻辑（justification logic）用于实证科学，同时嵌入快速进程内术语检查器，安全评估形式数学证明（通过 Lean 4）而无 IPC 开销。在将已发表 Nature 研究从脆弱脚本端到端重算为物化证据图时，所有 52 个派生结论从固定数据成立，浮现原研究四个机器检查差异。

## 关键词

#知识图谱 #数据库 #认知分层 #AI科学家 #arXiv