---
published: 20260806
title: "智能体 AI 技能的形式分析与供应链安全"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Formal Analysis and Supply Chain Security for Agentic AI Skills.md"
source_note: "[[信息源/arXiv cs.AI RSS/Formal Analysis and Supply Chain Security for Agentic AI Skills]]"
source_sha256: 03aa2058aad044dca4d9d92f8c34ae2f3d669836fc992e211c4e7af40f5a27d8
original_url: "https://arxiv.org/abs/2603.00195"
processed: 2026-08-06
language: zh-CN

---

# 智能体 AI 技能的形式分析与供应链安全

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Varun Pratap Bhardwaj
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.00195)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Formal Analysis and Supply Chain Security for Agentic AI Skills|查看原始文件]]

## 摘要

- 本文（32 页、5 个带完整证明的定理、68 篇参考文献、开源工具：https://github.com/qualixar/skillfortify）对智能体 AI 技能进行形式分析与供应链安全研究。
- v2 版本更正参考文献（22 条条目的作者列表与所引 arXiv 标识符对应的论文不匹配；全部经 arXiv API 验证并更正，受影响的作者已通知）和三个对照原始来源的外部声明。
- 所有实验对照发布的 v0.6.0 实现重新测量，使用现在已提交仓库的 harness；E1/E2 不变（F1 96.15%），E3 反转为负结果：此语料上信息流分析相对模式匹配不增加检测；可靠性定理的范围显式陈述，不再与零假阳性率混淆。

## 正文

本文（32 页、5 个带完整证明的定理、68 篇参考文献、开源工具：https://github.com/qualixar/skillfortify）对智能体 AI 技能进行形式分析与供应链安全研究。v2 版本更正了参考文献（22 条条目的作者列表与所引 arXiv 标识符对应的论文不匹配；全部经 arXiv API 验证并更正，受影响的作者已通知）和三个对照原始来源的外部声明：MalTool 报告 1,300 个独立和 5,727 个嵌入式恶意工具，而非 6,487；CVE-2026-25253 是通过未验证 gatewayUrl 的身份验证 token 外泄，归功于 depthfirst 并在 2026.1.29 修复，而非通过精心制作的技能包的远程代码执行；ClawHavoc 计数按来源和日期为 341、后 824 和 1,184，而非「超 1,200」。所有实验对照发布的 v0.6.0 实现重新测量，使用现在已提交仓库的 harness。E1/E2 不变（F1 96.15%）。E3 反转为负结果：此语料上信息流分析相对模式匹配不增加检测。可靠性定理的范围被显式陈述，不再与零假阳性率混淆。

## 关键词

#智能体技能 #供应链安全 #形式分析 #安全 #arXiv